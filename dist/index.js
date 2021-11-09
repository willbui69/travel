var Client;(()=>{"use strict";var e={123:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,'html,body{margin:0;padding:0;height:100vh;min-width:300px;text-decoration:none}.container{display:grid;grid-template-columns:100%;grid-template-rows:15% auto 10%;grid-template-areas:"header" "main" "footer";border:none}@media only screen and (min-width: 600px){.container{display:grid;grid-template-columns:100px auto 100px;grid-template-rows:10% auto 10%;grid-template-areas:". header ." ". main ." ". footer .";border:none}}.result-body-container{display:grid;grid-template-columns:100%;grid-template-rows:15% 25% 10% 10% 10% 20% 10%;grid-template-areas:"header" "image" "destination" "depart" "dategap" "weather" "footer"}\n',""]);const i=o},859:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,"footer{grid-area:footer;background-color:white;border:2px solid #0284C9;border-radius:0 0 3px 3px;font-family:'Times New Roman', Times, serif;margin-bottom:10px}\n",""]);const i=o},603:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,"header{grid-area:header;background-color:white;border:2px solid #0284C9;border-radius:3px 3px 0 0;font-size:46px;margin-top:20px;font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif}\n",""]);const i=o},830:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,".index-main-container{grid-area:main;border:none;background-color:#0284C9;min-width:310px}.form-container{text-align:center;margin-top:40%}.form-container label{font-family:'Times New Roman', Times, serif;font-size:26px;color:#F8F6F2}button{background-color:white;width:130px;height:30px;color:#0284C9;font-family:'Times New Roman', Times, serif;font-size:14px;font-weight:400;border:none;border-radius:5px;letter-spacing:2px;margin-top:10px}#submit:hover{background-color:#0284C9;color:white;border:2px solid white}#destination{width:130px;height:25px;font-family:'Times New Roman', Times, serif;font-weight:400px;font-size:16px;border:none;border-radius:3px}#depart{width:130px;height:25px;color:#0284C9;font-size:16px;font-family:'Times New Roman', Times, serif;font-weight:400;border:none;border-radius:3px}@media only screen and (min-width: 768px){.form-container{text-align:center;margin-top:15%}.form-container label{font-family:'Times New Roman', Times, serif;font-size:26px;color:#F8F6F2}}.result-image{grid-area:image;border:1px solid red}#result-destination{grid-area:destination;border:1px solid green}#result-depart{grid-area:depart;border:1px solid blue}#result-dategap{grid-area:dategap;border:1px solid orange}#result-weather{grid-area:weather;border:1px solid violet}\n",""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);n&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),t.push(s))}},t}},379:(e,t,r)=>{var n,o=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),i=[];function a(e){for(var t=-1,r=0;r<i.length;r++)if(i[r].identifier===e){t=r;break}return t}function d(e,t){for(var r={},n=[],o=0;o<e.length;o++){var d=e[o],s=t.base?d[0]+t.base:d[0],l=r[s]||0,c="".concat(s," ").concat(l);r[s]=l+1;var u=a(c),p={css:d[1],media:d[2],sourceMap:d[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:c,updater:h(p,t),references:1}),n.push(c)}return n}function s(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=r.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,c=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=c(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,r){var n=r.css,o=r.media,i=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var f=null,m=0;function h(e,t){var r,n,o;if(t.singleton){var i=m++;r=f||(f=s(t)),n=u.bind(null,r,i,!1),o=u.bind(null,r,i,!0)}else r=s(t),n=p.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=a(r[n]);i[o].references--}for(var s=d(e,t),l=0;l<r.length;l++){var c=a(r[l]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}r=s}}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{function e(e){return 0!==(e=e.trim()).length&&e}function t(e){let t=Date.parse(new Date);return Date.parse(e)-t<0?(alert("Date must be today or in the future!"),!1):e}async function o(e){e.preventDefault();let t=document.getElementById("destination").value,r=document.getElementById("depart").value;if(t=Client.checkForCityInput(t),r=Client.checkForDateInput(r),""==t||""==r)return alert("Please type your favorite destination and date!"),!1;try{const e=await i("/post",{cityName:t,departDate:r});if(void 0===e.latitude||void 0===e.longitude)return alert("Please check your city spelling!"),!1;window.location.replace("http://localhost:3000/result.html")}catch(e){console.log("error",e)}}r.r(n),r.d(n,{checkForCityInput:()=>e,checkForDateInput:()=>t,handleSubmit:()=>o,insertServerData:()=>a});const i=async(e="",t={})=>{const r=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{const e=await r.json();return console.log(e),e}catch(e){console.log("error",e)}};function a(){document.getElementById("result-destination").innerHTML=`<p>My trip to: ${serverData.cityName}</p>`,document.getElementById("result-depart").innerHTML=`<p>Departing: ${severData.longitude}</p>`}var d=r(379),s=r.n(d),l=r(123);s()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;var c=r(603);s()(c.Z,{insert:"head",singleton:!1}),c.Z.locals;var u=r(830);s()(u.Z,{insert:"head",singleton:!1}),u.Z.locals;var p=r(859);s()(p.Z,{insert:"head",singleton:!1}),p.Z.locals,document.getElementById("submit").addEventListener("click",(function(){o(event),a()}))})(),Client=n})();