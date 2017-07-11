<template>
  <div id="app">
    <router-view></router-view>
    <ul id="tab">
    	<li>
    		<router-link to="/home">首页</router-link>
    	</li>
    	<li>
    		<router-link to="/category">分类</router-link>
    	</li>
    	<li>
    		<router-link to="/group">菌团</router-link>
    	</li>
    	<li>
    		<router-link to="/mostIn">最iN</router-link>
    	</li>
    	<li>
    		<router-link to="/mine">我的</router-link>
    	</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'app',

}
</script>
<style type="text/css" src="./assets/reset.css">
	
</style>
<style scoped="scoped">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#tab{width:100%;height:10%;position:fixed;bottom:0}
#tab>ul{width:100%;height:100%}
li{float:left;width:20%;height:100%;text-align:center;font-size: .55rem}
</style>
