import {
	LOGIN_USER,USER_TOKEN
} from '../../../common/constants.js';
/**
 * 获取用户登录信息
 */
const getLoginUser = function() {
	let ret = '';
	ret = uni.getStorageSync(LOGIN_USER);
	if (!ret) {
		ret = '[]';
	}
	return JSON.parse(ret);

}
/**
 * 设置登录用户
 */
const setLoginUser = function(userInfo) {

	/**
	 * 用户登录信息信息
	 * @type {{isLogin: boolean, emName: string, unitName: string}}
	 * isLogin 是否登录，loginCode 登录用户名，unitName企业名称，emId 用户ID，租户ID:tenantld(暂时写死，后期在登录时，用户选择)
	 */
	/* let users = {
		isLogin: false,
		loginCode: "",
		unitName: "",
		emId: "",
		tenantld: "1000001",
		unitId: "",
		emName: "",
		pwd: ""
	}; */
	if (userInfo && userInfo.isLogin == true) {
		let users = {
			isLogin: userInfo.isLogin,
			userName: userInfo.userName,
			pwd: userInfo.pwd
		};
		uni.setStorageSync(LOGIN_USER, JSON.stringify(users));
	}
}
export default {
	namespaced: true,
	state: {
		/**
		 * 是否需要强制登录
		 */
		forcedLogin: false,
		/**
		 * 用户信息
		 */
		userInfo: getLoginUser()
	},
	mutations: {
		login(state, userInfo) {
			userInfo.isLogin = true;
			setLoginUser(userInfo);
			state.userInfo = getLoginUser();
		},
		logout(state) {
			uni.removeStorageSync(LOGIN_USER);
			uni.removeStorageSync(USER_TOKEN);
			state.userInfo = getLoginUser();
		}
	}
}
