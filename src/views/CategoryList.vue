<template>
	<div id="categoryList">
		<div class="login_top">
			<a href="JavaScript:history.back(-1)" class="left"><i class="fa fa-angle-left" aria-hidden="true" ref="icon"></i></a>
			<h1 class="main">{{this.$route.query.type}}</h1>
		</div>
		<scroller :on-refresh="refresh"
              		:on-infinite="infinite"
             		 style="padding-top: 2.2rem;">
		<div class="order_list">
			<ul>			
				<li v-for="item in detail" class="detail_li">
						<router-link :to="{path:'/Article',query:{id:item.id}}">
						<div class="item_wrap clearfix">
							<div class="item_img">
								<img :src="item.coverImg"/>
							</div>
							<div class="item_text">
								<div class="item_title">{{item.title}}</div>
								<div class="author_date">{{item.itemPlatformName}}/{{item.publishTime}}</div>
								<div class="buttons">
									<span><i class="fa fa-commenting-o" aria-hidden="true"></i>{{item.commentNum}}</span><span><i class="fa fa-heart-o" aria-hidden="true"></i>{{item.zanNum}}</span>					
								</div>
							</div>
						</div>					
					</router-link>
				</li>
				
			</ul>
		</div>
		 </scroller>
	</div>
</template>

<script>
	export default{
		name:"categoryList",
		data(){
			return{
				detail:[],
				p:"",
				page:"",
				id:"",
				len:""
			}
		},
		mounted(){
			this.p=1;
			this.$http.jsonp("https://h5api.zhefengle.cn/goodvalue/index_choice.html?apiv=3&biz_channel=&historyRecordId=0&limit=8&page=1&token=AT3B06AFlIz-TYGLUSLDl9k&type=1&typeName="+this.$route.query.type).then(function (res) {
				this.detail = res.body.model.list;
				this.id= res.body.model.list[0].id;
				this.len = res.body.model.list.length;			
			})
		},
		methods:{
			 refresh: function (done) {

      		},
			infinite:function(done){
				this.p++;			
				this.$http.jsonp("https://h5api.zhefengle.cn/goodvalue/index_choice.html?apiv=3&biz_channel=&historyRecordId="+this.id+"&limit=8&page="+this.p+"&token=AT3B06AFlIz-TYGLUSLDl9k&type=1&typeName="+this.$route.query.type).then(function(res){
					var self = this;
					setTimeout(function () {
		                 for (var i = 0; i < self.len; i++) {
		                   self.detail.push(res.body.model.list[i]);
		                 }
		                 done();
		             }, 1500)
				})
			}
		}
	}
</script>

<style>
	.login_top{
		width:100%;
		height: 2.2rem;
		line-height: 2.2rem;
		z-index:999;
		background: #fff;
    	border-bottom: 1px solid #eee;
    	position: relative;
	}
	.login_top .left{
		left: 0;
		top: 0;
		position: absolute;
	    text-align: left;
	    font-size: .7rem;
	    color: #333;
	    min-width: .75rem;
	    height: 100%;
	}
	.login_top .left i{
		position: relative;
	    margin-left: .4rem;
	    height: 100%;
	    display: inline-block;
	    color: #999;
	    font-size: 1.1rem;
	}
	.login_top .main{
		height: 100%;
    	overflow: hidden;
    	padding: 0 3rem;
    	font-size: .7rem;
    	font-weight: 400;
    	text-align: center;
    	color: #333;
	}
	.order_list{
	margin-bottom: .5rem;
	}
	.detail_li{
		border: none;
	    background: #fff;
	    margin-top: .25rem;
	}
	.item_wrap{
		width: 100%;
	}
	.item_img{
		width: 9.375rem;
	    height: 6rem;
		float: left;
		margin-left: .4rem;
	}
	.item_img img{
		width:100%;
	}
	.item_text{
		float: right;
		width: 8.875rem;
	    height: 6rem;
	    padding: .375rem 0 .5rem 0;
	    position:relative;
	}
	.item_title{
		width:8.375rem;
		font-size: .65rem;
		color: #333;
		max-height: 2.6rem;
		margin-bottom: .75rem;
	    line-height: .9rem;
	    -webkit-line-clamp: 3;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}
	.author_date{
		color: #BBB;
	    position: absolute;
	    top: 2.37rem;
	    left: 0.1rem;
	    font-size: .5rem;
	}
	.buttons{
		margin-top: 0.4rem;
	    width: 8.6rem;
	    color: #bbb;
	    font-size: .7rem;
	    line-height: .9rem;
	    position: absolute;
	    top: 4.37rem;
	    left: 0.1rem;
	}
	.buttons span:nth-of-type(2){
		margin-left: 1.6rem;
	}
</style>