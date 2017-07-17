<template>
  <div id="home">
	  <Banners :msg="arr1"></Banners>
	  <Nation :msg="arr"></Nation>
	  <sale :msg="obj"></sale>
  </div>
</template>

<script>  
	import Banners from '../components/home/Banners'
	import Nation from '../components/home/Nation'
	import Sale from '../components/home/Sale'
export default {
  name: 'home',
  data(){
      return {
          arr1:[],
          arr2:[],
          arr3:[],
          arr4:[],
          arr5:[],
          arr:{},
          obj:{},
          arr6:[],
          arr7:[]
      }
  },
  components:{
    Banners,
    Nation,
    Sale
  },
    mounted(){
    		this.$http.jsonp('https://h5api.zhefengle.cn/index/index_tab.html?apiv=9&biz_channel=&token=AXly7xlFhHYCwbBnh7x1l64').then(function (res) {
    		this.arr1=res.body.model.tabInfos['20'].modules[0].list;
    		this.arr2=res.body.model.tabInfos['20'].modules[1].list[0].baseGrids;
    		this.arr3=res.body.model.tabInfos['20'].modules[2].list;
    		this.arr4=res.body.model.tabInfos['20'].modules[3].list;
    		this.arr5=res.body.model.tabInfos['20'].modules[4];
    		this.arr6=res.body.model.tabInfos['20'].modules[5].list;
    		this.arr7=res.body.model.tabInfos['20'].modules[6].list;
    		this.arr={arr2:this.arr2,arr3:this.arr3,arr4:this.arr4,arr5:this.arr5};
    		this.obj={arr6:this.arr6,arr7:this.arr7}
    		console.log(res);
//  		console.log(this.arr1);
    	});
    }
	}

</script>
<style type="text/css">
	
</style>