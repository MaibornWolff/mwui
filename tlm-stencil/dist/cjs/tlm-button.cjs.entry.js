'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6c26ed16.js');

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
        if ("development" !== 'production' && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear){/.test(rule)) {
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

var e="-ms-";var r="-moz-";var a="-webkit-";var c="comm";var n="rule";var t="decl";var s$1="@page";var u="@media";var i="@import";var f="@charset";var o="@viewport";var l$1="@supports";var v="@document";var h="@namespace";var p="@keyframes";var b="@font-face";var w="@counter-style";var $="@font-feature-values";var k=Math.abs;var d=String.fromCharCode;var g=Object.assign;function m$1(e,r){return (((r<<2^z(e,0))<<2^z(e,1))<<2^z(e,2))<<2^z(e,3)}function x(e){return e.trim()}function y(e,r){return (e=r.exec(e))?e[0]:e}function j(e,r,a){return e.replace(r,a)}function C(e,r){return e.indexOf(r)}function z(e,r){return e.charCodeAt(r)|0}function A(e,r,a){return e.slice(r,a)}function O(e){return e.length}function M(e){return e.length}function S(e,r){return r.push(e),e}function q(e,r){return e.map(r).join("")}var B=1;var D=1;var E=0;var F=0;var G=0;var H="";function I(e,r,a,c,n,t,s){return {value:e,root:r,parent:a,type:c,props:n,children:t,line:B,column:D,length:s,return:""}}function J(e,r){return g(I("",null,null,"",null,null,0),e,{length:-e.length},r)}function K(){return G}function L(){G=F>0?z(H,--F):0;if(D--,G===10)D=1,B--;return G}function N(){G=F<E?z(H,F++):0;if(D++,G===10)D=1,B++;return G}function P(){return z(H,F)}function Q(){return F}function R(e,r){return A(H,e,r)}function T(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function U(e){return B=D=1,E=O(H=e),F=0,[]}function V(e){return H="",e}function W(e){return x(R(F-1,ee(e===91?e+2:e===40?e+1:e)))}function X(e){return V(Z(U(e)))}function Y(e){while(G=P())if(G<33)N();else break;return T(e)>2||T(G)>3?"":" "}function Z(e){while(N())switch(T(G)){case 0:S(ae(F-1),e);break;case 2:S(W(G),e);break;default:S(d(G),e);}return e}function _(e,r){while(--r&&N())if(G<48||G>102||G>57&&G<65||G>70&&G<97)break;return R(e,Q()+(r<6&&P()==32&&N()==32))}function ee(e){while(N())switch(G){case e:return F;case 34:case 39:if(e!==34&&e!==39)ee(G);break;case 40:if(e===41)ee(e);break;case 92:N();break}return F}function re(e,r){while(N())if(e+G===47+10)break;else if(e+G===42+42&&P()===47)break;return "/*"+R(r,F-1)+"*"+d(e===47?e:N())}function ae(e){while(!T(P()))N();return R(e,F)}function ce(e){return V(ne("",null,null,null,[""],e=U(e),0,[0],e))}function ne(e,r,a,c,n,t,s,u,i){var f=0;var o=0;var l=s;var v=0;var h=0;var p=0;var b=1;var w=1;var $=1;var k=0;var g="";var m=n;var x=t;var y=c;var z=g;while(w)switch(p=k,k=N()){case 40:if(p!=108&&z.charCodeAt(l-1)==58){if(C(z+=j(W(k),"&","&\f"),"&\f")!=-1)$=-1;break}case 34:case 39:case 91:z+=W(k);break;case 9:case 10:case 13:case 32:z+=Y(p);break;case 92:z+=_(Q()-1,7);continue;case 47:switch(P()){case 42:case 47:S(se(re(N(),Q()),r,a),i);break;default:z+="/";}break;case 123*b:u[f++]=O(z)*$;case 125*b:case 59:case 0:switch(k){case 0:case 125:w=0;case 59+o:if(h>0&&O(z)-l)S(h>32?ue(z+";",c,a,l-1):ue(j(z," ","")+";",c,a,l-2),i);break;case 59:z+=";";default:S(y=te(z,r,a,f,o,n,u,g,m=[],x=[],l),t);if(k===123)if(o===0)ne(z,r,y,y,m,t,l,u,x);else switch(v){case 100:case 109:case 115:ne(e,y,y,c&&S(te(e,y,y,0,0,n,u,g,n,m=[],l),x),n,x,l,u,c?m:x);break;default:ne(z,y,y,y,[""],x,0,u,x);}}f=o=h=0,b=$=1,g=z="",l=s;break;case 58:l=1+O(z),h=p;default:if(b<1)if(k==123)--b;else if(k==125&&b++==0&&L()==125)continue;switch(z+=d(k),k*b){case 38:$=o>0?1:(z+="\f",-1);break;case 44:u[f++]=(O(z)-1)*$,$=1;break;case 64:if(P()===45)z+=W(N());v=P(),o=l=O(g=z+=ae(Q())),k++;break;case 45:if(p===45&&O(z)==2)b=0;}}return t}function te(e,r,a,c,t,s,u,i,f,o,l){var v=t-1;var h=t===0?s:[""];var p=M(h);for(var b=0,w=0,$=0;b<c;++b)for(var d=0,g=A(e,v+1,v=k(w=u[b])),m=e;d<p;++d)if(m=x(w>0?h[d]+" "+g:j(g,/&\f/g,h[d])))f[$++]=m;return I(e,r,a,t===0?n:i,f,o,l)}function se(e,r,a){return I(e,r,a,c,d(K()),A(e,2,-2),0)}function ue(e,r,a,c){return I(e,r,a,t,A(e,0,c),A(e,c+1,-1),c)}function ie(c,n){switch(m$1(c,n)){case 5103:return a+"print-"+c+c;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return a+c+c;case 5349:case 4246:case 4810:case 6968:case 2756:return a+c+r+c+e+c+c;case 6828:case 4268:return a+c+e+c+c;case 6165:return a+c+e+"flex-"+c+c;case 5187:return a+c+j(c,/(\w+).+(:[^]+)/,a+"box-$1$2"+e+"flex-$1$2")+c;case 5443:return a+c+e+"flex-item-"+j(c,/flex-|-self/,"")+c;case 4675:return a+c+e+"flex-line-pack"+j(c,/align-content|flex-|-self/,"")+c;case 5548:return a+c+e+j(c,"shrink","negative")+c;case 5292:return a+c+e+j(c,"basis","preferred-size")+c;case 6060:return a+"box-"+j(c,"-grow","")+a+c+e+j(c,"grow","positive")+c;case 4554:return a+j(c,/([^-])(transform)/g,"$1"+a+"$2")+c;case 6187:return j(j(j(c,/(zoom-|grab)/,a+"$1"),/(image-set)/,a+"$1"),c,"")+c;case 5495:case 3959:return j(c,/(image-set\([^]*)/,a+"$1"+"$`$1");case 4968:return j(j(c,/(.+:)(flex-)?(.*)/,a+"box-pack:$3"+e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+a+c+c;case 4095:case 3583:case 4068:case 2532:return j(c,/(.+)-inline(.+)/,a+"$1$2")+c;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(c)-1-n>6)switch(z(c,n+1)){case 109:if(z(c,n+4)!==45)break;case 102:return j(c,/(.+:)(.+)-([^]+)/,"$1"+a+"$2-$3"+"$1"+r+(z(c,n+3)==108?"$3":"$2-$3"))+c;case 115:return ~C(c,"stretch")?ie(j(c,"stretch","fill-available"),n)+c:c}break;case 4949:if(z(c,n+1)!==115)break;case 6444:switch(z(c,O(c)-3-(~C(c,"!important")&&10))){case 107:return j(c,":",":"+a)+c;case 101:return j(c,/(.+:)([^;!]+)(;|!.+)?/,"$1"+a+(z(c,14)===45?"inline-":"")+"box$3"+"$1"+a+"$2$3"+"$1"+e+"$2box$3")+c}break;case 5936:switch(z(c,n+11)){case 114:return a+c+e+j(c,/[svh]\w+-[tblr]{2}/,"tb")+c;case 108:return a+c+e+j(c,/[svh]\w+-[tblr]{2}/,"tb-rl")+c;case 45:return a+c+e+j(c,/[svh]\w+-[tblr]{2}/,"lr")+c}return a+c+e+c+c}return c}function fe(e,r){var a="";var c=M(e);for(var n=0;n<c;n++)a+=r(e[n],n,e,r)||"";return a}function oe(e,r,a,s){switch(e.type){case i:case t:return e.return=e.return||e.value;case c:return "";case p:return e.return=e.value+"{"+fe(e.children,s)+"}";case n:e.value=e.props.join(",");}return O(a=fe(e.children,s))?e.return=e.value+"{"+a+"}":""}function le(e){var r=M(e);return function(a,c,n,t){var s="";for(var u=0;u<r;u++)s+=e[u](a,c,n,t)||"";return s}}function ve(e){return function(r){if(!r.root)if(r=r.return)e(r);}}function he(c,s,u,i){if(c.length>-1)if(!c.return)switch(c.type){case t:c.return=ie(c.value,c.length);break;case p:return fe([J(c,{value:j(c.value,"@","@"+a)})],i);case n:if(c.length)return q(c.props,(function(n){switch(y(n,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return fe([J(c,{props:[j(n,/:(read-\w+)/,":"+r+"$1")]})],i);case"::placeholder":return fe([J(c,{props:[j(n,/:(plac\w+)/,":"+a+"input-$1")]}),J(c,{props:[j(n,/:(plac\w+)/,":"+r+"$1")]}),J(c,{props:[j(n,/:(plac\w+)/,e+"input-$1")]})],i)}return ""}))}}function pe(e){switch(e.type){case n:e.props=e.props.map((function(r){return q(X(r),(function(r,a,c){switch(z(r,0)){case 12:return A(r,1,O(r));case 0:case 40:case 43:case 62:case 126:return r;case 58:if(c[++a]==="global")c[a]="",c[++a]="\f"+A(c[a],a=1,-1);case 32:return a===1?"":r;default:switch(a){case 0:e=r;return M(c)>1?"":r;case a=M(c)-1:case 2:return a===2?r+e+e:r+e;default:return r}}}))}));}}

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
        parsed[index] += d(character);
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

var defaultStylisPlugins = [he];

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
        } else if (element.value && element.type !== c) {
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
      return fe(ce(styles), serializer);
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
  var contentValuePattern = /(var|attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
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

/**
 * Do not edit directly
 * Generated on Wed, 24 Aug 2022 11:11:00 GMT
 */
const magenta100 = "#fde8f2";
const magenta200 = "#f9b9d7";
const magenta300 = "#f58abc";
const magenta400 = "#f15ba1";
const magenta500 = "#ed2c86";
const magenta600 = "#d3126c";
const magenta700 = "#a40e54";
const magenta800 = "#750a3c";
const magenta900 = "#460624";
const blue100 = "#d6f8ff";
const blue200 = "#a3eeff";
const blue300 = "#70e5ff";
const blue400 = "#3ddbff";
const blue500 = "#0ad2ff";
const blue600 = "#00afd6";
const blue700 = "#0085a3";
const blue800 = "#005c70";
const blue900 = "#00323d";
const green100 = "#d2fed7";
const green200 = "#a1fdaa";
const green300 = "#6ffb7d";
const green400 = "#3dfa50";
const green500 = "#0bf923";
const green600 = "#05cc19";
const green700 = "#049a13";
const green800 = "#03680d";
const green900 = "#013707";
const purple100 = "#d7d4f2";
const purple200 = "#b3aee5";
const purple300 = "#8f87d9";
const purple400 = "#3524cc";
const purple500 = "#493cbe";
const purple600 = "#3a3097";
const purple700 = "#2b2370";
const purple800 = "#1c174a";
const purple900 = "#0d0b23";
const backgroundDark = "#1c174a";
const pink100 = "#ffccdf";
const pink200 = "#ff99be";
const pink300 = "#ff669e";
const pink400 = "#ff337e";
const pink500 = "#ff005d";
const pink600 = "#cc004b";
const pink700 = "#990038";
const pink800 = "#660025";
const pink900 = "#330013";
const signalNegative = "#ff005d";
const signalPositive = "#0FBA5E";
const xxs = 4;
const xs = 8;
const s = 12;
const m = 16;
const l = 24;
const xl = 40;
const xxl = 64;
const neutralWhite = "#ffffff";
const neutralBackground = "#edeef0";
const neutralDeactive = "#b5bbc2";
const palette70 = "#9198a4";
const palette90 = "#dadde1";
const borderRadiusNone = "0px";
const borderRadiusXl = "30px";
const spaceSizeLarge = 24;
const spaceSizeSmall = 8;
const spaceM = "16px";
const overline = { "fontFamily": "roboto", "fontWeight": "Regular", "lineHeight": 28, "fontSize": 20, "letterSpacing": 4.3, "paragraphSpacing": 0, "textCase": "uppercase", "textDecoration": "none" };
const displayLarge = { "fontFamily": "roboto", "fontWeight": "Bold", "lineHeight": 90, "fontSize": 64, "letterSpacing": 0, "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const displayMedium = { "fontFamily": "roboto", "fontWeight": "SemiBold", "lineHeight": 66, "fontSize": 48, "letterSpacing": 0, "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const displaySmall = { "fontFamily": "roboto", "fontWeight": "SemiBold", "lineHeight": 44, "fontSize": 32, "letterSpacing": 0, "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const headlineLarge = { "fontFamily": "roboto", "fontWeight": "Bold", "lineHeight": 44, "fontSize": 32, "letterSpacing": 0, "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const headlineSmall = { "fontFamily": "roboto", "fontWeight": "SemiBold", "lineHeight": 32, "fontSize": 24, "letterSpacing": 0, "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const headlineMedium = { "fontFamily": "roboto", "fontWeight": "SemiBold", "lineHeight": 36, "fontSize": 28, "letterSpacing": 0, "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const bodyLarge = { "fontFamily": "roboto", "fontWeight": "Regular", "lineHeight": 24, "fontSize": 16, "letterSpacing": 0, "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const bodyLargeItalic = { "fontFamily": "roboto", "fontWeight": "Italic", "lineHeight": 24, "fontSize": 16, "letterSpacing": 0, "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const bodyMedium = { "fontFamily": "roboto", "fontWeight": "Regular", "lineHeight": 24, "fontSize": 16, "letterSpacing": 0, "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const bodySmall = { "fontFamily": "roboto", "fontWeight": "Regular", "lineHeight": 16, "fontSize": 12, "letterSpacing": 0, "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const bodyLargeLight = { "fontFamily": "roboto", "fontWeight": "Light", "lineHeight": 24, "fontSize": 16, "letterSpacing": 0, "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const bodyLargeLightItalic = { "fontFamily": "roboto", "fontWeight": "Light Italic", "lineHeight": 24, "fontSize": 16, "letterSpacing": 0, "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const labelLarge = { "fontFamily": "roboto", "fontWeight": "SemiBold", "lineHeight": 20, "fontSize": 14, "letterSpacing": 0, "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const labelMedium = { "fontFamily": "roboto", "fontWeight": "SemiBold", "lineHeight": 16, "fontSize": 12, "letterSpacing": 0, "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const labelSmall = { "fontFamily": "roboto", "fontWeight": "SemiBold", "lineHeight": 16, "fontSize": 11, "letterSpacing": 0, "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const titleLarge = { "fontFamily": "roboto", "fontWeight": "SemiBold", "lineHeight": 28, "fontSize": 20, "letterSpacing": 0, "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const titleMedium = { "fontFamily": "roboto", "fontWeight": "SemiBold", "lineHeight": 24, "fontSize": 16, "letterSpacing": 0, "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const titleSmall = { "fontFamily": "roboto", "fontWeight": "SemiBold", "lineHeight": 20, "fontSize": 14, "letterSpacing": 0, "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const fontFamiliesDefault = "roboto";
const lineHeights16 = 16;
const lineHeights20 = 20;
const lineHeights24 = 24;
const lineHeights28 = 28;
const lineHeights32 = 32;
const lineHeights36 = 36;
const lineHeights44 = 44;
const lineHeights66 = 66;
const lineHeights90 = 90;
const fontWeightsRegular = "Regular";
const fontWeightsItalic = "Italic";
const fontWeightsLight = "Light";
const fontWeightsLightItalic = "Light Italic";
const fontWeightsSemibold = "SemiBold";
const fontWeightsBold = "Bold";
const fontSize11 = 11;
const fontSize12 = 12;
const fontSize14 = 14;
const fontSize16 = 16;
const fontSize20 = 20;
const fontSize24 = 24;
const fontSize28 = 28;
const fontSize32 = 32;
const fontSize48 = 48;
const fontSize64 = 64;
const letterSpacing0 = 0;
const letterSpacing43 = 4.3;
const letterSpacing01 = 0.1;
const letterSpacing05 = 0.5;
const paragraphSpacing0 = 0;
const textCaseUppercase = "uppercase";
const textCaseNone = "none";
const textDecorationNone = "none";
const iconButtonButtonFilledDefaultIconSize = "16px";
const whiteLabelMdPurple50 = "#f7f3fa";
const whiteLabelMdPurple100 = "#e6dff0";
const whiteLabelMdPurple300 = "#7965AF";
const whiteLabelMdPurple400 = "#3234ca";
const whiteLabelMdPurple500 = "#6750a4";
const whiteLabelMdPurple012 = "#6750a41f";
const whiteLabelMdPurple008 = "#6750a414";
const whiteLabelMdPurpleTonal300 = "#d0c6df";
const whiteLabelMdPurpleTonal200 = "#d8cee8";
const whiteLabelMdPurpleTonal100 = "#e8def8";
const whiteLabelMdGray100 = "#f0ecf0";
const whiteLabelMdGray200 = "#e9e4e8";
const whiteLabelMdGray500 = "#79747e";
const whiteLabelMdGray038 = "#1c1b1f61";
const whiteLabelMdGray012 = "#1f1f1f1f";
const whiteLabelMdBlack400 = "#49454f";
const whiteLabelMdBlack500 = "#1d192b";
const semanticColorActionsFilledDefaultBgColor = "#3524cc";
const semanticColorActionsFilledDefaultFgColor = "#ffffff";
const semanticColorActionsFilledHoverBgColor = "#3234ca";
const semanticColorActionsFilledHoverFgColor = "#ffffff";
const semanticColorActionsFilledFocusedBgColor = "#7965AF";
const semanticColorActionsFilledFocusedFgColor = "#ffffff";
const semanticColorActionsFilledPressedBgColor = "#7965AF";
const semanticColorActionsFilledPressedFgColor = "#ffffff";
const semanticColorActionsFilledDisabledBgColor = "#1f1f1f1f";
const semanticColorActionsFilledDisabledFgColor = "#1c1b1f61";
const semanticColorActionsOutlineDefaultBgColor = "#ffffff";
const semanticColorActionsOutlineDefaultFgColor = "#6750a4";
const semanticColorActionsOutlineDefaultBorderColor = "#79747e";
const semanticColorActionsOutlineHoverBgColor = "#6750a414";
const semanticColorActionsOutlineHoverFgColor = "#6750a4";
const semanticColorActionsOutlineHoverBorderColor = "#79747e";
const semanticColorActionsOutlineFocusedBgColor = "#6750a41f";
const semanticColorActionsOutlineFocusedFgColor = "#6750a4";
const semanticColorActionsOutlineFocusedBorderColor = "#7965AF";
const semanticColorActionsOutlinePressedBgColor = "#6750a41f";
const semanticColorActionsOutlinePressedFgColor = "#6750a4";
const semanticColorActionsOutlinePressedBorderColor = "#79747e";
const semanticColorActionsOutlineDisabledBgColor = "#ffffff";
const semanticColorActionsOutlineDisabledFgColor = "#1c1b1f61";
const semanticColorActionsOutlineDisabledBorderColor = "#1f1f1f1f";
const semanticFontsContentTextDefaultTitleLarge = { "0": "{", "1": "t", "2": "i", "3": "t", "4": "l", "5": "e", "6": ".", "7": "l", "8": "a", "9": "r", "10": "g", "11": "e", "12": "}" };
const semanticFontsContentTextDefaultTitleBeispiel = { "0": "{", "1": "d", "2": "i", "3": "s", "4": "p", "5": "l", "6": "a", "7": "y", "8": ".", "9": "l", "10": "a", "11": "r", "12": "g", "13": "e", "14": "}" };
const semanticFontsContentTextDefaultBodyLarge = { "0": "{", "1": "b", "2": "o", "3": "d", "4": "y", "5": ".", "6": "l", "7": "a", "8": "r", "9": "g", "10": "e", "11": "}" };
const semanticFontsContentTextDefaultDisplayMedium = { "0": "{", "1": "d", "2": "i", "3": "s", "4": "p", "5": "l", "6": "a", "7": "y", "8": ".", "9": "m", "10": "e", "11": "d", "12": "i", "13": "u", "14": "m", "15": "}" };
const semanticBorderSurfaceBorderRadiusDefaultNone = "0px";
const semanticBorderSurfaceBorderRadiusDefaultXl = "30px";
const semanticShadowSurfaceDropShadowDefault1 = { "0": "{", "1": "d", "2": "r", "3": "o", "4": "p", "5": ".", "6": "s", "7": "h", "8": "a", "9": "d", "10": "o", "11": "w", "12": ".", "13": "d", "14": "e", "15": "f", "16": "a", "17": "u", "18": "l", "19": "t", "20": "}" };
const cardTextDefaultTitleLarge = { "0": "{", "1": "s", "2": "e", "3": "m", "4": "a", "5": "n", "6": "t", "7": "i", "8": "c", "9": ".", "10": "f", "11": "o", "12": "n", "13": "t", "14": "s", "15": ".", "16": "c", "17": "o", "18": "n", "19": "t", "20": "e", "21": "n", "22": "t", "23": ".", "24": "t", "25": "e", "26": "x", "27": "t", "28": ".", "29": "d", "30": "e", "31": "f", "32": "a", "33": "u", "34": "l", "35": "t", "36": ".", "37": "t", "38": "i", "39": "t", "40": "l", "41": "e", "42": ".", "43": "l", "44": "a", "45": "r", "46": "g", "47": "e", "48": "}" };
const cardTextDefaultBodyLarge = { "0": "{", "1": "s", "2": "e", "3": "m", "4": "a", "5": "n", "6": "t", "7": "i", "8": "c", "9": ".", "10": "f", "11": "o", "12": "n", "13": "t", "14": "s", "15": ".", "16": "c", "17": "o", "18": "n", "19": "t", "20": "e", "21": "n", "22": "t", "23": ".", "24": "t", "25": "e", "26": "x", "27": "t", "28": ".", "29": "d", "30": "e", "31": "f", "32": "a", "33": "u", "34": "l", "35": "t", "36": ".", "37": "b", "38": "o", "39": "d", "40": "y", "41": ".", "42": "l", "43": "a", "44": "r", "45": "g", "46": "e", "47": "}" };
const buttonButtonFilledDefaultBgColor = "#3524cc";
const buttonButtonFilledDefaultFgColor = "#ffffff";
const buttonButtonFilledDefaultBorderRadius = "30px";
const buttonButtonFilledHoverBgColor = "#3234ca";
const buttonButtonFilledHoverFgColor = "#ffffff";
const buttonButtonFilledFocusedBgColor = "#7965AF";
const buttonButtonFilledFocusedFgColor = "#ffffff";
const buttonButtonFilledPressedBgColor = "#7965AF";
const buttonButtonFilledPressedFgColor = "#ffffff";
const buttonButtonFilledDisabledBgColor = "#1f1f1f1f";
const buttonButtonFilledDisabledFgColor = "#1c1b1f61";
const buttonButtonOutlineDefaultBgColor = "#ffffff";
const buttonButtonOutlineDefaultFgColor = "#6750a4";
const buttonButtonOutlineDefaultBorderColor = "#79747e";
const buttonButtonOutlineDefaultBorderRadius = "30px";
const buttonButtonOutlineHoverBgColor = "#6750a414";
const buttonButtonOutlineHoverFgColor = "#6750a4";
const buttonButtonOutlineHoverBorderColor = "#79747e";
const buttonButtonOutlineFocusedBgColor = "#6750a41f";
const buttonButtonOutlineFocusedFgColor = "#6750a4";
const buttonButtonOutlineFocusedBorderColor = "#7965AF";
const buttonButtonOutlinePressedBgColor = "#6750a41f";
const buttonButtonOutlinePressedFgColor = "#6750a4";
const buttonButtonOutlinePressedBorderColor = "#79747e";
const buttonButtonOutlineDisabledBgColor = "#ffffff";
const buttonButtonOutlineDisabledFgColor = "#1c1b1f61";
const buttonButtonOutlineDisabledBorderColor = "#1f1f1f1f";
const xlLeft = "16px";
const xlRight = "24px";
const mTop = "10px";
const mBottom = "10px";
const mGap = "4px";
const dropShadowDefault = { "x": 1, "y": 2, "blur": 3, "spread": 0, "color": "#0000004d", "type": "dropShadow" };
const labelLabelFilledDefaultBgColor = "#3524cc";
const labelLabelFilledDefaultFgColor = "#ffffff";
const labelLabelFilledHoverBgColor = "#3234ca";
const labelLabelFilledHoverFgColor = "#ffffff";
const labelLabelFilledFocusedBgColor = "#7965AF";
const labelLabelFilledFocusedFgColor = "#ffffff";
const labelLabelFilledPressedBgColor = "#7965AF";
const labelLabelFilledPressedFgColor = "#ffffff";
const labelLabelFilledDisabledBgColor = "#1f1f1f1f";
const labelLabelFilledDisabledFgColor = "#1c1b1f61";
const labelLabelOutlineDefaultBgColor = "#ffffff";
const labelLabelOutlineDefaultFgColor = "#6750a4";
const labelLabelOutlineDefaultBorderColor = "#79747e";
const labelLabelOutlineHoverBgColor = "#6750a414";
const labelLabelOutlineHoverFgColor = "#6750a4";
const labelLabelOutlineHoverBorderColor = "#79747e";
const labelLabelOutlineFocusedBgColor = "#6750a41f";
const labelLabelOutlineFocusedFgColor = "#6750a4";
const labelLabelOutlineFocusedBorderColor = "#7965AF";
const labelLabelOutlinePressedBgColor = "#6750a41f";
const labelLabelOutlinePressedFgColor = "#6750a4";
const labelLabelOutlinePressedBorderColor = "#79747e";
const labelLabelOutlineDisabledBgColor = "#ffffff";
const labelLabelOutlineDisabledFgColor = "#1c1b1f61";
const labelLabelOutlineDisabledBorderColor = "#1f1f1f1f";
const openerTextDefaultDisplayMedium = { "0": "{", "1": "s", "2": "e", "3": "m", "4": "a", "5": "n", "6": "t", "7": "i", "8": "c", "9": ".", "10": "f", "11": "o", "12": "n", "13": "t", "14": "s", "15": ".", "16": "c", "17": "o", "18": "n", "19": "t", "20": "e", "21": "n", "22": "t", "23": ".", "24": "t", "25": "e", "26": "x", "27": "t", "28": ".", "29": "d", "30": "e", "31": "f", "32": "a", "33": "u", "34": "l", "35": "t", "36": ".", "37": "d", "38": "i", "39": "s", "40": "p", "41": "l", "42": "a", "43": "y", "44": ".", "45": "m", "46": "e", "47": "d", "48": "i", "49": "u", "50": "m", "51": "}" };
const openerTextDefaultTitleLarge = { "0": "{", "1": "s", "2": "e", "3": "m", "4": "a", "5": "n", "6": "t", "7": "i", "8": "c", "9": ".", "10": "f", "11": "o", "12": "n", "13": "t", "14": "s", "15": ".", "16": "c", "17": "o", "18": "n", "19": "t", "20": "e", "21": "n", "22": "t", "23": ".", "24": "t", "25": "e", "26": "x", "27": "t", "28": ".", "29": "d", "30": "e", "31": "f", "32": "a", "33": "u", "34": "l", "35": "t", "36": ".", "37": "t", "38": "i", "39": "t", "40": "l", "41": "e", "42": ".", "43": "l", "44": "a", "45": "r", "46": "g", "47": "e", "48": "}" };

const buttonStyles = css `
  font-family: ${fontFamiliesDefault};
  border: 0;
  padding: ${xs}px;
  color: ${buttonButtonFilledDefaultFgColor};
  font-size: ${fontSize16};
  border-radius: ${buttonButtonFilledDefaultBorderRadius};
  background-color: ${buttonButtonFilledDefaultBgColor};
  &:hover {
    background-color: ${buttonButtonFilledHoverBgColor};
    color: ${buttonButtonFilledHoverFgColor};
  }
  &:active {
    background-color: ${buttonButtonFilledPressedBgColor};
    color: ${buttonButtonFilledPressedFgColor};
  }
  &:disabled {
    background-color: ${buttonButtonFilledDisabledBgColor};
    color: ${buttonButtonFilledDisabledFgColor};
  }
`;
const TlmButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.clickEmitter = index.createEvent(this, "clickEmitter", 4);
    this.handleClick = () => {
      this.clickEmitter.emit('onClick');
    };
  }
  render() {
    return (index.h("button", { disabled: this.disabled, onClick: this.handleClick, class: buttonStyles, "test-id": this.testId, type: "button" }, index.h("slot", null)));
  }
};

exports.tlm_button = TlmButton;
