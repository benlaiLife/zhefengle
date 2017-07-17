<template>
	<!--<router-view></router-view>-->
	<div id="choiceness">
		<div class="tabList">
			<div class="tag_box">
				<ul>
					<li v-for="item in tab">
						<router-link :to="{path:'/taglist',query:{id:item.tagId}}">
							<img :src="item.indexImg" alt="" />
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<scroller 
              :on-infinite="infinite"
              style="margin-top: 8rem;">
		<div class="content">
			<div class="choice" v-for="item in choice">
				<div class="img_box">
				<router-link :to="{path:'/goodsInfo',query:{spRecordId:item.id,spUserId:item.userId}}">
					<img :src="item.imgUrl[0].url" alt="" />
				</router-link>
				<div class="tag_shop" v-if="item.shareList[0]">
					<router-link :to="{ path:'/shopdetail', query: { id1: item.shareList[0].shareId} }" href="" class="goodsName">
						<i class="iconfont icon-gouwuche"></i>
						<span class="goods_name">{{item.shareList[0].itemTitle}}</span>
						<span class="goods_price">¥{{item.shareList[0].price}}</span>
					</router-link>
				</div>
			</div>
				<div class="aticle">
					<div class="aticle_main">
						<a href="">{{item.content}}</a>
					</div>
				</div>
				<p class="tag">
						<router-link :to="{path:'/taglist',query:{id:item.tagList[0].tagId}}" v-if="item.tagList">
							<img src="../../assets/imgs/arrow.jpg"/>
							<span >{{item.tagList[0].tagName}}</span>
						</router-link>
					</p>
				<div class="line"></div>
				<div class="user_info">
					<div class="left_user">
						<router-link :to="{path:'/userInfo',query:{userNum:item.userId}}">
							<img :src="item.userAvatar"/>
							<span class="username">{{item.userName}}</span>
						</router-link>
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
	</scroller>
	</div>
</template>

<script>
	export default{
		name:'choiceness',
		data(){
			return{
				tab:{},
				choice:[],
				page:"",
				p:""
			}
		},
		mounted(){
			this.p=1;
			this.$http.jsonp("https://h5api.zhefengle.cn/meiquan/get_show_product_for_boutique.html?apiv=3&biz_channel=&historyRecordId=&page=1&token=Ab1GhPwYwirK7xi2-ukFjNQ&type=1").then(function (res) {
				this.tab=res.body.model.tagList;
				this.choice=res.body.model.rsList;
//				this.shop=res.body.model.rsList.[8].shareList
//				console.log(this.choice);
			})
		},
		methods:{
			   infinite: function (done) {
        this.p++;
//      console.log(this.p,this.page);
	           this.$http.jsonp("https://h5api.zhefengle.cn/meiquan/get_show_product_for_boutique.html?apiv=3&biz_channel=&historyRecordId=254402&page="+this.p+"&token=Ab7BOikvTx8GHgQSEBB-W0c&type=1")
	             .then(function (mes) {
	               var self = this
	               setTimeout(function () {
	                 for (var i = 1; i <  20; i++) {
	                   self.choice.push(mes.body.model.rsList[i]);
	                 }
	                 done();
	               }, 1500)
	             });
      }
		}
	}
</script>

<style scoped="scoped">
#outer-ynmbj{    margin-top: 8rem;}
.content{    background: #eee;}
.tabList{    border-top: 1px solid #eee;padding: .5rem 0;width: 100%;background: #eee;}
.tag_box{    width: 100%;overflow-x: scroll;}
.tag_box ul{   min-width: 790px;}
.tag_box ul li{float: left;background: #fff;margin-left: .5rem;}
.tag_box ul li a{    display: block;width: 5rem;}
.tag_box ul li a img{width: 5rem;border-radius: .1rem;float: left;}
.choice{background: #fff;margin-bottom: .5rem;padding-top: .5rem;}
.img_box{width: 17.75rem; margin: 0 auto;position: relative;overflow: hidden;}
.img_box img{border-radius: .1rem;display: block;width: 100%;}
.aticle{    padding: .5rem 0 .55rem;}
.aticle_main{    color: #424242;font-size: .7rem; line-height: 1rem;width: 17.75rem; margin: 0 auto;overflow: hidden;text-overflow: ellipsis;display: -webkit-box; -webkit-line-clamp: 3;-webkit-box-orient: vertical;}
.aticle_main a{font-size: .7rem;line-height: 1rem;text-align: left;}
.tag{ margin-left: .5rem;    margin-bottom: .75rem;}
.tag a{    font-size: .65rem;color: #f23f3f;display: block;overflow: hidden;}
.tag a img{float: left;height: .65rem;margin-right: .2rem;margin-top: .25rem;}
.line{    margin-left: .75rem;margin-bottom: .75rem; width: 2.175rem;height: 1px; background: #333;}
.user_info{overflow: hidden;padding-bottom: .75rem;}
.left_user{    float: left; overflow: hidden;}
.left_user img{    float: left;width: 1rem;height: 1rem;margin-left: .75rem;margin-right: .25rem;background-size: 100%;display: block;border-radius: 50%;}
.username{    float: left;line-height: 1.1rem;font-size: .65rem;color: #333;}
.right_user{ float: right;margin-right: .75rem;}
.right_user a{overflow: hidden;float: left;height: 1.2rem;margin-left: .7rem; padding-left: .05rem;}
.right_user a i{float: left;font-size: .8rem;margin-top: .24rem;margin-right: .2rem;color: #999;}
.right_user a span{float: left;color: #999; font-size: .75rem;margin-top: .23rem;line-height: 1.2rem;}
.tag_shop{position: absolute;left: 154.1px;top: 134px;}
.tag_shop a{display: inline-block;font-size: .6rem;color: #333;background: rgba(255,255,255,.8);padding: 0 .5rem; height: 1.1rem;line-height: 1.1rem;border-radius: .875rem;}
.tag_shop a i{float: left;font-size:1rem!important;margin-right: .2rem;margin-top: .05rem;}
.goods_name{max-width: 4.1rem;float: left;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;word-wrap: normal;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.goods_price{color: #DD002C;margin-left: .2rem;float: left;}
.shop_name{    clear: both;
    margin-top: -.12rem;    max-width: 7.3rem;    margin-bottom: .25rem;    display: inline-block;    font-size: .6rem;
    color: #333;
    background: rgba(255,255,255,.8);
    padding: 0 .5rem;
    height: 1.1rem;
    line-height: 1.1rem;
    border-radius: .875rem;    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;}
</style>
