<template>
	<div id="person">
		<div class="login_top">
			<a href="javascrit:void(0)" class="left" @click="goSetting()"><i class="fa fa-cog" aria-hidden="true" ref="icon"></i></a>
			<h1 class="main">个人中心</h1>
		</div>
		<div>
			<article class="user_info_top">
				<section class="user_info">
					<a href="javascript:void(0)" class="info_lay">
						<div class="img_lay">
							<img src="http://cdn.aixifan.com/dotnet/20120923/style/image/avatar.jpg" />
						</div>
						<div class="right">
							<span class="name">
								zhangyingyu				
							</span>
							<p class="text">爱海淘,爱宝贝,更爱一起淘宝贝!</p>
						</div>
						<i class="fa fa-angle-right go" aria-hidden="true"></i>
					</a>
				</section>
				<section class="user_table">
					<a href="javascript:void(0)"><i class="fa fa-shopping-cart" aria-hidden="true" style="color: rgb(255,72,72);"></i><p>购物车</p></a>
					<a href="javascript:void(0)"><i class="fa fa-credit-card" aria-hidden="true" style="color: rgb(67,169,255);"></i><p>收益</p></a>
					<a href="javascript:void(0)"><i class="fa fa-ticket" aria-hidden="true" style="color: rgb(251,201,48);"></i><p>优惠券</p></a>
					<a href="javascript:void(0)"><i class="fa fa-exchange" aria-hidden="true" style="color: rgb(255,116,135);"></i><p>邀请码</p></a>
				</section>
			</article>
			<article class="user_order_state">
				<a href="javascript:void(0)" class="order_title">全部订单</a>
				<section class="user_table">
					<a href="javascript:void(0)"><i class="fa fa-shopping-cart" aria-hidden="true"></i><p>待付款</p></a>
					<a href="javascript:void(0)"><i class="fa fa-credit-card" aria-hidden="true"></i><p>待发货</p></a>
					<a href="javascript:void(0)"><i class="fa fa-ticket" aria-hidden="true"></i><p>待收货</p></a>
					<a href="javascript:void(0)"><i class="fa fa-exchange" aria-hidden="true"></i><p>已完成</p></a>
				</section>
			</article>
			<div class="info_artlist">
				<div class="panel_list user_list_lay">
					<div class="section">
						<div class="wrapper">
							<a href="javascript:void(0)"><i class="fa fa-shopping-cart left" aria-hidden="true" style="color:#ffad2b"></i><span>我的团购</span><i class="fa fa-angle-right right" aria-hidden="true"></i></a>						
						</div>
					</div>
					<div class="section">
						<div class="wrapper">
							<a href="javascript:void(0)"><i class="fa fa-credit-card left" aria-hidden="true" style="color:#ff4848"></i><span>我的会员</span><i class="fa fa-angle-right right" aria-hidden="true"></i></a>
						</div>
					</div>
					<div class="section">
						<div class="wrapper">
							<a href="javascript:void(0)"><i class="fa fa-ticket left" aria-hidden="true" style="color:#ffad2b"></i><span>收货地址</span><i class="fa fa-angle-right right" aria-hidden="true"></i></a>
						</div>
					</div>
					<div class="section">
						<div class="wrapper">
							<a href="javascript:void(0)"><i class="fa fa-exchange left" aria-hidden="true" style="color:#63c230"></i><span>我的消息</span><i class="fa fa-angle-right right" aria-hidden="true"></i></a>	
						</div>
					</div>							
				</div>
				<div class="panel_list user_list_lay">
					<div class="section">
						<div class="wrapper">
							<a href="javascript:void(0)"><i class="fa fa-shopping-cart left" aria-hidden="true" style="color:#2a9bfc"></i><span>福利专区</span><i class="fa fa-angle-right right" aria-hidden="true"></i></a>						
						</div>
					</div>
					<div class="section">
						<div class="wrapper">
							<a href="javascript:void(0)"><i class="fa fa-credit-card left" aria-hidden="true" style="color:#63c230"></i><span>联系客服</span><i class="fa fa-angle-right right" aria-hidden="true"></i></a>
						</div>
					</div>
					<div class="section">
						<div class="wrapper">
							<a href="javascript:void(0)"><i class="fa fa-ticket left" aria-hidden="true" style="color:#ffad2b"></i><span>帮助中心</span><i class="fa fa-angle-right right" aria-hidden="true"></i></a>
						</div>
					</div>
					<div class="section">
						<div class="wrapper">
							<a href="javascript:void(0)"><i class="fa fa-exchange left" aria-hidden="true" style="color:#ff4848"></i><span>建议反馈</span><i class="fa fa-angle-right right" aria-hidden="true"></i></a>	
						</div>
					</div>							
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'person',
		methods:{
			goSetting:function(){
				this.$router.push({path:'/setting'});
			}
		}
	}	
</script>

<style>
	#person{
		background: #f3f3f3;
	}
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
	.user_info_top{
		background: #fff;
    	border-bottom: 1px solid #e1e8ed;
	}
	.user_info_top .user_info{
		height: 4.75rem;
   	 	padding: .75rem;
   	 	border-bottom: 1px solid #f5f5f5;
	}
	.user_info .info_lay {
    	position: relative;
    	display: block;
    	min-height: 3.05rem;
	}
	.user_info .img_lay {
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: 3.05rem;
	    height: 3.05rem;
	    border-radius: 50%;
	    border: 1px solid #dfdfdf;
	    overflow: hidden;
	}
	.user_info .img_lay img{
		width:100%;
	}
	.user_info .right {
	    padding-left: 4.05rem;
	    line-height: 1rem;
	    padding-top: .5rem;
	    font-size: .75rem;
	    color: #979797;
	}
	.user_info .right .name {
	    position: relative;
	    color: #333;
	    font-size: .65rem;
	}
	.user_info .right .text {
	    margin-top: .15rem;
	    font-size: .65rem;
	}
	.user_info .go {
	    position: absolute;
	    right: .125rem;
	    top: 1.35rem;
	    font-size: .5rem;
	    color: #999;
	}
	.user_table{
		font-size: 0;
    	background: #fff;
    	padding: .68rem 0;
    	padding-bottom: .455rem;
	}
	.user_table a{
		position: relative;
	    width: 25%;
	    display: inline-block;
	    text-align: center;
	    font-size: .6rem;
	    color: #333;
	    line-height: 1rem;
	}
	.user_table i{
		color: #666;
   		display: block;
    	font-size: 1.2rem;
   		margin-bottom: .3rem
	}
	.user_order_state{
		margin-top: .4rem;
    	background: #fff;
	}
	.user_order_state .order_title{
		display: block;
	    font-size: .65rem;
	    color: #333;
	    padding: .84rem 0;
	    font-weight: 400;
	    border-bottom: 1px solid #f5f5f5;
	    margin-left: .7rem;
	}
	.info_artlist{
		padding-bottom: 3.5rem;
	}
	.user_list_lay{
		margin-top:0.5rem;
	}
	.user_list_lay.panel_list{
		padding-bottom: 0;
	}
	.panel_list {
    	position: relative;
    	padding-bottom: 1.6rem;
	}
	.user_list_lay.panel_list .section {
    	border-top: none;
    	border-bottom: none;
    	margin-top: 0;
	}
	.panel_list .section {
	    margin-top: -.2rem;
	    border-top: solid 1px #f5f5f5;
	    border-bottom: solid 1px #f5f5f5;
	    background-color: #fff;
	    width: 100%;
	    text-align: center;
	    position: relative;
	}
	.user_list_lay .section .wrapper {
    	padding: .73rem .75rem .73rem 0;
    	margin-left: .75rem;
    	border-bottom: 1px solid #f5f5f5;
	}
	.panel_list .wrapper {
	    margin: auto;
	    position: relative;
	    text-align: left;
	    overflow: hidden;
	    padding: .65rem 1rem;
	    font-size: .7rem;
	    line-height: .7rem;
	}
	.panel_list .wrapper a {
    	display: block;
    	font-size: .75rem;
	}
	.user_list_lay .wrapper i.left {
    	font-size: 1rem!important;
	}
	.user_list_lay .wrapper i {
    	vertical-align: middle;
    	margin-right: .5rem;
	}
	.user_list_lay span {
    	display: inline-block;
    	vertical-align: middle;
    	font-size: .65rem;
	}
	.user_list_lay .section .wrapper .right {
   		top: .705rem;
	}
	.panel_list .wrapper .right {
    	position: absolute;
    	right: .5rem;
    	top: .65rem;
    	font-size: .5rem;
	}
</style>