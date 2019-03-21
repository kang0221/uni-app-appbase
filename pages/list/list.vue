<template>
	<view class="list-page">
		<view class="uni-padding-wrap uni-common-mt">
			<view class="text" v-for="(invitation,index) in data" :key="index">
				<view class="home-list-block-title">
					<view class="long-text-to-point">{{invitation.ppName}}</view>
				</view>
				<view>
					<view class="home-list-block-detail long-text-to-point">项目编号：{{invitation.ppCode}}  </view>
					<view class="home-list-block-detail long-text-to-point" v-if="invitation.pacName">标段：{{invitation.pacName}}  </view>
					<view class="home-list-block-detail">发布时间：{{invitation.inviteRepDate}}  </view>
				</view>
			</view>
			<view class="uni-loadmore" v-if="showLoadMore">{{loadMoreText}}</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				data: [],
				loadMoreText: "加载中...",
				showLoadMore: false,
				curPage: 1,
				maxPage: 1,
				pageSize: 20
			}
		},
		onLoad() {
			this.initData();
		},
		onUnload() {
			console.log('onUnload')
			this.data = [],
			this.loadMoreText = "加载更多",
			this.showLoadMore = false;
		},
		onReachBottom() {
			this.curPage += 1;
			this.showLoadMore = true;
			if(this.curPage <= this.maxPage) {
				this.loadMoreText = "加载中...";
				this.loadMoreDate();
			} else {
				this.loadMoreText = "没有更多数据了!";
				uni.showToast({
					icon: 'none',
					title: '已经到底啦'
				});
			}
			
		},
		onPullDownRefresh() {
			this.initData();
		},
		methods: {
			initData(){
				this.data = [];
				this.curPage = 1;
				this.pageSize  = 20;
				this.loadMoreDate();
			},
			loadMoreDate() {
				let param = {
					"curPage": this.curPage,
					"pageSize": this.pageSize,
					"ppName": "",
					"actionparam": "findArticle",
					"type": "ALL",
					"tenantld": "1000001",
					"unitId": "25"
				}
				let that = this; //防止this指向问题，这里备份一下vue实例的this，以便调用vue实例中的属性
				this.$hy_ajax({
					data: param,
					serviceName: that.$ApiList.xmyq,
					success: function (res) {
						that.maxPage = res.dataWrap2.pageInfo.allPageNum;
						that.data = [...that.data, ...res.dataWrap2.dataList];
					}
				})
				uni.stopPullDownRefresh();
			}
		}
	}
</script>

<style>
	.list-page {
		background: #fafafa;
	}
	.text {
		margin: 16upx 0;
		background-color: #fff;
		color: #555;
		border-radius: 8upx;
		padding: 20upx;
	}
	.home-list-block-title {
		border-bottom: 1px solid #f6f6f6;
		margin-bottom: 5px;
	}
	.home-list-block-detail {
		color: #aaa;
		font-size: 12px;
		line-height: 26px;
	}
</style>
