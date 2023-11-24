/**
 * 谷歌方案：根据谷歌地形数据包解析地形数据
 * @type {{TextureMinificationFilter: module:cesium.TextureMinificationFilter, CloudType: module:cesium.CloudType, getAbsoluteUri(relative: string, base?: string): string, BoxOutlineGeometry: BoxOutlineGeometry, EllipseGeometry: EllipseGeometry, Spline: Spline, VoxelProvider: VoxelProvider, Polyline: Polyline, OpenStreetMapImageryProvider: OpenStreetMapImageryProvider, LightingModel: module:cesium.LightingModel, UniformSpecifier: UniformSpecifier, JulianDate: JulianDate, BillboardVisualizer: BillboardVisualizer, OpenCageGeocoderService: OpenCageGeocoderService, CompositeEntityCollection: CompositeEntityCollection, EllipseGeometryUpdater: EllipseGeometryUpdater, PlaneGraphics: PlaneGraphics, KmlCamera: KmlCamera, HomeButtonViewModel: HomeButtonViewModel, GeometryPipeline: GeometryPipeline, Billboard: Billboard, CameraEventType: module:cesium.CameraEventType, IonWorldImageryStyle: module:cesium.IonWorldImageryStyle, IndexDatatype: module:cesium.IndexDatatype, TextureMagnificationFilter: module:cesium.TextureMagnificationFilter, ClassificationType: module:cesium.ClassificationType, CesiumInspectorViewModel: CesiumInspectorViewModel, defined<Type>(value: Type): value is NonNullable<Type>, GpxDataSource: GpxDataSource, ClippingPlaneCollection: ClippingPlaneCollection, Cesium3DTileStyle: Cesium3DTileStyle, exportKmlModelCallback: (model: ModelGraphics, time: JulianDate, externalFiles: any) => string, DataSourceDisplay: DataSourceDisplay, SampledPositionProperty: SampledPositionProperty, HorizontalOrigin: module:cesium.HorizontalOrigin, VRButtonViewModel: VRButtonViewModel, Matrix3: Matrix3, Fullscreen: Fullscreen, PolylineArrowMaterialProperty: PolylineArrowMaterialProperty, CornerType: module:cesium.CornerType, PolylineColorAppearance: PolylineColorAppearance, TimeInterval: TimeInterval, EllipsoidOutlineGeometry: EllipsoidOutlineGeometry, EllipsoidSurfaceAppearance: EllipsoidSurfaceAppearance, CheckerboardMaterialProperty: CheckerboardMaterialProperty, createElevationBandMaterialBand: createElevationBandMaterialBand, TileDiscardPolicy: TileDiscardPolicy, FrameRateMonitor: FrameRateMonitor, CreditDisplay: CreditDisplay, TimeDynamicImagery: TimeDynamicImagery, TerrainProvider: TerrainProvider, TileMapServiceImageryProvider: TileMapServiceImageryProvider, Intersect: module:cesium.Intersect, GoogleEarthEnterpriseMapsProvider: GoogleEarthEnterpriseMapsProvider, CorridorGeometryUpdater: CorridorGeometryUpdater, WebGLOptions: WebGLOptions, IonResource: IonResource, WallGeometry: WallGeometry, Cesium3DTilePointFeature: Cesium3DTilePointFeature, CesiumTerrainProvider: CesiumTerrainProviderCustomize, Iso8601: Iso8601, MetadataEnum: MetadataEnum, Cesium3DTilesInspectorViewModel: Cesium3DTilesInspectorViewModel, viewerVoxelInspectorMixin(viewer: Viewer): void, exportKmlResultKml: exportKmlResultKml, GoogleEarthEnterpriseMetadata: GoogleEarthEnterpriseMetadata, BoxGraphics: BoxGraphics, Cesium3DTile: Cesium3DTile, VertexFormat: VertexFormat, createOsmBuildingsAsync(options?: {defaultColor?: Color, style?: Cesium3DTileStyle, enableShowOutline?: boolean, showOutline?: boolean}): Promise<Cesium3DTileset>, CumulusCloud: CumulusCloud, Ray: Ray, TileCoordinatesImageryProvider: TileCoordinatesImageryProvider, GridMaterialProperty: GridMaterialProperty, GlobeTranslucency: GlobeTranslucency, viewerCesiumInspectorMixin(viewer: Viewer): void, destroyObject(object: any, message?: string): void, PostProcessStageLibrary: PostProcessStageLibrary, PackableForInterpolation: PackableForInterpolation, VRButton: VRButton, HeadingPitchRoll: HeadingPitchRoll, EntityCluster: EntityCluster, PolylineVolumeGeometry: PolylineVolumeGeometry, CorridorGraphics: CorridorGraphics, ReferenceProperty: ReferenceProperty, ShowGeometryInstanceAttribute: ShowGeometryInstanceAttribute, CylinderGeometryUpdater: CylinderGeometryUpdater, BlendFunction: module:cesium.BlendFunction, SkyBox: SkyBox, Camera: Camera, Command: Command, Sun: Sun, DataSourceCollection: DataSourceCollection, ClockViewModel: ClockViewModel, PolylineVolumeOutlineGeometry: PolylineVolumeOutlineGeometry, GeocoderService: GeocoderService, Event: Event, PlaneOutlineGeometry: PlaneOutlineGeometry, ScreenSpaceEventType: module:cesium.ScreenSpaceEventType, KeyboardEventModifier: module:cesium.KeyboardEventModifier, KmlDataSource: KmlDataSource, BoundingSphere: BoundingSphere, SceneModePicker: SceneModePicker, RequestScheduler: RequestScheduler, QuadraticRealPolynomial: QuadraticRealPolynomial, Matrix2: Matrix2, GeocoderViewModel: GeocoderViewModel, Visibility: module:cesium.Visibility, I3SDataProvider: I3SDataProvider, Transforms: Transforms, PositionProperty: PositionProperty, RequestType: module:cesium.RequestType, EasingFunction: EasingFunction, EllipsoidGraphics: EllipsoidGraphics, SkyAtmosphere: SkyAtmosphere, IonGeocoderService: IonGeocoderService, BillboardGraphics: BillboardGraphics, BlendEquation: module:cesium.BlendEquation, MetadataEnumValue: MetadataEnumValue, Scene: Scene, Cesium3DTilesetGraphics: Cesium3DTilesetGraphics, InfoBox: InfoBox, VoxelPrimitive: VoxelPrimitive, ModelFeature: ModelFeature, Terrain: Terrain, ParticleEmitter: ParticleEmitter, OrthographicFrustum: OrthographicFrustum, combine(object1?: any, object2?: any, deep?: boolean): any, Proxy: Proxy, Cesium3DTileColorBlendMode: module:cesium.Cesium3DTileColorBlendMode, Stereographic(position?: Cartesian2, tangentPlane?: EllipseGeometry): void, DiscardMissingTileImagePolicy: DiscardMissingTileImagePolicy, Request: Request, PolygonGeometry: PolygonGeometry, PolylineGeometryUpdater: PolylineGeometryUpdater, Ellipsoid: Ellipsoid, EntityView: EntityView, AssociativeArray: AssociativeArray, InfoBoxViewModel: InfoBoxViewModel, SvgPathBindingHandler: SvgPathBindingHandler, Primitive: Primitive, ConeEmitter: ConeEmitter, Rectangle: Rectangle, PerformanceWatchdogViewModel: PerformanceWatchdogViewModel, FrustumOutlineGeometry: FrustumOutlineGeometry, PolylineOutlineMaterialProperty: PolylineOutlineMaterialProperty, DistanceDisplayConditionGeometryInstanceAttribute: DistanceDisplayConditionGeometryInstanceAttribute, GroundPolylinePrimitive: GroundPolylinePrimitive, VelocityVectorProperty: VelocityVectorProperty, BlendingState: BlendingState, PerInstanceColorAppearance: PerInstanceColorAppearance, Geometry: Geometry, CompositeMaterialProperty: CompositeMaterialProperty, DistanceDisplayCondition: DistanceDisplayCondition, ImageMaterialProperty: ImageMaterialProperty, sampleTerrain(terrainProvider: TerrainProvider, level: number, positions: Cartographic[], rejectOnTileFail?: boolean): Promise<Cartographic[]>, I3SField: I3SField, Label: Label, PostProcessStageCollection: PostProcessStageCollection, createTangentSpaceDebugPrimitive(options: {geometry: Geometry, length?: number, modelMatrix?: Matrix4}): Primitive, ColorMaterialProperty: ColorMaterialProperty, CoplanarPolygonOutlineGeometry: CoplanarPolygonOutlineGeometry, MetadataClassProperty: MetadataClassProperty, includesReverseAxis: number[], TimeStandard: module:cesium.TimeStandard, ComponentDatatype: module:cesium.ComponentDatatype, PeliasGeocoderService: PeliasGeocoderService, PolylineMaterialAppearance: PolylineMaterialAppearance, Particle: Particle, CzmlDataSource: CzmlDataSource, PointPrimitiveCollection: PointPrimitiveCollection, QuantizedMeshTerrainData: QuantizedMeshTerrainData, getFilenameFromUri(uri: string): string, ImageBasedLighting: ImageBasedLighting, FeatureDetection: FeatureDetection, RectangleOutlineGeometry: RectangleOutlineGeometry, StencilFunction: module:cesium.StencilFunction, Queue: Queue, viewerCesium3DTilesInspectorMixin(viewer: Viewer): void, MapboxStyleImageryProvider: MapboxStyleImageryProvider, CartographicGeocoderService: CartographicGeocoderService, loadGltfJson(): void, ToggleButtonViewModel: ToggleButtonViewModel, ParticleSystem: ParticleSystem, HeightmapTerrainData: HeightmapTerrainData, MaterialProperty: MaterialProperty, ImageryLayer: ImageryLayer, ImageryTypes: HTMLImageElement | HTMLCanvasElement | ImageBitmap, SunLight: SunLight, KmlLookAt: KmlLookAt, mergeSort(array: any[], comparator: mergeSortComparator, userDefinedObject?: any): void, PositionPropertyArray: PositionPropertyArray, EllipsoidTerrainProvider: EllipsoidTerrainProvider, CylinderGraphics: CylinderGraphics, VaryingType: module:cesium.VaryingType, VerticalOrigin: module:cesium.VerticalOrigin, BoundingRectangle: BoundingRectangle, TimeIntervalCollectionProperty: TimeIntervalCollectionProperty, PolylineGraphics: PolylineGraphics, StencilOperation: module:cesium.StencilOperation, FullscreenButtonViewModel: FullscreenButtonViewModel, TileProviderError: TileProviderError, AnimationViewModel: AnimationViewModel, TextureUniform: TextureUniform, PointGraphics: PointGraphics, PixelDatatype: module:cesium.PixelDatatype, GoogleEarthEnterpriseImageryProvider: GoogleEarthEnterpriseImageryProvider, PathGraphics: PathGraphics, LabelStyle: module:cesium.LabelStyle, StripeOrientation: module:cesium.StripeOrientation, PolylineDashMaterialProperty: PolylineDashMaterialProperty, OrthographicOffCenterFrustum: OrthographicOffCenterFrustum, DebugAppearance: DebugAppearance, Model: Model, CameraEventAggregator: CameraEventAggregator, HeadingPitchRollValues: HeadingPitchRollValues, clone(object: any, deep?: boolean): any, ModelVisualizer: ModelVisualizer, RectangleGeometry: RectangleGeometry, PinBuilder: PinBuilder, getImagePixels(image: (HTMLImageElement | ImageBitmap), width: number, height: number): ImageData, PolylineVolumeGeometryUpdater: PolylineVolumeGeometryUpdater, SphereGeometry: SphereGeometry, Intersections2D: Intersections2D, objectToQuery(obj: any): string, MetadataType: module:cesium.MetadataType, ProjectionPickerViewModel: ProjectionPickerViewModel, CustomShaderMode: module:cesium.CustomShaderMode, LabelCollection: LabelCollection, buildModuleUrl(relativeUrl: string): string, PolylineGeometry: PolylineGeometry, DeveloperError: DeveloperError, CircleOutlineGeometry: CircleOutlineGeometry, Packable: Packable, CylinderGeometry: CylinderGeometry, RectangleGraphics: RectangleGraphics, PolylineVisualizer: PolylineVisualizer, Rotation: Rotation, RuntimeError: RuntimeError, PolygonHierarchy: PolygonHierarchy, CullFace: module:cesium.CullFace, Credit: Credit, GeometryAttributes: GeometryAttributes, TimeIntervalCollection: TimeIntervalCollection, NodeTransformationProperty: NodeTransformationProperty, FullscreenButton: FullscreenButton, DefaultProxy: DefaultProxy, EllipsoidTangentPlane: EllipsoidTangentPlane, ArcGisMapServerImageryProvider: ArcGisMapServerImageryProvider, Axis: module:cesium.Axis, CompositePositionProperty: CompositePositionProperty, I3SLayer: I3SLayer, CorridorOutlineGeometry: CorridorOutlineGeometry, GeographicProjection: GeographicProjection, DirectionUp: DirectionUp, StripeMaterialProperty: StripeMaterialProperty, PostProcessStage: PostProcessStage, Animation: Animation, Resource: Resource, PolygonOutlineGeometry: PolygonOutlineGeometry, queryToObject(queryString: string): any, GoogleEarthEnterpriseTerrainData: GoogleEarthEnterpriseTerrainData, PointVisualizer: PointVisualizer, RectangleGeometryUpdater: RectangleGeometryUpdater, ProjectionPicker: ProjectionPicker, StyleExpression: StyleExpression, SelectionIndicatorViewModel: SelectionIndicatorViewModel, EventHelper: EventHelper, GeometryAttribute: GeometryAttribute, Entity: Entity, ImageryLayerCollection: ImageryLayerCollection, GeometryInstanceAttribute: GeometryInstanceAttribute, pointInsideTriangle(point: (Cartesian2 | Cartesian3), p0: (Cartesian2 | Cartesian3), p1: (Cartesian2 | Cartesian3), p2: (Cartesian2 | Cartesian3)): boolean, ArcGisMapService: ArcGisMapService, VelocityOrientationProperty: VelocityOrientationProperty, createWorldImageryAsync(options?: {style?: IonWorldImageryStyle}): Promise<IonImageryProvider>, MetadataSchema: MetadataSchema, AxisAlignedBoundingBox: AxisAlignedBoundingBox, ModelAnimation: ModelAnimation, ArcGISTiledElevationTerrainProvider: ArcGISTiledElevationTerrainProvider, MetadataClass: MetadataClass, mergeSortComparator: (a: any, b: any, userDefinedObject?: any) => number, QuarticRealPolynomial: QuarticRealPolynomial, Math: Math, FrustumGeometry: FrustumGeometry, LinearSpline: LinearSpline, binarySearchComparator: (a: any, b: any) => number, TranslationRotationScale: TranslationRotationScale, BoxGeometry: BoxGeometry, KmlTour: KmlTour, GroundPrimitive: GroundPrimitive, DiscardEmptyTileImagePolicy: DiscardEmptyTileImagePolicy, Cesium3DTileContent: Cesium3DTileContent, DirectionalLight: DirectionalLight, ClippingPlane: ClippingPlane, Cartesian2: Cartesian2, Material: Material, CustomDataSource: CustomDataSource, CustomShader: CustomShader, subdivideArray(array: any[], numberOfArrays: number): void, WindingOrder: module:cesium.WindingOrder, Simon1994PlanetaryPositions: Simon1994PlanetaryPositions, ContextOptions: ContextOptions, CloudCollection: CloudCollection, Spherical: Spherical, WebMapServiceImageryProvider: WebMapServiceImageryProvider, SceneMode: module:cesium.SceneMode, ModelNode: ModelNode, CallbackProperty: CallbackProperty, MaterialAppearance: MaterialAppearance, GroundGeometryUpdater: GroundGeometryUpdater, SingleTileImageryProvider: SingleTileImageryProvider, QuaternionSpline: QuaternionSpline, ProviderViewModel: ProviderViewModel, DebugCameraPrimitive: DebugCameraPrimitive, LagrangePolynomialApproximation: LagrangePolynomialApproximation, EllipsoidRhumbLine: EllipsoidRhumbLine, Timeline: Timeline, PolylineCollection: PolylineCollection, PrimitiveType: module:cesium.PrimitiveType, NearFarScalar: NearFarScalar, ArcType: module:cesium.ArcType, LinearApproximation: LinearApproximation, DepthFunction: module:cesium.DepthFunction, shaderDefines: {[p: string]: any}, Property: Property, ArcGisBaseMapType: module:cesium.ArcGisBaseMapType, exportKml(options: {entities: EntityCollection, ellipsoid?: Ellipsoid, modelCallback?: exportKmlModelCallback, time?: JulianDate, defaultAvailability?: TimeInterval, sampleDuration?: number, kmz?: boolean}): Promise<exportKmlResultKml | exportKmlResultKmz>, RequestErrorEvent: RequestErrorEvent, ModelGraphics: ModelGraphics, LabelVisualizer: LabelVisualizer, VoxelInspector: VoxelInspector, formatError(object: any): string, CatmullRomSpline: CatmullRomSpline, HeadingPitchRange: HeadingPitchRange, KmlTourWait: KmlTourWait, SteppedSpline: SteppedSpline, Color: Color, Cartesian4: Cartesian4, PlaneGeometryUpdater: PlaneGeometryUpdater, HermiteSpline: HermiteSpline, Fog: Fog, isLeapYear(year: number): boolean, PlaneGeometry: PlaneGeometry, CompressedTextureBuffer: CompressedTextureBuffer, CorridorGeometry: CorridorGeometry, DataSource: DataSource, WebMapTileServiceImageryProvider: WebMapTileServiceImageryProvider, MorphWeightSpline: MorphWeightSpline, Cesium3DTilesetVisualizer: Cesium3DTilesetVisualizer, SphereOutlineGeometry: SphereOutlineGeometry, PolylineGlowMaterialProperty: PolylineGlowMaterialProperty, GeometryFactory: GeometryFactory, Visualizer: Visualizer, TrustedServers: TrustedServers, I3SFeature: I3SFeature, CesiumInspector: CesiumInspector, DebugModelMatrixPrimitive: DebugModelMatrixPrimitive, createElevationBandMaterial(options: {scene: Scene, layers: createElevationBandMaterialBand[]}): Material, CustomHeightmapTerrainProvider: CustomHeightmapTerrainProvider, writeTextToCanvas(text: string, options?: {font?: string, textBaseline?: string, fill?: boolean, stroke?: boolean, fillColor?: Color, strokeColor?: Color, strokeWidth?: number, backgroundColor?: Color, padding?: number}): (HTMLCanvasElement | undefined), Cartesian3: Cartesian3, PostProcessStageSampleMode: module:cesium.PostProcessStageSampleMode, BingMapsGeocoderService: BingMapsGeocoderService, CompositeProperty: CompositeProperty, GeographicTilingScheme: GeographicTilingScheme, EllipsoidGeometryUpdater: EllipsoidGeometryUpdater, HeightReference: module:cesium.HeightReference, ImageryLayerFeatureInfo: ImageryLayerFeatureInfo, shaderUniforms: {[p: string]: any}, TaskProcessor: TaskProcessor, ClockRange: module:cesium.ClockRange, SceneTransforms: SceneTransforms, excludesReverseAxis: number[], ColorGeometryInstanceAttribute: ColorGeometryInstanceAttribute, TilingScheme: TilingScheme, ClockStep: module:cesium.ClockStep, PathVisualizer: PathVisualizer, shaderMaximumIntersectionsLength: number, NeverTileDiscardPolicy: NeverTileDiscardPolicy, LeapSecond: LeapSecond, GridImageryProvider: GridImageryProvider, Ion: Ion, EllipsoidGeodesic: EllipsoidGeodesic, ConstantPositionProperty: ConstantPositionProperty, UrlTemplateImageryProvider: UrlTemplateImageryProvider, BillboardCollection: BillboardCollection, EntityCollection: EntityCollection, PropertyArray: PropertyArray, viewerPerformanceWatchdogMixin(viewer: Viewer, options?: {lowFrameRateMessage?: string}): void, NavigationHelpButton: NavigationHelpButton, BaseLayerPickerViewModel: BaseLayerPickerViewModel, SplitDirection: module:cesium.SplitDirection, defaultValue(a: any, b: any): any, KmlTourFlyTo: KmlTourFlyTo, RequestState: module:cesium.RequestState, CoplanarPolygonGeometry: CoplanarPolygonGeometry, VRTheWorldTerrainProvider: VRTheWorldTerrainProvider, removeExtension(gltf: any, extension: string): any, GregorianDate: GregorianDate, LabelGraphics: LabelGraphics, ScreenSpaceEventHandler: ScreenSpaceEventHandler, GoogleEarthEnterpriseTerrainProvider: GoogleEarthEnterpriseTerrainProvider, HilbertOrder: HilbertOrder, VideoSynchronizer: VideoSynchronizer, getTimestamp(): number, BoxEmitter: BoxEmitter, PointCloudShading: PointCloudShading, TerrainData: TerrainData, PixelFormat: module:cesium.PixelFormat, GoogleMaps: GoogleMaps, PolygonGeometryUpdater: PolygonGeometryUpdater, GeocodeType: module:cesium.GeocodeType, ColorBlendMode: module:cesium.ColorBlendMode, ConstantProperty: ConstantProperty, PerspectiveOffCenterFrustum: PerspectiveOffCenterFrustum, CesiumWidget: CesiumWidget, Occluder: Occluder, getBaseUri(uri: string, includeQuery?: boolean): string, HermitePolynomialApproximation: HermitePolynomialApproximation, VoxelInspectorViewModel: VoxelInspectorViewModel, CullingVolume: CullingVolume, BoxGeometryUpdater: BoxGeometryUpdater, ParticleBurst: ParticleBurst, viewerDragDropMixin(viewer: Viewer, options?: {dropTarget?: Element | string, clearOnDrop?: boolean, flyToOnDrop?: boolean, clampToGround?: boolean, proxy?: Proxy}): void, BaseLayerPicker: BaseLayerPicker, barycentricCoordinates(point: (Cartesian2 | Cartesian3), p0: (Cartesian2 | Cartesian3), p1: (Cartesian2 | Cartesian3), p2: (Cartesian2 | Cartesian3), result?: Cartesian3): (Cartesian3 | undefined), ShadowMap: ShadowMap, VoxelShapeType: module:cesium.VoxelShapeType, Light: Light, PerformanceWatchdog: PerformanceWatchdog, ModelAnimationLoop: module:cesium.ModelAnimationLoop, EllipseOutlineGeometry: EllipseOutlineGeometry, WallGeometryUpdater: WallGeometryUpdater, IonImageryProvider: IonImageryProvider, Moon: Moon, MetadataComponentType: module:cesium.MetadataComponentType, WebMercatorProjection: WebMercatorProjection, PropertyBag: PropertyBag, InterpolationAlgorithm: InterpolationAlgorithm, createCommand(func: (...params: any[]) => any, canExecute?: boolean): void, WebMercatorTilingScheme: WebMercatorTilingScheme, TridiagonalSystemSolver: TridiagonalSystemSolver, BingMapsImageryProvider: BingMapsImageryProvider, PolygonGraphics: PolygonGraphics, Expression: Expression, I3SGeometry: I3SGeometry, PointPrimitive: PointPrimitive, CircleGeometry: CircleGeometry, OrientedBoundingBox: OrientedBoundingBox, PolylineVolumeGraphics: PolylineVolumeGraphics, createGuid(): string, HomeButton: HomeButton, I3SNode: I3SNode, SampledProperty: SampledProperty, CubicRealPolynomial: CubicRealPolynomial, Cesium3DTilesInspector: Cesium3DTilesInspector, Cartographic: Cartographic, ConditionsExpression: ConditionsExpression, Plane: Plane, TimeDynamicPointCloud: TimeDynamicPointCloud, EllipsoidGeometry: EllipsoidGeometry, getExtensionFromUri(uri: string): string, Globe: Globe, ScreenSpaceCameraController: ScreenSpaceCameraController, PostProcessStageComposite: PostProcessStageComposite, DataSourceClock: DataSourceClock, Cesium3DTilesVoxelProvider: Cesium3DTilesVoxelProvider, Cesium3DTileset: Cesium3DTileset, ClassificationPrimitive: ClassificationPrimitive, GeometryInstance: GeometryInstance, ShadowMode: module:cesium.ShadowMode, WallGraphics: WallGraphics, createGooglePhotorealistic3DTileset(key?: string, options?: Cesium3DTileset.ConstructorOptions): Promise<Cesium3DTileset>, PerspectiveFrustum: PerspectiveFrustum, binarySearch(array: any[], itemToFind: any, comparator: binarySearchComparator): number, Quaternion: Quaternion, GeometryUpdater: GeometryUpdater, TileAvailability: TileAvailability, NavigationHelpButtonViewModel: NavigationHelpButtonViewModel, Clock: Clock, WallOutlineGeometry: WallOutlineGeometry, PrimitiveCollection: PrimitiveCollection, ReferenceFrame: module:cesium.ReferenceFrame, IntersectionTests: IntersectionTests, ExtrapolationType: module:cesium.ExtrapolationType, TimeIntervalCollectionPositionProperty: TimeIntervalCollectionPositionProperty, SphereEmitter: SphereEmitter, SimplePolylineGeometry: SimplePolylineGeometry, GroundPolylineGeometry: GroundPolylineGeometry, exportKmlResultKmz: exportKmlResultKmz, GeoJsonDataSource: GeoJsonDataSource, MapboxImageryProvider: MapboxImageryProvider, ImageryProvider: ImageryProvider, MapMode2D: module:cesium.MapMode2D, Geocoder: Geocoder, Cesium3DTileFeature: Cesium3DTileFeature, CylinderOutlineGeometry: CylinderOutlineGeometry, createWorldTerrainAsync(options?: {requestVertexNormals?: boolean, requestWaterMask?: boolean}): Promise<CesiumTerrainProviderCustomize>, Viewer: Viewer, MapProjection: MapProjection, WebGLConstants: module:cesium.WebGLConstants, Appearance: Appearance, HeightmapEncoding: module:cesium.HeightmapEncoding, KmlFeatureData: KmlFeatureData, createElevationBandMaterialEntry: createElevationBandMaterialEntry, CircleEmitter: CircleEmitter, UniformType: module:cesium.UniformType, BlendOption: module:cesium.BlendOption, Interval: Interval, GetFeatureInfoFormat: GetFeatureInfoFormat, CustomShaderTranslucencyMode: module:cesium.CustomShaderTranslucencyMode, Matrix4: Matrix4, ModelAnimationCollection: ModelAnimationCollection, SelectionIndicator: SelectionIndicator, SceneModePickerViewModel: SceneModePickerViewModel, ViewportQuad: ViewportQuad, ConstantSpline: ConstantSpline, BingMapsStyle: module:cesium.BingMapsStyle, sampleTerrainMostDetailed(terrainProvider: TerrainProvider, positions: Cartographic[], rejectOnTileFail?: boolean): Promise<Cartographic[]>, EllipseGraphics: EllipseGraphics, GeometryVisualizer: GeometryVisualizer}}
 */

const Cesium = require('cesium');
const Redis = require("ioredis");
const Router = require("koa-router");
const router = new Router({prefix: '/google-elevation'});
const {decodeGoogleEarthEnterprisePacket} = require("./decodeGoogleEarthEnterprisePacket");


let RootDB = JSON.parse("{\"0\":{\"_bits\":79,\"cnodeVersion\":0,\"imageryVersion\":977,\"terrainVersion\":0,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":false,\"terrainState\":0},\"1\":{\"_bits\":79,\"cnodeVersion\":0,\"imageryVersion\":977,\"terrainVersion\":0,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":false,\"terrainState\":0},\"2\":{\"_bits\":79,\"cnodeVersion\":0,\"imageryVersion\":977,\"terrainVersion\":0,\"imageryProvider\":255,\"terrainProvider\":0,\"ancestorHasTerrain\":false,\"terrainState\":0},\"3\":{\"_bits\":79,\"cnodeVersion\":0,\"imageryVersion\":977,\"terrainVersion\":0,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":false,\"terrainState\":0},\"10\":{\"_bits\":64,\"cnodeVersion\":0,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":0,\"terrainProvider\":0,\"ancestorHasTerrain\":false},\"11\":{\"_bits\":64,\"cnodeVersion\":0,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":0,\"terrainProvider\":0,\"ancestorHasTerrain\":false},\"12\":{\"_bits\":207,\"cnodeVersion\":0,\"imageryVersion\":984,\"terrainVersion\":961,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"13\":{\"_bits\":207,\"cnodeVersion\":0,\"imageryVersion\":984,\"terrainVersion\":961,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"20\":{\"_bits\":207,\"cnodeVersion\":0,\"imageryVersion\":984,\"terrainVersion\":961,\"imageryProvider\":255,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"21\":{\"_bits\":207,\"cnodeVersion\":0,\"imageryVersion\":984,\"terrainVersion\":961,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"22\":{\"_bits\":64,\"cnodeVersion\":0,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":0,\"terrainProvider\":0,\"ancestorHasTerrain\":false},\"23\":{\"_bits\":64,\"cnodeVersion\":0,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":0,\"terrainProvider\":0,\"ancestorHasTerrain\":false},\"30\":{\"_bits\":207,\"cnodeVersion\":0,\"imageryVersion\":984,\"terrainVersion\":961,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":true,\"terrainState\":2},\"31\":{\"_bits\":207,\"cnodeVersion\":0,\"imageryVersion\":984,\"terrainVersion\":961,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":true,\"terrainState\":2},\"32\":{\"_bits\":64,\"cnodeVersion\":0,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":0,\"terrainProvider\":0,\"ancestorHasTerrain\":false},\"33\":{\"_bits\":64,\"cnodeVersion\":0,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":0,\"terrainProvider\":0,\"ancestorHasTerrain\":false},\"100\":null,\"101\":null,\"102\":null,\"103\":null,\"110\":null,\"111\":null,\"112\":null,\"113\":null,\"120\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"121\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"122\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"123\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"130\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"131\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"132\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"133\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"200\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":255,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"201\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":255,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"202\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":255,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"203\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":168,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"210\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":255,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"211\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"212\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":168,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"213\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":255,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"220\":null,\"221\":null,\"222\":null,\"223\":null,\"230\":null,\"231\":null,\"232\":null,\"233\":null,\"300\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":true,\"terrainState\":3},\"301\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":true,\"terrainState\":3},\"302\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":255,\"terrainProvider\":0,\"ancestorHasTerrain\":true,\"terrainState\":3},\"303\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":168,\"terrainProvider\":0,\"ancestorHasTerrain\":true,\"terrainState\":3},\"310\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":true,\"terrainState\":3},\"311\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":true,\"terrainState\":3},\"312\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":168,\"terrainProvider\":0,\"ancestorHasTerrain\":true,\"terrainState\":3},\"313\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":168,\"terrainProvider\":0,\"ancestorHasTerrain\":true,\"terrainState\":3},\"320\":null,\"321\":null,\"322\":null,\"323\":null,\"330\":null,\"331\":null,\"332\":null,\"333\":null,\"00\":{\"_bits\":64,\"cnodeVersion\":0,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":0,\"terrainProvider\":0,\"ancestorHasTerrain\":false},\"01\":{\"_bits\":64,\"cnodeVersion\":0,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":0,\"terrainProvider\":0,\"ancestorHasTerrain\":false},\"02\":{\"_bits\":207,\"cnodeVersion\":0,\"imageryVersion\":984,\"terrainVersion\":961,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"03\":{\"_bits\":207,\"cnodeVersion\":0,\"imageryVersion\":984,\"terrainVersion\":961,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"000\":null,\"001\":null,\"002\":null,\"003\":null,\"010\":null,\"011\":null,\"012\":null,\"013\":null,\"020\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"021\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"022\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"023\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":255,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"030\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"031\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"032\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":true},\"033\":{\"_bits\":80,\"cnodeVersion\":984,\"imageryVersion\":984,\"terrainVersion\":0,\"imageryProvider\":124,\"terrainProvider\":0,\"ancestorHasTerrain\":true}}");
const cesiumDefaultKey = stringToBuffer(
    "\x45\xf4\xbd\x0b\x79\xe2\x6a\x45\x22\x05\x92\x2c\x17\xcd\x06\x71\xf8\x49\x10\x46\x67\x51\x00\x42\x25\xc6\xe8\x61\x2c\x66\x29\x08\xc6\x34\xdc\x6a\x62\x25\x79\x0a\x77\x1d\x6d\x69\xd6\xf0\x9c\x6b\x93\xa1\xbd\x4e\x75\xe0\x41\x04\x5b\xdf\x40\x56\x0c\xd9\xbb\x72\x9b\x81\x7c\x10\x33\x53\xee\x4f\x6c\xd4\x71\x05\xb0\x7b\xc0\x7f\x45\x03\x56\x5a\xad\x77\x55\x65\x0b\x33\x92\x2a\xac\x19\x6c\x35\x14\xc5\x1d\x30\x73\xf8\x33\x3e\x6d\x46\x38\x4a\xb4\xdd\xf0\x2e\xdd\x17\x75\x16\xda\x8c\x44\x74\x22\x06\xfa\x61\x22\x0c\x33\x22\x53\x6f\xaf\x39\x44\x0b\x8c\x0e\x39\xd9\x39\x13\x4c\xb9\xbf\x7f\xab\x5c\x8c\x50\x5f\x9f\x22\x75\x78\x1f\xe9\x07\x71\x91\x68\x3b\xc1\xc4\x9b\x7f\xf0\x3c\x56\x71\x48\x82\x05\x27\x55\x66\x59\x4e\x65\x1d\x98\x75\xa3\x61\x46\x7d\x61\x3f\x15\x41\x00\x9f\x14\x06\xd7\xb4\x34\x4d\xce\x13\x87\x46\xb0\x1a\xd5\x05\x1c\xb8\x8a\x27\x7b\x8b\xdc\x2b\xbb\x4d\x67\x30\xc8\xd1\xf6\x5c\x8f\x50\xfa\x5b\x2f\x46\x9b\x6e\x35\x18\x2f\x27\x43\x2e\xeb\x0a\x0c\x5e\x10\x05\x10\xa5\x73\x1b\x65\x34\xe5\x6c\x2e\x6a\x43\x27\x63\x14\x23\x55\xa9\x3f\x71\x7b\x67\x43\x7d\x3a\xaf\xcd\xe2\x54\x55\x9c\xfd\x4b\xc6\xe2\x9f\x2f\x28\xed\xcb\x5c\xc6\x2d\x66\x07\x88\xa7\x3b\x2f\x18\x2a\x22\x4e\x0e\xb0\x6b\x2e\xdd\x0d\x95\x7d\x7d\x47\xba\x43\xb2\x11\xb2\x2b\x3e\x4d\xaa\x3e\x7d\xe6\xce\x49\x89\xc6\xe6\x78\x0c\x61\x31\x05\x2d\x01\xa4\x4f\xa5\x7e\x71\x20\x88\xec\x0d\x31\xe8\x4e\x0b\x00\x6e\x50\x68\x7d\x17\x3d\x08\x0d\x17\x95\xa6\x6e\xa3\x68\x97\x24\x5b\x6b\xf3\x17\x23\xf3\xb6\x73\xb3\x0d\x0b\x40\xc0\x9f\xd8\x04\x51\x5d\xfa\x1a\x17\x22\x2e\x15\x6a\xdf\x49\x00\xb9\xa0\x77\x55\xc6\xef\x10\x6a\xbf\x7b\x47\x4c\x7f\x83\x17\x05\xee\xdc\xdc\x46\x85\xa9\xad\x53\x07\x2b\x53\x34\x06\x07\xff\x14\x94\x59\x19\x02\xe4\x38\xe8\x31\x83\x4e\xb9\x58\x46\x6b\xcb\x2d\x23\x86\x92\x70\x00\x35\x88\x22\xcf\x31\xb2\x26\x2f\xe7\xc3\x75\x2d\x36\x2c\x72\x74\xb0\x23\x47\xb7\xd3\xd1\x26\x16\x85\x37\x72\xe2\x00\x8c\x44\xcf\x10\xda\x33\x2d\x1a\xde\x60\x86\x69\x23\x69\x2a\x7c\xcd\x4b\x51\x0d\x95\x54\x39\x77\x2e\x29\xea\x1b\xa6\x50\xa2\x6a\x8f\x6f\x50\x99\x5c\x3e\x54\xfb\xef\x50\x5b\x0b\x07\x45\x17\x89\x6d\x28\x13\x77\x37\x1d\xdb\x8e\x1e\x4a\x05\x66\x4a\x6f\x99\x20\xe5\x70\xe2\xb9\x71\x7e\x0c\x6d\x49\x04\x2d\x7a\xfe\x72\xc7\xf2\x59\x30\x8f\xbb\x02\x5d\x73\xe5\xc9\x20\xea\x78\xec\x20\x90\xf0\x8a\x7f\x42\x17\x7c\x47\x19\x60\xb0\x16\xbd\x26\xb7\x71\xb6\xc7\x9f\x0e\xd1\x33\x82\x3d\xd3\xab\xee\x63\x99\xc8\x2b\x53\xa0\x44\x5c\x71\x01\xc6\xcc\x44\x1f\x32\x4f\x3c\xca\xc0\x29\x3d\x52\xd3\x61\x19\x58\xa9\x7d\x65\xb4\xdc\xcf\x0d\xf4\x3d\xf1\x08\xa9\x42\xda\x23\x09\xd8\xbf\x5e\x50\x49\xf8\x4d\xc0\xcb\x47\x4c\x1c\x4f\xf7\x7b\x2b\xd8\x16\x18\xc5\x31\x92\x3b\xb5\x6f\xdc\x6c\x0d\x92\x88\x16\xd1\x9e\xdb\x3f\xe2\xe9\xda\x5f\xd4\x84\xe2\x46\x61\x5a\xde\x1c\x55\xcf\xa4\x00\xbe\xfd\xce\x67\xf1\x4a\x69\x1c\x97\xe6\x20\x48\xd8\x5d\x7f\x7e\xae\x71\x20\x0e\x4e\xae\xc0\x56\xa9\x91\x01\x3c\x82\x1d\x0f\x72\xe7\x76\xec\x29\x49\xd6\x5d\x2d\x83\xe3\xdb\x36\x06\xa9\x3b\x66\x13\x97\x87\x6a\xd5\xb6\x3d\x50\x5e\x52\xb9\x4b\xc7\x73\x57\x78\xc9\xf4\x2e\x59\x07\x95\x93\x6f\xd0\x4b\x17\x57\x19\x3e\x27\x27\xc7\x60\xdb\x3b\xed\x9a\x0e\x53\x44\x16\x3e\x3f\x8d\x92\x6d\x77\xa2\x0a\xeb\x3f\x52\xa8\xc6\x55\x5e\x31\x49\x37\x85\xf4\xc5\x1f\x26\x2d\xa9\x1c\xbf\x8b\x27\x54\xda\xc3\x6a\x20\xe5\x2a\x78\x04\xb0\xd6\x90\x70\x72\xaa\x8b\x68\xbd\x88\xf7\x02\x5f\x48\xb1\x7e\xc0\x58\x4c\x3f\x66\x1a\xf9\x3e\xe1\x65\xc0\x70\xa7\xcf\x38\x69\xaf\xf0\x56\x6c\x64\x49\x9c\x27\xad\x78\x74\x4f\xc2\x87\xde\x56\x39\x00\xda\x77\x0b\xcb\x2d\x1b\x89\xfb\x35\x4f\x02\xf5\x08\x51\x13\x60\xc1\x0a\x5a\x47\x4d\x26\x1c\x33\x30\x78\xda\xc0\x9c\x46\x47\xe2\x5b\x79\x60\x49\x6e\x37\x67\x53\x0a\x3e\xe9\xec\x46\x39\xb2\xf1\x34\x0d\xc6\x84\x53\x75\x6e\xe1\x0c\x59\xd9\x1e\xde\x29\x85\x10\x7b\x49\x49\xa5\x77\x79\xbe\x49\x56\x2e\x36\xe7\x0b\x3a\xbb\x4f\x03\x62\x7b\xd2\x4d\x31\x95\x2f\xbd\x38\x7b\xa8\x4f\x21\xe1\xec\x46\x70\x76\x95\x7d\x29\x22\x78\x88\x0a\x90\xdd\x9d\x5c\xda\xde\x19\x51\xcf\xf0\xfc\x59\x52\x65\x7c\x33\x13\xdf\xf3\x48\xda\xbb\x2a\x75\xdb\x60\xb2\x02\x15\xd4\xfc\x19\xed\x1b\xec\x7f\x35\xa8\xff\x28\x31\x07\x2d\x12\xc8\xdc\x88\x46\x7c\x8a\x5b\x22"
);

/**
 * 瓦片层级，默认查询17，瓦片层级从0开始，比如瓦片quadKey=10，所在的层级为1，即quadKey的长度-1
 * @type {number}
 */
const level = 21;

const redisClient = new Redis({
    host: '192.168.3.138',
    port: 6300,
    db: 34,
    password: 'CAy6REa73#bZuHwq'
});

/**
 * 根据经纬度获取海拔
 */
router.get('/height', async (ctx, next) => {
    let lng = ctx.request.query.lng;
    let lat = ctx.request.query.lat;
    if (!isValidCoordinate(lng, lat)) {
        ctx.response.body = {'height:': -1};
    } else {
        lng = parseFloat(lng);
        lat = parseFloat(lat);
        await getHeight(lng, lat).then(function (height) {
            ctx.response.body = {'height:': height};
        }).catch(function (reason) {
            console.log(reason);
            ctx.response.body = {'height:': -1};
        });
    }
});

/**
 * 初始化Root节点
 * 第一次部署需要调用一次，初始化。
 */
router.post('/initRootDB', async (ctx, next) => {
    await initRootDB().then(function (height) {
        ctx.response.body = {'data:': '初始化完成'};
    }).catch(function (reason) {
        console.log(reason);
        ctx.response.body = ({'errorMsg:': reason});
    });
});

function stringToBuffer(str) {
    const len = str.length;
    const buffer = new ArrayBuffer(len);
    const ui8 = new Uint8Array(buffer);
    for (let i = 0; i < len; ++i) {
        ui8[i] = str.charCodeAt(i);
    }

    return buffer;
}


/**
 * 经纬度合法性校验
 * @param lng
 * @param lat
 * @returns {boolean}
 */
function isValidCoordinate(lng, lat) {
    if (typeof lng == 'undefined' || typeof lat === 'undefined') {
        return false;
    } else if (typeof lng !== 'string' || typeof lat !== 'string') {
        return false;
    }
    const validLng = (-180 <= lng && lng <= 180);
    const validLat = (-90 <= lat && lat <= 90);
    return validLng && validLat;
}

/**
 * 根据经纬度获取海拔
 * @param lng
 * @param lat
 * @returns {Promise<number>}
 */
async function getHeight(lng, lat) {
    const cartesian2 = convertCoordsToXY(lng, lat);
    let quadKey = Cesium.GoogleEarthEnterpriseMetadata.tileXYToQuadKey(cartesian2['x'], cartesian2['y'], level);
    let tileInfo = await redisClient.hgetall(quadKey);
    //如果tileInfo不存在 或者 没有地形数据，则溯源查找
    let tracebackSearchFlag = 0;
    if (0 === Object.keys(tileInfo).length) {
        tracebackSearchFlag = 1;
    } else {
        if (tileInfo['tV'] === 0) {
            tracebackSearchFlag = 1;
        }
    }
    if (tracebackSearchFlag === 1) {
        let obj = await terrainTracebackSearch(quadKey);
        quadKey = obj['key'];
        tileInfo = obj['tile'];
    }
    return await getHeightByDecodeData(quadKey, tileInfo['tV'], cartesian2, lng, lat);
}

/**
 * tileInfos是对个对象，包含key，value
 * 将tileInfos通过管道模式存储到redis中
 * @returns {Promise<void>}
 */
async function initRootDB() {
    let tileInfos = googleMetaDataToRedisEntity(RootDB);
    let pipeline = redisClient.pipeline();
    for (let key in tileInfos) {
        //使用管道存储到redis中，不采用hash存储，维护麻烦
        pipeline.hmset('meta:' + key, tileInfos[key]);
    }
    await pipeline.exec((err, results) => {
        if (err) {
            console.error('Error executing pipeline:', err);
        } else {
            console.log('Pipeline executed successfully:', results);
        }
    });
}


function decode(buffer) {
    return decodeGoogleEarthEnterprisePacket({
        type: 'Terrain',
        key: cesiumDefaultKey,
        buffer: buffer
    });
}

async function getHeightByDecodeData(quadKey, tV, cartesian2, lng, lat) {
    const url = `http://119.8.53.127/flatfile?f1c-0${quadKey}-t.${tV}`;
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = await decode(arrayBuffer);
    const xyz = Cesium.GoogleEarthEnterpriseMetadata.quadKeyToTileXY(quadKey);
    return getHeightByCesium(buffer, cartesian2, xyz, lng, lat);
}

function getHeightByCesium(buffer, cartesian2, xyz, lng, lat) {
    let terrainData = new Cesium.GoogleEarthEnterpriseTerrainData({
        negativeAltitudeExponentBias: 32,
        negativeElevationThreshold: 1e-12,
        buffer: buffer
    });
    let rectangle = geeTilingScheme.tileXYToRectangle(xyz['x'], xyz['y'], xyz['level']);
    return terrainData.interpolateHeight(rectangle, lng, lat);
}

function decodeMetaData(buffer, key) {
    return decodeGoogleEarthEnterprisePacket({
        key: cesiumDefaultKey,
        buffer: buffer,
        type: 'Metadata',
        quadKey: key
    });
}

const geeTilingScheme = new Cesium.GeographicTilingScheme({
    numberOfLevelZeroTilesX: 2,
    numberOfLevelZeroTilesY: 2,
    rectangle: new Cesium.Rectangle(
        -Cesium.Math.PI,
        -Cesium.Math.PI,
        Cesium.Math.PI,
        Cesium.Math.PI
    )
});

async function pullMetaByNode(quadKey, cV) {
    let url = `http://119.8.53.127/flatfile?q2-0${quadKey}-q.${cV}`;
    let response = await fetch(url);
    let arrayBuffer = await response.arrayBuffer();
    return decodeMetaData(arrayBuffer, quadKey);
}

/**
 * 将经纬度转化为瓦片的坐标x，y
 * @param lon
 * @param lat
 * @returns {Cartesian2}
 */
function convertCoordsToXY(lon, lat) {
    const position = Cesium.Cartographic.fromDegrees(lon, lat);
    return geeTilingScheme.positionToTileXY(position, level);
}

/**
 * 地形数据溯源查找
 *
 * 返回最近的地形数据的瓦片信息
 */
async function terrainTracebackSearch(quadKey) {
    let tree = {};
    //已加载的节点
    let loadedNode = new Map();
    //先拉取到整个树
    let pipeline = redisClient.pipeline();
    for (let i = 0; i < quadKey.length; i++) {
        let currentKey = quadKey.substring(0, quadKey.length - i);
        pipeline.hgetall('meta:' + currentKey, function (err, data) {
            tree[currentKey] = data;
        })
    }
    await pipeline.exec();

    //填充树
    for (let i = 1; i < quadKey.length + 1; i++) {
        let currentKey = quadKey.substring(0, i);
        let parentKey = quadKey.substring(0, i - 1);
        let parent = tree[parentKey];
        if (i > 1 && 0 === Object.keys(tree[parentKey]).length) {//父级节点为null直接结束
            break;
        }
        //当前不存在
        if (0 === Object.keys(tree[currentKey]).length) {
            if (1 === i) {//最顶级了，不能回溯
                break;
            } else {
                if (parent['cV'] === '0') {
                    break;
                } else {
                    if (!loadedNode.has(parentKey)) {
                        //拉取指定节点对应的树
                        let googleMetaDataArr = await pullMetaByNode(parentKey, tree[parentKey]['cV']);
                        //数据处理，过滤null数据和属性映射
                        let theOtherTree = googleMetaDataToRedisEntity(googleMetaDataArr);
                        //分析结果填充到树
                        fillTree(tree, theOtherTree, parentKey);
                        //填充完成以后，依然需要判断当前节点是否存在
                        loadedNode.set(parentKey, true);
                        i--;
                    }
                }
            }
        }
    }

    //解析树，获取到最贴近底层的瓦片
    let tile = {};
    let key = null;
    for (let i = 1; i < quadKey.length + 1; i++) {
        let currentKey = quadKey.substring(0, i);
        if (0 === Object.keys(tree[currentKey]).length) {
            break;
        } else {
            if (tree[currentKey]['tV'] !== '0') {
                tile = tree[currentKey];
                key = currentKey;
            }
        }
    }
    //未找到地形数据
    if (null === key) {
        return {};
    }
    return {
        tile,
        key
    };
}

/**
 * 将谷歌返回的地形数据包转换为 redis的数据实体
 * @param arr
 * @returns {{}}
 */
function googleMetaDataToRedisEntity(arr) {
    let map = {};
    for (let key in arr) {
        if (null === arr[key]) {
            continue;
        }
        map[key] = {
            'cV': arr[key]['cnodeVersion'].toString(),
            'iP': arr[key]['imageryProvider'].toString(),
            'iV': arr[key]['imageryVersion'].toString(),
            'tP': arr[key]['terrainProvider'].toString(),
            'tV': arr[key]['terrainVersion'].toString(),
            'b': arr[key]['_bits'].toString()
        };
    }
    return map;
}

/**
 * 填充树并异步保存数据
 * @param theTree
 * @param theOtherTree
 * @param parentKey
 */
function fillTree(theTree, theOtherTree, parentKey) {
    for (let key in theOtherTree) {
        if (key === parentKey) {
            continue;
        }
        if (theTree.hasOwnProperty(key)) {
            theTree[key] = theOtherTree[key];
        }
    }
    //保存至L7拉取的数据
    if (parentKey.length < 8) {
        saveDataToRedis(parentKey, theOtherTree);
    }
}

/**
 * 将谷歌的数据解析保存到redis中
 * @param quadKey
 * @param tree
 * @returns {Promise<void>}
 */
async function saveDataToRedis(quadKey, tree) {
    let pipeline = redisClient.pipeline();
    for (let key in tree) {
        if (key === quadKey) {
            continue;
        }
        pipeline.hmset('meta:' + key, tree[key]);
    }
    pipeline.exec();
}

module.exports = router;