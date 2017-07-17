<template>
	<div id="userInfo">
		<div class="friend_info">
			<a href="javascript:void(0)" class="left_back" @click="back">
				<i class="iconfont icon-back"></i>
			</a>
			<a href="javascript:void(0)" class="right_menu">...</a>
			<div class="user_img">
				<div class="img_lay">
					<img :src="data.userAvatar" />
				</div>
				<h4>{{data.userName}}</h4>
				<p>{{data.userSummary}}</p>
				<div class="user_content">
					<router-link :to="{path:'/fans',query:{userNum:this.id,care:'他的好友'}}">关注<span>{{data.followNum}}</span><i>|</i></router-link>
					<router-link :to="{path:'/fans',query:{userNum:this.id,care:'他的粉丝'}}">粉丝<span>{{data.fansNum}}</span></router-link>
				</div>
			</div>

		</div>
		<div class="love_list">
			<div class="list_item" v-for="item in listInfo">
				<div class="review_user">
					<span><i class="iconfont icon-gerenzhuyeshijian"></i>{{item.createTime}}</span>
				</div>
				<div class="user_goods">
					<div class="goods_img">
						<a href="" v-for="i in item.imgUrl"><span><img :src="i.url"/></span></a>
					</div>
					<div class="user_tell">
						{{item.content}}
					</div>
				</div>
				<div class="user_share">
					<a href="javascript:void(0)" class="user_share_left">
						<i class="iconfont icon-fenxiang"></i>
					</a>
					<a href="javascript:void(0)" class="user_share_zan"><i class="iconfont icon-shoucang"></i>{{item.zanNum}}</a>
					<a href="javascript:void(0)" class="user_share_zan"><i class="iconfont icon-i-xiaoxi"></i>{{item.commentNum}}</a>
				</div>
			</div>
		</div>
		<div class="user_bot">
			<a href="javascript:void(0)" @click="addCare(listInfo)"><i class="iconfont icon-aishaiguanzhu"></i>关注</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'userInfo',
		data() {
			return {
				id: "",
				data: "",
				listInfo: ""
			}
		},
		methods: {
			back: function() {
				window.history.go(-1)
			},
			addCare: function(list) {
				if(!window.localStorage) {
					alert("浏览器支持localstorage");
					return false;
				} else {
					var obj = JSON.parse(localStorage.getItem('userGood'));
					//如果之前错过东西,那么这个obj就不为空,就直接往obj里面添加新的键值对
					if(obj) {
//						判断该用户有没有关注过
						var flag;
						for(var a = 0; a < obj.length; a++) {
							for(var b = 0; b < list.length; b++) {
								if(obj[a].userId == list[b].userId) {
									flag=false;
								} else {
									flag=true;
								}
							}
						}
						if(flag==true){
							for(var i = 0; i < list.length; i++) {
										obj.push(list[i]);
									}
						}else if(flag==false){
							alert("您已经过关注此用户了~")
						}

					} else {
						//如果obj是空的,就证明这是第一次存值,就要新建一个obj
						obj = list;
						//                      obj.push(list)
					}
					localStorage.setItem('userGood', JSON.stringify(obj));
//					                  localStorage.clear();
//					console.log(JSON.parse(localStorage.getItem('userGood')));
				}
			}
		},
		mounted() {

			this.id = this.$route.query.userNum;
			this.$http.jsonp("https://h5api.zhefengle.cn/meiquan/home_page.html?apiv=3&op=3&targetUserId=" + this.id + "").then(function(res) {
				this.data = res.data.model;
			});
			this.$http.jsonp("https://h5api.zhefengle.cn/meiquan/home_page.html?apiv=3&biz_channel=&op=2&page=1&targetUserId=" + this.id + "&targetUserToken=&token=Ab1GhPwYwirK7xi2-ukFjNQ").then(function(res) {
				this.listInfo = res.data.model.list
				//				console.log(this.listInfo);
			});
		}
	}
</script>

<style>
	#userInfo {
		min-height: 33.3rem;
		padding-bottom: 1.5rem;
		z-index: 10000;
		background: #EEEEEE;
		position: relative;
	}
	
	.friend_info {
		position: relative;
		background: #ff5454;
		height: 10rem;
	}
	
	.left_back {
		left: .5rem;
		position: absolute;
		color: #fff;
		top: .5rem;
	}
	
	.right_menu {
		right: .5rem;
		font-size: 1.2rem;
		position: absolute;
		color: #fff;
		top: .5rem;
	}
	
	.user_img {
		position: absolute;
		top: 30%;
		left: 0;
		text-align: center;
		width: 100%;
		height: 3.75rem;
		margin-top: -1.5rem;
	}
	
	.img_lay {
		display: inline-block;
		width: 2.75rem;
		height: 2.75rem;
		border-radius: 50%;
		border: 3px solid #fff;
		overflow: hidden;
	}
	
	.img_lay img {
		display: block;
		width: 100%;
	}
	
	.user_img h4 {
		color: #fff;
		font-size: .85rem;
		margin-top: .25rem;
		text-shadow: 0 0.05rem 0.05rem rgba(0, 0, 0, .5);
	}
	
	.user_img p {
		font-size: .65rem;
		margin: .5rem 0 .35rem;
		display: block;
		color: #fff;
		text-shadow: 0 0.05rem 0.05rem rgba(0, 0, 0, .4);
	}
	
	.user_content a {
		font-size: .7rem;
		color: #fff;
		text-shadow: 0 0.05rem 0.05rem rgba(0, 0, 0, .4);
	}
	
	.user_content a span {
		margin-left: .5rem;
	}
	
	.user_content a i {
		margin: 0 .25rem;
		font-style: normal;
	}
	
	.list_item {
		margin-top: .5rem;
		background: #fff;
		position: relative;
	}
	
	.review_user {
		padding: .25rem;
		border-bottom: 1px solid #eee;
		margin-bottom: .25rem;
		position: relative;
	}
	
	.review_user span {
		font-size: .65rem;
		color: #999;
	}
	
	.user_goods {}
	
	.goods_img {
		overflow: hidden;
		margin-bottom: -.5rem;
		padding: 0 .5rem;
	}
	
	.goods_img a {
		height: 120px;
		margin-right: 5px;
	}
	
	.goods_img a span img {
		display: inline-block;
		height: 110px;
	}
	
	.user_tell {
		padding: 0 .5rem;
		font-size: .7rem;
		word-break: break-all;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		margin: .3rem 0 .4rem;
	}
	
	.user_share {
		text-align: right;
		padding: .25rem .75rem .5rem .5rem;
		line-height: 1.3rem;
		margin-bottom: .2rem;
		overflow: hidden;
	}
	
	.user_share_left {
		float: left;
		font-size: .7rem;
		margin-top: .1rem;
		margin-left: .1rem;
		line-height: 1.3rem;
	}
	
	.user_share_left i {
		margin-right: .25rem;
		color: #666;
	}
	
	.user_share_zan {
		font-size: .65rem;
		margin-left: .5rem;
	}
	
	.user_share_zan i {
		font-size: 1rem;
		margin-right: .25rem;
		color: #666;
	}
	
	.user_bot {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2rem;
		text-align: center;
		background: #fafafa;
		line-height: 2rem;
		border-top: 1px solid #ddd;
		z-index: 10000;
	}
	
	.user_bot a {
		width: 100%;
		display: inline-block;
		font-size: .8rem;
		color: #666;
	}
	
	.user_bot a i {
		margin-right: .125rem;
		font-size: .65rem;
		color: #e1002c;
		line-height: .35rem;
		display: inline-block;
		vertical-align: middle;
		margin-top: -.25rem;
	}
	
	/*#tab {
		display: none;
	}*/
</style>