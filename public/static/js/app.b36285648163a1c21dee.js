webpackJsonp([4],{"+JJi":function(e,t){},0:function(e,t,n){n("briU"),e.exports=n("NHnr")},"0fGJ":function(e,t){},"4rg9":function(e,t){},"80uG":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={};n.d(i,"opened",function(){return M}),n.d(i,"isLogin",function(){return P}),n.d(i,"userInfo",function(){return H});var s=n("+RKF"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=n("C7Lr")({name:"App"},r,!1,function(e){n("80uG")},null,null).exports,a=n("WBiy"),c=n("4YfN"),u=n.n(c),l=n("azXz"),d=n.n(l),f=n("fUgm"),m={name:"SidebarItem",methods:{},props:{item:{type:Object,required:!0}},computed:u()({},Object(f.b)(["opened"])),created:function(){},components:{}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return 1==!e.item.hidden?n("div",[e.item.children&&e.item.children.length<2||e.item.meta&&e.item.meta.nav&&"last"===e.item.meta.nav?[n("router-link",{attrs:{to:e.item.path}},[n("el-menu-item",{attrs:{index:e.item.path}},[n("i",{class:e.item.icon}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.item.name?e.item.name:e.item.title))])])],1)]:n("el-submenu",{attrs:{index:e.item.path,"popper-append-to-body":""}},[n("template",{slot:"title"},[n("i",{class:e.item.icon}),e._v(" "),e.opened?e._e():n("span",[e._v(e._s(e.item.name))])]),e._v(" "),e._l(e.item.children,function(e,t){return n("sidebar-item",{key:t,attrs:{item:e}})})],2)],2):e._e()},staticRenderFns:[]};var h=n("C7Lr")(m,p,!1,function(e){n("4rg9")},"data-v-4d776545",null).exports,v={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"svg-container",on:{click:this.cubeHanldeClick}},[t("svg",{staticClass:"hamburger",attrs:{"data-v-38e027bb":"",t:"1492500959545",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1691","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"20",height:"20"}},[t("path",{attrs:{"data-v-38e027bb":"",d:"M966.8023 568.849776 57.196677 568.849776c-31.397081 0-56.850799-25.452695-56.850799-56.850799l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 543.397081 998.200404 568.849776 966.8023 568.849776z","p-id":"1692"}}),this._v(" "),t("path",{attrs:{"data-v-38e027bb":"",d:"M966.8023 881.527125 57.196677 881.527125c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 856.07443 998.200404 881.527125 966.8023 881.527125z","p-id":"1693"}}),this._v(" "),t("path",{attrs:{"data-v-38e027bb":"",d:"M966.8023 256.17345 57.196677 256.17345c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.850799 56.850799-56.850799l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.850799l0 0C1023.653099 230.720755 998.200404 256.17345 966.8023 256.17345z","p-id":"1694"}})])])},staticRenderFns:[]};var b=n("C7Lr")({methods:{cubeHanldeClick:function(){this.$emit("handleClick")}}},v,!1,function(e){n("u6sm")},"data-v-69649e06",null).exports,g={data:function(){return{breadcrumbList:[]}},mounted:function(){var e=this;this.breadcrumbList=this.$router.currentRoute.matched.map(function(e){return e.name}),window.onload=function(){e.breadcrumbList=e.$router.currentRoute.matched.map(function(e){return e.name})}},watch:{$route:function(e){this.breadcrumbList=e.matched.map(function(e){return e.name}),console.log(this.breadcrumbList)}}},x={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"breadcrumb"},[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.breadcrumbList,function(t){return n("el-breadcrumb-item",{key:t},[e._v(e._s(t))])}),1)],1)},staticRenderFns:[]};var w=n("C7Lr")(g,x,!1,function(e){n("+JJi")},"data-v-918803a8",null).exports,_=n("TIfe"),L={computed:u()({},Object(f.d)({isLogin:function(e){return e.isLogin}}),Object(f.b)(["userInfo"])),mounted:function(){this.getUserToken()},methods:u()({exitLogin:function(){Object(_.b)(),this.setLogin(!1)},getUserToken:function(){var e=Object(_.a)();e&&JSON.parse(e).token&&(this.setLogin(!0),this.setInfo(JSON.parse(e)))},showLoginBox:function(){this.$emit("showBox")}},Object(f.c)({setLogin:"SET_LOGIN",setInfo:"SET_INFO"}))},C={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"avatar"},[e.isLogin?i("div",{staticClass:"isLogin"},[i("el-dropdown",{on:{command:e.exitLogin}},[i("span",{staticClass:"el-dropdown-link",staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[i("img",{attrs:{src:n("iQH9"),width:"24px",height:"24px",alt:""}}),e._v(" "),i("span",{staticStyle:{"font-weight":"bold","font-size":"10px"}},[e._v(e._s(e.userInfo.username))])]),e._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",[e._v("退出登錄")])],1)],1)],1):i("div",{staticClass:"notLogin",on:{click:e.showLoginBox}},[i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"點擊登陸",placement:"bottom"}},[i("i",{staticClass:"el-icon-user-solid"})])],1)])},staticRenderFns:[]};var E={data:function(){return{fullscreen:!1}},components:{cube:b,breadcrumb:w,avatar:n("C7Lr")(L,C,!1,function(e){n("c2rX")},"data-v-8049ea38",null).exports},computed:u()({},Object(f.d)({opened:function(e){return e.opened}})),methods:u()({handleFullScreen:function(){var e=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen(),this.fullscreen=!this.fullscreen},showLoginBox:function(){this.$emit("showUserBox")},toggleSideBar:function(){this.opened?this.setOpened(!1):this.setOpened(!0)}},Object(f.c)({setOpened:"SET_OPENED"}))},S={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header_nav_bar"},[n("cube",{class:e.opened?"cubeRotate":"noRotate",on:{handleClick:e.toggleSideBar}}),e._v(" "),n("breadcrumb"),e._v(" "),n("avatar",{on:{showBox:e.showLoginBox}}),e._v(" "),n("div",{staticClass:"btn-fullscreen",on:{click:e.handleFullScreen}},[n("el-tooltip",{attrs:{effect:"dark",content:e.fullscreen?"取消全屏":"全屏",placement:"bottom"}},[n("i",{staticClass:"el-icon-full-screen"})])],1)],1)},staticRenderFns:[]};var F=n("C7Lr")(E,S,!1,function(e){n("RLWP")},"data-v-013bff8a",null).exports,k=n("vMJZ"),O={data:function(){return{loading:!1,user:{username:"",password:""},isShowUser:!1}},components:{sideBarItem:h,headerNavBar:F},methods:u()({clearUser:function(){this.user={username:"",password:""}},doLogin:function(){var e=this;this.loading=!0,""===this.userName||""===this.password?(this.loading=!1,this.$message({message:"請輸入完整的用和密碼",type:"warning"})):Object(k.c)(this.user).then(function(t){e.loading=!1,t.data?(e.$message({message:"登陸成功!",type:"success"}),e.setLogin(!0),Object(_.c)(t.data),e.setUserInfo(t.data),e.isShowUser=!1):e.$message({message:"用戶名或密碼錯誤!",type:"error"})})},showUser:function(){this.isShowUser=!0}},Object(f.c)({setLogin:"SET_LOGIN",setUserInfo:"SET_INFO"})),created:function(){},computed:u()({isOpened:function(){return this.opened?"isCollapse":""},isExtend:function(){return this.opened?"isExtend":""}},Object(f.b)(["opened"]),{items:function(){return this.$router.options.routes},variables:function(){return d.a}})},T={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"header-container",class:e.isExtend},[n("headerNavBar",{on:{showUserBox:e.showUser}}),e._v(" "),n("div",{staticClass:"logo"},[e._v("\n        CND後台管理系統\n      ")])],1),e._v(" "),n("div",{staticClass:"scroll-container"},[n("el-scrollbar",{staticClass:"scroll",class:e.isOpened},[n("el-menu",{staticClass:"demo",attrs:{"default-active":"1-4-1","background-color":e.variables.menuBg,"text-color":e.variables.menuText,"unique-opened":!1,"active-text-color":e.variables.menuActiveText,"collapse-transition":!1,mode:"vertical",collapse:e.opened}},e._l(e.items,function(e,t){return n("sideBarItem",{key:t,attrs:{item:e}})}),1)],1)],1),e._v(" "),n("div",{staticClass:"mian",class:e.isExtend},[n("div",{staticStyle:{padding:"20px"}},[n("router-view")],1),e._v(" "),n("el-dialog",{attrs:{title:"用戶登陸",width:"400px","close-on-click-modal":!1,visible:e.isShowUser,close:"clearUser"},on:{"update:visible":function(t){e.isShowUser=t}}},[n("span",{staticStyle:{display:"inline-block",width:"160px","line-height":"40px"}},[e._v("用戶名:")]),e._v(" "),n("el-input",{attrs:{placeholder:"請輸入用戶名"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username","string"==typeof t?t.trim():t)},expression:"user.username"}}),e._v(" "),n("span",{staticStyle:{display:"inline-block",width:"160px","line-height":"40px"}},[e._v("密碼:")]),e._v(" "),n("el-input",{attrs:{placeholder:"請輸入密碼",type:"password"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),e._v(" "),n("el-button",{staticStyle:{"margin-top":"20px"},attrs:{loading:e.loading,type:"primary"},on:{click:e.doLogin}},[e._v("登陸")])],1)],1)])},staticRenderFns:[]};var I=n("C7Lr")(O,T,!1,function(e){n("0fGJ")},"data-v-73c9f582",null).exports;s.default.use(a.a);var y=[{path:"/",redirect:"/Te",name:"home",hidden:!0},{path:"/PE",component:I,name:"Pe (產品工程)",icon:"el-icon-coordinate",children:[{path:"",component:function(){return n.e(2).then(n.bind(null,"1SPr"))},name:"PE",meta:{title:"PE",icon:"coin"}}]},{path:"/TE",component:I,icon:"el-icon-set-up",redirect:"/TE/user",name:"Te (测试工程)",children:[{path:"/TE/issue",component:function(){return n.e(0).then(n.bind(null,"ms//"))},name:"異常統計",meta:{nav:"last"},icon:"el-icon-view"},{path:"/TE/user",component:function(){return n.e(1).then(n.bind(null,"lJCp"))},name:"用戶管理",meta:{nav:"last"},icon:"el-icon-user"}]}],B=function(){return new a.a({scrollBehavior:function(){return{y:0}},routes:y})},R=B();var U,N=R,j=n("bQIR"),$=n.n(j),z=n("U8I6"),J=n.n(z),q=(n("gFLX"),n("d4tr"),n("mUbh")),M=function(e){return e.opened},P=function(e){return e.isLogin},H=function(e){return e.userInfo},A={opened:!1,isLogin:!1,userInfo:{}},D=n("a3Yh"),G=n.n(D),X=(U={},G()(U,"SET_OPENED",function(e,t){e.opened=t}),G()(U,"SET_LOGIN",function(e,t){e.isLogin=t}),G()(U,"SET_INFO",function(e,t){e.userInfo=t}),U);s.default.use(f.a);var W=new f.a.Store({actions:q,getters:i,state:A,mutations:X}),Q=n("E4C3"),V=n.n(Q);n("ve9D");V.a.inc(.2),V.a.configure({easing:"ease",speed:500,showSpinner:!1}),N.beforeEach(function(e,t,n){V.a.start(),n()}),N.afterEach(function(){V.a.done()}),s.default.config.productionTip=!1,s.default.use(J.a),s.default.use($.a),new s.default({el:"#app",router:N,store:W,components:{App:o},template:"<App/>"})},RLWP:function(e,t){},T452:function(e,t,n){"use strict";n.d(t,"f",function(){return i}),n.d(t,"d",function(){return s}),n.d(t,"e",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return c});var i="/user/login",s="/user/addUser",r="/user/info",o="/issue/addIssue",a="/issue/issueInfo",c="/image/upload"},TIfe:function(e,t,n){"use strict";t.a=function(){return s.a.get(r)},t.c=function(e){return s.a.set(r,e)},t.b=function(){return s.a.remove(r)};var i=n("sqb0"),s=n.n(i),r="userInfo"},azXz:function(e,t){e.exports={menuText:"#bfcbd9",menuActiveText:"#409EFF",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"210px"}},c2rX:function(e,t){},d4tr:function(e,t){e.exports={menuText:"#bfcbd9",menuActiveText:"#409EFF",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"210px"}},gFLX:function(e,t){},iQH9:function(e,t,n){e.exports=n.p+"static/img/logo.e9bb481.png"},mUbh:function(e,t){},u6sm:function(e,t){},vLgD:function(e,t,n){"use strict";var i=n("rVsN"),s=n.n(i),r=n("I29D"),o=n.n(r),a=n("TIfe"),c=o.a.create({timeout:5e3});c.interceptors.request.use(function(e){return Object(a.a)()&&(e.headers.Authorization=JSON.parse(Object(a.a)()).token),e},function(e){return console(e),s.a.reject(e)}),t.a=c},vMJZ:function(e,t,n){"use strict";t.c=function(e){return new s.a(function(t,n){console.log(e),a.a.post(o.a+r.f,e).then(function(e){t(e)}).catch(function(e){n(e),console.log(e)})})},t.a=function(e){return new s.a(function(t,n){console.log(e),a.a.post(o.a+r.d,e).then(function(e){t(e)}).catch(function(e){n(e),console.log(e)})})},t.b=function(){return new s.a(function(e,t){a.a.get(o.a+r.e).then(function(t){e(t)}).catch(function(e){t(e),console.log(e)})})};var i=n("rVsN"),s=n.n(i),r=n("T452"),o=n("xjP8"),a=n("vLgD")},ve9D:function(e,t){},xjP8:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i="http://localhost:3000"}},[0]);
//# sourceMappingURL=app.b36285648163a1c21dee.js.map