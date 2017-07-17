<template>
  <div id="detail">
    <div class="title">
      <div class="left">
        <a href="javascript:void(0)" @click="back()">&lt;{{this.$route.query.min}}</a>
      </div>
      <div class="main">{{this.$route.query.name}}{{this.$route.query.first}}</div>
    </div>
    <div class="type-list">
      <div class="sort-row">
        <ul class="sorts">
          <li :class="{active_btn:iscur==0}" @click="change(0,0,0,0,0,0)"><a href="javascript:void(0)">综合</a></li>
          <li :class="{active_btn:iscur==1}" @click="change(0,0,0,0,0,1)"><a href="javascript:void(0)">折扣</a></li>
          <li :class="{active_btn:iscur==2}" @click="change(-2,0,0,1,0,2)"><a href="javascript:void(0)">价格</a></li>
          <li :class="{active_btn:iscur==3}" @click="change(-2,0,0,1,0,2)">
          	<router-link :to="{ path:'/screen', query: { cade:this.$route.query.id2} }" :class="{active_btn:iscur==3}" >
            筛选
          </router-link>
          </li>
        </ul>
      </div>
    </div>

    <scroller :on-refresh="refresh"
              :on-infinite="infinite"
              style="padding-top: 44px;">
      <choos :msg="items"></choos>
    <!--<div class="htlist">-->
      <!--<div>-->
        <!--<ul>-->
          <!--<li v-for="item in items">-->
            <!--<router-link :to="{ path:'/shopdetail', query: { id1: item.shareId} }" class="list-item">-->
              <!--<div class="list-out-lay">-->
                <!--<div class="list-out-img">-->
                  <!--<img :src="item.itemImgUrl" alt="" class="img-list">-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="main">-->
                <!--<h4>{{item.itemTitle}}</h4>-->
                <!--<div class="price">-->
                  <!--<div class="left1">￥{{item.itemCurPrice}}</div>-->
                <!--</div>-->
                <!--<p>-->
                  <!--<img :src="item.countryImgUrl" alt="" class="icon-qudaotubiao">{{item.shopName}}-->
                <!--</p>-->
              <!--</div>-->
            <!--</router-link>-->
          <!--</li>-->
        <!--</ul>-->
      <!--</div>-->
    <!--</div>-->
    </scroller>
  </div>
</template>

<script>
  import Choos from '../../../components/Choos'
  export default {
    name: 'detail',
    data(){
      return{
        arr3:[],
        arr4:[],
        iscur:"",
        items: [],
        p:"",
        page:"",
      }
    },
    components:{
      Choos
    },
    mounted(){
      this.p=1;
      if(this.$route.query.bb==2){
      	this.$http.jsonp("https://h5api.zhefengle.cn/search/item_search_condition.html?activeIndex=0&biz_channel=&discountOrder=-1&firstCate=0&keyword=&maxPrice="+this.$route.query.max+"&minPrice="+this.$route.query.min+"&priceOrder=-1&secondCate="+this.$route.query.id2+"&sex=0&typeName=")
        .then(function (res) {
          this.arr3=res.body.model.bannerIntroduce;
          this.arr4=res.body.model.searchList;
          this.page=res.body.model.totalPage;
          for (var i = 0; i < 16; i++) {
            this.items.push(res.body.model.searchList[i])
          }
        });
      }
      this.$http.jsonp("https://h5api.zhefengle.cn/search/item_search_ext.html?biz_channel=&firstCate="+this.$route.query.first+"&limit=16&page=1&secondCate="+this.$route.query.id2)
        .then(function (res) {
          this.arr3=res.body.model.bannerIntroduce;
          this.arr4=res.body.model.searchList;
          this.page=res.body.model.totalPage;
          for (var i = 0; i < 16; i++) {
            this.items.push(res.body.model.searchList[i]);
          }
        });

    },
    methods:{
      back:function () {
        window.history.go(-1)
      },
      change:function (a,b,c,d,f,g){
        if(g==0){
          this.$http.jsonp("https://h5api.zhefengle.cn/search/item_search_ext.html?biz_channel=&firstCate="+this.$route.query.first+"&limit=16&page=1&secondCate="+this.$route.query.id2)
            .then(function (res) {
              this.items=res.body.model.searchList;
            });
        }
        this.$http.jsonp("https://h5api.zhefengle.cn/search/item_search_ext.html?activeIndex=0&biz_channel=&brandId=&discountOrder="+a+"&firstCate="+this.$route.query.first+"&keyword=&limit=16&maxPrice="+b+"&minPrice="+c+"&page=1&priceOrder="+d+"&secondCate="+this.$route.query.id2+"&sex="+f+"&shopId=&typeName=")
          .then(function (res) {
            this.iscur=g;
            this.items=res.body.model.searchList;
          })
      },
      refresh: function (done) {

      },
      infinite: function (done) {
        this.p++;
        console.log(this.p,this.page);
           this.$http.jsonp("https://h5api.zhefengle.cn/search/item_search_ext.html?biz_channel=&firstCate="+this.$route.query.first+"&limit=16&page="+this.p+"&secondCate="+this.$route.query.id2)
             .then(function (mes) {
               var self = this
               setTimeout(function () {
                 for (var i = 1; i <  16; i++) {
                   self.items.push(mes.body.model.searchList[i]);
                 }
                 done();
               }, 1500)
             });
      }
    }
  }
</script>
<style src="../../../assets/Detail.css"></style>
<style>
  .active_btn a{
    border-bottom: .1rem solid #e50039;
    display: inline-block;
    height: 2rem;
    color: #e50039;
  }
.main {
    height: 100%;
    overflow: hidden;
    padding: 0 3rem;
    font-size: .7rem;
    font-weight: 400;
    text-align: center;
    color: #333;
  }
</style>
