var qe=Object.defineProperty,Ve=Object.defineProperties;var Xe=Object.getOwnPropertyDescriptors;var $e=Object.getOwnPropertySymbols;var Je=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var Re=(e,n,t)=>n in e?qe(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,se=(e,n)=>{for(var t in n||(n={}))Je.call(n,t)&&Re(e,t,n[t]);if($e)for(var t of $e(n))_e.call(n,t)&&Re(e,t,n[t]);return e},oe=(e,n)=>Ve(e,Xe(n));import{ai as W,r as p,j6 as z,at as x,c2 as he,aY as O,r8 as Ke,dV as Qe,kc as et,cM as tt,ae as nt,t as H,Y as ce,aW as ge,oP as Ce,ha as me,gd as De,fE as _,o_ as de,o$ as xe,p0 as ye,oV as we,oY as ve,oZ as Ae,fN as ke,n6 as be,r9 as K,ra as B,lc as rt,aU as Te,h9 as Q,lT as Ue,of as st,fK as ot,aX as Ne,cH as it,c4 as at,e8 as ct,cS as lt,H as ft,aw as le,v as ut,rb as pt,e as A,d as M,n as ht,kv as ie,bW as gt,i as mt}from"./vendor.4451b4ce.js";import{r as re,M as dt,x as xt,k as yt,a as q,g as fe,l as ue,b as wt,c as J,L as ee}from"./georeference.44fb2627.js";const pe=W.getLogger("esri.geometry.support.meshUtils.centerAt");function vt(e,n,t){var s;if(!e.vertexAttributes||!e.vertexAttributes.position)return;const r=(s=t==null?void 0:t.origin)!=null?s:e.origin;p(e.transform)?((t==null?void 0:t.geographic)!=null&&t.geographic!==e.transform.geographic&&pe.warn(`Specifying the 'geographic' parameter (${t.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`),At(e.transform,n,r)):re(e.spatialReference,t)?bt(e,n,r):$t(e,n,r)}function At(e,n,t){const r=n.x-t.x,s=n.y-t.y,i=n.hasZ&&t.hasZ?n.z-t.z:0,o=e.origin;e.origin=[o[0]+r,o[1]+s,o[2]+i]}function bt(e,n,t){const r=dt(e.vertexAttributes,t,{geographic:!0}),{position:s,normal:i,tangent:o}=xt(r,n,{geographic:!0});e.vertexAttributes.position=s,e.vertexAttributes.normal=i,e.vertexAttributes.tangent=o,e.vertexAttributesChanged()}function $t(e,n,t){const r=Ft,s=Mt;if(z(n,s,e.spatialReference)){if(!z(t,r,e.spatialReference)){const i=e.origin;r[0]=i.x,r[1]=i.y,r[2]=i.z,pe.error(`Failed to project specified origin (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`)}Rt(e.vertexAttributes.position,s,r),e.vertexAttributesChanged()}else pe.error(`Failed to project centerAt location (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid})`)}function Rt(e,n,t){if(e)for(let r=0;r<e.length;r+=3)for(let s=0;s<3;s++)e[r+s]+=n[s]-t[s]}const Mt=x(),Ft=x();async function Ot(e,n,t){const{loadGLTFMesh:r}=await he(import("./loadGLTFMesh.6350c848.js"),t),s=await je(n,t),i=r(new O({x:0,y:0,z:0,spatialReference:e.spatialReference}),s.url,{resolveFile:Pt(s),useTransform:!0,signal:p(t)?t.signal:null});i.then(()=>s.dispose(),()=>s.dispose());const{vertexAttributes:o,components:a}=await i;e.vertexAttributes=o,e.components=a}function Pt(e){const n=Qe(e.url);return t=>{var i;const r=Ke(t,n,n),s=r?r.replace(/^ *\.\//,""):null;return(i=e.files.get(s))!=null?i:t}}async function je(e,n){return e instanceof Blob?Z.fromBlob(e):typeof e=="string"?new Z(e):Array.isArray(e)?Et(e,n):Lt(e,n)}async function Et(e,n){const t=new Map;let r=null;const s=await et(e.map(async o=>({name:o.name,source:await je(o instanceof Blob?o:o.source,n)}))),i=[];for(const o of s)o&&(tt(n)?o.source.dispose():i.push(o));nt(n);for(const{name:o,source:a}of i)(H(r)||/\.(gltf|glb)/i.test(o))&&(r=a.url),t.set(o,a.url),a.files&&a.files.forEach((c,l)=>t.set(l,c));if(H(r))throw new ce("mesh-load-external:missing-files","Missing files to load external mesh source");return new Z(r,()=>i.forEach(({source:o})=>o.dispose()),t)}async function Lt(e,n){const{default:t}=await he(import("./vendor.4451b4ce.js").then(function(s){return s.tR}),n),r=typeof e.multipart[0]=="string"?await Promise.all(e.multipart.map(async s=>(await t(s,{responseType:"array-buffer"})).data)):e.multipart;return Z.fromBlob(new Blob(r))}class Z{constructor(n,t=()=>{},r=new Map){this.url=n,this.dispose=t,this.files=r}static fromBlob(n){const t=URL.createObjectURL(n);return new Z(t,()=>URL.revokeObjectURL(t))}}const It=W.getLogger("esri.geometry.support.meshUtils.offset");function zt(e,n,t){e.vertexAttributes&&e.vertexAttributes.position&&(p(e.transform)?((t==null?void 0:t.geographic)!=null&&t.geographic!==e.transform.geographic&&It.warn(`Specifying the 'geographic' parameter (${t.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`),St(e.transform,n)):re(e.spatialReference,t)?Ct(e,n):Dt(e,n))}function St(e,n){const t=e.origin;e.origin=ge(x(),t,n)}function Ct(e,n){const t=e.spatialReference,r=e.vertexAttributes.position,s=e.vertexAttributes.normal,i=e.vertexAttributes.tangent,o=new Float64Array(r.length),a=p(s)?new Float32Array(s.length):null,c=p(i)?new Float32Array(i.length):null,l=e.extent.center,f=kt;Ce(t,[l.x,l.y,l.z],Me,me(t)),De(Fe,Me),_(f,n,Fe),de(r,t,o),p(s)&&xe(s,r,o,t,a),p(i)&&ye(i,r,o,t,c),Ge(o,f),we(o,r,t),p(s)&&ve(a,r,o,t,s),p(i)&&Ae(c,r,o,t,i),e.vertexAttributesChanged()}function Dt(e,n){Ge(e.vertexAttributes.position,n),e.vertexAttributesChanged()}function Ge(e,n){if(e)for(let t=0;t<e.length;t+=3)for(let r=0;r<3;r++)e[t+r]+=n[r]}const kt=x(),Me=ke(),Fe=be();function Tt(){const{faceDescriptions:e,faceVertexOffsets:n,uvScales:t}=Ht,r=4*e.length,s=new Float64Array(3*r),i=new Float32Array(3*r),o=new Float32Array(2*r),a=new Uint32Array(2*e.length*3);let c=0,l=0,f=0,g=0;for(let h=0;h<e.length;h++){const u=e[h],w=c/3;for(const d of n)a[g++]=w+d;const P=u.corners;for(let d=0;d<4;d++){const $=P[d];let v=0;o[f++]=.25*t[d][0]+u.uvOrigin[0],o[f++]=u.uvOrigin[1]-.25*t[d][1];for(let R=0;R<3;R++)u.axis[R]!==0?(s[c++]=.5*u.axis[R],i[l++]=u.axis[R]):(s[c++]=.5*$[v++],i[l++]=0)}}return{position:s,normal:i,uv:o,faces:a}}function Ut(e,n){const t=e.components[0],r=t.faces,s=Wt[n],i=6*s,o=new Uint32Array(6),a=new Uint32Array(r.length-6);let c=0,l=0;for(let f=0;f<r.length;f++)f>=i&&f<i+6?o[c++]=r[f]:a[l++]=r[f];if(p(e.vertexAttributes.uv)){const f=new Float32Array(e.vertexAttributes.uv),g=4*s*2,h=[0,1,1,1,1,0,0,0];for(let u=0;u<h.length;u++)f[g+u]=h[u];e.vertexAttributes.uv=f}return e.components=[new B({faces:o,material:t.material}),new B({faces:a})],e}function Nt(e=0){const n=Math.round(8*2**e),t=2*n,r=(n-1)*(t+1)+2*t,s=new Float64Array(3*r),i=new Float32Array(3*r),o=new Float32Array(2*r),a=new Uint32Array(3*((n-1)*t*2));let c=0,l=0,f=0,g=0;for(let h=0;h<=n;h++){const u=h/n*Math.PI+.5*Math.PI,w=Math.cos(u),P=Math.sin(u);m[2]=P;const d=h===0||h===n,$=d?t-1:t;for(let v=0;v<=$;v++){const R=v/$*2*Math.PI;m[0]=-Math.sin(R)*w,m[1]=Math.cos(R)*w;for(let E=0;E<3;E++)s[c]=.5*m[E],i[c]=m[E],++c;o[l++]=(v+(d?.5:0))/t,o[l++]=h/n,h!==0&&v!==t&&(h!==n&&(a[f++]=g,a[f++]=g+1,a[f++]=g-t),h!==1&&(a[f++]=g,a[f++]=g-t,a[f++]=g-t-1)),g++}}return{position:s,normal:i,uv:o,faces:a}}function jt(e=0){const t=Math.round(16*2**e),r=(5-1)*(t+1)+2*t,s=new Float64Array(3*r),i=new Float32Array(3*r),o=new Float32Array(2*r),a=new Uint32Array(3*(4*t));let c=0,l=0,f=0,g=0,h=0;for(let u=0;u<=5;u++){const w=u===0||u===5,P=u<=1||u>=5-1,d=u===2||u===4,$=w?t-1:t;for(let v=0;v<=$;v++){const R=v/$*2*Math.PI,E=w?0:.5;m[0]=E*Math.sin(R),m[1]=E*-Math.cos(R),m[2]=u<=2?.5:-.5;for(let C=0;C<3;C++)s[c++]=m[C],i[l++]=P?C===2?u<=1?1:-1:0:C===2?0:m[C]/E;o[f++]=(v+(w?.5:0))/t,o[f++]=u<=1?1*u/3:u<=3?1*(u-2)/3+1/3:1*(u-4)/3+2/3,d||u===0||v===t||(u!==5&&(a[g++]=h,a[g++]=h+1,a[g++]=h-t),u!==1&&(a[g++]=h,a[g++]=h-t,a[g++]=h-t-1)),h++}}return{position:s,normal:i,uv:o,faces:a}}function Gt(e,n){const t=typeof n=="number"?n:n!=null?n.width:1,r=typeof n=="number"?n:n!=null?n.height:1;switch(e){case"up":case"down":return{width:t,depth:r};case"north":case"south":return{width:t,height:r};case"east":case"west":return{depth:t,height:r}}}function Bt(e){const n=Y.facingAxisOrderSwap[e],t=Y.position,r=Y.normal,s=new Float64Array(t.length),i=new Float32Array(r.length);let o=0;for(let a=0;a<4;a++){const c=o;for(let l=0;l<3;l++){const f=n[l],g=Math.abs(f)-1,h=f>=0?1:-1;s[o]=t[c+g]*h,i[o]=r[c+g]*h,o++}}return{position:s,normal:i,uv:new Float32Array(Y.uv),faces:new Uint32Array(Y.faces),isPlane:!0}}const D=1,k=2,T=3,Y={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[T,D,k],west:[-T,-D,k],north:[-D,T,k],south:[D,-T,k],up:[D,k,T],down:[D,-k,-T]}};function V(e,n,t){e.isPlane||Zt(e),Yt(e,t&&t.size);const{vertexAttributes:r,transform:s}=yt(e,n,t);return{vertexAttributes:new K(oe(se({},r),{uv:e.uv})),transform:s,components:[new B({faces:e.faces,material:t&&t.material||null})],spatialReference:n.spatialReference}}function Zt(e){for(let n=0;n<e.position.length;n+=3)e.position[n+2]+=.5}function Yt(e,n){if(n==null)return;const t=typeof n=="number"?[n,n,n]:[n.width!=null?n.width:1,n.depth!=null?n.depth:1,n.height!=null?n.height:1];L[0]=t[0],L[4]=t[1],L[8]=t[2];for(let r=0;r<e.position.length;r+=3){for(let s=0;s<3;s++)m[s]=e.position[r+s];_(m,m,L);for(let s=0;s<3;s++)e.position[r+s]=m[s]}if(t[0]!==t[1]||t[1]!==t[2]){L[0]=1/t[0],L[4]=1/t[1],L[8]=1/t[2];for(let r=0;r<e.normal.length;r+=3){for(let s=0;s<3;s++)m[s]=e.normal[r+s];_(m,m,L),rt(m,m);for(let s=0;s<3;s++)e.normal[r+s]=m[s]}}}const Ht={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},Wt={south:0,east:1,north:2,west:3,up:4,down:5},m=x(),L=be(),Be=W.getLogger("esri.geometry.support.meshUtils.rotate");function qt(e,n,t){var s,i;if(!e.vertexAttributes||!e.vertexAttributes.position||n[3]===0)return;const r=e.spatialReference;if(p(e.transform)){(t==null?void 0:t.geographic)!=null&&t.geographic!==e.transform.geographic&&Be.warn(`Specifying the 'geographic' parameter (${t.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`);const o=(s=t==null?void 0:t.origin)!=null?s:e.transform.getOriginPoint(r);Vt(e.transform,n,o)}else{const o=(i=t==null?void 0:t.origin)!=null?i:e.origin;re(e.spatialReference,t)?Xt(e,n,o):Jt(e,n,o)}}function Vt(e,n,t){const r=Te(N,t.x,t.y,t.z),s=Q(N,r,e.origin);e.applyLocalInverse(s,Oe),e.rotation=fe(e.rotation,n,q()),e.applyLocalInverse(s,s),Q(s,s,Oe),e.translation=ge(x(),e.translation,s)}function Xt(e,n,t){const r=e.spatialReference,s=me(r),i=Ze;z(t,i,s)||z(e.origin,i,s);const o=e.vertexAttributes.position,a=e.vertexAttributes.normal,c=e.vertexAttributes.tangent,l=new Float64Array(o.length),f=p(a)?new Float32Array(a.length):null,g=p(c)?new Float32Array(c.length):null;Ce(s,i,te,s),De(Ee,te);const h=Pe;_(ue(Pe),ue(n),Ee),h[3]=n[3],de(o,r,l),p(a)&&xe(a,o,l,r,f),p(c)&&ye(c,o,l,r,g),G(l,h,3,i),we(l,o,r),p(a)&&(G(f,h,3),ve(f,o,l,r,a)),p(c)&&(G(g,h,4),Ae(g,o,l,r,c)),e.vertexAttributesChanged()}function Jt(e,n,t){const r=Ze;if(!z(t,r,e.spatialReference)){const s=e.origin;r[0]=s.x,r[1]=s.y,r[2]=s.z,Be.error(`Failed to project specified origin (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`)}G(e.vertexAttributes.position,n,3,r),G(e.vertexAttributes.normal,n,3),G(e.vertexAttributes.tangent,n,4),e.vertexAttributesChanged()}function G(e,n,t,r=Ue){if(!H(e)){st(te,wt(n),ue(n));for(let s=0;s<e.length;s+=t){for(let i=0;i<3;i++)N[i]=e[s+i]-r[i];ot(N,N,te);for(let i=0;i<3;i++)e[s+i]=N[i]+r[i]}}}const N=x(),Oe=x(),Pe=q(),te=ke(),Ee=be(),Ze=x(),Ye=W.getLogger("esri.geometry.support.meshUtils.scale");function _t(e,n,t){var s;if(!e.vertexAttributes||!e.vertexAttributes.position)return;const r=e.spatialReference;if(p(e.transform)){(t==null?void 0:t.geographic)!=null&&t.geographic!==e.transform.geographic&&Ye.warn(`Specifying the 'geographic' parameter (${t.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`);const i=(s=t==null?void 0:t.origin)!=null?s:e.transform.getOriginPoint(r);Kt(e.transform,n,i)}else{const i=re(e.spatialReference,t),o=t&&t.origin||e.origin;i?Qt(e,n,o):en(e,n,o)}}function Kt(e,n,t){const r=Te(j,t.x,t.y,t.z),s=Q(j,r,e.origin);e.applyLocalInverse(s,Le);const i=Ne(x(),e.scale,n);e.scale=i,e.applyLocalInverse(s,s),Q(s,s,Le),e.translation=ge(x(),e.translation,s)}function Qt(e,n,t){const r=e.spatialReference,s=me(r),i=We;z(t,i,s)||z(e.origin,i,s);const o=e.vertexAttributes.position,a=e.vertexAttributes.normal,c=e.vertexAttributes.tangent,l=new Float64Array(o.length),f=p(a)?new Float32Array(a.length):null,g=p(c)?new Float32Array(c.length):null;de(o,r,l),p(a)&&xe(a,o,l,r,f),p(c)&&ye(c,o,l,r,g),He(l,n,i),we(l,o,r),p(a)&&ve(f,o,l,r,a),p(c)&&Ae(g,o,l,r,c),e.vertexAttributesChanged()}function en(e,n,t){const r=We;if(!z(t,r,e.spatialReference)){const s=e.origin;r[0]=s.x,r[1]=s.y,r[2]=s.z,Ye.error(`Failed to project specified origin (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`)}He(e.vertexAttributes.position,n,r),e.vertexAttributesChanged()}function He(e,n,t=Ue){if(e)for(let r=0;r<e.length;r+=3){for(let s=0;s<3;s++)j[s]=e[r+s]-t[s];Ne(j,j,n);for(let s=0;s<3;s++)e[r+s]=j[s]+t[s]}}const j=x(),Le=x(),We=x();var F;const b=W.getLogger("esri.geometry.Mesh");let y=F=class extends it(at.LoadableMixin(ct(lt))){constructor(e){super(e),this.components=null,this.transform=null,this.external=null,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new K,this.type="mesh"}initialize(){(H(this.external)||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.handles.add(ft(()=>{var e;return{vertexAttributes:this.vertexAttributes,components:(e=this.components)==null?void 0:e.map(n=>n.clone()),transform:p(this.transform)?this.transform.clone():null}},()=>this._set("external",null),{once:!0,sync:!0}))})}get hasExtent(){return!this.loaded&&p(this.external)&&p(this.external.extent)||this.loaded&&this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0)}get boundingInfo(){const e=this.vertexAttributes.position,n=this.spatialReference;if(e.length===0||this.components&&this.components.length===0)return{extent:new le({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:n}),center:new O({x:0,y:0,z:0,spatialReference:n})};const t=p(this.transform)?this.transform.project(e,n):e;let r=1/0,s=1/0,i=1/0,o=-1/0,a=-1/0,c=-1/0,l=0,f=0,g=0;const h=t.length,u=1/(h/3);let w=0;for(;w<h;){const P=t[w++],d=t[w++],$=t[w++];r=Math.min(r,P),s=Math.min(s,d),i=Math.min(i,$),o=Math.max(o,P),a=Math.max(a,d),c=Math.max(c,$),l+=u*P,f+=u*d,g+=u*$}return{extent:new le({xmin:r,ymin:s,zmin:i,xmax:o,ymax:a,zmax:c,spatialReference:n}),center:new O({x:l,y:f,z:g,spatialReference:n})}}get anchor(){if(p(this.transform))return this.transform.getOriginPoint(this.spatialReference);const e=this.boundingInfo;return new O({x:e.center.x,y:e.center.y,z:e.extent.zmin,spatialReference:this.spatialReference})}get origin(){return p(this.transform)?this.transform.getOriginPoint(this.spatialReference):this.boundingInfo.center}get extent(){return!this.loaded&&p(this.external)&&p(this.external.extent)?this.external.extent.clone():this.boundingInfo.extent}addComponent(e){this.loaded?(this.components||(this.components=[]),this.components.push(B.from(e)),this.notifyChange("components")):b.error("addComponent()","Mesh must be loaded before applying operations")}removeComponent(e){if(this.loaded){if(this.components){const n=this.components.indexOf(e);if(n!==-1)return this.components.splice(n,1),void this.notifyChange("components")}b.error("removeComponent()","Provided component is not part of the list of components")}else b.error("removeComponent()","Mesh must be loaded before applying operations")}rotate(e,n,t,r){return J(ae.x,e,U),J(ae.y,n,Ie),J(ae.z,t,ze),fe(U,Ie,U),fe(U,ze,U),qt(this,U,r),this}offset(e,n,t,r){return this.loaded?(X[0]=e,X[1]=n,X[2]=t,zt(this,X,r),this):(b.error("offset()","Mesh must be loaded before applying operations"),this)}scale(e,n){return this.loaded?(_t(this,e,n),this):(b.error("scale()","Mesh must be loaded before applying operations"),this)}centerAt(e,n){return this.loaded?(vt(this,e,n),this):(b.error("centerAt()","Mesh must be loaded before applying operations"),this)}load(e){return p(this.external)&&this.addResolvingPromise(Ot(this,this.external.source,e)),Promise.resolve(this)}clone(){const e=this.components?new Map:null,n=this.components?new Map:null,t={components:this.components?this.components.map(r=>r.cloneWithDeduplication(e,n)):null,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),transform:p(this.transform)?this.transform.clone():null,external:p(this.external)?{source:this.external.source,extent:p(this.external.extent)?this.external.extent.clone():null}:null};return new F(t)}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const{toBinaryGLTF:n}=await import("./gltfexport.0c05fc94.js");return n(this,e)}static createBox(e,n){if(!(e instanceof O))return b.error(".createBox()","expected location to be a Point instance"),null;const t=new F(V(Tt(),e,n));return n&&n.imageFace&&n.imageFace!=="all"?Ut(t,n.imageFace):t}static createSphere(e,n){return e instanceof O?new F(V(Nt(n&&n.densificationFactor||0),e,n)):(b.error(".createSphere()","expected location to be a Point instance"),null)}static createCylinder(e,n){return e instanceof O?new F(V(jt(n&&n.densificationFactor||0),e,n)):(b.error(".createCylinder()","expected location to be a Point instance"),null)}static createPlane(e,n){var s;if(!(e instanceof O))return b.error(".createPlane()","expected location to be a Point instance"),null;const t=(s=n==null?void 0:n.facing)!=null?s:"up",r=Gt(t,n==null?void 0:n.size);return new F(V(Bt(t),e,oe(se({},n),{size:r})))}static createFromPolygon(e,n){if(!(e instanceof ut))return b.error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;const t=pt(e);return new F({vertexAttributes:new K({position:t.position}),components:[new B({faces:t.faces,shading:"flat",material:n&&n.material||null})],spatialReference:e.spatialReference})}static async createFromGLTF(e,n,t){if(!(e instanceof O))throw b.error(".createfromGLTF()","expected location to be a Point instance"),new ce("invalid-input","Expected location to be a Point instance");const{loadGLTFMesh:r}=await he(import("./loadGLTFMesh.6350c848.js"),t);return new F(await r(e,n,t))}static createWithExternalSource(e,n,t){var o,a,c;const r=(o=t==null?void 0:t.extent)!=null?o:null,s=(a=t==null?void 0:t.transform.clone())!=null?a:new ee;s.origin=[e.x,e.y,(c=e.z)!=null?c:0];const i=e.spatialReference;return new F({external:{source:n,extent:r},transform:s,spatialReference:i})}static createIncomplete(e,n){var i,o;const t=(i=n==null?void 0:n.transform.clone())!=null?i:new ee;t.origin=[e.x,e.y,(o=e.z)!=null?o:0];const r=e.spatialReference,s=new F({transform:t,spatialReference:r});return s.addResolvingPromise(Promise.reject(new ce("mesh-incomplete","Mesh resources are not complete"))),s}};A([M({type:[B],json:{write:!0}})],y.prototype,"components",void 0),A([M({type:ee,json:{write:!0}})],y.prototype,"transform",void 0),A([M({constructOnly:!0})],y.prototype,"external",void 0),A([M({readOnly:!0})],y.prototype,"hasExtent",null),A([M({readOnly:!0})],y.prototype,"boundingInfo",null),A([M({readOnly:!0})],y.prototype,"anchor",null),A([M({readOnly:!0})],y.prototype,"origin",null),A([M({readOnly:!0,json:{read:!1}})],y.prototype,"extent",null),A([M({readOnly:!0,json:{read:!1,write:!0,default:!0}})],y.prototype,"hasZ",void 0),A([M({readOnly:!0,json:{read:!1,write:!0,default:!1}})],y.prototype,"hasM",void 0),A([M({type:K,nonNullable:!0,json:{write:!0}})],y.prototype,"vertexAttributes",void 0),y=F=A([ht("esri.geometry.Mesh")],y);const ae={x:ie(1,0,0),y:ie(0,1,0),z:ie(0,0,1)},U=q(),Ie=q(),ze=q(),X=x(),Se=y;var S,ne;(function(e){e.featureGUID="featureGUID",e.assetName="assetName",e.hash="hash",e.type="type",e.conversionStatus="conversionStatus",e.flags="flags",e.complexity="complexity",e.size="size",e.seqNo="seqNo",e.sourceHash="sourceHash",e.assetURL="assetURL"})(S||(S={})),function(e){e.SUBMITTED="SUBMITTED",e.INPROGRESS="INPROGRESS",e.FAILED="FAILED",e.COMPLETED="COMPLETED"}(ne||(ne={}));function fn(e,n,t){const r=t.features;t.features=[],delete t.geometryType;const s=gt.fromJSON(t);s.geometryType="mesh";const i=s.spatialReference,o=H(e.outFields)||!e.outFields.length?()=>({}):tn(e.outFields.includes("*")?null:new Set(e.outFields));for(const a of r){const c=nn(a,i,n);p(c)&&s.features.push(new mt({geometry:c,attributes:o(a)}))}return s}function tn(e){return({attributes:n})=>{if(!n)return{};if(!e)return n;for(const t in n)e.has(t)||delete n[t];return n}}function nn(e,n,t){const{status:r,source:s}=on(e);if(r===I.FAILED)return null;const i=rn(e,n,t),o=le.fromJSON(e.geometry);o.spatialReference=n;const a=sn(e,t);return r===I.PENDING?Se.createIncomplete(i,{extent:o,transform:a}):Se.createWithExternalSource(i,s,{extent:o,transform:a})}function rn({attributes:e},n,{transformFieldRoles:t}){return new O({x:e[t.originX],y:e[t.originY],z:e[t.originZ],spatialReference:n})}function sn({attributes:e,assetMappings:n},{transformFieldRoles:t}){var r;return new ee({translation:[e[t.translationX],e[t.translationY],e[t.translationZ]],rotation:J([e[t.rotationX],e[t.rotationY],e[t.rotationZ]],e[t.rotationDeg]),scale:[e[t.scaleX],e[t.scaleY],e[t.scaleZ]],geographic:!((r=n[S.flags])==null?void 0:r.includes("PROJECT_VERTICES"))})}function on(e){if(!e.assetMappings)return{status:I.FAILED};const n=[],t=new Map;for(const r of e.assetMappings){const s=r[S.seqNo],i=r[S.assetName],o=r[S.assetURL],a=r[S.conversionStatus];if(a===ne.FAILED)return{status:I.FAILED};if(a!==ne.COMPLETED)return{status:I.PENDING};if(s==null)n.push({name:i,source:o});else{const c=t.get(i);let l;c?l=c.multipart:(l=[],n.push({name:i,source:{multipart:l}}),t.set(i,{multipart:l})),l[s]=o}}return{status:I.COMPLETED,source:n}}var I;(function(e){e[e.FAILED=0]="FAILED",e[e.PENDING=1]="PENDING",e[e.COMPLETED=2]="COMPLETED"})(I||(I={}));export{fn as meshFeatureSetFromJSON};
