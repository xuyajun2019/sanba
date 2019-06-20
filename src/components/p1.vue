<template>
<transition :name="global.transitionName">
  <div class="p1">
    <v-touch @swipeup="swipeUp" class="touchWrapper">
    <!-- 头部 -->
    <div class="logo"><img src="../assets/p1/logo.png" alt=""></div>
    <div class="headleft">
      <div class="headleft1" ref="headleft1">
        <img src="../assets/p1/headleft.png" alt="">
      </div>
    </div>
    <div class="headright"><img src="../assets/p1/headright.png" alt=""></div>
    <!-- 中间 -->
    <div class="main">
      <div class="bggril" ref="bggril"><img src="../assets/p1/girl.png" alt=""></div>
      <div class="mainson1" ref="mainson1"><img src="../assets/p1/mainson1.png" alt=""></div>
      <div class="mainson2" ref="mainson2"><img src="../assets/p1/mainson2.png" alt=""></div>
      <div class="mainson3" ref="mainson3"><img src="../assets/p1/mainson3.png" alt=""></div>
      <div class="mainson4" ref="mainson4"><img src="../assets/p1/mainson4.png" alt=""></div>
    </div>

    <div class="wave"></div>
    <!-- 底部 -->
    <div class="footer">
      <div class="footerson1" ref="footerson1"><img src="../assets/p1/footerson1.png" alt=""></div>
      <div class="footerson2" ref="footerson2"><img src="../assets/p1/footerson2.png" alt=""></div>
      <div class="footerson3" ref="footerson3"><img src="../assets/p1/footerson3.png" alt=""></div>
      <div class="footerson4"><img src="../assets/p1/footerson4.png" alt=""></div>
    </div>
    <div class="xxd" ref="xxd"><img src="../assets/p1/kka.png" alt=""></div>
    </v-touch>
  </div>
</transition>
</template>

<script>
import global from '../components/global.js'
export default {

  data () {
    return {
      
    }
  },
  mounted(){


    
      
      // 头部
      TweenMax.fromTo(this.$refs.headleft1, 0.8, {
			  bottom:"-63%"
			}, {
        opacity:1,
				bottom:"-55%",
        ease: 'linear',
        yoyo: true,
        repeat: -1,
      });
      // 中间
      this.mainson1();

      // 底部
    TweenMax.fromTo(this.$refs.footerson1, .8, {
			  left: "-30%",
        ease: 'linear'
			}, {
				left:"33%",
				ease: 'linear',
        yoyo: false,
        // onComplete:this.mainson1
			});
      TweenMax.fromTo(this.$refs.footerson2, 1, {
			  left: "150%",
        ease: 'linear'
			}, {
				left:"52%",
				ease: 'linear',
        yoyo: false,
        delay:1,
			});
      TweenMax.fromTo(this.$refs.footerson3, 1, {
			  left: "-30%",
        ease: 'linear'
			}, {
				left:"68%",
				ease: 'linear',
        yoyo: false,
        delay:1
      });

      TweenMax.fromTo(this.$refs.xxd, 0.9, {
			  bottom:"0"
			}, {
        opacity:1,
			  bottom:"10px",
        ease: 'linear',
        yoyo: true,
        repeat: -1,
      });

  },
  methods:{
    swipeUp() {
        this.global.transitionName = 'up';
        document.querySelector(".p1").style.display="none";
        // this.$router.push({path:'/p2',replace:true});
        this.$router.replace('/p2');
			},
    // 中间
mainson1(){
    TweenMax.fromTo(this.$refs.mainson1, 8, {
			  transform: 'rotate(-179deg)',
        ease: 'linear'
			}, {
				transform: 'rotate(179deg)',
				ease: 'linear',
        yoyo: false,
        repeat:-1,
        onComplete:this.mainson2()
			});
  },
  mainson2(){
    TweenMax.fromTo(this.$refs.mainson2, 8, {
			  transform: 'rotate(-179deg)',
        ease: 'linear'
			}, {
				transform: 'rotate(179deg)',
				ease: 'linear',
        yoyo: false,
        repeat:-1,
        onComplete:this.mainson3()
      })
  },
  mainson3(){
    TweenMax.fromTo(this.$refs.mainson3, 4, {
			  transform: 'rotate(-80deg)',
        ease: 'linear'
			}, {
				transform: 'rotate(49deg)',
				ease: 'linear',
        yoyo: true,
        repeat:-1,
        onComplete:this.mainson4()
      })
  },
  mainson4(){
    TweenMax.fromTo(this.$refs.mainson4, 4, {
			  transform: 'rotate(-80deg)',
        ease: 'linear'
			}, {
				transform: 'rotate(49deg)',
				ease: 'linear',
        yoyo: true,
        repeat:-1
      })
  },
   
   

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .p1{
    width: 100%;
    background-size: 100% 100%;
    }
  .logo img,.headleft1 img,.headright img,.bggril img,
  .mainson1 img,.mainson2 img,.mainson3 img,.mainson4 img,.xxd img,
  .wave img,.footerson1 img,.footerson2 img,.footerson3 img,.footerson4 img

  {width:100%;height:100%}
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
    height: 4rem;
    position: relative;
    left: 34%;
    transform: translate(-50%,-50%);
    margin-top:9%;
  }
  .headleft1{
    width: 4rem;
    height: 3rem;
    position: absolute;
    transform: translate(-50%,-50%);
    bottom:-40%;
    left:62%;
  }
  .headright{
    width: 1.7rem;
    height: 2.1rem;
    position: relative;
    left: 92%;
    transform: translate(-50%,-50%);
    margin-top:3%;
    }

    .main{
      width: 20rem;
      height: 27rem;
      /* background: url("../assets//p1/girl.png") no-repeat; */
      background-size: 100% 100%;
      background-position: 0 1rem;
      position: absolute;
      left: 48%;
      transform: translate(-50%,-50%);
      margin-top: 32%;
      z-index: 1000;
    }
    .bggril{
      width: 20rem;
      height: 27rem;
      background-size: 100% 100%;
      background-position: 0 1rem;
      position: absolute;
      left: 48%;
      transform: translate(-50%,-50%);
      margin-top: 27%;
      z-index: 999;
      top:33%;
    }
    .mainson1{
      width: 2.4rem;
      height: 2.4rem;
      position: relative;
      left: 48%;
      /* transform: translate(-50%,-50%); */
      margin-top:23%;
      z-index: 2000;
    }
    .mainson2{
      width: 2.6rem;
      height: 2.6rem;
      position: relative;
      left: 71%;
      /* transform: translate(-50%,-50%); */
      margin-top:18%;
      z-index: 2000;
    }
    .mainson3{
      width: 2.6rem;
      height: 2.9rem;
      position: relative;
      left: 6%;
      margin-top: -6%;
      
      /* transform: translate(-50%,-50%); */
    }
    .mainson4{
      width: 2.8rem;
      height: 1.6rem;
      position: relative;
      left: 83%;
      margin-top: 13%;
      /* transform: translate(-50%,-50%); */
    }
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
      margin-top:71%;
    }
    .footer{
      width: 100%;
      position: relative;
      margin: 0 auto;
      margin-top:50%;
      overflow: hidden;
      z-index: 1200;
    }
    .footerson1{
      width: 8.8rem;
      height: 2.4rem;
      position: relative;
      left: 33%;
      transform: translateX(-50%);
    }
    .footerson2{
      width: 16.9rem;
      height: 3.4rem;
      position: relative;
      left: 52%;
      transform: translateX(-50%);
    }
    .footerson3{
      width: 10rem;
      height: 1rem;
      position: relative;
      left: 68%;
      transform: translateX(-50%);
    }
    .footerson4{
      width: 2.3rem;
      height: 1.7rem;
      position: relative;
      left: 10%;
      transform: translateX(-50%);
      bottom:0.3vh;
    }
    /* 动画 */
/* body,html{
  width: 100%;
  height: 100%;
  margin: 0;
  background: #26BEC9;
  overflow: hidden;
} */

  
    .up-enter-active{
  transform: translate3d(0,100%,0);
  transition:transform 1s;
}
.up-leave-active{
  transform: translate3d(0,0,0);
  transition:transform  1s;
}
.up-enter-to{
  transform: translate3d(0,0,0);
}
.up-leave-to{
  transform: translate3d(0,-100%,0);
}
.down-enter-active{
  transform: translate3d(0,-100%,0);
  transition:transform 1s;
}
.down-leave-active{
  transform: translate3d(0,0,0);
  transition:transform  1s;
}
.down-enter-to{
  transform: translate3d(0,0,0);
}
.down-leave-to{
  transform: translate3d(0,100%,0);
}
.down{
  position:fixed;
  width:1.16rem;
  left:50%;
  transform: translateX(-50%);
  bottom:0.5rem;
  animation: downMoving 1.2s infinite linear;
}
@keyframes downMoving {
  0%{
    bottom:0.5rem;
  }
  50%{
    bottom:0.2rem;
  }
  100%{
    bottom:0.5rem;
  }
}
.xxd{
  width: 3.5rem;
  height: 3.5rem;
  transform: translate(-50%,-50%);
  position: absolute;
  left:50%;
  bottom:0px;
}
</style>
