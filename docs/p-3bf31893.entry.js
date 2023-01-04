import{r as t,h as e,H as o,c as n,g as r,a as i}from"./p-cd041edb.js";const a=class{constructor(e){t(this,e),this.size="medium"}render(){return e(o,null,e("div",{"test-id":this.testId,class:`avatar ${this.size}`},this.alt&&e("div",{class:`fallback ${this.size}`},this.alt.substring(0,1)),this.src&&e("img",{src:this.src,alt:this.alt}),this.icon&&e("mw-icon",{icon:this.icon,size:this.size})))}};a.style=":host{display:block}.avatar{position:relative;display:flex;align-items:center;justify-content:center;border-radius:50%;background:var(--mw-component-avatars-color-bg-default);color:var(--mw-component-avatars-color-fg-default)}.avatar.large{width:var(--mw-component-size-avatars-large);height:var(--mw-component-size-avatars-large)}.avatar.medium{width:var(--mw-component-size-avatars-medium);height:var(--mw-component-size-avatars-medium)}.avatar.small{width:var(--mw-component-size-avatars-small);height:var(--mw-component-size-avatars-small)}.avatar.x-small{width:var(--mw-component-size-avatars-x-small);height:var(--mw-component-size-avatars-x-small)}.avatar img{position:absolute;border-radius:50%}.avatar.large img{width:var(--mw-component-size-avatars-large);height:var(--mw-component-size-avatars-large)}.avatar.medium img{width:var(--mw-component-size-avatars-medium);height:var(--mw-component-size-avatars-medium)}.avatar.small img{width:var(--mw-component-size-avatars-small);height:var(--mw-component-size-avatars-small)}.avatar.x-small img{width:var(--mw-component-size-avatars-x-small);height:var(--mw-component-size-avatars-x-small)}.fallback{position:absolute}.fallback.large{font-family:var(--mw-component-avatars-typo-large-font-family);font-size:var(--mw-component-avatars-typo-large-font-size);font-weight:var(--mw-component-avatars-typo-large-font-weight);line-height:var(--mw-component-avatars-typo-large-line-height)}.fallback.medium{font-family:var(--mw-component-avatars-typo-medium-font-family);font-size:var(--mw-component-avatars-typo-medium-font-size);font-weight:var(--mw-component-avatars-typo-medium-font-weight);line-height:var(--mw-component-avatars-typo-medium-line-height)}.fallback.small{font-family:var(--mw-component-avatars-typo-small-font-family);font-size:var(--mw-component-avatars-typo-small-font-size);font-weight:var(--mw-component-avatars-typo-small-font-weight);line-height:var(--mw-component-avatars-typo-small-line-height)}.fallback.x-small{font-family:var(--mw-component-avatars-typo-x-small-font-family);font-size:var(--mw-component-avatars-typo-x-small-font-size);font-weight:var(--mw-component-avatars-typo-x-small-font-weight);line-height:var(--mw-component-avatars-typo-x-small-line-height)}.icon{position:absolute}";var s=function(){function t(t){var e=this;this._insertTag=function(t){e.container.insertBefore(t,0===e.tags.length?e.insertionPoint?e.insertionPoint.nextSibling:e.prepend?e.container.firstChild:e.before:e.tags[e.tags.length-1].nextSibling),e.tags.push(t)},this.isSpeedy=void 0===t.speedy||t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(t){t.forEach(this._insertTag)},e.insert=function(t){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),void 0!==t.nonce&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}(this));var e=this.tags[this.tags.length-1];if(this.isSpeedy){var o=function(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}(e);try{o.insertRule(t,o.cssRules.length)}catch(t){}}else e.appendChild(document.createTextNode(t));this.ctr++},e.flush=function(){this.tags.forEach((function(t){return t.parentNode&&t.parentNode.removeChild(t)})),this.tags=[],this.ctr=0},t}(),c="-ms-",l="-moz-",u="-webkit-",h="comm",d="rule",f="decl",m="@keyframes",p=Math.abs,v=String.fromCharCode,w=Object.assign;function b(t){return t.trim()}function g(t,e,o){return t.replace(e,o)}function x(t,e){return t.indexOf(e)}function k(t,e){return 0|t.charCodeAt(e)}function y(t,e,o){return t.slice(e,o)}function $(t){return t.length}function z(t){return t.length}function C(t,e){return e.push(t),t}var j=1,O=1,S=0,_=0,A=0,E="";function F(t,e,o,n,r,i,a){return{value:t,root:e,parent:o,type:n,props:r,children:i,line:j,column:O,length:a,return:""}}function G(t,e){return w(F("",null,null,"",null,null,0),t,{length:-t.length},e)}function I(){return A=_>0?k(E,--_):0,O--,10===A&&(O=1,j--),A}function W(){return A=_<S?k(E,_++):0,O++,10===A&&(O=1,j++),A}function M(){return k(E,_)}function R(){return _}function P(t,e){return y(E,t,e)}function D(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function N(t){return j=O=1,S=$(E=t),_=0,[]}function L(t){return E="",t}function X(t){return b(P(_-1,U(91===t?t+2:40===t?t+1:t)))}function B(t){for(;(A=M())&&A<33;)W();return D(t)>2||D(A)>3?"":" "}function H(t,e){for(;--e&&W()&&!(A<48||A>102||A>57&&A<65||A>70&&A<97););return P(t,R()+(e<6&&32==M()&&32==W()))}function U(t){for(;W();)switch(A){case t:return _;case 34:case 39:34!==t&&39!==t&&U(A);break;case 40:41===t&&U(t);break;case 92:W()}return _}function V(t,e){for(;W()&&t+A!==57&&(t+A!==84||47!==M()););return"/*"+P(e,_-1)+"*"+v(47===t?t:W())}function Z(t){for(;!D(M());)W();return P(t,_)}function q(t){return L(J("",null,null,null,[""],t=N(t),0,[0],t))}function J(t,e,o,n,r,i,a,s,c){for(var l=0,u=0,h=a,d=0,f=0,m=0,p=1,w=1,b=1,k=0,y="",z=r,j=i,O=n,S=y;w;)switch(m=k,k=W()){case 40:if(108!=m&&58==S.charCodeAt(h-1)){-1!=x(S+=g(X(k),"&","&\f"),"&\f")&&(b=-1);break}case 34:case 39:case 91:S+=X(k);break;case 9:case 10:case 13:case 32:S+=B(m);break;case 92:S+=H(R()-1,7);continue;case 47:switch(M()){case 42:case 47:C(Q(V(W(),R()),e,o),c);break;default:S+="/"}break;case 123*p:s[l++]=$(S)*b;case 125*p:case 59:case 0:switch(k){case 0:case 125:w=0;case 59+u:f>0&&$(S)-h&&C(f>32?T(S+";",n,o,h-1):T(g(S," ","")+";",n,o,h-2),c);break;case 59:S+=";";default:if(C(O=K(S,e,o,l,u,r,s,y,z=[],j=[],h),i),123===k)if(0===u)J(S,e,O,O,z,i,h,s,j);else switch(d){case 100:case 109:case 115:J(t,O,O,n&&C(K(t,O,O,0,0,r,s,y,r,z=[],h),j),r,j,h,s,n?z:j);break;default:J(S,O,O,O,[""],j,0,s,j)}}l=u=f=0,p=b=1,y=S="",h=a;break;case 58:h=1+$(S),f=m;default:if(p<1)if(123==k)--p;else if(125==k&&0==p++&&125==I())continue;switch(S+=v(k),k*p){case 38:b=u>0?1:(S+="\f",-1);break;case 44:s[l++]=($(S)-1)*b,b=1;break;case 64:45===M()&&(S+=X(W())),d=M(),u=h=$(y=S+=Z(R())),k++;break;case 45:45===m&&2==$(S)&&(p=0)}}return i}function K(t,e,o,n,r,i,a,s,c,l,u){for(var h=r-1,f=0===r?i:[""],m=z(f),v=0,w=0,x=0;v<n;++v)for(var k=0,$=y(t,h+1,h=p(w=a[v])),C=t;k<m;++k)(C=b(w>0?f[k]+" "+$:g($,/&\f/g,f[k])))&&(c[x++]=C);return F(t,e,o,0===r?d:s,c,l,u)}function Q(t,e,o){return F(t,e,o,h,v(A),y(t,2,-2),0)}function T(t,e,o,n){return F(t,e,o,f,y(t,0,n),y(t,n+1,-1),n)}function Y(t,e){switch(function(t,e){return(((e<<2^k(t,0))<<2^k(t,1))<<2^k(t,2))<<2^k(t,3)}(t,e)){case 5103:return u+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return u+t+l+t+c+t+t;case 6828:case 4268:return u+t+c+t+t;case 6165:return u+t+c+"flex-"+t+t;case 5187:return u+t+g(t,/(\w+).+(:[^]+)/,u+"box-$1$2"+c+"flex-$1$2")+t;case 5443:return u+t+c+"flex-item-"+g(t,/flex-|-self/,"")+t;case 4675:return u+t+c+"flex-line-pack"+g(t,/align-content|flex-|-self/,"")+t;case 5548:return u+t+c+g(t,"shrink","negative")+t;case 5292:return u+t+c+g(t,"basis","preferred-size")+t;case 6060:return u+"box-"+g(t,"-grow","")+u+t+c+g(t,"grow","positive")+t;case 4554:return u+g(t,/([^-])(transform)/g,"$1"+u+"$2")+t;case 6187:return g(g(g(t,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),t,"")+t;case 5495:case 3959:return g(t,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return g(g(t,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+c+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+t+t;case 4095:case 3583:case 4068:case 2532:return g(t,/(.+)-inline(.+)/,u+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if($(t)-1-e>6)switch(k(t,e+1)){case 109:if(45!==k(t,e+4))break;case 102:return g(t,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+l+(108==k(t,e+3)?"$3":"$2-$3"))+t;case 115:return~x(t,"stretch")?Y(g(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(115!==k(t,e+1))break;case 6444:switch(k(t,$(t)-3-(~x(t,"!important")&&10))){case 107:return g(t,":",":"+u)+t;case 101:return g(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+u+(45===k(t,14)?"inline-":"")+"box$3$1"+u+"$2$3$1"+c+"$2box$3")+t}break;case 5936:switch(k(t,e+11)){case 114:return u+t+c+g(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return u+t+c+g(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return u+t+c+g(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return u+t+c+t+t}return t}function tt(t,e){for(var o="",n=z(t),r=0;r<n;r++)o+=e(t[r],r,t,e)||"";return o}function et(t,e,o,n){switch(t.type){case"@import":case f:return t.return=t.return||t.value;case h:return"";case m:return t.return=t.value+"{"+tt(t.children,n)+"}";case d:t.value=t.props.join(",")}return $(o=tt(t.children,n))?t.return=t.value+"{"+o+"}":""}function ot(t){return function(e){e.root||(e=e.return)&&t(e)}}function nt(t){var e=Object.create(null);return function(o){return void 0===e[o]&&(e[o]=t(o)),e[o]}}var rt=function(t,e,o){for(var n=0,r=0;n=r,r=M(),38===n&&12===r&&(e[o]=1),!D(r);)W();return P(t,_)},it=new WeakMap,at=function(t){if("rule"===t.type&&t.parent&&!(t.length<1)){for(var e=t.value,o=t.parent,n=t.column===o.column&&t.line===o.line;"rule"!==o.type;)if(!(o=o.parent))return;if((1!==t.props.length||58===e.charCodeAt(0)||it.get(o))&&!n){it.set(t,!0);for(var r=[],i=function(t,e){return L(function(t,e){var o=-1,n=44;do{switch(D(n)){case 0:38===n&&12===M()&&(e[o]=1),t[o]+=rt(_-1,e,o);break;case 2:t[o]+=X(n);break;case 4:if(44===n){t[++o]=58===M()?"&\f":"",e[o]=t[o].length;break}default:t[o]+=v(n)}}while(n=W());return t}(N(t),e))}(e,r),a=o.props,s=0,c=0;s<i.length;s++)for(var l=0;l<a.length;l++,c++)t.props[c]=r[s]?i[s].replace(/&\f/g,a[l]):a[l]+" "+i[s]}}},st=function(t){if("decl"===t.type){var e=t.value;108===e.charCodeAt(0)&&98===e.charCodeAt(2)&&(t.return="",t.value="")}},ct=[function(t,e,o,n){if(t.length>-1&&!t.return)switch(t.type){case f:t.return=Y(t.value,t.length);break;case m:return tt([G(t,{value:g(t.value,"@","@"+u)})],n);case d:if(t.length)return function(t,e){return t.map(e).join("")}(t.props,(function(e){switch(function(t){return(t=/(::plac\w+|:read-\w+)/.exec(t))?t[0]:t}(e)){case":read-only":case":read-write":return tt([G(t,{props:[g(e,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return tt([G(t,{props:[g(e,/:(plac\w+)/,":"+u+"input-$1")]}),G(t,{props:[g(e,/:(plac\w+)/,":-moz-$1")]}),G(t,{props:[g(e,/:(plac\w+)/,c+"input-$1")]})],n)}return""}))}}],lt={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ut=/[A-Z]|^ms/g,ht=/_EMO_([^_]+?)_([^]*?)_EMO_/g,dt=function(t){return 45===t.charCodeAt(1)},ft=function(t){return null!=t&&"boolean"!=typeof t},mt=nt((function(t){return dt(t)?t:t.replace(ut,"-$&").toLowerCase()})),pt=function(t,e){switch(t){case"animation":case"animationName":if("string"==typeof e)return e.replace(ht,(function(t,e,o){return wt={name:e,styles:o,next:wt},e}))}return 1===lt[t]||dt(t)||"number"!=typeof e||0===e?e:e+"px"};function vt(t,e,o){if(null==o)return"";if(void 0!==o.__emotion_styles)return o;switch(typeof o){case"boolean":return"";case"object":if(1===o.anim)return wt={name:o.name,styles:o.styles,next:wt},o.name;if(void 0!==o.styles){var n=o.next;if(void 0!==n)for(;void 0!==n;)wt={name:n.name,styles:n.styles,next:wt},n=n.next;return o.styles+";"}return function(t,e,o){var n="";if(Array.isArray(o))for(var r=0;r<o.length;r++)n+=vt(t,e,o[r])+";";else for(var i in o){var a=o[i];if("object"!=typeof a)null!=e&&void 0!==e[a]?n+=i+"{"+e[a]+"}":ft(a)&&(n+=mt(i)+":"+pt(i,a)+";");else if(!Array.isArray(a)||"string"!=typeof a[0]||null!=e&&void 0!==e[a[0]]){var s=vt(t,e,a);switch(i){case"animation":case"animationName":n+=mt(i)+":"+s+";";break;default:n+=i+"{"+s+"}"}}else for(var c=0;c<a.length;c++)ft(a[c])&&(n+=mt(i)+":"+pt(i,a[c])+";")}return n}(t,e,o);case"function":if(void 0!==t){var r=wt,i=o(t);return wt=r,vt(t,e,i)}}if(null==e)return o;var a=e[o];return void 0!==a?a:o}var wt,bt=/label:\s*([^\s;\n{]+)\s*(;|$)/g,gt=function(t,e,o){if(1===t.length&&"object"==typeof t[0]&&null!==t[0]&&void 0!==t[0].styles)return t[0];var n=!0,r="";wt=void 0;var i=t[0];null==i||void 0===i.raw?(n=!1,r+=vt(o,e,i)):r+=i[0];for(var a=1;a<t.length;a++)r+=vt(o,e,t[a]),n&&(r+=i[a]);bt.lastIndex=0;for(var s,c="";null!==(s=bt.exec(r));)c+="-"+s[1];return{name:function(t){for(var e,o=0,n=0,r=t.length;r>=4;++n,r-=4)e=1540483477*(65535&(e=255&t.charCodeAt(n)|(255&t.charCodeAt(++n))<<8|(255&t.charCodeAt(++n))<<16|(255&t.charCodeAt(++n))<<24))+(59797*(e>>>16)<<16),o=1540483477*(65535&(e^=e>>>24))+(59797*(e>>>16)<<16)^1540483477*(65535&o)+(59797*(o>>>16)<<16);switch(r){case 3:o^=(255&t.charCodeAt(n+2))<<16;case 2:o^=(255&t.charCodeAt(n+1))<<8;case 1:o=1540483477*(65535&(o^=255&t.charCodeAt(n)))+(59797*(o>>>16)<<16)}return(((o=1540483477*(65535&(o^=o>>>13))+(59797*(o>>>16)<<16))^o>>>15)>>>0).toString(36)}(r)+c,styles:r,next:wt}};function xt(t,e,o){var n="";return o.split(" ").forEach((function(o){void 0!==t[o]?e.push(t[o]+";"):n+=o+" "})),n}var kt=function(t,e,o){!function(t,e,o){var n=t.key+"-"+e.name;!1===o&&void 0===t.registered[n]&&(t.registered[n]=e.styles)}(t,e,o);var n=t.key+"-"+e.name;if(void 0===t.inserted[e.name]){var r=e;do{t.insert(e===r?"."+n:"",r,t.sheet,!0),r=r.next}while(void 0!==r)}};function yt(t,e){if(void 0===t.inserted[e.name])return t.insert("",e,t.sheet,!0)}function $t(t,e,o){var n=[],r=xt(t,n,o);return n.length<2?o:r+e(n)}var zt=function t(e){for(var o="",n=0;n<e.length;n++){var r=e[n];if(null!=r){var i=void 0;switch(typeof r){case"boolean":break;case"object":if(Array.isArray(r))i=t(r);else for(var a in i="",r)r[a]&&a&&(i&&(i+=" "),i+=a);break;default:i=r}i&&(o&&(o+=" "),o+=i)}}return o},Ct=function(){var t=function(t){var e=t.key;if("css"===e){var o=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(o,(function(t){-1!==t.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(t),t.setAttribute("data-s",""))}))}var n,r,i=t.stylisPlugins||ct,a={},c=[];n=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+e+' "]'),(function(t){for(var e=t.getAttribute("data-emotion").split(" "),o=1;o<e.length;o++)a[e[o]]=!0;c.push(t)}));var l,u=[at,st],h=[et,ot((function(t){l.insert(t)}))],d=function(t){var e=z(t);return function(o,n,r,i){for(var a="",s=0;s<e;s++)a+=t[s](o,n,r,i)||"";return a}}(u.concat(i,h));r=function(t,e,o,n){l=o,tt(q(t?t+"{"+e.styles+"}":e.styles),d),n&&(f.inserted[e.name]=!0)};var f={key:e,sheet:new s({key:e,container:n,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:r};return f.sheet.hydrate(c),f}({key:"css"});t.sheet.speedy=function(t){this.isSpeedy=t},t.compat=!0;var e=function(){for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];var r=gt(o,t.registered,void 0);return kt(t,r,!1),t.key+"-"+r.name};return{css:e,cx:function(){for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return $t(t.registered,e,zt(n))},injectGlobal:function(){for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];var r=gt(o,t.registered);yt(t,r)},keyframes:function(){for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];var r=gt(o,t.registered),i="animation-"+r.name;return yt(t,{name:r.name,styles:"@keyframes "+i+"{"+r.styles+"}"}),i},hydrate:function(e){e.forEach((function(e){t.inserted[e]=!0}))},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:xt.bind(null,t.registered),merge:$t.bind(null,t.registered,e)}}().css;function jt(t){return{light:300,regular:400,medium:500,semibold:400,bold:700,italic:300,"light italic":300}[t.toLowerCase()]}const Ot="36px",St="24px",_t="16px",At="12px",Et=Ct`
  appearance: none;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  padding: ${"8px"} ${"24px"};
  font-family: ${"Poppins"};
  letter-spacing: ${Number("3%".replace("%","").trim())/100}em;
  line-height: ${24}px;
  font-weight: ${jt("Bold")};
  font-size: ${16}px;
  border-radius: ${9999}px;
  min-width: ${"88px"};
`,Ft=Ct`
  ${Et};
  border: ${"0px"};
  color: ${"#ffffff"};
  background-color: ${"#ed2985"};
  &:hover {
    background-color: ${"#F86F96"};
    color: ${"#ffffff"};
  }
  &:focus {
    background-color: ${"#F86F96"};
    color: ${"#ffffff"};
  }
  &:active {
    background-color: ${"#c42177"};
    color: ${"#EEF1F3"};
  }
  &:disabled {
    background-color: ${"#95a0a4"};
    color: ${"#EEF1F3"};
  }
`,Gt=Ct`
  ${Et};
  border: 0;
  outline: ${1}px solid;
  outline-offset: ${-2}px;
  color: ${"#001418"};
  background-color: ${"#ffffff00"};
  outline-color: ${"#001418"};
  &:hover {
    outline-color: ${"#ed2985"};
    color: ${"#ed2985"};
  }
  &:focus {
    outline-color: ${"#001418"};
    outline: ${2}px solid;
    outline-offset: ${-4}px;
    color: ${"#ed2985"};
  }
  &:active {
    outline-color: ${"#c42177"};
    color: ${"#c42177"};
  }
  &:disabled {
    outline-color: ${"#79868b"};
    color: ${"#95a0a4"};
  }
`,It=Ct`
  padding: ${"12px"};
  min-width: 0px;
`,Wt=Ct`
  display: flex;
  align-items: center;
`,Mt=Ct`
  margin-right: ${"12px"};
`,Rt=Ct`
  margin-left: ${"12px"};
`,Pt=class{constructor(e){t(this,e),this.clickEmitter=n(this,"clickEmitter",4),this.secondary=!1,this.target="_self",this.handleClick=t=>{t.target.blur(),t.path[1].blur(),this.clickEmitter.emit("onClick")}}componentWillLoad(){this.hasIconStartSlot=!!this.hostElement.querySelector('[slot="icon-start"]'),this.hasIconEndSlot=!!this.hostElement.querySelector('[slot="icon-end"]'),this.hasIcon=this.hasIconStartSlot||this.hasIconEndSlot,this.hasLabel=!!this.label}render(){return this.href?e("a",{href:this.href,target:this.target,class:this.secondary?Gt:Ft,"test-id":this.testId},this.hasIconStartSlot&&e("span",{class:this.hasLabel?Mt:""},e("slot",{name:"icon-start"})),e("span",null,this.label),this.hasIconEndSlot&&e("span",{class:this.hasLabel?Rt:""},e("slot",{name:"icon-end"}))):e("button",{disabled:this.disabled,onClick:this.handleClick,class:`${this.secondary?Gt:Ft} ${this.hasIcon&&Wt} ${!this.hasLabel&&It}`,"test-id":this.testId,type:"button"},this.hasIconStartSlot&&e("span",{class:this.hasLabel?Mt:""},e("slot",{name:"icon-start"})),e("span",null,this.label),this.hasIconEndSlot&&e("span",{class:this.hasLabel?Rt:""},e("slot",{name:"icon-end"})))}get hostElement(){return r(this)}},Dt=Ct`
  font-weight: ${jt("Medium")};
`,Nt=class{constructor(e){t(this,e),this.clickEmitter=n(this,"close",4),this.selectionChangeEmitter=n(this,"toggle",4),this.showClose=!1,this.selected=!1,this.handleClose=t=>{t.stopPropagation(),this.disabled||this.clickEmitter.emit()},this.handleClick=()=>{this.selected=!this.selected,this.selectionChangeEmitter.emit(this.selected)}}render(){return e(o,null,e("div",{tabindex:"0",class:`chip ${Dt} ${this.selected&&"selected"} ${this.disabled&&"disabled"}`,onClick:this.handleClick,"test-id":this.testId},!!this.icon&&e("mw-icon",{icon:this.icon,size:"medium"}),e("slot",null),this.showClose&&e("span",{onClick:this.handleClose},e("mw-icon",{icon:"close",color:"currentcolor",size:"small"}))))}};Nt.style=":host{display:block}.chip{cursor:default;display:flex;white-space:nowrap;overflow:hidden;align-items:center;justify-content:center;width:fit-content;font-family:var(--mw-component-chips-typo-font-family);font-size:var(--mw-component-chips-typo-font-size);line-height:var(--mw-component-chips-typo-line-height);height:32px;min-width:var(--mw-component-size-chips-min-width);border-radius:var(--mw-component-chips-border-radius);gap:var(--mw-component-chips-gap-within);padding:0 var(--mw-component-chips-padding-lr);outline:var(--mw-component-chips-border-width-default) solid var(--mw-component-chips-color-border-default);color:var(--mw-component-chips-color-fg-default);background:var(--mw-component-chips-color-bg-default)}.chip:hover:not(.disabled){color:var(--mw-component-chips-color-fg-hover);background:var(--mw-component-chips-color-bg-hover)}.chip.selected{color:var(--mw-component-chips-color-fg-selected);background:var(--mw-component-chips-color-bg-default);outline-color:var(--mw-component-chips-color-border-selected)}.chip.selected:hover:not(.disabled){color:var(--mw-component-chips-color-fg-selected);background:var(--mw-component-chips-color-bg-hover);outline-color:var(--mw-component-chips-color-border-selected)}.chip.selected:focus:not(.disabled){color:var(--mw-component-chips-color-fg-selected);background:var(--mw-component-chips-color-bg-hover);outline-color:var(--mw-component-chips-color-border-selected);outline-width:var(--mw-component-chips-border-width-focused)}.chip.selected:active:not(.disabled){color:var(--mw-component-chips-color-fg-selected);background:var(--mw-component-chips-color-bg-pressed);outline-color:var(--mw-component-chips-color-border-selected);outline-width:var(--mw-component-chips-border-width-default)}.chip:focus:not(.selected):not(.disabled){color:var(--mw-component-chips-color-fg-default);background:var(--mw-component-chips-color-bg-hover);outline-color:var(--mw-component-chips-color-border-default);outline-width:var(--mw-component-chips-border-width-focused)}.chip:active:not(.selected):not(.disabled){color:var(--mw-component-chips-color-fg-default);background:var(--mw-component-chips-color-bg-pressed)}.chip.disabled{color:var(--mw-component-chips-color-fg-disabled);outline-color:var(--mw-component-chips-color-border-disabled)}";const Lt={},Xt={},Bt=t=>Number({large:Ot,medium:St,small:_t,"x-small":At}[t].replace("px","")),Ht=class{constructor(e){t(this,e),this.icon=null,this.size="medium",this.visible=!1,this.baseDimension=Bt("medium")}connectedCallback(){this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null)}async componentWillLoad(){this.loadIconPathData(),this.dimension=Bt(this.size),this.scale=this.dimension/this.baseDimension}render(){return e(o,{style:{height:`${this.dimension}px`}},e("svg",{style:this.color&&{color:this.color},xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",height:this.dimension,width:this.dimension,viewBox:`0 0 ${this.dimension} ${this.dimension}`},e("path",{style:{transform:`scale(${this.scale})`},d:this.pathData||""})))}async loadIconPathData(){const{icon:t,visible:e}=this;t&&e&&(this.pathData=await async function({icon:t}){if(Lt[t])return Lt[t];Xt[t]||(Xt[t]=fetch(i(`./assets/${t}.svg.json`)).then((t=>t.json())).catch((()=>(console.error(`"${t}" is not a valid name`),""))));const e=await Xt[t];return Lt[t]=e,e}({icon:t}))}waitUntilVisible(t){"undefined"!=typeof window&&window.IntersectionObserver?(this.intersectionObserver=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())}))}),{rootMargin:"50px"}),this.intersectionObserver.observe(this.el)):t()}static get assetsDirs(){return["./assets"]}get el(){return r(this)}static get watchers(){return{icon:["loadIconPathData"]}}};Ht.style=":host{display:flex}";const Ut=class{constructor(e){t(this,e),this.checked=!1}toggleSwitch(t){t.target.blur(),t.path[1].blur(),this.checked=this.checkbox.checked}componentWillLoad(){this.hasLabel=!!this.label,this.hasOnOffLabel=!!this.onText&&!!this.offText}render(){return e(o,null,e("label",{"test-id":this.testId,onClick:this.toggleSwitch.bind(this),class:"switch"},e("input",{disabled:this.disabled,ref:t=>this.checkbox=t,type:"checkbox",checked:this.checked}),e("span",{class:"slider round"})),this.hasLabel&&e("span",{class:"label"},this.label),this.hasOnOffLabel&&e("span",{class:"label"},this.checked?this.onText:this.offText))}};Ut.style=':host{display:flex;justify-content:flex-start;align-items:center}.label{font-size:16px;font-family:\'Poppins\', sans-serif;margin-left:var(--mw-component-controls-with-label-gap);color:var(--mw-component-controls-color-label-default)}.switch{position:relative;display:inline-block;width:var(--mw-component-size-toggle-switch-w);height:var(--mw-component-size-toggle-switch-h)}.switch input{opacity:0;width:0;height:0}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:var(--mw-component-controls-color-bg-unselected);-webkit-transition:.4s;transition:.4s}input:checked+.slider:before{position:absolute;content:"";height:24px;width:24px;left:4px;bottom:4px;background-color:var(--mw-component-controls-color-fg-default);-webkit-transition:.4s;transition:.4s;-webkit-transform:translateX(20px);-ms-transform:translateX(20px);transform:translateX(20px)}input:not(:checked)+.slider:before{position:absolute;content:"";height:16px;width:16px;left:8px;bottom:8px;background-color:var(--mw-component-controls-color-fg-off);-webkit-transition:.4s;transition:.4s}input:active+.slider:before{position:absolute;content:"";height:28px;width:28px;left:2px;bottom:2px;background-color:var(--mw-component-controls-color-fg-default);-webkit-transition:.4s;transition:.4s}input:not(:checked):not(:disabled):active+.slider:before{position:absolute;content:"";height:28px;width:28px;left:2px;bottom:2px;background-color:var(--mw-component-controls-color-fg-off);-webkit-transition:.4s;transition:.4s}input:disabled+.slider:before{position:absolute;content:"";height:16px;width:16px;left:8px;bottom:8px;background-color:var(--mw-component-controls-color-fg-disabled);-webkit-transition:.4s;transition:.4s}input:checked+.slider{background-color:var(--mw-component-controls-color-bg-selected)}input:disabled+.slider{background-color:var(--mw-component-controls-color-bg-disabled)}input:focus:not(:active):not(:disabled)+.slider{background-color:var(--mw-component-controls-color-bg-focused);outline:var(--mw-component-checkbox-selected-border-width-focused) solid;outline-color:var(--mw-component-controls-color-outline-default);outline-offset:calc(-1 * var(--mw-component-checkbox-selected-border-width-focused))}input:hover:not(:disabled)+.slider{background-color:var(--mw-component-controls-color-bg-hover)}input:active:not(:disabled)+.slider{background-color:var(--mw-component-controls-color-bg-pressed)}input:not(:checked):not(:disabled)+.slider{outline:var(--mw-component-checkbox-selected-border-width-focused) solid;outline-color:var(--mw-component-controls-color-outline-default);outline-offset:calc(-1 * var(--mw-component-checkbox-selected-border-width-focused))}input:not(:checked):disabled+.slider{outline:var(--mw-component-checkbox-selected-border-width-focused) solid;outline-color:var(--mw-component-controls-color-outline-disabled);outline-offset:calc(-1 * var(--mw-component-checkbox-selected-border-width-focused))}.slider.round{border-radius:34px}.slider.round:before{border-radius:50%}';export{a as mw_avatar,Pt as mw_button,Nt as mw_chip,Ht as mw_icon,Ut as mw_switch}