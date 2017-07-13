<template>
  <div id="all">
    <div class="cate-topback">
      <div class="ctmain">
        <a @click="back()">
          <i><</i>
        </a>
        <h5>品牌列表</h5>
      </div>
    </div>
    <div class="new-type-search-typesort">
      <ul>
        <li v-for="item in arr3" ><a :href="'#'+item.key">{{item.key}}</a></li>
      </ul>
    </div>
    <div class="type-hot">
      <ul v-for="item1 in arr3">
        <li class="hot-title seffixed" :id="item1.key"><h1>{{item1.key}}</h1></li>
        <li v-for="item2 in item1.innerPOJOs" class="botFix">
          <router-link :to="{ path:'/detail', query: { id: item2.brandId,num:item2.maskKey} }">
            <img :src="item2.brandImg" alt="" class="img-lay">
            <span>{{item2.brandName}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'all',
    data(){
      return{
        arr3:[]
      }
    },
    mounted(){
      this.$http.jsonp("https://h5api.zhefengle.cn/category/category_ext.html")
        .then(function (res) {
          this.arr3=res.body.model.brandIndexes;
        })
    },
    methods:{
        back:function () {
          window.history.go(-1)
        }
    }
  }
</script>
<style src="../../../assets/All.css"></style>
<style>
</style>
