require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _vue = __webpack_require__(4);var _vue2 = _interopRequireDefault(_vue);\nvar _App = __webpack_require__(11);var _App2 = _interopRequireDefault(_App);\nvar _API = __webpack_require__(5);\nvar _constants = __webpack_require__(7);\n\nvar _store = __webpack_require__(14);var _store2 = _interopRequireDefault(_store);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n_vue2.default.config.productionTip = false;\n\n_vue2.default.prototype.$store = _store2.default;\n_vue2.default.prototype.$hy_ajax = _API.hy_ajax;\n_vue2.default.prototype.$ApiList = _constants.ApiList;\n\n_App2.default.mpType = 'app';\n\nvar app = new _vue2.default(_extends({\n    store: _store2.default },\n_App2.default));\n\napp.$mount();\n\n//////////////////\n// WEBPACK FOOTER\n// D:/MyCode/HB/uni-app-login-20190108/main.js\n// module id = 9\n// module chunks = 2\n\n//# sourceURL=uni-app:///main.js?65b6");

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__G_Software_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_G_Software_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_G_Software_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_G_Software_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_G_Software_HBuilderX_plugins_uniapp_node_modules_babel_runtime_G_Software_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_G_Software_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_H5_false_APP_PLUS_true_MP_WEIXIN_false_MP_BAIDU_false_MP_ALIPAY_false_MP_TOUTIAO_false_MP_false_APP_true_APP_PLUS_NVUE_false_APP_PLUS_NVUE_false_APP_PLUS_true_MP_WEIXIN_false_MP_BAIDU_false_MP_ALIPAY_false_MP_TOUTIAO_false_G_Software_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(13);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__G_Software_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_G_Software_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_G_Software_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_G_Software_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_G_Software_HBuilderX_plugins_uniapp_node_modules_babel_runtime_G_Software_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_G_Software_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_H5_false_APP_PLUS_true_MP_WEIXIN_false_MP_BAIDU_false_MP_ALIPAY_false_MP_TOUTIAO_false_MP_false_APP_true_APP_PLUS_NVUE_false_APP_PLUS_NVUE_false_APP_PLUS_true_MP_WEIXIN_false_MP_BAIDU_false_MP_ALIPAY_false_MP_TOUTIAO_false_G_Software_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__G_Software_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_G_Software_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_G_Software_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_G_Software_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_G_Software_HBuilderX_plugins_uniapp_node_modules_babel_runtime_G_Software_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_G_Software_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_H5_false_APP_PLUS_true_MP_WEIXIN_false_MP_BAIDU_false_MP_ALIPAY_false_MP_TOUTIAO_false_MP_false_APP_true_APP_PLUS_NVUE_false_APP_PLUS_NVUE_false_APP_PLUS_true_MP_WEIXIN_false_MP_BAIDU_false_MP_ALIPAY_false_MP_TOUTIAO_false_G_Software_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue__);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(12)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\nvar __vue_template__ = null\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__G_Software_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_G_Software_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_G_Software_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_G_Software_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_G_Software_HBuilderX_plugins_uniapp_node_modules_babel_runtime_G_Software_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_G_Software_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_H5_false_APP_PLUS_true_MP_WEIXIN_false_MP_BAIDU_false_MP_ALIPAY_false_MP_TOUTIAO_false_MP_false_APP_true_APP_PLUS_NVUE_false_APP_PLUS_NVUE_false_APP_PLUS_true_MP_WEIXIN_false_MP_BAIDU_false_MP_ALIPAY_false_MP_TOUTIAO_false_G_Software_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue___default.a,\n  __vue_template__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"D:\\\\MyCode\\\\HB\\\\uni-app-login-20190108\\\\App.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-85a43654\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-85a43654\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/MyCode/HB/uni-app-login-20190108/App.vue\n// module id = 11\n// module chunks = 2\n\n");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-85a43654\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/px2rpx-loader?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"H5\":false,\"APP-PLUS\":true,\"MP-WEIXIN\":false,\"MP-BAIDU\":false,\"MP-ALIPAY\":false,\"MP-TOUTIAO\":false,\"MP\":false,\"APP\":true,\"APP-PLUS-NVUE\":false,\"APP_PLUS_NVUE\":false,\"APP_PLUS\":true,\"MP_WEIXIN\":false,\"MP_BAIDU\":false,\"MP_ALIPAY\":false,\"MP_TOUTIAO\":false}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"G://Software//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"H5\":false,\"APP-PLUS\":true,\"MP-WEIXIN\":false,\"MP-BAIDU\":false,\"MP-ALIPAY\":false,\"MP-TOUTIAO\":false,\"MP\":false,\"APP\":true,\"APP-PLUS-NVUE\":false,\"APP_PLUS_NVUE\":false,\"APP_PLUS\":true,\"MP_WEIXIN\":false,\"MP_BAIDU\":false,\"MP_ALIPAY\":false,\"MP_TOUTIAO\":false}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/MyCode/HB/uni-app-login-20190108/App.vue\n// module id = 12\n// module chunks = 2\n\n");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\nvar _API = __webpack_require__(5);exports.default =\n{\n\tonLaunch: function onLaunch() {\n\t\tconsole.log('App Launch');\n\n\t\t(0, _API.checkAppUpdate)();\n\n\t},\n\tonShow: function onShow() {\n\t\tconsole.log('App Show');\n\t},\n\tonHide: function onHide() {\n\t\tconsole.log('App Hide');\n\t} };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"G://Software//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"G://Software//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"G://Software//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"G://Software//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"G://Software//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"H5\":false,\"APP-PLUS\":true,\"MP-WEIXIN\":false,\"MP-BAIDU\":false,\"MP-ALIPAY\":false,\"MP-TOUTIAO\":false,\"MP\":false,\"APP\":true,\"APP-PLUS-NVUE\":false,\"APP_PLUS_NVUE\":false,\"APP_PLUS\":true,\"MP_WEIXIN\":false,\"MP_BAIDU\":false,\"MP_ALIPAY\":false,\"MP_TOUTIAO\":false}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/MyCode/HB/uni-app-login-20190108/App.vue\n// module id = 13\n// module chunks = 2\n\n//# sourceURL=uni-app:///App.vue?2a32");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _vue = __webpack_require__(4);var _vue2 = _interopRequireDefault(_vue);\nvar _vuex = __webpack_require__(3);var _vuex2 = _interopRequireDefault(_vuex);\nvar _modules = __webpack_require__(15);var _modules2 = _interopRequireDefault(_modules);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n_vue2.default.use(_vuex2.default);\n\nvar store = new _vuex2.default.Store({\n\tmodules: {\n\t\tmodules: _modules2.default } });exports.default =\n\n\n\nstore;\n\n//////////////////\n// WEBPACK FOOTER\n// D:/MyCode/HB/uni-app-login-20190108/store/index.js\n// module id = 14\n// module chunks = 2\n\n//# sourceURL=uni-app:///store/index.js?f015");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true }); /**\n                                                                             * The file enables `@/store/index.js` to import all vuex modules\n                                                                             * in a one-shot manner. There should not be any reason to edit this file.\n                                                                             */\n\nvar files = __webpack_require__(16);\nvar modules = {};\n\nfiles.keys().forEach(function (key) {\n  modules[key.replace(/(\\.\\/|\\.js)/g, '')] = files(key).default;\n});exports.default =\n\n{\n  namespaced: true,\n  modules: modules };\n\n//////////////////\n// WEBPACK FOOTER\n// D:/MyCode/HB/uni-app-login-20190108/store/modules/index.js\n// module id = 15\n// module chunks = 2\n\n//# sourceURL=uni-app:///store/modules/index.js?37a8");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./userinfo.js\": 17\n};\nfunction webpackContext(req) {\n\treturn __webpack_require__(webpackContextResolve(req));\n};\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) // check for number or string\n\t\tthrow new Error(\"Cannot find module '\" + req + \"'.\");\n\treturn id;\n};\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = 16;\n\n//////////////////\n// WEBPACK FOOTER\n// D:/MyCode/HB/uni-app-login-20190108/store/modules/modules nonrecursive \\.js$\n// module id = 16\n// module chunks = 2\n\n");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, \"__esModule\", { value: true });var LOGIN_USER = 'LOGIN_USER'; // 已登录用户存储到storage时的Key\n\n/**\r\n * 获取用户登录信息\r\n */\nvar getLoginUser = function getLoginUser() {\n\tvar ret = '';\n\tret = uni.getStorageSync(LOGIN_USER);\n\tif (!ret) {\n\t\tret = '[]';\n\t}\n\treturn JSON.parse(ret);\n\n};\n/**\r\n    * 设置登录用户\r\n    */\nvar setLoginUser = function setLoginUser(userInfo) {\n\t/**\r\n                                                     * 用户登录信息信息\r\n                                                     * @type {{isLogin: boolean, emName: string, unitName: string}}\r\n                                                     * isLogin 是否登录，loginCode 登录用户名，unitName企业名称，emId 用户ID，租户ID:tenantld(暂时写死，后期在登录时，用户选择)\r\n                                                     */\n\tvar users = {\n\t\tisLogin: false,\n\t\tloginCode: \"\",\n\t\tunitName: \"\",\n\t\temId: \"\",\n\t\ttenantld: \"1000001\",\n\t\tunitId: \"\",\n\t\temName: \"\" };\n\n\tif (userInfo && userInfo.isLogin == true) {\n\t\tusers = {\n\t\t\tisLogin: userInfo.isLogin,\n\t\t\tloginCode: userInfo.loginCode,\n\t\t\tunitName: userInfo.unitName,\n\t\t\temId: userInfo.emId,\n\t\t\ttenantld: \"1000001\",\n\t\t\tunitId: userInfo.unitId,\n\t\t\temName: userInfo.emName };\n\n\t}\n\tuni.setStorageSync(LOGIN_USER, JSON.stringify(users));\n};exports.default =\n{\n\tnamespaced: true,\n\tstate: {\n\t\t/**\r\n           * 是否需要强制登录\r\n           */\n\t\tforcedLogin: false,\n\t\t/**\r\n                       * 用户信息\r\n                       */\n\t\tuserInfo: getLoginUser() },\n\n\n\tmutations: {\n\t\tlogin: function login(state, userInfo) {\n\t\t\tuserInfo.isLogin = true;\n\t\t\tsetLoginUser(userInfo);\n\t\t\tstate.userInfo = getLoginUser();\n\t\t},\n\t\tlogout: function logout(state) {\n\t\t\tsetLoginUser();\n\t\t} } };\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)[\"default\"]))\n\n//////////////////\n// WEBPACK FOOTER\n// D:/MyCode/HB/uni-app-login-20190108/store/modules/modules/userinfo.js\n// module id = 17\n// module chunks = 2\n\n//# sourceURL=uni-app:///store/modules/modules/userinfo.js?7db4");

/***/ })
],[9]);