<template>
  <div id="home">
	  <Banner :msg="arr1"></Banner>
  </div>
</template>

<script>  
	import Banner from '../components/Banner'
export default {
  name: 'home',
  data(){
      return {
          arr1:[]
      }
  },
  components:{
    Banner
  },
    mounted(){
    	this.$http.get('./static/toutiao.json').then(function (res) {
    		this.arr1=res.data.result.data;
    	});
    }
	}

</script>
<style type="text/css">
	
</style>