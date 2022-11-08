"use strict";function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function _regeneratorRuntime(){_regeneratorRuntime=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(j){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),c=new _(o||[]);return n(a,"_invoke",{value:w(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(j){return{type:"throw",arg:j}}}t.wrap=s;var f={};function h(){}function d(){}function p(){}var y={};u(y,i,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(O([])));v&&v!==e&&r.call(v,i)&&(y=v);var g=p.prototype=h.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(n,i,a,c){var u=l(t[n],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==_typeof(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function w(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return q()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=t.iterator[e.method];if(undefined===r){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=undefined,L(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=undefined),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=undefined,e.done=!0,e};return o.next=o}}return{next:q}}function q(){return{value:undefined,done:!0}}return d.prototype=p,n(g,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:d,configurable:!0}),d.displayName=u(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(x.prototype),u(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(g),u(g,c,"Generator"),u(g,i,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function o(){for(;r.length;){var t=r.pop();if(t in e)return o.value=t,o.done=!1,o}return o.done=!0,o}},t.values=O,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=undefined)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=undefined),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},"catch":function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=undefined),f}},t}function asyncGeneratorStep(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function _asyncToGenerator(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){asyncGeneratorStep(i,n,o,a,c,"next",t)}function c(t){asyncGeneratorStep(i,n,o,a,c,"throw",t)}a(undefined)}))}}var SearchService=function(){var t={queryText:null,data:null,template:'<div id="u-search">\n  <div class="modal">\n    <header class="modal-header" class="clearfix">\n      <form id="u-search-modal-form" class="u-search-form" name="uSearchModalForm">\n        <input type="text" id="u-search-modal-input" class="u-search-input" />\n        <button type="submit" id="u-search-modal-btn-submit" class="u-search-btn-submit">\n          <span class="fa-solid fa-search"></span>\n        </button>\n      </form>\n      <a id="u-search-btn-close" class="btn-close"> <span class="fa-solid fa-times"></span> </a>\n    </header>\n    <main class="modal-body">\n      <ul class="modal-results"></ul>\n    </main>\n  </div>\n  <div id="modal-overlay" class="modal-overlay"></div>\n</div>\n',init:function(){var e=document.createElement("div");e.innerHTML+=t.template,document.body.append(e),document.querySelectorAll(".u-search-form").forEach((function(e){e.addEventListener("submit",t.onSubmit,!1)})),document.querySelector("#u-search-modal-input").addEventListener("input",t.onSubmit),document.querySelector("#u-search-btn-close").addEventListener("click",t.close,!1),document.querySelector("#modal-overlay").addEventListener("click",t.close,!1)},onSubmit:function(e){e.preventDefault();var r=e.target.querySelector(".u-search-input");t.queryText=r?r.value:e.target.value,t.queryText&&t.search()}};return t.search=_asyncToGenerator(_regeneratorRuntime().mark((function e(){var r;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(document.querySelectorAll(".u-search-input").forEach((function(e){e.value=t.queryText})),document.querySelector("#u-search").style.display="block",t.data){e.next=6;break}return e.next=5,t.fetchData();case 5:t.data=e.sent;case 6:r="",r+=t.buildResultList(t.data.pages),""===(r+=t.buildResultList(t.data.posts))&&(r='<div id="resule-hits-empty"><i class="fa-solid fa-box-open"></i><p>'.concat(volantis.GLOBAL_CONFIG.languages.search.hits_empty.replace(/\$\{query}/,t.queryText),"</p></div>")),document.querySelector("#u-search .modal-results").innerHTML=r,window.pjax&&pjax.refresh(document.querySelector("#u-search")),document.addEventListener("keydown",(function n(e){"Escape"===e.code&&(t.close(),document.removeEventListener("keydown",n))}));case 13:case"end":return e.stop()}}),e)}))),t.close=function(){document.querySelector("#u-search").style.display="none"},t.fetchData=function(){return fetch(volantis.GLOBAL_CONFIG.search.dataPath).then((function(t){return t.text()})).then((function(t){return JSON.parse(t)}))},t.buildResultList=function(e){var r="";return e.forEach((function(e){e.text&&(e.text=e.text.replace(/12345\d*/g,"")),!e.title&&e.text&&(e.title=e.text.trim().slice(0,15)),t.contentSearch(e)&&(r+=t.buildResult(e.permalink,e.title,e.digest))})),r},t.contentSearch=function(e){var r=e.title.trim().toLowerCase(),n=e.text.trim().toLowerCase(),o=t.queryText.trim().toLowerCase().split(/[-\s]+/),i=!1,a=-1,c=-1,u=-1;return r&&n&&o.forEach((function(t,s){if(a=r.indexOf(t),c=n.indexOf(t),a<0&&c<0?i=!1:(i=!0,c<0&&(c=0),0===s&&(u=c)),i){n=e.text.trim();var l=0,f=0;if(u>=0){f=0===(l=Math.max(u-40,0))?Math.min(200,n.length):Math.min(u+120,n.length);var h=n.substring(l,f);o.forEach((function(t){var e=new RegExp(t,"gi");h=h.replace(e,"<b mark>"+t+"</b>")})),e.digest=h+"......"}else f=Math.min(200,n.length),e.digest=n.trim().substring(0,f)}})),i},t.buildResult=function(e,r,n){var o="";return o+="<li>",o+="<a class='result' href='"+t.getUrlRelativePath(e)+"?keyword="+t.queryText+"'>",o+="<span class='title'>"+r+"</span>",""!==n&&(o+="<span class='digest'>"+n+"</span>"),o+="</a>",o+="</li>"},t.getUrlRelativePath=function(t){var e=t.split("//"),r=e[1].indexOf("/"),n=e[1].substring(r);return-1!=n.indexOf("?")&&(n=n.split("?")[0]),n},{init:function(){t.init()},setQueryText:function(e){t.queryText=e},search:function(){t.search()}}}();Object.freeze(SearchService),SearchService.init(),document.addEventListener("pjax:success",SearchService.init),document.addEventListener("pjax:send",(function(){document.querySelector("#u-search").style.display="none"}));
//# sourceMappingURL=../../maps/js/search/hexo.js.map
