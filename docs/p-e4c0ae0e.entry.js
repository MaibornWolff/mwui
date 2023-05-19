/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import{r as a,h as t,H as o,g as e}from"./p-0cc86aa3.js";var s;!function(a){a.DEFAULT="default",a.SMALL="small"}(s||(s={}));const i=class{constructor(t){a(this,t),this.delegate=(()=>{let a,t;return{attachViewToDom:async o=>{var e;if(a=o,!a.firstElementChild.classList.contains("mw-teleport-container")){const t=null===(e=a.ownerDocument)||void 0===e?void 0:e.createElement("div");t.classList.add("mw-teleport-container"),t.append(...Array.from(a.children)),a.appendChild(t)}const s=document.body;return t=document.createComment("mwui-anchor-comment"),a.parentNode.insertBefore(t,a),s.appendChild(a),a},removeViewFromDom:()=>{var o;return a&&t&&(null===(o=t.parentNode)||void 0===o||o.insertBefore(a,t),t.remove()),Promise.resolve()}}})(),this.animationDuration=300,this.configureTriggerInteraction=()=>{const{trigger:a,el:t,destroyTriggerInteraction:o}=this;o&&o(),a&&(this.destroyTriggerInteraction=((a,t)=>{const o=()=>{t.present()};return a.addEventListener("click",o),()=>{a.removeEventListener("click",o)}})(this.getTriggerElement(a),t))},this.configureDismissTriggerInteraction=()=>{const{dismissTrigger:a,el:t,destroyDismissTriggerInteraction:o}=this;o&&o(),a&&(this.destroyDismissTriggerInteraction=((a,t)=>{const o=()=>{t.dismiss()};return a.addEventListener("click",o),()=>{a.removeEventListener("click",o)}})(this.getTriggerElement(a),t))},this.handleDismiss=()=>{this.dismiss()},this.dismissAnimationRunning=!1,this.overlayHidden=!0,this.modalIsOpen=!1,this.backdropDismiss=!0,this.size=s.DEFAULT,this.trigger=void 0,this.dismissTrigger=void 0,this.isOpen=!1}onTriggerChange(){this.configureTriggerInteraction()}onDismissTriggerChange(){this.configureDismissTriggerInteraction()}onIsOpenChange(a,t){!0===a&&!1===t?this.present():!1===a&&!0===t&&this.dismiss()}componentDidLoad(){!0===this.isOpen&&this.present()}connectedCallback(){this.configureTriggerInteraction(),this.configureDismissTriggerInteraction()}disconnectedCallback(){const{destroyTriggerInteraction:a,destroyDismissTriggerInteraction:t}=this;a&&a(),t&&t()}getTriggerElement(a){return a?document.getElementById(a):null}runPresentAnimation(){return this.overlayHidden=!1,new Promise((a=>setTimeout((()=>{a()}),this.animationDuration)))}runDismissAnimation(){return this.dismissAnimationRunning=!0,new Promise((a=>setTimeout((()=>{this.overlayHidden=!0,this.dismissAnimationRunning=!1,a()}),this.animationDuration)))}async present(){const{delegate:a,el:t}=this;this.modalIsOpen||(this.modalContentElement=await(async(a,t)=>{if(a)return a.attachViewToDom(t)})(a,t),await this.runPresentAnimation(),this.modalIsOpen=!0)}async dismiss(){const{delegate:a}=this;this.modalIsOpen&&(await this.runDismissAnimation(),await((a,t)=>{if(t){if(a)return a.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()})(a,this.modalContentElement),this.modalIsOpen=!1)}render(){return t(o,{class:{"overlay-hidden":this.overlayHidden},onBackdropClick:this.handleDismiss,onIconClick:this.handleDismiss},t("div",{class:{"mw-modal":!0,"dismiss-animation":this.dismissAnimationRunning}},t("mw-backdrop",{class:"mw-modal__backdrop",part:"backdrop",backdropDismiss:this.backdropDismiss}),t("div",{class:`mw-modal__wrapper mw-modal__wrapper--${this.size}`,part:"content"},t("slot",null))))}get el(){return e(this)}static get watchers(){return{trigger:["onTriggerChange","onDismissTriggerChange"],isOpen:["onIsOpenChange"]}}};i.style=":host{display:block}:host(.overlay-hidden){display:none}.mw-modal{display:flex;justify-content:center;align-items:start;position:fixed;left:0;top:0;bottom:0;right:0;width:100%;height:100%;box-sizing:border-box;contain:strict;z-index:999999}.mw-modal.dismiss-animation .mw-modal__backdrop{animation:fadeOut 0.33s cubic-bezier(0.165, 0.84, 0.44, 1) forwards}.mw-modal.dismiss-animation .mw-modal__wrapper{animation:scaleDown 0.33s cubic-bezier(0.165, 0.84, 0.44, 1) forwards}.mw-modal__backdrop{animation:fadeIn 0.33s cubic-bezier(0.165, 0.84, 0.44, 1) forwards}.mw-modal__wrapper{-webkit-box-shadow:var(--mw-component-modal-shadow-default-0-y) var(--mw-component-modal-shadow-default-0-x) var(--mw-component-modal-shadow-default-0-blur) var(--mw-component-modal-shadow-default-0-spread) var(--mw-component-modal-shadow-default-0-color);-moz-box-shadow:var(--mw-component-modal-shadow-default-0-y) var(--mw-component-modal-shadow-default-0-x) var(--mw-component-modal-shadow-default-0-blur) var(--mw-component-modal-shadow-default-0-spread) var(--mw-component-modal-shadow-default-0-color);box-shadow:var(--mw-component-modal-shadow-default-0-y) var(--mw-component-modal-shadow-default-0-x) var(--mw-component-modal-shadow-default-0-blur) var(--mw-component-modal-shadow-default-0-spread) var(--mw-component-modal-shadow-default-0-color);z-index:1;margin-top:var(--mw-component-modal-margin-t);margin-left:var(--mw-component-modal-margin-x);margin-right:var(--mw-component-modal-margin-x);background:var(--mw-component-modal-bg-default);border-radius:var(--mw-component-modal-border-radius);padding:var(--mw-component-modal-padding-components-x-default) var(--mw-component-modal-padding-components-x-default);animation:scaleUp 0.33s cubic-bezier(0.165, 0.84, 0.44, 1) forwards}.mw-modal__wrapper--default{max-width:var(--mw-component-size-modal-default-w)}.mw-modal__wrapper--small{max-width:var(--mw-component-size-modal-small-w)}@keyframes fadeIn{0%{opacity:0}100%{opacity:0.4}}@keyframes fadeOut{0%{opacity:0.4}100%{opacity:0}}@keyframes scaleUp{0%{transform:scale(0.8) translateY(100px);opacity:0}100%{transform:scale(1) translateY(0px);opacity:1}}@keyframes scaleDown{0%{transform:scale(1) translateY(0px);opacity:1}100%{transform:scale(0.8) translateY(100px);opacity:0}}";export{i as mw_modal}