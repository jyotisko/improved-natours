parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"VuXv":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[i]=function(){return this};var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}return g.prototype=b.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}
},{}],"g63L":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.displayMap=void 0;var e=function(e){mapboxgl.accessToken="pk.eyJ1Ijoiam9uYXNzY2htZWR0bWFubiIsImEiOiJjam54ZmM5N3gwNjAzM3dtZDNxYTVlMnd2In0.ytpI7V7w7cyT1Kq5rT9Z1A";var o=new mapboxgl.Map({container:"map",style:"mapbox://styles/jonasschmedtmann/cjvi9q8jd04mi1cpgmg7ev3dy",scrollZoom:!1}),a=new mapboxgl.LngLatBounds;e.forEach(function(e){var t=document.createElement("div");t.className="marker",new mapboxgl.Marker({element:t,anchor:"bottom"}).setLngLat(e.coordinates).addTo(o),new mapboxgl.Popup({offset:30}).setLngLat(e.coordinates).setHTML("<p>Day ".concat(e.day,": ").concat(e.description,"</p>")).addTo(o),a.extend(e.coordinates)}),o.fitBounds(a,{padding:{top:200,bottom:150,left:100,right:100}})};exports.displayMap=e;
},{}],"nb4k":[function(require,module,exports) {
"use strict";module.exports=function(r,n){return function(){for(var t=new Array(arguments.length),e=0;e<t.length;e++)t[e]=arguments[e];return r.apply(n,t)}};
},{}],"ojc0":[function(require,module,exports) {
module.exports=function(o){return null!=o&&null!=o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o)};
},{}],"zIVT":[function(require,module,exports) {
"use strict";var e=require("./helpers/bind"),r=require("is-buffer"),n=Object.prototype.toString;function t(e){return"[object Array]"===n.call(e)}function i(e){return"[object ArrayBuffer]"===n.call(e)}function o(e){return"undefined"!=typeof FormData&&e instanceof FormData}function f(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function u(e){return"string"==typeof e}function c(e){return"number"==typeof e}function a(e){return void 0===e}function l(e){return null!==e&&"object"==typeof e}function s(e){return"[object Date]"===n.call(e)}function p(e){return"[object File]"===n.call(e)}function y(e){return"[object Blob]"===n.call(e)}function d(e){return"[object Function]"===n.call(e)}function b(e){return l(e)&&d(e.pipe)}function j(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function m(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function B(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function v(e,r){if(null!=e)if("object"!=typeof e&&(e=[e]),t(e))for(var n=0,i=e.length;n<i;n++)r.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.call(null,e[o],o,e)}function A(){var e={};function r(r,n){"object"==typeof e[n]&&"object"==typeof r?e[n]=A(e[n],r):e[n]=r}for(var n=0,t=arguments.length;n<t;n++)v(arguments[n],r);return e}function g(r,n,t){return v(n,function(n,i){r[i]=t&&"function"==typeof n?e(n,t):n}),r}module.exports={isArray:t,isArrayBuffer:i,isBuffer:r,isFormData:o,isArrayBufferView:f,isString:u,isNumber:c,isObject:l,isUndefined:a,isDate:s,isFile:p,isBlob:y,isFunction:d,isStream:b,isURLSearchParams:j,isStandardBrowserEnv:B,forEach:v,merge:A,extend:g,trim:m};
},{"./helpers/bind":"nb4k","is-buffer":"ojc0"}],"TOXd":[function(require,module,exports) {
"use strict";var e=require("../utils");module.exports=function(t,r){e.forEach(t,function(e,o){o!==r&&o.toUpperCase()===r.toUpperCase()&&(t[r]=e,delete t[o])})};
},{"../utils":"zIVT"}],"obgR":[function(require,module,exports) {
"use strict";module.exports=function(e,o,r,s,t){return e.config=o,r&&(e.code=r),e.request=s,e.response=t,e};
},{}],"lGrg":[function(require,module,exports) {
"use strict";var r=require("./enhanceError");module.exports=function(e,n,o,t,u){var a=new Error(e);return r(a,n,o,t,u)};
},{"./enhanceError":"obgR"}],"wZW9":[function(require,module,exports) {
"use strict";var t=require("./createError");module.exports=function(e,s,u){var a=u.config.validateStatus;u.status&&a&&!a(u.status)?s(t("Request failed with status code "+u.status,u.config,null,u.request,u)):e(u)};
},{"./createError":"lGrg"}],"RS1v":[function(require,module,exports) {
"use strict";var e=require("./../utils");function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}module.exports=function(i,n,t){if(!n)return i;var a;if(t)a=t(n);else if(e.isURLSearchParams(n))a=n.toString();else{var c=[];e.forEach(n,function(i,n){null!=i&&(e.isArray(i)?n+="[]":i=[i],e.forEach(i,function(i){e.isDate(i)?i=i.toISOString():e.isObject(i)&&(i=JSON.stringify(i)),c.push(r(n)+"="+r(i))}))}),a=c.join("&")}return a&&(i+=(-1===i.indexOf("?")?"?":"&")+a),i};
},{"./../utils":"zIVT"}],"T8HP":[function(require,module,exports) {
"use strict";var e=require("./../utils"),t=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];module.exports=function(r){var i,o,n,s={};return r?(e.forEach(r.split("\n"),function(r){if(n=r.indexOf(":"),i=e.trim(r.substr(0,n)).toLowerCase(),o=e.trim(r.substr(n+1)),i){if(s[i]&&t.indexOf(i)>=0)return;s[i]="set-cookie"===i?(s[i]?s[i]:[]).concat([o]):s[i]?s[i]+", "+o:o}}),s):s};
},{"./../utils":"zIVT"}],"DmB6":[function(require,module,exports) {
"use strict";var t=require("./../utils");module.exports=t.isStandardBrowserEnv()?function(){var r,e=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");function a(t){var r=t;return e&&(o.setAttribute("href",r),r=o.href),o.setAttribute("href",r),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}return r=a(window.location.href),function(e){var o=t.isString(e)?a(e):e;return o.protocol===r.protocol&&o.host===r.host}}():function(){return!0};
},{"./../utils":"zIVT"}],"OhlP":[function(require,module,exports) {
"use strict";var e=require("./../utils");module.exports=e.isStandardBrowserEnv()?{write:function(n,t,o,r,i,u){var s=[];s.push(n+"="+encodeURIComponent(t)),e.isNumber(o)&&s.push("expires="+new Date(o).toGMTString()),e.isString(r)&&s.push("path="+r),e.isString(i)&&s.push("domain="+i),!0===u&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};
},{"./../utils":"zIVT"}],"LYEs":[function(require,module,exports) {
"use strict";var e=require("./../utils"),r=require("./../core/settle"),s=require("./../helpers/buildURL"),t=require("./../helpers/parseHeaders"),o=require("./../helpers/isURLSameOrigin"),n=require("../core/createError");module.exports=function(a){return new Promise(function(i,u){var l=a.data,p=a.headers;e.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(a.auth){var c=a.auth.username||"",f=a.auth.password||"";p.Authorization="Basic "+btoa(c+":"+f)}if(d.open(a.method.toUpperCase(),s(a.url,a.params,a.paramsSerializer),!0),d.timeout=a.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var e="getAllResponseHeaders"in d?t(d.getAllResponseHeaders()):null,s={data:a.responseType&&"text"!==a.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:e,config:a,request:d};r(i,u,s),d=null}},d.onerror=function(){u(n("Network Error",a,null,d)),d=null},d.ontimeout=function(){u(n("timeout of "+a.timeout+"ms exceeded",a,"ECONNABORTED",d)),d=null},e.isStandardBrowserEnv()){var h=require("./../helpers/cookies"),m=(a.withCredentials||o(a.url))&&a.xsrfCookieName?h.read(a.xsrfCookieName):void 0;m&&(p[a.xsrfHeaderName]=m)}if("setRequestHeader"in d&&e.forEach(p,function(e,r){void 0===l&&"content-type"===r.toLowerCase()?delete p[r]:d.setRequestHeader(r,e)}),a.withCredentials&&(d.withCredentials=!0),a.responseType)try{d.responseType=a.responseType}catch(y){if("json"!==a.responseType)throw y}"function"==typeof a.onDownloadProgress&&d.addEventListener("progress",a.onDownloadProgress),"function"==typeof a.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",a.onUploadProgress),a.cancelToken&&a.cancelToken.promise.then(function(e){d&&(d.abort(),u(e),d=null)}),void 0===l&&(l=null),d.send(l)})};
},{"./../utils":"zIVT","./../core/settle":"wZW9","./../helpers/buildURL":"RS1v","./../helpers/parseHeaders":"T8HP","./../helpers/isURLSameOrigin":"DmB6","../core/createError":"lGrg","./../helpers/cookies":"OhlP"}],"rH1J":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"T2kP":[function(require,module,exports) {
var process = require("process");
var e=require("process"),t=require("./utils"),r=require("./helpers/normalizeHeaderName"),n={"Content-Type":"application/x-www-form-urlencoded"};function a(e,r){!t.isUndefined(e)&&t.isUndefined(e["Content-Type"])&&(e["Content-Type"]=r)}function i(){var t;return"undefined"!=typeof XMLHttpRequest?t=require("./adapters/xhr"):void 0!==e&&(t=require("./adapters/http")),t}var o={adapter:i(),transformRequest:[function(e,n){return r(n,"Content-Type"),t.isFormData(e)||t.isArrayBuffer(e)||t.isBuffer(e)||t.isStream(e)||t.isFile(e)||t.isBlob(e)?e:t.isArrayBufferView(e)?e.buffer:t.isURLSearchParams(e)?(a(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):t.isObject(e)?(a(n,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};t.forEach(["delete","get","head"],function(e){o.headers[e]={}}),t.forEach(["post","put","patch"],function(e){o.headers[e]=t.merge(n)}),module.exports=o;
},{"./utils":"zIVT","./helpers/normalizeHeaderName":"TOXd","./adapters/xhr":"LYEs","./adapters/http":"LYEs","process":"rH1J"}],"GGkJ":[function(require,module,exports) {
"use strict";var t=require("./../utils");function e(){this.handlers=[]}e.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},e.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},e.prototype.forEach=function(e){t.forEach(this.handlers,function(t){null!==t&&e(t)})},module.exports=e;
},{"./../utils":"zIVT"}],"i7gz":[function(require,module,exports) {
"use strict";var r=require("./../utils");module.exports=function(t,u,e){return r.forEach(e,function(r){t=r(t,u)}),t};
},{"./../utils":"zIVT"}],"C9l1":[function(require,module,exports) {
"use strict";module.exports=function(t){return!(!t||!t.__CANCEL__)};
},{}],"ExB0":[function(require,module,exports) {
"use strict";module.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)};
},{}],"BTlr":[function(require,module,exports) {
"use strict";module.exports=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e};
},{}],"U2VI":[function(require,module,exports) {
"use strict";var e=require("./../utils"),r=require("./transformData"),a=require("../cancel/isCancel"),s=require("../defaults"),t=require("./../helpers/isAbsoluteURL"),n=require("./../helpers/combineURLs");function o(e){e.cancelToken&&e.cancelToken.throwIfRequested()}module.exports=function(d){return o(d),d.baseURL&&!t(d.url)&&(d.url=n(d.baseURL,d.url)),d.headers=d.headers||{},d.data=r(d.data,d.headers,d.transformRequest),d.headers=e.merge(d.headers.common||{},d.headers[d.method]||{},d.headers||{}),e.forEach(["delete","get","head","post","put","patch","common"],function(e){delete d.headers[e]}),(d.adapter||s.adapter)(d).then(function(e){return o(d),e.data=r(e.data,e.headers,d.transformResponse),e},function(e){return a(e)||(o(d),e&&e.response&&(e.response.data=r(e.response.data,e.response.headers,d.transformResponse))),Promise.reject(e)})};
},{"./../utils":"zIVT","./transformData":"i7gz","../cancel/isCancel":"C9l1","../defaults":"T2kP","./../helpers/isAbsoluteURL":"ExB0","./../helpers/combineURLs":"BTlr"}],"RB6n":[function(require,module,exports) {
"use strict";var e=require("./../defaults"),t=require("./../utils"),r=require("./InterceptorManager"),o=require("./dispatchRequest");function s(e){this.defaults=e,this.interceptors={request:new r,response:new r}}s.prototype.request=function(r){"string"==typeof r&&(r=t.merge({url:arguments[0]},arguments[1])),(r=t.merge(e,{method:"get"},this.defaults,r)).method=r.method.toLowerCase();var s=[o,void 0],u=Promise.resolve(r);for(this.interceptors.request.forEach(function(e){s.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){s.push(e.fulfilled,e.rejected)});s.length;)u=u.then(s.shift(),s.shift());return u},t.forEach(["delete","get","head","options"],function(e){s.prototype[e]=function(r,o){return this.request(t.merge(o||{},{method:e,url:r}))}}),t.forEach(["post","put","patch"],function(e){s.prototype[e]=function(r,o,s){return this.request(t.merge(s||{},{method:e,url:r,data:o}))}}),module.exports=s;
},{"./../defaults":"T2kP","./../utils":"zIVT","./InterceptorManager":"GGkJ","./dispatchRequest":"U2VI"}],"RlDD":[function(require,module,exports) {
"use strict";function t(t){this.message=t}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,module.exports=t;
},{}],"VWBb":[function(require,module,exports) {
"use strict";var e=require("./Cancel");function n(n){if("function"!=typeof n)throw new TypeError("executor must be a function.");var o;this.promise=new Promise(function(e){o=e});var r=this;n(function(n){r.reason||(r.reason=new e(n),o(r.reason))})}n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e;return{token:new n(function(n){e=n}),cancel:e}},module.exports=n;
},{"./Cancel":"RlDD"}],"Kbjq":[function(require,module,exports) {
"use strict";module.exports=function(n){return function(t){return n.apply(null,t)}};
},{}],"HXpE":[function(require,module,exports) {
"use strict";var e=require("./utils"),r=require("./helpers/bind"),n=require("./core/Axios"),t=require("./defaults");function u(t){var u=new n(t),l=r(n.prototype.request,u);return e.extend(l,n.prototype,u),e.extend(l,u),l}var l=u(t);l.Axios=n,l.create=function(r){return u(e.merge(t,r))},l.Cancel=require("./cancel/Cancel"),l.CancelToken=require("./cancel/CancelToken"),l.isCancel=require("./cancel/isCancel"),l.all=function(e){return Promise.all(e)},l.spread=require("./helpers/spread"),module.exports=l,module.exports.default=l;
},{"./utils":"zIVT","./helpers/bind":"nb4k","./core/Axios":"RB6n","./defaults":"T2kP","./cancel/Cancel":"RlDD","./cancel/CancelToken":"VWBb","./cancel/isCancel":"C9l1","./helpers/spread":"Kbjq"}],"uj17":[function(require,module,exports) {
module.exports=require("./lib/axios");
},{"./lib/axios":"HXpE"}],"odIX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.showAlert=exports.hideAlert=void 0;var e=function(){var e=document.querySelector(".alert");e&&e.parentElement.removeChild(e)};exports.hideAlert=e;var t=function(t,r){e();var o='<div class="alert alert--'.concat(t,'">').concat(r,"</div>");document.querySelector("body").insertAdjacentHTML("afterbegin",o),window.setTimeout(e,5e3)};exports.showAlert=t;
},{}],"AxoZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.logout=exports.auth=void 0;var e=t(require("axios")),r=require("./alerts");function t(e){return e&&e.__esModule?e:{default:e}}function n(e,r,t,n,o,s,a){try{var u=e[s](a),i=u.value}catch(c){return void t(c)}u.done?r(i):Promise.resolve(i).then(n,o)}function o(e){return function(){var r=this,t=arguments;return new Promise(function(o,s){var a=e.apply(r,t);function u(e){n(a,o,s,u,i,"next",e)}function i(e){n(a,o,s,u,i,"throw",e)}u(void 0)})}}var s=function(){var t=o(regeneratorRuntime.mark(function t(n,o){var s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,e.default)({method:"POST",url:"/api/v1/users/".concat("login"===n?"login":"signup"),data:o});case 3:"success"===t.sent.data.status&&((0,r.showAlert)("success","Logged in successfully!"),window.setTimeout(function(){location.assign("/")},1500)),t.next=12;break;case 7:t.prev=7,t.t0=t.catch(0),s=t.t0.response.data.message,t.t0.response.data.message.includes("User validation failed: passwordConfirm")&&(s="Your passwords does not match!"),(0,r.showAlert)("error",s);case 12:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e,r){return t.apply(this,arguments)}}();exports.auth=s;var a=function(){var t=o(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,e.default)({method:"GET",url:"/api/v1/users/logout"});case 3:(t.sent.data.status="success")&&location.reload(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),(0,r.showAlert)("error","Error logging out! Try again.");case 10:case"end":return t.stop()}},t,null,[[0,7]])}));return function(){return t.apply(this,arguments)}}();exports.logout=a;
},{"axios":"uj17","./alerts":"odIX"}],"FxPS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.updateSettings=void 0;var e=r(require("axios")),t=require("./alerts");function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t,r,n,s,a,u){try{var o=e[a](u),c=o.value}catch(i){return void r(i)}o.done?t(c):Promise.resolve(c).then(n,s)}function s(e){return function(){var t=this,r=arguments;return new Promise(function(s,a){var u=e.apply(t,r);function o(e){n(u,s,a,o,c,"next",e)}function c(e){n(u,s,a,o,c,"throw",e)}o(void 0)})}}var a=function(){var r=s(regeneratorRuntime.mark(function r(n,s){var a;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a="password"===s?"/api/v1/users/updateMyPassword":"/api/v1/users/updateMe",r.next=4,(0,e.default)({method:"PATCH",url:a,data:n});case 4:"success"===r.sent.data.status&&(0,t.showAlert)("success","".concat(s.toUpperCase()," updated successfully!")),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),(0,t.showAlert)("error",r.t0.response.data.message);case 11:case"end":return r.stop()}},r,null,[[0,8]])}));return function(e,t){return r.apply(this,arguments)}}();exports.updateSettings=a;
},{"axios":"uj17","./alerts":"odIX"}],"Uj2q":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.bookTour=void 0;var e=t(require("axios")),r=require("./alerts");function t(e){return e&&e.__esModule?e:{default:e}}function n(e,r,t,n,o,u,s){try{var i=e[u](s),c=i.value}catch(a){return void t(a)}i.done?r(c):Promise.resolve(c).then(n,o)}function o(e){return function(){var r=this,t=arguments;return new Promise(function(o,u){var s=e.apply(r,t);function i(e){n(s,o,u,i,c,"next",e)}function c(e){n(s,o,u,i,c,"throw",e)}i(void 0)})}}var u=Stripe("pk_test_51Iw5YUSCycbhEIix2Dycsst4GDMcrfShWRYXhISxlt5Y4vpQdmmfGOJB7R1VxhlnIWXBHxNbchzw2M4rPp4CWg8X00ewLYIx44"),s=function(){var t=o(regeneratorRuntime.mark(function t(n){var o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,e.default)({method:"GET",url:"/api/v1/bookings/checkout-session/".concat(n)});case 3:return o=t.sent,t.next=6,u.redirectToCheckout({sessionId:o.data.session.id});case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),(0,r.showAlert)("error","Something went wrong");case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}();exports.bookTour=s;
},{"axios":"uj17","./alerts":"odIX"}],"Sd95":[function(require,module,exports) {
module.exports=function(n){return function(t,u,c){n(t,u,c).catch(function(n){return c(n)})}};
},{}],"JwLm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.deleteReview=exports.submitReview=exports.starHandler=void 0;var e=s(require("axios")),r=s(require("../../utils/catchAsync")),t=require("./alerts");function s(e){return e&&e.__esModule?e:{default:e}}function n(e,r,t,s,n,a,i){try{var u=e[a](i),c=u.value}catch(o){return void t(o)}u.done?r(c):Promise.resolve(c).then(s,n)}function a(e){return function(){var r=this,t=arguments;return new Promise(function(s,a){var i=e.apply(r,t);function u(e){n(i,s,a,u,c,"next",e)}function c(e){n(i,s,a,u,c,"throw",e)}u(void 0)})}}var i=function(){var e=document.querySelectorAll(".reviews__star--rating");return e.forEach(function(r){r.addEventListener("click",function(){var t=r.dataset.id;e.forEach(function(e){e.classList.add("reviews__star--inactive"),e.classList.remove("reviews__star--active"),e.dataset.id<=t&&(e.classList.remove("reviews__star--inactive"),e.classList.add("reviews__star--active"))}),document.querySelector(".review__ratings").dataset.rating=t})})};exports.starHandler=i;var u=function(){var r=a(regeneratorRuntime.mark(function r(s){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,!(s.rating<=0)){r.next=3;break}return r.abrupt("return",(0,t.showAlert)("error","Please provide a rating"));case 3:return r.next=5,(0,e.default)({method:"POST",url:"/api/v1/reviews",data:s});case 5:"success"===r.sent.data.status&&((0,t.showAlert)("success","Review submitted successfully!"),setTimeout(function(){return location.reload()},1e3)),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),(0,t.showAlert)("error",r.t0.response.data.message);case 12:case"end":return r.stop()}},r,null,[[0,9]])}));return function(e){return r.apply(this,arguments)}}();exports.submitReview=u;var c=function(){var r=a(regeneratorRuntime.mark(function r(s){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,e.default)({method:"DELETE",url:"/api/v1/reviews/".concat(s)});case 3:""===r.sent.data&&(0,t.showAlert)("success","Review deleted successfully!"),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),(0,t.showAlert)("error",r.t0.response.data.message);case 10:case"end":return r.stop()}},r,null,[[0,7]])}));return function(e){return r.apply(this,arguments)}}();exports.deleteReview=c;
},{"axios":"uj17","../../utils/catchAsync":"Sd95","./alerts":"odIX"}],"Focm":[function(require,module,exports) {
"use strict";require("regenerator-runtime/runtime");var e=require("./mapbox.js"),t=require("./auth.js"),r=require("./updateSettings.js"),n=require("./stripe.js"),a=require("./review");function o(e,t,r,n,a,o,u){try{var s=e[o](u),c=s.value}catch(i){return void r(i)}s.done?t(c):Promise.resolve(c).then(n,a)}function u(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var u=e.apply(t,r);function s(e){o(u,n,a,s,c,"next",e)}function c(e){o(u,n,a,s,c,"throw",e)}s(void 0)})}}var s=document.getElementById("map"),c=document.querySelector(".form--login"),i=document.querySelector(".form--signup"),d=document.querySelector(".nav__el--logout"),m=document.querySelector(".form-user-data"),l=document.querySelector(".form-user-password"),v=document.querySelector("#book-tour"),p=document.querySelectorAll(".reviews__star--rating"),f=document.querySelector(".form--review"),w=document.querySelectorAll(".delete-icon");if(s){var g=JSON.parse(s.dataset.locations);(0,e.displayMap)(g)}c&&c.addEventListener("submit",function(e){e.preventDefault();var r=document.getElementById("email").value,n=document.getElementById("password").value;(0,t.auth)("login",{email:r,password:n})}),i&&i.addEventListener("submit",function(e){e.preventDefault();var r=document.querySelector("#name").value,n=document.querySelector("#email").value,a=document.querySelector("#password").value,o=document.querySelector("#password-confirm").value;(0,t.auth)("signup",{name:r,email:n,password:a,passwordConfirm:o})}),d&&d.addEventListener("click",t.logout),m&&m.addEventListener("submit",function(e){e.preventDefault();var t=new FormData;t.append("name",document.getElementById("name").value),t.append("email",document.getElementById("email").value),t.append("photo",document.getElementById("photo").files[0]),(0,r.updateSettings)(t,"data")}),l&&l.addEventListener("submit",function(){var e=u(regeneratorRuntime.mark(function e(t){var n,a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),document.querySelector(".btn--save-password").textContent="Updating...",n=document.getElementById("password-current").value,a=document.getElementById("password").value,o=document.getElementById("password-confirm").value,e.next=7,(0,r.updateSettings)({passwordCurrent:n,password:a,passwordConfirm:o},"password");case 7:document.querySelector(".btn--save-password").textContent="Save password",document.getElementById("password-current").value="",document.getElementById("password").value="",document.getElementById("password-confirm").value="";case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),v&&v.addEventListener("click",function(){var e=u(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return v.textContent="Processing...",r=t.target.dataset.tourId,e.next=4,(0,n.bookTour)(r);case 4:v.textContent="Book Now";case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),p&&(0,a.starHandler)(),f&&f.addEventListener("submit",function(){var e=u(regeneratorRuntime.mark(function e(t){var r,n,o,u,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=document.querySelector(".review__ratings").dataset,n=r.tour,o=r.user,u=r.rating,s=document.querySelector("#review-text").value,e.next=5,(0,a.submitReview)({tour:n,user:o,rating:u,review:s});case 5:document.querySelector(".review").remove();case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),w&&w.forEach(function(e){e.addEventListener("click",function(){var e=u(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.target.dataset.reviewId,t.target.closest(".reviews-card").querySelector(".deleting").classList.add("active"),e.next=4,(0,a.deleteReview)(r);case 4:t.target.closest(".reviews-card").remove();case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())});
},{"regenerator-runtime/runtime":"VuXv","./mapbox.js":"g63L","./auth.js":"AxoZ","./updateSettings.js":"FxPS","./stripe.js":"Uj2q","./review":"JwLm"}]},{},["Focm"], null)
//# sourceMappingURL=/bundle.js.map