import{k as F,l as W,_ as j,o as z,c as G,b as n,e as T,t as U}from"./index-CPGaNytM.js";import{r as Q,a as J,b as Z,c as X,d as H}from"./component-functions-B5zNI5oT.js";import{r as tt,a as et,b as st}from"./scrollbar-BjKdrqew.js";var A={exports:{}};/*!
  * Bootstrap modal.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(c,_){(function(h,s){c.exports=s(Q(),J(),Z(),tt(),X(),et(),H(),st())})(F,function(h,s,r,u,f,w,l,y){const D="modal",i=".bs.modal",S=".data-api",k="Escape",L=`hide${i}`,N=`hidePrevented${i}`,g=`hidden${i}`,p=`show${i}`,v=`shown${i}`,C=`resize${i}`,O=`click.dismiss${i}`,M=`mousedown.dismiss${i}`,$=`keydown.dismiss${i}`,I=`click${i}${S}`,b="modal-open",B="fade",E="show",m="modal-static",P=".modal.show",V=".modal-dialog",q=".modal-body",R='[data-bs-toggle="modal"]',x={backdrop:!0,focus:!0,keyboard:!0},Y={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class a extends h{constructor(t,e){super(t,e),this._dialog=r.findOne(V,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new y,this._addEventListeners()}static get Default(){return x}static get DefaultType(){return Y}static get NAME(){return D}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||s.trigger(this._element,p,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(b),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||s.trigger(this._element,L).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(E),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){s.off(window,i),s.off(this._dialog,i),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new u({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new w({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=r.findOne(q,this._dialog);e&&(e.scrollTop=0),l.reflow(this._element),this._element.classList.add(E);const o=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,s.trigger(this._element,v,{relatedTarget:t})};this._queueCallback(o,this._dialog,this._isAnimated())}_addEventListeners(){s.on(this._element,$,t=>{if(t.key===k){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),s.on(window,C,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),s.on(this._element,M,t=>{s.one(this._element,O,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(b),this._resetAdjustments(),this._scrollBar.reset(),s.trigger(this._element,g)})}_isAnimated(){return this._element.classList.contains(B)}_triggerBackdropTransition(){if(s.trigger(this._element,N).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,o=this._element.style.overflowY;o==="hidden"||this._element.classList.contains(m)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(m),this._queueCallback(()=>{this._element.classList.remove(m),this._queueCallback(()=>{this._element.style.overflowY=o},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),o=e>0;if(o&&!t){const d=l.isRTL()?"paddingLeft":"paddingRight";this._element.style[d]=`${e}px`}if(!o&&t){const d=l.isRTL()?"paddingRight":"paddingLeft";this._element.style[d]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const o=a.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof o[t]>"u")throw new TypeError(`No method named "${t}"`);o[t](e)}})}}return s.on(document,I,R,function(K){const t=r.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&K.preventDefault(),s.one(t,p,d=>{d.defaultPrevented||s.one(t,g,()=>{l.isVisible(this)&&this.focus()})});const e=r.findOne(P);e&&a.getInstance(e).hide(),a.getOrCreateInstance(t).toggle(this)}),f.enableDismissTrigger(a),l.defineJQueryPlugin(a),a})})(A);var it=A.exports;const ot=W(it),nt={props:{item:{}},data(){return{modalDel:""}},methods:{showModal(){this.modalDel.show()},hideModal(){this.modalDel.hide()}},mounted(){this.modalDel=new ot(this.$refs.delProductModal)}},at={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},rt={class:"modal-dialog"},lt={class:"modal-content border-0"},dt=n("div",{class:"modal-header bg-danger text-white"},[n("h5",{id:"delProductModalLabel",class:"modal-title"},[n("span",null,"刪除產品")]),n("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ht={class:"modal-body"},ct={class:"text-danger"},_t={class:"modal-footer"},mt=n("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ut(c,_,h,s,r,u){return z(),G("div",at,[n("div",rt,[n("div",lt,[dt,n("div",ht,[T(" 是否刪除 "),n("strong",ct,U(h.item.title),1),T(" 商品(刪除後將無法恢復)。 ")]),n("div",_t,[mt,n("button",{type:"button",class:"btn btn-danger",onClick:_[0]||(_[0]=f=>c.$emit("del-item"))}," 確認刪除 ")])])])],512)}const Et=j(nt,[["render",ut]]);export{ot as M,Et as d};
