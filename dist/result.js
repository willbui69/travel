var Client;(()=>{"use strict";var e={123:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,'html,body{margin:0;padding:0;height:100vh;width:100vw;min-width:320px;text-decoration:none}.container{display:grid;grid-template-columns:100%;grid-template-rows:10% auto 10%;grid-template-areas:"header" "main" "footer"}@media only screen and (min-width: 600px){.container{display:grid;grid-template-columns:5% auto 5%;grid-template-rows:10% auto 10%;grid-template-areas:". header ." ". main ." ". footer ."}}.result-body-container{display:grid;grid-template-columns:100%;grid-template-rows:10% auto 10%;grid-template-areas:"header" "main" "footer"}.result-body-container main{display:grid;grid-template-columns:100%;grid-template-rows:40% 20% 10% 30%;grid-template-areas:"image" "des" "dategap" "weather"}@media only screen and (min-width: 600px){.result-body-container{display:grid;grid-template-columns:100%;grid-template-rows:10% auto 10%;grid-template-areas:"header" "main" "footer";overflow:hidden}.result-body-container main{display:grid;grid-template-columns:40% 60%;grid-template-rows:5% 35% 20% 40%;grid-template-areas:"image ." "image des" "image dategap" "image weather";grid-gap:5px;border-style:solid;border-width:0px 2px;border-color:#0284C9}}\n',""]);const i=o},859:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,"footer{grid-area:footer;background-color:white;border:2px solid #0284C9;border-radius:0 0 3px 3px;font-family:'Times New Roman', Times, serif}\n",""]);const i=o},603:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,"header{grid-area:header;background-color:white;border:2px solid #0284C9;border-radius:3px 3px 0 0;font-size:46px;font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif}\n",""]);const i=o},830:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,".index-main-container{grid-area:main;border:none;background-color:#0284C9}.form-container{text-align:center;margin-top:40%}.form-container label{font-family:'Times New Roman', Times, serif;font-size:2rem;color:#F8F6F2}button{background-color:white;width:130px;height:30px;color:#0284C9;font-family:'Times New Roman', Times, serif;font-size:1rem;font-weight:400;border:none;border-radius:5px;letter-spacing:2px;margin-top:10px}#submit:hover{background-color:#0284C9;color:white;border:2px solid white}#destination{width:130px;height:25px;font-family:'Times New Roman', Times, serif;font-weight:400px;font-size:1rem;border:none;border-radius:3px}form input{width:130px;height:25px;color:#0284C9;font-size:1rem;font-family:'Times New Roman', Times, serif;font-weight:400;border:none;border-radius:3px}@media (min-width: 360px){.form-container{text-align:center;margin-top:20vh}.form-container label{font-family:'Times New Roman', Times, serif;font-size:26px;color:#F8F6F2}}.result-main-container{grid-area:main;border:none}#result-image{grid-area:image}#result-destination{grid-area:des;background-color:#0284C9;overflow:hidden}#result-dategap{grid-area:dategap;background-color:#0284C9;overflow:hidden}#result-weather{grid-area:weather;background-color:#0284C9;overflow:hidden}\n",""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);n&&o[d[0]]||(r&&(d[2]?d[2]="".concat(r," and ").concat(d[2]):d[2]=r),t.push(d))}},t}},379:(e,t,r)=>{var n,o=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),i=[];function a(e){for(var t=-1,r=0;r<i.length;r++)if(i[r].identifier===e){t=r;break}return t}function s(e,t){for(var r={},n=[],o=0;o<e.length;o++){var s=e[o],d=t.base?s[0]+t.base:s[0],l=r[d]||0,c="".concat(d," ").concat(l);r[d]=l+1;var m=a(c),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==m?(i[m].references++,i[m].updater(p)):i.push({identifier:c,updater:g(p,t),references:1}),n.push(c)}return n}function d(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=r.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,c=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function m(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=c(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,r){var n=r.css,o=r.media,i=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u=null,f=0;function g(e,t){var r,n,o;if(t.singleton){var i=f++;r=u||(u=d(t)),n=m.bind(null,r,i,!1),o=m.bind(null,r,i,!0)}else r=d(t),n=p.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=a(r[n]);i[o].references--}for(var d=s(e,t),l=0;l<r.length;l++){var c=a(r[l]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}r=d}}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{async function e(){const e=await t("/get");if(document.getElementById("result-image").innerHTML=`<img style="width: 100%; height: 100%;" src="${e.imageLink}" alt="${e.cityName} city">`,document.getElementById("result-destination").innerHTML=`<p style="font-family:'Times New Roman'; font-size: 18px; color: white; margin-left: 5px; margin-top: 15px;"> <span> My trip to: ${e.cityName}, ${e.countryName}</span> <br> <br> \n                                                                                                                                                           <span> Departing: ${e.startDate} </span></p>`,document.getElementById("result-dategap").innerHTML=`<p style="font-family:'Times New Roman'; font-size: 18px; color: white; margin-left: 5px;">${e.cityName}, ${e.countryName} is ${e.dateGap} days away</p>`,document.getElementById("result-weather").innerHTML=`<p style="font-family:'Times New Roman'; font-size: 18px; color: white; margin-left: 5px;">Typical weather for then is:<br> <br>\n                                                            <span style="font-family:'Times New Roman'; font-size: 18px; color: white; margin-left: 5px;">Temperature: ${e.temp}&deg;C</span><br> <br>\n                                                            <span style="font-family:'Times New Roman'; font-size: 18px; color: white; margin-left: 5px;">${e.des} throughout the day</span></p>`,e.endDate){const t=document.querySelector("#result-destination"),r=document.createElement("div");r.innerHTML=`<span style="font-family:'Times New Roman'; font-size: 18px; color: white; margin-left: 5px;"> Trip Length: ${e.tripLength} day(s)</span>`,t.insertAdjacentElement("beforeend",r)}}r.r(n),r.d(n,{insertServerData:()=>e});const t=async(e="")=>{const t=await fetch(e);try{return t.json()}catch(e){console.log("error",e)}};var o=r(379),i=r.n(o),a=r(123);i()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;var s=r(603);i()(s.Z,{insert:"head",singleton:!1}),s.Z.locals;var d=r(830);i()(d.Z,{insert:"head",singleton:!1}),d.Z.locals;var l=r(859);i()(l.Z,{insert:"head",singleton:!1}),l.Z.locals,document.addEventListener("DOMContentLoaded",e)})(),Client=n})();