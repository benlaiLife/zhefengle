<template>
	<div id="attention">
		<div class="att_empty" v-if="!list">
			<div id="">
				<img src="http://img.zhefengle.com/11b2f4c5d6558751054d69d5e7205c3d.png"/>
				<p>还没有爱晒文章哦</p>
			</div>
		</div>
		<div class="shoplist" v-if="list">
		<div class="shop_goods" v-for="item in list">
			<div class="img_box">
				<div class="tag_shop" v-if="item.shareList[0]">
					<router-link :to="{ path:'/shopdetail', query: { id1: item.shareList[0].shareId} }" href="" class="goodsName">
						<i class="iconfont icon-gouwuche"></i>
						<span class="goods_name">{{item.shareList[0].itemTitle}}</span>
						<span class="goods_price">¥{{item.shareList[0].price}}</span>
					</router-link>
				</div>
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
		name:'attention',
		data(){
			return{
				list:""
			}
			
		},
		mounted(){
			this.list=JSON.parse(localStorage.getItem('userGood'))
			console.log(this.list);
		}
	}
	
</script>

<style>
	.att_empty>div{    padding: 0;
    width: 5.125rem;
    height: 5.8rem;
    position: absolute;
    top: 50%;
    margin-top: -2.9rem;
    left: 50%;
    margin-left: -2.5625rem;}
    .att_empty>div img{    display: block;
    width: 4.25rem;
    margin: 0 auto;}
        .att_empty>div p{    margin-top: .925rem;
    font-size: .6rem;
    color: #878787;
    width: 100%;
    text-align: center;
    margin-bottom: 1.75rem;}
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
.tag_shop{position: absolute;left: 154.1px;top: 134px;}
.tag_shop a{display: inline-block;font-size: .6rem;color: #333;background: rgba(255,255,255,.8);padding: 0 .5rem; height: 1.1rem;line-height: 1.1rem;border-radius: .875rem;}
.tag_shop a i{float: left;font-size:1rem!important;margin-right: .2rem;margin-top: .05rem;}
.goods_name{max-width: 4.1rem;float: left;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;word-wrap: normal;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.goods_price{color: #DD002C;margin-left: .2rem;float: left;}
.shop_name{    clear: both;margin-top: -.12rem;    max-width: 7.3rem;    margin-bottom: .25rem;    display: inline-block;    font-size: .6rem;color: #333; background: rgba(255,255,255,.8); padding: 0 .5rem;height: 1.1rem;line-height: 1.1rem;border-radius: .875rem;    overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;}
</style>