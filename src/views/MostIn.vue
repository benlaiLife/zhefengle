<template>
	<div id="mostIn">
		<div class="group_head">
			<span>最IN</span>
			<div class="head_right">
				<a href="#">
					<i class="iconfont icon-i-xiaoxi"></i>
				</a>
			</div>
		</div>
		<div class="wrapper">
			<div class="category">
				<ul class="clearfix">
					<li v-for="item in categoryList">
						<router-link :to="{path:'/categoryList',query:{type:item.menuName}}">
							<img :src="item.image" />
						</router-link>
					</li>
				</ul>
			</div>
			<div class="order_list">
				<ul>
					<li v-for="item in detail" class="detail_li">
						<router-link :to="{path:'/Article',query:{id:item.id}}">
							<div class="item_wrap clearfix">
								<div class="item_img">
									<img :src="item.coverImg" />
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
		</div>
	</div>
</template>

<script>
	export default {
		name: 'mostIn',
		data() {
			return {
				categoryList: {},
				detail: {}
			}
		},
		mounted() {
			this.$http.jsonp("https://h5api.zhefengle.cn/goodvalue/index_choice.html?apiv=3&biz_channel=&historyRecordId=0&limit=8&page=1&token=AT3B06AFlIz-TYGLUSLDl9k&type=1&typeName=").then(function(res) {
				this.categoryList = res.body.model.categoryList;
				this.detail = res.body.model.list;
			})
		}
	}
</script>

<style>
	.group_head {
		height: 100%;
		overflow: hidden;
		padding: 0 3rem;
		font-size: .7rem;
		font-weight: 400;
		text-align: center;
		color: #333;
		position: relative;
		height: 2.2rem;
		line-height: 2.2rem;
		z-index: 999;
		background: #fff;
		border-bottom: 1px solid #eee;
	}
	
	.head_right {
		right: 0;
		top: 0;
		text-align: right;
		background: 0 0;
		border: none;
		padding: 0 .5rem;
		position: absolute;
		color: #333;
		min-width: .75rem;
		height: 100%;
	}
	
	.head_right i {
		position: relative;
		margin-left: .4rem;
		height: 100%;
		display: inline-block;
		color: #999;
		font-size: 1.1rem;
	}
	
	.wrapper {
		width: 100%;
		padding-bottom: 1.5rem;
		margin-top: .025rem;
	}
	
	.category {
		overflow: hidden;
		overflow-x: scroll;
		width: 100%;
		background: #fff;
	}
	
	.category ul {
		display: block;
		overflow: hidden;
		padding: .375rem 0;
	}
	
	.category ul li {
		float: left;
		margin-left: .375rem;
		width: 5.75rem;
		height: 3.25rem;
	}
	
	.category ul li a {
		display: block;
		width: 5.75rem;
		height: 3.25rem;
		border: none;
		padding: 0;
	}
	
	.category ul li a img {
		width: 100%;
	}
	
	.order_list {
		margin-bottom: .5rem;
	}
	
	.detail_li {
		border: none;
		background: #fff;
		margin-top: .25rem
	}
	
	.item_wrap {
		width: 100%;
	}
	
	.item_img {
		width: 9.375rem;
		height: 6rem;
		float: left;
		margin-left: .4rem;
	}
	
	.item_img img {
		width: 100%;
	}
	
	.item_text {
		float: right;
		width: 8.875rem;
		height: 6rem;
		padding: .375rem 0 .5rem 0;
	}
	
	.item_title {
		width: 8.375rem;
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
	
	.author_date {
		color: #BBB;
		font-size: .5rem;
		margin-top: 1.4rem;
	}
	
	.buttons {
		margin-top: 0.6rem;
		width: 8.6rem;
		color: #bbb;
		font-size: .7rem;
		line-height: .9rem;
	}
	
	.buttons span:nth-of-type(2) {
		margin-left: 1.6rem;
	}
</style>