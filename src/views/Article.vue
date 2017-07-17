<template>
	<div id="article">
		<div class="login_top">
			<a href="JavaScript:history.back(-1)" class="left"><i class="fa fa-angle-left" aria-hidden="true" ref="icon"></i></a>
			<h1 class="main">正文</h1>
		</div>
		<div class="mainhd">
			<div class="info">
				<h2 class="title_text">{{arr.title}}</h2>
			</div>
			<div class="place_of">
				<div class="left_author">
					<span>作者<i>|</i></span>
					<label>{{arr.itemPlatformName}}</label>
				</div>
				<div class="right_hour">
					{{arr.publishTime}}
				</div>
			</div>
		</div>
		<div v-html="arr.content">
		</div>
		<section>
			<div class="praise_lay">
				<a href="javascript:void(0)" class="praise">赞</a>
				<p class="text_num">已有{{arr.zanNum}}人点赞</p>
			</div>
		</section>
		<section class="commentImg">
			<img class="sfimg" src="http://img.zhefengle.com/b07d7404a02aacc6c6387ff3c768f07c.jpg"/>
		</section>
		<section>
			<div class="comment">
				<form class="comment_main baseformbar">
					<div class="comment_input">
						<input type="text" placeholder="写评论..."/>
					</div>
					<div class="comment_right basebar">
						<a href="javascript:void(0)" class="numLink">
							<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
						</a>
						<a href="javascript:void(0)">
							<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
						</a>
					</div>
				</form>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: "article",
		data() {
			return {
				arr: {}
			}
		},
		mounted() {
			this.$http.jsonp("https://h5api.zhefengle.cn/goodvalue/get_info_choice.html?apiv=3&biz_channel=&choiceId=" + this.$route.query.id + "&limit=4&token=AT3B06AFlIz-TYGLUSLDl9k").then(function(res) {
				this.arr = res.body.model;
				console.log(this.arr);
			})
		}
	}
</script>
<!--<link rel="stylesheet" href="http://waptest2.zhefengle.cn/appresource/tinymce3.min.css"/>-->
<style>	
	@import url("http://waptest2.zhefengle.cn/appresource/tinymce3.min.css");
	#article{
		background: #FFF;
		margin-bottom: 0.5rem;
		position: relative;
		z-index: 1001;
	}
	.login_top {
		width: 100%;
		height: 2.2rem;
		line-height: 2.2rem;
		z-index: 1001;
		background: #fff;
		border-bottom: 1px solid #eee;
		position: relative;
	}
	
	.login_top .left {
		left: 0;
		top: 0;
		position: absolute;
		text-align: left;
		font-size: .7rem;
		color: #333;
		min-width: .75rem;
		height: 100%;
	}
	
	.login_top .left i {
		position: relative;
		margin-left: .4rem;
		height: 100%;
		display: inline-block;
		color: #999;
		font-size: 1.1rem;
	}
	
	.login_top .main {
		height: 100%;
		overflow: hidden;
		padding: 0 3rem;
		font-size: .7rem;
		font-weight: 400;
		text-align: center;
		color: #333;
	}
	.mainhd{
		line-height:1.8rem;
	}
	.mainhd .info {
    	font-size: 1.05rem;
    	padding: 1.25rem .5rem;
    	color: #333;
	}
	.mainhd .info .title_text {
    	color: #333;
    	font-size: 1rem;
    	font-weight: 400;
    	line-height: 1rem;
	}
	.mainhd .place_of {
    	overflow: hidden;
    	padding: 0 .5rem .75rem;
    	font-size: .6rem;
	}
	.mainhd .place_of .left_author {
    	float: left;
    	overflow: hidden;
    	font-size: .6rem;
	}
	.mainhd .place_of .left_author span {
    	color: #d8d8d8;
    	float: left;
	}
	.mainhd .place_of .left_author i {
    	font-style: normal;
    	display: inline-block;
    	margin-left: .5rem;
    	margin-right: .5rem;
	}
	.mainhd .place_of .left_author label {
    	float: left;
	}
	.mainhd .place_of .right_hour {
    	float: right;
    	color: #d8d8d8;
	}
	.praise_lay {
    	text-align: center;
    	margin-top: 1rem;
	}
	.praise_lay .praise {
	    border: 1px solid #efefef;
	    background: #fdfdfd;
	    color: #858585;
	    font-size: 1.1rem;
	    border-radius: 50%;
	    display: inline-block;
	    width: 2.5rem;
	    height: 2.5rem;
	    line-height: 2.5rem;
	}
	.praise_lay .text_num {
    	margin-top: .5rem;
    	font-size: .65rem;
    	line-height: .85rem;
	}
	.comment {
	    position: fixed;
	    left: 0;
	    bottom: 0;
	    z-index: 1001;
	    width: 100%;
	    height: 2.5rem;
	    background: #f6f6f6;
	    border-top: 1px solid #cecece;
	}
	.comment .comment_main {
	    position: relative;
	    text-align: right;
	    margin: 0 auto;
	    height: 1.75rem;
	    line-height: 1.75rem;
	}
	.comment_main .comment_input {
	    position: absolute;
	    left: .05rem;
	    top: .35rem;
	    right: 5.2rem;
	    bottom: 0;
	    height: 100%;
	}
	.comment_main .comment_input input {
	    width: 100%;
	    font-size: .85rem;
	    margin: 0 -.5rem;
	    padding: .25rem .5rem;
	    border: 1px solid #bebebe;
	    border-radius: 4px;
	}
	.comment_main .comment_right {
    	width: 7.9rem;
    	display: inline-block;
	}
	.numlink {
    	position: relative;
	}
 	.comment_main .comment_right a {
    	margin-left: .15rem;
	}
	.comment_main .comment_right a i {
    	font-size: 1.2rem;
	}
	.comment_main .comment_right i {
    	margin-right: .5rem;
    	line-height: 2.5rem;
	}
	.sfimg {
    	display: block;
    	width: 13.5rem;
    	height: 7.75rem;
    	margin: 0 auto;
	}
	.commentImg{
		background: rgb(243, 243, 243);
    	padding-bottom: 2.75rem;
    	padding-top: 2.75rem;
    	margin-top: 2.75rem;
	}
</style>