/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import{r as t,h as e,H as a}from"./p-0cc86aa3.js";const r=class{constructor(e){t(this,e)}render(){return e(a,null,e("slot",{name:"start"}),e("slot",{name:"center"}),e("slot",{name:"end"}))}};r.style=':host{display:grid;align-items:center;box-sizing:border-box;grid-template-areas:"start center end";padding-top:var(--mw-component-modal-padding-footer-t-default)}::slotted(*){display:flex;flex-flow:row;align-items:center;gap:var(--mw-component-modal-header-gap-within)}slot[name=start]::slotted(*){grid-area:start}slot[name=center]::slotted(*){grid-area:center}slot[name=end]::slotted(*){grid-area:end;justify-content:end}';export{r as mw_modal_footer}