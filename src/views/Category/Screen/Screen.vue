<template>
  <div id="screen">
    <div class="type-list">
      <div class="sort-row">
        <ul class="sorts">
          <li @click="back()"><a href="javascript:void(0)">综合</a></li>
          <li @click="back()"><a href="javascript:void(0)">折扣</a></li>
          <li @click="back()"><a href="javascript:void(0)">价格</a></li>
          <li @click="back()"><a href="javascript:void(0)">筛选</a></li>
        </ul>
      </div>
    </div>
    <div style="overflow: hidden;height: 100%">
      <div class="left">
        <ul>
          <li @click="hide(1)" :class="{active_btn1:iscur==1}"><a href="javascript:void(0)">官网</a></li>
          <li @click="hide(2)" :class="{active_btn1:iscur==2}"><a href="javascript:void(0)">品牌</a></li>
          <li @click="hide(3)" :class="{active_btn1:iscur==3}"><a href="javascript:void(0)">性别</a></li>
          <li @click="hide(4)" :class="{active_btn1:iscur==4}"><a href="javascript:void(0)">价格 </a></li>
        </ul>
      </div>
      <div class="right">
        <div v-show="bu==1">
          <div class="type-sort">
            <ul>
              <li v-for="item in arry" ><a :href="'#'+item.key">{{item.key}}</a></li>
            </ul>
          </div>
          <div class="type-hot">
            <ul v-for="item1 in arry">
              <li class="hot-title seffixed" :id="item1.key"><h1>{{item1.key}}</h1></li>
              <li v-for="item2 in item1.brands" class="botFix">
                <router-link :to="{ path:'/detail', query: {num1:1, id6: item2.brandId,num:item2.maskKey} }">
                  <img :src="item2.brandImg" alt="" class="img-lay">
                  <span>{{item2.brandName}}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div v-show="bu==2">

        </div>
        <div v-show="bu==3">
          <div class="filter-price">
            <a href="" v-for="s in sex">{{s.title}}</a>
          </div>
        </div>
        <div v-show="bu==4">
          <div class="filter-price">
            <span class="price-title">价格区间</span>
            <input type="text" class="begin-price" v-model="min">
            <span class="tilde">~</span>
            <input type="text" class="end-price" v-model="max">
            <span :class="{btn:iscur1==key}"  @click="exchang(p.minPrice,p.maxPrice,key)" v-for="(p,key) in price"><a href="javascript:void(0)">{{p.title}}</a></span>
          </div>
        </div>
      </div>
    </div>
    <div class="submit-lay">
      <router-link :to="{ path:'/gory', query: {min:this.min, max: this.max,bb:2} }">
      <a href="javascript:viod(0)" class="submit">确定</a>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'screen',
    data(){
        return{
          arry:[],
          price:[],
          sex:[],
          bu:1,
          iscur:1,
          min:"",
          max:"",
          iscur1:""
        }

    },
    mounted(){
      this.$http.jsonp("https://h5api.zhefengle.cn/search/item_search_condition.html?activeIndex=0&biz_channel=&discountOrder=-1&firstCate=0&keyword=&maxPrice=0&minPrice=0&priceOrder=-1&secondCate="+this.$route.query.cade+"&sex=0&typeName=")
        .then(function (res) {
        	console.log(res);
          this.arry=res.body.model.brandList;
          this.price=res.body.model.priceList;
          this.sex=res.body.model.sexList;
          
        });

    },
    methods:{
        hide:function (x) {
          this.bu=x;
          this.iscur=x;
        },
      exchang:function (g,h,j) {
        console.log(g,h);
        this.min=g;
        this.max=h;
        this.iscur1=j;
      },
      back:function () {
        window.history.go(-1)
      },
    }
  }
</script>
<style src="../../../assets/cate.css"></style>
<style src="../../../assets/Screen.css"></style>
<style src="../../../assets/All.css"></style>
<style>

</style>
