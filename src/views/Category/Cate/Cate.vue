<template>
  <div id="cate">
      <div class="left" >
        <ul >
          <li v-for="(item,k) in arrt" @click="show(k)"  :class="{active_btn1:iscur==k}"><a href="javascript:void(0)">{{item.name}}</a></li>
        </ul>
      </div>
      <div class="right">
        <!--<Focus :msg="arrs"></Focus>-->
        <!--<p>{{arrs[0].name}}</p>-->
        <ul>
          <li v-for="items in arrs">
            <a href="" class="firctcatelink">
              <div class="left-tit">
                <i></i>
                <span class="span1">{{items.name}}</span>
                <span class="right-tit">全部</span>
              </div>
            </a>
            <div v-for="a in items.childCategories" class="eachcate">
              <router-link :to="{ path:'/gory', query: { id2: a.childCategoryId,name:a.name} }">
                <img :src="a.img" alt="" class="cate-newimg">
                <p>{{a.name}}</p>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
  import Focus from '../../../components/Focus'
  export default {
    name: 'cate',
    data(){
        return{
            arrt:[],
            arrs:[],
            num:0,
            iscur:0
        }
    },
    methods:{
      show:function (n) {
        this.iscur=n;
//        console.log(n);
        this.num = n;
        this.arrs=this.arrt[n].categories;
      }
    },
    mounted(){
        this.$http.jsonp("https://h5api.zhefengle.cn/category/category_ext.html")
          .then(function (res) {
//            console.log(res)
            this.arrt=res.body.model.aggregationCategories;
            this.arrs=this.arrt[0].categories;
          })
    },
    components:{
      Focus
    }
  }
</script>
<style src="../../../assets/cate.css"></style>
<style>
  .active_btn1 a{
    color:#e61128;
    background: #fff;
    display: block;
  }
</style>
