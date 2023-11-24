/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.110.1
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

const cesium = require('cesium');
const pako = require('pako');


// packages/engine/Source/Core/decodeGoogleEarthEnterpriseData.js
var compressedMagic = 1953029805;
var compressedMagicSwap = 2917034100;

function decodeGoogleEarthEnterpriseData(key, data) {
    if (decodeGoogleEarthEnterpriseData.passThroughDataForTesting) {
        return data;
    }
    // Check_default.typeOf.object("key", key);
    // Check_default.typeOf.object("data", data);
    const keyLength = key.byteLength;
    if (keyLength === 0 || keyLength % 4 !== 0) {
        throw new RuntimeError.RuntimeError(
            "The length of key must be greater than 0 and a multiple of 4."
        );
    }
    const dataView = new DataView(data);
    const magic = dataView.getUint32(0, true);
    if (magic === compressedMagic || magic === compressedMagicSwap) {
        return data;
    }
    const keyView = new DataView(key);
    let dp = 0;
    const dpend = data.byteLength;
    const dpend64 = dpend - dpend % 8;
    const kpend = keyLength;
    let kp;
    let off = 8;
    while (dp < dpend64) {
        off = (off + 8) % 24;
        kp = off;
        while (dp < dpend64 && kp < kpend) {
            dataView.setUint32(
                dp,
                dataView.getUint32(dp, true) ^ keyView.getUint32(kp, true),
                true
            );
            dataView.setUint32(
                dp + 4,
                dataView.getUint32(dp + 4, true) ^ keyView.getUint32(kp + 4, true),
                true
            );
            dp += 8;
            kp += 24;
        }
    }
    if (dp < dpend) {
        if (kp >= kpend) {
            off = (off + 8) % 24;
            kp = off;
        }
        while (dp < dpend) {
            dataView.setUint8(dp, dataView.getUint8(dp) ^ keyView.getUint8(kp));
            dp++;
            kp++;
        }
    }
}

decodeGoogleEarthEnterpriseData.passThroughDataForTesting = false;
var decodeGoogleEarthEnterpriseData_default = decodeGoogleEarthEnterpriseData;

// packages/engine/Source/Core/isBitSet.js
function isBitSet(bits, mask) {
    return (bits & mask) !== 0;
}

var isBitSet_default = isBitSet;

// packages/engine/Source/Core/GoogleEarthEnterpriseTileInformation.js
var childrenBitmasks = [1, 2, 4, 8];
var anyChildBitmask = 15;
var cacheFlagBitmask = 16;
var imageBitmask = 64;
var terrainBitmask = 128;

function GoogleEarthEnterpriseTileInformation(bits, cnodeVersion, imageryVersion, terrainVersion, imageryProvider, terrainProvider) {
    this._bits = bits;
    this.cnodeVersion = cnodeVersion;
    this.imageryVersion = imageryVersion;
    this.terrainVersion = terrainVersion;
    this.imageryProvider = imageryProvider;
    this.terrainProvider = terrainProvider;
    this.ancestorHasTerrain = false;
    this.terrainState = void 0;
}

GoogleEarthEnterpriseTileInformation.clone = function (info, result) {
    if (!defined_default(result)) {
        result = new GoogleEarthEnterpriseTileInformation(
            info._bits,
            info.cnodeVersion,
            info.imageryVersion,
            info.terrainVersion,
            info.imageryProvider,
            info.terrainProvider
        );
    } else {
        result._bits = info._bits;
        result.cnodeVersion = info.cnodeVersion;
        result.imageryVersion = info.imageryVersion;
        result.terrainVersion = info.terrainVersion;
        result.imageryProvider = info.imageryProvider;
        result.terrainProvider = info.terrainProvider;
    }
    result.ancestorHasTerrain = info.ancestorHasTerrain;
    result.terrainState = info.terrainState;
    return result;
};
GoogleEarthEnterpriseTileInformation.prototype.setParent = function (parent) {
    this.ancestorHasTerrain = parent.ancestorHasTerrain || this.hasTerrain();
};
GoogleEarthEnterpriseTileInformation.prototype.hasSubtree = function () {
    return isBitSet_default(this._bits, cacheFlagBitmask);
};
GoogleEarthEnterpriseTileInformation.prototype.hasImagery = function () {
    return isBitSet_default(this._bits, imageBitmask);
};
GoogleEarthEnterpriseTileInformation.prototype.hasTerrain = function () {
    return isBitSet_default(this._bits, terrainBitmask);
};
GoogleEarthEnterpriseTileInformation.prototype.hasChildren = function () {
    return isBitSet_default(this._bits, anyChildBitmask);
};
GoogleEarthEnterpriseTileInformation.prototype.hasChild = function (index) {
    return isBitSet_default(this._bits, childrenBitmasks[index]);
};
GoogleEarthEnterpriseTileInformation.prototype.getChildBitmask = function () {
    return this._bits & anyChildBitmask;
};
var GoogleEarthEnterpriseTileInformation_default = GoogleEarthEnterpriseTileInformation;

// packages/engine/Source/Workers/decodeGoogleEarthEnterprisePacket.js
var sizeOfUint16 = Uint16Array.BYTES_PER_ELEMENT;
var sizeOfInt32 = Int32Array.BYTES_PER_ELEMENT;
var sizeOfUint32 = Uint32Array.BYTES_PER_ELEMENT;
var Types = {
    METADATA: 0,
    TERRAIN: 1,
    DBROOT: 2
};
Types.fromString = function (s) {
    if (s === "Metadata") {
        return Types.METADATA;
    } else if (s === "Terrain") {
        return Types.TERRAIN;
    } else if (s === "DbRoot") {
        return Types.DBROOT;
    }
};

function decodeGoogleEarthEnterprisePacket(parameters, transferableObjects) {
    const type = Types.fromString(parameters.type);
    let buffer = parameters.buffer;
    decodeGoogleEarthEnterpriseData_default(parameters.key, buffer);
    const uncompressedTerrain = uncompressPacket(buffer);
    buffer = uncompressedTerrain.buffer;
    const length = uncompressedTerrain.length;
    switch (type) {
        case Types.METADATA:
            return processMetadata(buffer, length, parameters.quadKey);
        case Types.TERRAIN:
            // return processTerrain(buffer, length, transferableObjects);
            return uncompressedTerrain.buffer;
        case Types.DBROOT:
            transferableObjects.push(buffer);
            return {
                buffer
            };
    }
}

var qtMagic = 32301;

function processMetadata(buffer, totalSize, quadKey) {
    const dv = new DataView(buffer);
    let offset = 0;
    const magic = dv.getUint32(offset, true);
    offset += sizeOfUint32;
    if (magic !== qtMagic) {
        throw new cesium.RuntimeError("Invalid magic");
    }
    const dataTypeId = dv.getUint32(offset, true);
    offset += sizeOfUint32;
    if (dataTypeId !== 1) {
        throw new cesium.RuntimeError("Invalid data type. Must be 1 for QuadTreePacket");
    }
    const quadVersion = dv.getUint32(offset, true);
    offset += sizeOfUint32;
    if (quadVersion !== 2) {
        throw new cesium.RuntimeError(
            "Invalid QuadTreePacket version. Only version 2 is supported."
        );
    }
    const numInstances = dv.getInt32(offset, true);
    offset += sizeOfInt32;
    const dataInstanceSize = dv.getInt32(offset, true);
    offset += sizeOfInt32;
    if (dataInstanceSize !== 32) {
        throw new cesium.RuntimeError("Invalid instance size.");
    }
    const dataBufferOffset = dv.getInt32(offset, true);
    offset += sizeOfInt32;
    const dataBufferSize = dv.getInt32(offset, true);
    offset += sizeOfInt32;
    const metaBufferSize = dv.getInt32(offset, true);
    offset += sizeOfInt32;
    if (dataBufferOffset !== numInstances * dataInstanceSize + offset) {
        throw new cesium.RuntimeError("Invalid dataBufferOffset");
    }
    if (dataBufferOffset + dataBufferSize + metaBufferSize !== totalSize) {
        throw new cesium.RuntimeError("Invalid packet offsets");
    }
    const instances = [];
    for (let i = 0; i < numInstances; ++i) {
        const bitfield = dv.getUint8(offset);
        ++offset;
        ++offset;
        const cnodeVersion = dv.getUint16(offset, true);
        offset += sizeOfUint16;
        const imageVersion = dv.getUint16(offset, true);
        offset += sizeOfUint16;
        const terrainVersion = dv.getUint16(offset, true);
        offset += sizeOfUint16;
        offset += sizeOfUint16;
        offset += sizeOfUint16;
        offset += sizeOfInt32;
        offset += sizeOfInt32;
        offset += 8;
        const imageProvider = dv.getUint8(offset++);
        const terrainProvider = dv.getUint8(offset++);
        offset += sizeOfUint16;
        instances.push(
            new GoogleEarthEnterpriseTileInformation_default(
                bitfield,
                cnodeVersion,
                imageVersion,
                terrainVersion,
                imageProvider,
                terrainProvider
            )
        );
    }
    const tileInfo = [];
    let index = 0;

    function populateTiles(parentKey, parent, level2) {
        let isLeaf = false;
        if (level2 === 4) {
            if (parent.hasSubtree()) {
                return;
            }
            isLeaf = true;
        }
        for (let i = 0; i < 4; ++i) {
            const childKey = parentKey + i.toString();
            if (isLeaf) {
                tileInfo[childKey] = null;
            } else if (level2 < 4) {
                if (!parent.hasChild(i)) {
                    tileInfo[childKey] = null;
                } else {
                    if (index === numInstances) {
                        console.log("Incorrect number of instances");
                        return;
                    }
                    const instance = instances[index++];
                    tileInfo[childKey] = instance;
                    populateTiles(childKey, instance, level2 + 1);
                }
            }
        }
    }

    let level = 0;
    const root = instances[index++];
    if (quadKey === "") {
        ++level;
    } else {
        tileInfo[quadKey] = root;
    }
    populateTiles(quadKey, root, level);
    return tileInfo;
}

var numMeshesPerPacket = 5;
var numSubMeshesPerMesh = 4;

function processTerrain(buffer, totalSize, transferableObjects) {
    const dv = new DataView(buffer);
    const advanceMesh = function (pos) {
        for (let sub = 0; sub < numSubMeshesPerMesh; ++sub) {
            const size = dv.getUint32(pos, true);
            pos += sizeOfUint32;
            pos += size;
            if (pos > totalSize) {
                throw new cesium.RuntimeError("Malformed terrain packet found.");
            }
        }
        return pos;
    };
    let offset = 0;
    const terrainMeshes = [];
    while (terrainMeshes.length < numMeshesPerPacket) {
        const start = offset;
        offset = advanceMesh(offset);
        const mesh = buffer.slice(start, offset);
        transferableObjects.push(mesh);
        terrainMeshes.push(mesh);
    }
    return terrainMeshes;
}

var compressedMagic2 = 1953029805;
var compressedMagicSwap2 = 2917034100;

function uncompressPacket(data) {
    const dv = new DataView(data);
    let offset = 0;
    const magic = dv.getUint32(offset, true);
    offset += sizeOfUint32;
    if (magic !== compressedMagic2 && magic !== compressedMagicSwap2) {
        throw new cesium.RuntimeError("Invalid magic");
    }
    const size = dv.getUint32(offset, magic === compressedMagic2);
    offset += sizeOfUint32;
    const compressedPacket = new Uint8Array(data, offset);
    const uncompressedPacket = pako.inflate(compressedPacket);
    if (uncompressedPacket.length !== size) {
        throw new cesium.RuntimeError("Size of packet doesn't match header");
    }
    return uncompressedPacket;
}

// var decodeGoogleEarthEnterprisePacket_default = createTaskProcessorWorker_default(decodeGoogleEarthEnterprisePacket);
// export {
//   decodeGoogleEarthEnterprisePacket_default as default
// };

module.exports.decodeGoogleEarthEnterprisePacket = decodeGoogleEarthEnterprisePacket;

