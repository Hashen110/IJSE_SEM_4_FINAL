"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[64],{1064:function(e,n,t){t.r(n),t.d(n,{default:function(){return fe}});t(7280),t(7967);var o=t(3673),a=t(2323),r=(0,o.Uk)("MTC"),l=(0,o.Uk)("Clear search"),u=(0,o.Uk)("Searching..."),i={class:"q-gutter-sm row items-center no-wrap"},s=(0,o.Uk)("Toggle themes"),c={class:"row no-wrap q-pa-md"},d={class:"column items-center"},m={class:"text-subtitle1 q-my-sm"},p=(0,o.Uk)("Recommend"),f=(0,o._)("div",{class:"text-subtitle2 text-center"},"Sign In to like, review, recommend and many more",-1),w=(0,o._)("div",{class:"q-my-sm"},null,-1);function g(e,n,t,g,v,h){var _=(0,o.up)("q-btn"),k=(0,o.up)("q-toolbar-title"),W=(0,o.up)("q-space"),y=(0,o.up)("q-icon"),q=(0,o.up)("q-tooltip"),b=(0,o.up)("q-spinner"),U=(0,o.up)("q-img"),C=(0,o.up)("q-avatar"),x=(0,o.up)("q-item-section"),P=(0,o.up)("q-item-label"),Z=(0,o.up)("q-item"),I=(0,o.up)("q-list"),Q=(0,o.up)("q-menu"),V=(0,o.up)("q-input"),D=(0,o.up)("q-toggle"),S=(0,o.up)("sign-in"),H=(0,o.up)("q-toolbar"),T=(0,o.up)("q-header"),j=(0,o.up)("q-separator"),L=(0,o.up)("q-scroll-area"),z=(0,o.up)("q-drawer"),O=(0,o.up)("router-view"),A=(0,o.up)("q-page-container"),M=(0,o.up)("q-layout"),R=(0,o.Q2)("ripple");return(0,o.wg)(),(0,o.j4)(M,{view:"hHh LpR fFf"},{default:(0,o.w5)((function(){return[(0,o.Wm)(T,{elevated:"",class:(0,a.C_)(e.darkTheme?["bg-dark","text-white"]:["bg-white","text-black"])},{default:(0,o.w5)((function(){return[(0,o.Wm)(H,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(_,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",class:"q-mr-sm",onClick:e.toggleLeftDrawer},null,8,["onClick"]),(0,o.Wm)(k,{class:"cursor-pointer",onClick:n[0]||(n[0]=function(n){return e.$router.push("/")})},{default:(0,o.w5)((function(){return[r]})),_:1}),(0,o.Wm)(W),(0,o.Wm)(V,{class:"half-width q-my-sm",dense:"",outlined:"",modelValue:e.search,"onUpdate:modelValue":n[2]||(n[2]=function(n){return e.search=n}),placeholder:"Search","model-value":e.search,onKeyup:e.onSearch},(0,o.Nv)({prepend:(0,o.w5)((function(){return[(0,o.Wm)(y,{name:"search"})]})),default:(0,o.w5)((function(){return[(0,o.Wm)(Q,{fit:"","touch-position":!1,"no-parent-event":"","no-route-dismiss":"","no-refocus":"","no-focus":"","model-value":e.searchMenu,modelValue:e.searchMenu,"onUpdate:modelValue":n[1]||(n[1]=function(n){return e.searchMenu=n})},{default:(0,o.w5)((function(){return[(0,o.Wm)(I,{padding:""},{default:(0,o.w5)((function(){return[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.searchResult,(function(n){return(0,o.wg)(),(0,o.j4)(Z,{clickable:"",key:n.id,to:"movie"===n.media_type?"/movie/"+n.id:"tv"===n.media_type?"/tv/"+n.id:null,onClick:e.onClearSearch},{default:(0,o.w5)((function(){return[n.poster_path||n.profile_path?((0,o.wg)(),(0,o.j4)(x,{key:0,avatar:""},{default:(0,o.w5)((function(){return[(0,o.Wm)(C,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(U,{src:"https://image.tmdb.org/t/p/w500/"+(n.poster_path||n.profile_path)},null,8,["src"])]})),_:2},1024)]})),_:2},1024)):(0,o.kq)("",!0),(0,o.Wm)(x,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(P,{lines:"1"},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,a.zw)(n.title||n.name),1)]})),_:2},1024),n.release_date||n.first_air_date?((0,o.wg)(),(0,o.j4)(P,{key:0,lines:"1",caption:""},{default:(0,o.w5)((function(){return[(0,o.Uk)((0,a.zw)(n.release_date||n.first_air_date),1)]})),_:2},1024)):(0,o.kq)("",!0)]})),_:2},1024)]})),_:2},1032,["to","onClick"])})),128))]})),_:1})]})),_:1},8,["model-value","modelValue"])]})),_:2},[e.search?{name:"append",fn:(0,o.w5)((function(){return[(0,o.Wm)(y,{name:"close",class:"cursor-pointer",onClick:e.onClearSearch},{default:(0,o.w5)((function(){return[(0,o.Wm)(q,null,{default:(0,o.w5)((function(){return[l]})),_:1})]})),_:1},8,["onClick"]),e.searching?((0,o.wg)(),(0,o.j4)(b,{key:0,color:"primary"},{default:(0,o.w5)((function(){return[(0,o.Wm)(q,null,{default:(0,o.w5)((function(){return[u]})),_:1})]})),_:1})):(0,o.kq)("",!0)]}))}:void 0]),1032,["modelValue","model-value","onKeyup"]),(0,o.Wm)(W),(0,o._)("div",i,[(0,o.Wm)(D,{"model-value":e.darkTheme,modelValue:e.darkTheme,"onUpdate:modelValue":[n[3]||(n[3]=function(n){return e.darkTheme=n}),e.$q.dark.toggle],"unchecked-icon":"light_mode","checked-icon":"dark_mode"},{default:(0,o.w5)((function(){return[(0,o.Wm)(q,null,{default:(0,o.w5)((function(){return[s]})),_:1})]})),_:1},8,["model-value","modelValue","onUpdate:modelValue"]),e.isAuthorized?((0,o.wg)(),(0,o.j4)(_,{key:1,color:"primary",round:"",icon:"account_circle"},{default:(0,o.w5)((function(){return[(0,o.Wm)(q,null,{default:(0,o.w5)((function(){return[(0,o.Uk)((0,a.zw)(e.user.user.username),1)]})),_:1}),(0,o.Wm)(Q,null,{default:(0,o.w5)((function(){return[(0,o._)("div",c,[(0,o._)("div",d,[(0,o.Wm)(C,{size:"xl"},{default:(0,o.w5)((function(){return[(0,o.Wm)(U,{src:"https://via.placeholder.com/640.png?text="+e.user.user.username,alt:e.user.user.username},null,8,["src","alt"])]})),_:1}),(0,o._)("div",m,(0,a.zw)(e.user.user.username),1),(0,o.Wm)(_,{outline:"",color:"secondary",size:"sm",label:"Logout",onClick:e.onLogout},null,8,["onClick"])])])]})),_:1})]})),_:1})):((0,o.wg)(),(0,o.j4)(S,{key:0}))])]})),_:1})]})),_:1},8,["class"]),(0,o.Wm)(z,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":n[4]||(n[4]=function(n){return e.leftDrawerOpen=n}),"show-if-above":"",bordered:"",width:300},{default:(0,o.w5)((function(){return[(0,o.Wm)(L,{class:"fit"},{default:(0,o.w5)((function(){return[(0,o.Wm)(I,{padding:""},{default:(0,o.w5)((function(){return[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.links,(function(e){return(0,o.wy)(((0,o.wg)(),(0,o.j4)(Z,{key:e.text,clickable:"",to:e.to},{default:(0,o.w5)((function(){return[(0,o.Wm)(x,{avatar:""},{default:(0,o.w5)((function(){return[(0,o.Wm)(y,{name:e.icon},null,8,["name"])]})),_:2},1024),(0,o.Wm)(x,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(P,null,{default:(0,o.w5)((function(){return[(0,o.Uk)((0,a.zw)(e.text),1)]})),_:2},1024)]})),_:2},1024)]})),_:2},1032,["to"])),[[R]])})),128)),(0,o.Wm)(j,{spaced:""}),(0,o.wy)((0,o.Wm)(Z,{clickable:"",to:"recommend"},{default:(0,o.w5)((function(){return[(0,o.Wm)(x,{avatar:""},{default:(0,o.w5)((function(){return[(0,o.Wm)(y,{name:"recommend"})]})),_:1}),(0,o.Wm)(x,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(P,null,{default:(0,o.w5)((function(){return[p]})),_:1})]})),_:1})]})),_:1},512),[[R]]),(0,o.Wm)(j,{spaced:""}),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.links2,(function(e){return(0,o.wy)(((0,o.wg)(),(0,o.j4)(Z,{key:e.text,clickable:"",to:e.to},{default:(0,o.w5)((function(){return[(0,o.Wm)(x,{avatar:""},{default:(0,o.w5)((function(){return[(0,o.Wm)(y,{name:e.icon},null,8,["name"])]})),_:2},1024),(0,o.Wm)(x,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(P,null,{default:(0,o.w5)((function(){return[(0,o.Uk)((0,a.zw)(e.text),1)]})),_:2},1024)]})),_:2},1024)]})),_:2},1032,["to"])),[[R]])})),128)),e.isAuthorized?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(j,{key:0,spaced:""})),e.isAuthorized?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(Z,{key:1},{default:(0,o.w5)((function(){return[(0,o.Wm)(x,null,{default:(0,o.w5)((function(){return[f,w,(0,o.Wm)(S)]})),_:1})]})),_:1}))]})),_:1})]})),_:1})]})),_:1},8,["modelValue"]),(0,o.Wm)(A,null,{default:(0,o.w5)((function(){return[(0,o.Wm)(O)]})),_:1})]})),_:1})}t(6801);var v=t(1959),h=t(5474),_=(0,o._)("div",{class:"text-h6"},"Welcome to MTC",-1),k=(0,o.Uk)("Back"),W=(0,o.Uk)("Close"),y=(0,o._)("div",{class:"text-h5"},"Login",-1),q=(0,o._)("div",{class:"text-h5"},"Sign Up",-1),b={class:"text-center q-gutter-sm"},U=(0,o._)("div",{class:"text-subtitle1"},"Already have an account?",-1),C={class:"text-center q-gutter-sm"},x=(0,o._)("div",{class:"text-subtitle1"},"Don't have an account?",-1),P=(0,o._)("div",{class:"text-caption"},"Sign In to like, review, recommend and many more",-1);function Z(e,n,t,a,r,l){var u=(0,o.up)("q-btn"),i=(0,o.up)("q-space"),s=(0,o.up)("q-tooltip"),c=(0,o.up)("q-card-section"),d=(0,o.up)("q-icon"),m=(0,o.up)("q-input"),p=(0,o.up)("q-form"),f=(0,o.up)("q-splitter"),w=(0,o.up)("q-card"),g=(0,o.up)("q-dialog"),v=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(u,{label:"Sign In",icon:"login",color:"primary",onClick:e.onSignInClick},null,8,["onClick"]),(0,o.Wm)(g,{"model-value":e.signInDialog,modelValue:e.signInDialog,"onUpdate:modelValue":n[12]||(n[12]=function(n){return e.signInDialog=n})},{default:(0,o.w5)((function(){return[(0,o.Wm)(w,{class:"full-width"},{default:(0,o.w5)((function(){return[(0,o.Wm)(c,{class:"row items-center q-pb-none"},{default:(0,o.w5)((function(){return[_,(0,o.Wm)(i),e.signInOption?((0,o.wg)(),(0,o.j4)(u,{key:0,icon:"arrow_back",flat:"",round:"",dense:"",onClick:n[0]||(n[0]=function(n){return e.signInOption=""})},{default:(0,o.w5)((function(){return[(0,o.Wm)(s,null,{default:(0,o.w5)((function(){return[k]})),_:1})]})),_:1})):(0,o.kq)("",!0),(0,o.wy)((0,o.Wm)(u,{icon:"close",flat:"",round:"",dense:""},{default:(0,o.w5)((function(){return[(0,o.Wm)(s,null,{default:(0,o.w5)((function(){return[W]})),_:1})]})),_:1},512),[[v]])]})),_:1}),(0,o.Wm)(c,null,{default:(0,o.w5)((function(){return["login"===e.signInOption?((0,o.wg)(),(0,o.j4)(p,{key:0,class:"q-gutter-md q-px-md text-center"},{default:(0,o.w5)((function(){return[y,(0,o.Wm)(m,{modelValue:e.loginDetails.username,"onUpdate:modelValue":n[1]||(n[1]=function(n){return e.loginDetails.username=n}),"model-value":e.loginDetails.username,clearable:"",outlined:"",counter:"",maxlength:"50",label:"Username"},{prepend:(0,o.w5)((function(){return[(0,o.Wm)(d,{name:"person"})]})),_:1},8,["modelValue","model-value"]),(0,o.Wm)(m,{modelValue:e.loginDetails.password,"onUpdate:modelValue":n[3]||(n[3]=function(n){return e.loginDetails.password=n}),"model-value":e.loginDetails.password,clearable:"",outlined:"",maxlength:"50",counter:"",label:"Password",type:e.showPassword.loginPassword?"text":"password"},{prepend:(0,o.w5)((function(){return[(0,o.Wm)(d,{name:"password"})]})),append:(0,o.w5)((function(){return[(0,o.Wm)(d,{name:e.showPassword.loginPassword?"visibility_off":"visibility",class:"cursor-pointer",onClick:n[2]||(n[2]=function(n){return e.showPassword.loginPassword=!e.showPassword.loginPassword})},null,8,["name"])]})),_:1},8,["modelValue","model-value","type"]),(0,o.Wm)(u,{label:"Login",color:"primary",class:"q-px-xl",onClick:e.onLogin},null,8,["onClick"])]})),_:1})):"signUp"===e.signInOption?((0,o.wg)(),(0,o.j4)(p,{key:1,class:"q-gutter-md q-px-md text-center"},{default:(0,o.w5)((function(){return[q,(0,o.Wm)(m,{modelValue:e.signUpDetails.username,"onUpdate:modelValue":n[4]||(n[4]=function(n){return e.signUpDetails.username=n}),"model-value":e.signUpDetails.username,clearable:"",outlined:"",counter:"",maxlength:"25",label:"Username"},{prepend:(0,o.w5)((function(){return[(0,o.Wm)(d,{name:"person"})]})),_:1},8,["modelValue","model-value"]),(0,o.Wm)(m,{modelValue:e.signUpDetails.password,"onUpdate:modelValue":n[6]||(n[6]=function(n){return e.signUpDetails.password=n}),"model-value":e.signUpDetails.password,clearable:"",outlined:"",maxlength:"50",counter:"",label:"Password",type:e.showPassword.signUpPassword?"text":"password"},{prepend:(0,o.w5)((function(){return[(0,o.Wm)(d,{name:"password"})]})),append:(0,o.w5)((function(){return[(0,o.Wm)(d,{name:e.showPassword.signUpPassword?"visibility_off":"visibility",class:"cursor-pointer",onClick:n[5]||(n[5]=function(n){return e.showPassword.signUpPassword=!e.showPassword.signUpPassword})},null,8,["name"])]})),_:1},8,["modelValue","model-value","type"]),(0,o.Wm)(m,{modelValue:e.signUpDetails.confirmPassword,"onUpdate:modelValue":n[8]||(n[8]=function(n){return e.signUpDetails.confirmPassword=n}),"model-value":e.signUpDetails.confirmPassword,clearable:"",outlined:"",maxlength:"50",counter:"",label:"Password",type:e.showPassword.signUpConfirmPassword?"text":"password"},{prepend:(0,o.w5)((function(){return[(0,o.Wm)(d,{name:"password"})]})),append:(0,o.w5)((function(){return[(0,o.Wm)(d,{name:e.showPassword.signUpConfirmPassword?"visibility_off":"visibility",class:"cursor-pointer",onClick:n[7]||(n[7]=function(n){return e.showPassword.signUpConfirmPassword=!e.showPassword.signUpConfirmPassword})},null,8,["name"])]})),_:1},8,["modelValue","model-value","type"]),(0,o.Wm)(u,{label:"Sign Up",color:"primary",class:"q-px-xl",onClick:e.onSignUp},null,8,["onClick"])]})),_:1})):((0,o.wg)(),(0,o.j4)(f,{key:2,"model-value":e.splitter,modelValue:e.splitter,"onUpdate:modelValue":n[11]||(n[11]=function(n){return e.splitter=n}),class:"q-my-xl"},{before:(0,o.w5)((function(){return[(0,o._)("div",b,[U,(0,o.Wm)(u,{label:"Login",color:"primary",onClick:n[9]||(n[9]=function(n){return e.signInOption="login"})})])]})),after:(0,o.w5)((function(){return[(0,o._)("div",C,[x,(0,o.Wm)(u,{label:"Sign Up",color:"primary",onClick:n[10]||(n[10]=function(n){return e.signInOption="signUp"})})])]})),_:1},8,["model-value","modelValue"]))]})),_:1}),(0,o.Wm)(c,{class:"text-center"},{default:(0,o.w5)((function(){return[P]})),_:1})]})),_:1})]})),_:1},8,["model-value","modelValue"])],64)}var I=t(8825),Q=(0,o.aZ)({name:"SignIn",setup:function(){var e=(0,I.Z)(),n=(0,v.iH)(null),t=(0,v.iH)(!1),a=(0,v.iH)({username:"",password:""}),r=(0,v.iH)({username:"",password:"",confirmPassword:""});(0,o.bv)((function(){n.value=setInterval((function(){t.value||e.notify({message:"Sign In to like, review, recommend and many more",type:"info",timeout:1e4,progress:!0,actions:[{label:"Sign In",handler:function(){t.value=!0}}]})}),3e4)})),(0,o.Jd)((function(){clearInterval(n.value)})),(0,o.Ah)((function(){clearInterval(n.value)}));var l=function(){r.value.username&&r.value.password?r.value.password===r.value.confirmPassword?h.api.post("/signup",{username:r.value.username,password:r.value.password}).then((function(n){n.data.error?e.notify({message:n.data.error,type:"negative"}):n.data.token?(e.cookies.set("token",n.data.token),window.location.reload()):e.notify({message:"Invalid username or password",type:"negative"})}))["catch"]((function(){e.notify({message:"Internal server error",type:"negative"})})):e.notify({message:"Password and confirm password doesn't match",type:"negative"}):e.notify({message:"Invalid username or password",type:"negative"})},u=function(){a.value.username&&a.value.password?h.api.post("/login",{username:a.value.username,password:a.value.password}).then((function(n){n.data.error?e.notify({message:n.data.error,type:"negative"}):n.data.token?(e.cookies.set("token",n.data.token),window.location.reload()):e.notify({message:"Invalid username or password",type:"negative"})})):e.notify({message:"Invalid username or password",type:"negative"})};return{signInDialog:t,loginDetails:a,signUpDetails:r,splitter:(0,v.iH)(50),signInOption:(0,v.iH)(""),showPassword:(0,v.iH)({loginPassword:!1,signUpPassword:!1,signUpConfirmPassword:!1}),onSignInClick:function(){t.value=!t.value},onSignUp:l,onLogin:u}}}),V=t(4260),D=t(4607),S=t(6778),H=t(151),T=t(5589),j=t(2025),L=t(8870),z=t(8689),O=t(1206),A=t(4554),M=t(218),R=t(677),K=t(7518),Y=t.n(K);const B=(0,V.Z)(Q,[["render",Z]]);var F=B;Y()(Q,"components",{QBtn:D.Z,QDialog:S.Z,QCard:H.Z,QCardSection:T.Z,QSpace:j.Z,QTooltip:L.Z,QForm:z.Z,QInput:O.Z,QIcon:A.Z,QSplitter:M.Z}),Y()(Q,"directives",{ClosePopup:R.Z});var $=(0,o.aZ)({name:"MainLayout",components:{SignIn:F},setup:function(){var e=(0,I.Z)(),n=(0,v.iH)(!1),t=(0,v.iH)(""),o=(0,v.iH)(!1),a=(0,v.iH)([]),r=(0,v.iH)(null),l=(0,v.iH)(!1);function u(){n.value=!n.value}function i(){t.value.trim()?(l.value=!0,clearTimeout(r.value),r.value=setTimeout((function(){h.imdbApi.get("/search/multi?include_adult=true&query="+encodeURIComponent(t.value)).then((function(e){a.value=e.data.results,o.value=!0,l.value=!1,h.api.post("/search",{search:t.value.trim()}).then((function(){}))}))}),250)):(o.value=!1,a.value=[],clearTimeout(r.value),l.value=!1)}return{leftDrawerOpen:n,links:[{icon:"home",text:"Home",to:"/"},{icon:"local_fire_department",text:"Trending",to:"/trending"},{icon:"trending_up",text:"Popular",to:"/popular"},{icon:"whatshot",text:"Top Rated",to:"/top_rated"}],links2:[{icon:"face",text:"Celebrities",to:"/celebrities"},{icon:"theaters",text:"Watch Providers",to:"/watch_providers"}],toggleLeftDrawer:u,onSearch:i,search:t,searchMenu:o,searchResult:a,searching:l,darkTheme:(0,v.iH)(!0),onClearSearch:function(){t.value="",o.value=!1,a.value=[],clearTimeout(r.value),l.value=!1},isAuthorized:e.cookies.has("token"),user:e.localStorage.getItem("user"),onLogout:function(){e.cookies.remove("token"),window.location.reload()}}}}),J=t(9214),N=t(3812),E=t(9570),G=t(3747),X=t(9754),ee=t(811),ne=t(7011),te=t(3414),oe=t(2035),ae=t(5096),re=t(4027),le=t(2350),ue=t(2582),ie=t(2901),se=t(7704),ce=t(5869),de=t(2652),me=t(6489);const pe=(0,V.Z)($,[["render",g]]);var fe=pe;Y()($,"components",{QLayout:J.Z,QHeader:N.Z,QToolbar:E.Z,QBtn:D.Z,QToolbarTitle:G.Z,QSpace:j.Z,QInput:O.Z,QIcon:A.Z,QTooltip:L.Z,QSpinner:X.Z,QMenu:ee.Z,QList:ne.Z,QItem:te.Z,QItemSection:oe.Z,QAvatar:ae.Z,QImg:re.Z,QItemLabel:le.Z,QToggle:ue.Z,QDrawer:ie.Z,QScrollArea:se.Z,QSeparator:ce.Z,QPageContainer:de.Z}),Y()($,"directives",{Ripple:me.Z})}}]);