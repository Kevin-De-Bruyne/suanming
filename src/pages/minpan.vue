<template>
  <div class="mingpan_router">
     <myheader title="命盘" />
      

      
  </div>
</template>

<script>
  export default{
    data() {
      return {
        
      }
    },
    created() {
      if(this.down){
      this.down((res)=>{
      this.riqi_arr=res
      this.user.shenri_nian=res.nian_arr[0]
      this.user.shenri_yue=res.shi_arr[0]
      this.user.shenri_ri=res.ri_arr[0]
      this.user.shenri_shi=res.shi_arr[0]
      this.user.shenri_fen=res.fen_arr[0]
      
      console.log(res,this.user)
    })
    }
      this.getdata()

    },
    methods: {
      
      getdata(){
        
      }
    },
  }
</script>

<style lang="scss" scoped>

  
</style>