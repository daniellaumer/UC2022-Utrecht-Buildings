import{r as n,t as i,c1 as a,c2 as c}from"./vendor.f59113c8.js";function f(r){const t=r.view.spatialReference,e=r.layer.fullExtent,o=n(e)&&e.spatialReference;if(i(e)||!o)return Promise.resolve(null);if(o.equals(t))return Promise.resolve(e.clone());const s=a(e,t);return n(s)?Promise.resolve(s):r.view.state.isLocal?c(e,t,r.layer.portalItem).then(l=>!r.destroyed&&l?l:void 0).catch(()=>null):Promise.resolve(null)}export{f as l};
