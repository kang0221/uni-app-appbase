<template>
    <view class="content">
            <view v-if="userInfo.isLogin" class="title">
                您好 {{userInfo.userName}}，您已成功登录。
            </view>
            <view v-if="!userInfo.isLogin" class="title">
                您好 游客。
            </view>
            <view class="ul">
                <view>这是 uni-app 带登录模板的示例App首页。</view>
                <view>在 “我的” 中点击 “登录” 可以 “登录您的账户”</view>
            </view>
    </view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
	computed: {
		...mapState('modules/userinfo', [
			'userInfo',
			'forcedLogin'
		])
	},
	onLoad() {
// 		if (!this.userInfo.isLogin) {
// 			uni.showModal({
// 				title: '未登录',
// 				content: '您未登录，需要登录后才能继续',
// 				/**
// 				 * 如果需要强制登录，不显示取消按钮
// 				 */
// 				showCancel: !this.forcedLogin,
// 				success: res => {
// 					if (res.confirm) {
// 						/**
// 						 * 如果需要强制登录，使用reLaunch方式
// 						 */
// 						if (this.forcedLogin) {
// 							uni.reLaunch({
// 								url: '../login/login'
// 							});
// 						} else {
// 							uni.navigateTo({
// 								url: '../login/login'
// 							});
// 						}
// 					}
// 				}
// 			});
// 		}
	}
};
</script>

<style>
.hello {
	display: flex;
	flex: 1;
	flex-direction: column;
}

.title {
	color: #8f8f94;
	margin-top: 50upx;
}

.ul {
	font-size: 30upx;
	color: #8f8f94;
	margin-top: 50upx;
}

.ul > view {
	line-height: 50upx;
}
</style>
