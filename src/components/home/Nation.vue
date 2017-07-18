<template>
	<div id="nav">
		<ul id="list1">
			<li v-for="(item,index) in msg.arr2"><img :src="item.imageUrl"/></li>
		</ul>
		<ul id="list2">
			<li v-for="(item,index) in msg.arr3"><img :src="item.imageUrl"/></li>
		</ul>
		<ul id="sea">
			<li v-for="(item,index) in msg.arr4">
				<img :src="item.mainImageUrl"/>
			</li>
		</ul>
		<!--<div id="sea"><img :src="msg.arr4.mainImageUrl"/></div>-->
		<div id="today">
			<img :src="msg.arr5.image"/>
			<div id="todayer">
				<ul>
					<li v-for="(item,index) in msg.arr5.list[0].currentActivity.activityShareList">
						<div><img :src="item.imgUrl"/></div>
						<p>{{item.shopName}}</p>
						<p><span>￥{{item.price}}</span><span>￥{{item.oriPrice}}</span></p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Nation",
		props:{
			msg:{
				type:Object,
				default:function (){
					return {};
				}
			}
		},
		mounted(){
//			console.log(1,this.msg.arr2);
//			console.log(1,this.msg);
		}
	}
</script>

<style>
	#nav #list1{width: 100%;}
	#nav #list1 li{width: 25%;float: left;}
	#nav #list1 li img{width: 100%;}
	#list2{width: 100%;}
	#list2 li{width: 50%;float:left;}
	#list2 li img{width: 100%;}
	#sea{width: 100%;}
	#sea img{width: 100%;}
	#today{width: 100%;}
	#today>img{width: 100%;}
	#todayer{overflow-x: auto;}
	#today ul{min-width: 35rem;}
	#today ul li{width: 6.9rem;float: left;}
	#today ul li div img{width: 100%;height: 100%;}
	#today ul li div{height: 9.5rem;overflow-y: hidden;}
	#todayer ul li p:nth-of-type(1){font-size: 0.6rem;color: #333;text-align: center;}
	#todayer ul li p:nth-of-type(2) span:first-child{color: red;font-size: 0.6rem;}
	#todayer ul li p:nth-of-type(2) span:last-child{font-size: 0.6rem;text-decoration: line-through;}
</style>