!function(){var t,n,e={2673:function(t,n,e){"use strict";e.d(n,{H:function(){return a},c:function(){return y},g:function(){return p},h:function(){return i},r:function(){return b}});var r=e(9062),o=e(1002);e(1284);var u=function(t){return"object"===(t=(0,o.Z)(t))||"function"===t},i=function(t,n){for(var e=null,r=null,i=null,a=!1,f=!1,l=[],p=function n(r){for(var o=0;o<r.length;o++)e=r[o],Array.isArray(e)?n(e):null!=e&&"boolean"!=typeof e&&((a="function"!=typeof t&&!u(e))&&(e=String(e)),a&&f?l[l.length-1].$text$+=e:l.push(a?c(null,e):e),f=a)},y=arguments.length,d=new Array(y>2?y-2:0),m=2;m<y;m++)d[m-2]=arguments[m];if(p(d),n){n.key&&(r=n.key),n.name&&(i=n.name);var v=n.className||n.class;v&&(n.class="object"!==(0,o.Z)(v)?v:Object.keys(v).filter((function(t){return v[t]})).join(" "))}if("function"==typeof t)return t(null===n?{}:n,l,s);var b=c(t,null);return b.$attrs$=n,l.length>0&&(b.$children$=l),b.$key$=r,b.$name$=i,b},c=function(t,n){return{$flags$:0,$tag$:t,$text$:n,$elm$:null,$children$:null,$attrs$:null,$key$:null,$name$:null}},a={},s={forEach:function(t,n){return t.map(f).forEach(n)},map:function(t,n){return t.map(f).map(n).map(l)}},f=function(t){return{vattrs:t.$attrs$,vchildren:t.$children$,vkey:t.$key$,vname:t.$name$,vtag:t.$tag$,vtext:t.$text$}},l=function(t){if("function"==typeof t.vtag){var n=Object.assign({},t.vattrs);return t.vkey&&(n.key=t.vkey),t.vname&&(n.name=t.vname),i.apply(void 0,[t.vtag,n].concat((0,r.Z)(t.vchildren||[])))}var e=c(t.vtag,t.vtext);return e.$attrs$=t.vattrs,e.$children$=t.vchildren,e.$key$=t.vkey,e.$name$=t.vname,e},p=function(t){return v(t).$hostElement$},y=function(t,n,e){var r=p(t);return{emit:function(t){return d(r,n,{bubbles:!!(4&e),composed:!!(2&e),cancelable:!!(1&e),detail:t})}}},d=function(t,n,e){var r=$.ce(n,e);return t.dispatchEvent(r),r},m=new WeakMap,v=function(t){return m.get(t)},b=function(t,n){return m.set(n.$lazyInstance$=t,n)},$=(("undefined"!=typeof window?window:{}).document,{$flags$:0,$resourcesUrl$:"",jmp:function(t){return t()},raf:function(t){return requestAnimationFrame(t)},ael:function(t,n,e,r){return t.addEventListener(n,e,r)},rel:function(t,n,e,r){return t.removeEventListener(n,e,r)},ce:function(t,n){return new CustomEvent(t,n)}})},7202:function(t,n,e){var r={"./presto-action-bar-ui_2.entry.js":[578,569],"./presto-action-bar_17.entry.js":[2626,569],"./presto-cta-overlay-ui.entry.js":[3285,569],"./presto-email-overlay-ui_2.entry.js":[1871,569],"./presto-player-button.entry.js":[5657,569],"./presto-player-skeleton.entry.js":[4992,569],"./presto-player_4.entry.js":[2361,569],"./presto-playlist.entry.js":[1928,569],"./presto-search-bar-ui.entry.js":[9458,569],"./presto-timestamp.entry.js":[4317,569],"./presto-video-curtain-ui.entry.js":[5704,569],"./presto-video.entry.js":[4178,569]};function o(t){if(!e.o(r,t))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[t],o=n[0];return e.e(n[1]).then((function(){return e(o)}))}o.keys=function(){return Object.keys(r)},o.id=7202,t.exports=o},1284:function(t){"use strict";t.exports=window.regeneratorRuntime},907:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}e.d(n,{Z:function(){return r}})},5057:function(t,n,e){"use strict";e.d(n,{Z:function(){return o}});var r=e(907);function o(t){if(Array.isArray(t))return(0,r.Z)(t)}},9199:function(t,n,e){"use strict";function r(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}e.d(n,{Z:function(){return r}})},2786:function(t,n,e){"use strict";function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}e.d(n,{Z:function(){return r}})},9062:function(t,n,e){"use strict";e.d(n,{Z:function(){return c}});var r=e(5057),o=e(9199),u=e(181),i=e(2786);function c(t){return(0,r.Z)(t)||(0,o.Z)(t)||(0,u.Z)(t)||(0,i.Z)()}},1002:function(t,n,e){"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}e.d(n,{Z:function(){return r}})},181:function(t,n,e){"use strict";e.d(n,{Z:function(){return o}});var r=e(907);function o(t,n){if(t){if("string"==typeof t)return(0,r.Z)(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?(0,r.Z)(t,n):void 0}}}},r={};function o(t){var n=r[t];if(void 0!==n)return n.exports;var u=r[t]={exports:{}};return e[t](u,u.exports,o),u.exports}o.m=e,o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,{a:n}),n},o.d=function(t,n){for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(n,e){return o.f[e](t,n),n}),[]))},o.u=function(t){return t+".js"},o.miniCssF=function(t){},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},t={},n="@presto-player/presto-player:",o.l=function(e,r,u,i){if(t[e])t[e].push(r);else{var c,a;if(void 0!==u)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==n+u){c=l;break}}c||(a=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",n+u),c.src=e),t[e]=[r];var p=function(n,r){c.onerror=c.onload=null,clearTimeout(y);var o=t[e];if(delete t[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(t){return t(r)})),n)return n(r)},y=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),a&&document.head.appendChild(c)}},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.j=930,function(){var t;o.g.importScripts&&(t=o.g.location+"");var n=o.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var e=n.getElementsByTagName("script");e.length&&(t=e[e.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t}(),function(){var t={930:0};o.f.j=function(n,e){var r=o.o(t,n)?t[n]:void 0;if(0!==r)if(r)e.push(r[2]);else{var u=new Promise((function(e,o){r=t[n]=[e,o]}));e.push(r[2]=u);var i=o.p+o.u(n),c=new Error;o.l(i,(function(e){if(o.o(t,n)&&(0!==(r=t[n])&&(t[n]=void 0),r)){var u=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+n+" failed.\n("+u+": "+i+")",c.name="ChunkLoadError",c.type=u,c.request=i,r[1](c)}}),"chunk-"+n,n)}};var n=function(n,e){var r,u,i=e[0],c=e[1],a=e[2],s=0;if(i.some((function(n){return 0!==t[n]}))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);a&&a(o)}for(n&&n(e);s<i.length;s++)u=i[s],o.o(t,u)&&t[u]&&t[u][0](),t[u]=0},e=self.webpackChunk_presto_player_presto_player=self.webpackChunk_presto_player_presto_player||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}(),function(){"use strict";o(2673),function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var t=HTMLElement;window.HTMLElement=function(){return Reflect.construct(t,[],this.constructor)},HTMLElement.prototype=t.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,t)}}()}()}();