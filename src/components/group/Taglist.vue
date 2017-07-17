<template>
<div id="taglist">
	<div class="taglist_head">
		<router-link to="/group"><i class="iconfont icon-iconback"></i></router-link>
		<p>{{name}}</p>
	</div>
	<div class="shoplist">
		<div class="shop_goods" v-for="item in info">
			<div class="img_box">
				<router-link :to="{path:'/goodsInfo',query:{spRecordId:item.id,spUserId:item.userId}}"><img :src="item.imgUrl[0].url" alt="" /></router-link>
			</div>
			<div class="content_box">
				<div class="content_des">
					{{item.content}}
				</div>
			</div>
			<div class="goods_kind">
				<ul>
					<li v-for="i in item.tagList">
						<a href="">
							<img src="http://img.zhefengle.com/43983b69f440930de581886507c36225.jpg" alt="" />
							<span>{{i.tagName}}</span>
						</a>
					</li>
				</ul>
			</div>
			<div class="line"></div>
			<div class="user_btn">
				<div class="left_user">
					<a href="">
							<img :src="item.userAvatar"/>
							<span class="username">{{item.userName}}</span>
						</a>
				</div>
				<div class="right_user">
					<a href="javascript:void(0)">
						<i class="iconfont icon-moren_zuiinicon"></i>
						<span>
							{{item.commentNum}}
						</span>
					</a>
					<a href="javascript:void(0)">
						<i class="iconfont icon-shoucang"></i>
						<span>
							{{item.zanNum}}
						</span>
					</a>
					<a href="javascript:void(0)">
						<i class="iconfont icon-fenxiang"></i>
						<span>
							分享
						</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	export default{
		name:'taglist',
		data(){
			return{
				name:"",
				info:[]
			}
		},
		mounted(){
			this.$http.jsonp("https://h5api.zhefengle.cn/meiquan/get_show_product_for_search_tag.html?apiv=3&biz_channel=&historyRecordId=&page=1&tagId="+this.$route.query.id+"&token=Ab1GhPwYwirK7xi2-ukFjNQ&type=3").then(function (res) {
				
				this.name=res.data.model.tagName;
				this.info=res.data.model.rsList;
//				console.log(res.data.model.rsList);
			})
		}
	}
</script>

<style scoped="scoped">
#taglist{width: 100%;position: absolute;background: white;top: 0;z-index: 10001;min-height:33.3rem ;}
.taglist_head{    height: 2.2rem; line-height: 2.2rem;z-index: 999;background: #fff;border-bottom: 1px solid #eee;}
.taglist_head a{float: left;    display: block;padding: 0 .5rem;}
.taglist_head a i{    position: relative;margin-left: .4rem; height: 100%;display: inline-block;color: #999;font-size: 1.1rem;}
.taglist_head p{float: left;    height: 100%;overflow: hidden;padding: 0 5.5rem;font-size: .7rem;font-weight: 400;text-align: center;color: #333;}
.shoplist{background: #EEEEEE;}
.shop_goods{background: #fff;margin-bottom: .5rem;padding-top: .5rem;}
.img_box{width: 17.75rem;margin: 0 auto;position: relative;overflow: hidden;}
.img_box img{    display: block;width: 100%;}
.content_box{    padding: .5rem 0 .55rem;}
.content_des{color: #424242;font-size: .7rem;line-height: 1rem;width: 17.75rem;margin: 0 auto;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;}
.goods_kind{    padding-left: .75rem;padding-bottom: .75rem;margin-right: .75rem;overflow: hidden;}
.goods_kind ul li{ float: left;margin-right: .5rem;}
.goods_kind ul li a{font-size: .65rem;color: #f23f3f;display: block;overflow: hidden;}
.goods_kind ul li a img{float: left;height: .65rem; margin-right: .2rem;margin-top: .25rem;}
.goods_kind ul li a span{float: left;color: #f23f3f;margin-top: .1rem;}
.line{    margin-left: .75rem;margin-bottom: .75rem;width: 2.175rem;height: 1px;background: #333;}
.user_btn{    overflow: hidden;padding-bottom: .75rem;}
.left_user{    float: left; overflow: hidden;}
.left_user img{    float: left;width: 1rem;height: 1rem;margin-left: .75rem;margin-right: .25rem;background-size: 100%;display: block;border-radius: 50%;}
.username{ float: left;line-height: 1.1rem;font-size: .65rem;color: #333;}
.right_user{ float: right;margin-right: .75rem;}
.right_user a{overflow: hidden;float: left;height: 1.2rem;margin-left: .7rem; padding-left: .05rem;}
.right_user a i{float: left;font-size: .8rem;margin-top: .24rem;margin-right: .2rem;color: #999;}
.right_user a span{float: left;color: #999; font-size: .75rem;margin-top: .23rem;}
</style>