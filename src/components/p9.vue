<template>
  <div class="p4">
<!-- <v-touch @swipedown="swipeDown" @swipeup="swipeUp" class="touchWrapper"> -->
    <div class="logo"><img src="../assets/p1/logo.png" alt=""></div>
    <div class="headleft"><img src="../assets/p1/headleft.png" alt=""></div>
    <div class="title"><img src="../assets/p4/tlogo9.png" alt=""></div>
    <div class="headright"><img src="../assets/p1/headright.png" alt=""></div>
    <div class="nt"><img src="../assets/p1/mainson3.png" alt=""></div>
    <div class="pp9">
      <div class="c1">关于乳腺癌说法错误的是：</div>
      <div class="center">
        <div class="list1" v-for="(item,index) in list" :key="index" @click="act(index)">
          <div class="listL" :class="{'active':pitchon==index}" ref="yellow">{{item.id}}</div>
          <div class="listR">{{item.title}}</div>
        </div>
        <!-- <div class="list1">
          <div class="listL">A</div>
          <div class="listR">乳腺癌是中国女性非常高发的恶性肿瘤</div>
        </div>
        <div class="list1">
          <div class="listL">B</div>
          <div class="listR">乳腺癌有遗传性</div>
        </div>
        <div class="list1">
          <div class="listL">C</div>
          <div class="listR">BRCA相关基因变异可反应乳腺癌的遗传特性</div>
        </div>
        <div class="list1">
          <div class="listL">D</div>
          <div class="listR">早期诊断出乳腺癌，不能实现良好的获益</div>
        </div> -->

        

      </div>
    </div>
    <div class="wave"></div>
    <div class="footerone"><img src="../assets/p1/footerson4.png" alt=""></div>
    <div class="next" @click="next()"><img src="../assets/p4/succ.png" alt=""></div>
    <div class="bgblack" v-if="showCheck">
      <img class="fen" src="../assets/p1/fenxiang2.png" alt="">
      <img class="tou" src="../assets/p1/tou.png" alt="">
      <h1 class="bgttle">本次测试获得</h1>
        <div class="bgscore">
          <!-- <span>{{sum}}</span>&nbsp;<span>分</span> -->
          <img class="sck" :src="imgl" alt="">
          
        </div>
      <div class="bgcheck" @click="bgcheck()"><img :src="fenghao" alt=""></div>
      <div class="bgdo" @click="again()"><img src="../assets/p4/again.png" alt=""></div>
    </div>
<!-- </v-touch> -->
  </div>
</template>

<script>
import global from '../components/global.js'
export default {

  data () {
    return {
      list:[
        {id:"A",title:"乳腺癌是中国女性非常高发的恶性肿瘤"},
        {id:"B",title:"乳腺癌有遗传性"},
        {id:"C",title:"BRCA相关基因变异可反应乳腺癌的遗传特性"},
        {id:"D",title:"早期诊断出乳腺癌，不能实现良好的获益"}
      ],
      pitchon:"8",
      score:this.$route.query.id,
      sum:0,
      showCheck:false,
      imgl:"",
      sex:localStorage.getItem('sexValue'),
      fenghao:""
    }
  },
  mounted(){

console.log(this.$route.query.id)


// console.log(localStorage.getItem('sexValue'))
    // if(this.$route.query.id==0){
    //     this.imgl="../assets/p1/sc1.png"
    //   }else if(this.$route.query.id==20){
    //     this.imgl="../assets/p1/sc2.png"
    //   }else if(this.$route.query.id==40){
    //     this.imgl="../assets/p1/sc3.png"
    //   }else if(this.$route.query.id==60){
    //     this.imgl="../assets/p1/sc4.png"
    //   }else if(this.$route.query.id==80){
    //     this.imgl="../assets/p1/sc5.png"
    //   }else if(this.$route.query.id==100){
    //     this.imgl="../assets/p1/sc6.png"
    //   }else if(this.$route.query.id==120){
    //     this.imgl="../assets/p1/sc7.png"
    //   }
  },
  methods:{


    sc(){

    },
    swipeUp() {
				this.global.transitionName = 'up';
				this.$router.replace('/');
			},
			swipeDown() {
				this.global.transitionName = 'down';
				this.$router.replace('/p8');
			},
      next(){
        var yellow = this.$refs.yellow;
      if (yellow[0].className == "listL"&&yellow[1].className == "listL"&&yellow[2].className == "listL"&&yellow[3].className == "listL") {
        alert("还没有选择哟");
        return;
      }

      if(this.sex=="女"){
        if(this.sum==0){
          this.imgl="../assets/p1/sc1.png"
        }else if(this.sum==20){
          this.imgl="../assets/p1/sc2.png"
        }else if(this.sum==40){
          this.imgl="../assets/p1/sc3.png"
        }else if(this.sum==60){
          this.imgl="../assets/p1/sc4.png"
        }else if(this.sum==80){
          this.imgl="../assets/p1/sc5.png"
        }else if(this.sum==100){
          this.imgl="../assets/p1/sc6.png"
        }else if(this.sum==120){
          this.imgl="../assets/p1/sc7.png"
        }
        this.fenghao="../assets/p4/bgcheck1.png"
      }else if(this.sex=="男"){
        if(this.sum==0){
          this.imgl="../assets/p1/sc1.png"
        }else if(this.sum==20){
          this.imgl="../assets/p1/sc2.png"
        }else if(this.sum==40){
          this.imgl="../assets/p1/sc3.png"
        }else if(this.sum==60){
          this.imgl="../assets/p1/sc4.png"
        }else if(this.sum==80){
          this.imgl="../assets/p1/sc5.png"
        }else if(this.sum==100){
          this.imgl="../assets/p1/sc6.png"
        }else if(this.sum==120){
          this.imgl="../assets/p1/sc7.png"
        }
        this.fenghao="../assets/p4/bgcheck2.png"
      }

      this.showCheck=true;
      },
      bgcheck(){
        if(this.sex=="女"){
          if(this.sum==120){
              // this.$router.push({path:'/p10?id=' + this.sum,replace:true});
              this.$router.replace('/p12?id=' + this.sum);
            }else if(this.sum==80||this.sum==100){
              //  this.$router.push({path:'/p11?id=' + this.sum,replace:true});
              this.$router.replace('/p11?id=' + this.sum);
            }else if(this.sum==40||this.sum==60){
              //  this.$router.push({path:'/p12?id=' + this.sum,replace:true});
              this.$router.replace('/p13?id=' + this.sum);
            }else if(this.sum==0||this.sum==20){
              //  this.$router.push({path:'/p3?id=' + this.sum,replace:true});
              this.$router.replace('/p10?id=' + this.sum);
            }
        }else if(this.sex=="男"){
           this.$router.replace('/p14?id=' + this.sum);
          //  console.log("男22222222222222222");
        }
            
      },
      act(index){
        this.pitchon=index;
        if(index==3){
          this.sum=20+parseInt(this.score);
        }else{
          this.sum=0+parseInt(this.score);
        }
      },
      again(){
        this.$router.replace('/');
      }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fen{
  width: 80%;
  display: block;
  position: absolute;
  transform: translateX(-50%);
  left:50%;
  top:5%;
}
.tou{
  width:10%;
   display: block;
  position: absolute;
  transform: translateX(-50%);
  left: 93%;
  top: 1%;
}
.sck{
  width: 35%;
}
  .p4{
    width: 100%;
    background-size: 100% 100%;
    }
    .logo img,.headleft img,.title img,.c1 img,.nt img,.listR img,.headright img,.footerone img,.next img,.bgdo img
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
    margin-top:-17%;
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
    .pp9{
      width: 19.5rem;
      position: relative;
      margin: 0 auto;
      /* border: 1px solid #000; */
    }

    .c1{
    width: 19.5rem;
    font-size: 15px;
    color:#fff;
    position: relative;
    font-size: 13px;
    font-weight: bold;
    font-family: "思源黑体 CN";
    text-align: center;
    margin-bottom: 1rem;
    line-height: 150%;
    }
        /* 中间 */
    .center{
      width: 19.5rem;
      background: url("../assets/p4/center.png");
      background-size: 100% 100%;
      position: relative;
      z-index: 1000;
      padding-top: 0.6rem;
      box-sizing: border-box;
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
      margin-top:-13%;
    }
  .list1 {
  display: flex;
  align-items: center;
  width: 100%;
padding-top: 17px;
    padding-bottom: 18px;
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
      bottom:-3vh;
      z-index: 200;
    }
    .active{
      background: #FFB441;
      color:#fff;
    }
    .bgblack{
      background: rgba(0,0,0,0.7);
      width: 100%;
      height:100%;
      position: absolute;
      z-index: 1000;
      left:0;
      top:0;
    }
    .bgttle{
      position: absolute;
      transform: translate(-50%,-50%);
      color:#fff;
      width: 12rem;
      left:50%;
      top:40%;
    }
    .bgscore{
      position: absolute;
      transform: translate(-50%,-50%);
      color:#fff;
      width: 12rem;
      left:50%;
      top:55%;
      text-align: center;
    }
    .bgscore span:nth-child(1){
      font-size: 40px;
      font-weight: bold;
      text-shadow:1px 1px 0px #FFB441,-1px -1px 0px #FFB441,2px 2px 0px #FFB441,-2px -2px 0px #FFB441;
    }
    .bgscore span:nth-child(2){
      text-shadow:1px 1px 0px #FFB441,-1px -1px 0px #FFB441,2px 2px 0px #FFB441,-2px -2px 0px #FFB441;
    }
    .bgcheck{
      position: absolute;
      transform: translate(-50%,-50%);
      color:#fff;
      width: 8rem;
      left:50%;
      top:60%;
      text-align: center;
      height: 2.4rem;
      border-radius: 0.5rem;
    }
    .bgcheck img{width: 100%;height: 100%;}
    .bgdo{
      position: absolute;
      height: 2.4rem;
      transform: translate(-50%,-50%);
      color:#fff;
      width:8rem;
      left:50%;
      top:70%;
      text-align: center;
      font-size: 13px;
      font-weight: bold;
    }
</style>
