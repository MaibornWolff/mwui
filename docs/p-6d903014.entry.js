/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import{r as e,h as r,H as a}from"./p-fe8723f6.js";import{A as d}from"./p-f8beecab.js";const o=class{constructor(r){e(this,r),this.ariaRole=d.NAVIGATION}render(){return r(a,null,r("div",{class:"mw-header",role:this.ariaRole},r("div",{class:"mw-header-group mw-header-group--start"},r("slot",{name:"header-group-start"})),r("div",{class:"mw-header-group mw-header-group--center"},r("slot",{name:"header-group-center"})),r("div",{class:"mw-header-group mw-header-group--end"},r("slot",{name:"header-group-end"}))))}};o.style=".mw-header{display:flex;justify-content:space-between;width:100%;padding:var(--mw-component-header-gap-within) var(--mw-component-header-padding-x);background:var(--mw-component-header-bg-default);color:var(--mw-component-header-fg-default);box-sizing:border-box}.mw-header .mw-header-group{display:flex;align-items:center}.mw-header .mw-header-group div[slot]{display:flex;align-items:center}.mw-header .mw-header-group div[slot]:empty{display:none}.mw-header .mw-header-group div[slot][slot=header-group-start]>*,.mw-header .mw-header-group div[slot][slot=header-group-center]>*{margin-right:var(--mw-component-header-gap-within)}.mw-header .mw-header-group div[slot][slot=header-group-end]>*{margin-left:var(--mw-component-header-gap-within)}";export{o as mw_header}