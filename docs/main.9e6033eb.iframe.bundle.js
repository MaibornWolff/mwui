(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/dist/cjs.js?!./src/global/global.css":function(L,O,n){var D=n("../node_modules/css-loader/dist/runtime/api.js");O=D(!1),O.push([L.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),O.push([L.i,`body {
  font-family: 'Roboto', sans-serif;
}`,""]),L.exports=O},"./.storybook/preview.js-generated-config-entry.js":function(L,O,n){"use strict";n.r(O);var D={};n.r(D),n.d(D,"parameters",function(){return ge});var P=n("../node_modules/core-js/modules/es.object.keys.js"),B=n("../node_modules/core-js/modules/es.symbol.js"),K=n("../node_modules/core-js/modules/es.array.filter.js"),w=n("../node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),te=n("../node_modules/core-js/modules/es.array.for-each.js"),ye=n("../node_modules/core-js/modules/web.dom-collections.for-each.js"),we=n("../node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),me=n("../node_modules/core-js/modules/es.object.define-properties.js"),V=n("../node_modules/core-js/modules/es.object.define-property.js"),S=n("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),Q=n("../node_modules/core-js/modules/es.reflect.construct.js"),xe=n("../node_modules/core-js/modules/es.object.set-prototype-of.js"),Bo=n("../node_modules/core-js/modules/es.promise.js"),ke=n("../node_modules/core-js/modules/es.object.to-string.js"),Ro=n("../node_modules/core-js/modules/es.string.iterator.js"),He=n("../node_modules/core-js/modules/es.array.iterator.js"),Wo=n("../node_modules/core-js/modules/web.dom-collections.iterator.js"),Ne=n("../node_modules/core-js/modules/web.url.js"),Ko=n("../node_modules/core-js/modules/es.object.assign.js"),Ge=n("../node_modules/core-js/modules/es.object.entries.js"),So=n("../node_modules/core-js/modules/es.array.find.js"),ze=n("../node_modules/core-js/modules/es.array.includes.js"),wo=n("../node_modules/core-js/modules/es.string.starts-with.js"),Fe=n("../node_modules/core-js/modules/es.string.ends-with.js"),xo=n("../node_modules/core-js/modules/es.weak-map.js");function Ye(){var g=[];if(typeof window!="undefined"){var $=window;(!$.customElements||$.Element&&(!$.Element.prototype.closest||!$.Element.prototype.matches||!$.Element.prototype.remove||!$.Element.prototype.getRootNode))&&g.push(n.e(8).then(n.t.bind(null,"./dist/esm/polyfills/dom.js",7)));var T=function(){try{var X=new URL("b","http://a");return X.pathname="c%20d",X.href==="http://a/c%20d"&&X.searchParams}catch(ko){return!1}};(typeof Object.assign!="function"||!Object.entries||!Array.prototype.find||!Array.prototype.includes||!String.prototype.startsWith||!String.prototype.endsWith||$.NodeList&&!$.NodeList.prototype.forEach||!$.fetch||!T()||typeof WeakMap=="undefined")&&g.push(Promise.all([n.e(2),n.e(11),n.e(7)]).then(n.t.bind(null,"./dist/esm/polyfills/core-js.js",7)))}return Promise.all(g)}var Ee=n("./dist/esm/index-5ad3efa4.js"),$e=function(){return Object(Ee.e)()},Je=function($,T){return typeof window=="undefined"?Promise.resolve():$e().then(function(){return Object(Ee.a)([["my-component",[[1,"my-component",{first:[1],middle:[1],last:[1]}]]],["tlm-button",[[4,"tlm-button",{testId:[1,"test-id"],disabled:[4],secondary:[4]}]]]],T)})};(function(){if(typeof window!="undefined"&&window.Reflect!==void 0&&window.customElements!==void 0){var g=HTMLElement;window.HTMLElement=function(){return Reflect.construct(g,[],this.constructor)},HTMLElement.prototype=g.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,g)}})(),Je();var ge={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function Oe(g,$){var T=Object.keys(g);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(g);$&&(C=C.filter(function(X){return Object.getOwnPropertyDescriptor(g,X).enumerable})),T.push.apply(T,C)}return T}function Pe(g){for(var $=1;$<arguments.length;$++){var T=arguments[$]!=null?arguments[$]:{};$%2?Oe(Object(T),!0).forEach(function(C){Ze(g,C,T[C])}):Object.getOwnPropertyDescriptors?Object.defineProperties(g,Object.getOwnPropertyDescriptors(T)):Oe(Object(T)).forEach(function(C){Object.defineProperty(g,C,Object.getOwnPropertyDescriptor(T,C))})}return g}function Ze(g,$,T){return $ in g?Object.defineProperty(g,$,{value:T,enumerable:!0,configurable:!0,writable:!0}):g[$]=T,g}Object.keys(D).forEach(function(g){var $=D[g];switch(g){case"args":return Object(S.d)($);case"argTypes":return Object(S.b)($);case"decorators":return $.forEach(function(C){return Object(S.f)(C,!1)});case"loaders":return $.forEach(function(C){return Object(S.g)(C,!1)});case"parameters":return Object(S.h)(Pe({},$),!1);case"argTypesEnhancers":return $.forEach(function(C){return Object(S.c)(C)});case"argsEnhancers":return $.forEach(function(C){return Object(S.e)(C)});case"render":return Object(S.i)($);case"globals":case"globalTypes":{var T={};return T[g]=$,Object(S.h)(T,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(g+" was not supported :( !")}})},"./dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":function(L,O,n){var D={"./my-component.entry.js":["./dist/esm/my-component.entry.js",13],"./tlm-button.entry.js":["./dist/esm/tlm-button.entry.js",14]};function P(B){if(!n.o(D,B))return Promise.resolve().then(function(){var te=new Error("Cannot find module '"+B+"'");throw te.code="MODULE_NOT_FOUND",te});var K=D[B],w=K[0];return n.e(K[1]).then(function(){return n(w)})}P.keys=function(){return Object.keys(D)},P.id="./dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$",L.exports=P},"./dist/esm/index-5ad3efa4.js":function(L,O,n){"use strict";n.d(O,"a",function(){return st}),n.d(O,"b",function(){return Sn}),n.d(O,"c",function(){return lo}),n.d(O,"d",function(){return _o}),n.d(O,"e",function(){return Do}),n.d(O,"f",function(){return _t});var D=n("../node_modules/core-js/modules/es.array.is-array.js"),P=n.n(D),B=n("../node_modules/core-js/modules/es.function.name.js"),K=n.n(B),w=n("../node_modules/core-js/modules/es.array.join.js"),te=n.n(w),ye=n("../node_modules/core-js/modules/es.array.filter.js"),we=n.n(ye),me=n("../node_modules/core-js/modules/es.object.keys.js"),V=n.n(me),S=n("../node_modules/core-js/modules/es.weak-map.js"),Q=n.n(S),xe=n("../node_modules/core-js/modules/es.object.to-string.js"),Bo=n.n(xe),ke=n("../node_modules/core-js/modules/es.string.iterator.js"),Ro=n.n(ke),He=n("../node_modules/core-js/modules/es.array.iterator.js"),Wo=n.n(He),Ne=n("../node_modules/core-js/modules/web.dom-collections.iterator.js"),Ko=n.n(Ne),Ge=n("../node_modules/core-js/modules/es.set.js"),So=n.n(Ge),ze=n("../node_modules/core-js/modules/es.array.includes.js"),wo=n.n(ze),Fe=n("../node_modules/core-js/modules/es.string.includes.js"),xo=n.n(Fe),Ye=n("../node_modules/core-js/modules/es.array.concat.js"),Ee=n.n(Ye),$e=n("../node_modules/core-js/modules/es.array.slice.js"),Je=n.n($e),ge=n("../node_modules/core-js/modules/es.string.split.js"),Oe=n.n(ge),Pe=n("../node_modules/core-js/modules/es.regexp.exec.js"),Ze=n.n(Pe),g=n("../node_modules/core-js/modules/es.string.trim.js"),$=n.n(g),T=n("../node_modules/core-js/modules/es.array.find.js"),C=n.n(T),X=n("../node_modules/core-js/modules/es.array.map.js"),ko=n.n(X),Ho=n("../node_modules/core-js/modules/es.array.some.js"),ct=n.n(Ho),No=n("../node_modules/core-js/modules/es.promise.js"),it=n.n(No),Go=n("../node_modules/core-js/modules/es.number.is-nan.js"),ft=n.n(Go),zo=n("../node_modules/core-js/modules/es.number.constructor.js"),vt=n.n(zo),Fo=n("../node_modules/core-js/modules/es.object.entries.js"),pt=n.n(Fo),Yo=n("../node_modules/core-js/modules/es.object.define-property.js"),jt=n.n(Yo),Jo=n("../node_modules/core-js/modules/es.map.js"),ht=n.n(Jo),Zo=n("../node_modules/core-js/modules/es.object.assign.js"),yt=n.n(Zo),Qo=n("../node_modules/core-js/modules/web.url.js"),Et=n.n(Qo),Xo=n("../node_modules/core-js/modules/web.timers.js"),$t=n.n(Xo),Vo=n("../node_modules/core-js/modules/es.string.replace.js"),gt=n.n(Vo),qo=n("../node_modules/core-js/modules/es.symbol.js"),Ot=n.n(qo),en=n("../node_modules/core-js/modules/es.symbol.description.js"),Pt=n.n(en),on=n("../node_modules/core-js/modules/es.symbol.iterator.js"),Mt=n.n(on),nn=n("../node_modules/core-js/modules/es.array.from.js"),Dt=n.n(nn),tn=n("../node_modules/core-js/modules/es.symbol.async-iterator.js"),Lt=n.n(tn),rn=n("../node_modules/core-js/modules/es.symbol.to-string-tag.js"),Tt=n.n(rn),sn=n("../node_modules/core-js/modules/es.math.to-string-tag.js"),bt=n.n(sn),_n=n("../node_modules/core-js/modules/es.json.to-string-tag.js"),At=n.n(_n),ln=n("../node_modules/core-js/modules/es.object.create.js"),It=n.n(ln),an=n("../node_modules/core-js/modules/es.object.get-prototype-of.js"),Ct=n.n(an),un=n("../node_modules/core-js/modules/es.array.for-each.js"),Ut=n.n(un),mn=n("../node_modules/core-js/modules/web.dom-collections.for-each.js"),Bt=n.n(mn),dn=n("../node_modules/core-js/modules/es.object.set-prototype-of.js"),Rt=n.n(dn),cn=n("../node_modules/core-js/modules/es.array.reverse.js"),Wt=n.n(cn),fn=n("../node_modules/core-js/modules/es.function.bind.js"),Kt=n.n(fn),vn=n("../node_modules/core-js/modules/es.array.index-of.js"),St=n.n(vn),pn=n("../node_modules/core-js/modules/es.regexp.to-string.js"),wt=n.n(pn),jn=n("../node_modules/core-js/modules/es.date.to-string.js"),xt=n.n(jn),hn=n("../node_modules/core-js/modules/es.reflect.construct.js"),kt=n.n(hn);function yn(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function Qe(r,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}function En(r,e,o){return e&&Qe(r.prototype,e),o&&Qe(r,o),Object.defineProperty(r,"prototype",{writable:!1}),r}function $n(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&re(r,e)}function gn(r){var e=Ve();return function(){var t=se(r),s;if(e){var _=se(this).constructor;s=Reflect.construct(t,arguments,_)}else s=t.apply(this,arguments);return On(this,s)}}function On(r,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Xe(r)}function Xe(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Me(r){var e=typeof Map=="function"?new Map:void 0;return Me=function(t){if(t===null||!Pn(t))return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e!="undefined"){if(e.has(t))return e.get(t);e.set(t,s)}function s(){return de(t,arguments,se(this).constructor)}return s.prototype=Object.create(t.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),re(s,t)},Me(r)}function de(r,e,o){return Ve()?de=Reflect.construct.bind():de=function(s,_,a){var l=[null];l.push.apply(l,_);var u=Function.bind.apply(s,l),d=new u;return a&&re(d,a.prototype),d},de.apply(null,arguments)}function Ve(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(r){return!1}}function Pn(r){return Function.toString.call(r).indexOf("[native code]")!==-1}function re(r,e){return re=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,s){return t.__proto__=s,t},re(r,e)}function se(r){return se=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},se(r)}function q(r,e){return Ln(r)||Dn(r,e)||oo(r,e)||Mn()}function Mn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dn(r,e){var o=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(o!=null){var t=[],s=!0,_=!1,a,l;try{for(o=o.call(r);!(s=(a=o.next()).done)&&(t.push(a.value),!(e&&t.length===e));s=!0);}catch(u){_=!0,l=u}finally{try{!s&&o.return!=null&&o.return()}finally{if(_)throw l}}return t}}function Ln(r){if(Array.isArray(r))return r}function _e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_e=function(){return r};var r={},e=Object.prototype,o=e.hasOwnProperty,t=typeof Symbol=="function"?Symbol:{},s=t.iterator||"@@iterator",_=t.asyncIterator||"@@asyncIterator",a=t.toStringTag||"@@toStringTag";function l(c,m,v){return Object.defineProperty(c,m,{value:v,enumerable:!0,configurable:!0,writable:!0}),c[m]}try{l({},"")}catch(c){l=function(v,j,y){return v[j]=y}}function u(c,m,v,j){var y=m&&m.prototype instanceof f?m:f,E=Object.create(y.prototype),I=new We(j||[]);return E._invoke=function(N,G,M){var W="suspendedStart";return function(z,Co){if(W==="executing")throw new Error("Generator is already running");if(W==="completed"){if(z==="throw")throw Co;return Io()}for(M.method=z,M.arg=Co;;){var Uo=M.delegate;if(Uo){var Se=Z(Uo,M);if(Se){if(Se===i)continue;return Se}}if(M.method==="next")M.sent=M._sent=M.arg;else if(M.method==="throw"){if(W==="suspendedStart")throw W="completed",M.arg;M.dispatchException(M.arg)}else M.method==="return"&&M.abrupt("return",M.arg);W="executing";var ue=d(N,G,M);if(ue.type==="normal"){if(W=M.done?"completed":"suspendedYield",ue.arg===i)continue;return{value:ue.arg,done:M.done}}ue.type==="throw"&&(W="completed",M.method="throw",M.arg=ue.arg)}}}(c,v,I),E}function d(c,m,v){try{return{type:"normal",arg:c.call(m,v)}}catch(j){return{type:"throw",arg:j}}}r.wrap=u;var i={};function f(){}function p(){}function h(){}var b={};l(b,s,function(){return this});var A=Object.getPrototypeOf,R=A&&A(A(Ke([])));R&&R!==e&&o.call(R,s)&&(b=R);var J=h.prototype=f.prototype=Object.create(b);function he(c){["next","throw","return"].forEach(function(m){l(c,m,function(v){return this._invoke(m,v)})})}function ne(c,m){function v(y,E,I,N){var G=d(c[y],c,E);if(G.type!=="throw"){var M=G.arg,W=M.value;return W&&typeof W=="object"&&o.call(W,"__await")?m.resolve(W.__await).then(function(z){v("next",z,I,N)},function(z){v("throw",z,I,N)}):m.resolve(W).then(function(z){M.value=z,I(M)},function(z){return v("throw",z,I,N)})}N(G.arg)}var j;this._invoke=function(y,E){function I(){return new m(function(N,G){v(y,E,N,G)})}return j=j?j.then(I,I):I()}}function Z(c,m){var v=c.iterator[m.method];if(v===void 0){if(m.delegate=null,m.method==="throw"){if(c.iterator.return&&(m.method="return",m.arg=void 0,Z(c,m),m.method==="throw"))return i;m.method="throw",m.arg=new TypeError("The iterator does not provide a 'throw' method")}return i}var j=d(v,c.iterator,m.arg);if(j.type==="throw")return m.method="throw",m.arg=j.arg,m.delegate=null,i;var y=j.arg;return y?y.done?(m[c.resultName]=y.value,m.next=c.nextLoc,m.method!=="return"&&(m.method="next",m.arg=void 0),m.delegate=null,i):y:(m.method="throw",m.arg=new TypeError("iterator result is not an object"),m.delegate=null,i)}function Y(c){var m={tryLoc:c[0]};1 in c&&(m.catchLoc=c[1]),2 in c&&(m.finallyLoc=c[2],m.afterLoc=c[3]),this.tryEntries.push(m)}function H(c){var m=c.completion||{};m.type="normal",delete m.arg,c.completion=m}function We(c){this.tryEntries=[{tryLoc:"root"}],c.forEach(Y,this),this.reset(!0)}function Ke(c){if(c){var m=c[s];if(m)return m.call(c);if(typeof c.next=="function")return c;if(!isNaN(c.length)){var v=-1,j=function y(){for(;++v<c.length;)if(o.call(c,v))return y.value=c[v],y.done=!1,y;return y.value=void 0,y.done=!0,y};return j.next=j}}return{next:Io}}function Io(){return{value:void 0,done:!0}}return p.prototype=h,l(J,"constructor",h),l(h,"constructor",p),p.displayName=l(h,a,"GeneratorFunction"),r.isGeneratorFunction=function(c){var m=typeof c=="function"&&c.constructor;return!!m&&(m===p||(m.displayName||m.name)==="GeneratorFunction")},r.mark=function(c){return Object.setPrototypeOf?Object.setPrototypeOf(c,h):(c.__proto__=h,l(c,a,"GeneratorFunction")),c.prototype=Object.create(J),c},r.awrap=function(c){return{__await:c}},he(ne.prototype),l(ne.prototype,_,function(){return this}),r.AsyncIterator=ne,r.async=function(c,m,v,j,y){y===void 0&&(y=Promise);var E=new ne(u(c,m,v,j),y);return r.isGeneratorFunction(m)?E:E.next().then(function(I){return I.done?I.value:E.next()})},he(J),l(J,a,"Generator"),l(J,s,function(){return this}),l(J,"toString",function(){return"[object Generator]"}),r.keys=function(c){var m=[];for(var v in c)m.push(v);return m.reverse(),function j(){for(;m.length;){var y=m.pop();if(y in c)return j.value=y,j.done=!1,j}return j.done=!0,j}},r.values=Ke,We.prototype={constructor:We,reset:function(m){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(H),!m)for(var v in this)v.charAt(0)==="t"&&o.call(this,v)&&!isNaN(+v.slice(1))&&(this[v]=void 0)},stop:function(){this.done=!0;var m=this.tryEntries[0].completion;if(m.type==="throw")throw m.arg;return this.rval},dispatchException:function(m){if(this.done)throw m;var v=this;function j(M,W){return I.type="throw",I.arg=m,v.next=M,W&&(v.method="next",v.arg=void 0),!!W}for(var y=this.tryEntries.length-1;y>=0;--y){var E=this.tryEntries[y],I=E.completion;if(E.tryLoc==="root")return j("end");if(E.tryLoc<=this.prev){var N=o.call(E,"catchLoc"),G=o.call(E,"finallyLoc");if(N&&G){if(this.prev<E.catchLoc)return j(E.catchLoc,!0);if(this.prev<E.finallyLoc)return j(E.finallyLoc)}else if(N){if(this.prev<E.catchLoc)return j(E.catchLoc,!0)}else{if(!G)throw new Error("try statement without catch or finally");if(this.prev<E.finallyLoc)return j(E.finallyLoc)}}}},abrupt:function(m,v){for(var j=this.tryEntries.length-1;j>=0;--j){var y=this.tryEntries[j];if(y.tryLoc<=this.prev&&o.call(y,"finallyLoc")&&this.prev<y.finallyLoc){var E=y;break}}E&&(m==="break"||m==="continue")&&E.tryLoc<=v&&v<=E.finallyLoc&&(E=null);var I=E?E.completion:{};return I.type=m,I.arg=v,E?(this.method="next",this.next=E.finallyLoc,i):this.complete(I)},complete:function(m,v){if(m.type==="throw")throw m.arg;return m.type==="break"||m.type==="continue"?this.next=m.arg:m.type==="return"?(this.rval=this.arg=m.arg,this.method="return",this.next="end"):m.type==="normal"&&v&&(this.next=v),i},finish:function(m){for(var v=this.tryEntries.length-1;v>=0;--v){var j=this.tryEntries[v];if(j.finallyLoc===m)return this.complete(j.completion,j.afterLoc),H(j),i}},catch:function(m){for(var v=this.tryEntries.length-1;v>=0;--v){var j=this.tryEntries[v];if(j.tryLoc===m){var y=j.completion;if(y.type==="throw"){var E=y.arg;H(j)}return E}}throw new Error("illegal catch attempt")},delegateYield:function(m,v,j){return this.delegate={iterator:Ke(m),resultName:v,nextLoc:j},this.method==="next"&&(this.arg=void 0),i}},r}function qe(r,e,o,t,s,_,a){try{var l=r[_](a),u=l.value}catch(d){o(d);return}l.done?e(u):Promise.resolve(u).then(t,s)}function eo(r){return function(){var e=this,o=arguments;return new Promise(function(t,s){var _=r.apply(e,o);function a(u){qe(_,t,s,a,l,"next",u)}function l(u){qe(_,t,s,a,l,"throw",u)}a(void 0)})}}function De(r){return An(r)||bn(r)||oo(r)||Tn()}function Tn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oo(r,e){if(!!r){if(typeof r=="string")return Le(r,e);var o=Object.prototype.toString.call(r).slice(8,-1);if(o==="Object"&&r.constructor&&(o=r.constructor.name),o==="Map"||o==="Set")return Array.from(r);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Le(r,e)}}function bn(r){if(typeof Symbol!="undefined"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function An(r){if(Array.isArray(r))return Le(r)}function Le(r,e){(e==null||e>r.length)&&(e=r.length);for(var o=0,t=new Array(e);o<e;o++)t[o]=r[o];return t}var In="tlm-stencil",ee,no,ce,to=!1,ie=!1,Te=!1,ro=!1,be=!1,F=function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return function(){}},Cn=function(e,o){return function(){}},Un="{visibility:hidden}.hydrated{visibility:inherit}",so={},Bn=function(e){return e!=null},Ae=function(e){return e=typeof e,e==="object"||e==="function"},_o=function(e,o){for(var t=null,s=null,_=!1,a=!1,l=[],u=function b(A){for(var R=0;R<A.length;R++)t=A[R],Array.isArray(t)?b(t):t!=null&&typeof t!="boolean"&&((_=typeof e!="function"&&!Ae(t))&&(t=String(t)),_&&a?l[l.length-1].$text$+=t:l.push(_?Ie(null,t):t),a=_)},d=arguments.length,i=new Array(d>2?d-2:0),f=2;f<d;f++)i[f-2]=arguments[f];if(u(i),o){o.name&&(s=o.name);{var p=o.className||o.class;p&&(o.class=typeof p!="object"?p:Object.keys(p).filter(function(b){return p[b]}).join(" "))}}var h=Ie(e,null);return h.$attrs$=o,l.length>0&&(h.$children$=l),h.$name$=s,h},Ie=function(e,o){var t={$flags$:0,$tag$:e,$text$:o,$elm$:null,$children$:null};return t.$attrs$=null,t.$name$=null,t},Rn={},Wn=function(e){return e&&e.$tag$===Rn},Kn=function(e,o){return e!=null&&!Ae(e)?o&4?e==="false"?!1:e===""||!!e:o&1?String(e):e:e},lo=function(e){return oe(e).$hostElement$},Sn=function(e,o,t){var s=lo(e);return{emit:function(a){return ao(s,o,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:a})}}},ao=function(e,o,t){var s=U.ce(o,t);return e.dispatchEvent(s),s},uo=new WeakMap,wn=function(e,o,t){var s=pe.get(e);ut&&t?(s=s||new CSSStyleSheet,typeof s=="string"?s=o:s.replaceSync(o)):s=o,pe.set(e,s)},xn=function(e,o,t,s){var _=mo(o),a=pe.get(_);if(e=e.nodeType===11?e:k,a)if(typeof a=="string"){e=e.head||e;var l=uo.get(e),u;l||uo.set(e,l=new Set),l.has(_)||(u=k.createElement("style"),u.innerHTML=a,e.insertBefore(u,e.querySelector("link")),l&&l.add(_))}else e.adoptedStyleSheets.includes(a)||(e.adoptedStyleSheets=[].concat(De(e.adoptedStyleSheets),[a]));return _},kn=function(e){var o=e.$cmpMeta$,t=e.$hostElement$,s=o.$flags$,_=F("attachStyles",o.$tagName$),a=xn(t.shadowRoot?t.shadowRoot:t.getRootNode(),o);s&10&&(t["s-sc"]=a,t.classList.add(a+"-h")),_()},mo=function(e,o){return"sc-"+e.$tagName$},co=function(e,o,t,s,_,a){if(t!==s){var l=Po(e,o),u=o.toLowerCase();if(o==="class"){var d=e.classList,i=io(t),f=io(s);d.remove.apply(d,De(i.filter(function(b){return b&&!f.includes(b)}))),d.add.apply(d,De(f.filter(function(b){return b&&!i.includes(b)})))}else if(!l&&o[0]==="o"&&o[1]==="n")o[2]==="-"?o=o.slice(3):Po(je,u)?o=u.slice(2):o=u[2]+o.slice(3),t&&U.rel(e,o,t,!1),s&&U.ael(e,o,s,!1);else{var p=Ae(s);if((l||p&&s!==null)&&!_)try{if(e.tagName.includes("-"))e[o]=s;else{var h=s==null?"":s;o==="list"?l=!1:(t==null||e[o]!=h)&&(e[o]=h)}}catch(b){}s==null||s===!1?(s!==!1||e.getAttribute(o)==="")&&e.removeAttribute(o):(!l||a&4||_)&&!p&&(s=s===!0?"":s,e.setAttribute(o,s))}}},Hn=/\s/,io=function(e){return e?e.split(Hn):[]},fo=function(e,o,t,s){var _=o.$elm$.nodeType===11&&o.$elm$.host?o.$elm$.host:o.$elm$,a=e&&e.$attrs$||so,l=o.$attrs$||so;for(s in a)s in l||co(_,s,a[s],void 0,t,o.$flags$);for(s in l)co(_,s,a[s],l[s],t,o.$flags$)},vo=function r(e,o,t,s){var _=o.$children$[t],a=0,l,u,d;if(to||(Te=!0,_.$tag$==="slot"&&(ee&&s.classList.add(ee+"-s"),_.$flags$|=_.$children$?2:1)),_.$text$!==null)l=_.$elm$=k.createTextNode(_.$text$);else if(_.$flags$&1)l=_.$elm$=k.createTextNode("");else if(l=_.$elm$=k.createElement(_.$flags$&2?"slot-fb":_.$tag$),fo(null,_,ro),Bn(ee)&&l["s-si"]!==ee&&l.classList.add(l["s-si"]=ee),_.$children$)for(a=0;a<_.$children$.length;++a)u=r(e,_,a,l),u&&l.appendChild(u);return l["s-hn"]=ce,_.$flags$&3&&(l["s-sr"]=!0,l["s-cr"]=no,l["s-sn"]=_.$name$||"",d=e&&e.$children$&&e.$children$[t],d&&d.$tag$===_.$tag$&&e.$elm$&&fe(e.$elm$,!1)),l},fe=function r(e,o){U.$flags$|=1;for(var t=e.childNodes,s=t.length-1;s>=0;s--){var _=t[s];_["s-hn"]!==ce&&_["s-ol"]&&(ho(_).insertBefore(_,Ce(_)),_["s-ol"].remove(),_["s-ol"]=void 0,Te=!0),o&&r(_,o)}U.$flags$&=-2},po=function(e,o,t,s,_,a){var l=e["s-cr"]&&e["s-cr"].parentNode||e,u;for(l.shadowRoot&&l.tagName===ce&&(l=l.shadowRoot);_<=a;++_)s[_]&&(u=vo(null,t,_,e),u&&(s[_].$elm$=u,l.insertBefore(u,Ce(o))))},jo=function(e,o,t,s,_){for(;o<=t;++o)(s=e[o])&&(_=s.$elm$,ie=!0,_["s-ol"]?_["s-ol"].remove():fe(_,!0),_.remove())},Nn=function(e,o,t,s){for(var _=0,a=0,l=o.length-1,u=o[0],d=o[l],i=s.length-1,f=s[0],p=s[i],h;_<=l&&a<=i;)u==null?u=o[++_]:d==null?d=o[--l]:f==null?f=s[++a]:p==null?p=s[--i]:ve(u,f)?(le(u,f),u=o[++_],f=s[++a]):ve(d,p)?(le(d,p),d=o[--l],p=s[--i]):ve(u,p)?((u.$tag$==="slot"||p.$tag$==="slot")&&fe(u.$elm$.parentNode,!1),le(u,p),e.insertBefore(u.$elm$,d.$elm$.nextSibling),u=o[++_],p=s[--i]):ve(d,f)?((u.$tag$==="slot"||p.$tag$==="slot")&&fe(d.$elm$.parentNode,!1),le(d,f),e.insertBefore(d.$elm$,u.$elm$),d=o[--l],f=s[++a]):(h=vo(o&&o[a],t,a,e),f=s[++a],h&&ho(u.$elm$).insertBefore(h,Ce(u.$elm$)));_>l?po(e,s[i+1]==null?null:s[i+1].$elm$,t,s,a,i):a>i&&jo(o,_,l)},ve=function(e,o){return e.$tag$===o.$tag$?e.$tag$==="slot"?e.$name$===o.$name$:!0:!1},Ce=function(e){return e&&e["s-ol"]||e},ho=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode},le=function(e,o){var t=o.$elm$=e.$elm$,s=e.$children$,_=o.$children$,a=o.$tag$,l=o.$text$,u;l===null?(a==="slot"||fo(e,o,ro),s!==null&&_!==null?Nn(t,s,o,_):_!==null?(e.$text$!==null&&(t.textContent=""),po(t,null,o,_,0,_.length-1)):s!==null&&jo(s,0,s.length-1)):(u=t["s-cr"])?u.parentNode.textContent=l:e.$text$!==l&&(t.data=l)},Gn=function r(e){var o=e.childNodes,t,s,_,a,l,u;for(s=0,_=o.length;s<_;s++)if(t=o[s],t.nodeType===1){if(t["s-sr"]){for(l=t["s-sn"],t.hidden=!1,a=0;a<_;a++)if(u=o[a].nodeType,o[a]["s-hn"]!==t["s-hn"]||l!==""){if(u===1&&l===o[a].getAttribute("slot")){t.hidden=!0;break}}else if(u===1||u===3&&o[a].textContent.trim()!==""){t.hidden=!0;break}}r(t)}},x=[],zn=function r(e){for(var o,t,s,_,a,l,u=0,d=e.childNodes,i=d.length;u<i;u++){if(o=d[u],o["s-sr"]&&(t=o["s-cr"])&&t.parentNode)for(s=t.parentNode.childNodes,_=o["s-sn"],l=s.length-1;l>=0;l--)t=s[l],!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==o["s-hn"]&&(yo(t,_)?(a=x.find(function(f){return f.$nodeToRelocate$===t}),ie=!0,t["s-sn"]=t["s-sn"]||_,a?a.$slotRefNode$=o:x.push({$slotRefNode$:o,$nodeToRelocate$:t}),t["s-sr"]&&x.map(function(f){yo(f.$nodeToRelocate$,t["s-sn"])&&(a=x.find(function(p){return p.$nodeToRelocate$===t}),a&&!f.$slotRefNode$&&(f.$slotRefNode$=a.$slotRefNode$))})):x.some(function(f){return f.$nodeToRelocate$===t})||x.push({$nodeToRelocate$:t}));o.nodeType===1&&r(o)}},yo=function(e,o){return e.nodeType===1?e.getAttribute("slot")===null&&o===""||e.getAttribute("slot")===o:e["s-sn"]===o?!0:o===""},Fn=function(e,o){var t=e.$hostElement$,s=e.$cmpMeta$,_=e.$vnode$||Ie(null,null),a=Wn(o)?o:_o(null,null,o);ce=t.tagName,a.$tag$=null,a.$flags$|=4,e.$vnode$=a,a.$elm$=_.$elm$=t.shadowRoot||t,ee=t["s-sc"],no=t["s-cr"],to=(s.$flags$&1)!==0,ie=!1,le(_,a);{if(U.$flags$|=1,Te){zn(a.$elm$);for(var l,u,d,i,f,p,h=0;h<x.length;h++)l=x[h],u=l.$nodeToRelocate$,u["s-ol"]||(d=k.createTextNode(""),d["s-nr"]=u,u.parentNode.insertBefore(u["s-ol"]=d,u));for(h=0;h<x.length;h++)if(l=x[h],u=l.$nodeToRelocate$,l.$slotRefNode$){for(i=l.$slotRefNode$.parentNode,f=l.$slotRefNode$.nextSibling,d=u["s-ol"];d=d.previousSibling;)if(p=d["s-nr"],p&&p["s-sn"]===u["s-sn"]&&i===p.parentNode&&(p=p.nextSibling,!p||!p["s-nr"])){f=p;break}(!f&&i!==u.parentNode||u.nextSibling!==f)&&u!==f&&(!u["s-hn"]&&u["s-ol"]&&(u["s-hn"]=u["s-ol"].parentNode.nodeName),i.insertBefore(u,f))}else u.nodeType===1&&(u.hidden=!0)}ie&&Gn(a.$elm$),U.$flags$&=-2,x.length=0}},Eo=function(e,o){o&&!e.$onRenderResolve$&&o["s-p"]&&o["s-p"].push(new Promise(function(t){return e.$onRenderResolve$=t}))},Ue=function(e,o){if(e.$flags$|=16,e.$flags$&4){e.$flags$|=512;return}Eo(e,e.$ancestorComponent$);var t=function(){return Yn(e,o)};return dt(t)},Yn=function(e,o){var t=F("scheduleUpdate",e.$cmpMeta$.$tagName$),s=e.$lazyInstance$,_;return o&&(_=Xn(s,"componentWillLoad")),t(),Vn(_,function(){return Jn(e,s,o)})},Jn=function(){var r=eo(_e().mark(function e(o,t,s){var _,a,l,u,d,i;return _e().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:_=o.$hostElement$,a=F("update",o.$cmpMeta$.$tagName$),l=_["s-rc"],s&&kn(o),u=F("render",o.$cmpMeta$.$tagName$),Zn(o,t),l&&(l.map(function(h){return h()}),_["s-rc"]=void 0),u(),a(),d=_["s-p"],i=function(){return Qn(o)},d.length===0?i():(Promise.all(d).then(i),o.$flags$|=4,d.length=0);case 12:case"end":return p.stop()}},e)}));return function(o,t,s){return r.apply(this,arguments)}}(),Zn=function(e,o,t){try{o=o.render(),e.$flags$&=-17,e.$flags$|=2,Fn(e,o)}catch(s){ae(s,e.$hostElement$)}return null},Qn=function(e){var o=e.$cmpMeta$.$tagName$,t=e.$hostElement$,s=F("postUpdate",o),_=e.$ancestorComponent$;e.$flags$&64?s():(e.$flags$|=64,go(t),s(),e.$onReadyResolve$(t),_||$o()),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),e.$flags$&512&&Re(function(){return Ue(e,!1)}),e.$flags$&=-517},$o=function(e){go(k.documentElement),Re(function(){return ao(je,"appload",{detail:{namespace:In}})})},Xn=function(e,o,t){if(e&&e[o])try{return e[o](t)}catch(s){ae(s)}},Vn=function(e,o){return e&&e.then?e.then(o):o()},go=function(e){return e.classList.add("hydrated")},qn=function(e,o){return oe(e).$instanceValues$.get(o)},et=function(e,o,t,s){var _=oe(e),a=_.$instanceValues$.get(o),l=_.$flags$,u=_.$lazyInstance$;t=Kn(t,s.$members$[o][0]);var d=Number.isNaN(a)&&Number.isNaN(t),i=t!==a&&!d;(!(l&8)||a===void 0)&&i&&(_.$instanceValues$.set(o,t),u&&(l&18)===2&&Ue(_,!1))},Oo=function(e,o,t){if(o.$members$){var s=Object.entries(o.$members$),_=e.prototype;if(s.map(function(l){var u=q(l,2),d=u[0],i=q(u[1],1),f=i[0];(f&31||t&2&&f&32)&&Object.defineProperty(_,d,{get:function(){return qn(this,d)},set:function(h){et(this,d,h,o)},configurable:!0,enumerable:!0})}),t&1){var a=new Map;_.attributeChangedCallback=function(l,u,d){var i=this;U.jmp(function(){var f=a.get(l);if(i.hasOwnProperty(f))d=i[f],delete i[f];else if(_.hasOwnProperty(f)&&typeof i[f]=="number"&&i[f]==d)return;i[f]=d===null&&typeof i[f]=="boolean"?!1:d})},e.observedAttributes=s.filter(function(l){var u=q(l,2),d=u[0],i=u[1];return i[0]&15}).map(function(l){var u=q(l,2),d=u[0],i=u[1],f=i[1]||d;return a.set(f,d),f})}}return e},ot=function(){var r=eo(_e().mark(function e(o,t,s,_,a){var l,u,d,i,f,p,h;return _e().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:if((t.$flags$&32)!==0){A.next=16;break}if(t.$flags$|=32,a=at(s),!a.then){A.next=9;break}return l=Cn(),A.next=7,a;case 7:a=A.sent,l();case 9:a.isProxied||(Oo(a,s,2),a.isProxied=!0),u=F("createInstance",s.$tagName$),t.$flags$|=8;try{new a(t)}catch(R){ae(R)}t.$flags$&=-9,u(),a.style&&(d=a.style,i=mo(s),pe.has(i)||(f=F("registerStyles",s.$tagName$),wn(i,d,!!(s.$flags$&1)),f()));case 16:p=t.$ancestorComponent$,h=function(){return Ue(t,!0)},p&&p["s-rc"]?p["s-rc"].push(h):h();case 19:case"end":return A.stop()}},e)}));return function(o,t,s,_,a){return r.apply(this,arguments)}}(),nt=function(e){if((U.$flags$&1)===0){var o=oe(e),t=o.$cmpMeta$,s=F("connectedCallback",t.$tagName$);if(!(o.$flags$&1)){o.$flags$|=1,t.$flags$&12&&tt(e);for(var _=e;_=_.parentNode||_.host;)if(_["s-p"]){Eo(o,o.$ancestorComponent$=_);break}t.$members$&&Object.entries(t.$members$).map(function(a){var l=q(a,2),u=l[0],d=q(l[1],1),i=d[0];if(i&31&&e.hasOwnProperty(u)){var f=e[u];delete e[u],e[u]=f}}),ot(e,o,t)}s()}},tt=function(e){var o=e["s-cr"]=k.createComment("");o["s-cn"]=!0,e.insertBefore(o,e.firstChild)},rt=function(e){(U.$flags$&1)===0&&oe(e)},st=function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=F(),s=[],_=o.exclude||[],a=je.customElements,l=k.head,u=l.querySelector("meta[charset]"),d=k.createElement("style"),i=[],f,p=!0;Object.assign(U,o),U.$resourcesUrl$=new URL(o.resourcesUrl||"./",k.baseURI).href,e.map(function(h){h[1].map(function(b){var A={$flags$:b[0],$tagName$:b[1],$members$:b[2],$listeners$:b[3]};A.$members$=b[2];var R=A.$tagName$,J=function(he){$n(Z,he);var ne=gn(Z);function Z(Y){var H;return yn(this,Z),H=ne.call(this,Y),Y=Xe(H),lt(Y,A),A.$flags$&1&&Y.attachShadow({mode:"open"}),H}return En(Z,[{key:"connectedCallback",value:function(){var H=this;f&&(clearTimeout(f),f=null),p?i.push(this):U.jmp(function(){return nt(H)})}},{key:"disconnectedCallback",value:function(){var H=this;U.jmp(function(){return rt(H)})}},{key:"componentOnReady",value:function(){return oe(this).$onReadyPromise$}}]),Z}(Me(HTMLElement));A.$lazyBundleId$=h[0],!_.includes(R)&&!a.get(R)&&(s.push(R),a.define(R,Oo(J,A,1)))})}),d.innerHTML=s+Un,d.setAttribute("data-styles",""),l.insertBefore(d,u?u.nextSibling:l.firstChild),p=!1,i.length?i.map(function(h){return h.connectedCallback()}):U.jmp(function(){return f=setTimeout($o,30)}),t()},Be=new WeakMap,oe=function(e){return Be.get(e)},_t=function(e,o){return Be.set(o.$lazyInstance$=e,o)},lt=function(e,o){var t={$flags$:0,$hostElement$:e,$cmpMeta$:o,$instanceValues$:new Map};return t.$onReadyPromise$=new Promise(function(s){return t.$onReadyResolve$=s}),e["s-p"]=[],e["s-rc"]=[],Be.set(e,t)},Po=function(e,o){return o in e},ae=function(e,o){return(0,console.error)(e,o)},Mo=new Map,at=function(e,o,t){var s=e.$tagName$.replace(/-/g,"_"),_=e.$lazyBundleId$,a=Mo.get(_);if(a)return a[s];/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return n("./dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$")("./"+_+".entry.js").then(function(l){return Mo.set(_,l),l[s]},ae)},pe=new Map,je=typeof window!="undefined"?window:{},k=je.document||{head:{}},U={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,o,t,s){return e.addEventListener(o,t,s)},rel:function(e,o,t,s){return e.removeEventListener(o,t,s)},ce:function(e,o){return new CustomEvent(e,o)}},Do=function(e){return Promise.resolve(e)},ut=function(){try{return new CSSStyleSheet,typeof new CSSStyleSheet().replaceSync=="function"}catch(r){}return!1}(),Lo=[],To=[],mt=function(e,o){return function(t){e.push(t),be||(be=!0,o&&U.$flags$&4?Re(Ao):U.raf(Ao))}},bo=function(e){for(var o=0;o<e.length;o++)try{e[o](performance.now())}catch(t){ae(t)}e.length=0},Ao=function r(){bo(Lo),bo(To),(be=Lo.length>0)&&U.raf(r)},Re=function(e){return Do().then(e)},dt=mt(To,!0)},"./generated-stories-entry.js":function(L,O,n){"use strict";(function(D){var P=n("./node_modules/@storybook/html/dist/esm/client/index.js");(0,P.configure)([n("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),n("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],D,!1)}).call(this,n("../node_modules/webpack/buildin/module.js")(L))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(L,O,n){var D={"./components/tlm-button/tlm-button.stories.ts":"./src/components/tlm-button/tlm-button.stories.ts"};function P(K){var w=B(K);return n(w)}function B(K){if(!n.o(D,K)){var w=new Error("Cannot find module '"+K+"'");throw w.code="MODULE_NOT_FOUND",w}return D[K]}P.keys=function(){return Object.keys(D)},P.resolve=B,L.exports=P,P.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(L,O){function n(D){var P=new Error("Cannot find module '"+D+"'");throw P.code="MODULE_NOT_FOUND",P}n.keys=function(){return[]},n.resolve=n,L.exports=n,n.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/components/tlm-button/tlm-button.stories.ts":function(L,O,n){"use strict";n.r(O),n.d(O,"Button",function(){return V});var D=n("../node_modules/core-js/modules/es.function.bind.js"),P=n.n(D),B=n("../node_modules/core-js/modules/es.object.assign.js"),K=n.n(B),w=n("./src/global/global.css"),te=n.n(w),ye=`export default {
  title: 'Components/atoms/tlm-button',
};

import '../../global/global.css';

const Template = args => \`
<tlm-button test-id="\${args.testId}" onClick="\${args.onClick}" disabled="\${args.disabled}" secondary="\${args.secondary}">\${args.label}</tlm-button>\`;

export const Button = Template.bind({});
Button.args = {
  testId: 'button',
  label: 'Button',
  onClick: () => {
    console.log('clicked');
  },
  disabled: false,
  secondary: false,
};
`,we={Button:{startLoc:{col:17,line:7},endLoc:{col:148,line:8},startBody:{col:17,line:7},endBody:{col:148,line:8}}};O.default={title:"Components/atoms/tlm-button"};var me=function(Q){return`
<tlm-button test-id="`+Q.testId+'" onClick="'+Q.onClick+'" disabled="'+Q.disabled+'" secondary="'+Q.secondary+'">'+Q.label+"</tlm-button>"},V=me.bind({});V.args={testId:"button",label:"Button",onClick:function(){console.log("clicked")},disabled:!1,secondary:!1},V.parameters=Object.assign({storySource:{source:'args => `\n<tlm-button test-id="${args.testId}" onClick="${args.onClick}" disabled="${args.disabled}" secondary="${args.secondary}">${args.label}</tlm-button>`'}},V.parameters)},"./src/global/global.css":function(L,O,n){var D=n("../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),P=n("../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/dist/cjs.js?!./src/global/global.css");P=P.__esModule?P.default:P,typeof P=="string"&&(P=[[L.i,P,""]]);var B={};B.insert="head",B.singleton=!1;var K=D(P,B);L.exports=P.locals||{}},"./storybook-init-framework-entry.js":function(L,O,n){"use strict";n.r(O);var D=n("./node_modules/@storybook/html/dist/esm/client/index.js")},0:function(L,O,n){n("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),n("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),n("./storybook-init-framework-entry.js"),n("./node_modules/@storybook/html/dist/esm/client/preview/config-generated-config-entry.js"),n("./node_modules/@storybook/html/dist/esm/client/docs/config-generated-config-entry.js"),n("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),n("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),n("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),n("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),n("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),n("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),n("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),n("./.storybook/preview.js-generated-config-entry.js"),L.exports=n("./generated-stories-entry.js")},1:function(L,O){}},[[0,9,10]]]);
