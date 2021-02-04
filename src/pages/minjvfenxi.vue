<template>
    <div class="content">
      <myheader title="命局分析" />
        <iptbox type="1" />

        <div class="item">
            <div class="title">
                一、性格
            </div>
            <div class="neirong">
                {{data.XingGe}}
            </div>
        </div>

        <div class="item">
            <div class="title">
                二、学历
            </div>
            <div class="neirong">
                {{data.XueLi}}
            </div>
        </div>

        <div class="item">
            <div class="title">
                三、六亲
            </div>
            <div class="neirong">
                {{data.LiuQin}}
            </div>
        </div>

        <div class="item">
            <div class="title">
                四、疾病
            </div>
            <div class="neirong">
                {{data.JiBing}}
            </div>
        </div>

        <div class="item">
            <div class="title">
                五、婚姻
            </div>
            <div class="neirong">
                {{data.HunYin}}
            </div>
        </div>

        <div class="item">
            <div class="title">
                六、事业财运
            </div>
            <div class="neirong">
                {{data.CaiFuShiYe}}
            </div>
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
                riqi_arr:[]
            }
        },
        computed:{
          ...mapGetters(['user'])
        },
        created() {
          console.log(this.$router)
          this.locadata()
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
                url:'index/eight_characters/getMingju',
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
  

</style>