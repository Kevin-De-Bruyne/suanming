<template>
    <div class="content">
      <myheader title="性格测试" />
      <iptbox type="4" />

        <div class="item">
          {{data.content}}
        </div>
        
        
        <div class="butn-box">
        <el-button class="submit-butn" size="medium"
        @click="submit()"
        >开始算命</el-button>
      </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
    export default{
        data() {
            return {
                data:{
                },
                riqi_arr:[],
                radio:'1'
            }
        },
        computed:{
          ...mapGetters(['user'])
        },
        created() {
          this.locadata()
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
        },
        methods: {
          locadata(){
              let url=this.$router.history.current.path
            let data=localStorage.getItem(url)
            let key_obj={
              birthday:'shenri_nian',
              xing:'xin',
              ming:'min',
              hour:'shenri_shi',
              sex:'sex',
              minute:'shenri_fen'
            }

            console.log(data);
            if(data){
        console.log(JSON.parse(data))
        data=JSON.parse(data)
        console.log(JSON.parse(data.data))
        this.data=JSON.parse(data.data)
        let user=JSON.parse(data.user)
        let user2={}
        for(let key in user){
          user2[key_obj[key]]=user[key]
        }
        this.user=user2
        
              
            
            }
    },
            submit(){
                let {user}=this
                let shenri=user.shenri_nian+'-'+user.shenri_yue+'-'+user.shenri_ri
                this.shenri=shenri
                this.ajax({
                url:'index/constellation/getDescribe',
                data:{
                    day:user.shenri_ri,
                    month:user.shenri_yue,
                    sex:user.sex,
                    pay:1
                }
                }).then(res=>{
                this.data=res.data.info
                
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
.content{
  background: rgb(90,90,92);
  
}
    .item{
        color: white;
        margin: 0 0 15px 0;
        font-size: 14px;
        .title{
            margin: 0 0 10px 0;
        }
        .neirong{
            padding: 0 0 0 30px;
        }
    }
    .pd-box{
}

</style>