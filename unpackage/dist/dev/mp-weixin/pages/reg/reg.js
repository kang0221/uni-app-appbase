require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{38:function(e,t,s){"use strict";var a=o(s(2)),n=o(s(39));function o(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(n.default))},39:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(41),n=s.n(a),o=s(42),i=!1;var l=function(e){i||s(40)},r=s(0)(n.a,o.a,l,null,null);r.options.__file="D:\\MyCode\\HB\\uni-app-login-20190108\\pages\\reg\\reg.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] reg.vue: functional components are not supported with templates, they should use render functions."),t.default=r.exports},40:function(e,t){},41:function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a=o(s(3)),n=o(s(6));function o(e){return e&&e.__esModule?e:{default:e}}t.default={components:{mInput:n.default},data:function(){return{account:"",password:"",email:""}},methods:{register:function(){if(this.account.length<5)e.showToast({icon:"none",title:"账号最短为 5 个字符"});else if(this.password.length<6)e.showToast({icon:"none",title:"密码最短为 6 个字符"});else if(this.email.length<3||!~this.email.indexOf("@"))e.showToast({icon:"none",title:"邮箱地址不合法"});else{var t={account:this.account,password:this.password,email:this.email};a.default.addUser(t),e.showToast({title:"注册成功"}),e.navigateBack({delta:1})}}}}}).call(t,s(1).default)},42:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticClass:"content"},[s("view",{staticClass:"input-group"},[s("view",{staticClass:"input-row border"},[s("text",{staticClass:"title"},[e._v("账号：")]),s("m-input",{attrs:{type:"text",focus:"",clearable:"",placeholder:"请输入账号",eventid:"BLm-0",mpcomid:"dLq-0"},model:{value:e.account,callback:function(t){e.account=t},expression:"account"}})],1),s("view",{staticClass:"input-row border"},[s("text",{staticClass:"title"},[e._v("密码：")]),s("m-input",{attrs:{type:"password",displayable:"",placeholder:"请输入密码",eventid:"COs-1",mpcomid:"AYY-1"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),s("view",{staticClass:"input-row"},[s("text",{staticClass:"title"},[e._v("邮箱：")]),s("m-input",{attrs:{type:"text",clearable:"",placeholder:"请输入邮箱",eventid:"7kJ-2",mpcomid:"QyV-2"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)]),s("view",{staticClass:"btn-row"},[s("button",{staticClass:"primary",attrs:{type:"primary",eventid:"wVk-3"},on:{tap:e.register}},[e._v("注册")])],1)])};a._withStripped=!0;var n={render:a,staticRenderFns:[]};t.a=n}},[38]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/reg/reg.js.map