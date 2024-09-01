// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@v0.2.4-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function n(r,o){if(!(this instanceof n))throw new TypeError(s("null0G"));if(!t(r))throw new TypeError(s("null3e",r));if(!t(o))throw new TypeError(s("null3f",o));return e(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:i(r)}),e(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:i(o)}),this}r(n,"BYTES_PER_ELEMENT",4),r(n.prototype,"BYTES_PER_ELEMENT",4),r(n.prototype,"byteLength",8),r(n.prototype,"toString",(function(){var t=""+this.re;return this.im<0?t+=" - "+-this.im:t+=" + "+this.im,t+="i"})),r(n.prototype,"toJSON",(function(){var t={type:"Complex64"};return t.re=this.re,t.im=this.im,t}));export{n as default};
//# sourceMappingURL=index.mjs.map
