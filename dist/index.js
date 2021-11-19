var Client;(()=>{"use strict";var e={123:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,'html,body{margin:0;padding:0;height:100vh;width:100vw;min-width:320px;text-decoration:none}.container{display:grid;grid-template-columns:100%;grid-template-rows:10% auto 10%;grid-template-areas:"header" "main" "footer"}@media only screen and (min-width: 600px){.container{display:grid;grid-template-columns:5% auto 5%;grid-template-rows:10% auto 10%;grid-template-areas:". header ." ". main ." ". footer ."}}.result-body-container{display:grid;grid-template-columns:100%;grid-template-rows:10% auto 10%;grid-template-areas:"header" "main" "footer"}.result-body-container main{display:grid;grid-template-columns:100%;grid-template-rows:40% 30% 20% 20%;grid-template-areas:"image" "des" "dategap" "weather"}@media only screen and (min-width: 600px){.result-body-container{display:grid;grid-template-columns:100%;grid-template-rows:10% auto 10%;grid-template-areas:"header" "main" "footer";overflow:hidden}.result-body-container main{display:grid;grid-template-columns:40% 60%;grid-template-rows:repeat(3, 1fr);grid-template-areas:"image des" "image dategap" "image weather";grid-gap:5px;border-style:solid;border-width:0px 2px;border-color:#0284C9}}\n',""]);const a=o},859:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,"footer{grid-area:footer;background-color:white;border:2px solid #0284C9;border-radius:0 0 3px 3px;font-family:'Times New Roman', Times, serif}\n",""]);const a=o},603:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,"header{grid-area:header;background-color:white;border:2px solid #0284C9;border-radius:3px 3px 0 0;font-size:46px;font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif}\n",""]);const a=o},830:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,".index-main-container{grid-area:main;border:none;background-color:#0284C9}.form-container{text-align:center;margin-top:40%}.form-container label{font-family:'Times New Roman', Times, serif;font-size:2rem;color:#F8F6F2}button{background-color:white;width:130px;height:30px;color:#0284C9;font-family:'Times New Roman', Times, serif;font-size:1rem;font-weight:400;border:none;border-radius:5px;letter-spacing:2px;margin-top:10px}#submit:hover{background-color:#0284C9;color:white;border:2px solid white}#destination{width:130px;height:25px;font-family:'Times New Roman', Times, serif;font-weight:400px;font-size:1rem;border:none;border-radius:3px}form input{width:130px;height:25px;color:#0284C9;font-size:1rem;font-family:'Times New Roman', Times, serif;font-weight:400;border:none;border-radius:3px}@media (min-width: 360px){.form-container{text-align:center;margin-top:20vh}.form-container label{font-family:'Times New Roman', Times, serif;font-size:26px;color:#F8F6F2}}.result-main-container{grid-area:main;border:none}#result-image{grid-area:image}#result-destination{grid-area:des;background-color:#0284C9;overflow:hidden}#result-dategap{grid-area:dategap;background-color:#0284C9;overflow:hidden}#result-weather{grid-area:weather;background-color:#0284C9;overflow:hidden}\n",""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);n&&o[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),t.push(l))}},t}},379:(e,t,r)=>{var n,o=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),a=[];function i(e){for(var t=-1,r=0;r<a.length;r++)if(a[r].identifier===e){t=r;break}return t}function d(e,t){for(var r={},n=[],o=0;o<e.length;o++){var d=e[o],l=t.base?d[0]+t.base:d[0],s=r[l]||0,c="".concat(l," ").concat(s);r[l]=s+1;var u=i(c),m={css:d[1],media:d[2],sourceMap:d[3]};-1!==u?(a[u].references++,a[u].updater(m)):a.push({identifier:c,updater:h(m,t),references:1}),n.push(c)}return n}function l(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var a=r.nc;a&&(n.nonce=a)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,c=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function u(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=c(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function m(e,t,r){var n=r.css,o=r.media,a=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,f=0;function h(e,t){var r,n,o;if(t.singleton){var a=f++;r=p||(p=l(t)),n=u.bind(null,r,a,!1),o=u.bind(null,r,a,!0)}else r=l(t),n=m.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=i(r[n]);a[o].references--}for(var l=d(e,t),s=0;s<r.length;s++){var c=i(r[s]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}r=l}}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{function e(e){return 0!==(e=e.trim()).length&&e}function t(e){let t=Date.parse(new Date);return!(Date.parse(e)-t<0)&&e}async function o(e){e.preventDefault();let t=document.getElementById("destination").value,r=document.getElementById("startdate").value,n=document.getElementById("enddate").value;if(t=Client.checkForCityInput(t),r=Client.checkForStartDate(r),t)if(r){if(n&&r>=n)return alert("Your return date must follow the depart date!"),!1;try{const e=await a("/post",{cityName:t,startDate:r,endDate:n});if(void 0===e.latitude||void 0===e.longitude)return alert("Please check your city spelling!"),!1;window.location.replace("http://localhost:3000/result.html")}catch(e){console.log("error",e)}}else alert("Please type your plan date or make sure the date not in the past!");else alert("Please type your favorite destination!")}r.r(n),r.d(n,{checkForCityInput:()=>e,checkForStartDate:()=>t,handleSubmit:()=>o});const a=async(e="",t={})=>{const r=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{const e=await r.json();return console.log(e),e}catch(e){console.log("error",e)}};var i=r(379),d=r.n(i),l=r(123);d()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;var s=r(603);d()(s.Z,{insert:"head",singleton:!1}),s.Z.locals;var c=r(830);d()(c.Z,{insert:"head",singleton:!1}),c.Z.locals;var u=r(859);d()(u.Z,{insert:"head",singleton:!1}),u.Z.locals,document.getElementById("submit").addEventListener("click",o)})(),Client=n})();