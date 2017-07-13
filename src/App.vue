<template>
  <div id="app">
    <router-view></router-view>
    <ul id="tab">
    	<li :class="{active_btn:iscur==0}"@click="iscur=0" v-on:click="changeImg()">
    		<router-link to="/home">
    			<i class="iconfont icon-moren_shouye_icon"></i>
    			<p>首页</p>
    		</router-link>
    	</li>
    	<li :class="{active_btn:iscur==1}"@click="iscur=1" v-on:click="changeImg()">
    		<router-link to="/category">
    			<i class="iconfont icon-moren_fenleiicon"></i>
    			<p>分类</p>
    		</router-link>
    	</li>
    	<li :class="{active_btn:iscur==2}"@click="iscur=2" v-on:click="changeImg()">
    		<router-link to="/group">
    			<img :src="imgState"/>
    			<p class="tab_group">菌团</p>
    		</router-link>
    	</li>
    	<li :class="{active_btn:iscur==3}"@click="iscur=3" v-on:click="changeImg()">
    		<router-link to="/mostIn">
    			<i class="iconfont icon-moren_zuiinicon"></i>
    			<p>最In</p>
    		</router-link>
    	</li>
    	<li :class="{active_btn:iscur==4}"@click="iscur=4" v-on:click="changeImg()">
    		<router-link to="/mine">
    			<i class="iconfont icon-wodeicon1"></i>
    			<p>我的</p>
    		</router-link>
    	</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'app',
	data(){
		return{
			iscur:0,
			imgState:"http://img.zhefengle.com/ca7151b676a709b0f9660eac0a274fa5.png"
		}
	},
	methods:{
		changeImg :function  () {
			if(this.iscur==2){
				this.imgState="http://img.zhefengle.com/3956d9c44bc8e0093428314d0763dab2.png";
			}else{
				this.imgState="http://img.zhefengle.com/ca7151b676a709b0f9660eac0a274fa5.png";
			}
		}
	}
}
</script>
<style type="text/css" src="./assets/reset.css"></style>
<style scoped="scoped">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  background:#F3F3F3; 
}
#tab{width:100%;height:2.5rem;position:fixed;bottom:0;border-top: 1px solid #eee;z-index: 1000;background: white;}
#tab>ul{width:100%;height:100%}
#tab li{float:left;width:20%;height:100%;text-align:center;font-size: .55rem;}
#tab  li a{position: relative;height: 100%;font-size: .85rem;width:100%;color: #82757d;float: left;vertical-align: top;padding-top: .1rem;}
#tab  li a i{    position: relative;height: 1.2rem;line-height: 1.2rem;display: inline-block;width: 1.5rem;font-size: 1rem;color: #666;margin-top: .1rem;}
#tab .active_btn a i{color: #e61128;}
#tab .active_btn a p{color: #e61128;}
#tab  li a img{    width: 2.05rem;height: 2.05rem;margin-top: -0.8rem;}
#tab  li a p{font-size: .55rem;position: relative; z-index: 9;}
#tab  li a .tab_group{margin-top: -0.26rem;}
</style>
