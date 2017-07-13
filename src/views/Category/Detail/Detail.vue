<template>
  <div id="detail">
    <div class="title">
      <div class="left">
        <a href="javascript:void(0)" @click="back()">&lt;</a>
      </div>
    </div>
    <div :style='"background: url("+arr3.mainImg+") left top no-repeat rgb(255, 255, 255)"' class="brandshop-info">
      <div class="shopbox">
        <div class="shophd">
          <div class="leftimg">
            <img :src="arr3.subImg" alt="">
          </div>
          <div class="rightname">
            <span class="name">{{arr3.mainImgRatio}}</span>
            <span class="sales">{{arr3.subHead}}</span>
          </div>
        </div>
        <div class="shopbd">{{arr3.introduce}}</div>
      </div>
    </div>
    <div class="type-list">
      <div class="sort-row">
        <ul class="sorts">
          <li :class="{active_btn:iscur==0}"><a href="javascript:void(0)">综合</a></li>
          <li :class="{active_btn:iscur==1}" @click="change(0,0,0,0,-1,0,1)"><a href="javascript:void(0)">折扣</a></li>
          <li :class="{active_btn:iscur==2}" @click="change(0,-2,0,0,1,0,2)"><a href="javascript:void(0)">价格</a></li>
          <li :class="{active_btn:iscur==3}" ><a href="javascript:void(0)">筛选</a></li>
        </ul>
      </div>
    </div>
    <div class="htlist">
      <div>
        <ul>
          <li v-for="item in arr4">
            <router-link :to="{ path:'/shopdetail', query: { id1: item.shareId} }" class="list-item">
              <div class="list-out-lay">
                <div class="list-out-img">
                  <img :src="item.itemImgUrl" alt="" class="img-list">
                </div>
              </div>
              <div class="main">
                <h4>{{item.itemTitle}}</h4>
                <div class="price">
                  <div class="left1">￥{{item.itemCurPrice}}</div>
                </div>
                <p>
                  <img :src="item.countryImgUrl" alt="" class="icon-qudaotubiao">{{item.shopName}}
                </p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'detail',
    data(){
      return{
        arr3:[],
        arr4:[],
        iscur:""
      }
    },
    mounted(){
      this.$http.jsonp("https://h5api.zhefengle.cn/search/item_search_ext.html?biz_channel=&maskKey="+this.$route.query.num+"&page=1&secondCate=")
        .then(function (res) {
//            console.log(res);
//          console.log(res.body.model.searchList);
          this.arr3=res.body.model.bannerIntroduce;
          this.arr4=res.body.model.searchList
        })
    },
    methods:{
      back:function () {
        window.history.go(-1)
      },
      change:function (a,b,c,d,e,f,g) {
          if(this.$route.query.num1==1){
            this.$http.jsonp("https://h5api.zhefengle.cn/search/item_search_ext.html?activeIndex="+a+"&biz_channel=&brandId="+this.$route.query.id6+"&discountOrder="+b+"&keyword=&limit=16&maskKey=s@@1qT@@m@@3@@&maxPrice="+c+"&minPrice="+d+"&page=1&priceOrder="+e+"&sex="+f+"&shopId=&typeName=")
              .then(function (res) {
                this.iscur=g,
                  console.log(res);
                this.arr4=res.body.model.searchList
              })
          }else{
            this.$http.jsonp("https://h5api.zhefengle.cn/search/item_search_ext.html?activeIndex="+a+"&biz_channel=&brandId=&discountOrder="+b+"&keyword=&limit=16&maskKey=s@@1qT@@m@@3@@&maxPrice="+c+"&minPrice="+d+"&page=1&priceOrder="+e+"&sex="+f+"&shopId="+this.$route.query.id7+"&typeName=")
              .then(function (res) {
                this.iscur=g,
                  console.log(res);
                this.arr4=res.body.model.searchList
              })
          }
      },
      back:function () {
        window.history.go(-1)
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
</style>
