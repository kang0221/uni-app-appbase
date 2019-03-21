<template>
    <view class="content">
        <view class="btn-row">
            <button type="primary" class="primary" @tap="androidCheckUpdate"><i class="icon iconfont icon-app_icons--" style="font-size: 18px;"></i> <text> 检查更新1</text></button>
			<br>
			<button type="primary" class="primary" @tap="checkUpdate"><i class="icon iconfont icon-app_icons--" style="font-size: 18px;"></i> <text> 检查更新2</text></button>
			<br>
			<view v-if="download">
				已下载: {{size/1024/1024 + 'M'}}<br>
				总共:   {{download.totalSize/1024/1024 + 'M'}}<br>
				完成进度: {{size/download.totalSize * 100}}%
			</view>
			<br><br><br>
			<view v-if="download">======================</view>
			<view v-if="download">
				ID: {{download.id}} <br> 
				URL: {{download.url}} <br> 
				状态: {{download.state}} <br> 
				参数: {{download.options}} <br> 
				文件名: {{download.filename}} <br> 
				已下载: {{download.downloadedSize}} <br> 
				总大小: {{download.totalSize}} <br> 
			</view>
			<br><br><br>
			<view v-if="download">======================</view>
			<view v-if="download">
				{{dtask.id}} <br> 
				{{dtask.url}} <br> 
				{{dtask.state}} <br> 
				{{dtask.options}} <br> 
				{{dtask.filename}} <br> 
				{{dtask.downloadedSize}} <br> 
				{{dtask.totalSize}} <br> 
			</view>
            <button type="primary" class="primary" @tap="bindLogin">登录</button>
			<br>
            <button v-if="isLogin" type="default" @tap="bindLogout">退出登录</button>
			<br>
			<button type="default" @tap="findallbookinfo">查询</button>
        </view>
    </view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { checkAppUpdate } from '../../api/API.js';
export default {
	computed: {
		...mapState('modules/userinfo', {
			isLogin: state => state.userInfo.isLogin,
			forcedLogin: state => state.forcedLogin
		})
	},
	data: function() {
		return {
			version: 1,
			size: 0,
			download: null,
			status: 0,
			dtask: null
		};
	},
	onLoad: function() {
		console.log(this.isLogin);
		// #ifdef APP-PLUS
		uni.getSystemInfo({
			success: res => {
				console.log(res.platform);
				//检测当前平台，如果是安卓则启动安卓更新
				if (res.platform == 'android') {
					checkAppUpdate();
				}
			}
		});
		// #endif
	},
	onUnload: function() {
		console.log('onUnload');
		plus.downloader.clear(state);
		dtask.abort();
	},
	methods: {
		...mapMutations('modules/userinfo', ['logout']),
		bindLogin() {
			uni.navigateTo({
				url: '../login/login'
			});
		},
		bindLogout() {
			this.logout();
			uni.removeStorageSync('LOGIN_USER');
			/**
			 * 如果需要强制登录跳转回登录页面
			 */
			if (this.forcedLogin) {
				uni.reLaunch({
					url: '../login/login'
				});
			}
		},
		androidCheckUpdate: function() {
			var _this = this;
			uni.request({
				url: 'http://kk0221.ngrok.xiaomiqiu.cn/version.json',
				method: 'GET',
				data: {},
				success: res => {
					if (res.data && res.data.status == 1) {
						if (plus.networkinfo.getCurrentType() != 3) {
							uni.showToast({
								title:
									'有新的版本发布，检测到您目前非Wifi连接，为节约您的流量，程序已停止自动更新，将在您连接WIFI之后重新检测更新。',
								mask: false,
								duration: 5000,
								icon: 'none'
							});
							return;
						}
						uni.showToast({
							title:
								'有新的版本发布，检测到您目前为Wifi连接，程序已启动自动更新。新版本下载完成后将自动弹出安装程序。',
							mask: false,
							duration: 5000,
							icon: 'none'
						});
						this.dtask = plus.downloader.createDownload(res.data.url, {}, function(
							d,
							status
						) {
							// 下载完成
							if (status == 200) {
								plus.runtime.install(
									plus.io.convertLocalFileSystemURL(d.filename),
									{},
									{},
									function(error) {
										uni.showToast({
											title: '安装失败',
											mask: false,
											duration: 1500
										});
									}
								);
							} else {
								uni.showToast({
									title: '更新失败',
									mask: false,
									duration: 1500
								});
							}
						});
						this.dtask.addEventListener('statechanged', _this.onStateChanged, false);
						this.dtask.start();
					}
				},
				fail: () => {},
				complete: () => {}
			});
		},
		findallbookinfo() {
			this.$hy_ajax({
				url: '/findallbookinfo',
				data: {userId:1},
				success: function (res) {
					console.log("获取token成功，重新执行请求！");
				}
			})
		},
		onStateChanged(download, status) {
			this.size = download.downloadedSize;
			this.download = download;
			this.status = status;
			console.log(JSON.stringify(plus.downloader));
		},
		checkUpdate() {
			checkAppUpdate();
		}
	}
};
</script>

<style>
</style>
