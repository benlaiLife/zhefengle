<template>
	<div id="group">
		<div class="group_head">
			<span>菌团</span>
			<div class="head_right">
				<a href="#">
				<i class="iconfont icon-xiangjiicon"></i>
				</a>
				<a href="#">
				<i class="iconfont icon-i-xiaoxi"></i>
				</a>
			</div>
		</div>
		<div class="group_tab">
			<ul>
				<li :class="{active_li:liState==1}"@click="liState=1">
					<router-link to="/choiceness" href="javascript:void(0)">
						<span>精选</span>
					</router-link>
				</li>
				<li :class="{active_li:liState==2}"@click="liState=2">
					<router-link to="/topic" href="javascript:void(0)">
						<span>话题</span>
					</router-link>
				</li>
				<li :class="{active_li:liState==3}"@click="liState=3">
					<router-link to="/attention" href="javascript:void(0)">
						<span>关注</span>
					</router-link>
				</li>
			</ul>
		</div>
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'group',
		data(){
			return {
				liState:1
			}
		}
	}
</script>
<style type="text/css">
.group_head{height: 100%;overflow: hidden;padding: 0 3rem;font-size: .7rem;font-weight: 400;text-align: center;color: #333;position: relative;height: 2.2rem; line-height: 2.2rem;z-index: 999;background: #fff; border-bottom: 1px solid #eee;}
.head_right{right: 0;top: 0;text-align: right;background: 0 0; border: none;padding: 0 .5rem;position: absolute;color: #333;min-width: .75rem;height: 100%;}
.head_right i{position: relative;margin-left: .4rem; height: 100%;display: inline-block;color: #999;font-size: 1.1rem;}
.group_tab{overflow: hidden;}
.group_tab ul li{width: 6.25rem; float: left; height: 2rem;line-height: 2rem;}
.group_tab ul li a{display: block;text-align: center;font-size: .8rem;color: #333;}
.group_tab ul li span{height: 2rem;line-height: 2rem;display: inline-block;}
.group_tab ul  .active_li span{color: #E31E32;    border-bottom: 1px solid #E31E32;}
</style>