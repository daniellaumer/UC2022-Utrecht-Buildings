import{mB as Ve,mC as qe,jW as ke,aY as U,mT as Ue,fN as H,at as A,mU as W,a6 as Ge,mq as Me,lL as He,mV as Ke,lR as Qe,mO as de,r as O,aW as G,mW as Xe,bK as Ye,mX as ee,t as m,gd as ue,fE as pe,mf as _e,mY as ge,fK as D,mZ as Ze,mE as fe,mt as $,aX as ne,m_ as ve,aq as me,lT as Je,h5 as et,m$ as tt,iV as it,aK as st,E as at,b4 as nt,a8 as rt,n0 as ot,an as B,ln as te,n1 as F,b5 as ie,lS as lt,aU as re,h9 as Pe,n2 as ct,gb as be,bo as ht,n3 as dt,n4 as ut,lm as ye,n5 as pt,n6 as _t,n7 as gt,eA as we,ew as S,er as ft,eB as y,et as vt,ex as mt,eD as bt,es as yt,ls as Se,ee as p,jM as wt,ey as St,n8 as Et,n9 as Tt,eE as I,gF as $t,e as l,eH as T,eI as N,eJ as At,eK as Ot,eL as Lt,eM as Rt,eO as Ft,iA as jt,eP as Ct,eQ as Mt,bw as se,eS as Pt,eT as Dt,eU as xt,na as zt,eZ as It,e$ as Ee,f0 as Nt,bu as x,iW as Wt,f4 as Bt,gg as K,lc as oe,iS as Vt,nb as qt,nc as kt,nd as Ut,iX as Gt,aS as Ht,ne as Kt,eb as Qt,nf as Xt,lu as Yt,ng as Zt,ld as De,nh as Jt,bG as ei,R as ti,ai as ii,d as v,n as xe,y as si,ni as j,gi as ai,nj as ni,H as ze,T as Ie,ji as ri,aT as oi,aJ as li,cK as ci}from"./vendor.4451b4ce.js";class hi{constructor(e){this.camera=new Ue,this._elevation={offset:0,override:null},this.collisionType={type:"point"},this.collisionPriority=0,this._renderObjects=[],this.autoScaleRenderObjects=!0,this._available=!0,this._noDisplayCount=0,this._radius=10,this._worldSized=!1,this.focusMultiplier=2,this.touchMultiplier=2.5,this.worldOriented=!1,this._modelTransform=H(),this._worldFrame=null,this._renderLocation=A(),this._renderLocationDirty=!0,this._location=new U({x:0,y:0,z:0}),this._elevationAlignedLocation=new U,this._elevationAlignedLocationDirty=!0,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.cursor=null,this._grabbing=!1,this.dragging=!1,this._hovering=!1,this._selected=!1,this._state=W.None,this._focused=!1,this.events=new Ge.EventEmitter,this._screenLocation={screenPointArray:Me(),renderScreenPointArray:He(),pixelSize:0},this._screenLocationDirty=!0,this._applyObjectTransform=null,this._engineResourcesAddedToStage=!1,this._engineResources=null,this._attached=!1,this._engineLayer=null,this._materialIdReferences=null,this._location.spatialReference=e.view.spatialReference;for(const t in e)this[t]=e[t];this.view.state&&this.view.state.camera&&this.camera.copyFrom(this.view.state.camera)}destroy(){this._removeResourcesFromStage(),this._engineResources=null,this.view=null,this.camera=null}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this._elevationAlignedLocationDirty=!0,this._renderLocationDirty=!0,this._updateEngineObject()}get renderObjects(){return this._renderObjects}set renderObjects(e){this._removeResourcesFromStage(),this._engineResources=null,this._renderObjects=e.slice(),this._updateEngineObject()}set available(e){e!==this._available&&(this._available=e,this._updateEngineObject())}get available(){return this._available}disableDisplay(){return this._noDisplayCount++,this._noDisplayCount===1&&this._updateEngineObject(),{remove:Ke(()=>{this._noDisplayCount--,this._noDisplayCount===0&&this._updateEngineObject()})}}set radius(e){e!==this._radius&&(this._radius=e,this._updateEngineObject())}get radius(){return this._radius}set worldSized(e){e!==this._worldSized&&(this._worldSized=e,this._updateEngineObject())}get worldSized(){return this._worldSized}get modelTransform(){return this._modelTransform}set modelTransform(e){Te(e)&&(this._screenLocationDirty=!0),Qe(this._modelTransform,e),this._updateEngineObject()}get renderLocation(){return this._renderLocationDirty&&(this._renderLocationDirty=!1,this.view.renderCoordsHelper.toRenderCoords(this.elevationAlignedLocation,this._renderLocation),this.worldOriented?(this._worldFrame||(this._worldFrame=H()),di(this.view,this._renderLocation,this._worldFrame)):this._worldFrame&&(this._worldFrame=null)),this._renderLocation}set renderLocation(e){this.view.renderCoordsHelper.fromRenderCoords(e,this._location),this.elevationAlignedLocation=this._location}get location(){return this._location}set location(e){de(e,this._location),this._renderLocationDirty=!0,this._screenLocationDirty=!0,this._elevationAlignedLocationDirty=!0,this._updateEngineObject(),this.events.emit("location-update",{location:this._location})}get elevationAlignedLocation(){return this._elevationAlignedLocationDirty?(this._evaluateElevationAlignment(),this._updateElevationAlignedLocation(),this._elevationAlignedLocation):this._elevationAlignedLocation}set elevationAlignedLocation(e){de(e,this._location),this._evaluateElevationAlignment(),this._location.z-=this._elevation.offset,this._updateElevationAlignedLocation(),this._updateEngineObject(),this.events.emit("location-update",{location:this._location})}_updateElevationAlignedLocation(){this._elevationAlignedLocation.x=this.location.x,this._elevationAlignedLocation.y=this.location.y;const e=O(this._elevation.override)?this._elevation.override:this.location.z||0;this._elevationAlignedLocation.z=e+this._elevation.offset,this._elevationAlignedLocation.spatialReference=this.location.spatialReference,this._renderLocationDirty=!0,this._screenLocationDirty=!0,this._elevationAlignedLocationDirty=!1}grabbableForEvent(){return!0}get grabbing(){return this._grabbing}set grabbing(e){e!==this._grabbing&&(this._grabbing=e,this._setFocused(this._hovering||this._grabbing),this._updateEngineObject())}get hovering(){return this._hovering}set hovering(e){e!==this._hovering&&(this._hovering=e,this._setFocused(this._hovering||this._grabbing),this._updateEngineObject())}get selected(){return this._selected}set selected(e){e!==this._selected&&(this._selected=e,this._updateEngineObject(),this.events.emit("select-changed",{action:e?"select":"deselect"}))}get state(){return this._state}set state(e){e!==this._state&&(this._state=e,this._updateEngineObject())}updateStateEnabled(e,t){t?this.state|=e:this.state&=~e}_setFocused(e){e!==this._focused&&(this._focused=e,this.events.emit("focus-changed",{action:e===!0?"focus":"unfocus"}))}get focused(){return this._focused}get screenLocation(){return this._ensureScreenLocation(),this._screenLocation}_ensureScreenLocation(){if(!this._screenLocationDirty)return;this._screenLocation.pixelSize=this.camera.computeScreenPixelSizeAt(this.renderLocation),this._screenLocationDirty=!1;let e;if(Te(this._modelTransform)){const t=this._calculateModelTransformOffset(_i);e=G(t,t,this.renderLocation)}else e=this.renderLocation;this.camera.projectToRenderScreen(e,this._screenLocation.renderScreenPointArray),this.camera.renderToScreen(this._screenLocation.renderScreenPointArray,this._screenLocation.screenPointArray)}get applyObjectTransform(){return this._applyObjectTransform}set applyObjectTransform(e){this._applyObjectTransform=e,this._screenLocationDirty=!0,this._updateEngineObject()}intersectionDistance(e,t){var r;if(!this.available)return null;const i=Xe(e,ui),a=this._getCollisionRadius(t),n=-1*this.collisionPriority;switch(this.collisionType.type){case"point":if(it(this.screenLocation.screenPointArray,i)<a*a)return this.screenLocation.renderScreenPointArray[2]+n;break;case"line":{const o=this.collisionType.paths,c=this._getWorldToScreenObjectScale(),_=this._calculateObjectTransform(c,V),h=a*this.screenLocation.pixelSize,u=ee(this.camera,i,ae);if(m(u))return null;for(const d of o){if(d.length===0)continue;const w=D(z,d[0],_);for(let b=1;b<d.length;b++){const f=D(Oe,d[b],_),L=tt(fe(w,f,$e),u);if(L!=null&&L<h*h){const R=G($.get(),w,f);ne(R,R,.5);const P=ve($.get());return this.camera.projectToRenderScreen(R,P),P[2]+n}me(w,f)}}break}case"disc":{const o=this.collisionType.direction,c=(r=this.collisionType.offset)!=null?r:Je,_=this._getWorldToScreenObjectScale(),h=this._calculateObjectTransform(_,V),u=a*this.screenLocation.pixelSize,d=ee(this.camera,i,ae);if(m(d))return null;const w=ue(Ae,h),b=pe(Re,o,w),f=D(Fe,c,h);_e(f,b,q);const L=Le;if(ge(q,d,L)&&et(L,f)<u*u)return this.screenLocation.renderScreenPointArray[2]+n;break}case"ribbon":{const{paths:o,direction:c}=this.collisionType,_=this._getWorldToScreenObjectScale(),h=this._calculateObjectTransform(_,V),u=a*this.camera.computeScreenPixelSizeAt(this.renderLocation),d=ee(this.camera,i,ae);if(m(d))return null;const w=ue(Ae,h),b=pe(Re,c,w),f=this._calculateModelTransformPosition(Fe);_e(f,b,q);const L=Le;if(!ge(q,d,L))break;for(const R of o){if(R.length===0)continue;const P=D(z,R[0],h);for(let Y=1;Y<R.length;Y++){const Z=D(Oe,R[Y],h),ce=Ze(fe(P,Z,$e),L);if(ce!=null&&ce<u*u){const J=G($.get(),P,Z);ne(J,J,.5);const he=ve($.get());return this.camera.projectToRenderScreen(J,he),he[2]+n}me(P,Z)}}break}default:Ye(this.collisionType)}return null}attach(e={manipulator3D:{}}){var i;if(!this.view._stage)return;const t=e.manipulator3D;if(m(t.engineLayerId)){const a=new st({isPickable:!1,updatePolicy:at.SYNC});this.view._stage.add(a),t.engineLayerId=a.id,this._engineLayer=a}else((i=this.view._stage)==null?void 0:i.getObject)&&(this._engineLayer=this.view._stage.getObject(t.engineLayerId));t.engineLayerReferences=(t.engineLayerReferences||0)+1,this._materialIdReferences=t.materialIdReferences,m(this._materialIdReferences)&&(this._materialIdReferences=new Map,t.materialIdReferences=this._materialIdReferences),this.camera.copyFrom(this.view.state.camera),this._attached=!0,this._updateEngineObject(),nt(this._location.spatialReference,this.view.spatialReference)||(this.location=new U({x:0,y:0,z:0,spatialReference:this.view.spatialReference}))}detach(e={manipulator3D:{}}){const t=e.manipulator3D;t.engineLayerReferences--;const i=t.engineLayerReferences===0;i&&(t.engineLayerId=null),this._removeResourcesFromStage(i),this._engineResources=null,this._engineLayer=null,this._materialIdReferences=null,this._attached=!1}onViewChange(){this.camera.copyFrom(this.view.state.camera),this._screenLocationDirty=!0,this._updateEngineObject()}onElevationChange(e){rt(this.location,je,e.spatialReference),ot(e.extent,je)&&(this.location=this._location)}_evaluateElevationAlignment(e=this.location){if(m(this.elevationInfo))return!1;let t=null,i=0;const a=B(this.elevationInfo.offset,0);switch(this.elevationInfo.mode){case"on-the-ground":t=B(te(this.view.elevationProvider,e,"ground"),0);break;case"relative-to-ground":i=B(te(this.view.elevationProvider,e,"ground"),0)+a;break;case"relative-to-scene":i=B(te(this.view.elevationProvider,e,"scene"),0)+a;break;case"absolute-height":i=a}return(i!==this._elevation.offset||t!==this._elevation.override)&&(this._elevation.offset=i,this._elevation.override=t,!0)}_updateEngineObject(){if(!this._attached)return;if(!this.available)return void this._removeResourcesFromStage();const e=this._getWorldToScreenObjectScale(),t=V;if(this.autoScaleRenderObjects===!0){const r=this._getFocusedSize(this._radius,this.focused)*e;this._calculateObjectTransform(r,t)}else this._calculateObjectTransform(e,t);const{objectsByState:i}=this._ensureEngineResources(),a=(this.focused?F.Focused:F.Unfocused)|(this.selected?F.Selected:F.Unselected),n=this._noDisplayCount>0;for(const{stateMask:r,objects:o}of i){if(n){for(const d of o)d.setVisible(!1);continue}const c=(r&F.All)!==F.None,_=(r&W.All)!==W.None,h=!c||(a&r)==(r&F.All),u=!_||(this.state&r)==(r&W.All);if(h&&u)for(const d of o)d.setVisible(!0),d.transformation=t;else for(const d of o)d.setVisible(!1)}}_ensureEngineResources(){if(m(this._engineResources)){const e=ie(this._engineLayer),t=[],i=new Set;this.renderObjects.forEach(({material:o})=>{i.has(o)||(t.push(o),i.add(o))});const a=(o,c)=>{const{geometry:_,material:h,transform:u}=c;Array.isArray(_)?_.forEach(d=>o.addGeometry(d,h,u)):o.addGeometry(_,h,u)},n=new Map;this._renderObjects.forEach(o=>{const c=new lt({castShadow:!1});a(c,o);const _=o.stateMask||0,h=n.get(_)||[];h.push(c),n.set(_,h)});const r=[];n.forEach((o,c)=>r.push({stateMask:c,objects:o})),this._engineResources={objectsByState:r,layer:e,materials:t}}return this._addResourcesToStage(),this._engineResources}_addResourcesToStage(){if(this._engineResourcesAddedToStage||m(this._engineResources))return;const{objectsByState:e,layer:t,materials:i}=this._engineResources;i.forEach(a=>{const n=ie(this._materialIdReferences),r=n.get(a.id)||0;r===0&&this.view._stage.add(a),n.set(a.id,r+1)}),e.forEach(({objects:a})=>{t.addMany(a),this.view._stage.addMany(a)}),this._engineResourcesAddedToStage=!0}_removeResourcesFromStage(e=!1){if(!this._engineResourcesAddedToStage||m(this._engineResources)||!this.view._stage)return;const{objectsByState:t,layer:i,materials:a}=this._engineResources;t.forEach(({objects:n})=>{i.removeMany(n),this.view._stage.removeMany(n)}),a.forEach(n=>{const r=ie(this._materialIdReferences),o=r.get(n.id);o===1?(this.view._stage.remove(n),r.delete(n.id)):r.set(n.id,o-1)}),e&&this.view._stage.remove(i),this._engineResourcesAddedToStage=!1}_getCollisionRadius(e){return this._getFocusedSize(this.radius,!0)*(e==="touch"?this.touchMultiplier:1)}_getFocusedSize(e,t){return e*(t?this.focusMultiplier:1)}_getWorldToScreenObjectScale(){return this._worldSized?1:this.screenLocation.pixelSize}_calculateModelTransformPosition(e){const t=this._getWorldToScreenObjectScale(),i=this._calculateObjectTransform(t,pi);return re(e,i[12],i[13],i[14])}_calculateModelTransformOffset(e){const t=this._calculateModelTransformPosition(e);return Pe(e,t,this.renderLocation)}_calculateObjectTransform(e,t){return ct(t,e,0,0,0,0,e,0,0,0,0,e,0,0,0,0,1),this._worldFrame&&be(t,t,this._worldFrame),be(t,t,this._modelTransform),t[12]+=this.renderLocation[0],t[13]+=this.renderLocation[1],t[14]+=this.renderLocation[2],t[15]=1,O(this._applyObjectTransform)&&this._applyObjectTransform(t),t}get test(){let e=!1;if(O(this._engineResources))for(const t in this._engineResources.objectsByState){const i=this._engineResources.objectsByState[t];for(const a of i.objects)if(a.isVisible){e=!0;break}if(e)break}return{areAnyResourcesVisible:e}}}function Te(s){return s[12]!==0||s[13]!==0||s[14]!==0}function di(s,e,t){switch(s.viewingMode){case"local":return pt(t),!0;case"global":{const i=ht(s.renderCoordsHelper.spatialReference);return dt(e,0,z,0,i.radius),ut(ye(z[0]),ye(z[1]),t),!0}}}const ui=Me(),$e=Ve(),ae=qe(),Ae=_t(),pi=H(),V=H(),q=ke(),z=A(),Oe=A(),Le=A(),Re=A(),Fe=A(),_i=A(),je=new U({x:0,y:0,z:0,spatialReference:null});function gi(s,e){if(!e.screenSizeEnabled)return;const t=s.vertex;gt(t,e),t.uniforms.add(new we("perScreenPixelRatio",(i,a)=>a.camera.perScreenPixelRatio)),t.uniforms.add(new we("screenSizeScale",i=>i.screenSizeScale)),t.code.add(S`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));
return viewDirectionDistance * perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSizeScale * computeRenderPixelSizeAt(anchor) + anchor;
}`)}function fi(s){const e=new ft,t=s.hasMultipassTerrain&&(s.output===y.Color||s.output===y.Alpha);e.include(vt),e.include(gi,s),e.include(mt,s);const{vertex:i,fragment:a}=e;return a.include(bt),yt(e,s),a.uniforms.add(new Se("uColor",n=>n.color)),e.attributes.add(p.POSITION,"vec3"),e.varyings.add("vWorldPosition","vec3"),t&&e.varyings.add("depth","float"),s.screenSizeEnabled&&e.attributes.add(p.OFFSET,"vec3"),s.shadingEnabled&&(i.uniforms.add(new wt("viewNormal",(n,r)=>r.camera.viewInverseTransposeMatrix)),e.attributes.add(p.NORMAL,"vec3"),e.varyings.add("vViewNormal","vec3")),i.code.add(S`
    void main(void) {
      vWorldPosition = ${s.screenSizeEnabled?"screenSizeScaling(offset, position)":"position"};
  `),s.shadingEnabled&&i.code.add(S`vec3 worldNormal = normal;
vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`),i.code.add(S`
    ${t?"depth = (view * vec4(vWorldPosition, 1.0)).z;":""}
    gl_Position = transformPosition(proj, view, vWorldPosition);
  }
  `),t&&e.include(St,s),a.code.add(S`
    void main() {
      discardBySlice(vWorldPosition);
      ${t?"terrainDepthTest(gl_FragCoord, depth);":""}
    `),s.shadingEnabled?(a.uniforms.add(new Et("shadingDirection",n=>n.shadingDirection)),a.uniforms.add(new Se("shadedColor",n=>vi(n.shadingTint,n.color))),a.code.add(S`vec3 viewNormalNorm = normalize(vViewNormal);
float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
vec4 finalColor = mix(uColor, shadedColor, shadingFactor);`)):a.code.add(S`vec4 finalColor = uColor;`),a.code.add(S`
      if (finalColor.a < ${S.float(Tt)}) {
        discard;
      }
      ${s.output===y.Alpha?S`gl_FragColor = vec4(finalColor.a);`:""}

      ${s.output===y.Color?S`gl_FragColor = highlightSlice(finalColor, vWorldPosition); ${s.transparencyPassType===I.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
    }
    `),e}function vi(s,e){const t=1-s[3],i=s[3]+e[3]*t;return i===0?(C[3]=i,C):(C[0]=(s[0]*s[3]+e[0]*e[3]*t)/i,C[1]=(s[1]*s[3]+e[1]*e[3]*t)/i,C[2]=(s[2]*s[3]+e[2]*e[3]*t)/i,C[3]=e[3],C)}const C=$t(),mi=Object.freeze(Object.defineProperty({__proto__:null,build:fi},Symbol.toStringTag,{value:"Module"}));class X extends Lt{initializeProgram(e){const t=X.shader.get().build(this.configuration);return new Rt(e.rctx,t,Ne)}_setPipelineState(e){const t=this.configuration,i=e===I.NONE,a=e===I.FrontFace;return Ft({blending:t.output!==y.Color&&t.output!==y.Alpha||!t.transparent?null:i?jt:Ct(e),culling:Mt(t.cullFace),depthTest:{func:a?se.LESS:t.shadingEnabled?se.LEQUAL:se.LESS},depthWrite:i?t.writeDepth&&Pt:Dt(e),colorWrite:xt,polygonOffset:i||a?null:zt})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}}X.shader=new At(mi,()=>import("./ShadedColorMaterial.glsl.6ff6b872.js"));class E extends Ot{constructor(){super(...arguments),this.output=y.Color,this.cullFace=N.None,this.transparencyPassType=I.NONE,this.hasSlicePlane=!1,this.transparent=!1,this.writeDepth=!0,this.screenSizeEnabled=!0,this.shadingEnabled=!0,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}l([T({count:y.COUNT})],E.prototype,"output",void 0),l([T({count:N.COUNT})],E.prototype,"cullFace",void 0),l([T({count:I.COUNT})],E.prototype,"transparencyPassType",void 0),l([T()],E.prototype,"hasSlicePlane",void 0),l([T()],E.prototype,"transparent",void 0),l([T()],E.prototype,"writeDepth",void 0),l([T()],E.prototype,"screenSizeEnabled",void 0),l([T()],E.prototype,"shadingEnabled",void 0),l([T()],E.prototype,"hasMultipassTerrain",void 0),l([T()],E.prototype,"cullAboveGround",void 0);const Ne=new Map([[p.POSITION,0],[p.NORMAL,1],[p.OFFSET,2]]);class bi extends It{constructor(e){super(e,new wi),this.supportsEdges=!0,this.techniqueConfig=new E,this._vertexAttributeLocations=Ne}getConfiguration(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.parameters.cullFace,this.techniqueConfig.hasSlicePlane=this.parameters.hasSlicePlane,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.screenSizeEnabled=this.parameters.screenSizeEnabled,this.techniqueConfig.shadingEnabled=this.parameters.shadingEnabled,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.hasMultipassTerrain=t.multipassTerrain.enabled,this.techniqueConfig.cullAboveGround=t.multipassTerrain.cullAboveGround,this.techniqueConfig}intersect(e,t,i,a,n,r,o){if(this.parameters.screenSizeEnabled){const c=e.vertexAttributes.get(p.OFFSET);Ee(e,t,a,n,r,{applyToVertex:(h,u,d,w)=>{const b=re(Ce,c.data[3*w+0],c.data[3*w+1],c.data[3*w+2]),f=re(Ei,h,u,d);return ne(b,b,this.parameters.screenSizeScale*a.camera.computeRenderPixelSizeAt(b)),G(f,f,b),[f[0],f[1],f[2]]},applyToAabb:h=>{const u=Ht(h,Ce);return Kt(h,this.parameters.screenSizeScale*a.camera.computeRenderPixelSizeAt(u))}},o)}else Ee(e,t,a,n,r,void 0,o)}requiresSlot(e,t){if(Nt(t)===y.Highlight)return e===x.OPAQUE_MATERIAL;let i=x.OPAQUE_MATERIAL;return this.parameters.transparent&&(i=this.parameters.writeDepth?x.TRANSPARENT_MATERIAL:x.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL),e===i||e===x.DRAPED_MATERIAL}createGLMaterial(e){return e.output===y.Color||e.output===y.Alpha||e.output===y.Highlight?new yi(e):null}createBufferWriter(){return new Si(this.parameters.screenSizeEnabled)}}class yi extends Wt{beginSlot(e){return this.ensureTechnique(X,e)}}class wi extends Bt{constructor(){super(...arguments),this.color=K(1,1,1,1),this.shadingTint=K(0,0,0,.25),this.shadingDirection=oe(A(),[.5,-.5,-.5]),this.screenSizeScale=14,this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=N.None,this.screenSizeEnabled=!1,this.shadingEnabled=!0}}class Si{constructor(e){this.screenSizeEnabled=e;const t=Vt().vec3f(p.POSITION).vec3f(p.NORMAL);this.screenSizeEnabled&&t.vec3f(p.OFFSET),this.vertexBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(p.POSITION).length}write(e,t,i,a){if(qt(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,i,a),this.screenSizeEnabled){if(!t.vertexAttributes.has(p.OFFSET))throw new Error(`${p.OFFSET} vertex attribute required for screenSizeEnabled ShadedColorMaterial`);{const n=t.vertexAttributes.get(p.OFFSET),r=t.indices.get(p.OFFSET);kt(n.size===3);const o=i.getField(p.OFFSET,Ut);if(!o)throw new Error("unable to acquire view for "+p.OFFSET);Gt(r,n.data,e.invTranspTransformation,o,a)}}}}const Ce=A(),Ei=A();function Ti(s,e=Yt.OccludeAndTransparent,t=!0){const i=K(s[0],s[1],s[2],s.length>3?s[3]:1),a=s[3]<1;return t?new bi({color:i,transparent:a,writeDepth:!0,cullFace:N.Back,renderOccluded:e}):new Xt({color:i,transparent:a,writeDepth:!0,cullFace:N.Back,renderOccluded:e})}function Fi(s,e,t){return new hi({view:s,renderObjects:[{geometry:Qt.createSphereGeometry(1,32,32),material:Ti(K(e[0],e[1],e[2],t!=null?t:1))}]})}function ji(s,e,t,i){const a=Pe($.get(),s,t),n=$i(a,De($.get(),i,a),t,Zt.get());Jt(n,n);const r=D($.get(),e,n);return Math.atan2(r[1],r[0])}function $i(s,e,t,i){const a=oe($.get(),s),n=oe($.get(),e),r=De($.get(),a,n);return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=0,i[4]=n[0],i[5]=n[1],i[6]=n[2],i[7]=0,i[8]=r[0],i[9]=r[1],i[10]=r[2],i[11]=0,i[12]=t[0],i[13]=t[1],i[14]=t[2],i[15]=1,i}function Ai(s,e){let t=null,i=null;return a=>{if(a.action==="cancel")return void(O(i)&&(i.execute({action:"cancel"}),t=null,i=null));const n={action:a.action,screenStart:a.start,screenEnd:a.screenPoint};a.action==="start"&&m(t)&&(t=new Q,i=new Q,e(s,t,i,a.pointerType,n)),O(t)&&t.execute(n),a.action==="end"&&O(t)&&(t=null,i=null)}}function Ci(s,e){return s.events.on("drag",Ai(s,e))}function Mi(s,e){const t=new Map;for(const i of e)t.set(i,ei(s[i]));return i=>(t.forEach((a,n)=>{s[n]=a}),i)}class Q{constructor(){this.execute=()=>{}}next(e,t=new Q){return O(e)&&(this.execute=i=>{const a=e(i);O(a)&&t.execute(a)}),t}}var M;(function(s){s[s.WhenToolEditable=0]="WhenToolEditable",s[s.WhenToolNotEditable=1]="WhenToolNotEditable",s[s.Always=2]="Always"})(M||(M={}));class Oi{constructor(){this._isToolEditable=!0,this._manipulators=new ti,this._nextManipulatorId=0,this._resourceContexts={manipulator3D:{}},this._attached=!1}set isToolEditable(e){this._isToolEditable=e}get length(){return this._manipulators.length}add(e,t=M.WhenToolEditable){return this.addMany([e],t)[0]}addMany(e,t=M.WhenToolEditable){return e.map(i=>{const a=this._nextManipulatorId++,n={id:a,manipulator:i,visibilityPredicate:t,attached:!1};return this._manipulators.add(n),this._attached&&this._updateManipulatorAttachment(n),a})}remove(e){if(typeof e=="number"){const i=e;for(let a=0;a<this._manipulators.length;a++)if(this._manipulators.getItemAt(a).id===i){const n=this._manipulators.splice(a,1)[0];return this._detachManipulator(n),n.id}return null}const t=e;for(let i=0;i<this._manipulators.length;i++)if(this._manipulators.getItemAt(i).manipulator===t){const a=this._manipulators.splice(i,1)[0];return this._detachManipulator(a),a.id}return null}removeAll(){this._manipulators.forEach(e=>{this._detachManipulator(e)}),this._manipulators.removeAll()}attach(){this._manipulators.forEach(e=>{this._updateManipulatorAttachment(e)}),this._attached=!0}detach(){this._manipulators.forEach(e=>{this._detachManipulator(e)}),this._attached=!1}destroy(){this._manipulators.forEach(({manipulator:e})=>{e.destroy&&e.destroy()}),this._manipulators.destroy(),this._resourceContexts=null}on(e,t){return this._manipulators.on(e,i=>{t(i)})}forEach(e){for(const t of this._manipulators.items)e(t)}some(e){return this._manipulators.items.some(e)}toArray(){const e=[];return this.forEach(t=>e.push(t.manipulator)),e}intersect(e,t){let i=null,a=Number.MAX_VALUE;return this._manipulators.forEach(({id:n,manipulator:r,attached:o})=>{if(!o||!r.interactive)return;const c=r.intersectionDistance(e,t);O(c)&&c<a&&(a=c,i={id:n,manipulator:r})}),i}findById(e){if(m(e))return null;for(const t of this._manipulators.items)if(e===t.id)return t.manipulator;return null}_updateManipulatorAttachment(e){this._isManipulatorItemVisible(e)?this._attachManipulator(e):this._detachManipulator(e)}_attachManipulator(e){e.attached||(e.manipulator.attach&&e.manipulator.attach(this._resourceContexts),e.attached=!0)}_detachManipulator(e){if(!e.attached)return;const t=e.manipulator;t.grabbing=!1,t.dragging=!1,t.hovering=!1,t.selected=!1,t.detach&&t.detach(this._resourceContexts),e.attached=!1}_isManipulatorItemVisible(e){return e.visibilityPredicate===M.Always||(this._isToolEditable?e.visibilityPredicate===M.WhenToolEditable:e.visibilityPredicate===M.WhenToolNotEditable)}}const Li=ii.getLogger("esri.views.interactive.InteractiveToolBase");let g=class extends si{constructor(s){super(s),this.manipulators=new Oi,this.preferManipulatorCursor=!1,this.automaticManipulatorSelection=!0,this.hasFocusedManipulators=!1,this.created=!1,this.removeIncompleteOnCancel=!0,this._editableFlags=new Map([[j.MANAGER,!0],[j.USER,!0]]),this._creationFinishedResolver=ai()}get active(){return this.view!=null&&this.view.activeTool===this}set visible(s){this._get("visible")!==s&&(this._set("visible",s),this._syncVisible())}get editable(){return this.getEditableFlag(j.USER)}set editable(s){this.setEditableFlag(j.USER,s)}get updating(){return!1}get cursor(){return null}destroy(){this.manipulators.destroy(),this._set("view",null)}onAdd(){this._syncVisible()}activate(){m(this.view)?Li.error("Can't activate tool if view is not defined."):(ni(this.view)&&this.view.focus(),this.onActivate())}deactivate(){this.onDeactivate()}handleInputEvent(s){this.onInputEvent(s)}handleInputEventAfter(s){this.onInputEventAfter(s)}setEditableFlag(s,e){this._editableFlags.set(s,e),this.manipulators.isToolEditable=this.internallyEditable,this._updateManipulatorAttachment(),s===j.USER&&this.notifyChange("editable"),this.onEditableChange()}getEditableFlag(s){return this._editableFlags.get(s)}whenCreated(){return this._creationFinishedResolver.promise}onActivate(){}onDeactivate(){}onShow(){}onHide(){}onEditableChange(){}onInputEvent(s){}onInputEventAfter(s){}get internallyEditable(){return this.getEditableFlag(j.USER)&&this.getEditableFlag(j.MANAGER)}finishToolCreation(){this.created||this._creationFinishedResolver.resolve(this),this._set("created",!0)}_syncVisible(){if(this.constructed){if(this.visible)this._show();else if(this._hide(),this.active)return void(this.view.activeTool=null)}}_show(){this._updateManipulatorAttachment(),this.onShow()}_hide(){this._updateManipulatorAttachment(),this.onHide()}_updateManipulatorAttachment(){this.visible?this.manipulators.attach():this.manipulators.detach()}};l([v({constructOnly:!0})],g.prototype,"view",void 0),l([v({readOnly:!0})],g.prototype,"active",null),l([v({value:!0})],g.prototype,"visible",null),l([v({value:!0})],g.prototype,"editable",null),l([v({readOnly:!0})],g.prototype,"manipulators",void 0),l([v({readOnly:!0})],g.prototype,"updating",null),l([v()],g.prototype,"cursor",null),l([v({readOnly:!0})],g.prototype,"preferManipulatorCursor",void 0),l([v({readOnly:!0})],g.prototype,"automaticManipulatorSelection",void 0),l([v()],g.prototype,"hasFocusedManipulators",void 0),l([v({readOnly:!0})],g.prototype,"created",void 0),l([v({readOnly:!0})],g.prototype,"removeIncompleteOnCancel",void 0),g=l([xe("esri.views.interactive.InteractiveToolBase")],g);let k=class extends g{constructor(s){super(s)}initialize(){this.own(ze(()=>this.analysisViewData.visible,s=>this.visible=s,Ie))}deactivate(){this.onDeactivate(),this.created||this.analysis.clear()}resetCreated(){this._set("created",!1)}};l([v({constructOnly:!0})],k.prototype,"analysis",void 0),l([v()],k.prototype,"analysisViewData",void 0),k=l([xe("esri.views.interactive.AnalysisToolBase")],k);function Pi(s,e,t){const i=We(s,e);s.view.activeTool=i;let a=ci(t,()=>le(s,e));return ri(async n=>{await oi(()=>!i.active,n),a=li(a),le(s,e)},t)}function Di(s,e){return ze(()=>s.interactive,()=>le(s,e),Ie)}function le(s,e){s.interactive?We(s,e):Be(s)}function We(s,e){Be(s);const{view:t,analysis:i}=s,a=new e({view:t,analysis:i,analysisViewData:s});return s.tool=a,t.tools.add(a),a}function Be(s){const{view:e,tool:t}=s;m(t)||(e.tools.remove(t),s.tool=null)}export{Q as G,ji as O,k as a,Di as c,fi as f,$i as k,Be as m,Ci as p,Pi as s,hi as t,Ti as w,Fi as y,Mi as z};
