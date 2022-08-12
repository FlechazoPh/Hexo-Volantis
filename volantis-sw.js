const prefix="volantis-community",cacheSuffixVersion="00000005-0.6868297233204785",CACHE_NAME=prefix+"-v"+cacheSuffixVersion,PreCachlist=["/css/style.372c3884.css","/js/app.af2d54c8.js","/js/search/hexo.0e52f222.js"];let NPMMirror=!0;const NPMPackage="@mhg/volantis-community";let NPMPackageVersion="1.0.1655517303377",debug=!0;const handleFetch=async e=>{const t=e.request.url;return/nocache/.test(t)?NetworkOnly(e):/@latest/.test(t)?CacheFirst(e):/cdnjs\.cloudflare\.com/.test(t)||/music\.126\.net/.test(t)||/qqmusic\.qq\.com/.test(t)||/jsdelivr\.net/.test(t)||/npm\.elemecdn\.com/.test(t)||/unpkg\.com/.test(t)||/.*\.(?:png|jpg|jpeg|svg|gif|webp|ico|eot|ttf|woff|woff2|mp3)$/.test(t)||/.*\.(css|js)$/.test(t)?CacheAlways(e):CacheFirst(e)},cdn={gh:{jsdelivr:"https://cdn.jsdelivr.net/gh",fastly:"https://fastly.jsdelivr.net/gh",gcore:"https://gcore.jsdelivr.net/gh",testingcf:"https://testingcf.jsdelivr.net/gh",test1:"https://test1.jsdelivr.net/gh"},combine:{jsdelivr:"https://cdn.jsdelivr.net/combine",fastly:"https://fastly.jsdelivr.net/combine",gcore:"https://gcore.jsdelivr.net/combine",testingcf:"https://testingcf.jsdelivr.net/combine",test1:"https://test1.jsdelivr.net/combine"},npm:{jsdelivr:"https://cdn.jsdelivr.net/npm",fastly:"https://fastly.jsdelivr.net/npm",gcore:"https://gcore.jsdelivr.net/npm",testingcf:"https://testingcf.jsdelivr.net/npm",test1:"https://test1.jsdelivr.net/npm",unpkg:"https://unpkg.com"}},cdn_match_list=[];for(const e in cdn)for(const t in cdn[e])cdn_match_list.push({type:e,key:cdn[e][t]});const _console=console,color={black:"#000000",red:"#FF0000",green:"#008000",yellow:"#FFFF00",blue:"#0000FF",magenta:"#FF00FF",cyan:"#00FFFF",white:"#FFFFFF"},add=(...e)=>{let t=[[]];for(let r=0;r<e.length;r++){const[o,...n]=e[r];t[0]+=o,t=t.concat(n)}return t},createlog=e=>(...t)=>{("error"==e?_console[e]:_console.log).apply(void 0,t)},creategroup=e=>(...e)=>{_console.groupCollapsed.apply(void 0,e)},colorUtils={bold:e=>{if("string"==typeof e||"number"==typeof e)return`${e};font-weight: bold;`;for(let t=1;t<e.length;t++)e[t]+=";font-weight: bold;";return e}},colorHash={log:"black",wait:"cyan",error:"red",warn:"yellow",ready:"green",info:"blue",event:"magenta"},createChalk=e=>(...t)=>{if("object"==typeof t[0])return void createlog(e)(...add(colorUtils.bold(colorUtils[colorHash[e]](`[${firstToUpperCase(e)}] `)),...t));let r=t;"string"!=typeof t&&"number"!=typeof t||(r=colorUtils[colorHash[e]](t)),createlog(e)(...add(colorUtils.bold(colorUtils[colorHash[e]](`[${firstToUpperCase(e)}] `)),r))},createChalkBg=e=>(...t)=>{if("object"==typeof t[0])return void createlog(e)(...add(colorUtils.bold(colorUtils[`bg${firstToUpperCase(colorHash[e])}`](`[${firstToUpperCase(e)}] `)),...t));let r=t;"string"!=typeof t&&"number"!=typeof t||(r=colorUtils[colorHash[e]](t)),createlog(e)(...add(colorUtils.bold(colorUtils[`bg${firstToUpperCase(colorHash[e])}`](`[${firstToUpperCase(e)}] `)),r))},createChalkGroup=e=>(...t)=>{if("object"==typeof t[0])return void creategroup()(...add(colorUtils.bold(colorUtils[colorHash[e]](`[${firstToUpperCase(e)}] `)),...t));let r=t;"string"!=typeof t&&"number"!=typeof t||(r=colorUtils[colorHash[e]](t)),creategroup()(...add(colorUtils.bold(colorUtils[colorHash[e]](`[${firstToUpperCase(e)}] `)),r))},chalk={group:{end:_console.groupEnd},bg:{}};Object.keys(colorHash).forEach((e=>{var t;chalk[e]=(t=e,(...e)=>{if("object"==typeof e[0])return void createlog(t)(...add(colorUtils.bold(colorUtils[colorHash[t]](`[${firstToUpperCase(t)}] `)),...e));let r=e;"string"!=typeof e&&"number"!=typeof e||(r=colorUtils[colorHash[t]](e)),createlog(t)(...add(colorUtils.bold(colorUtils[colorHash[t]](`[${firstToUpperCase(t)}] `)),r))}),chalk.group[e]=createChalkGroup(e),chalk.bg[e]=createChalkBg(e)}));const firstToUpperCase=e=>e.toLowerCase().replace(/( |^)[a-z]/g,(e=>e.toUpperCase()));Object.keys(color).forEach((e=>{colorUtils[e]=t=>{if("string"==typeof t||"number"==typeof t)return[`%c${t}`,`color:${color[e]}`];for(let r=1;r<t.length;r++)t[r]+=`;color:${color[e]}`;return t},colorUtils[`bg${firstToUpperCase(e)}`]=t=>{if("string"==typeof t||"number"==typeof t)return[`%c${t}`,`padding: 2px 4px; border-radius: 3px; color: ${"white"===e?"#000":"#fff"}; font-weight: bold; background:${color[e]};`];for(let r=1;r<t.length;r++)t[r]+=`;padding: 2px 4px; border-radius: 3px; font-weight: bold; background:${color[e]};`;return t}})),logger={add:add,...chalk,...colorUtils},debug||(logger={log:()=>{},wait:()=>{},error:()=>{},warn:()=>{},ready:()=>{},info:()=>{},event:()=>{},group:{log:()=>{},wait:()=>{},error:()=>{},warn:()=>{},ready:()=>{},info:()=>{},event:()=>{},end:()=>{}},bg:{log:()=>{},wait:()=>{},error:()=>{},warn:()=>{},ready:()=>{},info:()=>{},event:()=>{}}},console.log=()=>{});const generate_uuid=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}));self.db={read:(e,t)=>(t||(t={type:"text"}),new Promise(((t,r)=>{caches.open(CACHE_NAME).then((r=>{r.match(new Request(`https://LOCALCACHE/${encodeURIComponent(e)}`)).then((function(e){e||t(null),e.text().then((e=>t(e)))})).catch((()=>{t(null)}))}))}))),write:(e,t)=>new Promise(((r,o)=>{caches.open(CACHE_NAME).then((function(o){o.put(new Request(`https://LOCALCACHE/${encodeURIComponent(e)}`),new Response(t)),r()})).catch((()=>{o()}))}))};const compareVersion=(e,t)=>{v1=e.split("."),v2=t.split(".");const r=Math.max(v1.length,v2.length);for(;v1.length<r;)v1.push("0");for(;v2.length<r;)v2.push("0");for(let o=0;o<r;o++){const r=parseInt(v1[o]),n=parseInt(v2[o]);if(r>n)return e;if(r<n)return t}return e},mirrors=[`https://registry.npmjs.org/${NPMPackage}/latest`,`https://registry.npmmirror.com/${NPMPackage}/latest`,`https://mirrors.cloud.tencent.com/npm/${NPMPackage}/latest`],getLocalVersion=async()=>{NPMPackageVersion=await db.read("blog_version")||NPMPackageVersion,logger.bg.info(`Local Version: ${NPMPackage}@${NPMPackageVersion}`)};let mirror_time=0;const setNewestVersion=async()=>{if(!NPMMirror)return;let e=null;return e=mirror_time%(mirrors.length+1)?fetch(mirrors[mirror_time%(mirrors.length+1)-1]):fetchAny(mirrors),mirror_time++,e.then((e=>e.json())).then((async e=>{if(!e.version)throw"No Version Found!";NPMPackageVersion=compareVersion(e.version,await db.read("blog_version")||NPMPackageVersion),logger.bg.ready(`${NPMPackage}@${NPMPackageVersion}`),await db.write("blog_version",NPMPackageVersion)})).catch((e=>{logger.error("[Set Newest Version] "+(e.stack||e))}))};setInterval((async()=>{await setNewestVersion()}),6e4),setTimeout((async()=>{await setNewestVersion()}),5e3);const installFunction=async()=>(await getLocalVersion(),caches.open(CACHE_NAME+"-precache").then((async function(e){if(await db.read("uuid")||await db.write("uuid","xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))),PreCachlist.length){logger.group.event(`Precaching ${PreCachlist.length} files.`);let t=0;PreCachlist.forEach((function(r){e.match(new Request(r)).then((function(o){o?logger.ready(`Precaching ${r}`):(logger.wait(`Precaching ${r}`),e.add(new Request(r))),t++,t===PreCachlist.length&&(logger.ready(`Precached ${PreCachlist.length} files.`),logger.group.end())}))}))}})).catch((e=>{logger.error("[install] "+(e.stack||e))})));self.addEventListener("install",(async function(e){logger.bg.event("service worker install event listening");try{self.skipWaiting(),e.waitUntil(installFunction()),logger.bg.ready("service worker install sucess!")}catch(e){logger.error("[install] "+(e.stack||e))}})),self.addEventListener("activate",(async e=>{logger.bg.event("service worker activate event listening");try{e.waitUntil(caches.keys().then((e=>Promise.all(e.map((e=>{e.includes(cacheSuffixVersion)||(caches.delete(e),logger.bg.ready("Deleted Outdated Cache: "+e))}))))).catch((e=>{logger.error("[activate] "+(e.stack||e))}))),await self.clients.claim(),logger.bg.ready("service worker activate sucess!")}catch(e){logger.error("[activate] "+(e.stack||e))}})),self.addEventListener("fetch",(async e=>{e.respondWith(handleFetch(e).catch((t=>{logger.error("[fetch] "+e.request.url+"\n[error] "+(t.stack||t))})))}));const NetworkOnly=async e=>(logger.group.info("NetworkOnly: "+new URL(e.request.url).pathname),logger.wait("service worker fetch: "+e.request.url),logger.group.end(),fetch(e.request)),CacheFirst=async e=>caches.match(e.request).then((function(t){return logger.group.info("CacheFirst: "+new URL(e.request.url).pathname),logger.wait("service worker fetch: "+e.request.url),t?(logger.group.ready("Cache Hit"),console.log(t),logger.group.end(),logger.group.end(),e.waitUntil(CacheRuntime(e.request)),t):(logger.warn("Cache Miss"),logger.group.end(),CacheRuntime(e.request))})),CacheAlways=async e=>caches.match(e.request).then((function(t){return logger.group.info("CacheAlways: "+new URL(e.request.url).pathname),logger.wait("service worker fetch: "+e.request.url),t?(logger.group.ready("Cache Hit"),console.log(t),logger.group.end(),logger.group.end(),t):(logger.warn("Cache Miss"),logger.group.end(),CacheRuntime(e.request))})),matchCache=async e=>caches.match(e.request).then((function(t){return logger.group.info("service worker fetch: "+e.request.url),t?(logger.group.ready("Cache Hit"),console.log(t),logger.group.end(),logger.group.end(),t):(logger.warn("Cache Miss"),logger.group.end(),CacheRuntime(e.request))}));async function CacheRuntime(e){const t=new URL(e.url);let r=await matchCDN(e);if(r||(r=await fetch(e).catch((()=>null))),logger.group.event(`Cache Runtime ${t.pathname}`),logger.wait(`Caching url: ${e.url}`),console.log(r),"GET"===e.method&&"https:"==t.protocol){(await caches.open(CACHE_NAME+"-runtime")).put(e,r.clone()).catch((e=>{logger.error("[Cache Runtime] "+(e.stack||e)),"QuotaExceededError"===e.name&&(caches.delete(CACHE_NAME+"-runtime"),logger.ready("deleted cache"))})),logger.ready(`Cached url: ${e.url}`)}else logger.warn(`Not Cached url: ${e.url}`);return logger.group.end(),r}const matchCDN=async e=>{const t=navigator,{saveData:r,effectiveType:o}=t.connection||t.mozConnection||t.webkitConnection||{};if(r||/2g/.test(o))return logger.warn("Slow Network: Transparent Proxy"),fetch(e);const n=[];let a,s=new URL(e.url),c=s.pathname.split("/")[1];if(NPMMirror&&new RegExp(location.origin).test(e.url)){logger.group.ready("Match NPM Mirror: "+e.url);for(const t in cdn.npm){let r=cdn.npm[t]+"/"+NPMPackage+"@"+NPMPackageVersion+e.url.replace(location.origin,"");r=fullPath(r),console.log(r),n.push(r)}logger.group.end()}if(!n.length){for(const t of cdn_match_list)if(new RegExp(t.key).test(e.url)){c=t.type;break}for(const t in cdn)if(t===c){logger.group.ready(`Match CDN ${c}: `+e.url);for(const e in cdn[t]){const r=cdn[t][e]+s.pathname.replace("/"+c,"");console.log(r),n.push(r)}logger.group.end()}}if(a=n.length?fetchAny(n):fetch(e),a&&NPMMirror&&new RegExp(location.origin).test(e.url)){const t=fullPath(e.url).split(".").pop(),r=getContentType(t);a=a.then((e=>e.arrayBuffer())).then((e=>new Response(e,{headers:{"Content-Type":r}}))).catch((()=>null))}return a},fullPath=e=>{if((e=e.split("?")[0].split("#")[0]).endsWith("/"))e+="index.html";else{const t=e.split("/");-1===t[t.length-1].indexOf(".")&&(e+=".html")}return e};async function progress(e){return new Response(await e.arrayBuffer(),{status:e.status,headers:e.headers})}function createPromiseAny(){Promise.any=function(e){return new Promise(((t,r)=>{let o=(e=Array.isArray(e)?e:[]).length,n=[];if(0===o)return r(new AggregateError("All promises were rejected"));e.forEach((e=>{e instanceof Promise?e.then((e=>t(e)),(e=>{o--,n.push(e),0===o&&r(new AggregateError(n))})):r(e)}))}))}}function fetchAny(e){const t=new AbortController,r=t.signal,o=e.map((e=>new Promise(((o,n)=>{fetch(e,{signal:r}).then(progress).then((e=>{const r=e.clone();200!==r.status&&n(null),t.abort(),o(r)})).catch((()=>n(null)))}))));return Promise.any||createPromiseAny(),Promise.any(o).then((e=>e)).catch((()=>null))}const getContentType=e=>{switch(e){case"js":return"text/javascript";case"html":return"text/html";case"css":return"text/css";case"json":case"map":return"application/json";case"webp":return"image/webp";case"jpg":return"image/jpg";case"jpeg":return"image/jpeg";case"png":return"image/png";case"gif":return"image/gif";case"xml":case"xsl":return"text/xml";case"webmanifest":return"text/webmanifest";case"bcmap":case"wbmp":return"image/vnd.wap.wbmp";case"bmp":return"image/bmp";case"ico":return"image/vnd.microsoft.icon";case"tiff":case"tif":return"image/tiff";case"svg":case"svgz":return"image/svg+xml";case"woff":return"application/font-woff";case"woff2":return"application/font-woff2";case"ttf":return"application/font-ttf";case"otf":return"application/font-otf";case"eot":return"application/vnd.ms-fontobject";case"zip":return"application/zip";case"tar":return"application/x-tar";case"gz":return"application/gzip";case"bz2":return"application/x-bzip2";case"rar":return"application/x-rar-compressed";case"7z":return"application/x-7z-compressed";case"doc":return"application/msword";case"docx":return"application/vnd.openxmlformats-officedocument.wordprocessingml.document";case"xls":return"application/vnd.ms-excel";case"xlsx":return"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";case"ppt":return"application/vnd.ms-powerpoint";case"pptx":return"application/vnd.openxmlformats-officedocument.presentationml.presentation";case"pdf":return"application/pdf";case"txt":default:return"text/plain";case"rtf":return"application/rtf";case"mp3":return"audio/mpeg";case"wav":return"audio/x-wav";case"ogg":return"audio/ogg";case"mp4":return"video/mp4";case"m4v":return"video/x-m4v";case"mov":return"video/quicktime";case"avi":return"video/x-msvideo";case"wmv":return"video/x-ms-wmv";case"flv":return"video/x-flv";case"swf":return"application/x-shockwave-flash";case"mpg":case"mpeg":case"mpe":case"mpv":case"m2v":return"video/mpeg";case"m4a":return"audio/mp4";case"aac":return"audio/aac";case"m3u":return"audio/x-mpegurl";case"m3u8":return"application/vnd.apple.mpegurl";case"pls":return"audio/x-scpls";case"cue":return"application/x-cue";case"wma":return"audio/x-ms-wma";case"flac":return"audio/flac";case"aif":case"aiff":case"aifc":return"audio/x-aiff";case"au":case"snd":return"audio/basic";case"mid":case"midi":case"kar":return"audio/midi"}};
//# sourceMappingURL=maps/volantis-sw.js.map
