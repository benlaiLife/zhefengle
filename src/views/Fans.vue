<template>
<div id="fans">
	<div class="taglist_head">
		<a href="javascript:void(0)" @click="back"><i class="iconfont icon-iconback"></i></a>
		<p>{{this.$route.query.care}}</p>
	</div>
	<ul class="friends">
		<li v-for="item in data">
			<router-link :to="{path:'/userInfo',query:{userNum:item.userId}}">
				<a href="" class="img-lay"><img :src="item.userAvatar"/></a>
			<div class="info-lay">
				<div class="info">
					<em>{{item.userName}}</em>
					<p>{{item.userSummary}}</p>
				</div>
			</div>
			</router-link>
		</li>
	</ul>
</div>
</template>

<script>
	export default{
		name:'fans',
		data(){
			return{
				data:""
			}
		},
		mounted(){
			if(this.$route.query.care=="他的好友"){
				this.$http.jsonp("https://h5api.zhefengle.cn/meiquan/user_rel.html?biz_channel=&op=10&page=1&targetUserId="+this.$route.query.userNum+"&token=Ab7BOikvTx8GHgQSEBB-W0c&total=1").then(function (res) {
				this.data=res.data.model.list;
//				console.log(res.data.model.list);
			})
			}else if(this.$route.query.care=="他的粉丝"){
				this.$http.jsonp("https://h5api.zhefengle.cn/meiquan/user_rel.html?biz_channel=&op=11&page=1&targetUserId="+this.$route.query.userNum+"&token=Ab7BOikvTx8GHgQSEBB-W0c&total=1").then(function (res) {
				this.data=res.data.model.list;
//				console.log(res.data.model.list);
			})
			}
			
		},
		methods:{
			back:function  () {
				window.history.go(-1)
			}
		}
	}
</script>

<style>
#fans{min-height: 33.3rem;padding-bottom: 1.5rem;z-index: 10000;background: #EEEEEE;position: relative;}
.taglist_head{    height: 2.2rem; line-height: 2.2rem;z-index: 999;background: #fff;border-bottom: 1px solid #eee;}
.taglist_head a{float: left;    display: block;padding: 0 .5rem;}
.taglist_head a i{    position: relative;margin-left: .4rem; height: 100%;display: inline-block;color: #999;font-size: 1.1rem;}
.taglist_head p{float: left;    height: 100%;overflow: hidden;padding: 0 5.5rem;font-size: .7rem;font-weight: 400;text-align: center;color: #333;}
.friends{margin-top: .5rem;display: block;background: #fff;}
.friends li{    position: relative;height: 3.9rem; overflow: hidden;border-top: 1px solid #eee;display: block;padding: 0 .5rem;}
.img-lay {float: left;margin-top: .5rem;margin-bottom: .25rem;}
.img-lay img{    width: 2.25rem;height: 2.25rem;border-radius: 50%;font-size: 1.125rem;line-height: 2.25rem;}
.info-lay{line-height: 1rem;margin-top: .5rem;padding-left: 3rem;font-size: .75rem; color: #333;}
 .info{padding-right: 1.5rem;overflow: hidden;}
.info em{font-size: .75rem;line-height: 1.3rem;    font-style: normal;}
 .info p{font-size: .7rem;color: #999;height: 1rem;overflow: hidden;padding-right: 2.5rem;}
/*.friends li*/
</style>