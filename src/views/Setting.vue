<template>
	<div id="setting">
		<div class="login_top">
			<a href="JavaScript:history.back(-1)" class="left"><i class="fa fa-angle-left" aria-hidden="true" ref="icon"></i></a>
			<h1 class="main">设置</h1>
		</div>
		<div>
			<div class="panel_list set_up">
				<div class="section set_up_top">
					<div class="wrapper">
						<a href="javascript:void(0)">基本资料</a>
						<i class="fa fa-angle-right right" aria-hidden="true"></i>
					</div>
				</div>
				<div class="section">
					<div class="wrapper">
						<a href="javascript:void(0)">修改密码</a>
						<i class="fa fa-angle-right right" aria-hidden="true"></i>
					</div>
				</div>
				<div class="section set_up_top">
					<div class="wrapper">
						<a href="javascript:void(0)">去反馈</a>
						<i class="fa fa-angle-right right" aria-hidden="true"></i>
					</div>
				</div>
				<div class="section">
					<div class="wrapper">
						<a href="javascript:void(0)">关于折疯了</a>
						<i class="fa fa-angle-right right" aria-hidden="true"></i>
					</div>
				</div>
			</div>
			<div class="base-input-lay user-login-lay ng-scope">
				<button class="exit" @click="quit()">退出登录</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'setting',
	  methods:{
	  	quit:function(){
	  		localStorage.removeItem('isLogin');
	  		this.$router.push({path:'/home'});
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
	.panel_list {
    	position: relative;
    	padding-bottom: 1.6rem;
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
	.set_up .set_up_top {
    	margin-top: .25rem;
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
	.panel_list .wrapper .right {
	    position: absolute;
	    right: .5rem;
	    top: .65rem;
	    font-size: .5rem;
	}
	.panel_list .wrapper i {
   	 	color: #A3A3A3;
	}
	.user-login-lay {
    	padding: 1.5rem .5rem 0;
	}
	.base-input-lay {
    	padding: 0 1rem;
	}
	.exit{
		margin: .5rem auto;
    	font-size: .75rem;
   		border-radius: .2rem;
   		display: block;
	    text-align: center;
	    height: 2rem;
	    line-height: 2rem;
	    color: #fff;
	    background: #e50039;
	    border: none;
	    width: 99.5%;
	}
</style>