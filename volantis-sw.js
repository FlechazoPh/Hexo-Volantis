"use strict";function _createForOfIteratorHelper(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=_unsupportedIterableToArray(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,i=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){i=!0,a=e},f:function(){try{c||null==t["return"]||t["return"]()}finally{if(i)throw a}}}}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _toArray(e){return _arrayWithHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,r):void 0}}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _regeneratorRuntime(){_regeneratorRuntime=function(){return e};var e={},r=Object.prototype,t=r.hasOwnProperty,n=Object.defineProperty||function(e,r,t){e[r]=t.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function u(e,r,t){return Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[r]}try{u({},"")}catch(R){u=function(e,r,t){return e[r]=t}}function s(e,r,t,o){var a=r&&r.prototype instanceof p?r:p,c=Object.create(a.prototype),i=new P(o||[]);return n(c,"_invoke",{value:x(e,t,i)}),c}function l(e,r,t){try{return{type:"normal",arg:e.call(r,t)}}catch(R){return{type:"throw",arg:R}}}e.wrap=s;var f={};function p(){}function h(){}function g(){}var d={};u(d,a,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(j([])));y&&y!==r&&t.call(y,a)&&(d=y);var v=g.prototype=p.prototype=Object.create(d);function b(e){["next","throw","return"].forEach((function(r){u(e,r,(function(e){return this._invoke(r,e)}))}))}function w(e,r){function o(n,a,c,i){var u=l(e[n],e,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==_typeof(f)&&t.call(f,"__await")?r.resolve(f.__await).then((function(e){o("next",e,c,i)}),(function(e){o("throw",e,c,i)})):r.resolve(f).then((function(e){s.value=e,c(s)}),(function(e){return o("throw",e,c,i)}))}i(u.arg)}var a;n(this,"_invoke",{value:function(e,t){function n(){return new r((function(r,n){o(e,t,r,n)}))}return a=a?a.then(n,n):n()}})}function x(e,r,t){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return A()}for(t.method=o,t.arg=a;;){var c=t.delegate;if(c){var i=_(c,t);if(i){if(i===f)continue;return i}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===n)throw n="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);n="executing";var u=l(e,r,t);if("normal"===u.type){if(n=t.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:t.done}}"throw"===u.type&&(n="completed",t.method="throw",t.arg=u.arg)}}}function _(e,r){var t=e.iterator[r.method];if(undefined===t){if(r.delegate=null,"throw"===r.method){if(e.iterator["return"]&&(r.method="return",r.arg=undefined,_(e,r),"throw"===r.method))return f;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=l(t,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,f;var o=n.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=undefined),r.delegate=null,f):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function k(e){var r={tryLoc:e[0]};1 in e&&(r.catchLoc=e[1]),2 in e&&(r.finallyLoc=e[2],r.afterLoc=e[3]),this.tryEntries.push(r)}function C(e){var r=e.completion||{};r.type="normal",delete r.arg,e.completion=r}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function j(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function r(){for(;++n<e.length;)if(t.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=undefined,r.done=!0,r};return o.next=o}}return{next:A}}function A(){return{value:undefined,done:!0}}return h.prototype=g,n(v,"constructor",{value:g,configurable:!0}),n(g,"constructor",{value:h,configurable:!0}),h.displayName=u(g,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var r="function"==typeof e&&e.constructor;return!!r&&(r===h||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},b(w.prototype),u(w.prototype,c,(function(){return this})),e.AsyncIterator=w,e.async=function(r,t,n,o,a){void 0===a&&(a=Promise);var c=new w(s(r,t,n,o),a);return e.isGeneratorFunction(t)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},b(v),u(v,i,"Generator"),u(v,a,(function(){return this})),u(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var r=Object(e),t=[];for(var n in r)t.push(n);return t.reverse(),function o(){for(;t.length;){var e=t.pop();if(e in r)return o.value=e,o.done=!1,o}return o.done=!0,o}},e.values=j,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&t.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=undefined)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(t,n){return c.type="throw",c.arg=e,r.next=t,n&&(r.method="next",r.arg=undefined),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var i=t.call(a,"catchLoc"),u=t.call(a,"finallyLoc");if(i&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&t.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=e,c.arg=r,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(c)},complete:function(e,r){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&r&&(this.next=r),f},finish:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),C(t),f}},"catch":function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.tryLoc===e){var n=t.completion;if("throw"===n.type){var o=n.arg;C(t)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,t){return this.delegate={iterator:j(e),resultName:r,nextLoc:t},"next"===this.method&&(this.arg=undefined),f}},e}function asyncGeneratorStep(e,r,t,n,o,a,c){try{var i=e[a](c),u=i.value}catch(s){return void t(s)}i.done?r(u):Promise.resolve(u).then(n,o)}function _asyncToGenerator(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function c(e){asyncGeneratorStep(a,n,o,c,i,"next",e)}function i(e){asyncGeneratorStep(a,n,o,c,i,"throw",e)}c(undefined)}))}}var prefix="volantis-community",cacheSuffixVersion="00000018-0.7711829964164428",CACHE_NAME=prefix+"-v"+cacheSuffixVersion,PreCachlist=["/css/style.css","/js/app.js","/js/search/hexo.js"],NPMMirror=!0,NPMPackage="@mhg/volantis-community",NPMPackageVersion="1.0.1664461180596",debug=!0,handleFetch=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(e){var t;return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t=e.request.url,!/nocache/.test(t)){r.next=5;break}return r.abrupt("return",NetworkOnly(e));case 5:if(!/@latest/.test(t)){r.next=9;break}return r.abrupt("return",CacheFirst(e));case 9:if(!/cdnjs\.cloudflare\.com/.test(t)){r.next=13;break}return r.abrupt("return",CacheAlways(e));case 13:if(!/music\.126\.net/.test(t)){r.next=17;break}return r.abrupt("return",CacheAlways(e));case 17:if(!/qqmusic\.qq\.com/.test(t)){r.next=21;break}return r.abrupt("return",CacheAlways(e));case 21:if(!/jsdelivr\.net/.test(t)){r.next=25;break}return r.abrupt("return",CacheAlways(e));case 25:if(!/npm\.elemecdn\.com/.test(t)){r.next=29;break}return r.abrupt("return",CacheAlways(e));case 29:if(!/unpkg\.com/.test(t)){r.next=33;break}return r.abrupt("return",CacheAlways(e));case 33:if(!/.*\.(?:png|jpg|jpeg|svg|gif|webp|ico|eot|ttf|woff|woff2|mp3)$/.test(t)){r.next=37;break}return r.abrupt("return",CacheAlways(e));case 37:if(!/.*\.(css|js)$/.test(t)){r.next=41;break}return r.abrupt("return",CacheAlways(e));case 41:return r.abrupt("return",CacheFirst(e));case 42:case"end":return r.stop()}}),r)})));return function(r){return e.apply(this,arguments)}}(),cdn={gh:{jsdelivr:"https://cdn.jsdelivr.net/gh",fastly:"https://fastly.jsdelivr.net/gh",gcore:"https://gcore.jsdelivr.net/gh",testingcf:"https://testingcf.jsdelivr.net/gh",test1:"https://test1.jsdelivr.net/gh"},combine:{jsdelivr:"https://cdn.jsdelivr.net/combine",fastly:"https://fastly.jsdelivr.net/combine",gcore:"https://gcore.jsdelivr.net/combine",testingcf:"https://testingcf.jsdelivr.net/combine",test1:"https://test1.jsdelivr.net/combine"},npm:{jsdelivr:"https://cdn.jsdelivr.net/npm",fastly:"https://fastly.jsdelivr.net/npm",gcore:"https://gcore.jsdelivr.net/npm",testingcf:"https://testingcf.jsdelivr.net/npm",test1:"https://test1.jsdelivr.net/npm",unpkg:"https://unpkg.com",eleme:"https://npm.elemecdn.com"},cdnjs:{cdnjs:"https://cdnjs.cloudflare.com/ajax/libs",baomitu:"https://lib.baomitu.com",bootcdn:"https://cdn.bootcdn.net/ajax/libs",bytedance:"https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M",sustech:"https://mirrors.sustech.edu.cn/cdnjs/ajax/libs"}},cdn_match_list=[];for(var type in cdn)for(var key in cdn[type])cdn_match_list.push({type,key:cdn[type][key]});var _console=console,color={black:"#000000",red:"#FF0000",green:"#008000",yellow:"#FFFF00",blue:"#0000FF",magenta:"#FF00FF",cyan:"#00FFFF",white:"#FFFFFF"},add=function(){for(var e=[[]],r=0;r<arguments.length;r++){var t=r<0||arguments.length<=r?undefined:arguments[r],n=_toArray(t),o=n[0],a=n.slice(1);e[0]+=o,e=e.concat(a)}return e},createlog=function(e){return function(){for(var r="error"==e?_console[e]:_console.log,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];r.apply(void 0,n)}},creategroup=function(e){return function(){for(var e=_console.groupCollapsed,r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];e.apply(void 0,t)}},colorUtils={bold:function(e){if("string"==typeof e||"number"==typeof e)return"".concat(e,";font-weight: bold;");for(var r=1;r<e.length;r++)e[r]+=";font-weight: bold;";return e}},colorHash={log:"black",wait:"cyan",error:"red",warn:"yellow",ready:"green",info:"blue",event:"magenta"},createChalk=function(e){return function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];if("object"!==_typeof(t[0])){var o=t;"string"!=typeof t&&"number"!=typeof t||(o=colorUtils[colorHash[e]](t)),createlog(e).apply(void 0,_toConsumableArray(add(colorUtils.bold(colorUtils[colorHash[e]]("[".concat(firstToUpperCase(e),"] "))),o)))}else createlog(e).apply(void 0,_toConsumableArray(add.apply(void 0,[colorUtils.bold(colorUtils[colorHash[e]]("[".concat(firstToUpperCase(e),"] ")))].concat(t))))}},createChalkBg=function(e){return function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];if("object"!==_typeof(t[0])){var o=t;"string"!=typeof t&&"number"!=typeof t||(o=colorUtils[colorHash[e]](t)),createlog(e).apply(void 0,_toConsumableArray(add(colorUtils.bold(colorUtils["bg".concat(firstToUpperCase(colorHash[e]))]("[".concat(firstToUpperCase(e),"] "))),o)))}else createlog(e).apply(void 0,_toConsumableArray(add.apply(void 0,[colorUtils.bold(colorUtils["bg".concat(firstToUpperCase(colorHash[e]))]("[".concat(firstToUpperCase(e),"] ")))].concat(t))))}},createChalkGroup=function(e){return function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];if("object"!==_typeof(t[0])){var o=t;"string"!=typeof t&&"number"!=typeof t||(o=colorUtils[colorHash[e]](t)),creategroup(e).apply(void 0,_toConsumableArray(add(colorUtils.bold(colorUtils[colorHash[e]]("[".concat(firstToUpperCase(e),"] "))),o)))}else creategroup(e).apply(void 0,_toConsumableArray(add.apply(void 0,[colorUtils.bold(colorUtils[colorHash[e]]("[".concat(firstToUpperCase(e),"] ")))].concat(t))))}},chalk={group:{end:_console.groupEnd},bg:{}};Object.keys(colorHash).forEach((function(e){chalk[e]=createChalk(e),chalk.group[e]=createChalkGroup(e),chalk.bg[e]=createChalkBg(e)}));var firstToUpperCase=function(e){return e.toLowerCase().replace(/( |^)[a-z]/g,(function(e){return e.toUpperCase()}))};Object.keys(color).forEach((function(e){colorUtils[e]=function(r){if("string"==typeof r||"number"==typeof r)return["%c".concat(r),"color:".concat(color[e])];for(var t=1;t<r.length;t++)r[t]+=";color:".concat(color[e]);return r},colorUtils["bg".concat(firstToUpperCase(e))]=function(r){if("string"==typeof r||"number"==typeof r)return["%c".concat(r),"padding: 2px 4px; border-radius: 3px; color: ".concat("white"===e?"#000":"#fff","; font-weight: bold; background:").concat(color[e],";")];for(var t=1;t<r.length;t++)r[t]+=";padding: 2px 4px; border-radius: 3px; font-weight: bold; background:".concat(color[e],";");return r}})),self.logger=_objectSpread(_objectSpread({add},chalk),colorUtils),debug||(logger={log:function(){},wait:function(){},error:function(){},warn:function(){},ready:function(){},info:function(){},event:function(){},group:{log:function(){},wait:function(){},error:function(){},warn:function(){},ready:function(){},info:function(){},event:function(){},end:function(){}},bg:{log:function(){},wait:function(){},error:function(){},warn:function(){},ready:function(){},info:function(){},event:function(){}}},console.log=function(){});var generate_uuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var r=16*Math.random()|0;return("x"==e?r:3&r|8).toString(16)}))};self.db={read:function(e,r){return r||(r={type:"text"}),new Promise((function(r,t){caches.open(CACHE_NAME).then((function(t){t.match(new Request("https://LOCALCACHE/".concat(encodeURIComponent(e)))).then((function(e){e||r(null),e.text().then((function(e){return r(e)}))}))["catch"]((function(){r(null)}))}))}))},write:function(e,r){return new Promise((function(t,n){caches.open(CACHE_NAME).then((function(n){n.put(new Request("https://LOCALCACHE/".concat(encodeURIComponent(e))),new Response(r)),t()}))["catch"]((function(){n()}))}))}};var compareVersion=function(e,r){for(var t=e.split("."),n=r.split("."),o=Math.max(t.length,n.length);t.length<o;)t.push("0");for(;n.length<o;)n.push("0");for(var a=0;a<o;a++){var c=parseInt(t[a]),i=parseInt(n[a]);if(c>i)return e;if(c<i)return r}return e},mirrors=["https://registry.npmjs.org/".concat(NPMPackage,"/latest"),"https://registry.npmmirror.com/".concat(NPMPackage,"/latest"),"https://mirrors.cloud.tencent.com/npm/".concat(NPMPackage,"/latest")],getLocalVersion=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(){return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,db.read("blog_version");case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0=NPMPackageVersion;case 5:NPMPackageVersion=e.t0,logger.bg.info("Local Version: ".concat(NPMPackage,"@").concat(NPMPackageVersion));case 7:case"end":return e.stop()}}),r)})));return function(){return e.apply(this,arguments)}}(),mirror_time=0,setNewestVersion=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(){var e;return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(NPMMirror){r.next=2;break}return r.abrupt("return");case 2:return e=null,e=mirror_time%(mirrors.length+1)?fetch(mirrors[mirror_time%(mirrors.length+1)-1]):FetchEngine(mirrors),mirror_time++,r.abrupt("return",e.then((function(e){return e.json()})).then(function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(e){return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.version){r.next=2;break}throw"No Version Found!";case 2:return r.t0=compareVersion,r.t1=e.version,r.next=6,db.read("blog_version");case 6:if(r.t2=r.sent,r.t2){r.next=9;break}r.t2=NPMPackageVersion;case 9:return r.t3=r.t2,NPMPackageVersion=(0,r.t0)(r.t1,r.t3),logger.bg.ready("".concat(NPMPackage,"@").concat(NPMPackageVersion)),r.next=14,db.write("blog_version",NPMPackageVersion);case 14:case"end":return r.stop()}}),r)})));return function(r){return e.apply(this,arguments)}}())["catch"]((function(e){logger.error("[Set Newest Version] "+(e.stack||e))})));case 6:case"end":return r.stop()}}),r)})));return function(){return e.apply(this,arguments)}}();setInterval(_asyncToGenerator(_regeneratorRuntime().mark((function e(){return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,setNewestVersion();case 2:case"end":return e.stop()}}),e)}))),6e4),setTimeout(_asyncToGenerator(_regeneratorRuntime().mark((function r(){return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,setNewestVersion();case 2:case"end":return e.stop()}}),r)}))),5e3);var installFunction=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(){return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,getLocalVersion();case 2:return e.abrupt("return",caches.open(CACHE_NAME+"-precache").then(function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(e){var t;return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,db.read("uuid");case 2:if(r.sent){r.next=5;break}return r.next=5,db.write("uuid",generate_uuid());case 5:PreCachlist.length&&(logger.group.event("Precaching ".concat(PreCachlist.length," files.")),t=0,PreCachlist.forEach((function(r){e.match(new Request(r)).then((function(n){n?logger.ready("Precaching ".concat(r)):(logger.wait("Precaching ".concat(r)),e.add(new Request(r))),++t===PreCachlist.length&&(logger.ready("Precached ".concat(PreCachlist.length," files.")),logger.group.end())}))})));case 6:case"end":return r.stop()}}),r)})));return function(r){return e.apply(this,arguments)}}())["catch"]((function(e){logger.error("[install] "+(e.stack||e))})));case 3:case"end":return e.stop()}}),r)})));return function(){return e.apply(this,arguments)}}();self.addEventListener("install",function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(e){return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:logger.bg.event("service worker install event listening");try{self.skipWaiting(),e.waitUntil(installFunction()),logger.bg.ready("service worker install sucess!")}catch(t){logger.error("[install] "+(t.stack||t))}case 2:case"end":return r.stop()}}),r)})));return function(r){return e.apply(this,arguments)}}()),self.addEventListener("activate",function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(e){return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return logger.bg.event("service worker activate event listening"),r.prev=1,e.waitUntil(caches.keys().then((function(e){return Promise.all(e.map((function(e){e.includes(cacheSuffixVersion)||(caches["delete"](e),logger.bg.ready("Deleted Outdated Cache: "+e))})))}))["catch"]((function(e){logger.error("[activate] "+(e.stack||e))}))),r.next=5,self.clients.claim();case 5:logger.bg.ready("service worker activate sucess!"),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](1),logger.error("[activate] "+(r.t0.stack||r.t0));case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}()),self.addEventListener("fetch",function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(e){return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.respondWith(handleFetch(e)["catch"]((function(r){logger.error("[fetch] "+e.request.url+"\n[error] "+(r.stack||r))})));case 1:case"end":return r.stop()}}),r)})));return function(r){return e.apply(this,arguments)}}());var NetworkOnly=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(e){return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return logger.group.info("NetworkOnly: "+new URL(e.request.url).pathname),logger.wait("service worker fetch: "+e.request.url),logger.group.end(),r.abrupt("return",fetch(e.request));case 4:case"end":return r.stop()}}),r)})));return function(r){return e.apply(this,arguments)}}(),CacheFirst=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(e){return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",caches.match(e.request).then((function(r){return logger.group.info("CacheFirst: "+new URL(e.request.url).pathname),logger.wait("service worker fetch: "+e.request.url),r?(logger.group.ready("Cache Hit"),console.log(r),logger.group.end(),logger.group.end(),e.waitUntil(CacheRuntime(e.request)),r):(logger.warn("Cache Miss"),logger.group.end(),CacheRuntime(e.request))})));case 1:case"end":return r.stop()}}),r)})));return function(r){return e.apply(this,arguments)}}(),CacheAlways=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(e){return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",caches.match(e.request).then((function(r){return logger.group.info("CacheAlways: "+new URL(e.request.url).pathname),logger.wait("service worker fetch: "+e.request.url),r?(logger.group.ready("Cache Hit"),console.log(r),logger.group.end(),logger.group.end(),r):(logger.warn("Cache Miss"),logger.group.end(),CacheRuntime(e.request))})));case 1:case"end":return r.stop()}}),r)})));return function(r){return e.apply(this,arguments)}}(),matchCache=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(e){return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",caches.match(e.request).then((function(r){return logger.group.info("service worker fetch: "+e.request.url),r?(logger.group.ready("Cache Hit"),console.log(r),logger.group.end(),logger.group.end(),r):(logger.warn("Cache Miss"),logger.group.end(),CacheRuntime(e.request))})));case 1:case"end":return r.stop()}}),r)})));return function(r){return e.apply(this,arguments)}}();function CacheRuntime(e){return _CacheRuntime.apply(this,arguments)}function _CacheRuntime(){return(_CacheRuntime=_asyncToGenerator(_regeneratorRuntime().mark((function e(r){var t,n;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URL(r.url),e.next=3,matchCDN(r);case 3:if(n=e.sent){e.next=8;break}return e.next=7,fetch(r)["catch"]((function(){return null}));case 7:n=e.sent;case 8:if(logger.group.event("Cache Runtime ".concat(t.pathname)),logger.wait("Caching url: ".concat(r.url)),console.log(n),"GET"!==r.method||"https:"!=t.protocol){e.next=19;break}return e.next=14,caches.open(CACHE_NAME+"-runtime");case 14:e.sent.put(r,n.clone())["catch"]((function(e){logger.error("[Cache Runtime] "+(e.stack||e)),"QuotaExceededError"===e.name&&(caches["delete"](CACHE_NAME+"-runtime"),logger.ready("deleted cache"))})),logger.ready("Cached url: ".concat(r.url)),e.next=20;break;case 19:logger.warn("Not Cached url: ".concat(r.url));case 20:return logger.group.end(),e.abrupt("return",n);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var matchCDN=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function r(e){var t,n,o,a,c,i,u,s,l,f,p,h,g,d,m,y,v,b,w;return _regeneratorRuntime().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t=navigator,n=t.connection||t.mozConnection||t.webkitConnection||{},o=n.saveData,a=n.effectiveType,!o&&!/2g/.test(a)){r.next=5;break}return logger.warn("Slow Network: Transparent Proxy"),r.abrupt("return",fetch(e));case 5:if(c=[],i=new URL(e.url),u=i.pathname.split("/")[1],s="",NPMMirror&&new RegExp(location.origin).test(e.url)){for(l in logger.group.ready("Match NPM Mirror: "+e.url),cdn.npm)f=cdn.npm[l]+"/"+NPMPackage+"@"+NPMPackageVersion+e.url.replace(location.origin,""),f=fullPath(fullPath(f)),console.log(f),c.push(f);logger.group.end()}if(c.length){r.next=31;break}p=_createForOfIteratorHelper(cdn_match_list),r.prev=12,p.s();case 14:if((h=p.n()).done){r.next=22;break}if(g=h.value,!new RegExp(g.key).test(e.url)){r.next=20;break}return u=g.type,s=new RegExp(g.key).exec(e.url)[0],r.abrupt("break",22);case 20:r.next=14;break;case 22:r.next=27;break;case 24:r.prev=24,r.t0=r["catch"](12),p.e(r.t0);case 27:return r.prev=27,p.f(),r.finish(27);case 30:for(d in cdn)if(d===u){for(m in logger.group.ready("Match CDN ".concat(u,": ")+e.url),cdn[d])y=cdn[d][m]+e.url.replace(s,""),console.log(y),c.push(y);logger.group.end()}case 31:return(v=c.length?FetchEngine(c):fetch(e))&&NPMMirror&&new RegExp(location.origin).test(e.url)&&(b=fullPath(fullPath(e.url)).split(".").pop(),w=getContentType(b),v=v.then((function(e){return e.arrayBuffer()})).then((function(e){return new Response(e,{headers:{"Content-Type":w}})}))["catch"]((function(){return null}))),r.abrupt("return",v);case 34:case"end":return r.stop()}}),r,null,[[12,24,27,30]])})));return function(r){return e.apply(this,arguments)}}(),fullPath=function(e){if((e=e.split("?")[0].split("#")[0]).endsWith("/"))e+="index.html";else{var r=e.split("/");-1===r[r.length-1].indexOf(".")&&(e+=".html")}return e};function progress(e){return _progress.apply(this,arguments)}function _progress(){return(_progress=_asyncToGenerator(_regeneratorRuntime().mark((function e(r){return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Response,e.next=3,r.arrayBuffer();case 3:return e.t1=e.sent,e.t2={status:r.status,headers:r.headers},e.abrupt("return",new e.t0(e.t1,e.t2));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function createPromiseAny(){Promise.any=function(e){return new Promise((function(r,t){var n=(e=Array.isArray(e)?e:[]).length,o=[];if(0===n)return t(new AggregateError("All promises were rejected"));e.forEach((function(e){e instanceof Promise?e.then((function(e){return r(e)}),(function(e){n--,o.push(e),0===n&&t(new AggregateError(o))})):t(e)}))}))}}function fetchAny(e){var r=new AbortController;return e.map((function(e){return new Promise((function(t,n){fetch(e,{signal:r.signal}).then(progress).then((function(e){r.abort(),200!==e.status?n(null):t(e)}))["catch"]((function(){return n(null)}))}))}))}function fetchParallel(e){var r=new Event("abortOtherInstance"),t=new EventTarget;return e.map(function(){var e=_asyncToGenerator(_regeneratorRuntime().mark((function n(e){var o,a;return _regeneratorRuntime().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=new AbortController,a=!1,t.addEventListener(r.type,(function(){a||o.abort()})),n.abrupt("return",new Promise((function(n,c){fetch(e,{signal:o.signal}).then((function(e){a=!0,t.dispatchEvent(r),200!==e.status?c(null):n(e)}))["catch"]((function(){return c(null)}))})));case 4:case"end":return n.stop()}}),n)})));return function(r){return e.apply(this,arguments)}}())}var FetchEngine=function(e){return Promise.any||createPromiseAny(),Promise.any(fetchParallel(e)).then((function(e){return e}))["catch"]((function(r){return"AggregateError: All promises were rejected"==r?Promise.any(fetchAny(e)).then((function(e){return e}))["catch"]((function(){return null})):null}))},getContentType=function(e){switch(e){case"js":return"text/javascript";case"html":return"text/html";case"css":return"text/css";case"json":case"map":return"application/json";case"webp":return"image/webp";case"jpg":return"image/jpg";case"jpeg":return"image/jpeg";case"png":return"image/png";case"gif":return"image/gif";case"xml":case"xsl":return"text/xml";case"webmanifest":return"text/webmanifest";case"bcmap":case"wbmp":return"image/vnd.wap.wbmp";case"bmp":return"image/bmp";case"ico":return"image/vnd.microsoft.icon";case"tiff":case"tif":return"image/tiff";case"svg":case"svgz":return"image/svg+xml";case"woff":return"application/font-woff";case"woff2":return"application/font-woff2";case"ttf":return"application/font-ttf";case"otf":return"application/font-otf";case"eot":return"application/vnd.ms-fontobject";case"zip":return"application/zip";case"tar":return"application/x-tar";case"gz":return"application/gzip";case"bz2":return"application/x-bzip2";case"rar":return"application/x-rar-compressed";case"7z":return"application/x-7z-compressed";case"doc":return"application/msword";case"docx":return"application/vnd.openxmlformats-officedocument.wordprocessingml.document";case"xls":return"application/vnd.ms-excel";case"xlsx":return"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";case"ppt":return"application/vnd.ms-powerpoint";case"pptx":return"application/vnd.openxmlformats-officedocument.presentationml.presentation";case"pdf":return"application/pdf";case"txt":default:return"text/plain";case"rtf":return"application/rtf";case"mp3":return"audio/mpeg";case"wav":return"audio/x-wav";case"ogg":return"audio/ogg";case"mp4":return"video/mp4";case"m4v":return"video/x-m4v";case"mov":return"video/quicktime";case"avi":return"video/x-msvideo";case"wmv":return"video/x-ms-wmv";case"flv":return"video/x-flv";case"swf":return"application/x-shockwave-flash";case"mpg":case"mpeg":case"mpe":case"mpv":case"m2v":return"video/mpeg";case"m4a":return"audio/mp4";case"aac":return"audio/aac";case"m3u":return"audio/x-mpegurl";case"m3u8":return"application/vnd.apple.mpegurl";case"pls":return"audio/x-scpls";case"cue":return"application/x-cue";case"wma":return"audio/x-ms-wma";case"flac":return"audio/flac";case"aif":case"aiff":case"aifc":return"audio/x-aiff";case"au":case"snd":return"audio/basic";case"mid":case"midi":case"kar":return"audio/midi"}};
//# sourceMappingURL=maps/volantis-sw.js.map
