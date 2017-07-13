<template>
  <div id="foucs">
    <ul>
      <li v-for="items in msg">
        <a href="" class="firctcatelink">
          <div class="left-tit">
            <i></i>
            <span class="span1">{{items.name}}</span>
            <span class="right-tit">全部</span>
          </div>
        </a>
        <div v-for="item2 in items.childCategories" class="eachcate">
          <a>
            <img :src="item2.img" alt="" class="cate-newimg">
            <p>{{item2.name}}</p>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
  export default {
    name: 'foucs',
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


<style>
</style>
