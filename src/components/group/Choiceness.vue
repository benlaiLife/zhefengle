<template>
	<div id="choiceness">
		<div class="tabList">
			<div class="tag_box">
				<ul>
					<li v-for="item in tab"><a href=""><img :src="item.indexImg" alt="" /></a></li>
				</ul>
			</div>
		</div>
		<div class="content">
			<div class="choice" v-for="item in choice">
				<div class="img_box">
				<a href="">
					<img :src="item.imgUrl[0].url" alt="" />
				</a>
			</div>
				<div class="aticle">
					<div class="aticle_main">
						<a href="">{{item.content}}</a>
					</div>
				</div>
				<p class="tag">
						<a href="" v-if="item.tagList">
							<img src="../../assets/imgs/arrow.jpg"/>
							<span >{{item.tagList[0].tagName}}</span>
						</a>
					</p>
				<div class="line"></div>
				<div class="user_info">
					<div class="left_user">
						<a href="">
							<img :src="item.userAvatar"/>
							<span class="username">{{item.userName}}</span>
						</a>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'choiceness',
		data(){
			return{
				tab:{},
				choice:{}
			}
		},
		mounted(){
			this.$http.jsonp("https://h5api.zhefengle.cn/meiquan/get_show_product_for_boutique.html?apiv=3&biz_channel=&historyRecordId=&page=1&type=1").then(function (res) {
				this.tab=res.body.model.tagList;
				this.choice=res.body.model.rsList;
				console.log(this.choice);
			})
		}
	}
</script>

<style>
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
</style>