!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const r=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol();class o{constructor(t,e){if(e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return r&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const s=new Map,a=t=>{let e=s.get(t);return void 0===e&&s.set(t,e=new o(t,i)),e},l=(t,...e)=>{const n=1===t.length?t[0]:e.reduce((e,n,r)=>e+(t=>{if(t instanceof o)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[r+1],t[0]);return a(n)},c=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return(t=>a("string"==typeof t?t:t+""))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var u,h,d,p;const f={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},v=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:v};class m extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,n)=>{const r=this.Πp(n,e);void 0!==r&&(this.Πm.set(r,n),t.push(r))}),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const n="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,n,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(r){const i=this[t];this[e]=r,this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of e)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static"Πp"(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise(t=>this.enableUpdating=t),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,n;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(n=t.hostConnected)||void 0===n||n.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{r?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const n=document.createElement("style");n.textContent=e.cssText,t.appendChild(n)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}),this.Πo=new Promise(t=>this.Πl=t)}attributeChangedCallback(t,e,n){this.K(t,n)}"Πj"(t,e,n=g){var r,i;const o=this.constructor.Πp(t,n);if(void 0!==o&&!0===n.reflect){const s=(null!==(i=null===(r=n.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==i?i:f.toAttribute)(e,n.type);this.Πh=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this.Πh=null}}K(t,e){var n,r,i;const o=this.constructor,s=o.Πm.get(t);if(void 0!==s&&this.Πh!==s){const t=o.getPropertyOptions(s),a=t.converter,l=null!==(i=null!==(r=null===(n=a)||void 0===n?void 0:n.fromAttribute)&&void 0!==r?r:"function"==typeof a?a:null)&&void 0!==i?i:f.fromAttribute;this.Πh=s,this[s]=l(e,t.type),this.Πh=null}}requestUpdate(t,e,n){let r=!0;void 0!==t&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===n.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,n))):r=!1),!this.isUpdatePending&&r&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach((t,e)=>this[e]=t),this.Πi=void 0);let e=!1;const n=this.L;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(n)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(n)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach((t,e)=>this.Πj(e,this[e],t)),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var y,b,w,x;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null===(h=(u=globalThis).reactiveElementPlatformSupport)||void 0===h||h.call(u,{ReactiveElement:m}),(null!==(d=(p=globalThis).reactiveElementVersions)&&void 0!==d?d:p.reactiveElementVersions=[]).push("1.0.0-rc.2");const S=globalThis.trustedTypes,M=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,C="?"+$,P=`<${C}>`,k=document,O=(t="")=>k.createComment(t),E=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,A=t=>{var e;return R(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,B=/>/g,N=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,H=/'/g,U=/"/g,I=/^(?:script|style|textarea)$/i,q=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),D=q(1),z=(q(2),Symbol.for("lit-noChange")),L=Symbol.for("lit-nothing"),_=new WeakMap,V=k.createTreeWalker(k,129,null,!1),F=(t,e)=>{const n=t.length-1,r=[];let i,o=2===e?"<svg>":"",s=j;for(let e=0;e<n;e++){const n=t[e];let a,l,c=-1,u=0;for(;u<n.length&&(s.lastIndex=u,l=s.exec(n),null!==l);)u=s.lastIndex,s===j?"!--"===l[1]?s=T:void 0!==l[1]?s=B:void 0!==l[2]?(I.test(l[2])&&(i=RegExp("</"+l[2],"g")),s=N):void 0!==l[3]&&(s=N):s===N?">"===l[0]?(s=null!=i?i:j,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?N:'"'===l[3]?U:H):s===U||s===H?s=N:s===T||s===B?s=j:(s=N,i=void 0);const h=s===N&&t[e+1].startsWith("/>")?" ":"";o+=s===j?n+P:c>=0?(r.push(a),n.slice(0,c)+"$lit$"+n.slice(c)+$+h):n+$+(-2===c?(r.push(void 0),e):h)}const a=o+(t[n]||"<?>")+(2===e?"</svg>":"");return[void 0!==M?M.createHTML(a):a,r]};class W{constructor({strings:t,_$litType$:e},n){let r;this.parts=[];let i=0,o=0;const s=t.length-1,a=this.parts,[l,c]=F(t,e);if(this.el=W.createElement(l,n),V.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=V.nextNode())&&a.length<s;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const n=c[o++];if(t.push(e),void 0!==n){const t=r.getAttribute(n.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(n);a.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?X:"?"===e[1]?K:"@"===e[1]?J:Y})}else a.push({type:6,index:i})}for(const e of t)r.removeAttribute(e)}if(I.test(r.tagName)){const t=r.textContent.split($),e=t.length-1;if(e>0){r.textContent=S?S.emptyScript:"";for(let n=0;n<e;n++)r.append(t[n],O()),V.nextNode(),a.push({type:2,index:++i});r.append(t[e],O())}}}else if(8===r.nodeType)if(r.data===C)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=r.data.indexOf($,t+1));)a.push({type:7,index:i}),t+=$.length-1}i++}}static createElement(t,e){const n=k.createElement("template");return n.innerHTML=t,n}}function G(t,e,n=t,r){var i,o,s,a;if(e===z)return e;let l=void 0!==r?null===(i=n.Σi)||void 0===i?void 0:i[r]:n.Σo;const c=E(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l.O)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l.T(t,n,r)),void 0!==r?(null!==(s=(a=n).Σi)&&void 0!==s?s:a.Σi=[])[r]=l:n.Σo=l),void 0!==l&&(e=G(t,l.S(t,e.values),l,r)),e}class Q{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:n},parts:r}=this.D,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:k).importNode(n,!0);V.currentNode=i;let o=V.nextNode(),s=0,a=0,l=r[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new Z(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new tt(o,this,t)),this.l.push(e),l=r[++a]}s!==(null==l?void 0:l.index)&&(o=V.nextNode(),s++)}return i}v(t){let e=0;for(const n of this.l)void 0!==n&&(void 0!==n.strings?(n.I(t,n,e),e+=n.strings.length-2):n.I(t[e])),e++}}class Z{constructor(t,e,n,r){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=n,this.options=r}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=G(this,t,e),E(t)?t===L||null==t||""===t?(this.H!==L&&this.R(),this.H=L):t!==this.H&&t!==z&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):A(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(k.createTextNode(t)),this.H=t}_(t){var e;const{values:n,_$litType$:r}=t,i="number"==typeof r?this.C(t):(void 0===r.el&&(r.el=W.createElement(r.h,this.options)),r);if((null===(e=this.H)||void 0===e?void 0:e.D)===i)this.H.v(n);else{const t=new Q(i,this),e=t.u(this.options);t.v(n),this.$(e),this.H=t}}C(t){let e=_.get(t.strings);return void 0===e&&_.set(t.strings,e=new W(t)),e}g(t){R(this.H)||(this.H=[],this.R());const e=this.H;let n,r=0;for(const i of t)r===e.length?e.push(n=new Z(this.k(O()),this.k(O()),this,this.options)):n=e[r],n.I(i),r++;r<e.length&&(this.R(n&&n.B.nextSibling,r),e.length=r)}R(t=this.A.nextSibling,e){var n;for(null===(n=this.P)||void 0===n||n.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class Y{constructor(t,e,n,r,i){this.type=1,this.H=L,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=r,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this.H=Array(n.length-1).fill(L),this.strings=n):this.H=L}get tagName(){return this.element.tagName}I(t,e=this,n,r){const i=this.strings;let o=!1;if(void 0===i)t=G(this,t,e,0),o=!E(t)||t!==this.H&&t!==z,o&&(this.H=t);else{const r=t;let s,a;for(t=i[0],s=0;s<i.length-1;s++)a=G(this,r[n+s],e,s),a===z&&(a=this.H[s]),o||(o=!E(a)||a!==this.H[s]),a===L?t=L:t!==L&&(t+=(null!=a?a:"")+i[s+1]),this.H[s]=a}o&&!r&&this.W(t)}W(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class X extends Y{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===L?void 0:t}}class K extends Y{constructor(){super(...arguments),this.type=4}W(t){t&&t!==L?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class J extends Y{constructor(){super(...arguments),this.type=5}I(t,e=this){var n;if((t=null!==(n=G(this,t,e,0))&&void 0!==n?n:L)===z)return;const r=this.H,i=t===L&&r!==L||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==L&&(r===L||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,n;"function"==typeof this.H?this.H.call(null!==(n=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==n?n:this.element,t):this.H.handleEvent(t)}}class tt{constructor(t,e,n){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=n}I(t){G(this,t)}}const et={Z:"$lit$",U:$,Y:C,q:1,X:F,tt:Q,it:A,st:G,et:Z,ot:Y,nt:K,rt:J,lt:X,ht:tt};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var nt,rt,it,ot,st,at;null===(b=(y=globalThis).litHtmlPlatformSupport)||void 0===b||b.call(y,W,Z),(null!==(w=(x=globalThis).litHtmlVersions)&&void 0!==w?w:x.litHtmlVersions=[]).push("2.0.0-rc.3");(null!==(nt=(at=globalThis).litElementVersions)&&void 0!==nt?nt:at.litElementVersions=[]).push("3.0.0-rc.2");class lt extends m{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const n=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=n.firstChild),n}update(t){const e=this.render();super.update(t),this.Φt=((t,e,n)=>{var r,i;const o=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:e;let s=o._$litPart$;if(void 0===s){const t=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:null;o._$litPart$=s=new Z(e.insertBefore(O(),t),t,void 0,n)}return s.I(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return z}}lt.finalized=!0,lt._$litElement$=!0,null===(it=(rt=globalThis).litElementHydrateSupport)||void 0===it||it.call(rt,{LitElement:lt}),null===(st=(ot=globalThis).litElementPlatformSupport)||void 0===st||st.call(ot,{LitElement:lt});const ct=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:r}=e;return{kind:n,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ut=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t){return(e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t)})(t,e,n):ut(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt=Element.prototype;dt.msMatchesSelector||dt.webkitMatchesSelector;var pt=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let ft=class extends lt{constructor(){super(...arguments),this.active=!0}render(){return D` <pop-up color="paleturquoise" .active=${this.active}>
      <div>
        <h1>
          Colorways
          <small><a href="https://github.com/kjin/colorways">v0.0.1</a></small>
        </h1>
        <h2>Objective</h2>
        <p>
          Use the color adjustment buttons to adjust the current color (top) to
          match the target color (bottom). Try to make as few adjustments as
          possible!
        </p>
        <p>Stumped? Get a hint by holding down on a color row.</p>
        <p class="white">
          Colorways works best on phones and phone-shaped browser windows!
        </p>
      </div>
    </pop-up>`}};ft.styles=l`
    div {
      font-family: "Quicksand";
      color: cadetblue;
      user-select: none;
    }
    :host {
      background-color: black;
    }
    h1,
    h2,
    p,
    b {
      margin: 5px;
    }
    h1 {
      text-align: center;
      font-size: 40px;
      color: lightcyan;
    }
    small {
      font-size: 12px;
    }
    span {
      border-radius: 4px;
      padding: 2px;
    }
    /* Not really what <b> is used for, but whatever */
    .white {
      color: white;
    }
  `,pt([ht({type:Boolean})],ft.prototype,"active",void 0),ft=pt([ct("about-panel")],ft);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const vt=1,gt=2,mt=t=>(...e)=>({_$litDirective$:t,values:e});class yt{constructor(t){}T(t,e,n){this.Σdt=t,this.M=e,this.Σct=n}S(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=mt(class extends yt{constructor(t){var e;if(super(t),t.type!==vt||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return null==r?e:e+`${n=n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(t,[e]){const{style:n}=t.element;if(void 0===this.St){this.St=new Set;for(const t in e)this.St.add(t);return this.render(e)}this.St.forEach(t=>{null==e[t]&&(this.St.delete(t),t.includes("-")?n.removeProperty(t):n[t]="")});for(const t in e){const r=e[t];null!=r&&(this.St.add(t),t.includes("-")?n.setProperty(t,r):n[t]=r)}return z}});function wt(t){return[.2126,.7152,.0722].reduce((e,n,r)=>e+n*t[r],0)/256}function xt(t){return t.map(t=>255-t)}function St(t,e,n=2){return wt(t)>=n?Mt(t,e):t.map(t=>255-Math.ceil((255-t)*(1-e)))}function Mt(t,e,n=-1){return wt(t)<=n?St(t,e):t.map(t=>Math.floor(t*(1-e)))}function $t(t){const e=t.toString(16);return 1===e.length?"0"+e:e}function Ct(t){return"#"+t.map($t).join("")}function Pt(t,e,n){if([...t,...e].some(t=>t%n!=0))throw new Error(`Cannot compute moves for ${t} -> ${e} with interval=${n}`);return e.map((e,r)=>(e-t[r])/n).map(Math.abs).reduce((t,e)=>t+e,0)}var kt=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Ot=class extends lt{constructor(){super(...arguments),this.delta=[0,0,0],this.intensity=0,this.active=!1}render(){let t=this.intensity>0?"+":this.intensity<0?"–":0;return D`<div
      @click=${this.onClick}
      style=${bt({"background-color":Ct(St(this.delta.map(t=>t?255:0),this.active?0:.75)),color:Ct(St(this.delta.map(t=>t?255:0),1))})}
    >
      ${t}
    </div>`}onClick(){this.active&&this.dispatchEvent(new CustomEvent("color-incremented",{detail:{delta:this.delta.map(t=>t*this.intensity)},bubbles:!0,composed:!0}))}};Ot.styles=l`
    div {
      display: flex;
      padding: 8px;
      margin: 1px;
      border-radius: 5px;
      font-family: "Quicksand";
      font-size: 18px;
      justify-content: center;
      border-style: none;
      user-select: none;
    }
    :host {
      width: 100%;
      min-width: 20px;
      max-width: 40px;
    }
  `,kt([ht({type:Array})],Ot.prototype,"delta",void 0),kt([ht({type:Number})],Ot.prototype,"intensity",void 0),kt([ht({type:Boolean})],Ot.prototype,"active",void 0),Ot=kt([ct("color-button")],Ot);var Et=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Rt=class extends lt{constructor(){super(...arguments),this.interval=1,this.current=[0,0,0],this.active=!0}render(){return D`<div>
      ${[[1,0,0],[0,1,0],[0,0,1]].flatMap(t=>[-this.interval,this.interval].map(e=>D`<color-button
            .delta=${t}
            intensity=${e}
            ?active=${this.active&&t.map((t,n)=>t*e+this.current[n]).every(t=>t>=0&&t<=255)}
          ></color-button>`))}
    </div>`}};Rt.styles=l`
    div {
      display: flex;
      justify-content: flex-start;
    }
    :host {
      flex-grow: 1;
      width: 100%;
    }
  `,Et([ht({type:Number})],Rt.prototype,"interval",void 0),Et([ht({type:Array})],Rt.prototype,"current",void 0),Et([ht({type:Boolean})],Rt.prototype,"active",void 0),Rt=Et([ct("color-buttons")],Rt);var At={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},jt={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},Tt=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],Bt={CSS:{},springs:{}};function Nt(t,e,n){return Math.min(Math.max(t,e),n)}function Ht(t,e){return t.indexOf(e)>-1}function Ut(t,e){return t.apply(null,e)}var It={arr:function(t){return Array.isArray(t)},obj:function(t){return Ht(Object.prototype.toString.call(t),"Object")},pth:function(t){return It.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},inp:function(t){return t instanceof HTMLInputElement},dom:function(t){return t.nodeType||It.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},nil:function(t){return It.und(t)||null===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return It.hex(t)||It.rgb(t)||It.hsl(t)},key:function(t){return!At.hasOwnProperty(t)&&!jt.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}};function qt(t){var e=/\(([^)]+)\)/.exec(t);return e?e[1].split(",").map((function(t){return parseFloat(t)})):[]}function Dt(t,e){var n=qt(t),r=Nt(It.und(n[0])?1:n[0],.1,100),i=Nt(It.und(n[1])?100:n[1],.1,100),o=Nt(It.und(n[2])?10:n[2],.1,100),s=Nt(It.und(n[3])?0:n[3],.1,100),a=Math.sqrt(i/r),l=o/(2*Math.sqrt(i*r)),c=l<1?a*Math.sqrt(1-l*l):0,u=l<1?(l*a-s)/c:-s+a;function h(t){var n=e?e*t/1e3:t;return n=l<1?Math.exp(-n*l*a)*(1*Math.cos(c*n)+u*Math.sin(c*n)):(1+u*n)*Math.exp(-n*a),0===t||1===t?t:1-n}return e?h:function(){var e=Bt.springs[t];if(e)return e;for(var n=0,r=0;;)if(1===h(n+=1/6)){if(++r>=16)break}else r=0;var i=n*(1/6)*1e3;return Bt.springs[t]=i,i}}function zt(t){return void 0===t&&(t=10),function(e){return Math.ceil(Nt(e,1e-6,1)*t)*(1/t)}}var Lt,_t,Vt=function(){function t(t,e){return 1-3*e+3*t}function e(t,e){return 3*e-6*t}function n(t){return 3*t}function r(r,i,o){return((t(i,o)*r+e(i,o))*r+n(i))*r}function i(r,i,o){return 3*t(i,o)*r*r+2*e(i,o)*r+n(i)}return function(t,e,n,o){if(0<=t&&t<=1&&0<=n&&n<=1){var s=new Float32Array(11);if(t!==e||n!==o)for(var a=0;a<11;++a)s[a]=r(.1*a,t,n);return function(i){return t===e&&n===o||0===i||1===i?i:r(l(i),e,o)}}function l(e){for(var o=0,a=1;10!==a&&s[a]<=e;++a)o+=.1;--a;var l=o+.1*((e-s[a])/(s[a+1]-s[a])),c=i(l,t,n);return c>=.001?function(t,e,n,o){for(var s=0;s<4;++s){var a=i(e,n,o);if(0===a)return e;e-=(r(e,n,o)-t)/a}return e}(e,l,t,n):0===c?l:function(t,e,n,i,o){var s,a,l=0;do{(s=r(a=e+(n-e)/2,i,o)-t)>0?n=a:e=a}while(Math.abs(s)>1e-7&&++l<10);return a}(e,o,o+.1,t,n)}}}(),Ft=(Lt={linear:function(){return function(t){return t}}},_t={Sine:function(){return function(t){return 1-Math.cos(t*Math.PI/2)}},Circ:function(){return function(t){return 1-Math.sqrt(1-t*t)}},Back:function(){return function(t){return t*t*(3*t-2)}},Bounce:function(){return function(t){for(var e,n=4;t<((e=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*e-2)/22-t,2)}},Elastic:function(t,e){void 0===t&&(t=1),void 0===e&&(e=.5);var n=Nt(t,1,10),r=Nt(e,.1,2);return function(t){return 0===t||1===t?t:-n*Math.pow(2,10*(t-1))*Math.sin((t-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(t,e){_t[t]=function(){return function(t){return Math.pow(t,e+2)}}})),Object.keys(_t).forEach((function(t){var e=_t[t];Lt["easeIn"+t]=e,Lt["easeOut"+t]=function(t,n){return function(r){return 1-e(t,n)(1-r)}},Lt["easeInOut"+t]=function(t,n){return function(r){return r<.5?e(t,n)(2*r)/2:1-e(t,n)(-2*r+2)/2}},Lt["easeOutIn"+t]=function(t,n){return function(r){return r<.5?(1-e(t,n)(1-2*r))/2:(e(t,n)(2*r-1)+1)/2}}})),Lt);function Wt(t,e){if(It.fnc(t))return t;var n=t.split("(")[0],r=Ft[n],i=qt(t);switch(n){case"spring":return Dt(t,e);case"cubicBezier":return Ut(Vt,i);case"steps":return Ut(zt,i);default:return Ut(r,i)}}function Gt(t){try{return document.querySelectorAll(t)}catch(t){return}}function Qt(t,e){for(var n=t.length,r=arguments.length>=2?arguments[1]:void 0,i=[],o=0;o<n;o++)if(o in t){var s=t[o];e.call(r,s,o,t)&&i.push(s)}return i}function Zt(t){return t.reduce((function(t,e){return t.concat(It.arr(e)?Zt(e):e)}),[])}function Yt(t){return It.arr(t)?t:(It.str(t)&&(t=Gt(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function Xt(t,e){return t.some((function(t){return t===e}))}function Kt(t){var e={};for(var n in t)e[n]=t[n];return e}function Jt(t,e){var n=Kt(t);for(var r in t)n[r]=e.hasOwnProperty(r)?e[r]:t[r];return n}function te(t,e){var n=Kt(t);for(var r in e)n[r]=It.und(t[r])?e[r]:t[r];return n}function ee(t){return It.rgb(t)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=t))?"rgba("+n[1]+",1)":e:It.hex(t)?function(t){var e=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(t,e,n,r){return e+e+n+n+r+r})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(t):It.hsl(t)?function(t){var e,n,r,i=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),o=parseInt(i[1],10)/360,s=parseInt(i[2],10)/100,a=parseInt(i[3],10)/100,l=i[4]||1;function c(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}if(0==s)e=n=r=a;else{var u=a<.5?a*(1+s):a+s-a*s,h=2*a-u;e=c(h,u,o+1/3),n=c(h,u,o),r=c(h,u,o-1/3)}return"rgba("+255*e+","+255*n+","+255*r+","+l+")"}(t):void 0;var e,n}function ne(t){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);if(e)return e[1]}function re(t,e){return It.fnc(t)?t(e.target,e.id,e.total):t}function ie(t,e){return t.getAttribute(e)}function oe(t,e,n){if(Xt([n,"deg","rad","turn"],ne(e)))return e;var r=Bt.CSS[e+n];if(!It.und(r))return r;var i=document.createElement(t.tagName),o=t.parentNode&&t.parentNode!==document?t.parentNode:document.body;o.appendChild(i),i.style.position="absolute",i.style.width=100+n;var s=100/i.offsetWidth;o.removeChild(i);var a=s*parseFloat(e);return Bt.CSS[e+n]=a,a}function se(t,e,n){if(e in t.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=t.style[e]||getComputedStyle(t).getPropertyValue(r)||"0";return n?oe(t,i,n):i}}function ae(t,e){return It.dom(t)&&!It.inp(t)&&(!It.nil(ie(t,e))||It.svg(t)&&t[e])?"attribute":It.dom(t)&&Xt(Tt,e)?"transform":It.dom(t)&&"transform"!==e&&se(t,e)?"css":null!=t[e]?"object":void 0}function le(t){if(It.dom(t)){for(var e,n=t.style.transform||"",r=/(\w+)\(([^)]*)\)/g,i=new Map;e=r.exec(n);)i.set(e[1],e[2]);return i}}function ce(t,e,n,r){var i=Ht(e,"scale")?1:0+function(t){return Ht(t,"translate")||"perspective"===t?"px":Ht(t,"rotate")||Ht(t,"skew")?"deg":void 0}(e),o=le(t).get(e)||i;return n&&(n.transforms.list.set(e,o),n.transforms.last=e),r?oe(t,o,r):o}function ue(t,e,n,r){switch(ae(t,e)){case"transform":return ce(t,e,r,n);case"css":return se(t,e,n);case"attribute":return ie(t,e);default:return t[e]||0}}function he(t,e){var n=/^(\*=|\+=|-=)/.exec(t);if(!n)return t;var r=ne(t)||0,i=parseFloat(e),o=parseFloat(t.replace(n[0],""));switch(n[0][0]){case"+":return i+o+r;case"-":return i-o+r;case"*":return i*o+r}}function de(t,e){if(It.col(t))return ee(t);if(/\s/g.test(t))return t;var n=ne(t),r=n?t.substr(0,t.length-n.length):t;return e?r+e:r}function pe(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function fe(t){for(var e,n=t.points,r=0,i=0;i<n.numberOfItems;i++){var o=n.getItem(i);i>0&&(r+=pe(e,o)),e=o}return r}function ve(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return function(t){return 2*Math.PI*ie(t,"r")}(t);case"rect":return function(t){return 2*ie(t,"width")+2*ie(t,"height")}(t);case"line":return function(t){return pe({x:ie(t,"x1"),y:ie(t,"y1")},{x:ie(t,"x2"),y:ie(t,"y2")})}(t);case"polyline":return fe(t);case"polygon":return function(t){var e=t.points;return fe(t)+pe(e.getItem(e.numberOfItems-1),e.getItem(0))}(t)}}function ge(t,e){var n=e||{},r=n.el||function(t){for(var e=t.parentNode;It.svg(e)&&It.svg(e.parentNode);)e=e.parentNode;return e}(t),i=r.getBoundingClientRect(),o=ie(r,"viewBox"),s=i.width,a=i.height,l=n.viewBox||(o?o.split(" "):[0,0,s,a]);return{el:r,viewBox:l,x:l[0]/1,y:l[1]/1,w:s,h:a,vW:l[2],vH:l[3]}}function me(t,e,n){function r(n){void 0===n&&(n=0);var r=e+n>=1?e+n:0;return t.el.getPointAtLength(r)}var i=ge(t.el,t.svg),o=r(),s=r(-1),a=r(1),l=n?1:i.w/i.vW,c=n?1:i.h/i.vH;switch(t.property){case"x":return(o.x-i.x)*l;case"y":return(o.y-i.y)*c;case"angle":return 180*Math.atan2(a.y-s.y,a.x-s.x)/Math.PI}}function ye(t,e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=de(It.pth(t)?t.totalLength:t,e)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:It.str(t)||e?r.split(n):[]}}function be(t){return Qt(t?Zt(It.arr(t)?t.map(Yt):Yt(t)):[],(function(t,e,n){return n.indexOf(t)===e}))}function we(t){var e=be(t);return e.map((function(t,n){return{target:t,id:n,total:e.length,transforms:{list:le(t)}}}))}function xe(t,e){var n=Kt(e);if(/^spring/.test(n.easing)&&(n.duration=Dt(n.easing)),It.arr(t)){var r=t.length;2===r&&!It.obj(t[0])?t={value:t}:It.fnc(e.duration)||(n.duration=e.duration/r)}var i=It.arr(t)?t:[t];return i.map((function(t,n){var r=It.obj(t)&&!It.pth(t)?t:{value:t};return It.und(r.delay)&&(r.delay=n?0:e.delay),It.und(r.endDelay)&&(r.endDelay=n===i.length-1?e.endDelay:0),r})).map((function(t){return te(t,n)}))}function Se(t,e){var n=[],r=e.keyframes;for(var i in r&&(e=te(function(t){for(var e=Qt(Zt(t.map((function(t){return Object.keys(t)}))),(function(t){return It.key(t)})).reduce((function(t,e){return t.indexOf(e)<0&&t.push(e),t}),[]),n={},r=function(r){var i=e[r];n[i]=t.map((function(t){var e={};for(var n in t)It.key(n)?n==i&&(e.value=t[n]):e[n]=t[n];return e}))},i=0;i<e.length;i++)r(i);return n}(r),e)),e)It.key(i)&&n.push({name:i,tweens:xe(e[i],t)});return n}function Me(t,e){var n;return t.tweens.map((function(r){var i=function(t,e){var n={};for(var r in t){var i=re(t[r],e);It.arr(i)&&1===(i=i.map((function(t){return re(t,e)}))).length&&(i=i[0]),n[r]=i}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,e),o=i.value,s=It.arr(o)?o[1]:o,a=ne(s),l=ue(e.target,t.name,a,e),c=n?n.to.original:l,u=It.arr(o)?o[0]:c,h=ne(u)||ne(l),d=a||h;return It.und(s)&&(s=c),i.from=ye(u,d),i.to=ye(he(s,u),d),i.start=n?n.end:0,i.end=i.start+i.delay+i.duration+i.endDelay,i.easing=Wt(i.easing,i.duration),i.isPath=It.pth(o),i.isPathTargetInsideSVG=i.isPath&&It.svg(e.target),i.isColor=It.col(i.from.original),i.isColor&&(i.round=1),n=i,i}))}var $e={css:function(t,e,n){return t.style[e]=n},attribute:function(t,e,n){return t.setAttribute(e,n)},object:function(t,e,n){return t[e]=n},transform:function(t,e,n,r,i){if(r.list.set(e,n),e===r.last||i){var o="";r.list.forEach((function(t,e){o+=e+"("+t+") "})),t.style.transform=o}}};function Ce(t,e){we(t).forEach((function(t){for(var n in e){var r=re(e[n],t),i=t.target,o=ne(r),s=ue(i,n,o,t),a=he(de(r,o||ne(s)),s),l=ae(i,n);$e[l](i,n,a,t.transforms,!0)}}))}function Pe(t,e){return Qt(Zt(t.map((function(t){return e.map((function(e){return function(t,e){var n=ae(t.target,e.name);if(n){var r=Me(e,t),i=r[r.length-1];return{type:n,property:e.name,animatable:t,tweens:r,duration:i.end,delay:r[0].delay,endDelay:i.endDelay}}}(t,e)}))}))),(function(t){return!It.und(t)}))}function ke(t,e){var n=t.length,r=function(t){return t.timelineOffset?t.timelineOffset:0},i={};return i.duration=n?Math.max.apply(Math,t.map((function(t){return r(t)+t.duration}))):e.duration,i.delay=n?Math.min.apply(Math,t.map((function(t){return r(t)+t.delay}))):e.delay,i.endDelay=n?i.duration-Math.max.apply(Math,t.map((function(t){return r(t)+t.duration-t.endDelay}))):e.endDelay,i}var Oe=0;var Ee=[],Re=function(){var t;function e(n){for(var r=Ee.length,i=0;i<r;){var o=Ee[i];o.paused?(Ee.splice(i,1),r--):(o.tick(n),i++)}t=i>0?requestAnimationFrame(e):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){je.suspendWhenDocumentHidden&&(Ae()?t=cancelAnimationFrame(t):(Ee.forEach((function(t){return t._onDocumentVisibility()})),Re()))})),function(){t||Ae()&&je.suspendWhenDocumentHidden||!(Ee.length>0)||(t=requestAnimationFrame(e))}}();function Ae(){return!!document&&document.hidden}function je(t){void 0===t&&(t={});var e,n=0,r=0,i=0,o=0,s=null;function a(t){var e=window.Promise&&new Promise((function(t){return s=t}));return t.finished=e,e}var l=function(t){var e=Jt(At,t),n=Jt(jt,t),r=Se(n,t),i=we(t.targets),o=Pe(i,r),s=ke(o,n),a=Oe;return Oe++,te(e,{id:a,children:[],animatables:i,animations:o,duration:s.duration,delay:s.delay,endDelay:s.endDelay})}(t);a(l);function c(){var t=l.direction;"alternate"!==t&&(l.direction="normal"!==t?"normal":"reverse"),l.reversed=!l.reversed,e.forEach((function(t){return t.reversed=l.reversed}))}function u(t){return l.reversed?l.duration-t:t}function h(){n=0,r=u(l.currentTime)*(1/je.speed)}function d(t,e){e&&e.seek(t-e.timelineOffset)}function p(t){for(var e=0,n=l.animations,r=n.length;e<r;){var i=n[e],o=i.animatable,s=i.tweens,a=s.length-1,c=s[a];a&&(c=Qt(s,(function(e){return t<e.end}))[0]||c);for(var u=Nt(t-c.start-c.delay,0,c.duration)/c.duration,h=isNaN(u)?1:c.easing(u),d=c.to.strings,p=c.round,f=[],v=c.to.numbers.length,g=void 0,m=0;m<v;m++){var y=void 0,b=c.to.numbers[m],w=c.from.numbers[m]||0;y=c.isPath?me(c.value,h*b,c.isPathTargetInsideSVG):w+h*(b-w),p&&(c.isColor&&m>2||(y=Math.round(y*p)/p)),f.push(y)}var x=d.length;if(x){g=d[0];for(var S=0;S<x;S++){d[S];var M=d[S+1],$=f[S];isNaN($)||(g+=M?$+M:$+" ")}}else g=f[0];$e[i.type](o.target,i.property,g,o.transforms),i.currentValue=g,e++}}function f(t){l[t]&&!l.passThrough&&l[t](l)}function v(t){var h=l.duration,v=l.delay,g=h-l.endDelay,m=u(t);l.progress=Nt(m/h*100,0,100),l.reversePlayback=m<l.currentTime,e&&function(t){if(l.reversePlayback)for(var n=o;n--;)d(t,e[n]);else for(var r=0;r<o;r++)d(t,e[r])}(m),!l.began&&l.currentTime>0&&(l.began=!0,f("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,f("loopBegin")),m<=v&&0!==l.currentTime&&p(0),(m>=g&&l.currentTime!==h||!h)&&p(h),m>v&&m<g?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,f("changeBegin")),f("change"),p(m)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,f("changeComplete")),l.currentTime=Nt(m,0,h),l.began&&f("update"),t>=h&&(r=0,l.remaining&&!0!==l.remaining&&l.remaining--,l.remaining?(n=i,f("loopComplete"),l.loopBegan=!1,"alternate"===l.direction&&c()):(l.paused=!0,l.completed||(l.completed=!0,f("loopComplete"),f("complete"),!l.passThrough&&"Promise"in window&&(s(),a(l)))))}return l.reset=function(){var t=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed="reverse"===t,l.remaining=l.loop,e=l.children;for(var n=o=e.length;n--;)l.children[n].reset();(l.reversed&&!0!==l.loop||"alternate"===t&&1===l.loop)&&l.remaining++,p(l.reversed?l.duration:0)},l._onDocumentVisibility=h,l.set=function(t,e){return Ce(t,e),l},l.tick=function(t){i=t,n||(n=i),v((i+(r-n))*je.speed)},l.seek=function(t){v(u(t))},l.pause=function(){l.paused=!0,h()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,Ee.push(l),h(),Re())},l.reverse=function(){c(),l.completed=!l.reversed,h()},l.restart=function(){l.reset(),l.play()},l.remove=function(t){Be(be(t),l)},l.reset(),l.autoplay&&l.play(),l}function Te(t,e){for(var n=e.length;n--;)Xt(t,e[n].animatable.target)&&e.splice(n,1)}function Be(t,e){var n=e.animations,r=e.children;Te(t,n);for(var i=r.length;i--;){var o=r[i],s=o.animations;Te(t,s),s.length||o.children.length||r.splice(i,1)}n.length||r.length||e.pause()}je.version="3.2.1",je.speed=1,je.suspendWhenDocumentHidden=!0,je.running=Ee,je.remove=function(t){for(var e=be(t),n=Ee.length;n--;){Be(e,Ee[n])}},je.get=ue,je.set=Ce,je.convertPx=oe,je.path=function(t,e){var n=It.str(t)?Gt(t)[0]:t,r=e||100;return function(t){return{property:t,el:n,svg:ge(n),totalLength:ve(n)*(r/100)}}},je.setDashoffset=function(t){var e=ve(t);return t.setAttribute("stroke-dasharray",e),e},je.stagger=function(t,e){void 0===e&&(e={});var n=e.direction||"normal",r=e.easing?Wt(e.easing):null,i=e.grid,o=e.axis,s=e.from||0,a="first"===s,l="center"===s,c="last"===s,u=It.arr(t),h=u?parseFloat(t[0]):parseFloat(t),d=u?parseFloat(t[1]):0,p=ne(u?t[1]:t)||0,f=e.start||0+(u?h:0),v=[],g=0;return function(t,e,m){if(a&&(s=0),l&&(s=(m-1)/2),c&&(s=m-1),!v.length){for(var y=0;y<m;y++){if(i){var b=l?(i[0]-1)/2:s%i[0],w=l?(i[1]-1)/2:Math.floor(s/i[0]),x=b-y%i[0],S=w-Math.floor(y/i[0]),M=Math.sqrt(x*x+S*S);"x"===o&&(M=-x),"y"===o&&(M=-S),v.push(M)}else v.push(Math.abs(s-y));g=Math.max.apply(Math,v)}r&&(v=v.map((function(t){return r(t/g)*g}))),"reverse"===n&&(v=v.map((function(t){return o?t<0?-1*t:-t:Math.abs(g-t)})))}return f+(u?(d-h)/g:h)*(Math.round(100*v[e])/100)+p}},je.timeline=function(t){void 0===t&&(t={});var e=je(t);return e.duration=0,e.add=function(n,r){var i=Ee.indexOf(e),o=e.children;function s(t){t.passThrough=!0}i>-1&&Ee.splice(i,1);for(var a=0;a<o.length;a++)s(o[a]);var l=te(n,Jt(jt,t));l.targets=l.targets||t.targets;var c=e.duration;l.autoplay=!1,l.direction=e.direction,l.timelineOffset=It.und(r)?c:he(r,c),s(e),e.seek(l.timelineOffset);var u=je(l);s(u),o.push(u);var h=ke(o,t);return e.delay=h.delay,e.endDelay=h.endDelay,e.duration=h.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e},je.easing=Wt,je.penner=Ft,je.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t};var Ne=je,He=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Ue=class extends lt{constructor(){super(...arguments),this.color=[0,0,0],this.showHex=!1,this.initialized=!1}updated(){this.initialized||(this.initialized=!0,Ne({targets:this.renderRoot.querySelector("div"),height:"40px",duration:750,changeBegin:()=>{this.dispatchEvent(new CustomEvent("animation-started",{bubbles:!0,composed:!0}))},change:()=>{this.dispatchEvent(new CustomEvent("animation-changed",{bubbles:!0,composed:!0}))},changeComplete:()=>{this.dispatchEvent(new CustomEvent("animation-ended",{bubbles:!0,composed:!0}))}})),this.showHex?Ne({targets:this.renderRoot.querySelector("span"),opacity:[0,1],duration:250,delay:500,easing:"linear"}):(Ne.remove(this.renderRoot.querySelector("span")),Ne({targets:this.renderRoot.querySelector("span"),opacity:0,easing:"linear",duration:250}))}onMouseOver(){this.showHex=!0}onMouseLeave(){this.showHex=!1}render(){return D`<div
      style=${bt({"background-color":Ct(this.color)})}
      @mousedown=${this.onMouseOver}
      @touchstart=${this.onMouseOver}
      @mouseup=${this.onMouseLeave}
      @mouseleave=${this.onMouseLeave}
      @touchend=${this.onMouseLeave}
    >
      <span
        id="hex"
        style=${bt({color:Ct(St(this.color,.5,.5))})}
        >${Ct(this.color)}</span
      >
    </div>`}};Ue.styles=l`
    div {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 0px;
      margin: 2px;
      border-radius: 5px;
      border-width: 1px;
      opacity: 1;
    }
    #hex {
      font-family: "Courier New";
      opacity: 0;
      margin: 8px;
      font-size: 12px;
    }
  `,He([ht({type:Array})],Ue.prototype,"color",void 0),He([ht({attribute:!1})],Ue.prototype,"showHex",void 0),Ue=He([ct("color-cell")],Ue);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const{et:Ie}=et,qe=()=>document.createComment(""),De=(t,e,n)=>{var r;const i=t.A.parentNode,o=void 0===e?t.B:e.A;if(void 0===n){const e=i.insertBefore(qe(),o),r=i.insertBefore(qe(),o);n=new Ie(e,r,t,t.options)}else{const e=n.B.nextSibling,s=n.M!==t;if(s&&(null===(r=n.Q)||void 0===r||r.call(n,t),n.M=t),e!==o||s){let t=n.A;for(;t!==e;){const e=t.nextSibling;i.insertBefore(t,o),t=e}}}return n},ze=(t,e,n=t)=>(t.I(e,n),t),Le={},_e=t=>{var e;null===(e=t.P)||void 0===e||e.call(t,!1,!0);let n=t.A;const r=t.B.nextSibling;for(;n!==r;){const t=n.nextSibling;n.remove(),n=t}},Ve=(t,e,n)=>{const r=new Map;for(let i=e;i<=n;i++)r.set(t[i],i);return r},Fe=mt(class extends yt{constructor(t){if(super(t),t.type!==gt)throw Error("repeat() can only be used in text expressions")}Mt(t,e,n){let r;void 0===n?n=e:void 0!==e&&(r=e);const i=[],o=[];let s=0;for(const e of t)i[s]=r?r(e,s):s,o[s]=n(e,s),s++;return{values:o,keys:i}}render(t,e,n){return this.Mt(t,e,n).values}update(t,[e,n,r]){var i;const o=t.H,{values:s,keys:a}=this.Mt(e,n,r);if(!o)return this.Pt=a,s;const l=null!==(i=this.Pt)&&void 0!==i?i:this.Pt=[],c=[];let u,h,d=0,p=o.length-1,f=0,v=s.length-1;for(;d<=p&&f<=v;)if(null===o[d])d++;else if(null===o[p])p--;else if(l[d]===a[f])c[f]=ze(o[d],s[f]),d++,f++;else if(l[p]===a[v])c[v]=ze(o[p],s[v]),p--,v--;else if(l[d]===a[v])c[v]=ze(o[d],s[v]),De(t,c[v+1],o[d]),d++,v--;else if(l[p]===a[f])c[f]=ze(o[p],s[f]),De(t,o[d],o[p]),p--,f++;else if(void 0===u&&(u=Ve(a,f,v),h=Ve(l,d,p)),u.has(l[d]))if(u.has(l[p])){const e=h.get(a[f]),n=void 0!==e?o[e]:null;if(null===n){const e=De(t,o[d]);ze(e,s[f]),c[f]=e}else c[f]=ze(n,s[f]),De(t,o[d],n),o[e]=null;f++}else _e(o[p]),p--;else _e(o[d]),d++;for(;f<=v;){const e=De(t,c[v+1]);ze(e,s[f]),c[f++]=e}for(;d<=p;){const t=o[d++];null!==t&&_e(t)}return this.Pt=a,((t,e=Le)=>{t.H=e})(t,c),z}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var We=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Ge=class extends lt{constructor(){super(...arguments),this.targetColor=[0,0,0],this.iterations=[[0,0,0]],this.active=!0,this.win=!1,this.gameId=0,this.optimalMoves=0}render(){return D`<div
      style=${bt({"background-color":this.active?Ct(St(xt(this.targetColor),.5)):"white"})}
    >
      ${Fe(this.iterations,t=>D`<color-cell .color=${t}></color-cell>`)}
      <hr />
      <color-cell id="target-color" .color=${this.targetColor}></color-cell>
      <table
        style=${bt({color:this.active?Ct(Mt(xt(this.targetColor),.5)):"gray"})}
      >
        <td id="game-title">
          Game
          ${this.gameId}${this.win?this.optimalMoves===this.iterations.length-1?" 👑":" ✓":" "}
        </td>
        <td id="game-status">
          ${this.win?`${this.iterations.length-1} moves (${this.optimalMoves} optimal)`:""}
        </td>
      </table>
    </div>`}};Ge.styles=l`
    div {
      background-color: black;
      padding: 5px;
      margin: 3px;
      border-radius: 5px;
      overflow: hidden;
      font-family: "Quicksand";
      font-size: 20px;
      user-select: none;
    }
    table {
      width: 100%;
    }
    #game-status {
      text-align: right;
    }
    hr {
      margin: 3px;
    }
  `,We([ht({type:Array})],Ge.prototype,"targetColor",void 0),We([ht({type:Array})],Ge.prototype,"iterations",void 0),We([ht({type:Boolean})],Ge.prototype,"active",void 0),We([ht({type:Boolean})],Ge.prototype,"win",void 0),We([ht({type:Number})],Ge.prototype,"gameId",void 0),We([ht({type:Number})],Ge.prototype,"optimalMoves",void 0),Ge=We([ct("color-column")],Ge);class Qe{constructor(t,e){this.interval=e,this.targetColor=[0,0,0],this.iterations=[[0,0,0]],this.optimalMoves=0,this.win=!1,this.active=!1,(this.host=t).addController(this),this.startGame()}startGame(){const t=Math.floor(256/this.interval);for(this.targetColor=[0,0,0].map(e=>Math.floor(Math.random()*t)*this.interval);0===this.optimalMoves;)this.iterations=[[0,0,0].map(e=>Math.floor(Math.random()*t)*this.interval)],this.optimalMoves=Pt(this.targetColor,this.iterations[0],this.interval);this.active=!0,this.host.requestUpdate()}iterate(t){const e=[...this.iterations[this.iterations.length-1]];for(let n=0;n<t.length;n++)e[n]+t[n]>=0&&e[n]+t[n]<=255&&(e[n]+=t[n]);this.win=e.every((t,e)=>t===this.targetColor[e]),this.iterations=[...this.iterations,e],this.host.requestUpdate()}hostConnected(){}}var Ze=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Ye=class extends lt{constructor(){super(),this.interval=1,this.rounds=[],this.scrollingRequested=!1,this.scrolling=!1,this.animating=!1,this.aboutPanelActive=!1}connectedCallback(){super.connectedCallback(),this.startNewGame()}startNewGame(){this.rounds.length>0&&(this.rounds[this.rounds.length-1].active=!1),this.rounds=[...this.rounds,new Qe(this,this.interval)],this.scrollingRequested=this.scrolling=!1,this.forceScrollToBottom()}iterate(t){const{delta:e}=t.detail;this.rounds[this.rounds.length-1].iterate(e),this.scrollingRequested=this.scrolling=!1,this.forceScrollToBottom(),t.stopPropagation()}onMouseOver(){this.scrolling||(this.scrollingRequested=!0,this.requestUpdate())}onMouseInteraction(){this.animating=!1,this.onMouseOver()}onAnimationStarted(){this.animating=!0}onAnimationChanged(){this.animating&&this.forceScrollToBottom()}onAnimationEnded(){this.animating=!1,this.scrollingRequested&&this.requestUpdate()}updated(){this.scrollingRequested&&!this.animating&&(this.scrolling=!0,this.scrollingRequested=!1,this.forceScrollToBottom())}forceScrollToBottom(){if(!this.shadowRoot)return;const t=this.shadowRoot.querySelector("#top");if(!t)return;const e=t.lastElementChild;e&&e.scrollIntoView()}render(){const t=this.rounds[this.rounds.length-1];return D`
      <div id="outer-div">
        <div
          id="top"
          @mouseover=${this.onMouseOver}
          @mousewheel=${this.onMouseInteraction}
          @touchstart=${this.onMouseInteraction}
          @animation-started=${this.onAnimationStarted}
          @animation-changed=${this.onAnimationChanged}
          @animation-ended=${this.onAnimationEnded}
          style=${bt({overflow:this.scrollingRequested?"auto":""})}
        >
          ${Fe(this.rounds,(t,e)=>D`<color-column
                .targetColor=${t.targetColor}
                .iterations=${t.iterations}
                .active=${t.active}
                .gameId=${e+1}
                .win=${t.win}
                .optimalMoves=${t.optimalMoves}
              ></color-column>`)}
          <!-- A zero-height div that is always the last element in #top. -->
          <div style=${bt({height:"0px"})}></div>
        </div>
        <div class="controls">
          <color-buttons
            @color-incremented=${this.iterate}
            interval=${this.interval}
            .current=${t.iterations[t.iterations.length-1]}
            ?active=${!t.win}
          ></color-buttons>
          <control-panel
            @new-game=${this.startNewGame}
            @about=${()=>{this.aboutPanelActive=!0}}
          ></control-panel>
        </div>
      </div>
      <about-panel
        .active=${this.aboutPanelActive}
        @dismissed=${()=>{this.aboutPanelActive=!1}}
      ></about-panel>
    `}};Ye.styles=l`
    #outer-div {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    #top {
      justify-content: flex-end;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    #top::-webkit-scrollbar {
      display: none;
    }
    .controls {
      padding: 5px;
      background-color: white;
      white-space: nowrap;
      display: flex;
      justify-content: space-between;
    }
  `,Ze([ht({type:Number})],Ye.prototype,"interval",void 0),Ze([ht({attribute:!1})],Ye.prototype,"aboutPanelActive",void 0),Ye=Ze([ct("color-game")],Ye);var Xe=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Ke=class extends lt{render(){return D`<div class="outer-div">
      <div
        class="inner-div"
        id="new-game"
        @click=${()=>this.dispatchEvent(new CustomEvent("new-game"))}
      >
        New Game
      </div>
      <div
        class="inner-div"
        id="about"
        @click=${()=>this.dispatchEvent(new CustomEvent("about"))}
      >
        ?
      </div>
    </div>`}};Ke.styles=l`
    .outer-div {
      display: flex;
      justify-content: flex-end;
    }
    .inner-div {
      margin: 1px;
      padding: 8px;
      border-radius: 5px;
      font-family: "Quicksand";
      font-size: 18px;
      border-style: none;
      user-select: none;
      width: 100%;
    }
    #new-game {
      background-color: thistle;
      color: indigo;
    }
    #about {
      background-color: thistle;
      color: indigo;
      text-align: center;
      min-width: 20px;
    }
    :host {
      flex-grow: 0;
    }
  `,Ke=Xe([ct("control-panel")],Ke);var Je=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let tn=class extends lt{constructor(){super(...arguments),this.color="white",this.active=!1,this.initialized=!1}updated(){Ne.remove([this.renderRoot.querySelector("#panel"),this.renderRoot.querySelector("#curtain")]),this.active?(this.initialized=!0,Ne({targets:this.renderRoot.querySelector("#panel"),opacity:[0,1],translateY:[40,0],duration:1e3,easing:"easeOutCubic"}),Ne({targets:this.renderRoot.querySelector("#curtain"),opacity:[0,.5],duration:500,easing:"easeOutCubic"})):this.initialized&&(Ne({targets:this.renderRoot.querySelector("#panel"),opacity:[1,0],translateY:[0,40],duration:250,easing:"linear"}),Ne({targets:this.renderRoot.querySelector("#curtain"),opacity:[.5,0],duration:250,easing:"linear"}))}render(){return D`
      <div id="curtain"></div>
      <div
        id="outer-div"
        @click=${()=>this.dispatchEvent(new CustomEvent("dismissed",{bubbles:!0,composed:!0}))}
        style=${bt({"pointer-events":this.active?"auto":"none","touch-action":this.active?"auto":"none"})}
      >
        <div
          id="panel"
          style=${bt({"background-color":this.color})}
          @click=${t=>t.stopPropagation()}
        >
          <slot></slot>
        </div>
      </div>
    `}};tn.styles=l`
    #curtain {
      position: absolute;
      background-color: white;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0;
      pointer-events: none;
      touch-action: none;
    }
    #outer-div {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    #panel {
      border-radius: 5px;
      padding: 5px;
      opacity: 0;
      max-width: 80%;
      max-height: 80%;
      font-family: "Quicksand";
    }
  `,Je([ht()],tn.prototype,"color",void 0),Je([ht({type:Boolean})],tn.prototype,"active",void 0),tn=Je([ct("pop-up")],tn)}]);
//# sourceMappingURL=main.js.map