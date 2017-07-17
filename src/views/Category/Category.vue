<template>
  <div id="category">
  	<div class="t" @click="isSh">
	  	<div class="main-search-bar">
	  		<label for="" class="main-lab"> 
	  			<div class="type-search">
	  				<i ></i>
	  				搜索商品，品牌
	  			</div>
	  		</label>
	  		<a href="" class="mymessage">
	  			<i></i>
	  		</a>
	  	</div>
  	</div>
  	<div v-show="isShow" class="page2 curtain-lay curtain-show index-curtain">
  		<div class="curtain-bg"></div>
  		<div class="curtain-main">
  			<form action="" class="index-search-lay search-part">
  				<div class="index-search search-part">
  					<i></i>
  					<div class="search-main">
  						<input type="text" placeholder="搜索全部商品" class="search-input" @keyup="showss($event)" ref="input1"/>
  					</div>
  				</div>
  				<a href="" class="close">取消</a>
  			</form>
  			<div>
  				<div class="index-curtain-search">
  					<div class="index-search-title">热门搜索</div>
  					<div class="index-search-main">
  						<router-link :to="{ path:'/gory', query: { name:item,bb:0} }" v-for="item in arrh">{{item}}</router-link>
  					</div>
  				</div>
  			</div>
  			<ul></ul>
  		</div>
  	</div>
    <div class="tab-main">
      <li :class="{active_btn:iscur==0}" @click="iscur=0"><router-link to="/cate"  ><span>分类</span></router-link></li>
      <li :class="{active_btn:iscur==1}" @click="iscur=1" ><router-link to="/brand" ><span>品牌</span></router-link></li>
      <li :class="{active_btn:iscur==2}" @click="iscur=2" ><router-link to="/website"  ><span>官网</span></router-link></li>
    </div>
    
      <!--<div>-->
        <router-view></router-view>
      <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: 'category',
    data(){
        return{
          iscur:0,
          isShow:false,
          arrh:[],
        }
    },
    mounted(){
    	this.$http.jsonp("https://h5api.zhefengle.cn/item_search.html?biz_channel=&op=1")
        .then(function (res) {
          this.arrh=res.body.model
        });
    },
    methods:{
    	isSh:function(){
    		this.isShow=true;
    	},
    	showss:function(ev){
    		console.log(this.$refs.input1.value)
    		if(ev.keyCode==13){
    			this.$router.push({path:"/gory",query:{ name:this.$refs.input1.value,bb:0}})
    		}
    	}
    }
  }
</script>
<style src="../../assets/category.css"></style>
<style>
  #category{
    background: #fff;
    width: 100%;
    height: 100%;
  }
  .active_btn a{
    color:#e61128
  }
  .active_btn a span{
    border-bottom: .1rem solid #e50039;
    width: 2.5rem;
    display: inline-block;
    height: 2rem;
    color: #e50039;
  }
</style>
