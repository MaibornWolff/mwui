/*!
 * Built with Stencil
 * Copyright (c) Maibornwolff GmbH.
 */
import { r as registerInstance, f as createEvent, h as h$1, g as getElement } from './index-a62bab22.js';
import { l as letterSpacingButtons, m as mwComponentButtonBorderRadiusDefault, a as mwComponentSizeButtonFilledOutlineMinW, b as mwComponentButtonSmPaddingY, c as mwComponentButtonSmPaddingX, d as mwComponentButtonLabelSmFontFamily, e as mwComponentButtonLabelSmLineHeight, f as mwComponentButtonLabelSmFontWeight, g as mwComponentButtonLabelSmFontSize, h as mwComponentButtonMdPaddingY, i as mwComponentButtonMdPaddingX, j as mwComponentButtonLabelMdFontFamily, k as mwComponentButtonLabelMdLineHeight, n as mwComponentButtonLabelMdFontWeight, o as mwComponentButtonLabelMdFontSize, p as mwComponentButtonLgPaddingY, q as mwComponentButtonLgPaddingX, r as mwComponentButtonLabelLgFontFamily, s as mwComponentButtonLabelLgLineHeight, t as mwComponentButtonLabelLgFontWeight, u as mwComponentButtonLabelLgFontSize, v as mwComponentButtonXlPaddingY, w as mwComponentButtonXlPaddingX, x as mwComponentButtonLabelXlFontFamily, y as mwComponentButtonLabelXlLineHeight, z as mwComponentButtonLabelXlFontWeight, A as mwComponentButtonLabelXlFontSize, B as mwComponentButtonBorderWidthFilledDefault, C as mwComponentButtonFilledColorFgDefault, D as mwComponentButtonFilledColorBgDefault, E as mwComponentButtonFilledColorBgHover, F as mwComponentButtonFilledColorFgHover, G as mwComponentButtonBorderWidthFilledFocused, H as mwComponentButtonFilledColorOutlineFocused, I as mwComponentButtonFilledColorBgFocused, J as mwComponentButtonFilledColorFgFocused, K as mwComponentButtonFilledColorBgPressed, L as mwComponentButtonFilledColorFgPressed, M as mwComponentButtonFilledColorBgDisabled, N as mwComponentButtonFilledColorFgDisabled, O as mwComponentButtonBorderWidthOutlineDefault, P as mwComponentButtonOutlineGhostColorBorderDefault, Q as mwComponentButtonOutlineGhostColorFgDefault, R as mwComponentButtonOutlineGhostColorBgDefault, S as mwComponentButtonOutlineGhostColorBorderHover, T as mwComponentButtonOutlineGhostColorFgHover, U as mwComponentButtonBorderWidthOutlineFocused, V as mwComponentButtonOutlineGhostColorBorderFocused, W as mwComponentButtonOutlineGhostColorFgFocused, X as mwComponentButtonOutlineGhostColorBorderPressed, Y as mwComponentButtonOutlineGhostColorFgPressed, Z as mwComponentButtonOutlineGhostColorBorderDisabled, _ as mwComponentButtonOutlineGhostColorFgDisabled, $ as mwComponentButtonSmPaddingIcon, a0 as mwComponentButtonMdPaddingIcon, a1 as mwComponentButtonLgPaddingIcon, a2 as mwComponentButtonXlPaddingIcon, a3 as mwComponentButtonSmGapBetween, a4 as mwComponentButtonMdGapBetween, a5 as mwComponentButtonLgGapBetween, a6 as mwComponentButtonXlGapBetween } from './MW_component-612da020.js';
import { T as TargetEnum } from './button-target.enum-405794ff.js';

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  // Using Node instead of HTMLElement since container may be a ShadowRoot
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if ("development" !== 'production') {
      var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;

      if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) {
        // this would only cause problem in speedy mode
        // but we don't want enabling speedy to affect the observable behavior
        // so we report this error at all times
        console.error("You're attempting to insert the following rule:\n" + rule + '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.');
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
    }

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if ("development" !== 'production' && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(rule)) {
          console.error("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;

    if ("development" !== 'production') {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };

  return StyleSheet;
}();

var e="-ms-";var r="-moz-";var a="-webkit-";var n="comm";var c="rule";var s="decl";var t="@page";var u="@media";var i="@import";var f="@charset";var o="@viewport";var l="@supports";var v="@document";var p="@namespace";var h="@keyframes";var b="@font-face";var w="@counter-style";var d="@font-feature-values";var $=Math.abs;var k=String.fromCharCode;var g=Object.assign;function m(e,r){return C(e,0)^45?(((r<<2^C(e,0))<<2^C(e,1))<<2^C(e,2))<<2^C(e,3):0}function x(e){return e.trim()}function y(e,r){return (e=r.exec(e))?e[0]:e}function j(e,r,a){return e.replace(r,a)}function z(e,r){return e.indexOf(r)}function C(e,r){return e.charCodeAt(r)|0}function O(e,r,a){return e.slice(r,a)}function A(e){return e.length}function M(e){return e.length}function S(e,r){return r.push(e),e}function q(e,r){return e.map(r).join("")}var B=1;var D=1;var E=0;var F=0;var G=0;var H="";function I(e,r,a,n,c,s,t){return {value:e,root:r,parent:a,type:n,props:c,children:s,line:B,column:D,length:t,return:""}}function J(e,r){return g(I("",null,null,"",null,null,0),e,{length:-e.length},r)}function K(){return G}function L(){G=F>0?C(H,--F):0;if(D--,G===10)D=1,B--;return G}function N(){G=F<E?C(H,F++):0;if(D++,G===10)D=1,B++;return G}function P(){return C(H,F)}function Q(){return F}function R(e,r){return O(H,e,r)}function T(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function U(e){return B=D=1,E=A(H=e),F=0,[]}function V(e){return H="",e}function W(e){return x(R(F-1,ee(e===91?e+2:e===40?e+1:e)))}function X(e){return V(Z(U(e)))}function Y(e){while(G=P())if(G<33)N();else break;return T(e)>2||T(G)>3?"":" "}function Z(e){while(N())switch(T(G)){case 0:S(ae(F-1),e);break;case 2:S(W(G),e);break;default:S(k(G),e);}return e}function _(e,r){while(--r&&N())if(G<48||G>102||G>57&&G<65||G>70&&G<97)break;return R(e,Q()+(r<6&&P()==32&&N()==32))}function ee(e){while(N())switch(G){case e:return F;case 34:case 39:if(e!==34&&e!==39)ee(G);break;case 40:if(e===41)ee(e);break;case 92:N();break}return F}function re(e,r){while(N())if(e+G===47+10)break;else if(e+G===42+42&&P()===47)break;return "/*"+R(r,F-1)+"*"+k(e===47?e:N())}function ae(e){while(!T(P()))N();return R(e,F)}function ne(e){return V(ce("",null,null,null,[""],e=U(e),0,[0],e))}function ce(e,r,a,n,c,s,t,u,i){var f=0;var o=0;var l=t;var v=0;var p=0;var h=0;var b=1;var w=1;var d=1;var $=0;var g="";var m=c;var x=s;var y=n;var O=g;while(w)switch(h=$,$=N()){case 40:if(h!=108&&C(O,l-1)==58){if(z(O+=j(W($),"&","&\f"),"&\f")!=-1)d=-1;break}case 34:case 39:case 91:O+=W($);break;case 9:case 10:case 13:case 32:O+=Y(h);break;case 92:O+=_(Q()-1,7);continue;case 47:switch(P()){case 42:case 47:S(te(re(N(),Q()),r,a),i);break;default:O+="/";}break;case 123*b:u[f++]=A(O)*d;case 125*b:case 59:case 0:switch($){case 0:case 125:w=0;case 59+o:if(p>0&&A(O)-l)S(p>32?ue(O+";",n,a,l-1):ue(j(O," ","")+";",n,a,l-2),i);break;case 59:O+=";";default:S(y=se(O,r,a,f,o,c,u,g,m=[],x=[],l),s);if($===123)if(o===0)ce(O,r,y,y,m,s,l,u,x);else switch(v===99&&C(O,3)===110?100:v){case 100:case 109:case 115:ce(e,y,y,n&&S(se(e,y,y,0,0,c,u,g,c,m=[],l),x),c,x,l,u,n?m:x);break;default:ce(O,y,y,y,[""],x,0,u,x);}}f=o=p=0,b=d=1,g=O="",l=t;break;case 58:l=1+A(O),p=h;default:if(b<1)if($==123)--b;else if($==125&&b++==0&&L()==125)continue;switch(O+=k($),$*b){case 38:d=o>0?1:(O+="\f",-1);break;case 44:u[f++]=(A(O)-1)*d,d=1;break;case 64:if(P()===45)O+=W(N());v=P(),o=l=A(g=O+=ae(Q())),$++;break;case 45:if(h===45&&A(O)==2)b=0;}}return s}function se(e,r,a,n,s,t,u,i,f,o,l){var v=s-1;var p=s===0?t:[""];var h=M(p);for(var b=0,w=0,d=0;b<n;++b)for(var k=0,g=O(e,v+1,v=$(w=u[b])),m=e;k<h;++k)if(m=x(w>0?p[k]+" "+g:j(g,/&\f/g,p[k])))f[d++]=m;return I(e,r,a,s===0?c:i,f,o,l)}function te(e,r,a){return I(e,r,a,n,k(K()),O(e,2,-2),0)}function ue(e,r,a,n){return I(e,r,a,s,O(e,0,n),O(e,n+1,-1),n)}function ie(n,c,s){switch(m(n,c)){case 5103:return a+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return a+n+n;case 4789:return r+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return a+n+r+n+e+n+n;case 5936:switch(C(n,c+11)){case 114:return a+n+e+j(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return a+n+e+j(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return a+n+e+j(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return a+n+e+n+n;case 6165:return a+n+e+"flex-"+n+n;case 5187:return a+n+j(n,/(\w+).+(:[^]+)/,a+"box-$1$2"+e+"flex-$1$2")+n;case 5443:return a+n+e+"flex-item-"+j(n,/flex-|-self/g,"")+(!y(n,/flex-|baseline/)?e+"grid-row-"+j(n,/flex-|-self/g,""):"")+n;case 4675:return a+n+e+"flex-line-pack"+j(n,/align-content|flex-|-self/g,"")+n;case 5548:return a+n+e+j(n,"shrink","negative")+n;case 5292:return a+n+e+j(n,"basis","preferred-size")+n;case 6060:return a+"box-"+j(n,"-grow","")+a+n+e+j(n,"grow","positive")+n;case 4554:return a+j(n,/([^-])(transform)/g,"$1"+a+"$2")+n;case 6187:return j(j(j(n,/(zoom-|grab)/,a+"$1"),/(image-set)/,a+"$1"),n,"")+n;case 5495:case 3959:return j(n,/(image-set\([^]*)/,a+"$1"+"$`$1");case 4968:return j(j(n,/(.+:)(flex-)?(.*)/,a+"box-pack:$3"+e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+a+n+n;case 4200:if(!y(n,/flex-|baseline/))return e+"grid-column-align"+O(n,c)+n;break;case 2592:case 3360:return e+j(n,"template-","")+n;case 4384:case 3616:if(s&&s.some((function(e,r){return c=r,y(e.props,/grid-\w+-end/)}))){return ~z(n+(s=s[c].value),"span")?n:e+j(n,"-start","")+n+e+"grid-row-span:"+(~z(s,"span")?y(s,/\d+/):+y(s,/\d+/)-+y(n,/\d+/))+";"}return e+j(n,"-start","")+n;case 4896:case 4128:return s&&s.some((function(e){return y(e.props,/grid-\w+-start/)}))?n:e+j(j(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return j(n,/(.+)-inline(.+)/,a+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(A(n)-1-c>6)switch(C(n,c+1)){case 109:if(C(n,c+4)!==45)break;case 102:return j(n,/(.+:)(.+)-([^]+)/,"$1"+a+"$2-$3"+"$1"+r+(C(n,c+3)==108?"$3":"$2-$3"))+n;case 115:return ~z(n,"stretch")?ie(j(n,"stretch","fill-available"),c,s)+n:n}break;case 5152:case 5920:return j(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(r,a,c,s,t,u,i){return e+a+":"+c+i+(s?e+a+"-span:"+(t?u:+u-+c)+i:"")+n}));case 4949:if(C(n,c+6)===121)return j(n,":",":"+a)+n;break;case 6444:switch(C(n,C(n,14)===45?18:11)){case 120:return j(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+a+(C(n,14)===45?"inline-":"")+"box$3"+"$1"+a+"$2$3"+"$1"+e+"$2box$3")+n;case 100:return j(n,":",":"+e)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return j(n,"scroll-","scroll-snap-")+n}return n}function fe(e,r){var a="";var n=M(e);for(var c=0;c<n;c++)a+=r(e[c],c,e,r)||"";return a}function oe(e,r,a,t){switch(e.type){case i:case s:return e.return=e.return||e.value;case n:return "";case h:return e.return=e.value+"{"+fe(e.children,t)+"}";case c:e.value=e.props.join(",");}return A(a=fe(e.children,t))?e.return=e.value+"{"+a+"}":""}function le(e){var r=M(e);return function(a,n,c,s){var t="";for(var u=0;u<r;u++)t+=e[u](a,n,c,s)||"";return t}}function ve(e){return function(r){if(!r.root)if(r=r.return)e(r);}}function pe(n,t,u,i){if(n.length>-1)if(!n.return)switch(n.type){case s:n.return=ie(n.value,n.length,u);return;case h:return fe([J(n,{value:j(n.value,"@","@"+a)})],i);case c:if(n.length)return q(n.props,(function(c){switch(y(c,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return fe([J(n,{props:[j(c,/:(read-\w+)/,":"+r+"$1")]})],i);case"::placeholder":return fe([J(n,{props:[j(c,/:(plac\w+)/,":"+a+"input-$1")]}),J(n,{props:[j(c,/:(plac\w+)/,":"+r+"$1")]}),J(n,{props:[j(c,/:(plac\w+)/,e+"input-$1")]})],i)}return ""}))}}function he(e){switch(e.type){case c:e.props=e.props.map((function(r){return q(X(r),(function(r,a,n){switch(C(r,0)){case 12:return O(r,1,A(r));case 0:case 40:case 43:case 62:case 126:return r;case 58:if(n[++a]==="global")n[a]="",n[++a]="\f"+O(n[a],a=1,-1);case 32:return a===1?"":r;default:switch(a){case 0:e=r;return M(n)>1?"":r;case a=M(n)-1:case 2:return a===2?r+e+e:r+e;default:return r}}}))}));}}

var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = P(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if (T(character)) {
      break;
    }

    N();
  }

  return R(begin, F);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (T(character)) {
      case 0:
        // &\f
        if (character === 38 && P() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(F - 1, points, index);
        break;

      case 2:
        parsed[index] += W(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = P() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += k(character);
    }
  } while (character = N());

  return parsed;
};

var getRules = function getRules(value, points) {
  return V(toRules(U(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';

var isIgnoringComment = function isIgnoringComment(element) {
  return element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};

var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule' || cache.compat) return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);

    if (unsafePseudoClasses) {
      var isNested = element.parent === children[0]; // in nested rules comments become children of the "auto-inserted" rule
      //
      // considering this input:
      // .a {
      //   .b /* comm */ {}
      //   color: hotpink;
      // }
      // we get output corresponding to this:
      // .a {
      //   & {
      //     /* comm */
      //     color: hotpink;
      //   }
      //   .b {}
      // }

      var commentContainer = isNested ? children[0].children : // global rule at the root level
      children;

      for (var i = commentContainer.length - 1; i >= 0; i--) {
        var node = commentContainer[i];

        if (node.line < element.line) {
          break;
        } // it is quite weird but comments are *usually* put at `column: element.column - 1`
        // so we seek *from the end* for the node that is earlier than the rule's `element` and check that
        // this will also match inputs like this:
        // .a {
        //   /* comm */
        //   .b {}
        // }
        //
        // but that is fine
        //
        // it would be the easiest to change the placement of the comment to be the first child of the rule:
        // .a {
        //   .b { /* comm */ }
        // }
        // with such inputs we wouldn't have to search for the comment at all
        // TODO: consider changing this comment placement in the next major version


        if (node.column < element.column) {
          if (isIgnoringComment(node)) {
            return;
          }

          break;
        }
      }

      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};

var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};

var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }

  return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user


var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};

var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }

  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};

/* eslint-disable no-fallthrough */

function prefix(value, length) {
  switch (m(value, length)) {
    // color-adjust
    case 5103:
      return a + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return a + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust

    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return a + value + r + value + e + value + value;
    // flex, flex-direction

    case 6828:
    case 4268:
      return a + value + e + value + value;
    // order

    case 6165:
      return a + value + e + 'flex-' + value + value;
    // align-items

    case 5187:
      return a + value + j(value, /(\w+).+(:[^]+)/, a + 'box-$1$2' + e + 'flex-$1$2') + value;
    // align-self

    case 5443:
      return a + value + e + 'flex-item-' + j(value, /flex-|-self/, '') + value;
    // align-content

    case 4675:
      return a + value + e + 'flex-line-pack' + j(value, /align-content|flex-|-self/, '') + value;
    // flex-shrink

    case 5548:
      return a + value + e + j(value, 'shrink', 'negative') + value;
    // flex-basis

    case 5292:
      return a + value + e + j(value, 'basis', 'preferred-size') + value;
    // flex-grow

    case 6060:
      return a + 'box-' + j(value, '-grow', '') + a + value + e + j(value, 'grow', 'positive') + value;
    // transition

    case 4554:
      return a + j(value, /([^-])(transform)/g, '$1' + a + '$2') + value;
    // cursor

    case 6187:
      return j(j(j(value, /(zoom-|grab)/, a + '$1'), /(image-set)/, a + '$1'), value, '') + value;
    // background, background-image

    case 5495:
    case 3959:
      return j(value, /(image-set\([^]*)/, a + '$1' + '$`$1');
    // justify-content

    case 4968:
      return j(j(value, /(.+:)(flex-)?(.*)/, a + 'box-pack:$3' + e + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + a + value + value;
    // (margin|padding)-inline-(start|end)

    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return j(value, /(.+)-inline(.+)/, a + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)

    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      // stretch, max-content, min-content, fill-available
      if (A(value) - 1 - length > 6) switch (C(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if (C(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content

        case 102:
          return j(value, /(.+:)(.+)-([^]+)/, '$1' + a + '$2-$3' + '$1' + r + (C(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch

        case 115:
          return ~z(value, 'stretch') ? prefix(j(value, 'stretch', 'fill-available'), length) + value : value;
      }
      break;
    // position: sticky

    case 4949:
      // (s)ticky?
      if (C(value, length + 1) !== 115) break;
    // display: (flex|inline-flex)

    case 6444:
      switch (C(value, A(value) - 3 - (~z(value, '!important') && 10))) {
        // stic(k)y
        case 107:
          return j(value, ':', ':' + a) + value;
        // (inline-)?fl(e)x

        case 101:
          return j(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + a + (C(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + a + '$2$3' + '$1' + e + '$2box$3') + value;
      }

      break;
    // writing-mode

    case 5936:
      switch (C(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return a + value + e + j(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)

        case 108:
          return a + value + e + j(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb

        case 45:
          return a + value + e + j(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
      }

      return a + value + e + value + value;
  }

  return value;
}

var prefixer = function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element["return"]) switch (element.type) {
    case s:
      element["return"] = prefix(element.value, element.length);
      break;

    case h:
      return fe([J(element, {
        value: j(element.value, '@', '@' + a)
      })], callback);

    case c:
      if (element.length) return q(element.props, function (value) {
        switch (y(value, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            return fe([J(element, {
              props: [j(value, /:(read-\w+)/, ':' + r + '$1')]
            })], callback);
          // :placeholder

          case '::placeholder':
            return fe([J(element, {
              props: [j(value, /:(plac\w+)/, ':' + a + 'input-$1')]
            }), J(element, {
              props: [j(value, /:(plac\w+)/, ':' + r + '$1')]
            }), J(element, {
              props: [j(value, /:(plac\w+)/, e + 'input-$1')]
            })], callback);
        }

        return '';
      });
  }
};

var defaultStylisPlugins = [prefixer];

var createCache = function createCache(options) {
  var key = options.key;

  if ("development" !== 'production' && !key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\n" + "If multiple caches share the same key they might \"fight\" for each other's style elements.");
  }

  if ( key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  if ("development" !== 'production') {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {};
  var container;
  var nodesToHydrate = [];

  {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  if ("development" !== 'production') {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache.compat;
      }

    }), incorrectImportAlarm);
  }

  {
    var currentSheet;
    var finalizingPlugins = [oe, "development" !== 'production' ? function (element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== n) {
          // insert empty rule in non-production environments
          // so @emotion/jest can grab `key` from the (JS)DOM for caches without any rules inserted yet
          currentSheet.insert(element.value + "{}");
        }
      }
    } : ve(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = le(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return fe(ne(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      if ("development" !== 'production' && serialized.map !== undefined) {
        currentSheet = {
          insert: function insert(rule) {
            sheet.insert(rule + serialized.map);
          }
        };
      }

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if ("development" !== 'production') {
  var contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  var contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if ("development" !== 'production' && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error(noComponentSelectorMessage);
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if ("development" !== 'production' && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if ("development" !== 'production') {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if ("development" !== 'production') {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
          throw new Error(noComponentSelectorMessage);
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if ("development" !== 'production' && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;

if ("development" !== 'production') {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if ("development" !== 'production' && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      if ("development" !== 'production' && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if ("development" !== 'production') {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = murmur2(styles) + identifierName;

  if ("development" !== 'production') {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

var isBrowser = "object" !== 'undefined';
function getRegisteredStyles$1(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false ) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};

function insertWithoutScoping(cache, serialized) {
  if (cache.inserted[serialized.name] === undefined) {
    return cache.insert('', serialized, cache.sheet, true);
  }
}

function merge$1(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles$1(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var createEmotion = function createEmotion(options) {
  var cache = createCache(options); // $FlowFixMe

  cache.sheet.speedy = function (value) {
    if ("development" !== 'production' && this.ctr !== 0) {
      throw new Error('speedy must be changed before any rules are inserted');
    }

    this.isSpeedy = value;
  };

  cache.compat = true;

  var css = function css() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = serializeStyles(args, cache.registered, undefined);
    insertStyles(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };

  var keyframes = function keyframes() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var serialized = serializeStyles(args, cache.registered);
    var animation = "animation-" + serialized.name;
    insertWithoutScoping(cache, {
      name: serialized.name,
      styles: "@keyframes " + animation + "{" + serialized.styles + "}"
    });
    return animation;
  };

  var injectGlobal = function injectGlobal() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    var serialized = serializeStyles(args, cache.registered);
    insertWithoutScoping(cache, serialized);
  };

  var cx = function cx() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return merge$1(cache.registered, css, classnames(args));
  };

  return {
    css: css,
    cx: cx,
    injectGlobal: injectGlobal,
    keyframes: keyframes,
    hydrate: function hydrate(ids) {
      ids.forEach(function (key) {
        cache.inserted[key] = true;
      });
    },
    flush: function flush() {
      cache.registered = {};
      cache.inserted = {};
      cache.sheet.flush();
    },
    // $FlowFixMe
    sheet: cache.sheet,
    cache: cache,
    getRegisteredStyles: getRegisteredStyles$1.bind(null, cache.registered),
    merge: merge$1.bind(null, cache.registered, css)
  };
};

var classnames = function classnames(args) {
  var cls = '';

  for (var i = 0; i < args.length; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

var _createEmotion = createEmotion({
  key: 'css'
}),
    flush = _createEmotion.flush,
    hydrate = _createEmotion.hydrate,
    cx = _createEmotion.cx,
    merge = _createEmotion.merge,
    getRegisteredStyles = _createEmotion.getRegisteredStyles,
    injectGlobal = _createEmotion.injectGlobal,
    keyframes = _createEmotion.keyframes,
    css = _createEmotion.css,
    sheet = _createEmotion.sheet,
    cache = _createEmotion.cache;

function format(first, middle, last) {
  return (first || "") + (middle ? ` ${middle}` : "") + (last ? ` ${last}` : "");
}
function getFontWeightValue(fontWeight) {
  return {
    "light": 300,
    "regular": 400,
    "medium": 500,
    "semibold": 400,
    "bold": 700,
    "italic": 300,
    "light italic": 300,
  }[fontWeight.toLowerCase()];
}
/**
 *
 * @param fontWeight design token specific: includes also information about font-style
 * @returns italic | oblique | normal
 */
function getFontStyle(input) {
  const fontWeight = input.toLowerCase();
  if (fontWeight.includes("italic")) {
    return "italic";
  }
  if (fontWeight.includes("oblique")) {
    return "oblique";
  }
  return "normal";
}

// figma exports percentage value instead of em
// workaround to convert it to float
const letterSpacing = Number(letterSpacingButtons.replace("%", "").trim()) / 100;
const base = css `
  appearance: none;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  letter-spacing: ${letterSpacing}em;
  border-top-left-radius: ${mwComponentButtonBorderRadiusDefault}px;
  border-top-right-radius: ${mwComponentButtonBorderRadiusDefault}px;
  border-bottom-left-radius: ${mwComponentButtonBorderRadiusDefault}px;
  border-bottom-right-radius: ${mwComponentButtonBorderRadiusDefault}px;
  min-width: ${mwComponentSizeButtonFilledOutlineMinW};

  &.small {
    padding: ${mwComponentButtonSmPaddingY} ${mwComponentButtonSmPaddingX};
    font-family: ${mwComponentButtonLabelSmFontFamily};
    line-height: ${mwComponentButtonLabelSmLineHeight}px;
    font-weight: ${getFontWeightValue(mwComponentButtonLabelSmFontWeight)};
    font-size: ${mwComponentButtonLabelSmFontSize}px;
  }

  &.medium {
    padding: ${mwComponentButtonMdPaddingY} ${mwComponentButtonMdPaddingX};
    font-family: ${mwComponentButtonLabelMdFontFamily};
    line-height: ${mwComponentButtonLabelMdLineHeight}px;
    font-weight: ${getFontWeightValue(mwComponentButtonLabelMdFontWeight)};
    font-size: ${mwComponentButtonLabelMdFontSize}px;
  }

  &.large {
    padding: ${mwComponentButtonLgPaddingY} ${mwComponentButtonLgPaddingX};
    font-family: ${mwComponentButtonLabelLgFontFamily};
    line-height: ${mwComponentButtonLabelLgLineHeight}px;
    font-weight: ${getFontWeightValue(mwComponentButtonLabelLgFontWeight)};
    font-size: ${mwComponentButtonLabelLgFontSize}px;
  }

  &.x-large {
    padding: ${mwComponentButtonXlPaddingY} ${mwComponentButtonXlPaddingX};
    font-family: ${mwComponentButtonLabelXlFontFamily};
    line-height: ${mwComponentButtonLabelXlLineHeight}px;
    font-weight: ${getFontWeightValue(mwComponentButtonLabelXlFontWeight)};
    font-size: ${mwComponentButtonLabelXlFontSize}px;
  }
`;
const filledButtonStyles = css `
  ${base};
  border: ${mwComponentButtonBorderWidthFilledDefault};
  color: ${mwComponentButtonFilledColorFgDefault};
  background-color: ${mwComponentButtonFilledColorBgDefault};
  &:hover {
    background-color: ${mwComponentButtonFilledColorBgHover};
    color: ${mwComponentButtonFilledColorFgHover};
  }
  &:focus {
    box-shadow: inset 0 0 0 ${mwComponentButtonBorderWidthFilledFocused}px ${mwComponentButtonFilledColorOutlineFocused};
    background-color: ${mwComponentButtonFilledColorBgFocused};
    color: ${mwComponentButtonFilledColorFgFocused};
  }
  &:active {
    background-color: ${mwComponentButtonFilledColorBgPressed};
    color: ${mwComponentButtonFilledColorFgPressed};
  }
  &:disabled {
    background-color: ${mwComponentButtonFilledColorBgDisabled};
    color: ${mwComponentButtonFilledColorFgDisabled};
  }
`;
const outlineButtonStyles = css `
  ${base};
  border: 0;
  box-shadow: inset 0 0 0 ${mwComponentButtonBorderWidthOutlineDefault}px ${mwComponentButtonOutlineGhostColorBorderDefault};
  color: ${mwComponentButtonOutlineGhostColorFgDefault};
  background-color: ${mwComponentButtonOutlineGhostColorBgDefault};
  &:hover {
    box-shadow: inset 0 0 0 ${mwComponentButtonBorderWidthOutlineDefault}px ${mwComponentButtonOutlineGhostColorBorderHover};
    color: ${mwComponentButtonOutlineGhostColorFgHover};
  }
  &:focus {
    box-shadow: inset 0 0 0 ${mwComponentButtonBorderWidthOutlineFocused}px ${mwComponentButtonOutlineGhostColorBorderFocused};
    color: ${mwComponentButtonOutlineGhostColorFgFocused};
  }
  &:active {
    box-shadow: inset 0 0 0 ${mwComponentButtonBorderWidthOutlineDefault}px ${mwComponentButtonOutlineGhostColorBorderPressed};
    color: ${mwComponentButtonOutlineGhostColorFgPressed};
  }
  &:disabled {
    box-shadow: inset 0 0 0 ${mwComponentButtonBorderWidthOutlineDefault}px ${mwComponentButtonOutlineGhostColorBorderDisabled};
    color: ${mwComponentButtonOutlineGhostColorFgDisabled};
  }
`;
const ghostButtonStyles = css `
  ${base};
  outline: none;
  box-shadow: none;
  border: none;
  color: ${mwComponentButtonOutlineGhostColorFgDefault};
  background-color: ${mwComponentButtonOutlineGhostColorBgDefault};
  &:hover {
    color: ${mwComponentButtonOutlineGhostColorFgHover};
  }
  &:focus {
    box-shadow: inset 0 0 0 ${mwComponentButtonBorderWidthOutlineFocused}px ${mwComponentButtonOutlineGhostColorBorderFocused};
    color: ${mwComponentButtonOutlineGhostColorFgFocused};
  }
  &:active {
    color: ${mwComponentButtonOutlineGhostColorFgPressed};
    box-shadow: none;
  }
  &:disabled {
    color: ${mwComponentButtonOutlineGhostColorFgDisabled};
    box-shadow: none;
  }
`;
const iconButtonStyles = css `
  &.small {
    padding: ${mwComponentButtonSmPaddingIcon};
  }
  &.medium {
    padding: ${mwComponentButtonMdPaddingIcon};
  }
  &.large {
    padding: ${mwComponentButtonLgPaddingIcon};
  }
  &.x-large {
    padding: ${mwComponentButtonXlPaddingIcon};
  }
  min-width: 0px;
`;
const flexStyles = css `
  display: flex;
  align-items: center;
`;
const iconStartStyles = css `
  &.small {
    margin-right: ${mwComponentButtonSmGapBetween};
  }
  &.medium {
    margin-right: ${mwComponentButtonMdGapBetween};
  }
  &.large {
    margin-right: ${mwComponentButtonLgGapBetween};
  }
  &.x-large {
    margin-right: ${mwComponentButtonXlGapBetween};
  }
`;
const iconEndStyles = css `
  &.small {
    margin-left: ${mwComponentButtonSmGapBetween};
  }
  &.medium {
    margin-left: ${mwComponentButtonMdGapBetween};
  }
  &.large {
    margin-left: ${mwComponentButtonLgGapBetween};
  }
  &.x-large {
    margin-left: ${mwComponentButtonXlGapBetween};
  }
`;

var ButtonSizeEnum;
(function (ButtonSizeEnum) {
  ButtonSizeEnum["X_LARGE"] = "x-large";
  ButtonSizeEnum["LARGE"] = "large";
  ButtonSizeEnum["MEDIUM"] = "medium";
  ButtonSizeEnum["SMALL"] = "small";
})(ButtonSizeEnum || (ButtonSizeEnum = {}));

var ButtonVariantEnum;
(function (ButtonVariantEnum) {
  ButtonVariantEnum["FILLED"] = "filled";
  ButtonVariantEnum["OUTLINE"] = "outline";
  ButtonVariantEnum["GHOST"] = "ghost";
})(ButtonVariantEnum || (ButtonVariantEnum = {}));

const getButtonVariantStyles = (variant) => ({
  [ButtonVariantEnum.FILLED]: filledButtonStyles,
  [ButtonVariantEnum.OUTLINE]: outlineButtonStyles,
  [ButtonVariantEnum.GHOST]: ghostButtonStyles,
}[variant]);
const MWButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickEmitter = createEvent(this, "clickEmitter", 4);
    this.handleClick = (event) => {
      if (this.disabled) {
        return;
      }
      event.target.blur();
      if (event.path && Array.isArray(event.path)) {
        event.path[1].blur();
      }
      this.clickEmitter.emit();
    };
    this.testId = undefined;
    this.disabled = undefined;
    this.label = undefined;
    this.variant = ButtonVariantEnum.FILLED;
    this.size = ButtonSizeEnum.MEDIUM;
    this.href = undefined;
    this.target = TargetEnum.SELF;
  }
  componentWillLoad() {
    this.hasIconStartSlot = !!this.hostElement.querySelector("[slot='icon-start']");
    this.hasIconEndSlot = !!this.hostElement.querySelector("[slot='icon-end']");
    this.hasIcon = this.hasIconStartSlot || this.hasIconEndSlot;
    this.hasLabel = !!this.label;
  }
  render() {
    if (this.href) {
      return (h$1("a", { href: this.href, target: this.target, class: `${this.variant} ${getButtonVariantStyles(this.variant)} ${this.size}`, "test-id": this.testId }, this.hasIconStartSlot && (h$1("span", { class: `mw-button-icon-start ${this.size} ${this.hasLabel ? iconStartStyles : ""}` }, h$1("slot", { name: "icon-start" }))), h$1("span", null, this.label), this.hasIconEndSlot && (h$1("span", { class: `mw-button-icon-end ${this.size} ${this.hasLabel ? iconEndStyles : ""}` }, h$1("slot", { name: "icon-end" })))));
    }
    return (h$1("button", { disabled: this.disabled, onClick: this.handleClick, class: `${this.variant} ${getButtonVariantStyles(this.variant)} ${this.hasIcon && flexStyles} ${!this.hasLabel && iconButtonStyles} ${this.size}`, "test-id": this.testId, type: "button" }, this.hasIconStartSlot && (h$1("span", { class: `mw-button-icon-start ${this.size} ${this.hasLabel ? iconStartStyles : ""}` }, h$1("slot", { name: "icon-start" }))), h$1("span", null, this.label), this.hasIconEndSlot && (h$1("span", { class: `mw-button-icon-end ${this.size} ${this.hasLabel ? iconEndStyles : ""}` }, h$1("slot", { name: "icon-end" })))));
  }
  get hostElement() { return getElement(this); }
};

export { MWButton as mw_button };
