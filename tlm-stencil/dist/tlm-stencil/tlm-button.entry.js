import { r as registerInstance, e as createEvent, h as h$1, g as getElement } from './index-7941c489.js';
import { g as getFontWeightValue } from './utils-b0512f92.js';

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

var e="-ms-";var r="-moz-";var a="-webkit-";var c="comm";var n="rule";var t="decl";var s="@page";var u="@media";var i="@import";var f="@charset";var o="@viewport";var l="@supports";var v="@document";var h="@namespace";var p="@keyframes";var b="@font-face";var w="@counter-style";var $="@font-feature-values";var k=Math.abs;var d=String.fromCharCode;var g=Object.assign;function m(e,r){return (((r<<2^z(e,0))<<2^z(e,1))<<2^z(e,2))<<2^z(e,3)}function x(e){return e.trim()}function y(e,r){return (e=r.exec(e))?e[0]:e}function j(e,r,a){return e.replace(r,a)}function C(e,r){return e.indexOf(r)}function z(e,r){return e.charCodeAt(r)|0}function A(e,r,a){return e.slice(r,a)}function O(e){return e.length}function M(e){return e.length}function S(e,r){return r.push(e),e}function q(e,r){return e.map(r).join("")}var B=1;var D=1;var E=0;var F=0;var G=0;var H="";function I(e,r,a,c,n,t,s){return {value:e,root:r,parent:a,type:c,props:n,children:t,line:B,column:D,length:s,return:""}}function J(e,r){return g(I("",null,null,"",null,null,0),e,{length:-e.length},r)}function K(){return G}function L(){G=F>0?z(H,--F):0;if(D--,G===10)D=1,B--;return G}function N(){G=F<E?z(H,F++):0;if(D++,G===10)D=1,B++;return G}function P(){return z(H,F)}function Q(){return F}function R(e,r){return A(H,e,r)}function T(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function U(e){return B=D=1,E=O(H=e),F=0,[]}function V(e){return H="",e}function W(e){return x(R(F-1,ee(e===91?e+2:e===40?e+1:e)))}function X(e){return V(Z(U(e)))}function Y(e){while(G=P())if(G<33)N();else break;return T(e)>2||T(G)>3?"":" "}function Z(e){while(N())switch(T(G)){case 0:S(ae(F-1),e);break;case 2:S(W(G),e);break;default:S(d(G),e);}return e}function _(e,r){while(--r&&N())if(G<48||G>102||G>57&&G<65||G>70&&G<97)break;return R(e,Q()+(r<6&&P()==32&&N()==32))}function ee(e){while(N())switch(G){case e:return F;case 34:case 39:if(e!==34&&e!==39)ee(G);break;case 40:if(e===41)ee(e);break;case 92:N();break}return F}function re(e,r){while(N())if(e+G===47+10)break;else if(e+G===42+42&&P()===47)break;return "/*"+R(r,F-1)+"*"+d(e===47?e:N())}function ae(e){while(!T(P()))N();return R(e,F)}function ce(e){return V(ne("",null,null,null,[""],e=U(e),0,[0],e))}function ne(e,r,a,c,n,t,s,u,i){var f=0;var o=0;var l=s;var v=0;var h=0;var p=0;var b=1;var w=1;var $=1;var k=0;var g="";var m=n;var x=t;var y=c;var z=g;while(w)switch(p=k,k=N()){case 40:if(p!=108&&z.charCodeAt(l-1)==58){if(C(z+=j(W(k),"&","&\f"),"&\f")!=-1)$=-1;break}case 34:case 39:case 91:z+=W(k);break;case 9:case 10:case 13:case 32:z+=Y(p);break;case 92:z+=_(Q()-1,7);continue;case 47:switch(P()){case 42:case 47:S(se(re(N(),Q()),r,a),i);break;default:z+="/";}break;case 123*b:u[f++]=O(z)*$;case 125*b:case 59:case 0:switch(k){case 0:case 125:w=0;case 59+o:if(h>0&&O(z)-l)S(h>32?ue(z+";",c,a,l-1):ue(j(z," ","")+";",c,a,l-2),i);break;case 59:z+=";";default:S(y=te(z,r,a,f,o,n,u,g,m=[],x=[],l),t);if(k===123)if(o===0)ne(z,r,y,y,m,t,l,u,x);else switch(v){case 100:case 109:case 115:ne(e,y,y,c&&S(te(e,y,y,0,0,n,u,g,n,m=[],l),x),n,x,l,u,c?m:x);break;default:ne(z,y,y,y,[""],x,0,u,x);}}f=o=h=0,b=$=1,g=z="",l=s;break;case 58:l=1+O(z),h=p;default:if(b<1)if(k==123)--b;else if(k==125&&b++==0&&L()==125)continue;switch(z+=d(k),k*b){case 38:$=o>0?1:(z+="\f",-1);break;case 44:u[f++]=(O(z)-1)*$,$=1;break;case 64:if(P()===45)z+=W(N());v=P(),o=l=O(g=z+=ae(Q())),k++;break;case 45:if(p===45&&O(z)==2)b=0;}}return t}function te(e,r,a,c,t,s,u,i,f,o,l){var v=t-1;var h=t===0?s:[""];var p=M(h);for(var b=0,w=0,$=0;b<c;++b)for(var d=0,g=A(e,v+1,v=k(w=u[b])),m=e;d<p;++d)if(m=x(w>0?h[d]+" "+g:j(g,/&\f/g,h[d])))f[$++]=m;return I(e,r,a,t===0?n:i,f,o,l)}function se(e,r,a){return I(e,r,a,c,d(K()),A(e,2,-2),0)}function ue(e,r,a,c){return I(e,r,a,t,A(e,0,c),A(e,c+1,-1),c)}function ie(c,n){switch(m(c,n)){case 5103:return a+"print-"+c+c;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return a+c+c;case 5349:case 4246:case 4810:case 6968:case 2756:return a+c+r+c+e+c+c;case 6828:case 4268:return a+c+e+c+c;case 6165:return a+c+e+"flex-"+c+c;case 5187:return a+c+j(c,/(\w+).+(:[^]+)/,a+"box-$1$2"+e+"flex-$1$2")+c;case 5443:return a+c+e+"flex-item-"+j(c,/flex-|-self/,"")+c;case 4675:return a+c+e+"flex-line-pack"+j(c,/align-content|flex-|-self/,"")+c;case 5548:return a+c+e+j(c,"shrink","negative")+c;case 5292:return a+c+e+j(c,"basis","preferred-size")+c;case 6060:return a+"box-"+j(c,"-grow","")+a+c+e+j(c,"grow","positive")+c;case 4554:return a+j(c,/([^-])(transform)/g,"$1"+a+"$2")+c;case 6187:return j(j(j(c,/(zoom-|grab)/,a+"$1"),/(image-set)/,a+"$1"),c,"")+c;case 5495:case 3959:return j(c,/(image-set\([^]*)/,a+"$1"+"$`$1");case 4968:return j(j(c,/(.+:)(flex-)?(.*)/,a+"box-pack:$3"+e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+a+c+c;case 4095:case 3583:case 4068:case 2532:return j(c,/(.+)-inline(.+)/,a+"$1$2")+c;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(c)-1-n>6)switch(z(c,n+1)){case 109:if(z(c,n+4)!==45)break;case 102:return j(c,/(.+:)(.+)-([^]+)/,"$1"+a+"$2-$3"+"$1"+r+(z(c,n+3)==108?"$3":"$2-$3"))+c;case 115:return ~C(c,"stretch")?ie(j(c,"stretch","fill-available"),n)+c:c}break;case 4949:if(z(c,n+1)!==115)break;case 6444:switch(z(c,O(c)-3-(~C(c,"!important")&&10))){case 107:return j(c,":",":"+a)+c;case 101:return j(c,/(.+:)([^;!]+)(;|!.+)?/,"$1"+a+(z(c,14)===45?"inline-":"")+"box$3"+"$1"+a+"$2$3"+"$1"+e+"$2box$3")+c}break;case 5936:switch(z(c,n+11)){case 114:return a+c+e+j(c,/[svh]\w+-[tblr]{2}/,"tb")+c;case 108:return a+c+e+j(c,/[svh]\w+-[tblr]{2}/,"tb-rl")+c;case 45:return a+c+e+j(c,/[svh]\w+-[tblr]{2}/,"lr")+c}return a+c+e+c+c}return c}function fe(e,r){var a="";var c=M(e);for(var n=0;n<c;n++)a+=r(e[n],n,e,r)||"";return a}function oe(e,r,a,s){switch(e.type){case i:case t:return e.return=e.return||e.value;case c:return "";case p:return e.return=e.value+"{"+fe(e.children,s)+"}";case n:e.value=e.props.join(",");}return O(a=fe(e.children,s))?e.return=e.value+"{"+a+"}":""}function le(e){var r=M(e);return function(a,c,n,t){var s="";for(var u=0;u<r;u++)s+=e[u](a,c,n,t)||"";return s}}function ve(e){return function(r){if(!r.root)if(r=r.return)e(r);}}function he(c,s,u,i){if(c.length>-1)if(!c.return)switch(c.type){case t:c.return=ie(c.value,c.length);break;case p:return fe([J(c,{value:j(c.value,"@","@"+a)})],i);case n:if(c.length)return q(c.props,(function(n){switch(y(n,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return fe([J(c,{props:[j(n,/:(read-\w+)/,":"+r+"$1")]})],i);case"::placeholder":return fe([J(c,{props:[j(n,/:(plac\w+)/,":"+a+"input-$1")]}),J(c,{props:[j(n,/:(plac\w+)/,":"+r+"$1")]}),J(c,{props:[j(n,/:(plac\w+)/,e+"input-$1")]})],i)}return ""}))}}function pe(e){switch(e.type){case n:e.props=e.props.map((function(r){return q(X(r),(function(r,a,c){switch(z(r,0)){case 12:return A(r,1,O(r));case 0:case 40:case 43:case 62:case 126:return r;case 58:if(c[++a]==="global")c[a]="",c[++a]="\f"+A(c[a],a=1,-1);case 32:return a===1?"":r;default:switch(a){case 0:e=r;return M(c)>1?"":r;case a=M(c)-1:case 2:return a===2?r+e+e:r+e;default:return r}}}))}));}}

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
 * Generated on Fri, 09 Dec 2022 11:51:25 GMT
 */
const mwComponentButtonSecondaryColorBgDefault = "#ffffff00";
const mwComponentButtonSecondaryColorFgDefault = "#001418";
const mwComponentButtonSecondaryColorFgHover = "#ed2985";
const mwComponentButtonSecondaryColorFgFocused = "#ed2985";
const mwComponentButtonSecondaryColorFgPressed = "#c42177";
const mwComponentButtonSecondaryColorFgDisabled = "#5e6d72";
const mwComponentButtonSecondaryColorOutlineDisabled = "#5e6d72";
const mwComponentButtonSecondaryColorOutlineDefault = "#001418";
const mwComponentButtonSecondaryColorOutlineHover = "#ed2985";
const mwComponentButtonSecondaryColorOutlinePressed = "#c42177";
const mwComponentButtonSecondaryColorOutlineFocused = "#001418";
const mwComponentButtonPrimaryColorBgDefault = "#ed2985";
const mwComponentButtonPrimaryColorBgDisabled = "#95a0a4";
const mwComponentButtonPrimaryColorBgFocused = "#F86F96";
const mwComponentButtonPrimaryColorBgHover = "#F86F96";
const mwComponentButtonPrimaryColorBgPressed = "#c42177";
const mwComponentButtonPrimaryColorFgDefault = "#ffffff";
const mwComponentButtonPrimaryColorFgDisabled = "#EEF1F3";
const mwComponentButtonPrimaryColorFgFocused = "#ffffff";
const mwComponentButtonPrimaryColorFgHover = "#ffffff";
const mwComponentButtonPrimaryColorFgPressed = "#EEF1F3";
const mwComponentButtonPrimaryColorOutlineFocused = "#001418";
const mwComponentButtonBorderWidthSecondaryDefault = 1;
const mwComponentButtonBorderWidthSecondaryFocused = 2;
const mwComponentButtonBorderWidthPrimaryDefault = "0px";
const mwComponentButtonBorderWidthPrimaryFocused = 2;
const mwComponentButtonBorderRadiusDefault = 9999;
const mwComponentButtonPrimarySecondaryPaddingLr = "16px";
const mwComponentButtonPrimarySecondaryPaddingTb = "12px";
const mwComponentButtonPrimarySecondaryGap = "12px";
const mwComponentButtonPrimarySecondaryMinWidth = 88;
const mwComponentButtonIconButtonPaddingAll = "12px";
const mwComponentControlsColorFgDefault = "#ffffff";
const mwComponentControlsColorFgDisabled = "#EEF1F3";
const mwComponentControlsColorBgSelected = "#ed2985";
const mwComponentControlsColorBgDisabled = "#95a0a4";
const mwComponentControlsColorBgHover = "#F86F96";
const mwComponentControlsColorBgFocused = "#F86F96";
const mwComponentControlsColorBgPressed = "#c42177";
const mwComponentControlsColorOutlineDefault = "#001418";
const mwComponentControlsColorOutlineDisabled = "#5e6d72";
const mwComponentControlsPaddingAll = "12px";
const mwComponentCheckboxBorderRadius = 2;
const mwComponentCheckboxSelectedBorderWidthDefault = "0px";
const mwComponentCheckboxSelectedBorderWidthFocused = 2;
const mwComponentCheckboxSelectedBorderWidthUnselected = 2;
const mwSemanticColorOutlineHover = "#ed2985";
const mwSemanticColorOutlineDisabled = "#5e6d72";
const mwSemanticColorOutlineDefault = "#001418";
const mwSemanticColorOutlinePressed = "#c42177";
const mwSemanticColorFgOnPrimary = "#ffffff";
const mwSemanticColorFgDisabled = "#5e6d72";
const mwSemanticColorFgDefault = "#001418";
const mwSemanticColorFgPressed = "#c42177";
const mwSemanticColorFgHover = "#ed2985";
const mwSemanticColorFgFocused = "#ed2985";
const mwSemanticColorFgOnDisabled = "#EEF1F3";
const mwSemanticColorFgPressedOnPrimary = "#EEF1F3";
const mwSemanticColorBgDisabledDefault = "#95a0a4";
const mwSemanticColorBgTransparent = "#ffffff00";
const mwSemanticColorBgPrimary = "#ed2985";
const mwSemanticColorBgFocused = "#F86F96";
const mwSemanticColorBgHover = "#F86F96";
const mwSemanticColorBgPressed = "#c42177";
const mwSemanticColorBgDefault = "#ffffff";
const mwCoreColorPrimary100 = "#FBEEEC";
const mwCoreColorPrimary200 = "#f9c8c7";
const mwCoreColorPrimary300 = "#fa9ea9";
const mwCoreColorPrimary400 = "#F86F96";
const mwCoreColorPrimary500 = "#ed2985";
const mwCoreColorPrimary600 = "#c42177";
const mwCoreColorPrimary700 = "#991766";
const mwCoreColorPrimary800 = "#700f52";
const mwCoreColorPrimary900 = "#470b3a";
const mwCoreColorPrimary950 = "#22051E";
const mwCoreColorNeutral100 = "#EEF1F3";
const mwCoreColorNeutral200 = "#CFD6D8";
const mwCoreColorNeutral300 = "#B1BABE";
const mwCoreColorNeutral400 = "#95a0a4";
const mwCoreColorNeutral500 = "#79868b";
const mwCoreColorNeutral600 = "#5e6d72";
const mwCoreColorNeutral700 = "#44555b";
const mwCoreColorNeutral800 = "#2c3e45";
const mwCoreColorNeutral900 = "#112930";
const mwCoreColorNeutral950 = "#001418";
const mwCoreColorNeutralWhite = "#ffffff";
const mwCoreColorNeutralBlack = "#000000";
const mwCoreColorNeutralTransparent = "#ffffff00";
const mwCoreColorInfo200 = "#97E0FC";
const mwCoreColorInfo300 = "#0bd2ff";
const mwCoreColorInfo400 = "#02aece";
const mwCoreColorInfo500 = "#0192a7";
const mwCoreColorInfo600 = "#027784";
const mwCoreColorInfo700 = "#005c63";
const mwCoreColorInfo800 = "#014345";
const mwCoreColorInfo900 = "#042b2b";
const mwCoreColorSuccess200 = "#3cfa50";
const mwCoreColorSuccess300 = "#01d60f";
const mwCoreColorSuccess400 = "#36b500";
const mwCoreColorSuccess500 = "#429601";
const mwCoreColorSuccess600 = "#407800";
const mwCoreColorSuccess700 = "#385c00";
const mwCoreColorSuccess800 = "#2d4100";
const mwCoreColorSuccess900 = "#212903";
const mwCoreColorSecondary200 = "#eacaee";
const mwCoreColorSecondary300 = "#d8a8e6";
const mwCoreColorSecondary400 = "#c089dc";
const mwCoreColorSecondary500 = "#a46cd3";
const mwCoreColorSecondary600 = "#8451c9";
const mwCoreColorSecondary700 = "#5f37bf";
const mwCoreColorSecondary800 = "#3a2997";
const mwCoreColorSecondary900 = "#1d184b";
const mwCoreColorCaution200 = "#facb9a";
const mwCoreColorCaution300 = "#fc9d1b";
const mwCoreColorCaution400 = "#dd8916";
const mwCoreColorCaution500 = "#b97210";
const mwCoreColorCaution600 = "#975c0b";
const mwCoreColorCaution700 = "#764706";
const mwCoreColorCaution800 = "#563305";
const mwCoreColorCaution900 = "#352107";
const mwCoreColorDanger200 = "#fcc8b7";
const mwCoreColorDanger300 = "#ff9f7f";
const mwCoreColorDanger400 = "#ff6f45";
const mwCoreColorDanger500 = "#ff390b";
const mwCoreColorDanger600 = "#cb2400";
const mwCoreColorDanger700 = "#9f1b00";
const mwCoreColorDanger800 = "#731700";
const mwCoreColorDanger900 = "#451604";
const shadowsBlur20 = 3;
const shadowsBlur40 = 4;
const shadowsBlur60 = 8;
const shadowsBlur80 = 16;
const shadowsBlur100 = 24;
const shadowsBlurBase = 1;
const shadowsY20 = 1;
const shadowsY40 = 2;
const shadowsY60 = 4;
const shadowsY80 = 8;
const shadowsY100 = 16;
const fontFamiliesHeadlines = "Poppins";
const fontFamiliesBody = "Poppins";
const lineHeightsHeadlinesXl = "110%";
const lineHeightsHeadlinesLg = "110%";
const lineHeightsHeadlinesDefault = "110%";
const lineHeightsHeadlinesSm = "130%";
const lineHeightsBodyRelaxed = "175%";
const lineHeightsBodyDefault = "150%";
const fontWeightsHeadlinesBold = "Bold";
const fontWeightsHeadlinesRegular = "Regular";
const fontWeightsBodyBold = "Bold";
const fontWeightsBodyRegular = "Regular";
const fontSizeBase = "16px";
const fontSizeScale = "1.2px";
const fontSizeXxs = "9px";
const fontSizeXs = "11px";
const fontSizeSm = "13px";
const fontSizeLg = "19px";
const fontSizeXl = "23px";
const fontSize2xl = "28px";
const fontSize3xl = "34px";
const fontSize4xl = "41px";
const fontSize5xl = "49px";
const fontSize6xl = "59px";
const fontSize7xl = "71px";
const fontSize8xl = "85px";
const fontSize9xl = "102px";
const fontSize10xl = "122px";
const letterSpacingBody = "0%";
const letterSpacingHeadlines = "-1%";
const letterSpacingButtons = "3%";
const letterSpacingCaptions = "0%";
const paragraphSpacingDefault = 0;
const typographyColossusBold = { "fontFamily": "Poppins", "fontWeight": "Bold", "lineHeight": "110%", "fontSize": 122, "letterSpacing": "-1%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyColossusRegular = { "fontFamily": "Poppins", "fontWeight": "Regular", "lineHeight": "110%", "fontSize": 122, "letterSpacing": "-1%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyDisplayBold = { "fontFamily": "Poppins", "fontWeight": "Bold", "lineHeight": "110%", "fontSize": 71, "letterSpacing": "-1%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyDisplayRegular = { "fontFamily": "Poppins", "fontWeight": "Regular", "lineHeight": "110%", "fontSize": 71, "letterSpacing": "-1%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyHeroBold = { "fontFamily": "Poppins", "fontWeight": "Bold", "lineHeight": "110%", "fontSize": 85, "letterSpacing": "-1%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyHeroRegular = { "fontFamily": "Poppins", "fontWeight": "Regular", "lineHeight": "110%", "fontSize": 85, "letterSpacing": "-1%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyUberBold = { "fontFamily": "Poppins", "fontWeight": "Bold", "lineHeight": "110%", "fontSize": 102, "letterSpacing": "-1%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyUberRegular = { "fontFamily": "Poppins", "fontWeight": "Regular", "lineHeight": "110%", "fontSize": 102, "letterSpacing": "-1%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyHeadline1Bold = { "fontFamily": "Poppins", "fontWeight": "Bold", "lineHeight": "110%", "fontSize": 59, "letterSpacing": "-1%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyHeadline1Regular = { "fontFamily": "Poppins", "fontWeight": "Regular", "lineHeight": "110%", "fontSize": 59, "letterSpacing": "-1%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyHeadline2Bold = { "fontFamily": "Poppins", "fontWeight": "Bold", "lineHeight": "110%", "fontSize": 49, "letterSpacing": "-1%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyHeadline2Regular = { "fontFamily": "Poppins", "fontWeight": "Regular", "lineHeight": "110%", "fontSize": 49, "letterSpacing": "-1%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyHeadline3Bold = { "fontFamily": "Poppins", "fontWeight": "Bold", "lineHeight": "110%", "fontSize": 41, "letterSpacing": "-1%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyHeadline3Regular = { "fontFamily": "Poppins", "fontWeight": "Regular", "lineHeight": "110%", "fontSize": 41, "letterSpacing": "-1%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyHeadline4Bold = { "fontFamily": "Poppins", "fontWeight": "Bold", "lineHeight": "130%", "fontSize": 34, "letterSpacing": "-1%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyHeadline4Regular = { "fontFamily": "Poppins", "fontWeight": "Regular", "lineHeight": "130%", "fontSize": 34, "letterSpacing": "-1%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyHeadline5Bold = { "fontFamily": "Poppins", "fontWeight": "Bold", "lineHeight": "130%", "fontSize": 23, "letterSpacing": "-1%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyHeadline5Regular = { "fontFamily": "Poppins", "fontWeight": "Regular", "lineHeight": "130%", "fontSize": 23, "letterSpacing": "-1%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyLeadBold = { "fontFamily": "Poppins", "fontWeight": "Bold", "lineHeight": "150%", "fontSize": 28, "letterSpacing": "0%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyLeadRegular = { "fontFamily": "Poppins", "fontWeight": "Regular", "lineHeight": "150%", "fontSize": 28, "letterSpacing": "0%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyBodyBold = { "fontFamily": "Poppins", "fontWeight": "Bold", "lineHeight": "150%", "fontSize": 19, "letterSpacing": "0%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyBodyRegular = { "fontFamily": "Poppins", "fontWeight": "Regular", "lineHeight": "150%", "fontSize": 19, "letterSpacing": "0%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographySmallBold = { "fontFamily": "Poppins", "fontWeight": "Bold", "lineHeight": "150%", "fontSize": 16, "letterSpacing": "0%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographySmallRegular = { "fontFamily": "Poppins", "fontWeight": "Regular", "lineHeight": "150%", "fontSize": 16, "letterSpacing": "0%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyCaptionBold = { "fontFamily": "Poppins", "fontWeight": "Bold", "lineHeight": "150%", "fontSize": 13, "letterSpacing": "0%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyCaptionRegular = { "fontFamily": "Poppins", "fontWeight": "Regular", "lineHeight": "150%", "fontSize": 13, "letterSpacing": "0%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyXSmallBold = { "fontFamily": "Poppins", "fontWeight": "Bold", "lineHeight": "150%", "fontSize": 11, "letterSpacing": "0%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyXSmallRegular = { "fontFamily": "Poppins", "fontWeight": "Regular", "lineHeight": "150%", "fontSize": 11, "letterSpacing": "0%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyTinyBold = { "fontFamily": "Poppins", "fontWeight": "Bold", "lineHeight": "150%", "fontSize": 9, "letterSpacing": "0%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyTinyRegular = { "fontFamily": "Poppins", "fontWeight": "Regular", "lineHeight": "150%", "fontSize": 9, "letterSpacing": "0%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyButtonNormalBold = { "fontFamily": "Poppins", "fontWeight": "Bold", "lineHeight": "150%", "fontSize": 13, "letterSpacing": "3%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyButtonNormalRegular = { "fontFamily": "Poppins", "fontWeight": "Regular", "lineHeight": "150%", "fontSize": 13, "letterSpacing": "3%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyButtonLargeBold = { "fontFamily": "Poppins", "fontWeight": "Bold", "lineHeight": "150%", "fontSize": 16, "letterSpacing": "3%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyButtonLargeRegular = { "fontFamily": "Poppins", "fontWeight": "Regular", "lineHeight": "150%", "fontSize": 16, "letterSpacing": "3%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyButtonXLargeBold = { "fontFamily": "Poppins", "fontWeight": "Bold", "lineHeight": "150%", "fontSize": 23, "letterSpacing": "3%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyButtonXLargeRegular = { "fontFamily": "Poppins", "fontWeight": "Regular", "lineHeight": "150%", "fontSize": 23, "letterSpacing": "3%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyInputNormalBold = { "fontFamily": "Poppins", "fontWeight": "Bold", "lineHeight": "150%", "fontSize": 16, "letterSpacing": "0%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyInputNormalRegular = { "fontFamily": "Poppins", "fontWeight": "Regular", "lineHeight": "150%", "fontSize": 16, "letterSpacing": "0%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyInputLargeBold = { "fontFamily": "Poppins", "fontWeight": "Bold", "lineHeight": "150%", "fontSize": 19, "letterSpacing": "0%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const typographyInputLargeRegular = { "fontFamily": "Poppins", "fontWeight": "Regular", "lineHeight": "150%", "fontSize": 19, "letterSpacing": "0%", "paragraphSpacing": 0, "textCase": "none", "textDecoration": "none" };
const textCaseNone = "none";
const textCaseCaptions = "none";
const textCaseButtons = "none";
const textCaseHeadlines = "none";
const textDecorationNone = "none";
const textDecorationButtons = "none";
const textDecorationCaptions = "none";
const documentationHeadlinesBoldLarge = { "fontFamily": "Poppins", "fontWeight": "Bold", "lineHeight": "AUTO", "fontSize": 48, "letterSpacing": "0%", "paragraphSpacing": 0, "textDecoration": "none", "textCase": "none" };
const documentationHeadlinesBoldSmall = { "fontFamily": "Poppins", "fontWeight": "Bold", "lineHeight": "AUTO", "fontSize": 20, "letterSpacing": "0%", "paragraphSpacing": 0, "textDecoration": "none", "textCase": "none" };
const documentationHeadlinesRegularLarge = { "fontFamily": "Poppins", "fontWeight": "Regular", "lineHeight": "AUTO", "fontSize": 48, "letterSpacing": "0%", "paragraphSpacing": 0, "textDecoration": "none", "textCase": "none" };
const documentationHeadlinesRegularSmall = { "fontFamily": "Poppins", "fontWeight": "Regular", "lineHeight": "AUTO", "fontSize": 20, "letterSpacing": "0%", "paragraphSpacing": 0, "textDecoration": "none", "textCase": "none" };
const documentationHeadlinesXl = { "fontFamily": "Poppins", "fontWeight": "Bold", "lineHeight": "AUTO", "fontSize": 112, "letterSpacing": "0%", "paragraphSpacing": 0, "textDecoration": "none", "textCase": "none" };
const documentationBodyBoldLarge = { "fontFamily": "Poppins", "fontWeight": "Bold", "lineHeight": "AUTO", "fontSize": 48, "letterSpacing": "0%", "paragraphSpacing": 0, "textDecoration": "none", "textCase": "none" };
const documentationBodyBoldSmall = { "fontFamily": "Poppins", "fontWeight": "Bold", "lineHeight": "AUTO", "fontSize": 20, "letterSpacing": "0%", "paragraphSpacing": 0, "textDecoration": "none", "textCase": "none" };
const documentationBodyRegularLarge = { "fontFamily": "Poppins", "fontWeight": "Regular", "lineHeight": "AUTO", "fontSize": 48, "letterSpacing": "0%", "paragraphSpacing": 0, "textDecoration": "none", "textCase": "none" };
const documentationBodyRegularSmall = { "fontFamily": "Poppins", "fontWeight": "Regular", "lineHeight": "AUTO", "fontSize": 20, "letterSpacing": "0%", "paragraphSpacing": 0, "textDecoration": "none", "textCase": "none" };
const documentationBodyXl = { "fontFamily": "Poppins", "fontWeight": "Bold", "lineHeight": "AUTO", "fontSize": 112, "letterSpacing": "0%", "paragraphSpacing": 0, "textDecoration": "none", "textCase": "none" };
const borderRadiusZero = "Infinitypx";
const borderRadiusBase = "2px";
const borderRadiusScale = "2.5px";
const borderRadiusSmall = "5px";
const borderRadiusMedium = "13px";
const borderRadiusLarge = "33px";
const borderRadiusXlarge = "83px";
const borderRadiusStandardSmall = 2;
const borderRadiusStandardMedium = 4;
const borderRadiusStandardLarge = 8;
const borderRadiusStandardXlarge = 16;
const borderRadiusStandardPill = 9999;
const borderRadiusStandardCircle = "50px";
const spacingLinearBase = 4;
const spacingLinearScale = 4;
const spacingLinearXsmall = 4;
const spacingLinearSmall = "8px";
const spacingLinearMedium = "12px";
const spacingLinearLarge = "16px";
const spacingLinearXlarge = "20px";
const spacingLinearXxlarge = "24px";
const spacingLinearXxxlarge = "28px";
const spacingLinearXxxxlarge = "32px";
const spacingGeometricBase = 2;
const spacingGeometricSmall = 2;
const spacingGeometricMedium = "4px";
const spacingGeometricLarge = "8px";
const spacingGeometricXlarge = "16px";
const spacingGeometricXxlarge = "32px";
const spacingGeometricXxxlarge = "64px";
const spacingModularBase = "4px";
const spacingModularScale = "1.618px";
const spacingModularXsmall = "4px";
const spacingModularSmall = "6px";
const spacingModularMedium = "10px";
const spacingModularLarge = "16px";
const spacingModularXlarge = "26px";
const spacingModularXxlarge = "42px";
const spacingModularXxxlarge = "68px";
const sizingSmall = 32;
const sizingMedium = 36;
const sizingLarge = 51;
const sizingExtraLarge = 67;
const borderWidthNone = "0px";
const borderWidthXsmall = 1;
const borderWidthSmall = 2;
const borderWidthMedium = 4;
const borderWidthLarge = 8;
const opacity100 = 1;
const opacity000 = 0;
const opacity010 = 0.1;
const opacity020 = 0.2;
const opacity030 = 0.3;
const opacity040 = 0.4;
const opacity050 = 0.5;
const opacity060 = 0.6;
const opacity070 = 0.7;
const opacity080 = 0.8;
const opacity090 = 0.9;
const opacityElevationNumbra = 0.2;
const opacityElevationPenumbra = 0.14;
const opacityElevationAmbient = 0.12;
const elevation0dp = [{ "x": 0, "y": 0, "blur": 0, "spread": 0, "color": "#00000033", "type": "dropShadow" }, { "x": 0, "y": 0, "blur": 0, "spread": 0, "color": "#00000024", "type": "dropShadow" }, { "x": 0, "y": 0, "blur": 0, "spread": 0, "color": "#0000001f", "type": "dropShadow" }];
const elevation1dp = [{ "x": 0, "y": "2px", "blur": "1px", "spread": "-1px", "color": "#00000033", "type": "dropShadow" }, { "x": 0, "y": "1px", "blur": "1px", "spread": 0, "color": "#00000024", "type": "dropShadow" }, { "x": 0, "y": "1px", "blur": "3px", "spread": 0, "color": "#0000001f", "type": "dropShadow" }];
const elevation2dp = [{ "x": 0, "y": "3px", "blur": "1px", "spread": "-2px", "color": "#00000033", "type": "dropShadow" }, { "x": 0, "y": "2px", "blur": "2px", "spread": 0, "color": "#00000024", "type": "dropShadow" }, { "x": 0, "y": "1px", "blur": "5px", "spread": 0, "color": "#0000001f", "type": "dropShadow" }];
const elevation3dp = [{ "x": 0, "y": "3px", "blur": "3px", "spread": "-2px", "color": "#00000033", "type": "dropShadow" }, { "x": 0, "y": "3px", "blur": "4px", "spread": 0, "color": "#00000024", "type": "dropShadow" }, { "x": 0, "y": "1px", "blur": "8px", "spread": 0, "color": "#0000001f", "type": "dropShadow" }];
const elevation4dp = [{ "x": 0, "y": "2px", "blur": "4px", "spread": "-1px", "color": "#00000033", "type": "dropShadow" }, { "x": 0, "y": "4px", "blur": "5px", "spread": 0, "color": "#00000024", "type": "dropShadow" }, { "x": 0, "y": "1px", "blur": "10px", "spread": 0, "color": "#0000001f", "type": "dropShadow" }];
const elevation6dp = [{ "x": 0, "y": "3px", "blur": "5px", "spread": "-1px", "color": "#00000033", "type": "dropShadow" }, { "x": 0, "y": "5px", "blur": "8px", "spread": 0, "color": "#00000024", "type": "dropShadow" }, { "x": 0, "y": "1px", "blur": "14px", "spread": 0, "color": "#0000001f", "type": "dropShadow" }];
const elevation8dp = [{ "x": 0, "y": "5px", "blur": "5px", "spread": "-3px", "color": "#00000033", "type": "dropShadow" }, { "x": 0, "y": "8px", "blur": "10px", "spread": "1px", "color": "#00000024", "type": "dropShadow" }, { "x": 0, "y": "3px", "blur": "14px", "spread": "2px", "color": "#0000001f", "type": "dropShadow" }];
const elevation12dp = [{ "x": 0, "y": "7px", "blur": "8px", "spread": "-4px", "color": "#00000033", "type": "dropShadow" }, { "x": 0, "y": "12px", "blur": "17px", "spread": "2px", "color": "#00000024", "type": "dropShadow" }, { "x": 0, "y": "5px", "blur": "22px", "spread": "4px", "color": "#0000001f", "type": "dropShadow" }];
const elevation16dp = [{ "x": 0, "y": "8px", "blur": "10px", "spread": "-5px", "color": "#00000033", "type": "dropShadow" }, { "x": 0, "y": "16px", "blur": "24px", "spread": "2px", "color": "#00000024", "type": "dropShadow" }, { "x": 0, "y": "6px", "blur": "30px", "spread": "5px", "color": "#0000001f", "type": "dropShadow" }];
const elevation24dp = [{ "x": 0, "y": "11px", "blur": "15px", "spread": "-7px", "color": "#00000033", "type": "dropShadow" }, { "x": 0, "y": "24px", "blur": "38px", "spread": "3px", "color": "#00000024", "type": "dropShadow" }, { "x": 0, "y": "9px", "blur": "46px", "spread": "8px", "color": "#0000001f", "type": "dropShadow" }];
const shadowNumbra = "#00000033";
const shadowPenumbra = "#00000024";
const shadowAmbient = "#0000001f";

const base = css `
  appearance: none;
  padding: ${mwComponentButtonPrimarySecondaryPaddingTb} ${mwComponentButtonPrimarySecondaryPaddingLr};
  font-family: '${typographyButtonLargeBold.fontFamily}';
  letter-spacing: ${typographyButtonLargeBold.letterSpacing};
  line-height: ${typographyButtonLargeBold.lineHeight};
  font-weight: ${getFontWeightValue(typographyButtonLargeBold.fontWeight)};
  font-size: ${typographyButtonLargeBold.fontSize}px;
  border-radius: ${mwComponentButtonBorderRadiusDefault}px;
  min-width: ${mwComponentButtonPrimarySecondaryMinWidth}px;
`;
const primaryButtonStyles = css `
  ${base};
  border: ${mwComponentButtonBorderWidthPrimaryDefault};
  color: ${mwComponentButtonPrimaryColorFgDefault};
  background-color: ${mwComponentButtonPrimaryColorBgDefault};
  &:hover {
    background-color: ${mwComponentButtonPrimaryColorBgHover};
    color: ${mwComponentButtonPrimaryColorFgHover};
  }
  &:focus {
    background-color: ${mwComponentButtonPrimaryColorBgFocused};
    color: ${mwComponentButtonPrimaryColorFgFocused};
  }
  &:active {
    background-color: ${mwComponentButtonPrimaryColorBgPressed};
    color: ${mwComponentButtonPrimaryColorFgPressed};
  }
  &:disabled {
    background-color: ${mwComponentButtonPrimaryColorBgDisabled};
    color: ${mwComponentButtonPrimaryColorFgDisabled};
  }
`;
const secondaryButtonStyles = css `
  ${base};
  border: ${mwComponentButtonBorderWidthSecondaryDefault}px solid;
  color: ${mwComponentButtonSecondaryColorFgDefault};
  background-color: ${mwComponentButtonSecondaryColorBgDefault};
  border-color: ${mwComponentButtonSecondaryColorOutlineDefault};
  &:hover {
    border-color: ${mwComponentButtonSecondaryColorOutlineHover};
    color: ${mwComponentButtonSecondaryColorFgHover};
  }
  &:focus {
    border-color: ${mwComponentButtonSecondaryColorOutlineFocused};
    color: ${mwComponentButtonSecondaryColorFgFocused};
  }
  &:active {
    border-color: ${mwComponentButtonSecondaryColorOutlinePressed};
    color: ${mwComponentButtonSecondaryColorFgPressed};
  }
  &:disabled {
    border: ${mwComponentButtonBorderWidthSecondaryDefault}px solid;
    border-color: ${mwComponentButtonSecondaryColorOutlineDisabled};
    color: ${mwComponentButtonSecondaryColorFgDisabled};
  }
`;
const iconStartStyles = css `
  margin-right: ${mwComponentButtonPrimarySecondaryGap};
`;
const iconEndStyles = css `
  margin-left: ${mwComponentButtonPrimarySecondaryGap};
`;
const TlmButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickEmitter = createEvent(this, "clickEmitter", 4);
    this.handleClick = () => {
      this.clickEmitter.emit('onClick');
    };
  }
  componentWillLoad() {
    this.hasIconStartSlot = !!this.hostElement.querySelector('[slot="icon-start"]');
    this.hasIconEndSlot = !!this.hostElement.querySelector('[slot="icon-end"]');
  }
  render() {
    return (h$1("button", { disabled: this.disabled, onClick: this.handleClick, class: this.secondary ? secondaryButtonStyles : primaryButtonStyles, "test-id": this.testId, type: "button" }, this.hasIconStartSlot && (h$1("span", { class: iconStartStyles }, h$1("slot", { name: "icon-start" }))), h$1("slot", null), this.hasIconEndSlot && (h$1("span", { class: iconEndStyles }, h$1("slot", { name: "icon-end" })))));
  }
  get hostElement() { return getElement(this); }
};

export { TlmButton as tlm_button };
