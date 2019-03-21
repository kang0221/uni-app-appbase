<template>
	<view class="uni-page-body">
		<view>
			<view class="me-image">
				<image src="../../static/img/splash.jpg" mode="widthFix" style="width: 100%;"></image>
			</view>
			<view class="me-login">
				<view class="uni-flex me-login-input">
					<uni-icon size="35" :type="'contact'" :color="'#007aff'"></uni-icon>
					<!-- <input class="me-login-username-input" clearable focus type="text" placeholder="请输入用户名" v-model="account" maxlength="18"> -->
					<m-input class="m-input" type="text" clearable focus v-model="userName" placeholder="请输入用户名"></m-input>
				</view>
				<view class="uni-flex me-login-input">
					<uni-icon size="33" :type="'locked'" :color="'#007aff'"></uni-icon>
					<!-- <input class="me-login-username-input" type="password" displayable placeholder="请输入密码" v-model="password" maxlength="18"> -->
					<m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
				</view>
				<view class="reg-submit me-login-input" @tap="bindLogin">登录</view>
				<navigator style="z-index: 1;color: #2196f3;" url="../reg/reg">注册账号</navigator>
			</view>
		</view>
	</view>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';
	import Utils from '../../common/util.js'; 
    import mInput from '../../components/m-input.vue';
	import uniIcon from '../../components/uni-icon.vue';
    export default {
        components: {
			uniIcon,
            mInput
        },
        data() {
            return {
                userName: '',
                password: ''
            }
        },
        computed: {
			...mapState('modules/userinfo', ['forcedLogin'])
		},
        methods: {
            ...mapMutations('modules/userinfo', [ 'login' ]),
            bindLogin() {
                /**
                 * 客户端对账号信息进行一些必要的校验。
                 * 实际开发中，根据业务需要进行处理，这里仅做示例。
                 */
                if (this.userName.length < 4) {
                    uni.showToast({
                        icon: 'none',
                        title: '账号最短为 4 个字符'
                    });
                    return;
                }
                if (this.password.length < 6) {
                    uni.showToast({
                        icon: 'none',
                        title: '密码最短为 6 个字符'
                    });
                    return;
                }
				const timeStr = new Date().getTime(); // 时间戳
				const signature = Utils.getSignature(this.userName, Utils.getMD5Encrypt(this.password), timeStr); // 签名
				let data = {
					"userName": this.userName,
					"timeStr": timeStr,
					"signature": signature
				};
				let that = this;
				this.$hy_ajax({
					url: '/login',
					data: data,
					success: function (res) {
						let userInfo = res;
						if(userInfo) {
							if (userInfo.loginCode === "NOT FIND") {
								uni.showToast({
									icon: 'none',
									title: '用户账号或密码不正确',
								});
							} else {
								userInfo.pwd = Utils.getAESEncStr(that.password); // 存储加密的密码
								that.login(userInfo); 
								uni.showToast({
									icon: 'none',
									title: '登录成功!自动跳转中...',
								});
								//that.toMain();
							}
						}
					}
				})
            },
            toMain() {
                /**
                 * 强制登录时使用reLaunch方式跳转过来
                 * 返回首页也使用reLaunch方式
                 */
                if (this.forcedLogin) {
                    uni.reLaunch({
                        url: '../main/main',
                    });
                } else {
                    uni.navigateBack();
                }
            }
        },
        onLoad() {
        }
    }
</script>

<style>
	.me-image {
		width: 100%;
		position: absolute;
	}
	.me-login {
		display: flex;
		flex-direction: column;
		align-items:center;
		z-index: 1;
		padding-top: 100%;
	}
	.me-login-input {
		z-index: 1;
		margin: 30upx 10upx;
		width: 60%;
	}
	.reg-submit {
		display: block;
		margin-top: 30px;
		padding: 10px;
		text-align: center;
		color: white;
		border-radius: 23.5px;
		background-color: #2196f3;
		box-shadow: 0 0 10px rgba(51, 211, 201, .35);
	}
</style>
