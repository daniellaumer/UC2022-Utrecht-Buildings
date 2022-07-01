var H=Object.defineProperty,Y=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var U=(r,e,t)=>e in r?H(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,$=(r,e)=>{for(var t in e||(e={}))K.call(e,t)&&U(r,t,e[t]);if(_)for(var t of _(e))W.call(e,t)&&U(r,t,e[t]);return r},R=(r,e)=>Y(r,C(e));import{r as O,bY as X,jk as ee,jl as te,e as o,d as l,jm as re,ca as se,aw as Q,c9 as ie,c7 as oe,n as F,i0 as D,jn as ae,i as T,cE as ne,jo as le,jp as pe,bN as ue,bI as ye,jq as me,jr as ce,bz as de,i6 as fe,Y as M,t as he,ag as ge,j1 as we,aL as be,b9 as xe}from"./vendor.4451b4ce.js";import{q as ve}from"./DynamicLayerView3D.eadf2776.js";import{c as Pe}from"./ExportImageParameters.7a6972d6.js";import{n as J}from"./floorFilterUtils.69500d62.js";import{s as G}from"./clickToleranceUtils.501648d0.js";import{i as je}from"./sublayerUtils.f96d38e7.js";import{d as Ee,s as Ie}from"./popupUtils.22edcbf6.js";import{a as Ne}from"./drapedUtils.d291f5a9.js";import"./LayerView3D.721e0232.js";import"./projectExtentUtils.a90d09dd.js";import"./ImageMaterial.efa815a8.js";import"./LayerView.efa4cba5.js";import"./RefreshableLayerView.f09ad824.js";const L=r=>r.spatialReference.wkid||JSON.stringify(r.spatialReference);function $e(r,e){const{dpi:t,gdbVersion:i,geometry:s,geometryPrecision:n,height:f,layerOption:p,mapExtent:a,maxAllowableOffset:c,returnFieldName:y,returnGeometry:d,returnUnformattedValues:g,returnZ:E,spatialReference:P,timeExtent:j,tolerance:u,width:v}=r.toJSON(),{dynamicLayers:w,layerDefs:h,layerIds:b}=Oe(r),S=e&&O(e.geometry)?e.geometry:null,x={geometryPrecision:n,maxAllowableOffset:c,returnFieldName:y,returnGeometry:d,returnUnformattedValues:g,returnZ:E,tolerance:u},N=S&&S.toJSON()||s;if(x.imageDisplay=`${v},${f},${t}`,i&&(x.gdbVersion=i),N&&(delete N.spatialReference,x.geometry=JSON.stringify(N),x.geometryType=X(N)),P?x.sr=P.wkid||JSON.stringify(P):N&&N.spatialReference?x.sr=L(N):a&&a.spatialReference&&(x.sr=L(a)),x.time=j?[j.start,j.end].join(","):null,a){const{xmin:q,ymin:B,xmax:Z,ymax:z}=a;x.mapExtent=`${q},${B},${Z},${z}`}return h&&(x.layerDefs=h),w&&!h&&(x.dynamicLayers=w),x.layers=p==="popup"?"visible":p,b&&!w&&(x.layers+=`:${b.join(",")}`),x}function Oe(r){var P,j;const{mapExtent:e,floors:t,width:i,sublayers:s,layerIds:n,layerOption:f,gdbVersion:p}=r,a=(j=(P=s==null?void 0:s.find(u=>u.layer!=null))==null?void 0:P.layer)==null?void 0:j.serviceSublayers,c=f==="popup",y={},d=ee({extent:e,width:i,spatialReference:e==null?void 0:e.spatialReference}),g=[],E=u=>{const v=d===0,w=u.minScale===0||d<=u.minScale,h=u.maxScale===0||d>=u.maxScale;if(u.visible&&(v||w&&h))if(u.sublayers)u.sublayers.forEach(E);else{if((n==null?void 0:n.includes(u.id))===!1||c&&(!u.popupTemplate||!u.popupEnabled))return;g.unshift(u)}};if(s==null||s.forEach(E),s&&!g.length)y.layerIds=[];else{const u=je(g,a,p),v=g.map(w=>{const h=J(t,w);return w.toExportImageJSON(h)});if(u)y.dynamicLayers=JSON.stringify(v);else{if(s){let h=g.map(({id:b})=>b);n&&(h=h.filter(b=>n.includes(b))),y.layerIds=h}else(n==null?void 0:n.length)&&(y.layerIds=n);const w=Fe(t,g);if(O(w)&&w.length){const h={};for(const b of w)b.definitionExpression&&(h[b.id]=b.definitionExpression);Object.keys(h).length&&(y.layerDefs=JSON.stringify(h))}}}return y}function Fe(r,e){const t=!!(r==null?void 0:r.length),i=e.filter(s=>s.definitionExpression!=null||t&&s.floorInfo!=null);return i.length?i.map(s=>{const n=J(r,s),f=te(n,s.definitionExpression);return{id:s.id,definitionExpression:f}}):null}var V;let m=V=class extends D{constructor(r){super(r),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}static from(r){return ae(V,r)}};o([l({type:Number,json:{write:!0}})],m.prototype,"dpi",void 0),o([l()],m.prototype,"floors",void 0),o([l({type:String,json:{write:!0}})],m.prototype,"gdbVersion",void 0),o([l({types:re,json:{read:se,write:!0}})],m.prototype,"geometry",void 0),o([l({type:Number,json:{write:!0}})],m.prototype,"geometryPrecision",void 0),o([l({type:Number,json:{write:!0}})],m.prototype,"height",void 0),o([l({type:[Number],json:{write:!0}})],m.prototype,"layerIds",void 0),o([l({type:["top","visible","all","popup"],json:{write:!0}})],m.prototype,"layerOption",void 0),o([l({type:Q,json:{write:!0}})],m.prototype,"mapExtent",void 0),o([l({type:Number,json:{write:!0}})],m.prototype,"maxAllowableOffset",void 0),o([l({type:Boolean,json:{write:!0}})],m.prototype,"returnFieldName",void 0),o([l({type:Boolean,json:{write:!0}})],m.prototype,"returnGeometry",void 0),o([l({type:Boolean,json:{write:!0}})],m.prototype,"returnM",void 0),o([l({type:Boolean,json:{write:!0}})],m.prototype,"returnUnformattedValues",void 0),o([l({type:Boolean,json:{write:!0}})],m.prototype,"returnZ",void 0),o([l({type:ie,json:{write:!0}})],m.prototype,"spatialReference",void 0),o([l()],m.prototype,"sublayers",void 0),o([l({type:oe,json:{write:!0}})],m.prototype,"timeExtent",void 0),o([l({type:Number,json:{write:!0}})],m.prototype,"tolerance",void 0),o([l({type:Number,json:{write:!0}})],m.prototype,"width",void 0),m=V=o([F("esri.rest.support.IdentifyParameters")],m);const k=m;let I=class extends D{constructor(r){super(r),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(r,e){return T.fromJSON({attributes:$({},e.attributes),geometry:$({},e.geometry)})}writeFeature(r,e){if(!r)return;const{attributes:t,geometry:i}=r;t&&(e.attributes=$({},t)),O(i)&&(e.geometry=i.toJSON(),e.geometryType=pe.toJSON(i.type))}};o([l({type:String,json:{write:!0}})],I.prototype,"displayFieldName",void 0),o([l({type:T})],I.prototype,"feature",void 0),o([ne("feature",["attributes","geometry"])],I.prototype,"readFeature",null),o([le("feature")],I.prototype,"writeFeature",null),o([l({type:Number,json:{write:!0}})],I.prototype,"layerId",void 0),o([l({type:String,json:{write:!0}})],I.prototype,"layerName",void 0),I=o([F("esri.rest.support.IdentifyResult")],I);const Se=I;async function Re(r,e,t){const i=(e=Ae(e)).geometry?[e.geometry]:[],s=ue(r);return s.path+="/identify",ye(i).then(n=>{const f=$e(e,{geometry:n&&n[0]}),p=me($(R($({},s.query),{f:"json"}),f)),a=ce(p,t);return de(s.path,a).then(Ve).then(c=>Je(c,e.sublayers))})}function Ve(r){const e=r.data;e.results=e.results||[];const t={results:[]};return t.results=e.results.map(i=>Se.fromJSON(i)),t}function Ae(r){return r=k.from(r)}function Je(r,e){if(!(e==null?void 0:e.length))return r;const t=new Map;function i(s){t.set(s.id,s),s.sublayers&&s.sublayers.forEach(i)}e.forEach(i);for(const s of r.results)s.feature.sourceLayer=t.get(s.layerId);return r}const _e=r=>{let e=class extends r{initialize(){this.exportImageParameters=new Pe({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var t;return(t=this.exportImageParameters)==null||t.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(t,i){var f,p,a,c,y,d;const{layer:s}=this;if(!t)throw new M("mapimagelayer:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const n=(a=(p=(f=this.layer.capabilities)==null?void 0:f.operations)==null?void 0:p.supportsQuery)!=null?a:!0;if(!(((d=(y=(c=this.layer.capabilities)==null?void 0:c.operations)==null?void 0:y.supportsIdentify)!=null?d:!0)&&this.layer.version>=10.5)&&!n)throw new M("mapimagelayer:fetchPopupFeatures-not-supported","query operation is disabled for this service",{layer:s});return n?this._fetchPopupFeaturesUsingQueries(t,i):this._fetchPopupFeaturesUsingIdentify(t,i)}canResume(){var t;return!!super.canResume()&&!((t=this.timeExtent)==null?void 0:t.isEmpty)}async _fetchPopupFeaturesUsingIdentify(t,i){const s=await this._createIdentifyParameters(t,i);if(he(s))return[];const{results:n}=await Re(this.layer.parsedUrl,s);return n.map(f=>f.feature)}async _createIdentifyParameters(t,i){var j,u;const{floors:s,spatialReference:n,scale:f}=this.view,p=O(i)?i.event:null,a=await this._collectPopupProviders(this.layer.sublayers,f,i);if(!a.length)return null;await Promise.all(a.map(({sublayer:v})=>v.load().catch(()=>{})));const c=Math.min(ge("mapimagelayer-popup-identify-max-tolerance"),this.layer.allSublayers.reduce((v,w)=>w.renderer?G({renderer:w.renderer,event:p}):v,2)),y=this.createFetchPopupFeaturesQueryGeometry(t,c),d=we(f,n),g=Math.round(y.width/d),E=new Q({xmin:y.center.x-d*g,ymin:y.center.y-d*g,xmax:y.center.x+d*g,ymax:y.center.y+d*g,spatialReference:y.spatialReference}),P=((u=(j=this.layer.capabilities)==null?void 0:j.operations)==null?void 0:u.supportsQuery)===!1||await new Promise(v=>{let w=!1;Promise.all(a.map(async({popupTemplate:h})=>{if(h){const b=await this._loadArcadeModules(h);if(w)return;(b==null?void 0:b.arcadeUtils.hasGeometryOperations(h))&&(w=!0,v(!0))}})).finally(()=>v(!1))});return new k({floors:s,gdbVersion:this.layer.gdbVersion,geometry:t,height:g,layerOption:"popup",mapExtent:E,maxAllowableOffset:P?0:d,returnGeometry:!0,spatialReference:n,sublayers:this.layer.sublayers,timeExtent:this.timeExtent,tolerance:c,width:g})}async _fetchPopupFeaturesUsingQueries(t,i){const s=await this._collectPopupProviders(this.layer.sublayers,this.view.scale,i),n=O(i)?i.event:null,f=s.map(async({sublayer:p,popupTemplate:a})=>{var E,P;await p.load().catch(()=>{});const c=p.createQuery(),y=G({renderer:p.renderer,event:n}),d=this.createFetchPopupFeaturesQueryGeometry(t,y);if(c.geometry=d,c.outFields=await Ee(p,a),"floors"in this.view){const j=(P=(E=this.view)==null?void 0:E.floors)==null?void 0:P.clone(),u=J(j,p);O(u)&&(c.where=c.where?`(${c.where}) AND (${u})`:u)}const g=await this._loadArcadeModules(a);return g&&g.arcadeUtils.hasGeometryOperations(a)||(c.maxAllowableOffset=d.width/y),(await p.queryFeatures(c)).features});return(await be(f)).reduce((p,a)=>a.value?[...p,...a.value]:p,[]).filter(p=>p!=null)}async _collectPopupProviders(t,i,s){const n=[],f=async a=>{const c=a.minScale===0||i<=a.minScale,y=a.maxScale===0||i>=a.maxScale;if(a.visible&&c&&y){if(a.sublayers)a.sublayers.forEach(f);else if(a.popupEnabled){const d=Ie(a,R($({},s),{defaultPopupTemplateEnabled:!1}));O(d)&&n.unshift({sublayer:a,popupTemplate:d})}}},p=t.toArray().reverse().map(f);return await Promise.all(p),n}_loadArcadeModules(t){var i;if(((i=t.expressionInfos)==null?void 0:i.length)||Array.isArray(t.content)&&t.content.some(s=>s.type==="expression"))return xe()}};return o([l()],e.prototype,"exportImageParameters",void 0),o([l({readOnly:!0})],e.prototype,"exportImageVersion",null),o([l()],e.prototype,"layer",void 0),o([l()],e.prototype,"suspended",void 0),o([l(fe)],e.prototype,"timeExtent",void 0),e=o([F("esri.views.layers.MapImageLayerView")],e),e};let A=class extends _e(ve){constructor(){super(...arguments),this.type="map-image-3d"}initialize(){this.updatingHandles.add(()=>this.exportImageVersion,()=>this.updatingHandles.addPromise(this.refreshDebounced()))}createFetchPopupFeaturesQueryGeometry(r,e){return Ne(r,e,this.view)}getFetchOptions(){return{timeExtent:this.timeExtent}}};A=o([F("esri.views.3d.layers.MapImageLayerView3D")],A);const Ce=A;export{Ce as default};
