/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import{r as t,c as s,h as r,g as a,H as i}from"./p-0cc86aa3.js";const o=class{constructor(r){t(this,r),this.radioChange=s(this,"radioChange",4),this.onClick=t=>{t.preventDefault();const s=t.target&&t.target.closest("mw-radio");if(s){const t=s.value;t!==this.value&&(this.value=t)}},this.value=void 0}valueChanged(t){this.radioChange.emit({value:t})}get radios(){return Array.from(this.host.querySelectorAll("mw-radio"))}render(){return r(i,{role:"radiogroup",onClick:this.onClick})}get host(){return a(this)}static get watchers(){return{value:["valueChanged"]}}};o.style=":host{display:block}";export{o as mw_radio_group}