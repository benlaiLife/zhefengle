<template>
  <div id="icon">
    <div class="cate-topback">
      <div class="ctmain">
        <a href="">
          <i><</i>
        </a>
        <h5>品牌列表</h5>
      </div>
    </div>
    <div class="new-type-search-typesort">
      <ul>
        <li v-for="item in msg">{{item.key}}</li>
      </ul>
    </div>
    <div class="type-hot">
      <ul v-for="item1 in msg">
        <li class="hot-title seffixed"><h1>{{item1.key}}</h1></li>
        <li v-for="item2 in item1.innerPOJOs" class="botFix">
          <a href="">
            <img :src="item2.brandImg" alt="" class="img-lay">
            <span>{{item2.brandName}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'icon',
    data(){
      return{

      }
    },
    props:{
      msg:{}
    },
    mounted(){

    }
  }
</script>

<style src="../assets/All.css"></style>
<style>
</style>
