/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import{r as o,c as t,h as s,H as c}from"./p-6a34fcc9.js";const a=class{constructor(s){o(this,s),this.backdropClick=t(this,"backdropClick",7),this.backdropDismiss=!0}onMouseDown(o){this.emitClick(o)}emitClick(o){o.preventDefault(),o.stopPropagation(),this.backdropDismiss&&this.backdropClick.emit()}render(){return s(c,null,s("div",{class:"backdrop"}))}};a.style=".backdrop{position:absolute;top:0;left:0;width:100vw;height:100vh;background:var(--mw-component-modal-backdrop);opacity:0.4}";export{a as mw_backdrop}