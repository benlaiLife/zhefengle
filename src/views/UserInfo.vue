<template>
	<div id="userInfo">
		<div class="friend_info">
			<a href="javascript:void(0)" class="left_back">
				<i class="iconfont icon-back"></i>
			</a>
			<a href="javascript:void(0)" class="right_menu">...</a>
			<div class="user_img">
				
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'userInfo',
		data(){
			return{
				id:""
			}
		},
		mounted(){
			
			this.id=this.$route.query.userNum;
			this.$http.jsonp("https://h5api.zhefengle.cn/meiquan/home_page.html?apiv=3&op=3&targetUserId="+this.id+"").then(function  (res) {
				console.log(res);
			})
		}
	}
</script>

<style>
#userInfo{min-height: 66.7rem;padding-bottom: 1.5rem;}
.friend_info{position: relative;background: #ff5454;height: 10rem;}
.left_back{left: .5rem;position: absolute;color: #fff;top: .5rem;}
.right_menu{right: .5rem;font-size: 1.2rem;position: absolute;color: #fff; top: .5rem;}
.user_img{position: absolute;top: 30%;left: 0; text-align: center;width: 100%;height: 3.75rem;margin-top: -1.5rem;}
</style>