<template>
	<div id="banners">
		<div>
			
			<swiper :options="swiperOption" ref="mySwiper" class="swipers">
				<swiper-slide v-for="(item,index) in msg" class="swiper-slides">
					<router-link :to="{path:'/bannerTo',query:{too:item.transitionInfo.actId}}">
						<img :src="item.imageUrl"/>
					</router-link>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
			
		</div>
	</div>
</template>

<script>
	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	export default {
	  name: 'banners',
	  components: {  
	    swiper,  
	    swiperSlide  
	  },
	  props:{
	  	msg: {
//	        type: Array,
//	        default: function() {
//	            return [];
//	        }
    	}
	  },
	  data(){
	  	return {
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
  		}
	}
</script>

<style>
	.swipers{width: 100%;height: 30%;}
	.swiper-slides img{width: 100%;height: 100%;}
</style>