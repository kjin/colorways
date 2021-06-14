!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){const r=n(1),i=n(3),o={};Object.keys(r).forEach(t=>{o[t]={},Object.defineProperty(o[t],"channels",{value:r[t].channels}),Object.defineProperty(o[t],"labels",{value:r[t].labels});const e=i(t);Object.keys(e).forEach(n=>{const r=e[n];o[t][n]=function(t){const e=function(...e){const n=e[0];if(null==n)return n;n.length>1&&(e=n);const r=t(e);if("object"==typeof r)for(let t=r.length,e=0;e<t;e++)r[e]=Math.round(r[e]);return r};return"conversion"in t&&(e.conversion=t.conversion),e}(r),o[t][n].raw=function(t){const e=function(...e){const n=e[0];return null==n?n:(n.length>1&&(e=n),t(e))};return"conversion"in t&&(e.conversion=t.conversion),e}(r)})}),t.exports=o},function(t,e,n){const r=n(2),i={};for(const t of Object.keys(r))i[r[t]]=t;const o={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};t.exports=o;for(const t of Object.keys(o)){if(!("channels"in o[t]))throw new Error("missing channels property: "+t);if(!("labels"in o[t]))throw new Error("missing channel labels property: "+t);if(o[t].labels.length!==o[t].channels)throw new Error("channel and label counts mismatch: "+t);const{channels:e,labels:n}=o[t];delete o[t].channels,delete o[t].labels,Object.defineProperty(o[t],"channels",{value:e}),Object.defineProperty(o[t],"labels",{value:n})}o.rgb.hsl=function(t){const e=t[0]/255,n=t[1]/255,r=t[2]/255,i=Math.min(e,n,r),o=Math.max(e,n,r),s=o-i;let a,l;o===i?a=0:e===o?a=(n-r)/s:n===o?a=2+(r-e)/s:r===o&&(a=4+(e-n)/s),a=Math.min(60*a,360),a<0&&(a+=360);const c=(i+o)/2;return l=o===i?0:c<=.5?s/(o+i):s/(2-o-i),[a,100*l,100*c]},o.rgb.hsv=function(t){let e,n,r,i,o;const s=t[0]/255,a=t[1]/255,l=t[2]/255,c=Math.max(s,a,l),u=c-Math.min(s,a,l),h=function(t){return(c-t)/6/u+.5};return 0===u?(i=0,o=0):(o=u/c,e=h(s),n=h(a),r=h(l),s===c?i=r-n:a===c?i=1/3+e-r:l===c&&(i=2/3+n-e),i<0?i+=1:i>1&&(i-=1)),[360*i,100*o,100*c]},o.rgb.hwb=function(t){const e=t[0],n=t[1];let r=t[2];const i=o.rgb.hsl(t)[0],s=1/255*Math.min(e,Math.min(n,r));return r=1-1/255*Math.max(e,Math.max(n,r)),[i,100*s,100*r]},o.rgb.cmyk=function(t){const e=t[0]/255,n=t[1]/255,r=t[2]/255,i=Math.min(1-e,1-n,1-r);return[100*((1-e-i)/(1-i)||0),100*((1-n-i)/(1-i)||0),100*((1-r-i)/(1-i)||0),100*i]},o.rgb.keyword=function(t){const e=i[t];if(e)return e;let n,o=1/0;for(const e of Object.keys(r)){const i=r[e],l=(a=i,((s=t)[0]-a[0])**2+(s[1]-a[1])**2+(s[2]-a[2])**2);l<o&&(o=l,n=e)}var s,a;return n},o.keyword.rgb=function(t){return r[t]},o.rgb.xyz=function(t){let e=t[0]/255,n=t[1]/255,r=t[2]/255;e=e>.04045?((e+.055)/1.055)**2.4:e/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92;return[100*(.4124*e+.3576*n+.1805*r),100*(.2126*e+.7152*n+.0722*r),100*(.0193*e+.1192*n+.9505*r)]},o.rgb.lab=function(t){const e=o.rgb.xyz(t);let n=e[0],r=e[1],i=e[2];n/=95.047,r/=100,i/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,i=i>.008856?i**(1/3):7.787*i+16/116;return[116*r-16,500*(n-r),200*(r-i)]},o.hsl.rgb=function(t){const e=t[0]/360,n=t[1]/100,r=t[2]/100;let i,o,s;if(0===n)return s=255*r,[s,s,s];i=r<.5?r*(1+n):r+n-r*n;const a=2*r-i,l=[0,0,0];for(let t=0;t<3;t++)o=e+1/3*-(t-1),o<0&&o++,o>1&&o--,s=6*o<1?a+6*(i-a)*o:2*o<1?i:3*o<2?a+(i-a)*(2/3-o)*6:a,l[t]=255*s;return l},o.hsl.hsv=function(t){const e=t[0];let n=t[1]/100,r=t[2]/100,i=n;const o=Math.max(r,.01);r*=2,n*=r<=1?r:2-r,i*=o<=1?o:2-o;return[e,100*(0===r?2*i/(o+i):2*n/(r+n)),100*((r+n)/2)]},o.hsv.rgb=function(t){const e=t[0]/60,n=t[1]/100;let r=t[2]/100;const i=Math.floor(e)%6,o=e-Math.floor(e),s=255*r*(1-n),a=255*r*(1-n*o),l=255*r*(1-n*(1-o));switch(r*=255,i){case 0:return[r,l,s];case 1:return[a,r,s];case 2:return[s,r,l];case 3:return[s,a,r];case 4:return[l,s,r];case 5:return[r,s,a]}},o.hsv.hsl=function(t){const e=t[0],n=t[1]/100,r=t[2]/100,i=Math.max(r,.01);let o,s;s=(2-n)*r;const a=(2-n)*i;return o=n*i,o/=a<=1?a:2-a,o=o||0,s/=2,[e,100*o,100*s]},o.hwb.rgb=function(t){const e=t[0]/360;let n=t[1]/100,r=t[2]/100;const i=n+r;let o;i>1&&(n/=i,r/=i);const s=Math.floor(6*e),a=1-r;o=6*e-s,0!=(1&s)&&(o=1-o);const l=n+o*(a-n);let c,u,h;switch(s){default:case 6:case 0:c=a,u=l,h=n;break;case 1:c=l,u=a,h=n;break;case 2:c=n,u=a,h=l;break;case 3:c=n,u=l,h=a;break;case 4:c=l,u=n,h=a;break;case 5:c=a,u=n,h=l}return[255*c,255*u,255*h]},o.cmyk.rgb=function(t){const e=t[0]/100,n=t[1]/100,r=t[2]/100,i=t[3]/100;return[255*(1-Math.min(1,e*(1-i)+i)),255*(1-Math.min(1,n*(1-i)+i)),255*(1-Math.min(1,r*(1-i)+i))]},o.xyz.rgb=function(t){const e=t[0]/100,n=t[1]/100,r=t[2]/100;let i,o,s;return i=3.2406*e+-1.5372*n+-.4986*r,o=-.9689*e+1.8758*n+.0415*r,s=.0557*e+-.204*n+1.057*r,i=i>.0031308?1.055*i**(1/2.4)-.055:12.92*i,o=o>.0031308?1.055*o**(1/2.4)-.055:12.92*o,s=s>.0031308?1.055*s**(1/2.4)-.055:12.92*s,i=Math.min(Math.max(0,i),1),o=Math.min(Math.max(0,o),1),s=Math.min(Math.max(0,s),1),[255*i,255*o,255*s]},o.xyz.lab=function(t){let e=t[0],n=t[1],r=t[2];e/=95.047,n/=100,r/=108.883,e=e>.008856?e**(1/3):7.787*e+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;return[116*n-16,500*(e-n),200*(n-r)]},o.lab.xyz=function(t){let e,n,r;n=(t[0]+16)/116,e=t[1]/500+n,r=n-t[2]/200;const i=n**3,o=e**3,s=r**3;return n=i>.008856?i:(n-16/116)/7.787,e=o>.008856?o:(e-16/116)/7.787,r=s>.008856?s:(r-16/116)/7.787,e*=95.047,n*=100,r*=108.883,[e,n,r]},o.lab.lch=function(t){const e=t[0],n=t[1],r=t[2];let i;i=360*Math.atan2(r,n)/2/Math.PI,i<0&&(i+=360);return[e,Math.sqrt(n*n+r*r),i]},o.lch.lab=function(t){const e=t[0],n=t[1],r=t[2]/360*2*Math.PI;return[e,n*Math.cos(r),n*Math.sin(r)]},o.rgb.ansi16=function(t,e=null){const[n,r,i]=t;let s=null===e?o.rgb.hsv(t)[2]:e;if(s=Math.round(s/50),0===s)return 30;let a=30+(Math.round(i/255)<<2|Math.round(r/255)<<1|Math.round(n/255));return 2===s&&(a+=60),a},o.hsv.ansi16=function(t){return o.rgb.ansi16(o.hsv.rgb(t),t[2])},o.rgb.ansi256=function(t){const e=t[0],n=t[1],r=t[2];if(e===n&&n===r)return e<8?16:e>248?231:Math.round((e-8)/247*24)+232;return 16+36*Math.round(e/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)},o.ansi16.rgb=function(t){let e=t%10;if(0===e||7===e)return t>50&&(e+=3.5),e=e/10.5*255,[e,e,e];const n=.5*(1+~~(t>50));return[(1&e)*n*255,(e>>1&1)*n*255,(e>>2&1)*n*255]},o.ansi256.rgb=function(t){if(t>=232){const e=10*(t-232)+8;return[e,e,e]}let e;t-=16;return[Math.floor(t/36)/5*255,Math.floor((e=t%36)/6)/5*255,e%6/5*255]},o.rgb.hex=function(t){const e=(((255&Math.round(t[0]))<<16)+((255&Math.round(t[1]))<<8)+(255&Math.round(t[2]))).toString(16).toUpperCase();return"000000".substring(e.length)+e},o.hex.rgb=function(t){const e=t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e)return[0,0,0];let n=e[0];3===e[0].length&&(n=n.split("").map(t=>t+t).join(""));const r=parseInt(n,16);return[r>>16&255,r>>8&255,255&r]},o.rgb.hcg=function(t){const e=t[0]/255,n=t[1]/255,r=t[2]/255,i=Math.max(Math.max(e,n),r),o=Math.min(Math.min(e,n),r),s=i-o;let a,l;return a=s<1?o/(1-s):0,l=s<=0?0:i===e?(n-r)/s%6:i===n?2+(r-e)/s:4+(e-n)/s,l/=6,l%=1,[360*l,100*s,100*a]},o.hsl.hcg=function(t){const e=t[1]/100,n=t[2]/100,r=n<.5?2*e*n:2*e*(1-n);let i=0;return r<1&&(i=(n-.5*r)/(1-r)),[t[0],100*r,100*i]},o.hsv.hcg=function(t){const e=t[1]/100,n=t[2]/100,r=e*n;let i=0;return r<1&&(i=(n-r)/(1-r)),[t[0],100*r,100*i]},o.hcg.rgb=function(t){const e=t[0]/360,n=t[1]/100,r=t[2]/100;if(0===n)return[255*r,255*r,255*r];const i=[0,0,0],o=e%1*6,s=o%1,a=1-s;let l=0;switch(Math.floor(o)){case 0:i[0]=1,i[1]=s,i[2]=0;break;case 1:i[0]=a,i[1]=1,i[2]=0;break;case 2:i[0]=0,i[1]=1,i[2]=s;break;case 3:i[0]=0,i[1]=a,i[2]=1;break;case 4:i[0]=s,i[1]=0,i[2]=1;break;default:i[0]=1,i[1]=0,i[2]=a}return l=(1-n)*r,[255*(n*i[0]+l),255*(n*i[1]+l),255*(n*i[2]+l)]},o.hcg.hsv=function(t){const e=t[1]/100,n=e+t[2]/100*(1-e);let r=0;return n>0&&(r=e/n),[t[0],100*r,100*n]},o.hcg.hsl=function(t){const e=t[1]/100,n=t[2]/100*(1-e)+.5*e;let r=0;return n>0&&n<.5?r=e/(2*n):n>=.5&&n<1&&(r=e/(2*(1-n))),[t[0],100*r,100*n]},o.hcg.hwb=function(t){const e=t[1]/100,n=e+t[2]/100*(1-e);return[t[0],100*(n-e),100*(1-n)]},o.hwb.hcg=function(t){const e=t[1]/100,n=1-t[2]/100,r=n-e;let i=0;return r<1&&(i=(n-r)/(1-r)),[t[0],100*r,100*i]},o.apple.rgb=function(t){return[t[0]/65535*255,t[1]/65535*255,t[2]/65535*255]},o.rgb.apple=function(t){return[t[0]/255*65535,t[1]/255*65535,t[2]/255*65535]},o.gray.rgb=function(t){return[t[0]/100*255,t[0]/100*255,t[0]/100*255]},o.gray.hsl=function(t){return[0,0,t[0]]},o.gray.hsv=o.gray.hsl,o.gray.hwb=function(t){return[0,100,t[0]]},o.gray.cmyk=function(t){return[0,0,0,t[0]]},o.gray.lab=function(t){return[t[0],0,0]},o.gray.hex=function(t){const e=255&Math.round(t[0]/100*255),n=((e<<16)+(e<<8)+e).toString(16).toUpperCase();return"000000".substring(n.length)+n},o.rgb.gray=function(t){return[(t[0]+t[1]+t[2])/3/255*100]}},function(t,e,n){"use strict";t.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},function(t,e,n){const r=n(1);function i(t){const e=function(){const t={},e=Object.keys(r);for(let n=e.length,r=0;r<n;r++)t[e[r]]={distance:-1,parent:null};return t}(),n=[t];for(e[t].distance=0;n.length;){const t=n.pop(),i=Object.keys(r[t]);for(let r=i.length,o=0;o<r;o++){const r=i[o],s=e[r];-1===s.distance&&(s.distance=e[t].distance+1,s.parent=t,n.unshift(r))}}return e}function o(t,e){return function(n){return e(t(n))}}function s(t,e){const n=[e[t].parent,t];let i=r[e[t].parent][t],s=e[t].parent;for(;e[s].parent;)n.unshift(e[s].parent),i=o(r[e[s].parent][s],i),s=e[s].parent;return i.conversion=n,i}t.exports=function(t){const e=i(t),n={},r=Object.keys(e);for(let t=r.length,i=0;i<t;i++){const t=r[i];null!==e[t].parent&&(n[t]=s(t,e))}return n}},function(t,e,n){"use strict";n.r(e);
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
 */;var u,h,d,p;const f={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},g=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:g};class m extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,n)=>{const r=this.Πp(n,e);void 0!==r&&(this.Πm.set(r,n),t.push(r))}),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const n="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,n,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(r){const i=this[t];this[e]=r,this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of e)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static"Πp"(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise(t=>this.enableUpdating=t),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,n;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(n=t.hostConnected)||void 0===n||n.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{r?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const n=document.createElement("style");n.textContent=e.cssText,t.appendChild(n)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}),this.Πo=new Promise(t=>this.Πl=t)}attributeChangedCallback(t,e,n){this.K(t,n)}"Πj"(t,e,n=v){var r,i;const o=this.constructor.Πp(t,n);if(void 0!==o&&!0===n.reflect){const s=(null!==(i=null===(r=n.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==i?i:f.toAttribute)(e,n.type);this.Πh=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this.Πh=null}}K(t,e){var n,r,i;const o=this.constructor,s=o.Πm.get(t);if(void 0!==s&&this.Πh!==s){const t=o.getPropertyOptions(s),a=t.converter,l=null!==(i=null!==(r=null===(n=a)||void 0===n?void 0:n.fromAttribute)&&void 0!==r?r:"function"==typeof a?a:null)&&void 0!==i?i:f.fromAttribute;this.Πh=s,this[s]=l(e,t.type),this.Πh=null}}requestUpdate(t,e,n){let r=!0;void 0!==t&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===n.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,n))):r=!1),!this.isUpdatePending&&r&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach((t,e)=>this[e]=t),this.Πi=void 0);let e=!1;const n=this.L;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(n)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(n)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach((t,e)=>this.Πj(e,this[e],t)),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var y,b,w,x;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null===(h=(u=globalThis).reactiveElementPlatformSupport)||void 0===h||h.call(u,{ReactiveElement:m}),(null!==(d=(p=globalThis).reactiveElementVersions)&&void 0!==d?d:p.reactiveElementVersions=[]).push("1.0.0-rc.2");const $=globalThis.trustedTypes,M=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,k=`lit$${(Math.random()+"").slice(9)}$`,S="?"+k,O=`<${S}>`,C=document,P=(t="")=>C.createComment(t),R=t=>null===t||"object"!=typeof t&&"function"!=typeof t,j=Array.isArray,A=t=>{var e;return j(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,N=/>/g,T=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,q=/'/g,H=/"/g,I=/^(?:script|style|textarea)$/i,U=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),D=U(1),V=(U(2),Symbol.for("lit-noChange")),z=Symbol.for("lit-nothing"),L=new WeakMap,G=C.createTreeWalker(C,129,null,!1),_=(t,e)=>{const n=t.length-1,r=[];let i,o=2===e?"<svg>":"",s=E;for(let e=0;e<n;e++){const n=t[e];let a,l,c=-1,u=0;for(;u<n.length&&(s.lastIndex=u,l=s.exec(n),null!==l);)u=s.lastIndex,s===E?"!--"===l[1]?s=B:void 0!==l[1]?s=N:void 0!==l[2]?(I.test(l[2])&&(i=RegExp("</"+l[2],"g")),s=T):void 0!==l[3]&&(s=T):s===T?">"===l[0]?(s=null!=i?i:E,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?T:'"'===l[3]?H:q):s===H||s===q?s=T:s===B||s===N?s=E:(s=T,i=void 0);const h=s===T&&t[e+1].startsWith("/>")?" ":"";o+=s===E?n+O:c>=0?(r.push(a),n.slice(0,c)+"$lit$"+n.slice(c)+k+h):n+k+(-2===c?(r.push(void 0),e):h)}const a=o+(t[n]||"<?>")+(2===e?"</svg>":"");return[void 0!==M?M.createHTML(a):a,r]};class F{constructor({strings:t,_$litType$:e},n){let r;this.parts=[];let i=0,o=0;const s=t.length-1,a=this.parts,[l,c]=_(t,e);if(this.el=F.createElement(l,n),G.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=G.nextNode())&&a.length<s;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(k)){const n=c[o++];if(t.push(e),void 0!==n){const t=r.getAttribute(n.toLowerCase()+"$lit$").split(k),e=/([.?@])?(.*)/.exec(n);a.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?X:"?"===e[1]?K:"@"===e[1]?J:Z})}else a.push({type:6,index:i})}for(const e of t)r.removeAttribute(e)}if(I.test(r.tagName)){const t=r.textContent.split(k),e=t.length-1;if(e>0){r.textContent=$?$.emptyScript:"";for(let n=0;n<e;n++)r.append(t[n],P()),G.nextNode(),a.push({type:2,index:++i});r.append(t[e],P())}}}else if(8===r.nodeType)if(r.data===S)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=r.data.indexOf(k,t+1));)a.push({type:7,index:i}),t+=k.length-1}i++}}static createElement(t,e){const n=C.createElement("template");return n.innerHTML=t,n}}function W(t,e,n=t,r){var i,o,s,a;if(e===V)return e;let l=void 0!==r?null===(i=n.Σi)||void 0===i?void 0:i[r]:n.Σo;const c=R(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l.O)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l.T(t,n,r)),void 0!==r?(null!==(s=(a=n).Σi)&&void 0!==s?s:a.Σi=[])[r]=l:n.Σo=l),void 0!==l&&(e=W(t,l.S(t,e.values),l,r)),e}class Y{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:n},parts:r}=this.D,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:C).importNode(n,!0);G.currentNode=i;let o=G.nextNode(),s=0,a=0,l=r[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new Q(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new tt(o,this,t)),this.l.push(e),l=r[++a]}s!==(null==l?void 0:l.index)&&(o=G.nextNode(),s++)}return i}v(t){let e=0;for(const n of this.l)void 0!==n&&(void 0!==n.strings?(n.I(t,n,e),e+=n.strings.length-2):n.I(t[e])),e++}}class Q{constructor(t,e,n,r){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=n,this.options=r}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=W(this,t,e),R(t)?t===z||null==t||""===t?(this.H!==z&&this.R(),this.H=z):t!==this.H&&t!==V&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):A(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(C.createTextNode(t)),this.H=t}_(t){var e;const{values:n,_$litType$:r}=t,i="number"==typeof r?this.C(t):(void 0===r.el&&(r.el=F.createElement(r.h,this.options)),r);if((null===(e=this.H)||void 0===e?void 0:e.D)===i)this.H.v(n);else{const t=new Y(i,this),e=t.u(this.options);t.v(n),this.$(e),this.H=t}}C(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new F(t)),e}g(t){j(this.H)||(this.H=[],this.R());const e=this.H;let n,r=0;for(const i of t)r===e.length?e.push(n=new Q(this.k(P()),this.k(P()),this,this.options)):n=e[r],n.I(i),r++;r<e.length&&(this.R(n&&n.B.nextSibling,r),e.length=r)}R(t=this.A.nextSibling,e){var n;for(null===(n=this.P)||void 0===n||n.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class Z{constructor(t,e,n,r,i){this.type=1,this.H=z,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=r,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this.H=Array(n.length-1).fill(z),this.strings=n):this.H=z}get tagName(){return this.element.tagName}I(t,e=this,n,r){const i=this.strings;let o=!1;if(void 0===i)t=W(this,t,e,0),o=!R(t)||t!==this.H&&t!==V,o&&(this.H=t);else{const r=t;let s,a;for(t=i[0],s=0;s<i.length-1;s++)a=W(this,r[n+s],e,s),a===V&&(a=this.H[s]),o||(o=!R(a)||a!==this.H[s]),a===z?t=z:t!==z&&(t+=(null!=a?a:"")+i[s+1]),this.H[s]=a}o&&!r&&this.W(t)}W(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class X extends Z{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===z?void 0:t}}class K extends Z{constructor(){super(...arguments),this.type=4}W(t){t&&t!==z?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class J extends Z{constructor(){super(...arguments),this.type=5}I(t,e=this){var n;if((t=null!==(n=W(this,t,e,0))&&void 0!==n?n:z)===V)return;const r=this.H,i=t===z&&r!==z||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==z&&(r===z||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,n;"function"==typeof this.H?this.H.call(null!==(n=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==n?n:this.element,t):this.H.handleEvent(t)}}class tt{constructor(t,e,n){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=n}I(t){W(this,t)}}const et={Z:"$lit$",U:k,Y:S,q:1,X:_,tt:Y,it:A,st:W,et:Q,ot:Z,nt:K,rt:J,lt:X,ht:tt};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var nt,rt,it,ot,st,at;null===(b=(y=globalThis).litHtmlPlatformSupport)||void 0===b||b.call(y,F,Q),(null!==(w=(x=globalThis).litHtmlVersions)&&void 0!==w?w:x.litHtmlVersions=[]).push("2.0.0-rc.3");(null!==(nt=(at=globalThis).litElementVersions)&&void 0!==nt?nt:at.litElementVersions=[]).push("3.0.0-rc.2");class lt extends m{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const n=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=n.firstChild),n}update(t){const e=this.render();super.update(t),this.Φt=((t,e,n)=>{var r,i;const o=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:e;let s=o._$litPart$;if(void 0===s){const t=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:null;o._$litPart$=s=new Q(e.insertBefore(P(),t),t,void 0,n)}return s.I(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return V}}lt.finalized=!0,lt._$litElement$=!0,null===(it=(rt=globalThis).litElementHydrateSupport)||void 0===it||it.call(rt,{LitElement:lt}),null===(st=(ot=globalThis).litElementPlatformSupport)||void 0===st||st.call(ot,{LitElement:lt});const ct=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:r}=e;return{kind:n,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e)
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
 */const mt=gt(class extends vt{constructor(t){var e;if(super(t),t.type!==pt||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return null==r?e:e+`${n=n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(t,[e]){const{style:n}=t.element;if(void 0===this.St){this.St=new Set;for(const t in e)this.St.add(t);return this.render(e)}this.St.forEach(t=>{null==e[t]&&(this.St.delete(t),t.includes("-")?n.removeProperty(t):n[t]="")});for(const t in e){const r=e[t];null!=r&&(this.St.add(t),t.includes("-")?n.setProperty(t,r):n[t]=r)}return V}}),yt=(t,e,n={})=>{t.renderRoot.dispatchEvent(new CustomEvent(e,{detail:n,bubbles:!0,composed:!0}))},bt=t=>t>0?"+":t<0?"–":"";var wt=n(0),xt=n.n(wt);function $t(t,e){return e.colorSpace.toRGB(t.map(t=>t/(e.steps-1))).map(t=>Math.floor(255*e.scaling(t)))}function Mt(t,e,n){const{index:r,direction:i}=e;if(!(t[r]+i>=0&&t[r]+i<n.steps))return null;let o=[...t];return o[r]+=i,o}function kt(t){return[.2126,.7152,.0722].reduce((e,n,r)=>e+n*t[r],0)/256}function St(t){return t.map(t=>255-t)}function Ot(t,e){return t.map(t=>Math.floor(t*(1-e)))}function Ct(t,e){return St(Ot(St(t),e))}function Pt(t){return kt(t)>.8?function(t){return kt(t)<.2?Pt(t):Ot(t,.75)}(t):Ct(t,.75)}function Rt(t){const e=t.toString(16);return 1===e.length?"0"+e:e}function jt(t){return"#"+t.map(Rt).join("")}function At(t,e){return e.map((e,n)=>e-t[n]).map(Math.abs).reduce((t,e)=>t+e,0)}var Et=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Bt=class extends lt{constructor(){super(...arguments),this.color=[0,0,0],this.active=!1,this.maxWidth=1/0}render(){const t=Ct(this.color,this.active?0:.75),e=Pt(t);return D`<div
      id="button"
      @click=${()=>this.active&&yt(this,"click-down",this.id)}
      style=${mt({"background-color":jt(t),color:jt(e)})}
    >
      <slot></slot>
    </div>`}};Bt.styles=l`
    #button {
      display: flex;
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
  `,Et([ht({type:Array})],Bt.prototype,"color",void 0),Et([ht({type:Boolean})],Bt.prototype,"active",void 0),Et([ht({type:Number})],Bt.prototype,"maxWidth",void 0),Bt=Et([ct("cw-button")],Bt);var Nt=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Tt=class extends lt{constructor(){super(...arguments),this.color=[255,255,255],this.width=1/0,this.height=1/0,this.padding=0}render(){const t=Pt(this.color);return D`<div
      style=${mt({"background-color":jt(this.color),color:jt(t),...isFinite(this.width)?{"max-width":this.width+"px"}:{},...isFinite(this.height)?{height:this.height+"px"}:{},padding:this.padding+"px"})}
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
  `,Nt([ht({type:Array})],Tt.prototype,"color",void 0),Nt([ht({type:Number})],Tt.prototype,"width",void 0),Nt([ht({type:Number})],Tt.prototype,"height",void 0),Nt([ht({type:Number})],Tt.prototype,"padding",void 0),Tt=Nt([ct("cw-container")],Tt);var qt={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},Ht={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},It=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],Ut={CSS:{},springs:{}};function Dt(t,e,n){return Math.min(Math.max(t,e),n)}function Vt(t,e){return t.indexOf(e)>-1}function zt(t,e){return t.apply(null,e)}var Lt={arr:function(t){return Array.isArray(t)},obj:function(t){return Vt(Object.prototype.toString.call(t),"Object")},pth:function(t){return Lt.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},inp:function(t){return t instanceof HTMLInputElement},dom:function(t){return t.nodeType||Lt.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},nil:function(t){return Lt.und(t)||null===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return Lt.hex(t)||Lt.rgb(t)||Lt.hsl(t)},key:function(t){return!qt.hasOwnProperty(t)&&!Ht.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}};function Gt(t){var e=/\(([^)]+)\)/.exec(t);return e?e[1].split(",").map((function(t){return parseFloat(t)})):[]}function _t(t,e){var n=Gt(t),r=Dt(Lt.und(n[0])?1:n[0],.1,100),i=Dt(Lt.und(n[1])?100:n[1],.1,100),o=Dt(Lt.und(n[2])?10:n[2],.1,100),s=Dt(Lt.und(n[3])?0:n[3],.1,100),a=Math.sqrt(i/r),l=o/(2*Math.sqrt(i*r)),c=l<1?a*Math.sqrt(1-l*l):0,u=l<1?(l*a-s)/c:-s+a;function h(t){var n=e?e*t/1e3:t;return n=l<1?Math.exp(-n*l*a)*(1*Math.cos(c*n)+u*Math.sin(c*n)):(1+u*n)*Math.exp(-n*a),0===t||1===t?t:1-n}return e?h:function(){var e=Ut.springs[t];if(e)return e;for(var n=0,r=0;;)if(1===h(n+=1/6)){if(++r>=16)break}else r=0;var i=n*(1/6)*1e3;return Ut.springs[t]=i,i}}function Ft(t){return void 0===t&&(t=10),function(e){return Math.ceil(Dt(e,1e-6,1)*t)*(1/t)}}var Wt,Yt,Qt=function(){function t(t,e){return 1-3*e+3*t}function e(t,e){return 3*e-6*t}function n(t){return 3*t}function r(r,i,o){return((t(i,o)*r+e(i,o))*r+n(i))*r}function i(r,i,o){return 3*t(i,o)*r*r+2*e(i,o)*r+n(i)}return function(t,e,n,o){if(0<=t&&t<=1&&0<=n&&n<=1){var s=new Float32Array(11);if(t!==e||n!==o)for(var a=0;a<11;++a)s[a]=r(.1*a,t,n);return function(i){return t===e&&n===o||0===i||1===i?i:r(l(i),e,o)}}function l(e){for(var o=0,a=1;10!==a&&s[a]<=e;++a)o+=.1;--a;var l=o+.1*((e-s[a])/(s[a+1]-s[a])),c=i(l,t,n);return c>=.001?function(t,e,n,o){for(var s=0;s<4;++s){var a=i(e,n,o);if(0===a)return e;e-=(r(e,n,o)-t)/a}return e}(e,l,t,n):0===c?l:function(t,e,n,i,o){var s,a,l=0;do{(s=r(a=e+(n-e)/2,i,o)-t)>0?n=a:e=a}while(Math.abs(s)>1e-7&&++l<10);return a}(e,o,o+.1,t,n)}}}(),Zt=(Wt={linear:function(){return function(t){return t}}},Yt={Sine:function(){return function(t){return 1-Math.cos(t*Math.PI/2)}},Circ:function(){return function(t){return 1-Math.sqrt(1-t*t)}},Back:function(){return function(t){return t*t*(3*t-2)}},Bounce:function(){return function(t){for(var e,n=4;t<((e=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*e-2)/22-t,2)}},Elastic:function(t,e){void 0===t&&(t=1),void 0===e&&(e=.5);var n=Dt(t,1,10),r=Dt(e,.1,2);return function(t){return 0===t||1===t?t:-n*Math.pow(2,10*(t-1))*Math.sin((t-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(t,e){Yt[t]=function(){return function(t){return Math.pow(t,e+2)}}})),Object.keys(Yt).forEach((function(t){var e=Yt[t];Wt["easeIn"+t]=e,Wt["easeOut"+t]=function(t,n){return function(r){return 1-e(t,n)(1-r)}},Wt["easeInOut"+t]=function(t,n){return function(r){return r<.5?e(t,n)(2*r)/2:1-e(t,n)(-2*r+2)/2}},Wt["easeOutIn"+t]=function(t,n){return function(r){return r<.5?(1-e(t,n)(1-2*r))/2:(e(t,n)(2*r-1)+1)/2}}})),Wt);function Xt(t,e){if(Lt.fnc(t))return t;var n=t.split("(")[0],r=Zt[n],i=Gt(t);switch(n){case"spring":return _t(t,e);case"cubicBezier":return zt(Qt,i);case"steps":return zt(Ft,i);default:return zt(r,i)}}function Kt(t){try{return document.querySelectorAll(t)}catch(t){return}}function Jt(t,e){for(var n=t.length,r=arguments.length>=2?arguments[1]:void 0,i=[],o=0;o<n;o++)if(o in t){var s=t[o];e.call(r,s,o,t)&&i.push(s)}return i}function te(t){return t.reduce((function(t,e){return t.concat(Lt.arr(e)?te(e):e)}),[])}function ee(t){return Lt.arr(t)?t:(Lt.str(t)&&(t=Kt(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function ne(t,e){return t.some((function(t){return t===e}))}function re(t){var e={};for(var n in t)e[n]=t[n];return e}function ie(t,e){var n=re(t);for(var r in t)n[r]=e.hasOwnProperty(r)?e[r]:t[r];return n}function oe(t,e){var n=re(t);for(var r in e)n[r]=Lt.und(t[r])?e[r]:t[r];return n}function se(t){return Lt.rgb(t)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=t))?"rgba("+n[1]+",1)":e:Lt.hex(t)?function(t){var e=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(t,e,n,r){return e+e+n+n+r+r})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(t):Lt.hsl(t)?function(t){var e,n,r,i=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),o=parseInt(i[1],10)/360,s=parseInt(i[2],10)/100,a=parseInt(i[3],10)/100,l=i[4]||1;function c(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}if(0==s)e=n=r=a;else{var u=a<.5?a*(1+s):a+s-a*s,h=2*a-u;e=c(h,u,o+1/3),n=c(h,u,o),r=c(h,u,o-1/3)}return"rgba("+255*e+","+255*n+","+255*r+","+l+")"}(t):void 0;var e,n}function ae(t){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);if(e)return e[1]}function le(t,e){return Lt.fnc(t)?t(e.target,e.id,e.total):t}function ce(t,e){return t.getAttribute(e)}function ue(t,e,n){if(ne([n,"deg","rad","turn"],ae(e)))return e;var r=Ut.CSS[e+n];if(!Lt.und(r))return r;var i=document.createElement(t.tagName),o=t.parentNode&&t.parentNode!==document?t.parentNode:document.body;o.appendChild(i),i.style.position="absolute",i.style.width=100+n;var s=100/i.offsetWidth;o.removeChild(i);var a=s*parseFloat(e);return Ut.CSS[e+n]=a,a}function he(t,e,n){if(e in t.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=t.style[e]||getComputedStyle(t).getPropertyValue(r)||"0";return n?ue(t,i,n):i}}function de(t,e){return Lt.dom(t)&&!Lt.inp(t)&&(!Lt.nil(ce(t,e))||Lt.svg(t)&&t[e])?"attribute":Lt.dom(t)&&ne(It,e)?"transform":Lt.dom(t)&&"transform"!==e&&he(t,e)?"css":null!=t[e]?"object":void 0}function pe(t){if(Lt.dom(t)){for(var e,n=t.style.transform||"",r=/(\w+)\(([^)]*)\)/g,i=new Map;e=r.exec(n);)i.set(e[1],e[2]);return i}}function fe(t,e,n,r){var i=Vt(e,"scale")?1:0+function(t){return Vt(t,"translate")||"perspective"===t?"px":Vt(t,"rotate")||Vt(t,"skew")?"deg":void 0}(e),o=pe(t).get(e)||i;return n&&(n.transforms.list.set(e,o),n.transforms.last=e),r?ue(t,o,r):o}function ge(t,e,n,r){switch(de(t,e)){case"transform":return fe(t,e,r,n);case"css":return he(t,e,n);case"attribute":return ce(t,e);default:return t[e]||0}}function ve(t,e){var n=/^(\*=|\+=|-=)/.exec(t);if(!n)return t;var r=ae(t)||0,i=parseFloat(e),o=parseFloat(t.replace(n[0],""));switch(n[0][0]){case"+":return i+o+r;case"-":return i-o+r;case"*":return i*o+r}}function me(t,e){if(Lt.col(t))return se(t);if(/\s/g.test(t))return t;var n=ae(t),r=n?t.substr(0,t.length-n.length):t;return e?r+e:r}function ye(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function be(t){for(var e,n=t.points,r=0,i=0;i<n.numberOfItems;i++){var o=n.getItem(i);i>0&&(r+=ye(e,o)),e=o}return r}function we(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return function(t){return 2*Math.PI*ce(t,"r")}(t);case"rect":return function(t){return 2*ce(t,"width")+2*ce(t,"height")}(t);case"line":return function(t){return ye({x:ce(t,"x1"),y:ce(t,"y1")},{x:ce(t,"x2"),y:ce(t,"y2")})}(t);case"polyline":return be(t);case"polygon":return function(t){var e=t.points;return be(t)+ye(e.getItem(e.numberOfItems-1),e.getItem(0))}(t)}}function xe(t,e){var n=e||{},r=n.el||function(t){for(var e=t.parentNode;Lt.svg(e)&&Lt.svg(e.parentNode);)e=e.parentNode;return e}(t),i=r.getBoundingClientRect(),o=ce(r,"viewBox"),s=i.width,a=i.height,l=n.viewBox||(o?o.split(" "):[0,0,s,a]);return{el:r,viewBox:l,x:l[0]/1,y:l[1]/1,w:s,h:a,vW:l[2],vH:l[3]}}function $e(t,e,n){function r(n){void 0===n&&(n=0);var r=e+n>=1?e+n:0;return t.el.getPointAtLength(r)}var i=xe(t.el,t.svg),o=r(),s=r(-1),a=r(1),l=n?1:i.w/i.vW,c=n?1:i.h/i.vH;switch(t.property){case"x":return(o.x-i.x)*l;case"y":return(o.y-i.y)*c;case"angle":return 180*Math.atan2(a.y-s.y,a.x-s.x)/Math.PI}}function Me(t,e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=me(Lt.pth(t)?t.totalLength:t,e)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:Lt.str(t)||e?r.split(n):[]}}function ke(t){return Jt(t?te(Lt.arr(t)?t.map(ee):ee(t)):[],(function(t,e,n){return n.indexOf(t)===e}))}function Se(t){var e=ke(t);return e.map((function(t,n){return{target:t,id:n,total:e.length,transforms:{list:pe(t)}}}))}function Oe(t,e){var n=re(e);if(/^spring/.test(n.easing)&&(n.duration=_t(n.easing)),Lt.arr(t)){var r=t.length;2===r&&!Lt.obj(t[0])?t={value:t}:Lt.fnc(e.duration)||(n.duration=e.duration/r)}var i=Lt.arr(t)?t:[t];return i.map((function(t,n){var r=Lt.obj(t)&&!Lt.pth(t)?t:{value:t};return Lt.und(r.delay)&&(r.delay=n?0:e.delay),Lt.und(r.endDelay)&&(r.endDelay=n===i.length-1?e.endDelay:0),r})).map((function(t){return oe(t,n)}))}function Ce(t,e){var n=[],r=e.keyframes;for(var i in r&&(e=oe(function(t){for(var e=Jt(te(t.map((function(t){return Object.keys(t)}))),(function(t){return Lt.key(t)})).reduce((function(t,e){return t.indexOf(e)<0&&t.push(e),t}),[]),n={},r=function(r){var i=e[r];n[i]=t.map((function(t){var e={};for(var n in t)Lt.key(n)?n==i&&(e.value=t[n]):e[n]=t[n];return e}))},i=0;i<e.length;i++)r(i);return n}(r),e)),e)Lt.key(i)&&n.push({name:i,tweens:Oe(e[i],t)});return n}function Pe(t,e){var n;return t.tweens.map((function(r){var i=function(t,e){var n={};for(var r in t){var i=le(t[r],e);Lt.arr(i)&&1===(i=i.map((function(t){return le(t,e)}))).length&&(i=i[0]),n[r]=i}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,e),o=i.value,s=Lt.arr(o)?o[1]:o,a=ae(s),l=ge(e.target,t.name,a,e),c=n?n.to.original:l,u=Lt.arr(o)?o[0]:c,h=ae(u)||ae(l),d=a||h;return Lt.und(s)&&(s=c),i.from=Me(u,d),i.to=Me(ve(s,u),d),i.start=n?n.end:0,i.end=i.start+i.delay+i.duration+i.endDelay,i.easing=Xt(i.easing,i.duration),i.isPath=Lt.pth(o),i.isPathTargetInsideSVG=i.isPath&&Lt.svg(e.target),i.isColor=Lt.col(i.from.original),i.isColor&&(i.round=1),n=i,i}))}var Re={css:function(t,e,n){return t.style[e]=n},attribute:function(t,e,n){return t.setAttribute(e,n)},object:function(t,e,n){return t[e]=n},transform:function(t,e,n,r,i){if(r.list.set(e,n),e===r.last||i){var o="";r.list.forEach((function(t,e){o+=e+"("+t+") "})),t.style.transform=o}}};function je(t,e){Se(t).forEach((function(t){for(var n in e){var r=le(e[n],t),i=t.target,o=ae(r),s=ge(i,n,o,t),a=ve(me(r,o||ae(s)),s),l=de(i,n);Re[l](i,n,a,t.transforms,!0)}}))}function Ae(t,e){return Jt(te(t.map((function(t){return e.map((function(e){return function(t,e){var n=de(t.target,e.name);if(n){var r=Pe(e,t),i=r[r.length-1];return{type:n,property:e.name,animatable:t,tweens:r,duration:i.end,delay:r[0].delay,endDelay:i.endDelay}}}(t,e)}))}))),(function(t){return!Lt.und(t)}))}function Ee(t,e){var n=t.length,r=function(t){return t.timelineOffset?t.timelineOffset:0},i={};return i.duration=n?Math.max.apply(Math,t.map((function(t){return r(t)+t.duration}))):e.duration,i.delay=n?Math.min.apply(Math,t.map((function(t){return r(t)+t.delay}))):e.delay,i.endDelay=n?i.duration-Math.max.apply(Math,t.map((function(t){return r(t)+t.duration-t.endDelay}))):e.endDelay,i}var Be=0;var Ne=[],Te=function(){var t;function e(n){for(var r=Ne.length,i=0;i<r;){var o=Ne[i];o.paused?(Ne.splice(i,1),r--):(o.tick(n),i++)}t=i>0?requestAnimationFrame(e):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){He.suspendWhenDocumentHidden&&(qe()?t=cancelAnimationFrame(t):(Ne.forEach((function(t){return t._onDocumentVisibility()})),Te()))})),function(){t||qe()&&He.suspendWhenDocumentHidden||!(Ne.length>0)||(t=requestAnimationFrame(e))}}();function qe(){return!!document&&document.hidden}function He(t){void 0===t&&(t={});var e,n=0,r=0,i=0,o=0,s=null;function a(t){var e=window.Promise&&new Promise((function(t){return s=t}));return t.finished=e,e}var l=function(t){var e=ie(qt,t),n=ie(Ht,t),r=Ce(n,t),i=Se(t.targets),o=Ae(i,r),s=Ee(o,n),a=Be;return Be++,oe(e,{id:a,children:[],animatables:i,animations:o,duration:s.duration,delay:s.delay,endDelay:s.endDelay})}(t);a(l);function c(){var t=l.direction;"alternate"!==t&&(l.direction="normal"!==t?"normal":"reverse"),l.reversed=!l.reversed,e.forEach((function(t){return t.reversed=l.reversed}))}function u(t){return l.reversed?l.duration-t:t}function h(){n=0,r=u(l.currentTime)*(1/He.speed)}function d(t,e){e&&e.seek(t-e.timelineOffset)}function p(t){for(var e=0,n=l.animations,r=n.length;e<r;){var i=n[e],o=i.animatable,s=i.tweens,a=s.length-1,c=s[a];a&&(c=Jt(s,(function(e){return t<e.end}))[0]||c);for(var u=Dt(t-c.start-c.delay,0,c.duration)/c.duration,h=isNaN(u)?1:c.easing(u),d=c.to.strings,p=c.round,f=[],g=c.to.numbers.length,v=void 0,m=0;m<g;m++){var y=void 0,b=c.to.numbers[m],w=c.from.numbers[m]||0;y=c.isPath?$e(c.value,h*b,c.isPathTargetInsideSVG):w+h*(b-w),p&&(c.isColor&&m>2||(y=Math.round(y*p)/p)),f.push(y)}var x=d.length;if(x){v=d[0];for(var $=0;$<x;$++){d[$];var M=d[$+1],k=f[$];isNaN(k)||(v+=M?k+M:k+" ")}}else v=f[0];Re[i.type](o.target,i.property,v,o.transforms),i.currentValue=v,e++}}function f(t){l[t]&&!l.passThrough&&l[t](l)}function g(t){var h=l.duration,g=l.delay,v=h-l.endDelay,m=u(t);l.progress=Dt(m/h*100,0,100),l.reversePlayback=m<l.currentTime,e&&function(t){if(l.reversePlayback)for(var n=o;n--;)d(t,e[n]);else for(var r=0;r<o;r++)d(t,e[r])}(m),!l.began&&l.currentTime>0&&(l.began=!0,f("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,f("loopBegin")),m<=g&&0!==l.currentTime&&p(0),(m>=v&&l.currentTime!==h||!h)&&p(h),m>g&&m<v?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,f("changeBegin")),f("change"),p(m)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,f("changeComplete")),l.currentTime=Dt(m,0,h),l.began&&f("update"),t>=h&&(r=0,l.remaining&&!0!==l.remaining&&l.remaining--,l.remaining?(n=i,f("loopComplete"),l.loopBegan=!1,"alternate"===l.direction&&c()):(l.paused=!0,l.completed||(l.completed=!0,f("loopComplete"),f("complete"),!l.passThrough&&"Promise"in window&&(s(),a(l)))))}return l.reset=function(){var t=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed="reverse"===t,l.remaining=l.loop,e=l.children;for(var n=o=e.length;n--;)l.children[n].reset();(l.reversed&&!0!==l.loop||"alternate"===t&&1===l.loop)&&l.remaining++,p(l.reversed?l.duration:0)},l._onDocumentVisibility=h,l.set=function(t,e){return je(t,e),l},l.tick=function(t){i=t,n||(n=i),g((i+(r-n))*He.speed)},l.seek=function(t){g(u(t))},l.pause=function(){l.paused=!0,h()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,Ne.push(l),h(),Te())},l.reverse=function(){c(),l.completed=!l.reversed,h()},l.restart=function(){l.reset(),l.play()},l.remove=function(t){Ue(ke(t),l)},l.reset(),l.autoplay&&l.play(),l}function Ie(t,e){for(var n=e.length;n--;)ne(t,e[n].animatable.target)&&e.splice(n,1)}function Ue(t,e){var n=e.animations,r=e.children;Ie(t,n);for(var i=r.length;i--;){var o=r[i],s=o.animations;Ie(t,s),s.length||o.children.length||r.splice(i,1)}n.length||r.length||e.pause()}He.version="3.2.1",He.speed=1,He.suspendWhenDocumentHidden=!0,He.running=Ne,He.remove=function(t){for(var e=ke(t),n=Ne.length;n--;){Ue(e,Ne[n])}},He.get=ge,He.set=je,He.convertPx=ue,He.path=function(t,e){var n=Lt.str(t)?Kt(t)[0]:t,r=e||100;return function(t){return{property:t,el:n,svg:xe(n),totalLength:we(n)*(r/100)}}},He.setDashoffset=function(t){var e=we(t);return t.setAttribute("stroke-dasharray",e),e},He.stagger=function(t,e){void 0===e&&(e={});var n=e.direction||"normal",r=e.easing?Xt(e.easing):null,i=e.grid,o=e.axis,s=e.from||0,a="first"===s,l="center"===s,c="last"===s,u=Lt.arr(t),h=u?parseFloat(t[0]):parseFloat(t),d=u?parseFloat(t[1]):0,p=ae(u?t[1]:t)||0,f=e.start||0+(u?h:0),g=[],v=0;return function(t,e,m){if(a&&(s=0),l&&(s=(m-1)/2),c&&(s=m-1),!g.length){for(var y=0;y<m;y++){if(i){var b=l?(i[0]-1)/2:s%i[0],w=l?(i[1]-1)/2:Math.floor(s/i[0]),x=b-y%i[0],$=w-Math.floor(y/i[0]),M=Math.sqrt(x*x+$*$);"x"===o&&(M=-x),"y"===o&&(M=-$),g.push(M)}else g.push(Math.abs(s-y));v=Math.max.apply(Math,g)}r&&(g=g.map((function(t){return r(t/v)*v}))),"reverse"===n&&(g=g.map((function(t){return o?t<0?-1*t:-t:Math.abs(v-t)})))}return f+(u?(d-h)/v:h)*(Math.round(100*g[e])/100)+p}},He.timeline=function(t){void 0===t&&(t={});var e=He(t);return e.duration=0,e.add=function(n,r){var i=Ne.indexOf(e),o=e.children;function s(t){t.passThrough=!0}i>-1&&Ne.splice(i,1);for(var a=0;a<o.length;a++)s(o[a]);var l=oe(n,ie(Ht,t));l.targets=l.targets||t.targets;var c=e.duration;l.autoplay=!1,l.direction=e.direction,l.timelineOffset=Lt.und(r)?c:ve(r,c),s(e),e.seek(l.timelineOffset);var u=He(l);s(u),o.push(u);var h=Ee(o,t);return e.delay=h.delay,e.endDelay=h.endDelay,e.duration=h.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e},He.easing=Xt,He.penner=Zt,He.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t};var De=He;class Ve{constructor(t,e){this.hue=t,this.saturation=e}get light(){return xt.a.hsl.rgb([this.hue,this.saturation,75])}get midtone(){return xt.a.hsl.rgb([this.hue,this.saturation,50])}get dark(){return xt.a.hsl.rgb([this.hue,this.saturation,25])}}class ze{constructor(t){this.hue=t}get faintest(){return new Ve(this.hue,25)}get faint(){return new Ve(this.hue,50)}get deep(){return new Ve(this.hue,75)}get deepest(){return new Ve(this.hue,100)}}class Le{static get red(){return new ze(0)}static get orange(){return new ze(30)}static get yellow(){return new ze(60)}static get chartreuse(){return new ze(90)}static get lime(){return new ze(120)}static get springGreen(){return new ze(150)}static get cyan(){return new ze(180)}static get dodgerBlue(){return new ze(210)}static get blue(){return new ze(240)}static get indigo(){return new ze(270)}static get magenta(){return new ze(300)}static get pink(){return new ze(330)}static get gray(){return new Ve(0,0)}static get black(){return[0,0,0]}static get white(){return[255,255,100]}}var Ge=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let _e=class extends lt{constructor(){super(...arguments),this.color=Le.white,this.active=!1,this.initialized=!1}updated(){De.remove([this.renderRoot.querySelector("#panel"),this.renderRoot.querySelector("#curtain")]),this.active?(this.initialized=!0,De({targets:this.renderRoot.querySelector("#panel"),opacity:[0,1],translateY:[40,0],duration:1e3,easing:"easeOutCubic"}),De({targets:this.renderRoot.querySelector("#curtain"),opacity:[0,.5],duration:500,easing:"easeOutCubic"})):this.initialized&&(De({targets:this.renderRoot.querySelector("#panel"),opacity:[1,0],translateY:[0,40],duration:250,easing:"linear"}),De({targets:this.renderRoot.querySelector("#curtain"),opacity:[.5,0],duration:250,easing:"linear"}))}render(){const t=this.color,e=Pt(t);return D`
      <div id="curtain"></div>
      <div
        id="outer-div"
        @click=${()=>this.dispatchEvent(new CustomEvent("dismissed",{bubbles:!0,composed:!0}))}
        style=${mt({"pointer-events":this.active?"auto":"none","touch-action":this.active?"auto":"none"})}
      >
        <div
          id="panel"
          style=${mt({"background-color":jt(t),color:jt(e)})}
          @click=${t=>t.stopPropagation()}
        >
          <slot></slot>
        </div>
      </div>
    `}};_e.styles=l`
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
  `,Ge([ht({type:Array})],_e.prototype,"color",void 0),Ge([ht({type:Boolean})],_e.prototype,"active",void 0),_e=Ge([ct("cw-popup")],_e);var Fe=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let We=class extends lt{render(){return D`<div></div>`}};We.styles=l`
    div {
      width: 8px;
    }
  `,We=Fe([ct("cw-spacer")],We);var Ye=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Qe=class extends lt{constructor(){super(...arguments),this.color=[0,0,0],this.incrementedColor=[0,0,0],this.showIncremented=!1,this.showHex=!1,this.initialized=!1}updated(){this.initialized||(this.initialized=!0,De({targets:this.renderRoot.querySelector("div"),height:"40px",duration:800,changeBegin:()=>{this.dispatchEvent(new CustomEvent("animation-started",{bubbles:!0,composed:!0}))},change:()=>{this.dispatchEvent(new CustomEvent("animation-changed",{bubbles:!0,composed:!0}))},changeComplete:()=>{this.dispatchEvent(new CustomEvent("animation-ended",{bubbles:!0,composed:!0}))}}),De({targets:this.renderRoot.querySelector("#incremented"),translateX:"40px",opacity:0,duration:0,easing:"linear"}),De({targets:this.renderRoot.querySelector("#incremented"),translateX:"0px",delay:100,duration:550,easing:"easeOutBounce"}),De({targets:this.renderRoot.querySelector("#incremented"),opacity:1,delay:100,duration:550,easing:"linear"})),this.showHex?De({targets:this.renderRoot.querySelector("span"),opacity:[0,1],duration:250,delay:500,easing:"linear"}):(De.remove(this.renderRoot.querySelector("span")),De({targets:this.renderRoot.querySelector("span"),opacity:0,easing:"linear",duration:250}))}onMouseOver(){this.showHex=!0}onMouseLeave(){this.showHex=!1}render(){const t=D`<cw-spacer></cw-spacer>`;return D`<div
      id="container"
      style=${mt({"background-color":jt(this.color)})}
      @mousedown=${this.onMouseOver}
      @touchstart=${this.onMouseOver}
      @mouseup=${this.onMouseLeave}
      @mouseleave=${this.onMouseLeave}
      @touchend=${this.onMouseLeave}
    >
      <span
        id="hex"
        style=${mt({color:jt(Pt(this.color))})}
        >${jt(this.color)}</span
      >
      ${this.showIncremented?D`<div
            id="incremented"
            style="margin-top: 60px; transform: scale(0.75)"
          >
            <cw-container .padding=${8}
              >▼${t}<cw-button
                .color=${this.incrementedColor}
                .active=${!0}
                ><slot></slot></cw-button
            ></cw-container>
          </div>`:""}
    </div>`}};Qe.styles=l`
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
  `,Ye([ht({type:Array})],Qe.prototype,"color",void 0),Ye([ht({type:Array})],Qe.prototype,"incrementedColor",void 0),Ye([ht({type:Boolean})],Qe.prototype,"showIncremented",void 0),Ye([ht({attribute:!1})],Qe.prototype,"showHex",void 0),Qe=Ye([ct("cw-cell")],Qe);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const{et:Ze}=et,Xe=()=>document.createComment(""),Ke=(t,e,n)=>{var r;const i=t.A.parentNode,o=void 0===e?t.B:e.A;if(void 0===n){const e=i.insertBefore(Xe(),o),r=i.insertBefore(Xe(),o);n=new Ze(e,r,t,t.options)}else{const e=n.B.nextSibling,s=n.M!==t;if(s&&(null===(r=n.Q)||void 0===r||r.call(n,t),n.M=t),e!==o||s){let t=n.A;for(;t!==e;){const e=t.nextSibling;i.insertBefore(t,o),t=e}}}return n},Je=(t,e,n=t)=>(t.I(e,n),t),tn={},en=t=>{var e;null===(e=t.P)||void 0===e||e.call(t,!1,!0);let n=t.A;const r=t.B.nextSibling;for(;n!==r;){const t=n.nextSibling;n.remove(),n=t}},nn=(t,e,n)=>{const r=new Map;for(let i=e;i<=n;i++)r.set(t[i],i);return r},rn=gt(class extends vt{constructor(t){if(super(t),t.type!==ft)throw Error("repeat() can only be used in text expressions")}Mt(t,e,n){let r;void 0===n?n=e:void 0!==e&&(r=e);const i=[],o=[];let s=0;for(const e of t)i[s]=r?r(e,s):s,o[s]=n(e,s),s++;return{values:o,keys:i}}render(t,e,n){return this.Mt(t,e,n).values}update(t,[e,n,r]){var i;const o=t.H,{values:s,keys:a}=this.Mt(e,n,r);if(!o)return this.Pt=a,s;const l=null!==(i=this.Pt)&&void 0!==i?i:this.Pt=[],c=[];let u,h,d=0,p=o.length-1,f=0,g=s.length-1;for(;d<=p&&f<=g;)if(null===o[d])d++;else if(null===o[p])p--;else if(l[d]===a[f])c[f]=Je(o[d],s[f]),d++,f++;else if(l[p]===a[g])c[g]=Je(o[p],s[g]),p--,g--;else if(l[d]===a[g])c[g]=Je(o[d],s[g]),Ke(t,c[g+1],o[d]),d++,g--;else if(l[p]===a[f])c[f]=Je(o[p],s[f]),Ke(t,o[d],o[p]),p--,f++;else if(void 0===u&&(u=nn(a,f,g),h=nn(l,d,p)),u.has(l[d]))if(u.has(l[p])){const e=h.get(a[f]),n=void 0!==e?o[e]:null;if(null===n){const e=Ke(t,o[d]);Je(e,s[f]),c[f]=e}else c[f]=Je(n,s[f]),Ke(t,o[d],n),o[e]=null;f++}else en(o[p]),p--;else en(o[d]),d++;for(;f<=g;){const e=Ke(t,c[g+1]);Je(e,s[f]),c[f++]=e}for(;d<=p;){const t=o[d++];null!==t&&en(t)}return this.Pt=a,((t,e=tn)=>{t.H=e})(t,c),V}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class on{constructor(t,e){this.targetColor=[],this.iterations=[],this.moves=[],this.difficulty="",this.isGray=!1,this.optimalMoves=0,this.win=!1,this.active=!1,(this.host=t).addController(this),this.gameOptions=e.getSelectedOptions(),this.difficulty=e.steps.stringValue,this.isGray="Grays"===e.colorSpace.stringValue,this.startGame()}createColor(){return new Array(this.gameOptions.colorSpace.basis.length).fill(0).map(t=>Math.floor(Math.random()*this.gameOptions.steps))}startGame(){for(this.targetColor=this.createColor();0===this.optimalMoves;)this.iterations=[this.createColor()],this.optimalMoves=At(this.targetColor,this.iterations[0]);this.active=!0,this.host.requestUpdate()}iterate(t){const e=this.iterations[this.iterations.length-1],n=Mt(e,t,this.gameOptions);if(!n)throw new Error(`Unexpected invalid move: ${e}, ${t}, ${this.gameOptions}`);this.moves.push(t),this.win=n.every((t,e)=>t===this.targetColor[e]),this.iterations=[...this.iterations,n],this.host.requestUpdate()}hostConnected(){}}class sn{constructor(t,e,n){this.owner=t,this.allowedValues=e,this._stringValue=n}get stringValue(){return this._stringValue}set stringValue(t){this._stringValue=t,this.owner.changesMade=!0,this.owner.revision++,this.owner.host.requestUpdate()}get allowedStringValues(){return this.allowedValues.map(t=>t[0])}get description(){return this.allowedValues.find(t=>t[0]===this._stringValue)[1]}get internalValue(){return this.allowedValues.find(t=>t[0]===this._stringValue)[2]}}class an{constructor(t){var e;this.steps=new sn(this,[["Easy","6 steps",6],["Normal","11 steps",11],["Hard","16 steps",16]],"Easy"),this.scaling=new sn(this,[["Linear","Colors evenly spaced by RGB hex value",t=>t],["Log","Darker colors more discernable",(e=2,t=>Math.log2((Math.pow(e,2)-1)*t+1)/e)]],"Linear"),this.colorSpace=new sn(this,[["RGB+","Red/Green/Blue, additive (more = lighter)",{basis:[Le.red.deepest.midtone,Le.lime.deepest.midtone,Le.blue.deepest.midtone],toRGB:t=>t}],["CMY-","Cyan/Magenta/Yellow, subtractive (more = darker)",{basis:[Le.cyan.deepest.midtone,Le.magenta.deepest.midtone,Le.yellow.deepest.midtone],toRGB:t=>t.map(t=>1-t)}],["Grays","For the dull ones",{basis:[Le.gray.midtone],toRGB:t=>[t[0],t[0],t[0]]}]],"RGB+"),this.changesMade=!1,this.revision=0,(this.host=t).addController(this)}hostConnected(){}getSelectedOptions(){return{steps:this.steps.internalValue,scaling:this.scaling.internalValue,colorSpace:this.colorSpace.internalValue}}}var ln=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let cn=class extends lt{constructor(){super(),this.rounds=[],this.gameOptions=new an(this),this.scrollingRequested=!1,this.scrolling=!1,this.animating=!1,this.menuActive=!1,this.optionsActive=!1,this.helpActive=!1}connectedCallback(){super.connectedCallback(),this.startNewGame()}startNewGame(){this.rounds.length>0&&(this.rounds[this.rounds.length-1].active=!1),this.rounds=[...this.rounds,new on(this,this.gameOptions)],this.scrollingRequested=this.scrolling=!1,this.forceScrollToBottom()}iterate(t){this.rounds[this.rounds.length-1].iterate(t.detail),this.scrollingRequested=this.scrolling=!1,this.forceScrollToBottom(),t.stopPropagation()}onMouseOver(){this.scrolling||(this.scrollingRequested=!0,this.requestUpdate())}onMouseInteraction(){this.animating=!1,this.onMouseOver()}onAnimationStarted(){this.animating=!0}onAnimationChanged(){this.animating&&this.forceScrollToBottom()}onAnimationEnded(){this.animating=!1,this.scrollingRequested&&this.requestUpdate()}updated(){this.scrollingRequested&&!this.animating&&(this.scrolling=!0,this.scrollingRequested=!1,this.forceScrollToBottom())}forceScrollToBottom(){if(!this.shadowRoot)return;const t=this.shadowRoot.querySelector("#top");if(!t)return;const e=t.lastElementChild;e&&e.scrollIntoView()}render(){const t=this.rounds[this.rounds.length-1];return D`
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
                .targetColor=${$t(t.targetColor,t.gameOptions)}
                .iterations=${t.iterations.map(e=>$t(e,t.gameOptions))}
                .moves=${t.moves}
                .active=${t.active}
                difficulty=${t.difficulty}
                .isGray=${t.isGray}
                .gameId=${e+1}
                .win=${t.win}
                .optimalMoves=${t.optimalMoves}
              ></cw-round>`)}
          <!-- A zero-height div that is always the last element in #top. -->
          <div style=${mt({height:"0px"})}></div>
        </div>
        <div id="controls-layer-1">
          <cw-primary-controls
            @color-incremented=${this.iterate}
            .moves=${t.gameOptions.colorSpace.basis.flatMap((t,e)=>[-1,1].map(n=>({index:e,rgbColor:t,direction:n}))).map(e=>({...e,valid:!!Mt(t.iterations[t.iterations.length-1],e,t.gameOptions)}))}
            ?active=${!t.win}
          ></cw-primary-controls>
          <cw-meta-controls
            @popup-menu=${()=>{this.menuActive=!0}}
          ></cw-meta-controls>
          <div id="controls-layer-2">
            <cw-terminal-controls
              @new-game=${this.startNewGame}
              ?active=${t.win}
            ></cw-terminal-controls>
          </div>
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
    #controls-layer-1 {
      display: flex;
      justify-content: space-between;
      padding: 5px;
    }
    #controls-layer-2 {
      padding: 0px;
      position: absolute;
    }
  `,ln([ht({attribute:!1})],cn.prototype,"menuActive",void 0),ln([ht({attribute:!1})],cn.prototype,"optionsActive",void 0),ln([ht({attribute:!1})],cn.prototype,"helpActive",void 0),cn=ln([ct("cw-game")],cn);var un=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let hn=class extends lt{constructor(){super(...arguments),this.buttonColor=Le.indigo.faint.dark}render(){return D`<cw-container .height=${50}>
      <cw-button
        @click-down=${()=>yt(this,"popup-menu")}
        .color=${this.buttonColor}
        .active=${!0}
      >
        ${"☰"}
      </cw-button>
    </cw-container>`}};hn.styles=l`
    :host {
      flex-basis: 60px;
      width: 100%;
    }
  `,hn=un([ct("cw-meta-controls")],hn);var dn=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let pn=class extends lt{constructor(){super(...arguments),this.color=Le.cyan.faint.midtone,this.active=!0}render(){return D` <cw-popup .color=${this.color} .active=${this.active}>
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
      user-select: none;
    }
    h1,
    h2,
    p {
      margin: 5px;
    }
    h1 {
      text-align: center;
      font-size: 40px;
    }
    .white {
      color: white;
    }
  `,dn([ht({type:Boolean})],pn.prototype,"active",void 0),pn=dn([ct("cw-help")],pn);var fn=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let gn=class extends lt{constructor(){super(...arguments),this.color=Le.springGreen.faint.midtone,this.buttonColor=Le.springGreen.faint.dark,this.active=!0}render(){return D` <cw-popup .color=${this.color} .active=${this.active}>
      <h1>
        Colorways
        <small><a href="https://github.com/kjin/colorways">v0.0.4</a></small>
      </h1>
      <cw-container .height=${50} .color=${this.color}
        ><cw-button
          @click-down=${()=>yt(this,"new-game")}
          .color=${this.buttonColor}
          .active=${!0}
          >New Game</cw-button
        ></cw-container
      >
      <cw-container .height=${50} .color=${this.color}
        ><cw-button
          @click-down=${()=>yt(this,"popup-options")}
          .color=${this.buttonColor}
          .active=${!0}
          >Options</cw-button
        ></cw-container
      >
      <cw-container .height=${50} .color=${this.color}
        ><cw-button
          @click-down=${()=>yt(this,"popup-help")}
          .color=${this.buttonColor}
          .active=${!0}
          >Help</cw-button
        ></cw-container
      >
    </cw-popup>`}};gn.styles=l`
    :host {
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
  `,fn([ht({type:Boolean})],gn.prototype,"active",void 0),gn=fn([ct("cw-menu")],gn);var vn=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let mn=class extends lt{constructor(){super(...arguments),this.color=Le.dodgerBlue.faint.light,this.buttonColor=Le.dodgerBlue.faint.midtone,this.active=!0,this.gameOptions=null,this.revision=0}render(){const{gameOptions:t}=this;return t?D` <cw-popup .color=${this.color} .active=${this.active}>
      <h1>Options</h1>
      <h2>Difficulty</h2>
      <p>${t.steps.description}</p>
      <cw-container .height=${40} .color=${this.color}>
        ${rn(t.steps.allowedStringValues,e=>D`<cw-button
              .color=${this.buttonColor}
              @click-down=${()=>t.steps.stringValue=e}
              .active=${t.steps.stringValue!==e}
              >${e}</cw-button
            >`)}
      </cw-container>
      <h2>Color Scale</h2>
      <p>${t.scaling.description}</p>
      <cw-container .height=${40} .color=${this.color}>
        ${rn(t.scaling.allowedStringValues,e=>D`<cw-button
              .color=${this.buttonColor}
              @click-down=${()=>t.scaling.stringValue=e}
              .active=${t.scaling.stringValue!==e}
              >${e}</cw-button
            >`)}
      </cw-container>
      <h2>Color Space</h2>
      <p>${t.colorSpace.description}</p>
      <cw-container .height=${40} .color=${this.color}>
        ${rn(t.colorSpace.allowedStringValues,e=>D`<cw-button
              .color=${this.buttonColor}
              @click-down=${()=>t.colorSpace.stringValue=e}
              .active=${t.colorSpace.stringValue!==e}
              >${e}</cw-button
            >`)}
      </cw-container>
    </cw-popup>`:""}};mn.styles=l`
    :host {
      user-select: none;
    }
    h1,
    h2,
    p {
      margin: 5px;
    }
    h1 {
      text-align: center;
      font-size: 40px;
    }
  `,vn([ht({type:Boolean})],mn.prototype,"active",void 0),vn([ht({type:Object})],mn.prototype,"gameOptions",void 0),vn([ht({type:Number})],mn.prototype,"revision",void 0),mn=vn([ct("cw-options")],mn);var yn=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let bn=class extends lt{constructor(){super(...arguments),this.interval=1,this.current=[0,0,0],this.active=!0,this.moves=[]}updated(){this.active?(De.remove(this.renderRoot.firstElementChild),De({targets:this.renderRoot.firstElementChild,opacity:1,duration:100,easing:"linear",changeBegin:()=>{var t;null===(t=this.renderRoot.firstElementChild)||void 0===t||t.classList.remove("invisible")}})):De({targets:this.renderRoot.firstElementChild,opacity:0,duration:100,delay:900,easing:"linear",changeComplete:()=>{var t;null===(t=this.renderRoot.firstElementChild)||void 0===t||t.classList.add("invisible")}})}render(){const t=this.moves.map(t=>D`<cw-button
        .color=${t.rgbColor}
        ?active=${this.active&&t.valid}
        @click-down=${()=>this.active&&yt(this,"color-incremented",t)}
        >${bt(t.direction)}</cw-button
      >`);return D`<div>
      <cw-container .width=${400} .height=${50}> ${t} </cw-container>
    </div>`}};bn.styles=l`
    :host {
      flex-grow: 1;
    }
  `,yn([ht({type:Number})],bn.prototype,"interval",void 0),yn([ht({type:Array})],bn.prototype,"current",void 0),yn([ht({type:Boolean})],bn.prototype,"active",void 0),yn([ht({type:Array})],bn.prototype,"moves",void 0),bn=yn([ct("cw-primary-controls")],bn);var wn=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let xn=class extends lt{constructor(){super(...arguments),this.targetColor=[0,0,0],this.iterations=[],this.moves=[],this.active=!0,this.win=!1,this.difficulty="",this.isGray=!1,this.gameId=0,this.optimalMoves=0}render(){const t=this.isGray?'"':"";return D`<div
      style=${mt({"background-color":this.active?jt(Ct(St(this.targetColor),.5)):"white"})}
    >
      ${rn(this.iterations,(t,e)=>{let n=[0,0,0],r="?";return this.moves.length>e&&(n=this.moves[e].rgbColor,r=bt(this.moves[e].direction)),D`<cw-cell
            .color=${t}
            .showIncremented=${!this.win||e<this.iterations.length-1}
            .incrementedColor=${n}
            >${r}</cw-cell
          >`})}
      <hr />
      <cw-cell id="target-color" .color=${this.targetColor}></cw-cell>
      <table
        style=${mt({color:this.active?jt(Ot(St(this.targetColor),.5)):"gray"})}
      >
        <td id="game-title">
          ${t}Game${t} ${this.gameId} -
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
  `,wn([ht({type:Array})],xn.prototype,"targetColor",void 0),wn([ht({type:Array})],xn.prototype,"iterations",void 0),wn([ht({type:Array})],xn.prototype,"moves",void 0),wn([ht({type:Boolean})],xn.prototype,"active",void 0),wn([ht({type:Boolean})],xn.prototype,"win",void 0),wn([ht()],xn.prototype,"difficulty",void 0),wn([ht({type:Boolean})],xn.prototype,"isGray",void 0),wn([ht({type:Number})],xn.prototype,"gameId",void 0),wn([ht({type:Number})],xn.prototype,"optimalMoves",void 0),xn=wn([ct("cw-round")],xn);var $n=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Mn=class extends lt{constructor(){super(...arguments),this.buttonColor=Le.indigo.faint.dark,this.active=!1}updated(){this.active?De({targets:this.renderRoot.firstElementChild,opacity:1,duration:100,delay:1e3,easing:"linear",changeBegin:()=>{var t;null===(t=this.renderRoot.firstElementChild)||void 0===t||t.classList.remove("invisible")}}):De({targets:this.renderRoot.firstElementChild,opacity:0,duration:250,easing:"linear",changeComplete:()=>{var t;null===(t=this.renderRoot.firstElementChild)||void 0===t||t.classList.add("invisible")}})}render(){return D`<div class="invisible">
      <cw-container .width=${400} .height=${50}>
        <cw-button
          @click-down=${()=>yt(this,"new-game")}
          .color=${this.buttonColor}
          .active=${this.active}
        >
          New Game
        </cw-button>
      </cw-container>
    </div>`}};Mn.styles=l`
    div {
      opacity: 0;
    }
    .invisible {
      display: none;
    }
  `,$n([ht({type:Boolean})],Mn.prototype,"active",void 0),Mn=$n([ct("cw-terminal-controls")],Mn)}]);
//# sourceMappingURL=main.js.map