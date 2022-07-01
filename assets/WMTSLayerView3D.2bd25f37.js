import{ai as m,l8 as f,r as a,R as p,aT as c,t as u,e as o,d as l,n as g}from"./vendor.4451b4ce.js";import{n as y}from"./LayerView3D.721e0232.js";import{c as I}from"./TiledLayerView3D.64808b78.js";import{u as T}from"./LayerView.efa4cba5.js";import{i as x}from"./RefreshableLayerView.f09ad824.js";const h=m.getLogger("esri.views.3d.layers.WMTSLayerView3d");let r=class extends x(I(y(T))){constructor(){super(...arguments),this.type="wmts-3d"}get hasMixedImageFormats(){return!0}_getCompatibleTileInfoMatrixSet(t,e=!1){const i=f(this.layer);if(a(i)){if(p.isCollection(i))return i.find(d=>{const s=t(d);return a(s)&&(e?h.error("The selected tile matrix set is not compatible with the view",s):this.addResolvingPromise(Promise.reject(s))),s==null});const n=t(i);return a(n)&&(e?h.error("The selected tile matrix set is not compatible with the view",n):this.addResolvingPromise(Promise.reject(n))),i}return null}initialize(){this._getCompatibleTileInfoMatrixSet(e=>this._getTileInfoSupportError(e.tileInfo,e.fullExtent));const t=c(()=>{var e,i;return(i=(e=this.view)==null?void 0:e.basemapTerrain)==null?void 0:i.tilingSchemeLocked}).then(()=>{const e=this._getCompatibleTileInfoMatrixSet(i=>this._getTileInfoSupportError(i.tileInfo,i.fullExtent)||this._getTileInfoCompatibilityError(i.tileInfo,this.view.basemapTerrain.tilingScheme));u(e)||(this.layer.activeLayer.tileMatrixSetId!==e.id&&(this.layer.activeLayer.tileMatrixSetId=e.id),this.tileInfo=e.tileInfo,this.layer.fullExtent=e.fullExtent)});this.addResolvingPromise(t),this.when(()=>this._initialized())}refresh(){this.emit("data-changed")}canResume(){if(!super.canResume())return!1;const t=this.layer.activeLayer.tileMatrixSet;return t&&!this._getTileInfoError(t.tileInfo,t.fullExtent)}async doRefresh(){this.suspended||this.emit("data-changed")}_initialized(){this.updatingHandles.add(()=>{var t,e;return(e=(t=this.layer)==null?void 0:t.activeLayer)==null?void 0:e.styleId},()=>this.refresh()),this.updatingHandles.add(()=>{var t;return(t=this.layer)==null?void 0:t.activeLayer},t=>{const e=this._getCompatibleTileInfoMatrixSet(i=>this._getTileInfoSupportError(i.tileInfo,i.fullExtent)||this._getTileInfoCompatibilityError(i.tileInfo,this.view.basemapTerrain.tilingScheme),!0);a(e)&&t.tileMatrixSetId!==e.id&&(this.layer.activeLayer.tileMatrixSetId=e.id),this.notifyChange("suspended"),this.canResume()&&this.refresh()})}_getTileInfoError(t,e){return this._getTileInfoSupportError(t,e)||this._getTileInfoCompatibilityError(t,this.view.basemapTerrain.tilingScheme)}};o([l({readOnly:!0})],r.prototype,"hasMixedImageFormats",null),o([l()],r.prototype,"layer",void 0),o([l()],r.prototype,"suspended",void 0),r=o([g("esri.views.3d.layers.WMTSLayerView3D")],r);const M=r;export{M as default};
