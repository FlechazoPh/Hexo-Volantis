const FriendsJS={requestAPI:(e,t,r)=>{let n=5;!function a(){return new Promise(((o,s)=>{let i=0,l=setTimeout((()=>{0===i&&(i=2,l=null,s("请求超时"),0==n&&r())}),5e3);fetch(e).then((function(e){if(2!==i&&(clearTimeout(l),o(e),l=null,i=1),e.ok)return e.json();throw new Error("Network response was not ok.")})).then((function(e){n=0,t(e)})).catch((function(e){n>0?(n-=1,setTimeout((()=>{a()}),5e3)):r()}))}))}()},layout:e=>{const t=e.el;FriendsJS.requestAPI(e.api,(function(r){t.querySelector(".loading-wrap").remove();const n=r.content;var a="";n.forEach(((t,r)=>{var n='<div class="user-card">';n+='<a class="card-link" target="_blank" rel="external noopener noreferrer"',n+=' href="'+t.url+'">',n+='<img alt="'+t.title+'" src="'+(t.avatar||e.avatar)+'" onerror="javascript:this.onerror=null;this.src=\''+e.avatar+"';\">",n+='<div class="name"><span>'+t.title+"</span></div>",n+="</a>",a+=n+="</div>"})),t.querySelector(".group-body").innerHTML=a}),(function(){try{t.querySelector(".loading-wrap svg").remove(),t.querySelector(".loading-wrap p").innerText("加载失败，请稍后重试。")}catch(e){}}))},start:()=>{const e=document.getElementsByClassName("friendsjs-wrap");for(var t=0;t<e.length;t++){const n=e[t],a=n.getAttribute("api");if(null!=a){var r=new Object;r.el=n,r.api=a,r.class=n.getAttribute("class"),r.avatar=volantis.GLOBAL_CONFIG.default.avatar,FriendsJS.layout(r)}}}};FriendsJS.start(),document.addEventListener("pjax:complete",(function(){FriendsJS.start()}));