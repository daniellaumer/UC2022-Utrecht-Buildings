var B=Object.defineProperty;var E=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var R=(e,t,r)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,$=(e,t)=>{for(var r in t||(t={}))W.call(t,r)&&R(e,r,t[r]);if(E)for(var r of E(t))K.call(t,r)&&R(e,r,t[r]);return e};import{rc as P,rd as _,M as F,si as A,e as i,d as n,fu as q,sj as Y,n as I,i1 as z,g as H,ry as Q,rA as j,p as U,cv as V,cw as X,cx as Z,c9 as w,R as L,K as ee,bG as x,aw as M,i as te,t as b,Y as re,r as T,c8 as ie,bI as oe,fh as D,cE as f,jo as ae,hB as ne,b4 as le,kq as se,gA as ye,cr as pe}from"./vendor.4451b4ce.js";import{n as ue}from"./objectIdUtils.773397d7.js";let c=class extends P(_(F)){constructor(e){super(e),this.elevationInfo=null,this.graphics=new A,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};i([n({type:q})],c.prototype,"elevationInfo",void 0),i([n(Y(A,"graphics"))],c.prototype,"graphics",void 0),i([n({type:["show","hide"]})],c.prototype,"listMode",void 0),i([n()],c.prototype,"screenSizePerspectiveEnabled",void 0),i([n({readOnly:!0})],c.prototype,"type",void 0),i([n({constructOnly:!0})],c.prototype,"internal",void 0),c=i([I("esri.layers.GraphicsLayer")],c);const de=c;function J(e){return e.layers.some(t=>t.layerDefinition.visibilityField!=null)}const G=new z({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),ce=new z({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let g=class extends de{constructor(e){super(e),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",e=>{e.item.sourceLayer=this.layer}),this.graphics.on("after-remove",e=>{e.item.sourceLayer=null})}get sublayers(){return this.graphics}};i([n({readOnly:!0})],g.prototype,"sublayers",null),i([n()],g.prototype,"layer",void 0),i([n()],g.prototype,"layerId",void 0),i([n({readOnly:!0})],g.prototype,"visibilityMode",void 0),g=i([I("esri.layers.MapNotesLayer.MapNotesSublayer")],g);const C=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:new H().toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:new Q().toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:new j().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:new j().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:new U().toJSON()}];let a=class extends P(_(V(X(Z(F))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.minScale=0,this.maxScale=0,this.spatialReference=w.WGS84,this.sublayers=new L(C.map(t=>new g({id:t.id,layerId:t.layerId,title:t.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,r){return{operations:{supportsMapNotesEditing:!J(t)&&(r==null?void 0:r.origin)!=="portal-item"}}}readFeatureCollections(e,t,r){if(!J(t))return null;const o=t.layers.map(l=>{const s=new ee;return s.read(l,r),s});return new L({items:o})}readLegacyfeatureCollectionJSON(e,t){return J(t)?x(t.featureCollection):null}readFullExtent(e,t){if(!t.layers.length||t.layers.every(o=>!o.layerDefinition.extent))return new M({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:w.WGS84});const r=w.fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce((o,l)=>{const s=l.layerDefinition.extent;return s?M.fromJSON(s).union(o):o},new M({spatialReference:r}))}readMinScale(e,t){for(const r of t.layers)if(r.layerDefinition.minScale!=null)return r.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const r of t.layers)if(r.layerDefinition.maxScale!=null)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?w.fromJSON(t.layers[0].layerDefinition.spatialReference):w.WGS84}readSublayers(e,t,r){var s,p;if(J(t))return null;const o=[];let l=t.layers.reduce((y,u)=>{var d;return Math.max(y,(d=u.layerDefinition.id)!=null?d:-1)},-1)+1;for(const{layerDefinition:y,featureSet:u}of t.layers){const d=(s=y.geometryType)!=null?s:u.geometryType,m=(p=y.id)!=null?p:l++,h=C.find(S=>{var O,v,N;return d===S.geometryTypeJSON&&((N=(v=(O=y.drawingInfo)==null?void 0:O.renderer)==null?void 0:v.symbol)==null?void 0:N.type)===S.identifyingSymbol.type});if(h){const S=new g({id:h.id,title:y.name,layerId:m,layer:this,graphics:u.features.map(({geometry:O,symbol:v,attributes:N,popupInfo:k})=>te.fromJSON({attributes:N,geometry:O,symbol:v,popupTemplate:k}))});o.push(S)}}return new L(o)}writeSublayers(e,t,r,o){var d;const{minScale:l,maxScale:s}=this;if(b(e))return;const p=e.some(m=>m.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(p&&((d=o==null?void 0:o.messages)==null?void 0:d.push(new re("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const y=[];let u=this.spatialReference.toJSON();e:for(const m of e)for(const h of m.graphics)if(T(h.geometry)){u=h.geometry.spatialReference.toJSON();break e}for(const m of C){const h=e.find(S=>m.id===S.id);this._writeMapNoteSublayer(y,h,m,l,s,u,o)}ie("featureCollection.layers",y,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=x(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if(b(this.sublayers))return;let e=null;const t=[];for(const o of this.sublayers)for(const l of o.graphics)if(T(l.geometry)){const s=l.geometry;e?ne(s.spatialReference,e)||(le(s.spatialReference,e)||se()||await ye(),l.geometry=pe(s,e)):e=s.spatialReference,t.push(l)}const r=await oe(t.map(o=>o.geometry));t.forEach((o,l)=>o.geometry=r[l])}_findSublayer(e){var t,r;return b(this.sublayers)?null:(r=(t=this.sublayers)==null?void 0:t.find(o=>o.id===e))!=null?r:null}_writeMapNoteSublayer(e,t,r,o,l,s,p){const y=[];if(!b(t)){for(const u of t.graphics)this._writeMapNote(y,u,r.geometryType,p);this._normalizeObjectIds(y,G),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:x(r.identifyingSymbol)}},id:t.layerId,geometryType:r.geometryTypeJSON,minScale:o,maxScale:l,objectIdField:"OBJECTID",fields:[G.toJSON(),ce.toJSON()],spatialReference:s},featureSet:{features:y,geometryType:r.geometryTypeJSON}})}}_writeMapNote(e,t,r,o){var u,d;if(b(t))return;const{geometry:l,symbol:s,popupTemplate:p}=t;if(b(l))return;if(l.type!==r)return void((u=o==null?void 0:o.messages)==null?void 0:u.push(new D("map-notes-layer:invalid-geometry-type",`Geometry "${l.type}" cannot be saved in "${r}" layer`,{graphic:t})));if(b(s))return void((d=o==null?void 0:o.messages)==null?void 0:d.push(new D("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const y={attributes:$({},t.attributes),geometry:l.toJSON(),symbol:s.toJSON()};T(p)&&(y.popupInfo=p.toJSON()),e.push(y)}_normalizeObjectIds(e,t){const r=t.name;let o=ue(r,e)+1;const l=new Set;for(const s of e){s.attributes||(s.attributes={});const{attributes:p}=s;(p[r]==null||l.has(p[r]))&&(p[r]=o++),l.add(p[r])}}};i([n({readOnly:!0})],a.prototype,"capabilities",void 0),i([f(["portal-item","web-map"],"capabilities",["layers"])],a.prototype,"readCapabilities",null),i([n({readOnly:!0})],a.prototype,"featureCollections",void 0),i([f(["web-map","portal-item"],"featureCollections",["layers"])],a.prototype,"readFeatureCollections",null),i([n({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],a.prototype,"featureCollectionJSON",void 0),i([f(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],a.prototype,"readLegacyfeatureCollectionJSON",null),i([n({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],a.prototype,"featureCollectionType",void 0),i([n({json:{write:!1}})],a.prototype,"fullExtent",void 0),i([f(["web-map","portal-item"],"fullExtent",["layers"])],a.prototype,"readFullExtent",null),i([n({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:this.featureCollectionJSON!=null}}}}}}})],a.prototype,"legendEnabled",void 0),i([n({type:["show","hide"]})],a.prototype,"listMode",void 0),i([n({type:Number,nonNullable:!0,json:{write:!1}})],a.prototype,"minScale",void 0),i([f(["web-map","portal-item"],"minScale",["layers"])],a.prototype,"readMinScale",null),i([n({type:Number,nonNullable:!0,json:{write:!1}})],a.prototype,"maxScale",void 0),i([f(["web-map","portal-item"],"maxScale",["layers"])],a.prototype,"readMaxScale",null),i([n({readOnly:!0})],a.prototype,"multipointLayer",null),i([n({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],a.prototype,"operationalLayerType",void 0),i([n({readOnly:!0})],a.prototype,"pointLayer",null),i([n({readOnly:!0})],a.prototype,"polygonLayer",null),i([n({readOnly:!0})],a.prototype,"polylineLayer",null),i([n({type:w})],a.prototype,"spatialReference",void 0),i([f(["web-map","portal-item"],"spatialReference",["layers"])],a.prototype,"readSpatialReference",null),i([n({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],a.prototype,"sublayers",void 0),i([f("web-map","sublayers",["layers"])],a.prototype,"readSublayers",null),i([ae("web-map","sublayers")],a.prototype,"writeSublayers",null),i([n({readOnly:!0})],a.prototype,"textLayer",null),i([n()],a.prototype,"title",void 0),i([n({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),a=i([I("esri.layers.MapNotesLayer")],a);const he=a;export{he as default};
