import{ai as m,t as d,r as o,h,f8 as p,z as _,Q as u,aI as v,fd as I,i as w,gy as b,e as s,d as n,e5 as E,fe as x,n as C}from"./vendor.4451b4ce.js";import{WhereClause as S}from"./WhereClause.d6b5dcf7.js";import{o as q}from"./floorFilterUtils.69500d62.js";import{p as O,u as Q,L as A,I as c}from"./I3SMeshView3D.470d7b44.js";import{n as L}from"./LayerView3D.721e0232.js";import{c as j,i as D,a as R,b as N,g as $}from"./SceneLayerView.e6e07373.js";import{C as y,p as H,f as U,n as G}from"./I3SQueryFeatureStore.2640e2eb.js";import{n as g}from"./I3SNode.f12c032a.js";import{p as P}from"./DefinitionExpressionSceneLayerView.27e362cb.js";import{c as V}from"./PopupSceneLayerView.8b2ca585.js";import"./I3SAttributeOverrides.98b8b317.js";import"./Graphics3DScaleVisibility.70f0134c.js";import"./optimizedFeatureQueryEngineAdapter.bde096c0.js";import"./centroid.5ae6ed88.js";import"./PooledRBush.ef42aec5.js";import"./quickselect.03306040.js";import"./SceneLayerWorker.df1ea9e5.js";import"./attributeUtils.99d8ee08.js";import"./LayerView.efa4cba5.js";import"./QueryEngine.949dfb50.js";import"./QueryEngineResult.bb7bb36b.js";import"./utils.15bf8d44.js";import"./ClassBreaksDefinition.da52e26b.js";import"./json.d1a0fa35.js";import"./QueryEngineCapabilities.c2e9875c.js";import"./popupUtils.22edcbf6.js";const M=m.getLogger("esri.views.3d.layers.SceneLayerView3D"),f=N();let i=class extends O(P(V(L($)))){constructor(){super(...arguments),this.type="scene-layer-3d",this.lodFactor=1,this.progressiveLoadFactor=1,this._elevationContext="scene",this._isIntegratedMesh=!1,this._supportsLabeling=!0,this._interactiveEditingSessions=new Map,this._queryEngine=null}get filter(){return this._get("filter")}set filter(e){this._set("filter",y.checkSupport(e)?e:null)}get viewFilter(){const e=this.filter;if(d(e)&&d(this.layerFilter))return null;const t=this._get("viewFilter");return d(t)?new y({layerFilter:this.layerFilter,viewFilter:e,layerFieldsIndex:this.layer.fieldsIndex,loadAsyncModule:r=>this._loadAsyncModule(r),applyFilters:()=>this._applyFilters(!0),addSqlFilter:(r,l)=>this.addSqlFilter(r,l,this.logError)}):(t.viewFilter=this.filter,t.layerFilter=this.layerFilter,this.notifyChange("viewFilter"),t)}get requiredFields(){var e,t;return(t=(e=this.fieldsHelper)==null?void 0:e.requiredFields)!=null?t:[]}get floorFilterClause(){const e=q(this);return o(e)?S.create(e,this.layer.fieldsIndex):null}get excludeObjectIdsSorted(){const e=this.layer.excludeObjectIds;return e.length?e.toArray().sort((t,r)=>t-r):null}get lodCrossfadeinDuration(){var e,t;return(t=(e=this.view)==null?void 0:e.qualitySettings.sceneService["3dObject"].lodCrossfadeinDuration)!=null?t:0}get lodCrossfadeoutDuration(){var e,t;return(t=(e=this.view)==null?void 0:e.qualitySettings.sceneService["3dObject"].lodCrossfadeoutDuration)!=null?t:0}get lodCrossfadeUncoveredDuration(){var e,t;return(t=(e=this.view)==null?void 0:e.qualitySettings.sceneService["3dObject"].lodCrossfadeUncoveredDuration)!=null?t:0}initialize(){this.fieldsHelper=new j({layerView:this}),this.updatingHandles.add(()=>this.layer.rangeInfos,e=>this._rangeInfosChanged(e),h),this.updatingHandles.add(()=>this.layer.renderer,e=>this.updatingHandles.addPromise(this._rendererChange(e)),h),this.updatingHandles.add(()=>[this.parsedDefinitionExpression,this.filter,this.layer.filter,this.floorFilterClause,this.excludeObjectIdsSorted,p(this.viewFilter,e=>[e.parsedWhereClause,e.parsedGeometry,e.sortedObjectIds])],()=>this._filterChange()),this.updatingHandles.add(()=>[this.filter,p(this.viewFilter,e=>e.parsedGeometry)],()=>this._geometryFilterChange()),this.handles.add(this.layer.on("apply-edits",e=>this.updatingHandles.addPromise(e.result))),this.handles.add(this.layer.on("edits",e=>this._handleEdits(e)))}destroy(){this.fieldsHelper=_(this.fieldsHelper)}_rangeInfosChanged(e){e!=null&&e.length>0&&M.warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}createQuery(){const e={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return o(this.filter)?this.filter.createQuery(e):new u(e)}queryExtent(e,t){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatureCount(e,t){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatures(e,t){return this._ensureQueryEngine().executeQuery(this._ensureQuery(e),t==null?void 0:t.signal).then(r=>{if(!(r==null?void 0:r.features))return r;const l=this.layer;for(const a of r.features)a.layer=l,a.sourceLayer=l;return r})}queryObjectIds(e,t){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e),t==null?void 0:t.signal)}_ensureQueryEngine(){return this._queryEngine||(this._queryEngine=this._createQueryEngine()),this._queryEngine}_createQueryEngine(){const e=Q(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new H({layerView:this,priority:v.FEATURE_QUERY_ENGINE,spatialIndex:new U({featureAdapter:new G({objectIdField:this.layer.objectIdField,attributeStorageInfo:this.layer.attributeStorageInfo,getFeatureExtent:e}),toArray:()=>{const t=new Array;return this._forAllFeatures((r,l,a)=>(t.push({id:r,index:l,meta:a}),A.CONTINUE),null,c.ALL_IN_CLIPPING_AREA),t},forAllFeatures:(t,r)=>this._forAllFeatures((l,a,F)=>t({id:l,index:a,meta:F}),r,c.ALL_IN_CLIPPING_AREA),getFeatureExtent:e,sourceSpatialReference:I(this.layer),viewSpatialReference:this.view.spatialReference})})}highlight(e){const t=this._highlights;if(e instanceof u){const{set:r,handle:l}=t.acquireSet();return this.queryObjectIds(e).then(a=>t.setFeatureIds(r,a)),l}return super.highlight(e)}createInteractiveEditSession(e){return D(this.attributeEditingContext,e)}_createLayerGraphic(e){const t=new w(null,null,e);return t.layer=this.layer,t.sourceLayer=this.layer,t}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}getFilters(){const e=super.getFilters(),t=this.excludeObjectIdsSorted;return o(t)&&e.push(r=>b(t,!1,r)),this.floorFilterClause&&this.addSqlFilter(e,this.floorFilterClause,this.logError),this.addSqlFilter(e,this.parsedDefinitionExpression,this.logError),o(this.viewFilter)&&this.viewFilter.addFilters(e,this.view,this._controller.crsIndex,this._collection),e}isUpdating(){return super.isUpdating()||this.layerFilterUpdating}_ensureQuery(e){return this._addDefinitionExpressionToQuery(d(e)?this.createQuery():u.from(e))}get attributeEditingContext(){return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:this._getObjectIdField(),forEachNode:e=>this._forAllNodes(t=>o(t)?e(t.node,t.featureIds):null),attributeStorageInfo:this.i3slayer.attributeStorageInfo,attributeOverrides:this.attributeOverrides,getAttributeData:e=>this.getAttributeData(e),setAttributeData:(e,t)=>this.setAttributeData(e,t),clearMemCache:()=>this.clearMemCache()}}_handleEdits(e){R(this.attributeEditingContext,e)}get hasGeometryFilter(){const e=this.viewFilter;return o(e)&&o(e.parsedGeometry)}computeNodeFiltering(e){const t=this.viewFilter;return d(t)||t.isMBSGeometryVisible(e,this.view.spatialReference,this._controller.crsIndex)?g.Unmodified:g.Culled}};s([n({aliasOf:"layer"})],i.prototype,"i3slayer",void 0),s([n(E)],i.prototype,"updatingProgress",void 0),s([n({type:x})],i.prototype,"filter",null),s([n({readOnly:!0})],i.prototype,"viewFilter",null),s([n(f.requiredFields)],i.prototype,"requiredFields",null),s([n(f.availableFields)],i.prototype,"availableFields",void 0),s([n()],i.prototype,"fieldsHelper",void 0),s([n()],i.prototype,"floorFilterClause",null),s([n()],i.prototype,"excludeObjectIdsSorted",null),s([n({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.3dObject.lodFactor"})],i.prototype,"lodFactor",void 0),s([n({readOnly:!0,aliasOf:"_controller.updatingProgress"})],i.prototype,"updatingProgressValue",void 0),i=s([C("esri.views.3d.layers.SceneLayerView3D")],i);const fe=i;export{fe as default};
