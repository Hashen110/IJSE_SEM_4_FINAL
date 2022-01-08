(function(){"use strict";var e={62:function(e,n,t){var o=t(7678),r=t.n(o),i=(t(6762),t(6843),t(5563),t(4124),t(839),t(71),t(1459),t(4520),t(7280),t(240),t(5363),t(8880)),a=t(9592),u=t(3673);function c(e,n,t,o,r,i){var a=(0,u.up)("router-view");return(0,u.wg)(),(0,u.j4)(a,{onContextmenu:e.onContextMenu},null,8,["onContextmenu"])}var f=t(8825),s=(0,u.aZ)({name:"App",setup:function(){var e=(0,f.Z)();return(0,u.bv)((function(){setTimeout((function(){e.notify({message:"We use cookies to personalize your experience.",caption:"By continuing to visit this website you agree to our use of cookies.",position:"bottom-right",timeout:0,type:"warning",actions:[{label:"Got It"},{label:"Cookie Policy",handler:function(){e.notify({message:"Oops... We haven't designed a cookie policy page yet",type:"negative",position:"bottom-right"})}}]}),setTimeout((function(){var n=(new Date).getHours();n>5&&n<12?e.notify({message:"Good Morning!",color:"light-blue",icon:"light_mode",position:"bottom-left"}):n>11&&n<18?e.notify({message:"Good Afternoon!",color:"amber",icon:"light_mode",position:"bottom-left"}):n>17&&n<24&&e.notify({message:"Good Evening!",color:"deep-orange",icon:"dark_mode",position:"bottom-left"}),setTimeout((function(){e.notify({message:"Have a nice day.",color:"positive",icon:"waving_hand",position:"bottom-left"})}),5e3)}),5e3)}),5e3)})),{onContextMenu:function(n){n.preventDefault(),e.notify({message:"Context menu and user select are disabled",caption:"Sorry for inconvenience!",type:"info"})}}}}),l=t(4260);const p=(0,l.Z)(s,[["render",c]]);var d=p,h=t(7083),m=t(9582),v=[{path:"/",component:function(){return Promise.all([t.e(736),t.e(167)]).then(t.bind(t,167))},children:[{path:"",component:function(){return Promise.all([t.e(736),t.e(625)]).then(t.bind(t,7625))}},{path:"trending",component:function(){return Promise.all([t.e(736),t.e(995)]).then(t.bind(t,995))}},{path:"popular",component:function(){return Promise.all([t.e(736),t.e(84)]).then(t.bind(t,5084))}},{path:"top_rated",component:function(){return Promise.all([t.e(736),t.e(868)]).then(t.bind(t,7868))}},{path:"celebrities",component:function(){return Promise.all([t.e(736),t.e(48)]).then(t.bind(t,2048))}},{path:"watch_providers",component:function(){return Promise.all([t.e(736),t.e(279)]).then(t.bind(t,3279))}},{path:"movie",component:function(){return Promise.all([t.e(736),t.e(732)]).then(t.bind(t,3732))},name:"movie"},{path:"tv",component:function(){return Promise.all([t.e(736),t.e(215)]).then(t.bind(t,9215))},name:"tv"}]},{path:"/:catchAll(.*)*",component:function(){return Promise.all([t.e(736),t.e(193)]).then(t.bind(t,2193))}}],b=v,g=(0,h.BC)((function(){var e=m.r5,n=(0,m.p7)({scrollBehavior:function(){return{left:0,top:0}},routes:b,history:e("")});return n}));function y(e,n){return w.apply(this,arguments)}function w(){return w=r()(regeneratorRuntime.mark((function e(n,t){var o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof g){e.next=6;break}return e.next=3,g({});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=g;case 7:return o=e.t0,r=n(d),r.use(a.Z,t),e.abrupt("return",{app:r,router:o});case 11:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}var k=t(2471),x=t(6395),P=t(4434),_={config:{dark:!0},plugins:{Cookies:k.Z,LocalStorage:x.Z,Notify:P.Z}},j=(t(9594),t(2535),t(2497),t(107),"function"===typeof d.preFetch?d.preFetch:void 0!==d.__c&&"function"===typeof d.__c.preFetch&&d.__c.preFetch);function O(e,n){var t=e?e.matched?e:n.resolve(e).route:n.currentRoute;return t?Array.prototype.concat.apply([],t.matched.map((function(e){return Object.keys(e.components).map((function(n){var t=e.components[n];return{path:e.path,c:t}}))}))):[]}function Z(e,n){e.beforeResolve((function(t,o,r){var i=window.location.href.replace(window.location.origin,""),a=O(t,e),u=O(o,e),c=!1,f=a.filter((function(e,n){return c||(c=!u[n]||u[n].c!==e.c||e.path.indexOf("/:")>-1)})).filter((function(e){return void 0!==e.c&&("function"===typeof e.c.preFetch||void 0!==e.c.__c&&"function"===typeof e.c.__c.preFetch)})).map((function(e){return void 0!==e.c.__c?e.c.__c.preFetch:e.c.preFetch}));if(!1!==j&&(f.unshift(j),j=!1),0===f.length)return r();var s=!1,l=function(e){s=!0,r(e)},p=function(){!1===s&&r()};f.reduce((function(e,r){return e.then((function(){return!1===s&&r({currentRoute:t,previousRoute:o,redirect:l,urlPath:i,publicPath:n})}))}),Promise.resolve()).then(p)["catch"]((function(e){console.error(e),p()}))}))}var C="";function T(e,n){return I.apply(this,arguments)}function I(){return I=r()(regeneratorRuntime.mark((function e(n,t){var o,r,i,a,u,c,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:o=n.app,r=n.router,i=!1,a=function(e){try{return r.resolve(e).href}catch(n){}return Object(e)===e?null:e},u=function(e){if(i=!0,"string"===typeof e&&/^https?:\/\//.test(e))window.location.href=e;else{var n=a(e);null!==n&&(window.location.href=n,window.location.reload())}},c=window.location.href.replace(window.location.origin,""),f=0;case 6:if(!(!1===i&&f<t.length)){e.next=22;break}return e.prev=7,e.next=10,t[f]({app:o,router:r,ssrContext:null,redirect:u,urlPath:c,publicPath:C});case 10:e.next=19;break;case 12:if(e.prev=12,e.t0=e["catch"](7),!e.t0||!e.t0.url){e.next=17;break}return u(e.t0.url),e.abrupt("return");case 17:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 19:f++,e.next=6;break;case 22:if(!0!==i){e.next=24;break}return e.abrupt("return");case 24:o.use(r),Z(r),o.mount("#q-app");case 27:case"end":return e.stop()}}),e,null,[[7,12]])}))),I.apply(this,arguments)}y(i.ri,_).then((function(e){return Promise.all([Promise.resolve().then(t.bind(t,5474)),Promise.resolve().then(t.bind(t,1723))]).then((function(n){var t=n.map((function(e){return e["default"]})).filter((function(e){return"function"===typeof e}));T(e,t)}))}))},1723:function(e,n,t){t.r(n);var o=t(7083),r=t(2471),i=t(6395),a=t(5474);n["default"]=(0,o.xr)((function(e){e.app;if(r.Z.has("token")){var n=r.Z.get("token");a.api.post("/validate/token",{token:n}).then((function(e){e.data.validate?(a.api.defaults.headers.common={Authorization:n},i.Z.set("user",e.data)):(r.Z.remove("token"),i.Z.remove("user"))}))["catch"]((function(){r.Z.remove("token"),i.Z.remove("user")}))}else i.Z.remove("user")}))},5474:function(e,n,t){t.r(n),t.d(n,{api:function(){return a},imdbApi:function(){return u}});var o=t(7083),r=t(52),i=t.n(r),a=i().create({baseURL:"http://127.0.0.1:5000/api"});a=i().create({baseURL:"http://ijsesemfinal4-env.eba-qqphzbwm.us-west-2.elasticbeanstalk.com/api"});var u=i().create({baseURL:"https://api.themoviedb.org/3",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDhlY2UxOTI5Nzk5ZTQxZTIyZTFlZGJiMTU5M2Q5NiIsInN1YiI6IjYwYjFmYzdkYTA2NjQ1MDA2ZTc4M2I5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dWbo1Wf3aRUXfctrrwTMfg8aCe09j7Mf-wqOrH2c9ns","Content-Type":"application/json;charset=utf-8"},params:{api_key:"a48ece1929799e41e22e1edbb1593d96"}});n["default"]=(0,o.xr)((function(e){var n=e.app;n.config.globalProperties.$axios=i(),n.config.globalProperties.$api=a}))}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],i=e[s][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(s--,1);var f=r();void 0!==f&&(n=f)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{48:"67dd4829",84:"a36f0fc9",167:"ca4a3e5c",193:"f5ed17bf",215:"dd230365",279:"9b611b11",625:"1c9b2517",732:"8a3f77c9",868:"be1f4cde",995:"c95c0f19"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"c3d8c1ba",736:"d040d789"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="frontend:";t.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var u,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==n+i){u=l;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=o),e[o]=[r];var p=function(n,t){u.onerror=u.onload=null,clearTimeout(d);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(t)})),n)return n(t)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var a=t.p+t.u(n),u=new Error,c=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],u=o[1],c=o[2],f=0;if(a.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(c)var s=c(t)}for(n&&n(o);f<a.length;f++)i=a[f],t.o(e,i)&&e[i]&&e[i][0](),e[a[f]]=0;return t.O(s)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[736],(function(){return t(62)}));o=t.O(o)})();