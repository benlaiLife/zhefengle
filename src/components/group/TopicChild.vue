<template>
<div id="topicChild">
	<div class="taglist_head">
		<router-link to="/topic"><i class="iconfont icon-iconback"></i></router-link>
		<p>{{data.topicName}}</p>
	</div>
	<div class="topic_body">
		<div class="imgbox">
			<img :src="data.topicImgUrl"/>
		</div>
		<div class="desc">{{data.topicDesc}}</div>
		<div class="topic_join">
			<div class="left_join">已参与<i>{{data.participants}}</i>人</div>
			<div class="right_join"  >
				<router-link :to="{path:'/userInfo',query:{userNum:item.userId}}" v-for="(item,key) in data.userList" v-if="key<5&&item.userAvatar">
					<img :src="item.userAvatar"/>
				</router-link>
				<a href="">
					<img src="http://img.zhefengle.com/a1b28f316aea8e217353cf022eb7f3f5.png" alt="" v-if="length>=5"/>
				</a>
			</div>
		</div>
		<div class="topic_choice">
			<ul>
				<li v-for="item in imgs">
				<router-link :to="{path:'/goodsInfo',query:{spRecordId:item.spRecordId,spUserId:item.spUserId}}"><img :src="item.imgUrl[0].url"/></router-link ></li>
			</ul>
		</div>
	</div>
</div>
</template>

<script>
	export default{
		name:'topicChild',
		data(){
			return{
				data:"",
				length:"",
				imgs:""
			}
		},
		mounted(){
		this.$http.jsonp("https://h5api.zhefengle.cn/meiquan/get_topic_detail.html?apiv=3&biz_channel=&historyRecordId=&page=1&token=Ab1GhPwYwirK7xi2-ukFjNQ&topicId="+this.$route.query.topicId+"").then(function (res) {
			this.data=res.data.model;
			this.length=this.data.userList.length;
			this.imgs=res.data.model.showProductList;
//			res.data.model.showProductList["0"].imgUrl["0"].url
//			console.log(this.imgs);
		})
	}
	
	}
</script>

<style scoped="scoped">
	#topicChild{width: 100%;position: absolute;background: white;top: 0;z-index: 10001;min-height:33.3rem ;}
	.taglist_head{    height: 2.2rem; line-height: 2.2rem;z-index: 999;background: #fff;border-bottom: 1px solid #eee;}
.taglist_head a{float: left;    display: block;padding: 0 .5rem;}
.taglist_head a i{    position: relative;margin-left: .4rem; height: 100%;display: inline-block;color: #999;font-size: 1.1rem;}
.taglist_head p{height: 100%;overflow: hidden;font-size: .7rem;font-weight: 400;text-align: center;color: #333;}
.imgbox img{display: block;width: 100%;}
.desc{padding: .55rem .75rem;color: #424242;font-size: .7rem;line-height: .9rem;}
.topic_join{overflow: hidden;margin-top: .5rem;padding-bottom: 1rem;}
.left_join{float: left;color: #424242;font-size: .7rem; margin-right: .25rem;margin-left: .75rem;height: 1.75rem;line-height: 1.75rem;}
.left_join i{    color: #E31E32;    font-style: normal;}
.right_join{float: left;overflow: hidden;}
.right_join a{float: left;width: 1.75rem;height: 1.75rem;margin-left: .5rem;border-radius: 50%;}
.right_join a img{    display: block; width: 100%;    border-radius: 50%;}
.topic_choice{margin-top: 1rem;padding-bottom: 1rem;}
.topic_choice ul{    overflow: hidden;}
.topic_choice ul li{    float: left;width: 32.8%;margin-right: .075rem;margin-bottom: .075rem;}
.topic_choice ul li a{display: block;}
.topic_choice ul li a img{display: block;width: 100%;}
</style>