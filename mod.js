// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,l=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var c,a,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(l.call(t,e)||f.call(t,e)?(c=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=c):t[e]=r.value),y="get"in r,p="set"in r,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,e,r.get),p&&i&&i.call(t,e,r.set),t};var c=e;function a(t,e,r){c(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var y=/./;function p(t){return"boolean"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function g(t,e){return null!=t&&v.call(t,e)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var h=b()?function(t){var e,r,n;if(null==t)return d.call(t);r=t[m],e=g(t,m);try{t[m]=void 0}catch(e){return d.call(t)}return n=d.call(t),e?t[m]=r:delete t[m],n}:function(t){return d.call(t)},w=Boolean.prototype.toString;var _=b();function j(t){return"object"==typeof t&&(t instanceof Boolean||(_?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===h(t)))}function S(t){return p(t)||j(t)}function E(){return new Function("return this;")()}a(S,"isPrimitive",p),a(S,"isObject",j);var O="object"==typeof self?self:null,A="object"==typeof window?window:null,B="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},T="object"==typeof B?B:null;var P=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(O)return O;if(A)return A;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),x=P.document&&P.document.childNodes,C=Int8Array;function V(){return/^\s*function\s*([^(]*)/i}var k=/^\s*function\s*([^(]*)/i;a(V,"REGEXP",k);var G=Array.isArray?Array.isArray:function(t){return"[object Array]"===h(t)};function L(t){return null!==t&&"object"==typeof t}function M(t){var e,r,n,o;if(("Object"===(r=h(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=k.exec(n.toString()))return e[1]}return L(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(L,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!G(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(L));var F="function"==typeof y||"object"==typeof C||"function"==typeof x?function(t){return M(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?M(t).toLowerCase():e};function I(t){return"function"===F(t)}var R=Math.floor;function U(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&(e=t.length,R(e)===e)&&t.length>=0&&t.length<=9007199254740991;var e}var N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&g(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function X(t,e){return t[e]}function q(t,e){return t.get(e)}function z(t,e,r){t[e]=r}function D(t,e,r){t.set(r,e)}function H(t){var e=Boolean(t.get&&t.set);return{data:t,accessors:e,getter:e?q:X,setter:e?D:z}}function J(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}function K(t){var e,r,n,o,u,i,l;if(!U(t))throw new TypeError(J("00o2a",t));if(arguments.length>1){if(!I(o=arguments[1]))throw new TypeError(J("00o2S",o));e=arguments[2]}return u=t.length,l=u,a(r={},"next",o?f:c),a(r,"return",y),N&&a(r,N,p),i=H(t).getter,r;function f(){if(n)return{done:!0};for(l+=t.length-u-1,u=t.length;l>=0&&void 0===i(t,l);)l-=1;return l<0?(n=!0,{done:!0}):{value:o.call(e,i(t,l),l,t),done:!1}}function c(){if(n)return{done:!0};for(l+=t.length-u-1,u=t.length;l>=0&&void 0===i(t,l);)l-=1;return l<0?(n=!0,{done:!0}):{value:i(t,l),done:!1}}function y(t){return n=!0,arguments.length?{value:t,done:!0}:{done:!0}}function p(){return o?K(t,o,e):K(t)}}export{K as default};
//# sourceMappingURL=mod.js.map