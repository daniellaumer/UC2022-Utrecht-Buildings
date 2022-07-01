var ke=Object.defineProperty;var ge=Object.getOwnPropertySymbols;var He=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable;var me=(t,e,i)=>e in t?ke(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,_e=(t,e)=>{for(var i in e||(e={}))He.call(e,i)&&me(t,i,e[i]);if(ge)for(var i of ge(e))Be.call(e,i)&&me(t,i,e[i]);return t};import{v as Xe,c9 as Ie,at as c,l9 as se,h7 as $,j6 as q,h6 as Ee,aU as Ue,aW as Q,aX as Y,h5 as Ze,la as Ke,lb as re,aq as J,lc as ne,ld as We,le as Ye,gF as Je,ha as ae,b4 as je,lf as Qe,iZ as fe,lg as et,lh as Le,li as ye,jX as tt,h9 as ee,iU as ve,aV as Se,lj as it,bo as st,lk as rt,dh as we,ll as nt,lm as at,r as _,an as qe,ln as ot,e as o,d as l,n as te,y as ue,H as F,U as Ce,lo as ht,lp as lt,ai as dt,a6 as ct,u as Fe,as as be,z as v,lq as ut,T as oe,lr as pt,t as N,b5 as j,aY as gt,er as mt,es as _t,ee as T,ew as Pe,ey as ft,eu as Lt,ls as Me,eD as yt,eE as E,lt as vt,eG as X,eJ as St,eL as wt,eM as Ct,eN as bt,eO as Pt,eP as Mt,eR as At,eS as $t,eT as Vt,eU as Rt,eH as x,eK as zt,eZ as Gt,e$ as Dt,bu as Z,eB as Ae,f1 as xt,f2 as Ot,iW as Tt,f4 as It,lu as G,gg as $e,lv as Ve,g_ as Re,gc as Et,ed as Ut,fN as Wt,lw as jt,lx as qt,ly as Ft,lz as Nt,k1 as kt,lA as Ht,lB as Bt,lC as Xt,lD as Zt,lE as Kt}from"./vendor.4451b4ce.js";import{z as Ne,c as he,e as le,t as Yt,g as ze,r as Jt}from"./quantityFormatUtils.2e5e8ddc.js";import{n as Qt,C as U,a as ei}from"./LineVisualElement.52d411f6.js";import{o as W,a as Ge,v as K,m as De,b as ti,l as de}from"./Segment.2013d042.js";import{geodesicArea as ii}from"./geometryEngine.67e87d0f.js";import{a as si}from"./projectionUtils.57db1631.js";import{S as xe,g as ri,x as ni,p as ai}from"./EditGeometryOperations.e04e3e62.js";function oi(t,e){const i=e.center;Ue(i,0,0,0);for(let r=0;r<t.length;++r)Q(i,i,t[r]);Y(i,i,1/t.length);let s=0;for(let r=0;r<t.length;++r)s=Math.max(s,Ze(i,t[r]));e.radius=Math.sqrt(s)}function hi(t,e){if(t.length<3)throw new Error("need at least 3 points to fit a plane");Ke(t[0],t[1],t[2],e)}function li(t,e){return $(t,e)+t[3]}function di(t,e,i){return q(t,V,i)&&q(e,R,i)?Ee(V,R):0}function ci(t,e){if(!re(t,V)||!re(e,R))return 0;const i={distance:null};return Ne(i,[V[0],V[1]],[R[0],R[1]]),i.distance}function ui(t,e,i){const s={distance:null};return Ne(s,[t[0],t[1]],[e[0],e[1]],i),s.distance}function pi(t,e,i,s){const r=mi;return se(t,s,V)&&se(e,s,R)&&se(i,s,ce)?(r.setPoint(0,0,V),r.setPoint(0,1,R),r.setPoint(0,2,ce),Math.abs(ii(r,"square-meters"))):0}function gi(t,e=null,i=!0){const r=(n,a)=>{if(a[0]===0&&a[1]===0&&a[2]===0)return!1;for(let h=0;h<n.length;++h)if($(a,n[h])<-1e-6)return!1;return!0};if(t.length===0)return!1;if(t.length===1)return e&&J(e,t[0]),!0;Ue(S,0,0,0);for(let n=0;n<t.length;++n)Q(S,S,t[n]);if(ne(S,S),r(t,S))return e&&J(e,S),!0;if(!i)return!1;for(let n=0;n<t.length;++n)for(let a=0;a<t.length;++a)if(n!==a&&(We(S,t[n],t[a]),ne(S,S),r(t,S)))return e&&J(e,S),!0;return!1}const V=c(),R=c(),ce=c(),mi=new Xe({rings:[[V,R,ce]],spatialReference:Ie.WGS84}),S=c();function Oe(t){return Ye(_i(t),[],2)}function _i(t){const e=new Float64Array(2*t.length);for(let i=0;i<t.length;++i){const s=t[i],r=2*i;e[r+0]=s[0],e[r+1]=s[1]}return e}class fi{constructor(e,i){this.positionsWorldCoords=[],this.positionsRenderCoords=[],this.positionsProjectedWorldCoords=[],this.positionsFittedRenderCoords=[],this.positionsGeographic=[],this.positionsSpherical=[],this.positionsStereographic=[],this.pathSegmentLengths=[],this.geodesicPathSegmentLengths=[],this.perimeterSegmentLengths=[],this.intersectingSegments=new Set,this.geodesicIntersectingSegments=new Set,this.areaCentroidWorldCoords=c(),this.areaCentroidRenderCoords=c(),this.geodesicAreaCentroidRenderCoords=c(),this._length=0,this._centroidRenderCoords=c(),this._planeWorldCoords=Je(),this._worldUp=c(),this._worldTangent=c(),this._frame=[c(),c(),c()],this._pathVersion=-1,this._validMeasurement=!1,this._hasCursorPoint=!1,this._mode=null,this._tempU=c(),this._tempV=c(),this._tempVec3=c(),this._tempSphere={center:c(),radius:0},this._sceneView=e,this.unitNormalizer=i}update(e,i,s,r,n,a,h){const d=this.unitNormalizer,p=this._sceneView.renderSpatialReference,u=this.unitNormalizer.spatialReference,m=_(i);if(this._pathVersion===e.version&&this._validMeasurement===r&&!h&&this._hasCursorPoint===m&&this._mode===a)return!e.isValidPolygon&&(this._updateCursorSegmentLength(e,i),!0);this._pathVersion=e.version,this._validMeasurement=r,this._hasCursorPoint=m;const g=e.numVertices;this._resize(g);const y=ae(s.spatialReference),b=je(s.spatialReference,y)&&Qe(s.spatialReference),{positionsGeographic:P,positionsWorldCoords:k,positionsRenderCoords:M,positionsSpherical:D}=this;e.forEachVertexPosition((L,C)=>{Li(s.elevationProvider,L),q(L,k[C],u),q(L,M[C],p),b&&(re(L,P[C]),q(L,D[C],y),ne(D[C],D[C]))});const H=this._updatePathLengths(r);if(this.pathLength=this._length>1?W(d.normalizeDistance(H),"meters"):null,b){const L=this._updateGeodesicPathLengths(r,u);this.geodesicPathLength=this._length>1?W(L,"meters"):null}else this.geodesicPathLength=null;return this._updateCursorSegmentLength(e,i),this._updateMode(e,a),r?(this._updateArea(s,d,p,u,n),b&&this._updateGeodesicArea(s),!0):(this.area=null,this.geodesicArea=null,this.perimeterLength=null,this.triangleIndices=null,this.geodesicTriangleIndices=null,this.intersectingSegments.clear(),this.geodesicIntersectingSegments.clear(),!0)}getData(){return{positionsWorldCoords:this.positionsWorldCoords,positionsRenderCoords:this.positionsRenderCoords,positionsProjectedWorldCoords:this.positionsProjectedWorldCoords,positionsFittedRenderCoords:this.positionsFittedRenderCoords,positionsGeographic:this.positionsGeographic,positionsSpherical:this.positionsSpherical,positionsStereographic:this.positionsStereographic,pathSegmentLengths:this.pathSegmentLengths,geodesicPathSegmentLengths:this.geodesicPathSegmentLengths,perimeterSegmentLengths:this.perimeterSegmentLengths,intersectingSegments:this.intersectingSegments,geodesicIntersectingSegments:this.geodesicIntersectingSegments,triangleIndices:this.triangleIndices,geodesicTriangleIndices:this.geodesicTriangleIndices,areaCentroidWorldCoords:this.areaCentroidWorldCoords,areaCentroidRenderCoords:this.areaCentroidRenderCoords,geodesicAreaCentroidRenderCoords:this.geodesicAreaCentroidRenderCoords,fittingMode:this.fittingMode,area:this.area,geodesicArea:this.geodesicArea,pathLength:this.pathLength,geodesicPathLength:this.geodesicPathLength,perimeterLength:this.perimeterLength,cursorSegmentLength:this.cursorSegmentLength,geodesicCursorSegmentLength:this.geodesicCursorSegmentLength,unitNormalizer:this.unitNormalizer,actualMeasurementMode:this.actualMeasurementMode}}_resize(e){for(e<this._length&&(this.positionsWorldCoords.length=e,this.positionsRenderCoords.length=e,this.positionsProjectedWorldCoords.length=e,this.positionsFittedRenderCoords.length=e,this.positionsGeographic.length=e,this.positionsSpherical.length=e,this.positionsStereographic.length=e,this.pathSegmentLengths.length=e,this.geodesicPathSegmentLengths.length=e,this.perimeterSegmentLengths.length=e,this._length=e);this._length<e;)this.positionsWorldCoords.push(c()),this.positionsRenderCoords.push(c()),this.positionsProjectedWorldCoords.push(fe()),this.positionsFittedRenderCoords.push(c()),this.positionsGeographic.push(c()),this.positionsSpherical.push(c()),this.positionsStereographic.push(fe()),this.pathSegmentLengths.push(0),this.geodesicPathSegmentLengths.push(0),this.perimeterSegmentLengths.push(0),++this._length}_updatePathLengths(e){const i=this.positionsWorldCoords,s=this.pathSegmentLengths;let r=0;for(let n=0;n<this._length;++n){const a=s[n]=Ee(i[n],i[(n+1)%this._length]);(n<this._length-1||e)&&(r+=a)}return r}_updateGeodesicPathLengths(e,i){const s=this.positionsGeographic,r=this.geodesicPathSegmentLengths;let n=0;for(let a=0;a<this._length;++a){const h=r[a]=ui(s[a],s[(a+1)%this._length],i);(a<this._length-1||e)&&(n+=h)}return n}_updateArea(e,i,s,r,n){const a=e.renderCoordsHelper,h=this.positionsWorldCoords,d=this.positionsRenderCoords,p=this.positionsProjectedWorldCoords,u=this.positionsFittedRenderCoords,m=this._planeWorldCoords,g=this._centroidRenderCoords;he(d,g),a.worldUpAtPosition(g,this._worldUp),a.worldBasisAtPosition(g,et.X,this._worldTangent),Le(g,this._worldUp,s,this._worldUp,r),Le(g,this._worldTangent,s,this._worldTangent,r),h.length>2&&hi(h,m),this.fittingMode=this._selectFittingMode(m,h,this._worldUp,n);let y=0;if(this.fittingMode==="horizontal"){let L=-1/0;d.forEach((C,B)=>{const pe=a.getAltitude(d[B]);pe>L&&(L=pe,y=B)})}const b=h[y];let P=m,k=this._worldTangent;this.fittingMode==="horizontal"?P=this._worldUp:this.fittingMode==="vertical"&&(P=this._tempVec3,k=this._worldUp,ye(m,this._worldUp,P)),J(this._frame[2],P),ye(k,P,this._frame[0]),We(this._frame[1],this._frame[0],this._frame[2]),tt(this._frame[1],this._frame[1]);const M=this._tempVec3,D=this._tempU,H=this._tempV;for(let L=0;L<this._length;++L){const C=p[L],B=u[L];ee(M,h[L],b),ve(C,$(this._frame[0],M),$(this._frame[1],M)),Y(D,this._frame[0],C[0]),Y(H,this._frame[1],C[1]),Q(M,D,H),Q(M,M,b),Se(M,r,B,s)}this.perimeterLength=this._length>0?W(i.normalizeDistance(this._updatePerimeterLengths()),"meters"):null,he(u,this.areaCentroidRenderCoords),Se(this.areaCentroidRenderCoords,s,this.areaCentroidWorldCoords,r),this._updateIntersectingSegments(),this.area=this.intersectingSegments.size===0?Ge(i.normalizeArea(this._computeArea()),"square-meters"):null}_updateGeodesicArea(e){const{renderCoordsHelper:i,spatialReference:s}=e,{positionsSpherical:r,positionsStereographic:n}=this,a=this._tempVec3,h=gi(r,a);if(!h)return void(this.geodesicArea=null);const d=this._tempU,p=this._tempV;it(a,d,p);for(let u=0;u<this._length;++u){const m=$(r[u],d),g=$(r[u],p),y=$(r[u],a);ve(n[u],m/y,g/y)}Y(a,a,st(s).radius),i.toRenderCoords(a,ae(s),this.geodesicAreaCentroidRenderCoords),this._updateGeodesicIntersectingSegments(),this.geodesicArea=h&&this.geodesicIntersectingSegments.size===0?Ge(this._computeGeodesicArea(),"square-meters"):null}_updatePerimeterLengths(){const e=this.positionsProjectedWorldCoords,i=this.perimeterSegmentLengths;let s=0;for(let r=0;r<this._length;++r)s+=i[r]=rt(e[r],e[(r+1)%this._length]);return s}_updateIntersectingSegments(){const e=this.positionsProjectedWorldCoords,i=this.intersectingSegments;i.clear();for(let s=0;s<this._length;++s)for(let r=s+2;r<this._length;++r){if((r+1)%this._length===s)continue;const n=e[s],a=e[(s+1)%this._length],h=e[r],d=e[(r+1)%this._length];we(n,a,h,d)&&(i.add(s),i.add(r))}}_computeArea(){const e=this.positionsProjectedWorldCoords,i=this.triangleIndices=new Uint32Array(Oe(e));let s=0;for(let r=0;r<i.length;r+=3)s+=nt(e[i[r]],e[i[r+1]],e[i[r+2]]);return s}_updateGeodesicIntersectingSegments(){const e=this.positionsStereographic,i=this.geodesicIntersectingSegments;i.clear();for(let s=0;s<this._length;++s)for(let r=s+2;r<this._length;++r){if((r+1)%this._length===s)continue;const n=e[s],a=e[(s+1)%this._length],h=e[r],d=e[(r+1)%this._length];we(n,a,h,d)&&(i.add(s),i.add(r))}}_computeGeodesicArea(){const e=this.positionsGeographic,i=this.positionsStereographic,s=this.geodesicTriangleIndices=new Uint32Array(Oe(i));let r=0;for(let n=0;n<s.length;n+=3)r+=pi(e[s[n]],e[s[n+1]],e[s[n+2]],Ie.WGS84);return r}_selectFittingMode(e,i,s,r){const n=i.map(u=>Math.abs(li(e,u))).reduce((u,m)=>Math.max(u,m),0);oi(i,this._tempSphere);const a=n/(2*this._tempSphere.radius),h=a<r.maxRelativeErrorCoplanar,d=a<r.maxRelativeErrorAlmostCoplanar;let p="horizontal";return h?p="oblique":d&&(p=Math.abs($(s,e))>Math.cos(at(r.verticalAngleThreshold))?"horizontal":"vertical"),p}_updateCursorSegmentLength(e,i){const s=e.lastPoint;!e.isValidPolygon&&_(s)&&_(i)?(this.geodesicCursorSegmentLength=W(ci(s,i),"meters"),this.cursorSegmentLength=W(this.unitNormalizer.normalizeDistance(di(s,i,this.unitNormalizer.spatialReference)),"meters")):(this.geodesicCursorSegmentLength=null,this.cursorSegmentLength=null)}_updateMode(e,i){if(i===le.Auto){this.actualMeasurementMode="euclidean";let s=0;this.geodesicPathLength!=null&&(s+=this.geodesicPathLength.value),!e.isValidPolygon&&_(this.geodesicCursorSegmentLength)&&(s+=this.geodesicCursorSegmentLength.value),s>yi&&(this.actualMeasurementMode="geodesic")}else this.actualMeasurementMode=i===le.Euclidean?"euclidean":"geodesic";this.geodesicPathLength==null&&(this.actualMeasurementMode="euclidean"),this._mode=i}}function Li(t,e){e.hasZ||(e.z=qe(ot(t,e,"ground"),0))}const yi=1e5;let O=class extends ue{constructor(t){super(t)}initialize(){const{spatialReference:t}=this.view,e=ae(t),i=e===ht?lt:e,s=!t||je(t,i)?i:t,r=new Yt(s);this._measurementDataManager=new fi(this.view,r),this.own([this.analysisViewData.path.on("change",()=>this._update()),F(()=>this.analysisViewData.cursorPoint,()=>this._update(),Ce),F(()=>this.analysisViewData.mode,()=>this._update(),Ce)]),this._update()}_update(t=!1){const{analysisViewData:e,view:i}=this,s={maxRelativeErrorCoplanar:.005,maxRelativeErrorAlmostCoplanar:.01,verticalAngleThreshold:80};this._measurementDataManager.update(e.path,e.cursorPoint,i,e.validMeasurement,s,e.mode,t)&&(e.measurementData=this._measurementDataManager.getData())}};o([l({constructOnly:!0})],O.prototype,"view",void 0),o([l({constructOnly:!0})],O.prototype,"analysis",void 0),o([l({constructOnly:!0})],O.prototype,"analysisViewData",void 0),O=o([te("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurementController")],O);const vi=dt.getLogger("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurement3DPathHelper");let A=class extends ct.EventedAccessor{constructor(t={}){super(t),this._handles=new Fe,this._version=0,this._internalGeometryChange=!1,this._extent=be()}destroy(){this._handles=v(this._handles)}set areaMeasurement(t){this._set("areaMeasurement",t),_(t)&&_(this.view)&&this._initialize(t,this.view)}set view(t){this._set("view",t),_(t)&&_(this.areaMeasurement)&&this._initialize(this.areaMeasurement,t)}get initialized(){return _(this.areaMeasurement)&&_(this.view)}get version(){return this._version}get isValidPolygon(){return this.initialized&&this.editGeometry.components.length>0&&this.editGeometry.components[0].isClosed()}get extent(){if(this.initialized&&this.editGeometry.components.length>0&&this.editGeometry.components[0].vertices.length>0){const t=be(this._extent);return this.forEachVertex(e=>{ut(t,e.pos)}),t}return null}get spatialReference(){return this.initialized?this.editGeometry.coordinateHelper.spatialReference:null}_initialize(t,e){this._handles.removeAll(),this._handles.add(F(()=>t.geometry,()=>{this._updateEditGeometryFromModelGeometry(t,e)},oe)),this._makeDirty(!0)}_makeDirty(t=!1){this.notifyChange("isValidPolygon"),this.notifyChange("initialized"),this.notifyChange("extent"),t&&this.notifyChange("numVertices")}_updateEditGeometryFromModelGeometry(t,e){if(this._version++,this._internalGeometryChange)return;this._handles.remove("EditGeometry");let i=t.geometry;if(_(i)){const s=pt(i,e.spatialReference);N(s)&&si(t,i.spatialReference,vi),i=s}_(i)?this._editGeometryOperations=xe.fromGeometry(i,e.state.viewingMode):this._editGeometryOperations=new xe(new ri("polygon",ni(!0,!1,e.spatialReference))),this._makeDirty(!0),this.emit("change"),this._handles.add(this.editGeometry.on("change",s=>{this._makeDirty(s.addedVertices!=null||s.removedVertices!=null),this._internalGeometryChange=!0,t.geometry=this.numVertices>0?this.editGeometry.geometry:null,this._internalGeometryChange=!1}),"EditGeometry")}get editGeometry(){return this._editGeometryOperations.data}get vertices(){const t=[];return this.forEachVertex(e=>{t.push(e)}),t}get numVertices(){return this.initialized&&this.editGeometry.components.length>0?this.editGeometry.components[0].vertices.length:0}get lastPoint(){if(this.initialized&&this.editGeometry.components.length>0){const t=this.editGeometry.components[0].getLastVertex();if(_(t))return this.editGeometry.coordinateHelper.vectorToPoint(t.pos)}return null}getVertex(t){if(!this.initialized||this.editGeometry.components.length===0||this.editGeometry.components[0].vertices.length===0)return null;const e=this.editGeometry.components[0].vertices[0];let i=e;do{if(i.index===t)return i;i=i.rightEdge.rightVertex}while(i!==e&&i!=null);return null}getVertexPositionAsPoint(t){return this.editGeometry.coordinateHelper.vectorToPoint(t.pos)}getVertexPositionAsPointFromIndex(t){return this.editGeometry.coordinateHelper.vectorToPoint(this.getVertex(t).pos)}forEachVertex(t){this.initialized&&this.editGeometry.components.length>0&&this.editGeometry.components[0].iterateVertices(t)}forEachVertexPosition(t){const e=this.editGeometry.coordinateHelper;this.forEachVertex((i,s)=>{e.vectorToPoint(i.pos,Te),t(Te,s)})}clear(){_(this.areaMeasurement)&&(this.areaMeasurement.geometry=null)}add(t){if(!this.initialized)return null;if(this.editGeometry.components.length===0){const i=j(this.view);this.editGeometry.components.push(new ai(i.spatialReference,i.state.viewingMode))}const e=this._editGeometryOperations.appendVertex(this.editGeometry.coordinateHelper.pointToVector(t));return this.emit("change"),e}close(){if(!this.initialized||this.editGeometry.components.length===0)return null;const t=this._editGeometryOperations.closeComponent(this.editGeometry.components[0]);return this.emit("change"),t}ensureContains(t,e=""){let i=!1;if(this.editGeometry.components.forEach(s=>{s.iterateVertices(r=>{r===t&&(i=!0)})}),!i)throw new Error(`vertex doesnt exist ${e}`);return i}setVertexPosition(t,e){if(!this.initialized)return null;const i=this._editGeometryOperations.setVertexPosition(t,this.editGeometry.coordinateHelper.pointToVector(e));return this.emit("change"),i}equals(t){if(this.numVertices!==t.numVertices)return!1;let e=!0;return this.forEachVertexPosition((i,s)=>{const r=t.getVertexPositionAsPointFromIndex(s);i.equals(r)||(e=!1)}),!!e}};o([l({value:null})],A.prototype,"areaMeasurement",null),o([l({value:null})],A.prototype,"view",null),o([l()],A.prototype,"isValidPolygon",null),o([l()],A.prototype,"extent",null),o([l()],A.prototype,"spatialReference",null),o([l()],A.prototype,"numVertices",null),A=o([te("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurement3DPathHelper")],A);const Te=new gt;function Si(t){const e=new mt;return e.extensions.add("GL_OES_standard_derivatives"),_t(e,t),e.attributes.add(T.POSITION,"vec3"),e.attributes.add(T.UV0,"vec2"),e.varyings.add("vUV","vec2"),t.hasMultipassTerrain&&e.varyings.add("depth","float"),e.vertex.code.add(Pe`
    void main(void) {
      vUV = uv0;
      ${t.hasMultipassTerrain?"depth = (view * vec4(position, 1.0)).z;":""}
      gl_Position = proj * view * vec4(position, 1.0);
    }
  `),e.include(ft,t),e.fragment.uniforms.add(new Lt("size",i=>i.size)),e.fragment.uniforms.add(new Me("color1",i=>i.color1)),e.fragment.uniforms.add(new Me("color2",i=>i.color2)),e.fragment.include(yt),e.fragment.code.add(Pe`
    void main() {
      ${t.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      vec2 uvScaled = vUV / (2.0 * size);

      vec2 uv = fract(uvScaled - 0.25);
      vec2 ab = clamp((abs(uv - 0.5) - 0.25) / fwidth(uvScaled), -0.5, 0.5);
      float fade = smoothstep(0.25, 0.5, max(fwidth(uvScaled.x), fwidth(uvScaled.y)));
      float t = mix(abs(ab.x + ab.y), 0.5, fade);

      gl_FragColor = mix(color2, color1, t);
      ${t.transparencyPassType===E.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
  `),e}const wi=Object.freeze(Object.defineProperty({__proto__:null,build:Si},Symbol.toStringTag,{value:"Module"}));class ie extends wt{initializeProgram(e){const i=ie.shader.get().build(this.configuration);return new Ct(e.rctx,i,bt)}_setPipelineState(e){const i=this.configuration,s=e===E.NONE,r=e===E.FrontFace;return Pt({blending:i.transparent?s?bi:Mt(e):null,depthTest:{func:At(e)},depthWrite:s?i.writeDepth&&$t:Vt(e),colorWrite:Rt,polygonOffset:s||r?i.polygonOffset&&Ci:{factor:-1,units:-25}})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}}ie.shader=new St(wi,()=>import("./CheckerBoard.glsl.6f867113.js"));const Ci={factor:0,units:-25},bi=vt(X.SRC_ALPHA,X.ONE,X.ONE_MINUS_SRC_ALPHA,X.ONE_MINUS_SRC_ALPHA);class z extends zt{constructor(){super(...arguments),this.transparencyPassType=E.NONE,this.transparent=!1,this.writeDepth=!0,this.polygonOffset=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}o([x({count:E.COUNT})],z.prototype,"transparencyPassType",void 0),o([x()],z.prototype,"transparent",void 0),o([x()],z.prototype,"writeDepth",void 0),o([x()],z.prototype,"polygonOffset",void 0),o([x()],z.prototype,"hasMultipassTerrain",void 0),o([x()],z.prototype,"cullAboveGround",void 0);class Pi extends Gt{constructor(e){super(e,new Ai),this.techniqueConfig=new z}dispose(){}getConfiguration(e,i){return this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.polygonOffset=this.parameters.polygonOffset,this.techniqueConfig.transparencyPassType=i?i.transparencyPassType:E.NONE,this.techniqueConfig.hasMultipassTerrain=!!i&&i.multipassTerrain.enabled,this.techniqueConfig.cullAboveGround=!!i&&i.multipassTerrain.cullAboveGround,this.techniqueConfig}intersect(e,i,s,r,n,a,h){return Dt(e,i,r,n,a,void 0,h)}requiresSlot(e){let i=Z.OPAQUE_MATERIAL;return this.parameters.transparent&&(i=this.parameters.writeDepth?Z.TRANSPARENT_MATERIAL:Z.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL),e===i||e===Z.DRAPED_MATERIAL}createGLMaterial(e){return e.output===Ae.Color||e.output===Ae.Alpha?new Mi(e):null}createBufferWriter(){return new xt(Ot)}}class Mi extends Tt{beginSlot(e){return this.ensureTechnique(ie,e)}}class Ai extends It{constructor(){super(...arguments),this.size=[1,1],this.color1=[.75,.75,.75,1],this.color2=[.5,.5,.5,1],this.transparent=!1,this.writeDepth=!0,this.polygonOffset=!1}}class $i extends Qt{constructor(e){super(e),this._checkerBoardMaterial=null,this._renderOccluded=G.OccludeAndTransparent,this._geometry=null,this._size=[1,1],this._color1=$e(1,.5,0,.5),this._color2=$e(1,1,1,.5),this.applyProps(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this._geometryChanged()}get size(){return this._size}set size(e){this._size=e,this._updateMaterial()}get color1(){return this._color1}set color1(e){Ve(e,this._color1)||(Re(this._color1,e),this._updateMaterial())}get color2(){return this._color2}set color2(e){Ve(e,this._color2)||(Re(this._color2,e),this._updateMaterial())}_updateMaterial(){_(this._checkerBoardMaterial)&&this._checkerBoardMaterial.setParameters({size:this._size,color1:this._color1,color2:this._color2,renderOccluded:this._renderOccluded})}createExternalResources(){this._checkerBoardMaterial=new Pi({size:this._size,color1:this._color1,color2:this._color2,transparent:!0,writeDepth:!1,polygonOffset:!0,renderOccluded:G.OccludeAndTransparent})}destroyExternalResources(){this._checkerBoardMaterial=null}forEachExternalMaterial(e){_(this._checkerBoardMaterial)&&e(this._checkerBoardMaterial)}createGeometries(e){if(N(this._geometry)||N(this._checkerBoardMaterial))return;const i=Vi;Et(i,this.transform);const s=this._geometry,r=[],n=c();s.position.forEach(d=>{ee(n,d,i),r.push(n[0],n[1],n[2])});const a=[];s.uv.forEach(d=>{a.push(d[0],d[1])});const h=new Ut([[T.POSITION,{size:3,data:r,exclusive:!0}],[T.UV0,{size:2,data:a,exclusive:!0}]],[[T.POSITION,s.triangleIndices],[T.UV0,s.triangleIndices]]);e.addGeometry(h,this._checkerBoardMaterial)}_geometryChanged(){this.recreateGeometry()}}const Vi=c();let w=class extends ue{constructor(t){super(t),this._handles=new Fe,this._params=_e({},Ri),this._path=null,this._intersectedPath=null,this._perimeter=null,this._intersectedPerimeter=null,this._projectionLines=null,this._measurementArea=null,this._areaLabel=null,this._pathLengthLabel=null,this._cursorSegmentLengthLabel=null,this._perimeterLengthLabel=null,this._pathSegments=[],this._perimeterSegments=[],this._cursorSegment=null,this._origin=c(),this._originTransform=Wt(),this._cursorPositionRenderSpace=c(),this.messages=null,this.viewData=zi,this.areaLabel=null,this.perimeterLengthLabel=null,this.loadingMessages=!0}get visible(){return this.analysisViewData.visible}get testData(){return{labels:{area:this._areaLabel,pathLength:this._pathLengthLabel,cursorSegmentLength:this._cursorSegmentLengthLabel,perimeterLength:this._perimeterLengthLabel}}}initialize(){const{analysisViewData:t,_params:e,view:i}=this;this._path=new U({view:i,attached:!0,width:e.pathLineWidth,color:e.pathLineColor,polygonOffset:!0,renderOccluded:G.OccludeAndTransparent}),this._intersectedPath=new U({view:i,attached:!0,width:e.pathLineWidth,color:e.intersectingLineColor,polygonOffset:!0,renderOccluded:G.OccludeAndTransparent}),this._perimeter=new U({view:i,attached:!0,width:e.perimeterLineWidth,color:e.perimeterLineColor,polygonOffset:!0,renderOccluded:G.OccludeAndTransparent}),this._intersectedPerimeter=new U({view:i,attached:!0,width:e.perimeterLineWidth,color:e.intersectingLineColor,polygonOffset:!0,renderOccluded:G.OccludeAndTransparent}),this._projectionLines=new U({view:i,attached:!0,width:e.projectionLineWidth,color:e.projectionLineColor,stipplePattern:jt(e.projectionLineStippleSize),polygonOffset:!0,renderOccluded:G.OccludeAndTransparent}),this._measurementArea=new $i({view:i,attached:!0,color1:e.areaColor1,color2:e.areaColor2}),this._areaLabel=new K({view:i,attached:!0,fontSize:I.Large}),this._pathLengthLabel=new K({view:i,attached:!0,fontSize:I.Small}),this._cursorSegmentLengthLabel=new K({view:i,attached:!0,fontSize:I.Small}),this._perimeterLengthLabel=new K({view:i,attached:!0,fontSize:I.Small}),this._handles.add([F(()=>[t.mode,this.visible,t.unit,t.measurementData,t.cursorPoint],()=>this._update(),oe),F(()=>{var s;return(s=i.state)==null?void 0:s.camera},()=>this._updateLabels(),oe),qt(async()=>this._updateMessageBundle())]),this._updateMessageBundle()}destroy(){this._measurementArea=v(this._measurementArea),this._path=v(this._path),this._intersectedPath=v(this._intersectedPath),this._perimeter=v(this._perimeter),this._intersectedPerimeter=v(this._intersectedPerimeter),this._areaLabel=v(this._areaLabel),this._pathLengthLabel=v(this._pathLengthLabel),this._cursorSegmentLengthLabel=v(this._cursorSegmentLengthLabel),this._perimeterLengthLabel=v(this._perimeterLengthLabel),this._projectionLines=v(this._projectionLines),this._handles=v(this._handles),this.set("view",null)}_update(){if(this.destroyed||!this.view.ready||!this.view.renderCoordsHelper)return;const{analysisViewData:{measurementData:t},analysisViewData:e}=this;N(t)||(this._updateViewData(t,e.path,e.cursorPoint),this._updateOrigin(),this._updatePathSegments(),this._updatePerimeterSegments(),this._updateArea(),this._updateProjectionLines(),this._updateLabels())}_updateViewData(t,e,i){const s=e.isValidPolygon,r=t.actualMeasurementMode==="geodesic",n=r?t.geodesicArea:t.area;let a=1;if(n){const d=this._toPreferredAreaUnit(n,this.analysisViewData.unit);a=Ft(Math.sqrt(d.value)/Math.sqrt(300)),a*=Math.sqrt(Nt(1,d.unit,"square-meters")),a/=t.unitNormalizer.normalizeDistance(1)}const h={validMeasurement:s,path:e,pathVersion:e.version,cursorPoint:i,measurementData:t,mode:t.actualMeasurementMode,positionsGeographic:t.positionsGeographic,positionsRenderCoords:t.positionsRenderCoords,positionsProjected:t.positionsProjectedWorldCoords,positionsFittedRenderCoords:t.positionsFittedRenderCoords,intersectingSegments:r?t.geodesicIntersectingSegments:t.intersectingSegments,triangleIndices:r?t.geodesicTriangleIndices:t.triangleIndices,fittingMode:t.fittingMode,areaCentroid:r?t.geodesicAreaCentroidRenderCoords:t.areaCentroidRenderCoords,pathLengthLabelSegmentIndex:s?0:e.numVertices-2,perimeterLengthLabelSegmentIndex:0,checkerSize:a};this._set("viewData",h)}_updateOrigin(){const t=this.viewData;he(t.positionsRenderCoords,this._origin),kt(this._originTransform,this._origin),this._measurementArea.transform=this._originTransform,this._projectionLines.transform=this._originTransform}_createSegments(t){const e=this.viewData,i=e.path,s=this.view.renderCoordsHelper.spatialReference,r=e.mode,n=[],a=[],h=[],d=e.validMeasurement?i.numVertices:i.numVertices-1;for(let p=0;p<d;++p){const u=e[t][p],m=e[t][(p+1)%i.numVertices];let g=null;switch(r){case"euclidean":g=new de(u,m);break;case"geodesic":g=new De(u,m,s)}e.intersectingSegments.has(p)?h.push(g):a.push(g),n.push(g)}return{all:n,nonIntersecting:a,intersecting:h}}_updatePathSegments(){const{view:{renderCoordsHelper:t},viewData:e,visible:i}=this,s=this._createSegments("positionsRenderCoords"),{cursorPoint:r,mode:n,path:a}=e,h=!a.isValidPolygon,d=t.spatialReference;if(this._cursorSegment=null,a.numVertices>0&&h&&_(r)&&t.toRenderCoords(r,this._cursorPositionRenderSpace)){const p=e.positionsRenderCoords[a.numVertices-1],u=this._cursorPositionRenderSpace;let m=null;switch(n){case"euclidean":m=new de(p,u);break;case"geodesic":m=new De(p,u,d)}s.nonIntersecting.push(m),this._cursorSegment=m}this._path.setGeometryFromSegments(s.nonIntersecting,this._origin),this._path.visible=i,this._intersectedPath.setGeometryFromSegments(s.intersecting,this._origin),this._intersectedPath.visible=i,this._pathSegments=s.all}_updatePerimeterSegments(){const t=this.visible&&this.viewData.mode==="euclidean",e=this._createSegments("positionsFittedRenderCoords");this._perimeter.setGeometryFromSegments(e.nonIntersecting,this._origin),this._perimeter.visible=t,this._intersectedPerimeter.setGeometryFromSegments(e.intersecting,this._origin),this._intersectedPerimeter.visible=t,this._perimeterSegments=e.all}_updateArea(){const t=this.viewData;switch(t.mode){case"euclidean":this._updateAreaEuclidean(t);break;case"geodesic":this._updateAreaGeodesic()}}_updateAreaEuclidean(t){const e=this.visible;t.validMeasurement&&t.intersectingSegments.size===0&&t.triangleIndices?(this._measurementArea.geometry={uv:t.positionsProjected,position:t.positionsFittedRenderCoords,triangleIndices:t.triangleIndices},this._measurementArea.size=[t.checkerSize,t.checkerSize],this._measurementArea.visible=e):this._measurementArea.visible=!1}_updateAreaGeodesic(){this._measurementArea.visible=!1}_updateProjectionLines(){const t=this.viewData,e=this.visible,i=t.path,s=t.mode;if(i.numVertices>0&&t.validMeasurement&&s==="euclidean"){const r=[];for(let n=0;n<i.numVertices;++n){const a=c();ee(a,t.positionsRenderCoords[n],this._origin);const h=c();ee(h,t.positionsFittedRenderCoords[n],this._origin),r.push([a,h])}this._projectionLines.geometry=r,this._projectionLines.visible=e}else this._projectionLines.geometry=null,this._projectionLines.visible=!1}_updateLabels(){if(this.destroyed)return;const{viewData:t}=this,{measurementData:e,mode:i,path:s}=t;if(!s)return;const r=!s.isValidPolygon,n=this.visible,a=this._formatAreaLabel(this.messages,i==="geodesic"?e.geodesicArea:e.area,this.analysisViewData.unit);_(a)?(this._areaLabel.geometry={type:"point",point:t.areaCentroid},this._areaLabel.text=a,this._areaLabel.visible=t.validMeasurement&&t.intersectingSegments.size===0&&n):this._areaLabel.visible=!1,this._set("areaLabel",j(a));const h=this._formatLengthLabel(this.messages,i==="geodesic"?e.geodesicPathLength:e.pathLength,this.analysisViewData.unit);if(_(h)&&t.pathLengthLabelSegmentIndex>=0&&t.pathLengthLabelSegmentIndex<this._pathSegments.length){const g=this._pathSegments[t.pathLengthLabelSegmentIndex],y=_(this._cursorSegment)?this._cursorSegment:Gi;this._pathLengthLabel.distance=this._params.labelDistance,this._pathLengthLabel.geometry={type:"corner",left:g,right:y},this._pathLengthLabel.text=h,this._pathLengthLabel.visible=r&&s.numVertices>0&&n}else this._pathLengthLabel.visible=!1;const d=i==="geodesic"?t.measurementData.geodesicCursorSegmentLength:t.measurementData.cursorSegmentLength;if(_(d)){const g=this._formatLengthLabel(this.messages,d,this.analysisViewData.unit);this._cursorSegmentLengthLabel.distance=this._params.labelDistance,this._cursorSegmentLengthLabel.geometry=_(this._cursorSegment)?{type:"segment",segment:this._cursorSegment,sampleLocation:"end"}:null,this._cursorSegmentLengthLabel.anchor="bottom",this._cursorSegmentLengthLabel.text=j(g),this._cursorSegmentLengthLabel.visible=r&&d.value!==0&&n}else this._cursorSegmentLengthLabel.visible=!1;this._cursorSegmentLengthLabel.overlaps(this._pathLengthLabel)&&(this._cursorSegmentLengthLabel.visible=!1),this._pathLengthLabel.overlaps(this._areaLabel)&&(this._pathLengthLabel.visible=!1);const p=t.mode==="geodesic",u=p?e.geodesicPathLength:e.perimeterLength,m=this._formatLengthLabel(this.messages,u,this.analysisViewData.unit);if(this._set("perimeterLengthLabel",j(m)),t.validMeasurement&&t.intersectingSegments.size===0){this._perimeterLengthLabel.distance=this._params.labelDistance,this._perimeterLengthLabel.anchor="top",this._perimeterLengthLabel.text=j(m),this._perimeterLengthLabel.visible=!0;let g=!0;for(let y=0;y<t.path.numVertices;++y){const b=(t.perimeterLengthLabelSegmentIndex+y)%t.path.numVertices,P=p?this._pathSegments[b]:this._perimeterSegments[b];if(g=!0,this._perimeterLengthLabel.geometry={type:"segment",segment:P,sampleLocation:"center"},!this._perimeterLengthLabel.overlaps(this._areaLabel))break;g=!1}this._perimeterLengthLabel.visible=g&&n}else this._perimeterLengthLabel.visible=!1}_toPreferredAreaUnit(t,e){return ti(t,this._preferredAreaUnit(t,e))}_preferredAreaUnit(t,e){switch(e){case"metric":return Bt(t.value,t.unit);case"imperial":return Ht(t.value,t.unit);default:return e}}_preferredLengthUnit(t,e){const i=this._deriveLengthUnitFromAreaUnit(e);switch(i){case"metric":return Zt(t.value,t.unit);case"imperial":return Xt(t.value,t.unit);default:return i}}_deriveLengthUnitFromAreaUnit(t){switch(t){case"metric":case"ares":case"hectares":return"metric";case"imperial":case"acres":return"imperial";case"square-inches":return"inches";case"square-feet":return"feet";case"square-yards":return"yards";case"square-miles":return"miles";case"square-us-feet":return"us-feet";case"square-millimeters":return"millimeters";case"square-centimeters":return"centimeters";case"square-decimeters":return"decimeters";case"square-meters":return"meters";case"square-kilometers":return"kilometers"}throw new Error("unhandled area unit")}_formatAreaLabel(t,e,i){return t&&e&&ze(t,e,this._preferredAreaUnit(e,i))}_formatLengthLabel(t,e,i){return t&&e&&ze(t,e,this._preferredLengthUnit(e,i))}_updateMessageBundle(){this.loadingMessages=!0,Kt("esri/core/t9n/Units").then(t=>{this.messages=t,this.view&&this._update()}).finally(()=>{this.loadingMessages=!1})}};var I;o([l()],w.prototype,"view",void 0),o([l()],w.prototype,"messages",void 0),o([l()],w.prototype,"analysis",void 0),o([l()],w.prototype,"viewData",void 0),o([l()],w.prototype,"analysisViewData",void 0),o([l({readOnly:!0})],w.prototype,"areaLabel",void 0),o([l({readOnly:!0})],w.prototype,"perimeterLengthLabel",void 0),o([l()],w.prototype,"loadingMessages",void 0),o([l()],w.prototype,"visible",null),w=o([te("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurementVisualization")],w),function(t){t[t.Small=12]="Small",t[t.Large=16]="Large"}(I||(I={}));const Ri={laserLineGlowColor:[1,.5,0],laserLineGlowWidth:8,laserLineGlowFalloff:8,laserLineInnerColor:[1,1,1],laserLineInnerWidth:1,laserLineGlobalAlpha:.75,laserLineEnabled:!0,handleColor:[1,.5,0],handleOpacity:.5,handleRadius:5,handleRadiusHovered:10,handleRadiusMouse:10,handleRadiusTouch:25,pathLineColor:[1,.5,0,1],pathLineWidth:3,intersectingLineColor:[1,.2,0,1],perimeterLineColor:[1,.5,0,1],perimeterLineWidth:2,projectionLineColor:[1,.5,0,1],projectionLineWidth:2,projectionLineStippleSize:5,areaColor1:[1,.5,0,.5],areaColor2:[1,1,1,.5],fillColor:[1,.5,0,.5],lineSubdivisions:64,labelDistance:25},zi={validMeasurement:!1,path:null,pathVersion:-1,cursorPoint:null,measurementData:null,mode:null,positionsGeographic:null,positionsRenderCoords:null,positionsProjected:null,positionsFittedRenderCoords:null,intersectingSegments:null,triangleIndices:null,fittingMode:null,areaCentroid:null,pathLengthLabelSegmentIndex:null,perimeterLengthLabelSegmentIndex:null,checkerSize:null},Gi=new de(c(),c());let f=class extends ei(ue){constructor(t){super(t),this.type="area-measurement-view-3d",this.analysis=null,this.measurementData=null,this.lastDraggedVertex=null,this.cursorPoint=null,this.mode=le.Auto}initialize(){const{analysis:t,view:e}=this;this.path=new A({view:e,areaMeasurement:t}),this.analysisVisualization=new w({view:e,analysis:t,analysisViewData:this}),this.analysisController=new O({view:e,analysis:t,analysisViewData:this})}destroy(){this.analysisController=v(this.analysisController),this.analysisVisualization=v(this.analysisVisualization),this.path.destroy()}get updating(){var t;return!!((t=this.analysisVisualization)==null?void 0:t.loadingMessages)}get result(){const{measurementData:t}=this;return N(t)?{area:null,mode:null,perimeter:null}:t.actualMeasurementMode==="euclidean"?{area:t.area,perimeter:t.perimeterLength,mode:"euclidean"}:{area:t.geodesicArea,perimeter:t.pathLength,mode:"geodesic"}}get viewData(){return this.analysisVisualization.viewData}get validMeasurement(){return this.path.isValidPolygon}get unit(){return qe(this.analysis.unit,this._defaultUnit)}get testData(){return{visualization:this.analysisVisualization,controller:this.analysisController}}};o([l({readOnly:!0})],f.prototype,"type",void 0),o([l({constructOnly:!0,nonNullable:!0})],f.prototype,"analysis",void 0),o([l()],f.prototype,"updating",null),o([l()],f.prototype,"analysisVisualization",void 0),o([l()],f.prototype,"analysisController",void 0),o([l()],f.prototype,"result",null),o([l()],f.prototype,"measurementData",void 0),o([l()],f.prototype,"viewData",null),o([l()],f.prototype,"validMeasurement",null),o([l()],f.prototype,"path",void 0),o([l()],f.prototype,"lastDraggedVertex",void 0),o([l()],f.prototype,"cursorPoint",void 0),o([l()],f.prototype,"mode",void 0),o([l()],f.prototype,"unit",null),o([l(Jt)],f.prototype,"_defaultUnit",void 0),f=o([te("esri.views.3d.analysis.AreaMeasurementAnalysisView3D")],f);const Di=f;var qi=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Di});export{qi as A,Si as n};
