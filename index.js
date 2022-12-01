// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).sparsearray2iteratorRight=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,l=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var c,a,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(l.call(t,e)||f.call(t,e)?(c=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=c):t[e]=r.value),y="get"in r,p="set"in r,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,e,r.get),p&&i&&i.call(t,e,r.set),t};var c=e;function a(t,e,r){c(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var y=/./;function p(t){return"boolean"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function g(t,e){return null!=t&&v.call(t,e)}var h="function"==typeof Symbol?Symbol.toStringTag:"";var m=b()?function(t){var e,r,n;if(null==t)return d.call(t);r=t[h],e=g(t,h);try{t[h]=void 0}catch(e){return d.call(t)}return n=d.call(t),e?t[h]=r:delete t[h],n}:function(t){return d.call(t)},_=Boolean.prototype.toString;var j=b();function w(t){return"object"==typeof t&&(t instanceof Boolean||(j?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===m(t)))}function S(t){return p(t)||w(t)}function E(){return new Function("return this;")()}a(S,"isPrimitive",p),a(S,"isObject",w);var O="object"==typeof self?self:null,T="object"==typeof window?window:null,A="object"==typeof global?global:null;var B=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(O)return O;if(T)return T;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),P=B.document&&B.document.childNodes,x=Int8Array;function C(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;a(C,"REGEXP",V);var k=Array.isArray?Array.isArray:function(t){return"[object Array]"===m(t)};function G(t){return null!==t&&"object"==typeof t}function L(t){var e,r,n,o;if(("Object"===(r=m(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=V.exec(n.toString()))return e[1]}return G(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(G,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!k(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(G));var M="function"==typeof y||"object"==typeof x||"function"==typeof P?function(t){return L(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?L(t).toLowerCase():e};function R(t){return"function"===M(t)}var F=Math.floor;function I(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&(e=t.length,F(e)===e)&&t.length>=0&&t.length<=9007199254740991;var e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&g(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function N(t,e){return t[e]}function X(t,e){return t.get(e)}function q(t,e,r){t[e]=r}function z(t,e,r){t.set(r,e)}function D(t){var e=Boolean(t.get&&t.set);return{data:t,accessors:e,getter:e?X:N,setter:e?z:q}}function H(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}return function t(e){var r,n,o,u,i,l,f;if(!I(e))throw new TypeError(H("00o2a",e));if(arguments.length>1){if(!R(u=arguments[1]))throw new TypeError(H("00o2S",u));r=arguments[2]}return i=e.length,f=i,a(n={},"next",u?c:y),a(n,"return",p),U&&a(n,U,s),l=D(e).getter,n;function c(){if(o)return{done:!0};for(f+=e.length-i-1,i=e.length;f>=0&&void 0===l(e,f);)f-=1;return f<0?(o=!0,{done:!0}):{value:u.call(r,l(e,f),f,e),done:!1}}function y(){if(o)return{done:!0};for(f+=e.length-i-1,i=e.length;f>=0&&void 0===l(e,f);)f-=1;return f<0?(o=!0,{done:!0}):{value:l(e,f),done:!1}}function p(t){return o=!0,arguments.length?{value:t,done:!0}:{done:!0}}function s(){return u?t(e,u,r):t(e)}}}));
//# sourceMappingURL=index.js.map