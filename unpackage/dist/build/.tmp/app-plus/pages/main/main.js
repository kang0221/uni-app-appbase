(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/main"],{"0f43":function(e,t,n){"use strict";var r=n("48cb"),u=n.n(r);u.a},"48cb":function(e,t,n){},5768:function(e,t,n){"use strict";n("a2ec");var r=o(n("b0ce")),u=o(n("e7bd"));function o(e){return e&&e.__esModule?e:{default:e}}Page((0,r.default)(u.default))},"5c4d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62");function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i={computed:u({},(0,r.mapState)("modules/userinfo",["userInfo","forcedLogin"])),onLoad:function(){}};t.default=i},"8d3d":function(e,t,n){"use strict";n.r(t);var r=n("5c4d"),u=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t["default"]=u.a},b5f6:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"content"},[e.userInfo.isLogin?n("view",{staticClass:"title"},[e._v("您好 "+e._s(e.userInfo.userName)+"，您已成功登录。")]):e._e(),e.userInfo.isLogin?e._e():n("view",{staticClass:"title"},[e._v("您好 游客。")]),e._m(0)])},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"ul"},[n("view",[e._v("这是 uni-app 带登录模板的示例App首页。")]),n("view",[e._v("在 “我的” 中点击 “登录” 可以 “登录您的账户”")])])}];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return u})},e7bd:function(e,t,n){"use strict";n.r(t);var r=n("b5f6"),u=n("8d3d");for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);n("0f43");var i=n("2877"),a=Object(i["a"])(u["default"],r["a"],r["b"],!1,null,null,null);a.options.__file="main.vue",t["default"]=a.exports}},[["5768","common/runtime","common/vendor"]]]);