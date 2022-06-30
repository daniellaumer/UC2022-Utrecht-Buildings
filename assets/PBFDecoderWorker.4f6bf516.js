var y=Object.defineProperty,m=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var d=(s,e,t)=>e in s?y(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,c=(s,e)=>{for(var t in e||(e={}))P.call(e,t)&&d(s,t,e[t]);if(u)for(var t of u(e))C.call(e,t)&&d(s,t,e[t]);return s},p=(s,e)=>m(s,g(e));import{lw as _,hx as b,t as G,d7 as v,fS as x,lx as M,lo as R,gD as T,ly as k,lz as A,lA as w}from"./vendor.f59113c8.js";function Z(s,e){return e}function h(s,e,t,r){switch(t){case 0:return a(s,e+r,0);case 1:return s.originPosition==="lowerLeft"?a(s,e+r,1):F(s,e+r,1)}}function f(s,e,t,r){return t===2?a(s,e,2):h(s,e,t,r)}function L(s,e,t,r){return t===2?a(s,e,3):h(s,e,t,r)}function B(s,e,t,r){return t===3?a(s,e,3):f(s,e,t,r)}function a({translate:s,scale:e},t,r){return s[r]+t*e[r]}function F({translate:s,scale:e},t,r){return s[r]-t*e[r]}class S{constructor(e){this.options=e,this.geometryTypes=["point","multipoint","polyline","polygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=Z,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this._attributesConstructor=function(){}}createFeatureResult(){return new _}finishFeatureResult(e){if(this.options.applyTransform&&(e.transform=null),this._attributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,!e.hasZ)return;const t=b(e.geometryType,this.options.sourceSpatialReference,e.spatialReference);if(!G(t))for(const r of e.features)t(r.geometry)}createSpatialReference(){return new v}addField(e,t){e.fields.push(x.fromJSON(t));const r=e.fields.map(o=>o.name);this._attributesConstructor=function(){for(const o of r)this[o]=null}}addFeature(e,t){const r=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(r>0)for(const o in t.attributes){const n=t.attributes[o];typeof n=="string"&&n.length>r&&(t.attributes[o]="")}e.features.push(t)}addQueryGeometry(e,t){const{queryGeometry:r,queryGeometryType:o}=t,n=M(r.clone(),r,!1,!1,this.transform),l=R(n,o,!1,!1);let i=null;switch(o){case"esriGeometryPoint":i="point";break;case"esriGeometryPolygon":i="polygon";break;case"esriGeometryPolyline":i="polyline";break;case"esriGeometryMultipoint":i="multipoint"}l.type=i,e.queryGeometryType=o,e.queryGeometry=l}prepareFeatures(e){switch(this.transform=e.transform,this.options.applyTransform&&e.transform&&(this.applyTransform=this._deriveApplyTransform(e)),this.vertexDimension=2,e.hasZ&&this.vertexDimension++,e.hasM&&this.vertexDimension++,e.geometryType){case"point":this.addCoordinate=(t,r,o)=>this.addCoordinatePoint(t,r,o),this.createGeometry=t=>this.createPointGeometry(t);break;case"polygon":this.addCoordinate=(t,r,o)=>this._addCoordinatePolygon(t,r,o),this.createGeometry=t=>this._createPolygonGeometry(t);break;case"polyline":this.addCoordinate=(t,r,o)=>this._addCoordinatePolyline(t,r,o),this.createGeometry=t=>this._createPolylineGeometry(t);break;case"multipoint":this.addCoordinate=(t,r,o)=>this._addCoordinateMultipoint(t,r,o),this.createGeometry=t=>this._createMultipointGeometry(t);break;case"mesh":case"extent":break;default:T(e.geometryType)}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,new k(A(),null,new this._attributesConstructor)}allocateCoordinates(){const e=this.lengths.reduce((t,r)=>t+r,0);this.coordinateBuffer=new Float64Array(e*this.vertexDimension),this.coordinateBufferPtr=0}addLength(e,t,r){this.lengths.length===0&&(this.toAddInCurrentPath=t),this.lengths.push(t)}createPointGeometry(e){const t={type:"point",x:0,y:0,spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM};return t.hasZ&&(t.z=0),t.hasM&&(t.m=0),t}addCoordinatePoint(e,t,r){switch(t=this.applyTransform(this.transform,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:e.hasZ?e.z=t:e.m=t;break;case 3:e.m=t}}_transformPathLikeValue(e,t){let r=0;return t<=1&&(r=this.previousCoordinate[t],this.previousCoordinate[t]+=e),this.applyTransform(this.transform,e,t,r)}_addCoordinatePolyline(e,t,r){this._dehydratedAddPointsCoordinate(e.paths,t,r)}_addCoordinatePolygon(e,t,r){this._dehydratedAddPointsCoordinate(e.rings,t,r)}_addCoordinateMultipoint(e,t,r){r===0&&e.points.push([]);const o=this._transformPathLikeValue(t,r);e.points[e.points.length-1].push(o)}_createPolygonGeometry(e){return{type:"polygon",rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createPolylineGeometry(e){return{type:"polyline",paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createMultipointGeometry(e){return{type:"multipoint",points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_dehydratedAddPointsCoordinate(e,t,r){r===0&&this.toAddInCurrentPath--==0&&(e.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const o=this._transformPathLikeValue(t,r),n=e[e.length-1];r===0&&n.push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension)),this.coordinateBuffer[this.coordinateBufferPtr++]=o}_deriveApplyTransform(e){const{hasZ:t,hasM:r}=e;return t&&r?B:t?f:r?L:h}}class D{_parseFeatureQuery(e){const t=w(e.buffer,new S(e.options)),r=p(c({},t),{spatialReference:t.spatialReference.toJSON(),fields:t.fields?t.fields.map(o=>o.toJSON()):void 0});return Promise.resolve(r)}}function N(){return new D}export{N as default};
