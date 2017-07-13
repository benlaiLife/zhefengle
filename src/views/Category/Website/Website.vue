<template>
  <div id="website">
    <div class="allbtn">
      <router-link to="/All">
        全部品牌
      </router-link>
    </div>
    <div class="brandrow">
      <div class="shopname">
        <div class="line">
          <span class="name">{{arr1.name}}</span>
        </div>
      </div>
      <div v-for="item in arr1.simpleShoplist" class="ecahbrand">
        <router-link :to="{ path:'/detail', query: { id7: item.shopId,num:item.maskKey} }" class="item-img">
          <div>
            <div>
              <img :src="item.shopImg" alt="">
            </div>
          </div>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
  import Icon from '../../../components/Icon'
  export default {
    name: 'website',
    data(){
      return{
        arr1:[],
        arrx:123,
//        arrx:[]
      }
    },
    mounted(){
      this.$http.jsonp("https://h5api.zhefengle.cn/category/category_ext.html")
        .then(function (res) {
          this.arr1=res.body.model.aggregationShops[0];
//          this.arrx=res.body.model.shopIndexes;
        })
    },
    components:{
     Icon
    }
  }
</script>
<style src="../../../assets/Website.css"></style>
<style>
</style>
