<template>
  <div id="choos">
      <div class="htlist">
        <div>
          <ul>
            <li v-for="item in msg">
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
    name: 'choos',
    data(){
      return{
        iscur:"",
      }
    },
    props:{
      msg:{}
    },
    mounted(){

    },
    methods:{
      back:function () {
        window.history.go(-1)
      },
//      infinite: function (done) {
//        this.p++;
//        console.log(this.p,this.page);
//        this.$http.jsonp("https://h5api.zhefengle.cn/search/item_search_ext.html?biz_channel=&firstCate="+this.$route.query.first+"&limit=16&page="+this.p+"&secondCate="+this.$route.query.id2)
//          .then(function (mes) {
//            var self = this
//            setTimeout(function () {
//              for (var i = 1; i < 16; i++) {
//                self.items.push(mes.body.model.searchList[i]);
//              }
//              done();
//            }, 1500)
//          })
//      }
    }
  }
</script>

<style src="../assets/All.css"></style>
<style>
</style>
