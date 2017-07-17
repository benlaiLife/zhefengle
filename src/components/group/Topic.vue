<template>
	<div id="topic">
		<div class="topic_content" v-for="item in data">
			<router-link :to="{path:'/topicChild',query:{topicId:item.topicId}}">
				<img :src="item.topicImgUrl"/>
				<div class="topic_des">
					<div class="topic_des_cont">{{item.topicDesc}}</div>
				</div>
				<div class="topic_join">
					<span class="join_left">{{item.topicName}}</span>
					<span class="right">已参与{{item.participants}}</span>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name:'topic',
		data(){
			return{
				data:{}
			}
		},
		mounted(){
			this.$http.jsonp("https://h5api.zhefengle.cn/meiquan/topic_list.html?apiv=3&biz_channel=&historyRecordId=&page=1").then(function (res) {
				console.log(res.body.model.topicList);
				this.data=res.body.model.topicList;
			})
		}
	}
</script>

<style scoped="scoped">
#topic{border-top: 1px solid #eee;background: #EEEEEE;padding-bottom:2.5rem ;}
.topic_content{background: #fff; margin-bottom: .5rem;}
.topic_content a{display: block;}
.topic_content a img{display: block;width:100%}
.topic_des{width: 17.75rem; margin: 0 auto;padding: .55rem 0;border-bottom: 1px solid #E1E1E1;}
.topic_des_cont{width: 17.75rem;margin: 0 auto;color: #424242;font-size: .7rem;line-height: .9rem;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;}
.topic_join{overflow: hidden;padding: .75rem;}
.join_left{    float: left;color: #333;font-size: .65rem;}
.right{float: right;font-size: .65rem;color: #878787;}
</style>