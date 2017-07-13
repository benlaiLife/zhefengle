<template>
  <div id="category">
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
          iscur:0
        }
    }
  }
</script>
<style src="../../assets/category.css"></style>
<style>
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
