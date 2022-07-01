import{H as d,T as V,r as a,Y as h,ji as c,z as p,jj as _,t as f,cM as u,e as t,d as l,n as A}from"./vendor.4451b4ce.js";import{n as v}from"./LayerView3D.721e0232.js";import{u as T}from"./LayerView.efa4cba5.js";const w="analysis-view-handles";let i=class extends v(T){constructor(s){super(s),this.type="line-of-sight-3d",this._analysisModules={"line-of-sight":null}}initialize(){this.handles.add(d(()=>this.layer.analysis,s=>{this._destroyAnalysisView(),a(s)&&this._createAnalysisView(s)},V),w)}destroy(){this.handles.remove(w),this._destroyAnalysisView()}async whenAnalysisView(){if(a(this.analysisView))return this.analysisView;if(a(this._createAnalysisViewTask))return this._createAnalysisViewTask.promise;throw new h("layerview:no-analysisview-for-analysis","The analysis has not been set on the LineOfSightLayer of this layer view")}isUpdating(){return a(this._createAnalysisViewTask)||a(this.analysisView)&&this.analysisView.updating}_createAnalysisView(s){const n=c(async e=>(this.analysisView=await this._createAnalysisViewPromise(s,e),this._createAnalysisViewTask===n&&(this._createAnalysisViewTask=null),this.analysisView));this._createAnalysisViewTask=n}_destroyAnalysisView(){this.analysisView=p(this.analysisView),this._createAnalysisViewTask=_(this._createAnalysisViewTask)}async _createAnalysisViewPromise(s,n){const e=s.type;let y=this._analysisModules[e];if(f(y)){const o=await this._loadAnalysisModule(e);this._analysisModules[e]=o,y=o}const r=new y.default({analysis:s,view:this.view,parent:this});if(await r.when(),u(n))throw r.destroy(),new h("layerview:no-analysisview-for-analysis","The analysis has not been added to the LineOfSightLayer of this layer view",{analysis:s});return r}_loadAnalysisModule(s){return s==="line-of-sight"?import("./LineOfSightAnalysisView3D.ec4b8841.js"):null}};t([l()],i.prototype,"type",void 0),t([l()],i.prototype,"layer",void 0),t([l()],i.prototype,"analysisView",void 0),t([l()],i.prototype,"_createAnalysisViewTask",void 0),i=t([A("esri.views.3d.layers.LineOfSightLayerView3D")],i);const L=i;export{L as default};
