<template>
	<ul class="saler">
		<li v-for="(item,index) in msg.arr6">
			<img :src="item.mainImageUrl"/>
		</li>
	</ul>
	
	<!--<div class="saler"><img :src="msg.arr7.mainImageUrl"/></div>-->
</template>

<script>
	export default{
		name:'Sale',
		props:{
			msg:{
				type:Object,
				default:function (){
					return {};
				}
			}
		},
		mounted(){
			
		}
	}
</script>

<style>
	.saler{width: 100%;}
	.saler li img{width: 100%;}
</style>