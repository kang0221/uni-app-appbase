/**
 * 接口文件
 */
import {
	lineIp,
	hy_isCompress,
	hy_isEncrypt,
	ApiList,
	USER_TOKEN,
	LOGIN_USER,
	reqCode
} from '../common/constants.js';
import Utils from '../common/util.js';
let getTokenCount = 0; // 获取token次数。
const hy_ajax = (opt) => {
	/**
	 * opt： 
	 * 		url:请求链接
	 * 		data:数据
	 * 		method: 方法 GET、POST...  默认 GET
	 * 		header: 请求头
	 * 		success: 请求成功执行的方法
	 * 		retry: 请求失败自动重试的次数 默认 3次
	 * 		returnType: 返回的哪一层的数据 默认 gsundataRes（仅返回业务数据）
	 */
	opt = opt || {};
	opt.url = opt.url || '';
	opt.data = opt.data || null;
	opt.method = opt.method || 'GET';
	opt.header = opt.header || {
		"token": uni.getStorageSync(USER_TOKEN) || "This is a token for test"
	};
	opt.success = opt.success || function() {};
	opt.retry = opt.retry == 0 ? 0: (opt.retry || 3); // 默认重试三次
	/**response 响应的结构
	 * {
			data:{
					data:
					code:
					msg:
					success:
					token:
					...
				 }
			errMsg:
			header: {
						content-type:
						...
					}
			statusCode:
			...
		}
		请求返回的数据：   
						allRes:返回所有reponse响应，用于业务需要单独处理响应 header,statusCode 的业务。
						sundataRes:返回reponse响应中的第一层data（子节点）用于业务需要单独处理响应code,msg,token的业务; 
						gsundataRes:返回reponse响应中的第二层data（孙子节点，只返回数据，不处理code）用于不处理响应code的业务; 默认值，为空时也是此返回
	 */
	opt.returnType = opt.returnType || '';
	uni.request({
		url: lineIp + opt.url,
		data: opt.data,
		method: opt.method,
		header: opt.header,
		dataType: 'json',
		success: function(res) {
			console.log(res);
			if (!res.data) {
				uni.showToast({
					icon: 'none',
					title: '请求失败，请稍后重试'
				});
				return;
			}
			if (opt.url == '/login') {
				if (res.data.token) {
					uni.setStorageSync(USER_TOKEN, res.data.token);
				}
			}
			console.log(res.data);
			if (opt.returnType == 'allRes') {
				// 返回所有response响应
				opt.success(res);
				return;
			}
			if (opt.returnType == 'sundataRes') {
				// 返回response响应子节点
				opt.success(res.data);
				return;
			}
			// 没有发生错误则传递数据
			if (errorItem(res.data, opt)) {
				// 返回response响应孙子节点
				opt.success(res.data.data);
			}
		},
		fail: function(res) {
			// 重新请求 3次
			if (opt.retry-- > 0) {
				console.log("重试次数：" + opt.retry);
				hy_ajax(opt);
				return;
			}
			uni.showToast({
				title: '请稍后重试'
			});
		},
		complete: () => {}
	})
}
/**
 * 处理错误情况
 */
function errorItem(responseData, opt) {
	if (responseData.code == reqCode.TOKEN_TIME_OVER) {
		// token过期时，重新进行登录校验获取token
		console.log('TOKEN过期');
		let localUserinfoStr = uni.getStorageSync(LOGIN_USER);
		if (localUserinfoStr) {
			const localUserinfo = JSON.parse(localUserinfoStr);
			const timeStr = new Date().getTime(); // 时间戳
			const signature = Utils.getSignature(localUserinfo.userName, Utils.getMD5Encrypt(Utils.getAESDecStr(localUserinfo.pwd)),
				timeStr); // 签名
			const data = {
				"userName": localUserinfo.userName,
				"timeStr": timeStr,
				"signature": signature
			};
			hy_ajax({
				url: '/login',
				data: data,
				returnType: 'sundataRes',
				success: function(res) {
					opt.retry--;
					if (res.code != reqCode.SUCCESS || opt.retry < 1) {
						uni.showToast({
							icon: 'none',
							title: res.msg + ' 请重新登录',
						});
						uni.navigateTo({
							url: '../login/login'
						});
					} else {
						/**
						 * token需要重新获取，不能直接使用原来opt.header中的token
						 */
						opt.header = {
							"token": uni.getStorageSync(USER_TOKEN)
						};
						hy_ajax(opt);
					}
				}
			})
		} else {
			uni.showToast({
				icon: 'none',
				title: '请重新登录',
			});
			setTimeout(function() {
				uni.navigateTo({
					url: '../login/login'
				});
			}, 1000)
		}
		return false;
	}
	if (responseData.code == reqCode.NOT_LOGIN) {
		uni.showToast({
			icon: 'none',
			title: '请登录',
		});
		setTimeout(function() {
			uni.navigateTo({
				url: '../login/login'
			});
		}, 1000)
	}
	if (responseData.code != reqCode.SUCCESS) {
		uni.showToast({
			icon: 'none',
			title: responseData.msg,
		});
		return false;
	}
	return true;
}
// #ifdef APP-PLUS
const dcRichAlert = uni.requireNativePlugin('DCloud-RichAlert'); //原生弹窗插件
// #endif
const checkAppUpdate = function() {
	uni.request({
		url: 'http://kk0221.ngrok.xiaomiqiu.cn/version.json',
		data: {
			//升级检测数据
			appid: plus.runtime.appid,
			version: plus.runtime.version
		},
		success: res => {
			if (res.statusCode == 200 && res.data.status === 1) {

				dcRichAlert.show({
						position: 'center',
						content: res.data.note,
						contentAlign: 'left',
						/* checkBox: {
							title: '不再提示',
							isSelected: true
						}, */
						buttons: [{
								title: '自动更新'
							},
							{
								title: '取消'
							},
							{
								title: '手动更新'
							}
						]
					},
					result => {
						switch (result.type) {
							case 'button':
								console.log('callback---button--' + result.index);
								if (result.index == 0) {
									if (plus.networkinfo.getCurrentType() != 3) {
										// 如果不是wifi
										dcRichAlert.show({
												position: 'center',
												content: '正在使用手机移动网络流量，是否继续下载？',
												contentAlign: 'left',
												buttons: [{
														title: '否'
													},
													{
														title: '不再提示'
													},
													{
														title: '是'
													}
												]
											},
											result => {
												switch (result.type) {
													case 'button':
														if (result.index == 0) {
															checkAppUpdate();
														} else {
															// 开始更新
															if (result.index == 1) {
																// 点击不再提示
															}
															//downlaodTask(res.data.url);
														}
														break;
													case 'backCancel':
														checkAppUpdate();
														break;
												}
											}
										);
									} else {
										//updateWindow(res.data.url);
										// TO-DO 待完善
									}

								} else {
									if (result.index == 2) {
										// 点击手动更新，则打开浏览器下载
										plus.runtime.openURL(res.data.url);
									}
									if (res.data.forced == 1) {
										// 强制更新时，不是自动更新则退出应用
										plus.runtime.quit();
									}
								}
								break;
							case 'checkBox':
								console.log('callback---checkBox--' + result.isSelected);
								break;
							case 'a':
								console.log('callback---a--' + JSON.stringify(result));
								break;
							case 'backCancel':
								if (res.data.forced == 1) {
									// 强制更新时，点击否退出应用
									plus.runtime.quit();
								}
								break;
						}
					}
				);
			}
		},
		fail: (res) => {
			uni.showToast({
				title: '检测新版本失败'
			});
		},
		complete: () => {}
	});
}
const downlaodTask = function(url) {
	const dtask = plus.downloader.createDownload(url, {}, function(d, status) {
		// 下载完成
		if (status == 200) {
			plus.runtime.install(plus.io.convertLocalFileSystemURL(d.filename), {}, {}, function(error) {
				uni.showToast({
					title: '安装失败',
					mask: false,
					duration: 1500
				});
			})
		} else {
			uni.showToast({
				title: '下载失败',
				mask: false,
				duration: 1500
			});
		}
	});
	dtask.start();
	return dtask;
}
const updateWindow = function(url) {
	let buttons = [{
		title: '暂停'
	}, {
		title: '取消'
	}, {
		title: '后台下载'
	}];

	dcRichAlert.show({
			position: 'center',
			content: `<view class="progress-box">
						<progress percent="20" show-info stroke-width="3" />
					</view>`,
			contentAlign: 'left',
			buttons: buttons
		},
		result => {
			switch (result.type) {
				case 'button':
					buttons = [{
						title: '开始'
					}, {
						title: '取消'
					}, {
						title: '后台下载'
					}];
					return;
					break;
				case 'backCancel':
					checkAppUpdate();
					break;
			}
		}
	);
}
export default {
	hy_ajax,
	checkAppUpdate
}
