<template>
    <div class="content">
      <myheader title="流年运程" />
        <iptbox type="1" />
       <div class="butn-box">
        <el-button class="submit-butn" size="medium"
        @click="submit()"
        >开始执行</el-button>
       </div>
        <div class="item" v-for="(item,index) in data" :key="index">
            {{item.Nian}}年({{item.Sui}}岁),{{item.DaYun}}大运,{{item.Desc}}
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default{
    data() {
        return {
            riqi_arr:[],
            data:[]
        }
    },
    created() {
      this.locadata()
    },
    computed:{
      ...mapGetters(['user'])
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
            this.ajax({
                url:'index/eight_characters/getYunCheng',
                data:{
                    birthday:shenri,
                    xing:user.xin,
                    ming:user.min,
                    sex:user.sex,
                    hour:user.shenri_shi,
                    minute:user.shenri_fen,
                    pay:1
                }
            }).then(res=>{
                this.data=res.data
            })
        }
    },
}
    
</script>

<style lang="scss" scoped>
.item{
    border-bottom:1px solid #eee;
    padding: 15px 10px;
    color: #fbd5b7;
}
   
.content{
  background: rgb(90,90,92);
  
}

</style>