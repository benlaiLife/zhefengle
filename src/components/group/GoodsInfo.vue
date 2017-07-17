<template>
<div id="goodsInfo">
	<div class="taglist_head">
		<router-link to="/group"><i class="iconfont icon-iconback"></i></router-link>
		<p>{{userName}}</p>
	</div>
	<div class="goodsInfo_body">
		<div class="top_user">
			<div class="top_info">
				<div class="avater">
					<router-link :to="{path:'/userInfo',query:{userNum:this.$route.query.spUserId}}">
						<img :src="userAvatar" alt="" />
					</router-link>
				</div>
				<div class="showNum">
					<div class="in-top">晒单</div>
					<div class="in-bot">{{saidan}}</div>
				</div>
				<div class="fans">
					<div class="in-top">粉丝</div>
					<div class="in-bot">{{fansNum}}</div>
				</div>
				<div class="care">
					<a href="javascript:void(0)">
						<i class="iconfont icon-aishaiguanzhu"></i>
						关注
					</a>
				</div>
			</div>
			<div class="user_des">{{userDesc}}</div>
		</div>
		<div class="main_detail">
			<div class="img_box">
				<img :src="item.url" alt="" v-for="item in imgs"/>
			</div>
			<div class="content_box">{{content}}</div>
			<div class="bot_tag">
				<div class="tag_left">
					<ul>
						<li class="topic_li">
							<a href="javascript:void(0)">{{topic}}</a>
						</li>
						<li class="tag_li">
							<a href="javascript:void(0)" v-for="item in taglist">
								<img src="http://img.zhefengle.com/43983b69f440930de581886507c36225.jpg"/>
								<span>{{item.tagName}}</span>
							</a>
						</li>
					</ul>
				</div>
				<div class="right_zan">
					<a href="javascript:void(0)">
						<i class="iconfont icon-shoucang"></i>
						<span>{{zanNum}}</span>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="comment">
		<form action="" method="post">
			<div class="comment_input">
				<input type="" name="" id="" value="" placeholder="写评论..."/>
			</div>
			<div class="comment_right">
				<i class="iconfont icon-alt"></i>
			</div>
		</form>
	</div>
</div>
</template>

<script>
	export default{
		name:'goodsInfo',
		data(){
			return{
				userName:"",
				userAvatar:"",
				saidan:"",
				fansNum:"",
				userDesc:"",
				imgs:"",
				content:"",
				topic:"",
				taglist:"",
				zanNum:"",
				id:""
			}
		},
		mounted(){
			this.$http.jsonp("https://h5api.zhefengle.cn/meiquan/get_info_show_product.html?apiv=3&biz_channel=&content=&contentTell=%E5%86%99%E8%AF%84%E8%AE%BA...&op=1&page=1&spRecordId="+this.$route.query.spRecordId+"&spUserId="+this.$route.query.spUserId+"&token=Ab1GhPwYwirK7xi2-ukFjNQ&uToken=").then(function (res) {
				
				this.userName=res.data.model.userName;
				this.userAvatar=res.data.model.userAvatar;
				this.saidan=res.data.model.showProductNum;
				this.fansNum=res.data.model.fansNum;
				this.userDesc=res.data.model.userDesc;
				this.imgs=res.data.model.imgUrl;
				this.content=res.data.model.content;
				this.topic=res.data.model.topicName;
				this.taglist=res.data.model.tagList;
				this.zanNum=res.data.model.zanNum;
				this.id=this.$route.query.spUserId;
//				console.log(res.data.model);
			})
		}
	}
</script>

<style>
#goodsInfo{width: 100%;position: absolute;background: white;top: 0;z-index: 10001;min-height:33.3rem ;}
.taglist_head{    height: 2.2rem; line-height: 2.2rem;z-index: 999;background: #fff;border-bottom: 1px solid #eee;}
.taglist_head a{float: left;    display: block;padding: 0 .5rem;}
.taglist_head a i{    position: relative;margin-left: .4rem; height: 100%;display: inline-block;color: #999;font-size: 1.1rem;}
.taglist_head p{float: left;    height: 100%;overflow: hidden;padding: 0 5.5rem;font-size: .7rem;font-weight: 400;text-align: center;color: #333;}
.goodsInfo_body{padding-bottom: 1.8rem;background: #EEEEEE;}
.top_user{background: #fff;}
.top_info{width: 17.75rem;margin: 0 auto;overflow: hidden;position: relative;border-bottom: 1px solid #E1E1E1;}
.avater{float: left;margin: .75rem 1rem .75rem 0;}
.avater a{display: block;border-radius: 50%;}
.avater a img{width: 1.75rem;height: 1.75rem;border-radius: 50%;}
.showNum,.fans{float: left; color: #424242;font-size: .6rem;margin-top: .75rem;width: 1.8rem;text-align: center;margin-left: 0.5rem;}
.in-top{margin-bottom: .5rem;}
.care a{position: absolute; right: 0; top: .8rem;font-size: .7rem;display: inline-block;color: #e50039;border: 1px solid #e50039; border-radius: 4px; width: 3.6rem;height: 1.5rem; line-height: 1.5rem;text-align: center;}
.care a i{font-size: .6rem;margin-top: -.04rem;    color: #e3003b;display: inline-block; vertical-align: top;margin-right: .25rem;}
.user_des{width: 17.75rem;margin: 0 auto;padding: .75rem 0;font-size: .7rem;color: #424242;}
.main_detail{background: white;    margin-top: .5rem; padding: .5rem;background: #fff;}
.img_box{position: relative;overflow: hidden;}
.img_box img{display: block;width: 100%;    margin-bottom: .5rem;}
.content_box{ padding: 0 0 .75rem; color: #424242;font-size: .7rem;line-height: 1rem;}
.bot_tag{overflow: hidden;padding-left: 0;margin-bottom: .55rem;}
.tag_left{float: left;width: 14rem;margin-top: -.15rem;margin-right: .75rem;}
.tag_left ul{min-width: 375px;}
.tag_left ul li{float: left;margin-right: .5rem;}
.tag_left ul li a{font-size: .65rem;color: #333;}
.tag_li a{font-size: .65rem;color: #f23f3f;display: block;overflow: hidden;}
.tag_li a img{float: left;height: .65rem;margin-right: .2rem;margin-top: .25rem;}
.tag_li a span{float: left;color: #f23f3f;margin-top: .1rem;}
.right_zan{float: right;margin-top: -.1rem;}
.right_zan a{font-size: .9rem;color: #999;display: block;height: 1rem; line-height: 1rem;overflow: hidden; padding-left: .05rem;}
.right_zan a i{    font-size: .8rem;float: left;margin-right: .25rem;margin-top: .1rem;}
.right_zan a span{    float: left;line-height: 1.1rem;font-size: .7rem;}
.comment{    position: fixed;left: 0;bottom: 0;z-index: 999;width: 100%;height: 2.5rem;background: #f6f6f6;border-top: 1px solid #cecece;}
.comment form{    position: relative;text-align: right;margin: 0 auto;height: 1.75rem;line-height: 1.75rem;}
.comment_input{position: absolute;left: .05rem;top: .35rem;right: 2.5rem;bottom: 0;height: 100%;}
.comment_input input{    width: 100%;font-size: .85rem;margin: 0 -.5rem;padding: .25rem .5rem;border: 1px solid #bebebe;border-radius: 4px;}
.comment_right{width: 2.5rem;display: inline-block;}
.comment_right i{margin-right: .5rem;line-height: 2.5rem;font-size: 1rem;}
</style>