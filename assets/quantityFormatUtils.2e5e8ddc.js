import{lF as Y,hO as B,lG as V,lH as Z,Y as F,lz as tt,lI as v,c9 as et,aU as at,aW as nt,aX as st,lJ as it,lK as rt,lL as G,dv as S,lM as ot,lN as ct,lO as lt,lP as ut,lQ as ht}from"./vendor.4451b4ce.js";import{b as ft}from"./Segment.2013d042.js";const _t={readOnly:!0,get(){return Y(this.view)}};var x;(function(t){t[t.Auto=0]="Auto",t[t.Euclidean=1]="Euclidean",t[t.Geodesic=2]="Geodesic"})(x||(x={}));function O(t){if(!t)return null;if(B(t)&&t.wkid){const e=V[t.wkid];if(e)return e}if(t.wkt){const e=Mt(t.wkt);if(e)return e}return null}function Mt(t){const e=Z.exec(t);if(!e||e.length!==2)return null;const a=e[1].split(",");if(!a||a.length<3)return null;const n=parseFloat(a[1]),s=parseFloat(a[2]);return isNaN(n)||isNaN(s)?null:{a:n,f:s===0?0:1/s}}function pt(t){const e=O(t||et.WGS84);if(dt(e))return e;const a=e.a*(1-e.f);return Object.assign(e,{b:a,eSq:1-(a/e.a)**2,radius:(2*e.a+a)/3,densificationRatio:1e4/((2*e.a+a)/3)})}function dt(t){return"b"in t&&"eSq"in t&&"radius"in t}function mt(t){return O(t)!==null}function Rt(t,e="meters"){if(!t)throw new F("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(t.some(n=>!mt(n.spatialReference)))throw new F("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const a=[];for(let n=0;n<t.length;n++){const s=t[n],{spatialReference:m}=s,g=s.type==="polyline"?s.paths:s.rings;let r=0;for(let b=0;b<g.length;b++){const o=g[b];let f=0;for(let M=1;M<o.length;M++){const z=o[M-1][0],_=o[M][0],R=o[M-1][1],l=o[M][1];if(R!==l||z!==_){const c={distance:null};vt(c,[z,R],[_,l],m),f+=c.distance}}r+=f}r=tt(r,"meters",e),a.push(r)}return a}function vt(t,e,a,n){const s=e[0]*v,m=e[1]*v,g=a[0]*v,r=a[1]*v,{a:b,b:o,f,radius:M}=pt(n),z=g-s,_=Math.atan((1-f)*Math.tan(m)),R=Math.atan((1-f)*Math.tan(r)),l=Math.sin(_),c=Math.cos(_),$=Math.sin(R),u=Math.cos(R);let k,w,p,i,N,q,P,U,y,A,D=1e3,h=z;do{if(P=Math.sin(h),U=Math.cos(h),p=Math.sqrt(u*P*(u*P)+(c*$-l*u*U)*(c*$-l*u*U)),p===0)return t.distance=0,t.azimuth=void 0,t.reverseAzimuth=void 0,t;N=l*$+c*u*U,q=Math.atan2(p,N),y=c*u*P/p,w=1-y*y,i=N-2*l*$/w,isNaN(i)&&(i=0),A=f/16*w*(4+f*(4-3*w)),k=h,h=z+(1-A)*f*y*(q+A*p*(i+A*N*(2*i*i-1)))}while(Math.abs(h-k)>1e-12&&--D>0);if(D===0){const J=M,K=Math.acos(Math.sin(m)*Math.sin(r)+Math.cos(m)*Math.cos(r)*Math.cos(g-s))*J,E=g-s,L=Math.sin(E)*Math.cos(r),Q=Math.cos(m)*Math.sin(r)-Math.sin(m)*Math.cos(r)*Math.cos(E),X=Math.atan2(L,Q);return t.azimuth=X/v,t.distance=K,t.reverseAzimuth=void 0,t}const d=w*(b*b-o*o)/(o*o),j=d/1024*(256+d*(d*(74-47*d)-128)),W=o*(1+d/16384*(4096+d*(d*(320-175*d)-768)))*(q-j*p*(i+j/4*(N*(2*i*i-1)-j/6*i*(4*p*p-3)*(4*i*i-3)))),C=Math.atan2(u*Math.sin(h),c*$-l*u*Math.cos(h)),H=Math.atan2(c*Math.sin(h),c*$*Math.cos(h)-l*u);return t.azimuth=C/v,t.distance=W,t.reverseAzimuth=H/v,t}function wt(t,e){if(at(e,0,0,0),t.length>0){for(let a=0;a<t.length;++a)nt(e,e,t[a]);st(e,e,1/t.length)}}function Nt(t,e,a,n){n.projectToRenderScreen(t,I),n.projectToRenderScreen(e,T),it(a,bt,gt),rt(a,a)}const I=G(),gt=I,T=G(),bt=T;class Pt{constructor(e=null){this.spatialReference=e}get spatialReference(){return this._spatialReference}set spatialReference(e){e!==this._spatialReference&&(this._spatialReference=e,this._updateNormalizationFactors())}normalizeDistance(e){return e*this._metersPerDistanceUnit}normalizeElevation(e){return e*this._metersPerElevationUnit}normalizeArea(e){return e*this._squareMetersPerAreaUnit}_updateNormalizationFactors(){this._metersPerDistanceUnit=S(this._spatialReference,1),this._metersPerElevationUnit=S(this._spatialReference,1),this._squareMetersPerAreaUnit=this._metersPerDistanceUnit*this._metersPerDistanceUnit}}function Ut(t,e,a,n=2,s="abbr"){return ot(t,ft(e,a).value,a,n,s)}function yt(t,e,a=2,n="abbr"){return ut(t,e.value,e.unit,a,n)}function At(t,e,a=2,n="abbr"){return ht(t,e.value,e.unit,a,n)}function qt(t,e,a=2,n="abbr"){return ct(t,e.value,e.unit,a,n)}function jt(t,e,a=2,n="abbr"){return lt(t,e.value,e.unit,a,n)}export{mt as M,qt as a,yt as b,wt as c,x as e,Ut as g,Nt as i,jt as j,_t as r,Pt as t,At as w,Rt as y,vt as z};
