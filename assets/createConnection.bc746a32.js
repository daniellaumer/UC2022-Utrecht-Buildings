var z=Object.defineProperty;var S=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var F=(s,e,t)=>e in s?z(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,m=(s,e)=>{for(var t in e||(e={}))A.call(e,t)&&F(s,t,e[t]);if(S)for(var t of S(e))P.call(e,t)&&F(s,t,e[t]);return s};import{r as c,t as _,b5 as U,gD as L,a6 as D,C as W,e as y,n as v,ai as E,d as I,bJ as B,kx as j,Y as a,ky as $,gi as q,bz as G,ca as M,Q as J,an as O,aR as Q,c9 as Z,i3 as x}from"./vendor.4451b4ce.js";class C{constructor(e){this.size=0,this._start=0,this.maxSize=e,this._buffer=new Array(e)}get entries(){return this._buffer}enqueue(e){if(this.size===this.maxSize){const t=this._buffer[this._start];return this._buffer[this._start]=e,this._start=(this._start+1)%this.maxSize,t}return this._buffer[(this._start+this.size++)%this.maxSize]=e,null}dequeue(){if(this.size===0)return null;const e=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,e}peek(){return this.size===0?null:this._buffer[this._start]}find(e){if(this.size===0)return null;for(const t of this._buffer)if(c(t)&&e(t))return t;return null}clear(e){let t=this.dequeue();for(;c(t);)e&&e(t),t=this.dequeue()}}const H="__esri_stream_id__",R="__esri_timestamp__",T=1e3;class se{constructor(e,t,r,i,o=128){this._trackIdToObservations=new Map,this._idCounter=0,this._lastPurge=performance.now(),this._addOrUpdated=new Map,this._removed=[],this._maxAge=0,this._timeInfo=r,this._purgeOptions=i,this.store=e,this.objectIdField=t,this.purgeInterval=o,this._useGeneratedIds=this.objectIdField===H}add(e){if(this._useGeneratedIds){const i=this._nextId();e.attributes[this.objectIdField]=i,e.objectId=i}else e.objectId=e.attributes[this.objectIdField];if(this._addOrUpdated.set(e.objectId,e),this._maxAge=Math.max(this._maxAge,e.attributes[this._timeInfo.startTimeField]),!this._timeInfo.trackIdField)return _(this._trackIdLessObservations)&&(this._trackIdLessObservations=new C(1e5)),void this._trackIdLessObservations.enqueue(e.objectId);const t=e.attributes[this._timeInfo.trackIdField];if(!this._trackIdToObservations.has(t)){const i=c(this._purgeOptions)&&this._purgeOptions.maxObservations!=null?this._purgeOptions.maxObservations:T,o=L(i,0,T);this._trackIdToObservations.set(t,new C(o))}const r=this._trackIdToObservations.get(t).enqueue(e.objectId);c(r)&&(this._addOrUpdated.has(r)?this._addOrUpdated.delete(r):this._removed.push(r))}checkForUpdates(){const e=this._getToAdd(),t=this._getToRemove(),r=performance.now();r-this._lastPurge>=this.purgeInterval&&(this._purge(r),this._lastPurge=r);const i=[];if(c(t))for(const o of t){const u=this.store.removeById(o);c(u)&&i.push(u)}if(c(e))for(const o of e)o.attributes[R]=r,this.store.add(o);(e||i)&&this.store.update(e,i)}_getToAdd(){if(!this._addOrUpdated.size)return null;const e=new Array(this._addOrUpdated.size);let t=0;return this._addOrUpdated.forEach(r=>e[t++]=r),this._addOrUpdated.clear(),e}_getToRemove(){const e=this._removed;return this._removed.length?(this._removed=[],e):null}_nextId(){const e=this._idCounter;return this._idCounter=(this._idCounter+1)%4294967294+1,e}_purge(e){const t=this._purgeOptions;c(t)&&(this._purgeSomeByDisplayCount(t),this._purgeByAge(t),this._purgeByAgeReceived(e,t),this._purgeTracks())}_purgeSomeByDisplayCount(e){if(!e.displayCount)return;let t=this.store.size;if(t>e.displayCount){if(this._timeInfo.trackIdField){for(const r of this._trackIdToObservations.values())if(t>e.displayCount&&r.size){const i=U(r.dequeue());this._removed.push(i),t--}}if(c(this._trackIdLessObservations)){let r=t-e.displayCount;for(;r-- >0;){const i=this._trackIdLessObservations.dequeue();c(i)&&this._removed.push(i)}}}}_purgeByAge(e){var i;if(!e.age||!((i=this._timeInfo)==null?void 0:i.startTimeField))return;const t=60*e.age*1e3,r=this._maxAge-t;this.store.forEach(o=>{o.attributes[this._timeInfo.startTimeField]<r&&this._removed.push(o.objectId)})}_purgeByAgeReceived(e,t){if(!t.ageReceived)return;const r=e-60*t.ageReceived*1e3;this.store.forEach(i=>{i.attributes[R]<r&&this._removed.push(i.objectId)})}_purgeTracks(){this._trackIdToObservations.forEach((e,t)=>{e.size===0&&this._trackIdToObservations.delete(t)})}}let b=class extends D.EventedMixin(W){onFeature(s){this.emit("feature",s)}};b=y([v("esri.layers.graphics.sources.connections.StreamConnection")],b);const V=b,l=E.getLogger("esri.layers.graphics.sources.connections.WebSocketConnection");var p;(function(s){s[s.CONNECTING=0]="CONNECTING",s[s.OPEN=1]="OPEN",s[s.CLOSING=2]="CLOSING",s[s.CLOSED=3]="CLOSED"})(p||(p={}));let g=class extends V{constructor(s){super(),this.errorString=null;const{geometryType:e,spatialReference:t,sourceSpatialReference:r}=s;this._config=s,this._featureZScaler=B(e,r,t),this._open()}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){c(this._websocket)&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(_(this._websocket))return"disconnected";switch(this._websocket.readyState){case p.CONNECTING:case p.OPEN:return"connected";case p.CLOSING:case p.CLOSED:return"disconnected"}}async _tryCreateWebSocket(s=this._config.source.path,e=1e3,t=0){try{if(this.destroyed)return;const r=j(s,this._config.customParameters);this._websocket=await this._createWebSocket(r),this.notifyChange("connectionStatus")}catch(r){const i=e/1e3;return this._config.maxReconnectionAttempts&&t>=this._config.maxReconnectionAttempts?(l.error(new a("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(l.error(new a("websocket-connection",`Failed to connect. Attempting to reconnect in ${i}s`,r)),await $(e),this._tryCreateWebSocket(s,Math.min(1.5*e,1e3*this._config.maxReconnectionInterval),t+1))}}_createWebSocket(s){return new Promise((e,t)=>{const r=new WebSocket(s);r.onopen=()=>{if(r.onopen=null,this.destroyed)return r.onclose=null,void r.close();r.onclose=i=>this._onClose(i),r.onerror=i=>this._onError(i),r.onmessage=i=>this._onMessage(i),e(r)},r.onclose=i=>{r.onopen=r.onclose=null,t(i)}})}async _handshake(s=1e4){const e=this._websocket;if(_(e))return;const t=q(),r=e.onmessage,{filter:i,outFields:o,spatialReference:u}=this._config;return t.timeout(s),e.onmessage=h=>{var n;let d=null;try{d=JSON.parse(h.data)}catch{}d&&typeof d=="object"||(l.error(new a("websocket-connection","Protocol violation. Handshake failed - malformed message",h.data)),t.reject(),this.destroy()),((n=d.spatialReference)==null?void 0:n.wkid)!==(u==null?void 0:u.wkid)&&(l.error(new a("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${u.wkid}`,h.data)),t.reject(),this.destroy()),d.format!=="json"&&(l.error(new a("websocket-connection","Protocol violation. Handshake failed - format is not set",h.data)),t.reject(),this.destroy()),i&&d.filter!==i&&l.error(new a("websocket-connection","Tried to set filter, but server doesn't support it")),o&&d.outFields!==o&&l.error(new a("websocket-connection","Tried to set outFields, but server doesn't support it")),e.onmessage=r,t.resolve()},e.send(JSON.stringify({filter:i,outFields:o,format:"json",spatialReference:{wkid:u.wkid}})),t.promise}_onMessage(s){try{const e=JSON.parse(s.data);if(e.type!=="featureResult")throw new a("websocket-connection","Protocol violation - Expected to find message of type 'featureResult'",e);for(const t of e.features)c(this._featureZScaler)&&this._featureZScaler(t.geometry),this.onFeature(t)}catch(e){return l.error(new a("websocket-connection","Failed to parse message",e)),void this.destroy()}}_onError(s){const e="Encountered an error over WebSocket connection";this._set("errorString",e),l.error("websocket-connection",e)}_onClose(s){this._websocket=null,this.notifyChange("connectionStatus"),s.code!==1e3&&l.error("websocket-connection",`WebSocket closed unexpectedly with error code ${s.code}`),this.destroyed||this._open()}};y([I()],g.prototype,"connectionStatus",null),y([I()],g.prototype,"errorString",void 0),g=y([v("esri.layers.graphics.sources.connections.WebSocketConnection")],g);const f=E.getLogger("esri.layers.graphics.sources.connections.GeoEventConnection"),Y=1e4,K={maxQueryDepth:5,maxRecordCountFactor:3};let w=class extends g{constructor(s){super(m(m({},K),s))}async _open(){const s=await this._fetchServiceDefinition(this._config.source);s.timeInfo.trackIdField||f.warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const e=this._fetchWebSocketUrl(s.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(e);const{filter:t,outFields:r}=this._config;this.destroyed||this._setFilter(t,r)}_onMessage(s){let e;try{e=this._enrich(JSON.parse(s.data)),c(this._featureZScaler)&&this._featureZScaler(e.geometry)}catch(t){return void f.error(new a("geoevent-connection","Failed to parse message",t))}this.onFeature(e)}async _fetchServiceDefinition(s){const e=m({f:"json"},this._config.customParameters),t=G(s.path,{query:e,responseType:"json"}),r=(await t).data;return this._serviceDefinition=r,r}_fetchWebSocketUrl(s,e){const t=s[0],{urls:r,token:i}=t,o=this._inferWebSocketBaseUrl(r);return j(`${o}/subscribe`,{outSR:""+e.wkid,token:i})}_inferWebSocketBaseUrl(s){if(s.length===1)return s[0];for(const e of s)if(e.includes("wss"))return e;return f.error(new a("geoevent-connection","Unable to infer WebSocket url",s)),null}async _setFilter(s,e){const t=this._websocket;if(_(t)||_(s)&&_(e))return;const r=JSON.stringify({filter:this._serializeFilter(s,e)});let i=!1;const o=q(),u=()=>{i||(this.destroyed||this._websocket!==t||f.error(new a("geoevent-connection","Server timed out when setting filter")),o.reject())},h=d=>{const n=JSON.parse(d.data);n.filter&&(n.error&&(f.error(new a("geoevent-connection","Failed to set service filter",n.error)),this._set("errorString",`Could not set service filter - ${n.error}`),o.reject(n.error)),t.onmessage=this._onMessage.bind(this),i=!0,o.resolve())};return t.onmessage=h,t.send(r),setTimeout(u,Y),o.promise}_serializeFilter(s,e){const t={};if(_(s)&&_(e))return t;if(c(s)&&s.geometry)try{const r=M(s.geometry);if(r.type!=="extent")throw new a(`Expected extent but found type ${r.type}`);t.geometry=JSON.stringify(r.shiftCentralMeridian())}catch(r){f.error(new a("geoevent-connection","Encountered an error when setting connection geometryDefinition",r))}return c(s)&&s.where&&s.where!=="1 = 1"&&(t.where=s.where),c(e)&&(t.outFields=e.join(",")),t}_enrich(s){if(!this._relatedFeatures)return s;const e=this._serviceDefinition.relatedFeatures.joinField,t=s.attributes[e];if(!this._relatedFeatures.has(t))return f.warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",s),s;const{attributes:r,geometry:i}=this._relatedFeatures.get(t);for(const o in r)s.attributes[o]=r[o];return i&&(s.geometry=i),s.geometry||s.centroid||f.error(new a("geoevent-connection","Found malformed feature - no geometry found",s)),s}async _queryBuddyServices(){try{const{relatedFeatures:s,keepLatestArchive:e}=this._serviceDefinition,t=this._queryRelatedFeatures(s),r=this._queryArchive(e);await t;const i=await r;if(!i)return;for(const o of i.features)this.onFeature(this._enrich(o))}catch(s){f.error(new a("geoevent-connection","Encountered an error when querying buddy services",{error:s}))}}async _queryRelatedFeatures(s){if(!s)return;const e=await this._queryBuddy(s.featuresUrl);this._addRelatedFeatures(e)}async _queryArchive(s){if(s)return this._queryBuddy(s.featuresUrl)}async _queryBuddy(s){const e=new(await import("./vendor.4451b4ce.js").then(function(N){return N.tV})).default({url:s}),{capabilities:t}=await e.load(),r=t.query.supportsMaxRecordCountFactor,i=t.query.supportsPagination,o=t.query.supportsCentroid,u=this._config.maxRecordCountFactor,h=e.capabilities.query.maxRecordCount,d=r?h*u:h,n=new J;if(n.outFields=O(this._config.outFields,["*"]),n.where=O(Q(this._config.filter,"where"),"1=1"),n.returnGeometry=!0,n.returnExceededLimitFeatures=!0,n.outSpatialReference=Z.fromJSON(this._config.spatialReference),o&&(n.returnCentroid=!0),r&&(n.maxRecordCountFactor=u),i)return n.num=d,e.destroy(),this._queryPages(s,n);const k=await x(s,n,this._config.sourceSpatialReference);return e.destroy(),k.data}async _queryPages(s,e,t=[],r=0){e.start=c(e.num)?r*e.num:null;const{data:i}=await x(s,e,this._config.sourceSpatialReference);return i.exceededTransferLimit&&r<this._config.maxQueryDepth?(i.features.forEach(o=>t.push(o)),this._queryPages(s,e,t,r+1)):(t.forEach(o=>i.features.push(o)),i)}_addRelatedFeatures(s){const e=new Map,t=s.features,r=this._serviceDefinition.relatedFeatures.joinField;for(const i of t){const o=i.attributes[r];e.set(o,i)}this._relatedFeatures=e}};w=y([v("esri.layers.graphics.sources.connections.GeoEventConnection")],w);const X=w;function re(s,e,t,r,i,o,u,h){const d=s.path.indexOf("wss://")===0||s.path.indexOf("ws://")===0,n={source:s,sourceSpatialReference:e,spatialReference:t,geometryType:r,filter:i,maxReconnectionAttempts:o,maxReconnectionInterval:u,customParameters:h};return d?new g(n):new X(n)}export{se as h,C as s,re as t};
