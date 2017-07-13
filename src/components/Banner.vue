<template>
  <div id="banner">  
    <div>  
        <swiper :options="swiperOption"  ref="mySwiper" class='swiper'>   
            <swiper-slide v-for="item in msg" class="swiper-slide">
            	<img :src="item.thumbnail_pic_s" alt="" />
            </swiper-slide>    
            <div class="swiper-pagination" slot="pagination"></div>  
        </swiper>  
    </div> 
  </div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'  
export default {
  name: 'banner',
  components: {  
    swiper,  
    swiperSlide  
  },
  props:{
  	msg:{}
  },
  data(){
  	return {
		swiperOption: {  
        loop:true,
//      notNextTick: true,  
        pagination: '.swiper-pagination',   
        centeredSlides: true,  
        paginationClickable: true,  
        spaceBetween: 30,  
        autoplay:1000,
		mousewheelControl:true,
		observeParents:true,
//      autoplayDisableOnInteraction:false
       }
  	}
  }
}

</script>

<style>
.swiper-slide{height: 30%;}
.swiper-slide>img{width: 100%;height: 100%;}
</style>
