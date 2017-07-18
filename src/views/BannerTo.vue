<template>
	<div id="to">
		<div id="goBack">
			<a href="javascript:history.back(-1);">
				<i class="fa fa-chevron-left"></i>
			</a>
		</div>
		<img :src="ar1.image"/>
		<div id="active">
			10件活动商品
		</div>
		<div id="cont" v-html="ar1.desc"></div>
		<div id="list_1">
			<ul>
				<li v-for="(item,index) in ar2">
					<img :src="item.itemImgUrl"/>
					<p>{{item.itemTitle}}</p>
					<p><span>￥{{item.itemCurPrice}}</span><span>{{item.discount}}折</span></p>
					<p><img :src="item.countryImgUrl"/>{{item.shopName}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'to',
		data(){
			return {
				ar1:{},
				ar2:[]
			}
		},
		mounted(){
			this.$http.jsonp('https://h5api.zhefengle.cn/activity/official/activity_official_detail.html?actId='+this.$route.query.too+'&apiv=4&biz_channel=&limit=8&op=author&page=1&sort=activityItems&token=AXly7xlFhHYCwbBnh7x1l64').then(function(res){
				console.log(res);
				this.ar1=res.body.model;
				this.ar2=res.body.model.shares;
			})
		}
	}
</script>

<style>
	#goBack{position: fixed;top: 0;left: 0;}
	#goBack a{display: block;width: 0.75rem;font-size: 0.9rem;padding-top: 0.3rem;padding-left: 0.2rem;}
	#goBack a i{font-size: 0.9rem;color: white;}
	#to>img{width: 100%;}
	#active{background: url(http://img.zhefengle.com/353aced06181f48eb9994cdf7d9c38ec.png) no-repeat;margin: 1rem auto 0;background-size: 100%;text-align: center;color: #333;font-size: .7rem;line-height: 1.5rem;width: 8.5rem;}
	#cont{font-size: .7rem;line-height: 1rem;color: #333333;margin-top: 0.375rem;text-align: left;}
	#list_1 ul{overflow-y: hidden;padding-bottom: 13%;}
	#list_1 ul li{width: 50%;float: left;height: 17rem;}
	#list_1 ul li>img{width: 100%;height: 11.55rem;}
	#list_1 ul li p:nth-of-type(1){font-size: .6rem;color: #444;font-weight: 400;height: 1.6rem;margin-bottom: .45rem;line-height: initial;overflow: hidden;text-overflow: ellipsis;}
	#list_1 ul li p:nth-of-type(2) span:first-child{float: left;color: #DF001B;font-size: .75rem;display: inline-block;margin-left: 0.1rem;}
	#list_1 ul li p:nth-of-type(2) span:last-child{text-align: center;display: inline-block;line-height: .7rem;vertical-align: top;font-size: .5rem;background: #E40039;color: #fff;width: 50%;margin-left: -2px;border-radius: 0.3rem;}
    #list_1 ul li p:nth-of-type(3)>img{width: .95rem;max-height: .6rem;margin-right: .25rem;float: left;margin-top: .01rem;}
    #list_1 ul li p:nth-of-type(3){line-height: .75rem;color: #878787;font-size: .55rem;white-space: nowrap;text-overflow: ellipsis;-o-text-overflow: ellipsis;overflow: hidden;}
</style>