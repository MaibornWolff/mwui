/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import{r as o,c as t,h as s,H as a}from"./p-0cc86aa3.js";const c=class{constructor(s){o(this,s),this.backdropClick=t(this,"backdropClick",7),this.backdropDismiss=!0}onMouseDown(o){this.emitClick(o)}emitClick(o){o.preventDefault(),o.stopPropagation(),this.backdropDismiss&&this.backdropClick.emit()}render(){return s(a,null,s("div",{class:"backdrop"}))}};c.style=".backdrop{position:absolute;top:0;left:0;width:100vw;height:100vh;background:var(--mw-component-modal-backdrop);opacity:0.4}";export{c as mw_backdrop}