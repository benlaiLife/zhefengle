<template>
  <div id="detail">
    <div class="title">
      <div class="left">
        <a href="javascript:void(0)" @click="back()">&lt;</a>
      </div>
    </div>

    <div>
      <swiper :options="swiperOption"  ref="mySwiper" class='swiper'>
        <swiper-slide v-for="item1 in arr5.groupItems" class="swiper-slide one">
          <img :src="item1.imgUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <div class="price-details">
      <div class="detail-info">
        <div class="price-lay">
          <span class="price">
            ￥{{arr5.itemCurPrice}}
            <s class="consult">{{arr5.itemOriPrice}}</s>
          </span>
          <span v-for="a in arr5.attributeList" class="item-discount-btn">{{a.text}}</span>
        </div>
        <div class="details-title">
          <span class="title-text">{{arr5.itemTitle}}</span>
          <span class="title-text-new">{{arr5.oriTitle}}</span>
        </div>
      </div>
    </div>

    <div class="shop-box">
      <div class="detail-row-hd">
        <div class="left-tit">
          <a href="">
            <div class="country-img">
              <img :src="arr5.shopInfo.countryImg" alt="">
            </div>
            <div class="name-act-box">
              <div class="shop-name maxTop">
                {{arr5.shopInfo.shopName}}
              </div>
            </div>
          </a>
        </div>
        <a href="" class="right-btn">全部活动</a>
      </div>
      <div>
        <div v-for="b in arr5.shopInfo.moduleInfoList" class="shop-bd-row">
          <div class="left-bd-tit"> {{b.title}}</div>
          <div class="right-bd-info">
            <div class="single-row">
              <a href="">
                <div class="main-text">{{b.desc}}</div>
                <i class="iconzfl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="platform-promise">
      <div class="base-height detail-row-hd">
        <div class="left-tit">{{arr5.shopInfo.commitmentInfo.title}}</div>
        <a href="" class="right-btn"></a>
      </div>
      <div class="img">
          <img :src="arr5.shopInfo.commitmentInfo.imgUrl" alt="">
      </div>
    </div>



    <div v-for="img in arr4" class="imgss">
      <img :src="img" alt="">
    </div>
    <div>
      <div class="htlist detail-list">
        <div>
          <img :src="arr6.titleImg" alt="" class="likeimg">
        </div>
        <ul>
          <li v-for="item in arr6.recommendList">
            <a href="">
              <div class="list-out-lay">
                <div class="list-out-img">
                  <img :src="item.itemImgUrl" alt="" class="img-list">
                </div>
              </div>
              <div class="main">
                <h4>{{item.itemTitle}}</h4>
                <div class="price">
                  <div class="left4">￥{{item.itemCurPrice}}</div>
                  <div class="right4">
                    <div class="sale">{{item.discount}}</div>
                    <div class="money">{{item.itemOriPrice}}</div>
                  </div>
                </div>
                <p>
                  <img :src="item.countryImgUrl" alt="" class="icon-qudaotubiao">{{item.shopName}}
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="detail-buy-lay">
      <div class="detail-buy">
        <div class="detail-left">
          <a href="">
            <i></i>
            <p><a href="http://t.cn/RtlQbTq">客服</a></p>
          </a>
          <span></span>
          <a href="">
            <i></i>
            <p>
            	<a href="http://p.qiao.baidu.com/cps/chatIndex?reqParam=%7B%22from%22%3A0%2C%22sid%22%3A%22-100%22%2C%22tid%22%3A%22-1%22%2C%22ttype%22%3A1%2C%22siteId%22%3A%2210181801%22%2C%22userId%22%3A%2220878133%22%2C%22pageId%22%3A0%7D">购物车</a>
            </p>
          </a>
          <span></span>
        </div>
        <div class="lay-detailbuy detail-buy-info">
          <button class="add-shop-own" @click="submit">加入购物车</button>
          <button>立即购买</button>
        </div>
      </div>
    </div>


  </div>


</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'detail',
    components:{
      swiper,
      swiperSlide
    },
    data(){
      return{
        arr5:"",
        arr6:[],
        arr4:[],
        iscur:"",
        swiperOption: {
          loop:true,
          notNextTick: true,
          pagination: '.swiper-pagination',
          centeredSlides: true,
          paginationClickable: true,
          spaceBetween: 30,
          autoplay:1000,
          mousewheelControl:true,
          observeParents:true,
          autoplayDisableOnInteraction:false
        }
      }
    },
    mounted(){
      this.$http.jsonp("https://h5api.zhefengle.cn/item/item_detail.html?apiv=9&biz_channel=&shareId="+this.$route.query.id1)
        .then(function (res) {
          this.arr5=res.body.model;
        }),
      this.$http.jsonp("https://h5api.zhefengle.cn/item/item_more_detail.html?biz_channel=&page=1&shareId="+this.$route.query.id1)
        .then(function (mes) {
          this.arr6=mes.body.model;
          this.arr4=mes.body.model.recommendReasonImg;

        })
    },
    methods:{
      back:function () {
        window.history.go(-1)
      },
      submit:function(){
      	if(!window.localStorage){
                    alert("浏览器支持localstorage");
                    return false;
                }else{
                    var obj2 = JSON.parse(localStorage.getItem('aaaa'));
                    //如果之前错过东西,那么这个obj就不为空,就直接往obj里面添加新的键值对
                    if(obj2){
                        //如果当前要存的值已经存过了,只需要加数量就行
                        if(obj2[a.product_id]){
                            obj2[a.product_id].num=b;
                            obj2[a.product_id].title=c;
                            obj2[a.product_id].img=a1;
                            obj2[a.product_id].price=d;
                            obj2[a.product_id].color=e;

                        }else{
                            a.num = 1;
                            obj2[a.product_id] = a;
                            obj2[a.product_id].num=b;
                            obj2[a.product_id].title=c;
                            obj2[a.product_id].img=a1;
                            obj2[a.product_id].price=d;
                            obj2[a.product_id].color=e;
                        }
                    }else{
                        //如果obj是空的,就证明这是第一次存值,就要新建一个obj
                        obj2 = {};
                        a.num = 1;
                        obj2[a.product_id] = a;
                    }
                    console.log(obj2);
                    localStorage.setItem('aaaa',JSON.stringify(obj2));
                }
      }
    }
  }
</script>
<style src="../../../assets/Shopdetail.css"></style>
<style>

  .active_btn a{
    border-bottom: .1rem solid #e50039;
    display: inline-block;
    height: 2rem;
    color: #e50039;
  }
</style>
