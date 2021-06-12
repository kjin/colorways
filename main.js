!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){const r=n(1),o=n(3),i={};Object.keys(r).forEach(t=>{i[t]={},Object.defineProperty(i[t],"channels",{value:r[t].channels}),Object.defineProperty(i[t],"labels",{value:r[t].labels});const e=o(t);Object.keys(e).forEach(n=>{const r=e[n];i[t][n]=function(t){const e=function(...e){const n=e[0];if(null==n)return n;n.length>1&&(e=n);const r=t(e);if("object"==typeof r)for(let t=r.length,e=0;e<t;e++)r[e]=Math.round(r[e]);return r};return"conversion"in t&&(e.conversion=t.conversion),e}(r),i[t][n].raw=function(t){const e=function(...e){const n=e[0];return null==n?n:(n.length>1&&(e=n),t(e))};return"conversion"in t&&(e.conversion=t.conversion),e}(r)})}),t.exports=i},function(t,e,n){const r=n(2),o={};for(const t of Object.keys(r))o[r[t]]=t;const i={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};t.exports=i;for(const t of Object.keys(i)){if(!("channels"in i[t]))throw new Error("missing channels property: "+t);if(!("labels"in i[t]))throw new Error("missing channel labels property: "+t);if(i[t].labels.length!==i[t].channels)throw new Error("channel and label counts mismatch: "+t);const{channels:e,labels:n}=i[t];delete i[t].channels,delete i[t].labels,Object.defineProperty(i[t],"channels",{value:e}),Object.defineProperty(i[t],"labels",{value:n})}i.rgb.hsl=function(t){const e=t[0]/255,n=t[1]/255,r=t[2]/255,o=Math.min(e,n,r),i=Math.max(e,n,r),s=i-o;let a,l;i===o?a=0:e===i?a=(n-r)/s:n===i?a=2+(r-e)/s:r===i&&(a=4+(e-n)/s),a=Math.min(60*a,360),a<0&&(a+=360);const c=(o+i)/2;return l=i===o?0:c<=.5?s/(i+o):s/(2-i-o),[a,100*l,100*c]},i.rgb.hsv=function(t){let e,n,r,o,i;const s=t[0]/255,a=t[1]/255,l=t[2]/255,c=Math.max(s,a,l),u=c-Math.min(s,a,l),h=function(t){return(c-t)/6/u+.5};return 0===u?(o=0,i=0):(i=u/c,e=h(s),n=h(a),r=h(l),s===c?o=r-n:a===c?o=1/3+e-r:l===c&&(o=2/3+n-e),o<0?o+=1:o>1&&(o-=1)),[360*o,100*i,100*c]},i.rgb.hwb=function(t){const e=t[0],n=t[1];let r=t[2];const o=i.rgb.hsl(t)[0],s=1/255*Math.min(e,Math.min(n,r));return r=1-1/255*Math.max(e,Math.max(n,r)),[o,100*s,100*r]},i.rgb.cmyk=function(t){const e=t[0]/255,n=t[1]/255,r=t[2]/255,o=Math.min(1-e,1-n,1-r);return[100*((1-e-o)/(1-o)||0),100*((1-n-o)/(1-o)||0),100*((1-r-o)/(1-o)||0),100*o]},i.rgb.keyword=function(t){const e=o[t];if(e)return e;let n,i=1/0;for(const e of Object.keys(r)){const o=r[e],l=(a=o,((s=t)[0]-a[0])**2+(s[1]-a[1])**2+(s[2]-a[2])**2);l<i&&(i=l,n=e)}var s,a;return n},i.keyword.rgb=function(t){return r[t]},i.rgb.xyz=function(t){let e=t[0]/255,n=t[1]/255,r=t[2]/255;e=e>.04045?((e+.055)/1.055)**2.4:e/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92;return[100*(.4124*e+.3576*n+.1805*r),100*(.2126*e+.7152*n+.0722*r),100*(.0193*e+.1192*n+.9505*r)]},i.rgb.lab=function(t){const e=i.rgb.xyz(t);let n=e[0],r=e[1],o=e[2];n/=95.047,r/=100,o/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,o=o>.008856?o**(1/3):7.787*o+16/116;return[116*r-16,500*(n-r),200*(r-o)]},i.hsl.rgb=function(t){const e=t[0]/360,n=t[1]/100,r=t[2]/100;let o,i,s;if(0===n)return s=255*r,[s,s,s];o=r<.5?r*(1+n):r+n-r*n;const a=2*r-o,l=[0,0,0];for(let t=0;t<3;t++)i=e+1/3*-(t-1),i<0&&i++,i>1&&i--,s=6*i<1?a+6*(o-a)*i:2*i<1?o:3*i<2?a+(o-a)*(2/3-i)*6:a,l[t]=255*s;return l},i.hsl.hsv=function(t){const e=t[0];let n=t[1]/100,r=t[2]/100,o=n;const i=Math.max(r,.01);r*=2,n*=r<=1?r:2-r,o*=i<=1?i:2-i;return[e,100*(0===r?2*o/(i+o):2*n/(r+n)),100*((r+n)/2)]},i.hsv.rgb=function(t){const e=t[0]/60,n=t[1]/100;let r=t[2]/100;const o=Math.floor(e)%6,i=e-Math.floor(e),s=255*r*(1-n),a=255*r*(1-n*i),l=255*r*(1-n*(1-i));switch(r*=255,o){case 0:return[r,l,s];case 1:return[a,r,s];case 2:return[s,r,l];case 3:return[s,a,r];case 4:return[l,s,r];case 5:return[r,s,a]}},i.hsv.hsl=function(t){const e=t[0],n=t[1]/100,r=t[2]/100,o=Math.max(r,.01);let i,s;s=(2-n)*r;const a=(2-n)*o;return i=n*o,i/=a<=1?a:2-a,i=i||0,s/=2,[e,100*i,100*s]},i.hwb.rgb=function(t){const e=t[0]/360;let n=t[1]/100,r=t[2]/100;const o=n+r;let i;o>1&&(n/=o,r/=o);const s=Math.floor(6*e),a=1-r;i=6*e-s,0!=(1&s)&&(i=1-i);const l=n+i*(a-n);let c,u,h;switch(s){default:case 6:case 0:c=a,u=l,h=n;break;case 1:c=l,u=a,h=n;break;case 2:c=n,u=a,h=l;break;case 3:c=n,u=l,h=a;break;case 4:c=l,u=n,h=a;break;case 5:c=a,u=n,h=l}return[255*c,255*u,255*h]},i.cmyk.rgb=function(t){const e=t[0]/100,n=t[1]/100,r=t[2]/100,o=t[3]/100;return[255*(1-Math.min(1,e*(1-o)+o)),255*(1-Math.min(1,n*(1-o)+o)),255*(1-Math.min(1,r*(1-o)+o))]},i.xyz.rgb=function(t){const e=t[0]/100,n=t[1]/100,r=t[2]/100;let o,i,s;return o=3.2406*e+-1.5372*n+-.4986*r,i=-.9689*e+1.8758*n+.0415*r,s=.0557*e+-.204*n+1.057*r,o=o>.0031308?1.055*o**(1/2.4)-.055:12.92*o,i=i>.0031308?1.055*i**(1/2.4)-.055:12.92*i,s=s>.0031308?1.055*s**(1/2.4)-.055:12.92*s,o=Math.min(Math.max(0,o),1),i=Math.min(Math.max(0,i),1),s=Math.min(Math.max(0,s),1),[255*o,255*i,255*s]},i.xyz.lab=function(t){let e=t[0],n=t[1],r=t[2];e/=95.047,n/=100,r/=108.883,e=e>.008856?e**(1/3):7.787*e+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;return[116*n-16,500*(e-n),200*(n-r)]},i.lab.xyz=function(t){let e,n,r;n=(t[0]+16)/116,e=t[1]/500+n,r=n-t[2]/200;const o=n**3,i=e**3,s=r**3;return n=o>.008856?o:(n-16/116)/7.787,e=i>.008856?i:(e-16/116)/7.787,r=s>.008856?s:(r-16/116)/7.787,e*=95.047,n*=100,r*=108.883,[e,n,r]},i.lab.lch=function(t){const e=t[0],n=t[1],r=t[2];let o;o=360*Math.atan2(r,n)/2/Math.PI,o<0&&(o+=360);return[e,Math.sqrt(n*n+r*r),o]},i.lch.lab=function(t){const e=t[0],n=t[1],r=t[2]/360*2*Math.PI;return[e,n*Math.cos(r),n*Math.sin(r)]},i.rgb.ansi16=function(t,e=null){const[n,r,o]=t;let s=null===e?i.rgb.hsv(t)[2]:e;if(s=Math.round(s/50),0===s)return 30;let a=30+(Math.round(o/255)<<2|Math.round(r/255)<<1|Math.round(n/255));return 2===s&&(a+=60),a},i.hsv.ansi16=function(t){return i.rgb.ansi16(i.hsv.rgb(t),t[2])},i.rgb.ansi256=function(t){const e=t[0],n=t[1],r=t[2];if(e===n&&n===r)return e<8?16:e>248?231:Math.round((e-8)/247*24)+232;return 16+36*Math.round(e/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)},i.ansi16.rgb=function(t){let e=t%10;if(0===e||7===e)return t>50&&(e+=3.5),e=e/10.5*255,[e,e,e];const n=.5*(1+~~(t>50));return[(1&e)*n*255,(e>>1&1)*n*255,(e>>2&1)*n*255]},i.ansi256.rgb=function(t){if(t>=232){const e=10*(t-232)+8;return[e,e,e]}let e;t-=16;return[Math.floor(t/36)/5*255,Math.floor((e=t%36)/6)/5*255,e%6/5*255]},i.rgb.hex=function(t){const e=(((255&Math.round(t[0]))<<16)+((255&Math.round(t[1]))<<8)+(255&Math.round(t[2]))).toString(16).toUpperCase();return"000000".substring(e.length)+e},i.hex.rgb=function(t){const e=t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e)return[0,0,0];let n=e[0];3===e[0].length&&(n=n.split("").map(t=>t+t).join(""));const r=parseInt(n,16);return[r>>16&255,r>>8&255,255&r]},i.rgb.hcg=function(t){const e=t[0]/255,n=t[1]/255,r=t[2]/255,o=Math.max(Math.max(e,n),r),i=Math.min(Math.min(e,n),r),s=o-i;let a,l;return a=s<1?i/(1-s):0,l=s<=0?0:o===e?(n-r)/s%6:o===n?2+(r-e)/s:4+(e-n)/s,l/=6,l%=1,[360*l,100*s,100*a]},i.hsl.hcg=function(t){const e=t[1]/100,n=t[2]/100,r=n<.5?2*e*n:2*e*(1-n);let o=0;return r<1&&(o=(n-.5*r)/(1-r)),[t[0],100*r,100*o]},i.hsv.hcg=function(t){const e=t[1]/100,n=t[2]/100,r=e*n;let o=0;return r<1&&(o=(n-r)/(1-r)),[t[0],100*r,100*o]},i.hcg.rgb=function(t){const e=t[0]/360,n=t[1]/100,r=t[2]/100;if(0===n)return[255*r,255*r,255*r];const o=[0,0,0],i=e%1*6,s=i%1,a=1-s;let l=0;switch(Math.floor(i)){case 0:o[0]=1,o[1]=s,o[2]=0;break;case 1:o[0]=a,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=s;break;case 3:o[0]=0,o[1]=a,o[2]=1;break;case 4:o[0]=s,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=a}return l=(1-n)*r,[255*(n*o[0]+l),255*(n*o[1]+l),255*(n*o[2]+l)]},i.hcg.hsv=function(t){const e=t[1]/100,n=e+t[2]/100*(1-e);let r=0;return n>0&&(r=e/n),[t[0],100*r,100*n]},i.hcg.hsl=function(t){const e=t[1]/100,n=t[2]/100*(1-e)+.5*e;let r=0;return n>0&&n<.5?r=e/(2*n):n>=.5&&n<1&&(r=e/(2*(1-n))),[t[0],100*r,100*n]},i.hcg.hwb=function(t){const e=t[1]/100,n=e+t[2]/100*(1-e);return[t[0],100*(n-e),100*(1-n)]},i.hwb.hcg=function(t){const e=t[1]/100,n=1-t[2]/100,r=n-e;let o=0;return r<1&&(o=(n-r)/(1-r)),[t[0],100*r,100*o]},i.apple.rgb=function(t){return[t[0]/65535*255,t[1]/65535*255,t[2]/65535*255]},i.rgb.apple=function(t){return[t[0]/255*65535,t[1]/255*65535,t[2]/255*65535]},i.gray.rgb=function(t){return[t[0]/100*255,t[0]/100*255,t[0]/100*255]},i.gray.hsl=function(t){return[0,0,t[0]]},i.gray.hsv=i.gray.hsl,i.gray.hwb=function(t){return[0,100,t[0]]},i.gray.cmyk=function(t){return[0,0,0,t[0]]},i.gray.lab=function(t){return[t[0],0,0]},i.gray.hex=function(t){const e=255&Math.round(t[0]/100*255),n=((e<<16)+(e<<8)+e).toString(16).toUpperCase();return"000000".substring(n.length)+n},i.rgb.gray=function(t){return[(t[0]+t[1]+t[2])/3/255*100]}},function(t,e,n){"use strict";t.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},function(t,e,n){const r=n(1);function o(t){const e=function(){const t={},e=Object.keys(r);for(let n=e.length,r=0;r<n;r++)t[e[r]]={distance:-1,parent:null};return t}(),n=[t];for(e[t].distance=0;n.length;){const t=n.pop(),o=Object.keys(r[t]);for(let r=o.length,i=0;i<r;i++){const r=o[i],s=e[r];-1===s.distance&&(s.distance=e[t].distance+1,s.parent=t,n.unshift(r))}}return e}function i(t,e){return function(n){return e(t(n))}}function s(t,e){const n=[e[t].parent,t];let o=r[e[t].parent][t],s=e[t].parent;for(;e[s].parent;)n.unshift(e[s].parent),o=i(r[e[s].parent][s],o),s=e[s].parent;return o.conversion=n,o}t.exports=function(t){const e=o(t),n={},r=Object.keys(e);for(let t=r.length,o=0;o<t;o++){const t=r[o];null!==e[t].parent&&(n[t]=s(t,e))}return n}},function(t,e,n){"use strict";n.r(e);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const r=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol();class i{constructor(t,e){if(e!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return r&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const s=new Map,a=t=>{let e=s.get(t);return void 0===e&&s.set(t,e=new i(t,o)),e},l=(t,...e)=>{const n=1===t.length?t[0]:e.reduce((e,n,r)=>e+(t=>{if(t instanceof i)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[r+1],t[0]);return a(n)},c=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return(t=>a("string"==typeof t?t:t+""))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var u,h,d,p;const f={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},g=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:g};class m extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,n)=>{const r=this.Πp(n,e);void 0!==r&&(this.Πm.set(r,n),t.push(r))}),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const n="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,n,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(r){const o=this[t];this[e]=r,this.requestUpdate(t,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of e)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static"Πp"(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise(t=>this.enableUpdating=t),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,n;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(n=t.hostConnected)||void 0===n||n.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{r?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const n=document.createElement("style");n.textContent=e.cssText,t.appendChild(n)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}),this.Πo=new Promise(t=>this.Πl=t)}attributeChangedCallback(t,e,n){this.K(t,n)}"Πj"(t,e,n=v){var r,o;const i=this.constructor.Πp(t,n);if(void 0!==i&&!0===n.reflect){const s=(null!==(o=null===(r=n.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==o?o:f.toAttribute)(e,n.type);this.Πh=t,null==s?this.removeAttribute(i):this.setAttribute(i,s),this.Πh=null}}K(t,e){var n,r,o;const i=this.constructor,s=i.Πm.get(t);if(void 0!==s&&this.Πh!==s){const t=i.getPropertyOptions(s),a=t.converter,l=null!==(o=null!==(r=null===(n=a)||void 0===n?void 0:n.fromAttribute)&&void 0!==r?r:"function"==typeof a?a:null)&&void 0!==o?o:f.fromAttribute;this.Πh=s,this[s]=l(e,t.type),this.Πh=null}}requestUpdate(t,e,n){let r=!0;void 0!==t&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===n.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,n))):r=!1),!this.isUpdatePending&&r&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach((t,e)=>this[e]=t),this.Πi=void 0);let e=!1;const n=this.L;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(n)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(n)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach((t,e)=>this.Πj(e,this[e],t)),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var y,b,w,x;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null===(h=(u=globalThis).reactiveElementPlatformSupport)||void 0===h||h.call(u,{ReactiveElement:m}),(null!==(d=(p=globalThis).reactiveElementVersions)&&void 0!==d?d:p.reactiveElementVersions=[]).push("1.0.0-rc.2");const M=globalThis.trustedTypes,k=M?M.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,S="?"+$,O=`<${S}>`,C=document,P=(t="")=>C.createComment(t),j=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,R=t=>{var e;return A(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,N=/>/g,T=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,q=/'/g,H=/"/g,I=/^(?:script|style|textarea)$/i,U=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),D=U(1),z=(U(2),Symbol.for("lit-noChange")),V=Symbol.for("lit-nothing"),L=new WeakMap,_=C.createTreeWalker(C,129,null,!1),F=(t,e)=>{const n=t.length-1,r=[];let o,i=2===e?"<svg>":"",s=E;for(let e=0;e<n;e++){const n=t[e];let a,l,c=-1,u=0;for(;u<n.length&&(s.lastIndex=u,l=s.exec(n),null!==l);)u=s.lastIndex,s===E?"!--"===l[1]?s=B:void 0!==l[1]?s=N:void 0!==l[2]?(I.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=T):void 0!==l[3]&&(s=T):s===T?">"===l[0]?(s=null!=o?o:E,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?T:'"'===l[3]?H:q):s===H||s===q?s=T:s===B||s===N?s=E:(s=T,o=void 0);const h=s===T&&t[e+1].startsWith("/>")?" ":"";i+=s===E?n+O:c>=0?(r.push(a),n.slice(0,c)+"$lit$"+n.slice(c)+$+h):n+$+(-2===c?(r.push(void 0),e):h)}const a=i+(t[n]||"<?>")+(2===e?"</svg>":"");return[void 0!==k?k.createHTML(a):a,r]};class G{constructor({strings:t,_$litType$:e},n){let r;this.parts=[];let o=0,i=0;const s=t.length-1,a=this.parts,[l,c]=F(t,e);if(this.el=G.createElement(l,n),_.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=_.nextNode())&&a.length<s;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const n=c[i++];if(t.push(e),void 0!==n){const t=r.getAttribute(n.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(n);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?Y:"?"===e[1]?K:"@"===e[1]?J:X})}else a.push({type:6,index:o})}for(const e of t)r.removeAttribute(e)}if(I.test(r.tagName)){const t=r.textContent.split($),e=t.length-1;if(e>0){r.textContent=M?M.emptyScript:"";for(let n=0;n<e;n++)r.append(t[n],P()),_.nextNode(),a.push({type:2,index:++o});r.append(t[e],P())}}}else if(8===r.nodeType)if(r.data===S)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=r.data.indexOf($,t+1));)a.push({type:7,index:o}),t+=$.length-1}o++}}static createElement(t,e){const n=C.createElement("template");return n.innerHTML=t,n}}function W(t,e,n=t,r){var o,i,s,a;if(e===z)return e;let l=void 0!==r?null===(o=n.Σi)||void 0===o?void 0:o[r]:n.Σo;const c=j(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(i=null==l?void 0:l.O)||void 0===i||i.call(l,!1),void 0===c?l=void 0:(l=new c(t),l.T(t,n,r)),void 0!==r?(null!==(s=(a=n).Σi)&&void 0!==s?s:a.Σi=[])[r]=l:n.Σo=l),void 0!==l&&(e=W(t,l.S(t,e.values),l,r)),e}class Q{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:n},parts:r}=this.D,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:C).importNode(n,!0);_.currentNode=o;let i=_.nextNode(),s=0,a=0,l=r[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new Z(i,i.nextSibling,this,t):1===l.type?e=new l.ctor(i,l.name,l.strings,this,t):6===l.type&&(e=new tt(i,this,t)),this.l.push(e),l=r[++a]}s!==(null==l?void 0:l.index)&&(i=_.nextNode(),s++)}return o}v(t){let e=0;for(const n of this.l)void 0!==n&&(void 0!==n.strings?(n.I(t,n,e),e+=n.strings.length-2):n.I(t[e])),e++}}class Z{constructor(t,e,n,r){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=n,this.options=r}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=W(this,t,e),j(t)?t===V||null==t||""===t?(this.H!==V&&this.R(),this.H=V):t!==this.H&&t!==z&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):R(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(C.createTextNode(t)),this.H=t}_(t){var e;const{values:n,_$litType$:r}=t,o="number"==typeof r?this.C(t):(void 0===r.el&&(r.el=G.createElement(r.h,this.options)),r);if((null===(e=this.H)||void 0===e?void 0:e.D)===o)this.H.v(n);else{const t=new Q(o,this),e=t.u(this.options);t.v(n),this.$(e),this.H=t}}C(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new G(t)),e}g(t){A(this.H)||(this.H=[],this.R());const e=this.H;let n,r=0;for(const o of t)r===e.length?e.push(n=new Z(this.k(P()),this.k(P()),this,this.options)):n=e[r],n.I(o),r++;r<e.length&&(this.R(n&&n.B.nextSibling,r),e.length=r)}R(t=this.A.nextSibling,e){var n;for(null===(n=this.P)||void 0===n||n.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class X{constructor(t,e,n,r,o){this.type=1,this.H=V,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=r,this.options=o,n.length>2||""!==n[0]||""!==n[1]?(this.H=Array(n.length-1).fill(V),this.strings=n):this.H=V}get tagName(){return this.element.tagName}I(t,e=this,n,r){const o=this.strings;let i=!1;if(void 0===o)t=W(this,t,e,0),i=!j(t)||t!==this.H&&t!==z,i&&(this.H=t);else{const r=t;let s,a;for(t=o[0],s=0;s<o.length-1;s++)a=W(this,r[n+s],e,s),a===z&&(a=this.H[s]),i||(i=!j(a)||a!==this.H[s]),a===V?t=V:t!==V&&(t+=(null!=a?a:"")+o[s+1]),this.H[s]=a}i&&!r&&this.W(t)}W(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Y extends X{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===V?void 0:t}}class K extends X{constructor(){super(...arguments),this.type=4}W(t){t&&t!==V?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class J extends X{constructor(){super(...arguments),this.type=5}I(t,e=this){var n;if((t=null!==(n=W(this,t,e,0))&&void 0!==n?n:V)===z)return;const r=this.H,o=t===V&&r!==V||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==V&&(r===V||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,n;"function"==typeof this.H?this.H.call(null!==(n=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==n?n:this.element,t):this.H.handleEvent(t)}}class tt{constructor(t,e,n){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=n}I(t){W(this,t)}}const et={Z:"$lit$",U:$,Y:S,q:1,X:F,tt:Q,it:R,st:W,et:Z,ot:X,nt:K,rt:J,lt:Y,ht:tt};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var nt,rt,ot,it,st,at;null===(b=(y=globalThis).litHtmlPlatformSupport)||void 0===b||b.call(y,G,Z),(null!==(w=(x=globalThis).litHtmlVersions)&&void 0!==w?w:x.litHtmlVersions=[]).push("2.0.0-rc.3");(null!==(nt=(at=globalThis).litElementVersions)&&void 0!==nt?nt:at.litElementVersions=[]).push("3.0.0-rc.2");class lt extends m{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const n=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=n.firstChild),n}update(t){const e=this.render();super.update(t),this.Φt=((t,e,n)=>{var r,o;const i=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:e;let s=i._$litPart$;if(void 0===s){const t=null!==(o=null==n?void 0:n.renderBefore)&&void 0!==o?o:null;i._$litPart$=s=new Z(e.insertBefore(P(),t),t,void 0,n)}return s.I(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return z}}lt.finalized=!0,lt._$litElement$=!0,null===(ot=(rt=globalThis).litElementHydrateSupport)||void 0===ot||ot.call(rt,{LitElement:lt}),null===(st=(it=globalThis).litElementPlatformSupport)||void 0===st||st.call(it,{LitElement:lt});const ct=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:r}=e;return{kind:n,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e)
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
const dt=Element.prototype;dt.msMatchesSelector||dt.webkitMatchesSelector;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pt=1,ft=2,gt=t=>(...e)=>({_$litDirective$:t,values:e});class vt{constructor(t){}T(t,e,n){this.Σdt=t,this.M=e,this.Σct=n}S(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt=gt(class extends vt{constructor(t){var e;if(super(t),t.type!==pt||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return null==r?e:e+`${n=n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(t,[e]){const{style:n}=t.element;if(void 0===this.St){this.St=new Set;for(const t in e)this.St.add(t);return this.render(e)}this.St.forEach(t=>{null==e[t]&&(this.St.delete(t),t.includes("-")?n.removeProperty(t):n[t]="")});for(const t in e){const r=e[t];null!=r&&(this.St.add(t),t.includes("-")?n.setProperty(t,r):n[t]=r)}return z}}),yt=(t,e,n={})=>{t.renderRoot.dispatchEvent(new CustomEvent(e,{detail:n,bubbles:!0,composed:!0}))},bt=t=>t>0?"+":t<0?"–":"";var wt=n(0),xt=n.n(wt);function Mt(t,e){return t.map(t=>Math.floor(t/(e.steps-1)*255))}function kt(t,e,n){const{delta:r,direction:o}=e;if(!t.every((t,e)=>t+r[e]*o>=0&&t+r[e]*o<n.steps))return null;let i=[...t];for(let t=0;t<r.length;t++)i[t]+=r[t]*o;return i}function $t(t){return[.2126,.7152,.0722].reduce((e,n,r)=>e+n*t[r],0)/256}function St(t){return t.map(t=>255-t)}function Ot(t,e){return t.map(t=>Math.floor(t*(1-e)))}function Ct(t,e){return St(Ot(St(t),e))}function Pt(t){return $t(t)>.8?function(t){return $t(t)<.2?Pt(t):Ot(t,.75)}(t):Ct(t,.75)}function jt(t){const e=t.toString(16);return 1===e.length?"0"+e:e}function At(t){return"#"+t.map(jt).join("")}function Rt(t,e){return e.map((e,n)=>e-t[n]).map(Math.abs).reduce((t,e)=>t+e,0)}var Et=function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};let Bt=class extends lt{constructor(){super(...arguments),this.color=[0,0,0],this.active=!0,this.maxWidth=1/0}render(){const t=Ct(this.color,this.active?0:.75),e=Pt(t);return D`<div
      id="button"
      @click=${()=>this.active&&yt(this,"click-down",this.id)}
      style=${mt({"background-color":At(t),color:At(e)})}
    >
      <slot></slot>
    </div>`}};Bt.styles=l`
    #button {
      display: flex;
      flex-grow: 1;
      height: 100%;
      padding-left: 8px;
      padding-right: 8px;
      margin: 1px;
      border-radius: 5px;
      font-family: "Quicksand";
      font-size: 18px;
      justify-content: center;
      align-items: center;
      border-style: none;
      user-select: none;
      min-width: 20px;
      white-space: nowrap;
    }
    :host {
      width: 100%;
    }
  `,Et([ht({type:Array})],Bt.prototype,"color",void 0),Et([ht({type:Boolean})],Bt.prototype,"active",void 0),Et([ht({type:Number})],Bt.prototype,"maxWidth",void 0),Bt=Et([ct("cw-button")],Bt);var Nt=function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};let Tt=class extends lt{constructor(){super(...arguments),this.color=[255,255,255],this.width=1/0,this.height=1/0,this.padding=0}render(){const t=Pt(this.color);return D`<div
      style=${mt({"background-color":At(this.color),color:At(t),...isFinite(this.width)?{"max-width":this.width+"px"}:{},...isFinite(this.height)?{height:this.height+"px"}:{},padding:this.padding+"px"})}
    >
      <slot></slot>
    </div>`}};Tt.styles=l`
    div {
      display: flex;
      align-items: stretch;
      margin: 1px;
      border-radius: 5px;
      font-family: "Quicksand";
      font-size: 18px;
      border-style: none;
      user-select: none;
      white-space: nowrap;
    }
  `,Nt([ht({type:Array})],Tt.prototype,"color",void 0),Nt([ht({type:Number})],Tt.prototype,"width",void 0),Nt([ht({type:Number})],Tt.prototype,"height",void 0),Nt([ht({type:Number})],Tt.prototype,"padding",void 0),Tt=Nt([ct("cw-container")],Tt);var qt={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},Ht={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},It=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],Ut={CSS:{},springs:{}};function Dt(t,e,n){return Math.min(Math.max(t,e),n)}function zt(t,e){return t.indexOf(e)>-1}function Vt(t,e){return t.apply(null,e)}var Lt={arr:function(t){return Array.isArray(t)},obj:function(t){return zt(Object.prototype.toString.call(t),"Object")},pth:function(t){return Lt.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},inp:function(t){return t instanceof HTMLInputElement},dom:function(t){return t.nodeType||Lt.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},nil:function(t){return Lt.und(t)||null===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return Lt.hex(t)||Lt.rgb(t)||Lt.hsl(t)},key:function(t){return!qt.hasOwnProperty(t)&&!Ht.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}};function _t(t){var e=/\(([^)]+)\)/.exec(t);return e?e[1].split(",").map((function(t){return parseFloat(t)})):[]}function Ft(t,e){var n=_t(t),r=Dt(Lt.und(n[0])?1:n[0],.1,100),o=Dt(Lt.und(n[1])?100:n[1],.1,100),i=Dt(Lt.und(n[2])?10:n[2],.1,100),s=Dt(Lt.und(n[3])?0:n[3],.1,100),a=Math.sqrt(o/r),l=i/(2*Math.sqrt(o*r)),c=l<1?a*Math.sqrt(1-l*l):0,u=l<1?(l*a-s)/c:-s+a;function h(t){var n=e?e*t/1e3:t;return n=l<1?Math.exp(-n*l*a)*(1*Math.cos(c*n)+u*Math.sin(c*n)):(1+u*n)*Math.exp(-n*a),0===t||1===t?t:1-n}return e?h:function(){var e=Ut.springs[t];if(e)return e;for(var n=0,r=0;;)if(1===h(n+=1/6)){if(++r>=16)break}else r=0;var o=n*(1/6)*1e3;return Ut.springs[t]=o,o}}function Gt(t){return void 0===t&&(t=10),function(e){return Math.ceil(Dt(e,1e-6,1)*t)*(1/t)}}var Wt,Qt,Zt=function(){function t(t,e){return 1-3*e+3*t}function e(t,e){return 3*e-6*t}function n(t){return 3*t}function r(r,o,i){return((t(o,i)*r+e(o,i))*r+n(o))*r}function o(r,o,i){return 3*t(o,i)*r*r+2*e(o,i)*r+n(o)}return function(t,e,n,i){if(0<=t&&t<=1&&0<=n&&n<=1){var s=new Float32Array(11);if(t!==e||n!==i)for(var a=0;a<11;++a)s[a]=r(.1*a,t,n);return function(o){return t===e&&n===i||0===o||1===o?o:r(l(o),e,i)}}function l(e){for(var i=0,a=1;10!==a&&s[a]<=e;++a)i+=.1;--a;var l=i+.1*((e-s[a])/(s[a+1]-s[a])),c=o(l,t,n);return c>=.001?function(t,e,n,i){for(var s=0;s<4;++s){var a=o(e,n,i);if(0===a)return e;e-=(r(e,n,i)-t)/a}return e}(e,l,t,n):0===c?l:function(t,e,n,o,i){var s,a,l=0;do{(s=r(a=e+(n-e)/2,o,i)-t)>0?n=a:e=a}while(Math.abs(s)>1e-7&&++l<10);return a}(e,i,i+.1,t,n)}}}(),Xt=(Wt={linear:function(){return function(t){return t}}},Qt={Sine:function(){return function(t){return 1-Math.cos(t*Math.PI/2)}},Circ:function(){return function(t){return 1-Math.sqrt(1-t*t)}},Back:function(){return function(t){return t*t*(3*t-2)}},Bounce:function(){return function(t){for(var e,n=4;t<((e=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*e-2)/22-t,2)}},Elastic:function(t,e){void 0===t&&(t=1),void 0===e&&(e=.5);var n=Dt(t,1,10),r=Dt(e,.1,2);return function(t){return 0===t||1===t?t:-n*Math.pow(2,10*(t-1))*Math.sin((t-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(t,e){Qt[t]=function(){return function(t){return Math.pow(t,e+2)}}})),Object.keys(Qt).forEach((function(t){var e=Qt[t];Wt["easeIn"+t]=e,Wt["easeOut"+t]=function(t,n){return function(r){return 1-e(t,n)(1-r)}},Wt["easeInOut"+t]=function(t,n){return function(r){return r<.5?e(t,n)(2*r)/2:1-e(t,n)(-2*r+2)/2}},Wt["easeOutIn"+t]=function(t,n){return function(r){return r<.5?(1-e(t,n)(1-2*r))/2:(e(t,n)(2*r-1)+1)/2}}})),Wt);function Yt(t,e){if(Lt.fnc(t))return t;var n=t.split("(")[0],r=Xt[n],o=_t(t);switch(n){case"spring":return Ft(t,e);case"cubicBezier":return Vt(Zt,o);case"steps":return Vt(Gt,o);default:return Vt(r,o)}}function Kt(t){try{return document.querySelectorAll(t)}catch(t){return}}function Jt(t,e){for(var n=t.length,r=arguments.length>=2?arguments[1]:void 0,o=[],i=0;i<n;i++)if(i in t){var s=t[i];e.call(r,s,i,t)&&o.push(s)}return o}function te(t){return t.reduce((function(t,e){return t.concat(Lt.arr(e)?te(e):e)}),[])}function ee(t){return Lt.arr(t)?t:(Lt.str(t)&&(t=Kt(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function ne(t,e){return t.some((function(t){return t===e}))}function re(t){var e={};for(var n in t)e[n]=t[n];return e}function oe(t,e){var n=re(t);for(var r in t)n[r]=e.hasOwnProperty(r)?e[r]:t[r];return n}function ie(t,e){var n=re(t);for(var r in e)n[r]=Lt.und(t[r])?e[r]:t[r];return n}function se(t){return Lt.rgb(t)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=t))?"rgba("+n[1]+",1)":e:Lt.hex(t)?function(t){var e=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(t,e,n,r){return e+e+n+n+r+r})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(t):Lt.hsl(t)?function(t){var e,n,r,o=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),i=parseInt(o[1],10)/360,s=parseInt(o[2],10)/100,a=parseInt(o[3],10)/100,l=o[4]||1;function c(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}if(0==s)e=n=r=a;else{var u=a<.5?a*(1+s):a+s-a*s,h=2*a-u;e=c(h,u,i+1/3),n=c(h,u,i),r=c(h,u,i-1/3)}return"rgba("+255*e+","+255*n+","+255*r+","+l+")"}(t):void 0;var e,n}function ae(t){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);if(e)return e[1]}function le(t,e){return Lt.fnc(t)?t(e.target,e.id,e.total):t}function ce(t,e){return t.getAttribute(e)}function ue(t,e,n){if(ne([n,"deg","rad","turn"],ae(e)))return e;var r=Ut.CSS[e+n];if(!Lt.und(r))return r;var o=document.createElement(t.tagName),i=t.parentNode&&t.parentNode!==document?t.parentNode:document.body;i.appendChild(o),o.style.position="absolute",o.style.width=100+n;var s=100/o.offsetWidth;i.removeChild(o);var a=s*parseFloat(e);return Ut.CSS[e+n]=a,a}function he(t,e,n){if(e in t.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),o=t.style[e]||getComputedStyle(t).getPropertyValue(r)||"0";return n?ue(t,o,n):o}}function de(t,e){return Lt.dom(t)&&!Lt.inp(t)&&(!Lt.nil(ce(t,e))||Lt.svg(t)&&t[e])?"attribute":Lt.dom(t)&&ne(It,e)?"transform":Lt.dom(t)&&"transform"!==e&&he(t,e)?"css":null!=t[e]?"object":void 0}function pe(t){if(Lt.dom(t)){for(var e,n=t.style.transform||"",r=/(\w+)\(([^)]*)\)/g,o=new Map;e=r.exec(n);)o.set(e[1],e[2]);return o}}function fe(t,e,n,r){var o=zt(e,"scale")?1:0+function(t){return zt(t,"translate")||"perspective"===t?"px":zt(t,"rotate")||zt(t,"skew")?"deg":void 0}(e),i=pe(t).get(e)||o;return n&&(n.transforms.list.set(e,i),n.transforms.last=e),r?ue(t,i,r):i}function ge(t,e,n,r){switch(de(t,e)){case"transform":return fe(t,e,r,n);case"css":return he(t,e,n);case"attribute":return ce(t,e);default:return t[e]||0}}function ve(t,e){var n=/^(\*=|\+=|-=)/.exec(t);if(!n)return t;var r=ae(t)||0,o=parseFloat(e),i=parseFloat(t.replace(n[0],""));switch(n[0][0]){case"+":return o+i+r;case"-":return o-i+r;case"*":return o*i+r}}function me(t,e){if(Lt.col(t))return se(t);if(/\s/g.test(t))return t;var n=ae(t),r=n?t.substr(0,t.length-n.length):t;return e?r+e:r}function ye(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function be(t){for(var e,n=t.points,r=0,o=0;o<n.numberOfItems;o++){var i=n.getItem(o);o>0&&(r+=ye(e,i)),e=i}return r}function we(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return function(t){return 2*Math.PI*ce(t,"r")}(t);case"rect":return function(t){return 2*ce(t,"width")+2*ce(t,"height")}(t);case"line":return function(t){return ye({x:ce(t,"x1"),y:ce(t,"y1")},{x:ce(t,"x2"),y:ce(t,"y2")})}(t);case"polyline":return be(t);case"polygon":return function(t){var e=t.points;return be(t)+ye(e.getItem(e.numberOfItems-1),e.getItem(0))}(t)}}function xe(t,e){var n=e||{},r=n.el||function(t){for(var e=t.parentNode;Lt.svg(e)&&Lt.svg(e.parentNode);)e=e.parentNode;return e}(t),o=r.getBoundingClientRect(),i=ce(r,"viewBox"),s=o.width,a=o.height,l=n.viewBox||(i?i.split(" "):[0,0,s,a]);return{el:r,viewBox:l,x:l[0]/1,y:l[1]/1,w:s,h:a,vW:l[2],vH:l[3]}}function Me(t,e,n){function r(n){void 0===n&&(n=0);var r=e+n>=1?e+n:0;return t.el.getPointAtLength(r)}var o=xe(t.el,t.svg),i=r(),s=r(-1),a=r(1),l=n?1:o.w/o.vW,c=n?1:o.h/o.vH;switch(t.property){case"x":return(i.x-o.x)*l;case"y":return(i.y-o.y)*c;case"angle":return 180*Math.atan2(a.y-s.y,a.x-s.x)/Math.PI}}function ke(t,e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=me(Lt.pth(t)?t.totalLength:t,e)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:Lt.str(t)||e?r.split(n):[]}}function $e(t){return Jt(t?te(Lt.arr(t)?t.map(ee):ee(t)):[],(function(t,e,n){return n.indexOf(t)===e}))}function Se(t){var e=$e(t);return e.map((function(t,n){return{target:t,id:n,total:e.length,transforms:{list:pe(t)}}}))}function Oe(t,e){var n=re(e);if(/^spring/.test(n.easing)&&(n.duration=Ft(n.easing)),Lt.arr(t)){var r=t.length;2===r&&!Lt.obj(t[0])?t={value:t}:Lt.fnc(e.duration)||(n.duration=e.duration/r)}var o=Lt.arr(t)?t:[t];return o.map((function(t,n){var r=Lt.obj(t)&&!Lt.pth(t)?t:{value:t};return Lt.und(r.delay)&&(r.delay=n?0:e.delay),Lt.und(r.endDelay)&&(r.endDelay=n===o.length-1?e.endDelay:0),r})).map((function(t){return ie(t,n)}))}function Ce(t,e){var n=[],r=e.keyframes;for(var o in r&&(e=ie(function(t){for(var e=Jt(te(t.map((function(t){return Object.keys(t)}))),(function(t){return Lt.key(t)})).reduce((function(t,e){return t.indexOf(e)<0&&t.push(e),t}),[]),n={},r=function(r){var o=e[r];n[o]=t.map((function(t){var e={};for(var n in t)Lt.key(n)?n==o&&(e.value=t[n]):e[n]=t[n];return e}))},o=0;o<e.length;o++)r(o);return n}(r),e)),e)Lt.key(o)&&n.push({name:o,tweens:Oe(e[o],t)});return n}function Pe(t,e){var n;return t.tweens.map((function(r){var o=function(t,e){var n={};for(var r in t){var o=le(t[r],e);Lt.arr(o)&&1===(o=o.map((function(t){return le(t,e)}))).length&&(o=o[0]),n[r]=o}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,e),i=o.value,s=Lt.arr(i)?i[1]:i,a=ae(s),l=ge(e.target,t.name,a,e),c=n?n.to.original:l,u=Lt.arr(i)?i[0]:c,h=ae(u)||ae(l),d=a||h;return Lt.und(s)&&(s=c),o.from=ke(u,d),o.to=ke(ve(s,u),d),o.start=n?n.end:0,o.end=o.start+o.delay+o.duration+o.endDelay,o.easing=Yt(o.easing,o.duration),o.isPath=Lt.pth(i),o.isPathTargetInsideSVG=o.isPath&&Lt.svg(e.target),o.isColor=Lt.col(o.from.original),o.isColor&&(o.round=1),n=o,o}))}var je={css:function(t,e,n){return t.style[e]=n},attribute:function(t,e,n){return t.setAttribute(e,n)},object:function(t,e,n){return t[e]=n},transform:function(t,e,n,r,o){if(r.list.set(e,n),e===r.last||o){var i="";r.list.forEach((function(t,e){i+=e+"("+t+") "})),t.style.transform=i}}};function Ae(t,e){Se(t).forEach((function(t){for(var n in e){var r=le(e[n],t),o=t.target,i=ae(r),s=ge(o,n,i,t),a=ve(me(r,i||ae(s)),s),l=de(o,n);je[l](o,n,a,t.transforms,!0)}}))}function Re(t,e){return Jt(te(t.map((function(t){return e.map((function(e){return function(t,e){var n=de(t.target,e.name);if(n){var r=Pe(e,t),o=r[r.length-1];return{type:n,property:e.name,animatable:t,tweens:r,duration:o.end,delay:r[0].delay,endDelay:o.endDelay}}}(t,e)}))}))),(function(t){return!Lt.und(t)}))}function Ee(t,e){var n=t.length,r=function(t){return t.timelineOffset?t.timelineOffset:0},o={};return o.duration=n?Math.max.apply(Math,t.map((function(t){return r(t)+t.duration}))):e.duration,o.delay=n?Math.min.apply(Math,t.map((function(t){return r(t)+t.delay}))):e.delay,o.endDelay=n?o.duration-Math.max.apply(Math,t.map((function(t){return r(t)+t.duration-t.endDelay}))):e.endDelay,o}var Be=0;var Ne=[],Te=function(){var t;function e(n){for(var r=Ne.length,o=0;o<r;){var i=Ne[o];i.paused?(Ne.splice(o,1),r--):(i.tick(n),o++)}t=o>0?requestAnimationFrame(e):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){He.suspendWhenDocumentHidden&&(qe()?t=cancelAnimationFrame(t):(Ne.forEach((function(t){return t._onDocumentVisibility()})),Te()))})),function(){t||qe()&&He.suspendWhenDocumentHidden||!(Ne.length>0)||(t=requestAnimationFrame(e))}}();function qe(){return!!document&&document.hidden}function He(t){void 0===t&&(t={});var e,n=0,r=0,o=0,i=0,s=null;function a(t){var e=window.Promise&&new Promise((function(t){return s=t}));return t.finished=e,e}var l=function(t){var e=oe(qt,t),n=oe(Ht,t),r=Ce(n,t),o=Se(t.targets),i=Re(o,r),s=Ee(i,n),a=Be;return Be++,ie(e,{id:a,children:[],animatables:o,animations:i,duration:s.duration,delay:s.delay,endDelay:s.endDelay})}(t);a(l);function c(){var t=l.direction;"alternate"!==t&&(l.direction="normal"!==t?"normal":"reverse"),l.reversed=!l.reversed,e.forEach((function(t){return t.reversed=l.reversed}))}function u(t){return l.reversed?l.duration-t:t}function h(){n=0,r=u(l.currentTime)*(1/He.speed)}function d(t,e){e&&e.seek(t-e.timelineOffset)}function p(t){for(var e=0,n=l.animations,r=n.length;e<r;){var o=n[e],i=o.animatable,s=o.tweens,a=s.length-1,c=s[a];a&&(c=Jt(s,(function(e){return t<e.end}))[0]||c);for(var u=Dt(t-c.start-c.delay,0,c.duration)/c.duration,h=isNaN(u)?1:c.easing(u),d=c.to.strings,p=c.round,f=[],g=c.to.numbers.length,v=void 0,m=0;m<g;m++){var y=void 0,b=c.to.numbers[m],w=c.from.numbers[m]||0;y=c.isPath?Me(c.value,h*b,c.isPathTargetInsideSVG):w+h*(b-w),p&&(c.isColor&&m>2||(y=Math.round(y*p)/p)),f.push(y)}var x=d.length;if(x){v=d[0];for(var M=0;M<x;M++){d[M];var k=d[M+1],$=f[M];isNaN($)||(v+=k?$+k:$+" ")}}else v=f[0];je[o.type](i.target,o.property,v,i.transforms),o.currentValue=v,e++}}function f(t){l[t]&&!l.passThrough&&l[t](l)}function g(t){var h=l.duration,g=l.delay,v=h-l.endDelay,m=u(t);l.progress=Dt(m/h*100,0,100),l.reversePlayback=m<l.currentTime,e&&function(t){if(l.reversePlayback)for(var n=i;n--;)d(t,e[n]);else for(var r=0;r<i;r++)d(t,e[r])}(m),!l.began&&l.currentTime>0&&(l.began=!0,f("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,f("loopBegin")),m<=g&&0!==l.currentTime&&p(0),(m>=v&&l.currentTime!==h||!h)&&p(h),m>g&&m<v?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,f("changeBegin")),f("change"),p(m)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,f("changeComplete")),l.currentTime=Dt(m,0,h),l.began&&f("update"),t>=h&&(r=0,l.remaining&&!0!==l.remaining&&l.remaining--,l.remaining?(n=o,f("loopComplete"),l.loopBegan=!1,"alternate"===l.direction&&c()):(l.paused=!0,l.completed||(l.completed=!0,f("loopComplete"),f("complete"),!l.passThrough&&"Promise"in window&&(s(),a(l)))))}return l.reset=function(){var t=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed="reverse"===t,l.remaining=l.loop,e=l.children;for(var n=i=e.length;n--;)l.children[n].reset();(l.reversed&&!0!==l.loop||"alternate"===t&&1===l.loop)&&l.remaining++,p(l.reversed?l.duration:0)},l._onDocumentVisibility=h,l.set=function(t,e){return Ae(t,e),l},l.tick=function(t){o=t,n||(n=o),g((o+(r-n))*He.speed)},l.seek=function(t){g(u(t))},l.pause=function(){l.paused=!0,h()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,Ne.push(l),h(),Te())},l.reverse=function(){c(),l.completed=!l.reversed,h()},l.restart=function(){l.reset(),l.play()},l.remove=function(t){Ue($e(t),l)},l.reset(),l.autoplay&&l.play(),l}function Ie(t,e){for(var n=e.length;n--;)ne(t,e[n].animatable.target)&&e.splice(n,1)}function Ue(t,e){var n=e.animations,r=e.children;Ie(t,n);for(var o=r.length;o--;){var i=r[o],s=i.animations;Ie(t,s),s.length||i.children.length||r.splice(o,1)}n.length||r.length||e.pause()}He.version="3.2.1",He.speed=1,He.suspendWhenDocumentHidden=!0,He.running=Ne,He.remove=function(t){for(var e=$e(t),n=Ne.length;n--;){Ue(e,Ne[n])}},He.get=ge,He.set=Ae,He.convertPx=ue,He.path=function(t,e){var n=Lt.str(t)?Kt(t)[0]:t,r=e||100;return function(t){return{property:t,el:n,svg:xe(n),totalLength:we(n)*(r/100)}}},He.setDashoffset=function(t){var e=we(t);return t.setAttribute("stroke-dasharray",e),e},He.stagger=function(t,e){void 0===e&&(e={});var n=e.direction||"normal",r=e.easing?Yt(e.easing):null,o=e.grid,i=e.axis,s=e.from||0,a="first"===s,l="center"===s,c="last"===s,u=Lt.arr(t),h=u?parseFloat(t[0]):parseFloat(t),d=u?parseFloat(t[1]):0,p=ae(u?t[1]:t)||0,f=e.start||0+(u?h:0),g=[],v=0;return function(t,e,m){if(a&&(s=0),l&&(s=(m-1)/2),c&&(s=m-1),!g.length){for(var y=0;y<m;y++){if(o){var b=l?(o[0]-1)/2:s%o[0],w=l?(o[1]-1)/2:Math.floor(s/o[0]),x=b-y%o[0],M=w-Math.floor(y/o[0]),k=Math.sqrt(x*x+M*M);"x"===i&&(k=-x),"y"===i&&(k=-M),g.push(k)}else g.push(Math.abs(s-y));v=Math.max.apply(Math,g)}r&&(g=g.map((function(t){return r(t/v)*v}))),"reverse"===n&&(g=g.map((function(t){return i?t<0?-1*t:-t:Math.abs(v-t)})))}return f+(u?(d-h)/v:h)*(Math.round(100*g[e])/100)+p}},He.timeline=function(t){void 0===t&&(t={});var e=He(t);return e.duration=0,e.add=function(n,r){var o=Ne.indexOf(e),i=e.children;function s(t){t.passThrough=!0}o>-1&&Ne.splice(o,1);for(var a=0;a<i.length;a++)s(i[a]);var l=ie(n,oe(Ht,t));l.targets=l.targets||t.targets;var c=e.duration;l.autoplay=!1,l.direction=e.direction,l.timelineOffset=Lt.und(r)?c:ve(r,c),s(e),e.seek(l.timelineOffset);var u=He(l);s(u),i.push(u);var h=Ee(i,t);return e.delay=h.delay,e.endDelay=h.endDelay,e.duration=h.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e},He.easing=Yt,He.penner=Xt,He.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t};var De=He;class ze{constructor(t,e){this.hue=t,this.saturation=e}get bright(){return xt.a.hsl.rgb([this.hue,this.saturation,75])}get midtone(){return xt.a.hsl.rgb([this.hue,this.saturation,50])}get dark(){return xt.a.hsl.rgb([this.hue,this.saturation,25])}}class Ve{constructor(t){this.hue=t}get faintest(){return new ze(this.hue,25)}get faint(){return new ze(this.hue,50)}get deep(){return new ze(this.hue,75)}get deepest(){return new ze(this.hue,100)}}class Le{static get red(){return new Ve(0)}static get orange(){return new Ve(30)}static get yellow(){return new Ve(60)}static get chartreuse(){return new Ve(90)}static get lime(){return new Ve(120)}static get springGreen(){return new Ve(150)}static get cyan(){return new Ve(180)}static get dodgerBlue(){return new Ve(210)}static get blue(){return new Ve(240)}static get indigo(){return new Ve(270)}static get magenta(){return new Ve(300)}static get pink(){return new Ve(330)}static get gray(){return new ze(0,0)}static get black(){return[0,0,0]}static get white(){return[255,255,100]}}var _e=function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};let Fe=class extends lt{constructor(){super(...arguments),this.color=Le.white,this.active=!1,this.initialized=!1}updated(){De.remove([this.renderRoot.querySelector("#panel"),this.renderRoot.querySelector("#curtain")]),this.active?(this.initialized=!0,De({targets:this.renderRoot.querySelector("#panel"),opacity:[0,1],translateY:[40,0],duration:1e3,easing:"easeOutCubic"}),De({targets:this.renderRoot.querySelector("#curtain"),opacity:[0,.5],duration:500,easing:"easeOutCubic"})):this.initialized&&(De({targets:this.renderRoot.querySelector("#panel"),opacity:[1,0],translateY:[0,40],duration:250,easing:"linear"}),De({targets:this.renderRoot.querySelector("#curtain"),opacity:[.5,0],duration:250,easing:"linear"}))}render(){const t=this.color,e=Pt(t);return D`
      <div id="curtain"></div>
      <div
        id="outer-div"
        @click=${()=>this.dispatchEvent(new CustomEvent("dismissed",{bubbles:!0,composed:!0}))}
        style=${mt({"pointer-events":this.active?"auto":"none","touch-action":this.active?"auto":"none"})}
      >
        <div
          id="panel"
          style=${mt({"background-color":At(t),color:At(e)})}
          @click=${t=>t.stopPropagation()}
        >
          <slot></slot>
        </div>
      </div>
    `}};Fe.styles=l`
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
  `,_e([ht({type:Array})],Fe.prototype,"color",void 0),_e([ht({type:Boolean})],Fe.prototype,"active",void 0),Fe=_e([ct("cw-popup")],Fe);var Ge=function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};let We=class extends lt{render(){return D`<div></div>`}};We.styles=l`
    div {
      width: 8px;
    }
  `,We=Ge([ct("cw-spacer")],We);var Qe=function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};let Ze=class extends lt{constructor(){super(...arguments),this.color=[0,0,0],this.incrementedColor=[0,0,0],this.showIncremented=!1,this.showHex=!1,this.initialized=!1}updated(){this.initialized||(this.initialized=!0,De({targets:this.renderRoot.querySelector("div"),height:"40px",duration:800,changeBegin:()=>{this.dispatchEvent(new CustomEvent("animation-started",{bubbles:!0,composed:!0}))},change:()=>{this.dispatchEvent(new CustomEvent("animation-changed",{bubbles:!0,composed:!0}))},changeComplete:()=>{this.dispatchEvent(new CustomEvent("animation-ended",{bubbles:!0,composed:!0}))}}),De({targets:this.renderRoot.querySelector("#incremented"),translateX:"40px",opacity:0,duration:0,easing:"linear"}),De({targets:this.renderRoot.querySelector("#incremented"),translateX:"0px",delay:100,duration:550,easing:"easeOutBounce"}),De({targets:this.renderRoot.querySelector("#incremented"),opacity:1,delay:100,duration:550,easing:"linear"})),this.showHex?De({targets:this.renderRoot.querySelector("span"),opacity:[0,1],duration:250,delay:500,easing:"linear"}):(De.remove(this.renderRoot.querySelector("span")),De({targets:this.renderRoot.querySelector("span"),opacity:0,easing:"linear",duration:250}))}onMouseOver(){this.showHex=!0}onMouseLeave(){this.showHex=!1}render(){const t=D`<cw-spacer></cw-spacer>`;return D`<div
      id="container"
      style=${mt({"background-color":At(this.color)})}
      @mousedown=${this.onMouseOver}
      @touchstart=${this.onMouseOver}
      @mouseup=${this.onMouseLeave}
      @mouseleave=${this.onMouseLeave}
      @touchend=${this.onMouseLeave}
    >
      <span
        id="hex"
        style=${mt({color:At(Pt(this.color))})}
        >${At(this.color)}</span
      >
      ${this.showIncremented?D`<div
            id="incremented"
            style="margin-top: 60px; transform: scale(0.75)"
          >
            <cw-container .padding=${8}
              >▼${t}<cw-button .color=${this.incrementedColor}
                ><slot></slot></cw-button
            ></cw-container>
          </div>`:""}
    </div>`}};Ze.styles=l`
    #container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 0px;
      padding: 5px;
      margin: 2px;
      border-radius: 5px;
      opacity: 1;
    }
    #hex {
      font-family: "Courier New";
      opacity: 0;
      margin: 8px;
      font-size: 16px;
    }
  `,Qe([ht({type:Array})],Ze.prototype,"color",void 0),Qe([ht({type:Array})],Ze.prototype,"incrementedColor",void 0),Qe([ht({type:Boolean})],Ze.prototype,"showIncremented",void 0),Qe([ht({attribute:!1})],Ze.prototype,"showHex",void 0),Ze=Qe([ct("cw-cell")],Ze);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const{et:Xe}=et,Ye=()=>document.createComment(""),Ke=(t,e,n)=>{var r;const o=t.A.parentNode,i=void 0===e?t.B:e.A;if(void 0===n){const e=o.insertBefore(Ye(),i),r=o.insertBefore(Ye(),i);n=new Xe(e,r,t,t.options)}else{const e=n.B.nextSibling,s=n.M!==t;if(s&&(null===(r=n.Q)||void 0===r||r.call(n,t),n.M=t),e!==i||s){let t=n.A;for(;t!==e;){const e=t.nextSibling;o.insertBefore(t,i),t=e}}}return n},Je=(t,e,n=t)=>(t.I(e,n),t),tn={},en=t=>{var e;null===(e=t.P)||void 0===e||e.call(t,!1,!0);let n=t.A;const r=t.B.nextSibling;for(;n!==r;){const t=n.nextSibling;n.remove(),n=t}},nn=(t,e,n)=>{const r=new Map;for(let o=e;o<=n;o++)r.set(t[o],o);return r},rn=gt(class extends vt{constructor(t){if(super(t),t.type!==ft)throw Error("repeat() can only be used in text expressions")}Mt(t,e,n){let r;void 0===n?n=e:void 0!==e&&(r=e);const o=[],i=[];let s=0;for(const e of t)o[s]=r?r(e,s):s,i[s]=n(e,s),s++;return{values:i,keys:o}}render(t,e,n){return this.Mt(t,e,n).values}update(t,[e,n,r]){var o;const i=t.H,{values:s,keys:a}=this.Mt(e,n,r);if(!i)return this.Pt=a,s;const l=null!==(o=this.Pt)&&void 0!==o?o:this.Pt=[],c=[];let u,h,d=0,p=i.length-1,f=0,g=s.length-1;for(;d<=p&&f<=g;)if(null===i[d])d++;else if(null===i[p])p--;else if(l[d]===a[f])c[f]=Je(i[d],s[f]),d++,f++;else if(l[p]===a[g])c[g]=Je(i[p],s[g]),p--,g--;else if(l[d]===a[g])c[g]=Je(i[d],s[g]),Ke(t,c[g+1],i[d]),d++,g--;else if(l[p]===a[f])c[f]=Je(i[p],s[f]),Ke(t,i[d],i[p]),p--,f++;else if(void 0===u&&(u=nn(a,f,g),h=nn(l,d,p)),u.has(l[d]))if(u.has(l[p])){const e=h.get(a[f]),n=void 0!==e?i[e]:null;if(null===n){const e=Ke(t,i[d]);Je(e,s[f]),c[f]=e}else c[f]=Je(n,s[f]),Ke(t,i[d],n),i[e]=null;f++}else en(i[p]),p--;else en(i[d]),d++;for(;f<=g;){const e=Ke(t,c[g+1]);Je(e,s[f]),c[f++]=e}for(;d<=p;){const t=i[d++];null!==t&&en(t)}return this.Pt=a,((t,e=tn)=>{t.H=e})(t,c),z}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class on{constructor(t,e){this.targetColor=[0,0,0],this.iterations=[[0,0,0]],this.moves=[],this.difficulty="",this.optimalMoves=0,this.win=!1,this.active=!1,(this.host=t).addController(this),this.colorSpace=e.getColorSpace(),this.difficulty=e.difficulty.stringValue,this.startGame()}startGame(){for(this.targetColor=[0,0,0].map(t=>Math.floor(Math.random()*this.colorSpace.steps));0===this.optimalMoves;)this.iterations=[[0,0,0].map(t=>Math.floor(Math.random()*this.colorSpace.steps))],this.optimalMoves=Rt(this.targetColor,this.iterations[0]);this.active=!0,this.host.requestUpdate()}iterate(t){const{delta:e,direction:n}=t,r=[...this.iterations[this.iterations.length-1]];for(let t=0;t<e.length;t++)r[t]+e[t]*n>=0&&r[t]+e[t]*n<this.colorSpace.steps&&(r[t]+=e[t]*n);this.moves.push(t),this.win=r.every((t,e)=>t===this.targetColor[e]),this.iterations=[...this.iterations,r],this.host.requestUpdate()}hostConnected(){}}class sn{constructor(t,e,n){this.owner=t,this.allowedValues=e,this._stringValue=n}get stringValue(){return this._stringValue}set stringValue(t){this._stringValue=t,this.owner.changesMade=!0,this.owner.revision++,this.owner.host.requestUpdate()}get allowedStringValues(){return this.allowedValues.map(t=>t[0])}get internalValue(){return this.allowedValues.find(t=>t[0]===this._stringValue)[1]}}class an{constructor(t){this.difficulty=new sn(this,[["Easy",3],["Normal",6],["Hard",16]],"Normal"),this.changesMade=!1,this.revision=0,(this.host=t).addController(this)}hostConnected(){}getColorSpace(){return{steps:this.difficulty.internalValue}}}var ln=function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};let cn=class extends lt{constructor(){super(),this.rounds=[],this.gameOptions=new an(this),this.moves=[[1,0,0],[0,1,0],[0,0,1]].flatMap(t=>[-1,1].map(e=>({delta:t,direction:e}))),this.scrollingRequested=!1,this.scrolling=!1,this.animating=!1,this.menuActive=!1,this.optionsActive=!1,this.helpActive=!1}connectedCallback(){super.connectedCallback(),this.startNewGame()}startNewGame(){this.rounds.length>0&&(this.rounds[this.rounds.length-1].active=!1),this.rounds=[...this.rounds,new on(this,this.gameOptions)],this.scrollingRequested=this.scrolling=!1,this.forceScrollToBottom()}iterate(t){this.rounds[this.rounds.length-1].iterate(t.detail),this.scrollingRequested=this.scrolling=!1,this.forceScrollToBottom(),t.stopPropagation()}onMouseOver(){this.scrolling||(this.scrollingRequested=!0,this.requestUpdate())}onMouseInteraction(){this.animating=!1,this.onMouseOver()}onAnimationStarted(){this.animating=!0}onAnimationChanged(){this.animating&&this.forceScrollToBottom()}onAnimationEnded(){this.animating=!1,this.scrollingRequested&&this.requestUpdate()}updated(){this.scrollingRequested&&!this.animating&&(this.scrolling=!0,this.scrollingRequested=!1,this.forceScrollToBottom())}forceScrollToBottom(){if(!this.shadowRoot)return;const t=this.shadowRoot.querySelector("#top");if(!t)return;const e=t.lastElementChild;e&&e.scrollIntoView()}render(){const t=this.rounds[this.rounds.length-1];return D`
      <div id="outer-div">
        <div
          id="top"
          @mouseover=${this.onMouseOver}
          @mousewheel=${this.onMouseInteraction}
          @touchstart=${this.onMouseInteraction}
          @animation-started=${this.onAnimationStarted}
          @animation-changed=${this.onAnimationChanged}
          @animation-ended=${this.onAnimationEnded}
          style=${mt({overflow:this.scrollingRequested?"auto":""})}
        >
          ${rn(this.rounds,(t,e)=>D`<cw-round
                .targetColor=${Mt(t.targetColor,t.colorSpace)}
                .iterations=${t.iterations.map(e=>Mt(e,t.colorSpace))}
                .moves=${t.moves}
                .active=${t.active}
                difficulty=${t.difficulty}
                .gameId=${e+1}
                .win=${t.win}
                .optimalMoves=${t.optimalMoves}
              ></cw-round>`)}
          <!-- A zero-height div that is always the last element in #top. -->
          <div style=${mt({height:"0px"})}></div>
        </div>
        <div class="controls">
          <cw-primary-controls
            @color-incremented=${this.iterate}
            .moves=${this.moves.map(e=>({...e,valid:!!kt(t.iterations[t.iterations.length-1],e,t.colorSpace)}))}
            ?active=${!t.win}
          ></cw-primary-controls>
          <cw-meta-controls
            @new-game=${this.startNewGame}
            @popup-menu=${()=>{this.menuActive=!0}}
          ></cw-meta-controls>
        </div>
      </div>
      <cw-menu
        .active=${this.menuActive}
        @dismissed=${()=>{this.menuActive=!1,this.gameOptions.changesMade&&(this.gameOptions.changesMade=!1,this.startNewGame())}}
        @new-game=${()=>{this.menuActive=!1,this.gameOptions.changesMade=!1,this.startNewGame()}}
        @popup-options=${()=>{this.menuActive=!1,this.optionsActive=!0}}
        @popup-help=${()=>{this.menuActive=!1,this.helpActive=!0}}
      ></cw-menu>
      <cw-options
        .active=${this.optionsActive}
        .gameOptions=${this.gameOptions}
        .revision=${this.gameOptions.revision}
        @dismissed=${()=>{this.optionsActive=!1,this.menuActive=!0}}
      ></cw-options>
      <cw-help
        .active=${this.helpActive}
        @dismissed=${()=>{this.helpActive=!1,this.menuActive=!0}}
      ></cw-help>
    `}};cn.styles=l`
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
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    #top::-webkit-scrollbar {
      display: none;
    }
    .controls {
      padding: 5px;
      display: flex;
      justify-content: space-between;
    }
  `,ln([ht({attribute:!1})],cn.prototype,"menuActive",void 0),ln([ht({attribute:!1})],cn.prototype,"optionsActive",void 0),ln([ht({attribute:!1})],cn.prototype,"helpActive",void 0),cn=ln([ct("cw-game")],cn);var un=function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};let hn=class extends lt{constructor(){super(...arguments),this.buttonColor=Le.indigo.faint.dark}render(){return D`<cw-container .width=${400} .height=${50}>
      <cw-button
        @click-down=${()=>yt(this,"new-game")}
        .color=${this.buttonColor}
      >
        New Game
      </cw-button>
      <cw-button
        @click-down=${()=>yt(this,"popup-menu")}
        .color=${this.buttonColor}
      >
        ${"☰"}
      </cw-button>
    </cw-container>`}};hn.styles=l`
    :host {
      justify-content: flex-end;
    }
  `,hn=un([ct("cw-meta-controls")],hn);var dn=function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};let pn=class extends lt{constructor(){super(...arguments),this.color=Le.cyan.faint.midtone,this.active=!0}render(){return D` <cw-popup .color=${this.color} .active=${this.active}>
      <h1>Help</h1>
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
    </cw-popup>`}};pn.styles=l`
    :host {
      background-color: black;
      user-select: none;
      color: cadetblue;
    }
    h1,
    h2,
    p {
      margin: 5px;
    }
    h1 {
      text-align: center;
      font-size: 40px;
      color: lightcyan;
    }
    .white {
      color: white;
    }
  `,dn([ht({type:Boolean})],pn.prototype,"active",void 0),pn=dn([ct("cw-help")],pn);var fn=function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};let gn=class extends lt{constructor(){super(...arguments),this.color=Le.springGreen.faint.midtone,this.buttonColor=Le.springGreen.faint.dark,this.active=!0}render(){return D` <cw-popup .color=${this.color} .active=${this.active}>
      <h1>
        Colorways
        <small><a href="https://github.com/kjin/colorways">v0.0.2</a></small>
      </h1>
      <cw-container .height=${40} .color=${this.color}
        ><cw-button
          @click-down=${()=>yt(this,"new-game")}
          .color=${this.buttonColor}
          >New Game</cw-button
        ></cw-container
      >
      <cw-container .height=${40} .color=${this.color}
        ><cw-button
          @click-down=${()=>yt(this,"popup-options")}
          .color=${this.buttonColor}
          >Options</cw-button
        ></cw-container
      >
      <cw-container .height=${40} .color=${this.color}
        ><cw-button
          @click-down=${()=>yt(this,"popup-help")}
          .color=${this.buttonColor}
          >Help</cw-button
        ></cw-container
      >
    </cw-popup>`}};gn.styles=l`
    :host {
      background-color: black;
      user-select: none;
    }
    h1 {
      margin: 5px;
      text-align: center;
      font-size: 40px;
    }
    small {
      font-size: 12px;
    }
    .white {
      color: white;
    }
  `,fn([ht({type:Boolean})],gn.prototype,"active",void 0),gn=fn([ct("cw-menu")],gn);var vn=function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};let mn=class extends lt{constructor(){super(...arguments),this.color=Le.dodgerBlue.faint.bright,this.buttonColor=Le.dodgerBlue.faint.midtone,this.active=!0,this.gameOptions=null,this.revision=0}render(){const{gameOptions:t}=this;return t?D` <cw-popup .color=${this.color} .active=${this.active}>
      <h1>Options</h1>
      <h2>Difficulty</h2>
      <cw-container .height=${40} .color=${this.color}>
        ${rn(t.difficulty.allowedStringValues,e=>D`<cw-button
              .color=${this.buttonColor}
              @click-down=${()=>t.difficulty.stringValue=e}
              .active=${t.difficulty.stringValue!==e}
              >${e}</cw-button
            >`)}
      </cw-container>
    </cw-popup>`:""}};mn.styles=l`
    :host {
      background-color: black;
      user-select: none;
      color: cadetblue;
    }
    h1,
    h2 {
      margin: 5px;
    }
    h1 {
      text-align: center;
      font-size: 40px;
      color: lightcyan;
    }
  `,vn([ht({type:Boolean})],mn.prototype,"active",void 0),vn([ht({type:Object})],mn.prototype,"gameOptions",void 0),vn([ht({type:Number})],mn.prototype,"revision",void 0),mn=vn([ct("cw-options")],mn);var yn=function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};let bn=class extends lt{constructor(){super(...arguments),this.interval=1,this.current=[0,0,0],this.active=!0,this.moves=[]}render(){return D`<cw-container .width=${400} .height=${50}>
      ${rn(this.moves,t=>D`<cw-button
          .color=${Mt(t.delta,{steps:2})}
          ?active=${this.active&&t.valid}
          @click-down=${()=>yt(this,"color-incremented",t)}
          >${bt(t.direction)}</cw-button
        >`)}
    </cw-container>`}};bn.styles=l`
    :host {
      flex-grow: 1;
    }
  `,yn([ht({type:Number})],bn.prototype,"interval",void 0),yn([ht({type:Array})],bn.prototype,"current",void 0),yn([ht({type:Boolean})],bn.prototype,"active",void 0),yn([ht({type:Array})],bn.prototype,"moves",void 0),bn=yn([ct("cw-primary-controls")],bn);var wn=function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};let xn=class extends lt{constructor(){super(...arguments),this.targetColor=[0,0,0],this.iterations=[],this.moves=[],this.active=!0,this.win=!1,this.difficulty="",this.gameId=0,this.optimalMoves=0}render(){return D`<div
      style=${mt({"background-color":this.active?At(Ct(St(this.targetColor),.5)):"white"})}
    >
      ${rn(this.iterations,(t,e)=>{let n=[0,0,0],r="?";return this.moves.length>e&&(n=Mt(this.moves[e].delta,{steps:2}),r=bt(this.moves[e].direction)),D`<cw-cell
            .color=${t}
            .showIncremented=${!this.win||e<this.iterations.length-1}
            .incrementedColor=${n}
            >${r}</cw-cell
          >`})}
      <hr />
      <cw-cell id="target-color" .color=${this.targetColor}></cw-cell>
      <table
        style=${mt({color:this.active?At(Ot(St(this.targetColor),.5)):"gray"})}
      >
        <td id="game-title">
          Game ${this.gameId} -
          ${this.difficulty}${this.win?this.optimalMoves===this.iterations.length-1?" 👑":" ✓":" "}
        </td>
        <td id="game-status">
          ${this.win?`${this.iterations.length-1} moves (${this.optimalMoves} optimal)`:""}
        </td>
      </table>
    </div>`}};xn.styles=l`
    div {
      background-color: black;
      padding: 5px;
      margin: 3px;
      border-radius: 5px;
      overflow: hidden;
      font-family: "Quicksand";
      font-size: 18px;
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
  `,wn([ht({type:Array})],xn.prototype,"targetColor",void 0),wn([ht({type:Array})],xn.prototype,"iterations",void 0),wn([ht({type:Array})],xn.prototype,"moves",void 0),wn([ht({type:Boolean})],xn.prototype,"active",void 0),wn([ht({type:Boolean})],xn.prototype,"win",void 0),wn([ht()],xn.prototype,"difficulty",void 0),wn([ht({type:Number})],xn.prototype,"gameId",void 0),wn([ht({type:Number})],xn.prototype,"optimalMoves",void 0),xn=wn([ct("cw-round")],xn)}]);
//# sourceMappingURL=main.js.map