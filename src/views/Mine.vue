<template>
	<div id="category">
		<div class="login_top">
			<a href="JavaScript:history.back(-1)" class="left"><i class="fa fa-angle-left" aria-hidden="true" ref="icon"></i></a>
			<h1 class="main">个人中心</h1>
		</div>
		<div class="login_wrap">
			<form method="" action="">
				<div class="user_login">
					<div class="user-input-lay">
						<input type="text" placeholder="请输入您的账号" id="username" v-model="user" autocomplete="off"/>
						<p></p>
					</div>
					<div class="user-input-lay">
						<input type="password" placeholder="请输入您的密码" id="password" v-model="pwd" autocomplete="off"/>
						<p></p>
					</div>
				</div>
				<div class="submit_lay">
					<button class="submit" @click="login()">登录</button>
					<a href="" class="submit">注册</a>
				</div>
			</form>
			<div class="retrieve">
				<a href="javascript:void(0)" @click="">忘记密码?</a>
			</div>
			<div class="log_select">
				<div class="step_login">
					一键登录
				</div>
				<div class="log_option">
					<a href="javascript:void(0)"><i class="fa fa-qq" aria-hidden="true"></i></a>
					<a href="javascript:void(0)"><i class="fa fa-weixin" aria-hidden="true"></i></a>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'mine',
		data(){
      		return {
          		user:"",
				pwd:""
      		}
  		},
  		created:function(){
  			 var isLogin = localStorage.getItem('isLogin');
        		if(isLogin=='true'){
        			this.$router.push({path:'/person'});
        		}
  		},
		methods:{
			login:function(){
				this.$http.get('static/user.json').then(function(res){
					var arr = res.body.users;
					for(var i=0;i<arr.length;i++){
						if(this.user===arr[i].username&&this.pwd===arr[i].password){
							localStorage.setItem('isLogin','true');
        					this.$router.push({path:'/home'});
						}else{
							alert("登录失败");
						}
					}
				})
			},		
		}

  	}
</script>
<style type="text/css">
	#category{
		width:100%;
		height:100%;
		position:relative;	
		background: #fff;	
		z-index:999;
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
	.login_wrap form{
		padding: 1.5rem .5rem 0;
	}
	.user_login{
		width: 96%;
   		margin: 0 auto;   	
	}
	.user-input-lay{
		width: 98%;
   	 	margin: 0 auto;
   		border-bottom: 1px solid #ececec;
   		margin-bottom: 2rem;
	}
	.user_login input{
		height: 1.2rem;
    	line-height: 1.2rem;
    	padding: 0;
    	width: 100%;
    	text-indent: .5rem;
    	font-size: .8rem;
    	color: #262626;
    	border:none;
    	outline: 0;
	}
	.submit_lay{
		font-size: 0;
    	overflow: hidden;
    	margin-top: 1.5rem;
	}
	.submit{
		display: block;
	    width: 100%;
	    border-radius: .1rem;
	    height: 2.2rem;
	    line-height: 2.2rem;
	    text-align: center;
	    color: #fff;
	    font-size: .85rem;
	    background: #e50039;
	    border: none;
	    margin-top: .5rem;
	}
	.submit_lay a{
		background: #fff;
    	border: 1px solid #DD001F;
    	color: #DD001F;
	}
	.retrieve{
		text-align: right;
   		margin-top: 1rem;
    	margin-right: 1rem;
    	padding-bottom: 1rem;
	}
	.retrieve a{
		font-size: .7rem;
    	color: #878787;
	}
	.log_select{
		padding-bottom: 2.35rem;
   		width: 17.725rem;
    	margin: 6.775rem auto 0;
    	border-top: 1px solid #f5f5f5;
    	position: relative;
	}
	.step_login{
		width: 4.8rem;
    	padding: 0 1rem;
    	background: #fff;
   		position: absolute;
    	font-size: .7rem;
    	text-align: center;
    	left: 50%;
    	margin-left: -2.4rem;
    	top: -.3rem;
	}
	.log_option{
		margin-top: 2rem;
	}
	.log_option a{
		float:left;
		width: 2.12rem;
		height: 2.12rem;
		border: 1px solid #535353;
		border-radius: 50%;
		text-align: center;
		line-height: 2.12rem;
	}
	.log_option a:nth-of-type(1){
		float: left;
		margin-left: 3rem;
	}
	.log_option a:nth-of-type(2){
		float: right;
		margin-right: 3rem;
	}
</style>