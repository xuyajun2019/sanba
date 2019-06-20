<template>
  <div class="p4">
<!-- <v-touch @swipedown="swipeDown" @swipeup="swipeUp" class="touchWrapper"> -->
    <div class="logo"><img src="../assets/p1/logo.png" alt=""></div>
    <div class="headleft"><img src="../assets/p1/headleft.png" alt=""></div>
    <div class="title"><img src="../assets/p4/tlogo6.png" alt=""></div>
    
     <div class="headright"><img src="../assets/p1/headright.png" alt=""></div>
    <div class="nt"><img src="../assets/p1/mainson3.png" alt=""></div>
    <div class="pp6">
      <div class="c1">关于无创产前筛查(NIPT),下列描述不正确的是?</div>
      <div class="center">
        <div class="list1" v-for="(item,index) in list" :key="index" @click="act(index)">
          <div class="listL" :class="{'active':pitchon==index}" ref="yellow">{{item.id}}</div>
          <div class="listR">{{item.title}}</div>
        </div>
        <!-- <div class="list1">
          <div class="listL">A</div>
          <div class="listR">NIPT技术原理是基于高通量基因测序技术发展起来的检测方法，检测孕期母体外周血中胎儿游离DNA片段</div>
        </div>
        <div class="list1">
          <div class="listL">B</div>
          <div class="listR">孕周大于等于12周以上，即可进行NIPT</div>
        </div>
        <div class="list1">
          <div class="listL">C</div>
          <div class="listR">NIPT可以检测21三体综合征（唐氏综合征）、18三体综合征（爱德华氏综合征）、13三体综合征（帕套综合征）</div>
        </div>
        <div class="list1">
          <div class="listL">D</div>
          <div class="listR">以上都错误</div>
        </div> -->

        

      </div>
    </div>
    <div class="wave"></div>
    <div class="footerone"><img src="../assets/p1/footerson4.png" alt=""></div>
    <div class="next" @click="next()"><img src="../assets/p4/next.png" alt=""></div>
<!-- </v-touch> -->
  </div>
</template>

<script>
import global from '../components/global.js'
export default {

  data () {
    return {
      list:[
        {id:"A",title:"NIPT技术原理是基于高通量基因测序技术发展起来的检测方法，检测孕期母体外周血中胎儿游离DNA片段"},
        {id:"B",title:"孕周大于等于12周以上，即可进行NIPT"},
        {id:"C",title:"NIPT可以检测21三体综合征（唐氏综合征）、18三体综合征（爱德华氏综合征）、13三体综合征（帕套综合征）"},
        {id:"D",title:"以上都错误"}
      ],
      pitchon:"8",
      score:this.$route.query.id,
      sum:0
    }
  },
  mounted(){
    console.log(this.$route.query.id)
  },
  methods:{
    swipeUp() {
				this.global.transitionName = 'up';
				this.$router.replace('/p7');
			},
			swipeDown() {
				this.global.transitionName = 'down';
				this.$router.replace('/p5');
			},
      next(){
       var yellow = this.$refs.yellow;
      if (yellow[0].className == "listL"&&yellow[1].className == "listL"&&yellow[2].className == "listL"&&yellow[3].className == "listL") {
        alert("还没有选择哟");
        return;
      }
      // this.$router.push({path:'/p7?id=' + this.sum,replace:true});
      this.$router.replace('/p7?id=' + this.sum);
			},
      act(index){
        this.pitchon=index;
        if(index==3){
          this.sum=20+parseInt(this.score);
        }else{
          this.sum=0+parseInt(this.score);
        }
      }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .p4{
    width: 100%;
    background-size: 100% 100%;
    }
    .logo img,.headleft img,.title img,.c1 img,.nt img,.listR img,.headright img,.footerone img,.next img
    {width:100%;height:100%;}
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
    left:32%;
    margin-top:5vh;
  }
  .headright{
    width: 1.7rem;
    height: 2.1rem;
    position: relative;
    left: 86%;
    transform: translate(-50%,-50%);
    margin-top:-11%;
    }
  .title{
        width: 9.9rem;
    height: 3.4rem;
    position: relative;
    transform: translate(-50%,-50%);
    left:50%;
    margin-top:-5%;
  }
  .nt{
      width: 2.6rem;
      height: 2.9rem;
      position: relative;
      transform: translate(-50%,-50%);
      left: 15%;
      margin-top: -1vh;
    }
    .pp6{
    width: 19.5rem;
    position: relative;
    margin: 0 auto;
    /* border: 1px solid #000; */
    margin-top: -35px;
    }
  .c1{
    width: 19.5rem;
    font-size: 13px;
    color:#fff;
    position: relative;
    font-size: 13px;
    font-weight: bold;
    font-family: "思源黑体 CN";
    text-align:center;
    line-height: 150%;
    margin-bottom: 1rem;
  }

    
    /* 中间 */
    .center{
width: 19.5rem;
    background: url(../assets/p4/center.png);
    background-size: 100% 100%;
    position: relative;
    z-index: 1000;
    padding-top: 0.6rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-right: 10px;
    }

    /* 下边DNA */
    .wave{
      width:100% !important;
      height: 15rem;
      background: url("../assets/p1/wave.png") no-repeat;
      background-size: 200% 120%;
      background-position:-3rem .4rem; 
      position: absolute;
      z-index: 1;
      left: 50%;
      transform: translate(-50%,-50%);
      margin-top:-12%;
    }
.list1 {
  display: flex;
  align-items: center;
  width: 100%;
    padding-top: 14px;
    padding-bottom: 14px;
}
.listL {
  width: 0.8rem;
  height: 0.8rem;
  border: 1px solid #FFB441;
  color: #FFB441;
  border-radius: 50%;
  line-height: 13px;
  text-align: center;
  font-size: 12px;
  padding: 5px;
  margin: 0 8px;
}
.active {
  background: #FFB441;
  color: #fff;
}
.listR {
  width: 254px;
  font-size: 12px;
  font-family: "思源黑体 CN";
  text-align: justify;
  color: #4a4a4a;
}
    .footerone{
      width: 2.3rem;
      height: 1.7rem;
      position: relative;
      left: 10%;
      transform: translateX(-50%);
      bottom:-41.7vh;
    }
    .next{
      width: 8rem;
    height: 2.8rem;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      bottom:1vh;
      z-index: 200;
    }
    .active{
      background: #FFB441;
      color:#fff;
    }
</style>
