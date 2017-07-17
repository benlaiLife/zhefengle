<template>
  <div id="brand">

    <div class="allbtn">
      <router-link to="/All">全部品牌</router-link>
    </div>
    <div v-for="item4 in arr2" style="overflow: hidden">
      <div class="shopname">
        <div class="line">
          <span class="name">{{item4.name}}</span>
        </div>
      </div>
      <div v-for="item in item4.simpleBrandList" class="ecahbrand">
        <router-link :to="{ path:'/detail', query: {num1:1, id6: item.brandId,num:item.maskKey} }" class="item-img">
          <div>
            <div>
              <img :src="item.brandImg" alt="">
            </div>
          </div>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'brand',
    data(){
      return{
        arr2:[],
        scrolled: false,
        num:123
      }
    },
    mounted(){
      this.$http.jsonp("https://h5api.zhefengle.cn/category/category_ext.html")
        .then(function (res) {
          this.arr2=res.body.model.aggregationBrands;
//          console.log(res.body.model.aggregationBrands[0].simpleBrandList)
        })
    },
    methods:{
      handleScroll () {
        this.scrolled = window.scrollY > 0;
      }
    },
    ready () {
      window.addEventListener('scroll', this.handleScroll);
    }
  }
</script>
<style src="../../../assets/Website.css"></style>
<style>

</style>
