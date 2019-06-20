<template>
    <div class="p3">
       <div class="logo"><img src="../assets/p1/logo.png" alt=""></div>
       <div class="headleft"><img src="../assets/p1/headleft.png" alt=""></div>
       <div class="headright"><img src="../assets/p1/headright.png" alt=""></div>
       <div class="title38"><img src="../assets/p3/title38.png" alt=""></div>
       <div class="sdna"><img src="../assets/p1/mainson3.png" alt=""></div>
       <div class="center">
           <p class="youxi">游戏规则说明</p>
           <div class="center1"><div class="proj1">1.&nbsp;</div><div class="proj2">游戏共设置6道健康小问题，每道题20分，不同的答题表现会获得专属于你的“女神节”称号。</div></div>
           <div class="center1"><div class="proj1">2.&nbsp;</div><div class="proj2">本次活动最终解释权归Illumina所有。</div></div>
           <!-- <span>2.&nbsp;</span><span class="proj">本次活动最终解释权归Illumina所有。</span> -->
       </div>
       <div class="wave"></div>
       <div class="sure" @click="sure()"><img src="../assets/p3/sure.png" alt=""></div>
       <div class="flower"><img src="../assets/p1/footerson4.png" alt=""></div>
    </div>
</template>
<script>
import global from '../components/global.js'
export default {
  name: 'p3',
    data(){
        return{

        }
    },
    methods:{
      sure(){
        // this.$router.push({path:'/p2',replace:true});
        this.global.transitionName = 'none';
        document.querySelector(".p3").style.display="none";
        this.$router.replace('/p2');
      }
    },
    mounted(){

    }
}
</script>
<style scoped>
    .logo img,.headleft img,.headright img,.title38 img,.sdna img,.sure img,.flower img
    {
        width: 100%;
        height: 100%;
    }
    .logo{
    width: 5.8rem;
    height: 1.4rem;
    position: relative;
    left: 23%;
    transform: translate(-50%,-50%);
    margin-top:9%;
  }
  .headleft{
    width: 4rem;
    height: 3rem;
    position: relative;
    transform: translate(-50%,-50%);
    left:51%;
    margin-top:4vh;
  }
  .headright{
    width: 1.7rem;
    height: 2.1rem;
    position: absolute;
    left: 86%;
    transform: translate(-50%,-50%);
    margin-top:-3%;
    }
    .title38{
      width: 15rem;
      height: 14rem;
      position: relative;
      transform: translate(-50%,-50%);
      left:49%;
      margin-top:19%;
    }
    .sdna{
      width: 2.6rem;
      height: 2.9rem;
      position: absolute;
      left: 12%;
      top: 51%;
      /* transform: translate(-50%,-50%); */
    }
    .center{
        position: absolute;
        width: 19rem;
        height: 12rem;
        background: rgba(44,191,213, 1);
        border: 2px solid #ccc;
        transform: translate(-50%,-50%);
        left:50%;
        top:69vh;
        z-index: 100;
        color:#fff;
        padding: 0 0.7rem;;
        box-sizing: border-box;
    }
    .center1{
      display: flex;
      justify-items: center;
      margin: 0 auto;
      margin-bottom: 0.6rem;
    }
    .youxi{text-align: center;}
    .proj1{float: left;}
    .proj2{float: left;text-align: justify;font-size: 13px;}
    .wave{
      width:100%;
      height: 18rem;
      background: url("../assets/p1/wave.png") no-repeat;
      background-size: 200% 120%;
      background-position:-3rem .4rem; 
      position: absolute;
      z-index: 1;
      left: 50%;
      transform: translate(-50%,-50%);
      margin-top:8%;
    }
    .sure{
      width: 7rem;
      height: 2.5rem;
      position: absolute;
      transform: translate(-50%,-50%);
      left: 50%;
      bottom:1%;
      z-index: 200;
    }
    .flower{
      width: 2.3rem;
      height: 1.7rem;
      position: absolute;
      left: 15%;
      transform: translateX(-50%);
      bottom:6vh;
    }
</style>
