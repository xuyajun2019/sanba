<template>
<transition :name="global.transitionName">
  <div class="p2">
    <v-touch @swipedown="swipeDown" class="touchWrapper">
      <div class="logo"><img src="../assets/p1/logo.png" alt=""></div>
      <div class="headleft"><img src="../assets/p1/headleft.png" alt=""></div>
      <div class="headright"><img src="../assets/p1/headright.png" alt=""></div>
      <div class="title38"><img src="../assets/p3/title38.png" alt=""></div>
      <div class="sdna"><img src="../assets/p1/mainson3.png" alt=""></div>
      <div class="xxx" ref="mainson4"><img src="../assets/p1/mainson4.png" alt=""></div>
      <div class="center">
        <div class="arrowl"><img src="../assets/p3/arrowl.png" alt=""></div>
        <div class="arrowb"><img src="../assets/p3/arrowb.png" alt=""></div>
        <p>在这个充满甜蜜的女神节，</p>
        <p>Illumina也为大家精心准备了</p>
        <p>健康知识小问答活动。</p>
        <p>六道小问题，带你重拾健康。</p>
        <p>女神节，让我们健康不将就！</p>
        <p>你准备好了吗？来挑战吧！</p>
      </div>
      <div class="wave"></div>
      <div class="xuze">
        <div class="start" @click="next()"><img src="../assets/p3/start.png" alt=""></div>
        <div class="rule" @click="rule()"><img src="../assets/p3/rule.png" alt=""></div>
      </div>
      <div class="flower"><img src="../assets/p1/footerson4.png" alt=""></div>
      
      <div class="sexbg">
        <div class="sex" ref="sex">
          <div class="choose">&nbsp;&nbsp;&nbsp;请选择性别哟！</div>
          <div class="sexx" @click="surkbg1()">
            <label for="男">男<input type="radio" name="sex" class="nan" value="男" ></label>&nbsp;&nbsp;
            <label for="女">女<input type="radio" name="sex" class="nv" value="女"></label>
          </div>
          <div class="surk" @click="surk()">确定</div>
          <div class="surkbg" v-if="surkbg"></div>
        </div>
      </div>
      <div class="ss" ref="ss"></div>
    </v-touch>
  </div>
</transition>
</template>

<script>
import global from '../components/global.js'
export default {

  data () {
    return {
      surkbg:true,
      sexValue:""
    }
  },
  mounted(){
 
    // TweenMax.fromTo(this.$refs.ss, 0.01, {
		// 	  top:"5rem"
		// 	}, {
    //     opacity:1,
		// 		top:"6rem",
    //     ease: 'linear',
    //     yoyo: true,
    //     repeat: -1,
    //     onComplete:this.a()
    //   });
this.a();




},
methods:{



    a(){
          TweenMax.fromTo(this.$refs.sex, 1, {
			  opacity: 0,
        ease: 'linear'
			}, {
        opacity: 1,
        ease: 'linear',
        yoyo: true
      });
    },








      swipeUp() {
      this.global.transitionName = "up";
      this.$router.replace("/");
      },
			swipeDown() {
        this.global.transitionName = 'down';
        document.querySelector(".p2").style.display="none";
				this.$router.replace('/');
      },
      next(){
        document.querySelector(".p2").style.display="none";
        this.$router.replace('/p4');
        localStorage.setItem('sexValue', this.sexValue);
			},
      rule(){
      //  this.$router.push({path:'/p3',replace:true});
      document.querySelector(".p2").style.display="none";
      this.$router.replace('/p3');
      },
      surk(){
        $(".sexbg").css("display","none")
      },
      surkbg1(){
        this.surkbg=false
        var val = $('input[name="sex"]:checked').val();
        this.sexValue=val;
      }
      
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ss{
  width: 5rem;
  height: 2rem;
  position: absolute;
  left:1rem;
  top:5rem;
  border: 1px solid #000;
}
  .logo img,.headleft img,.headright img,.title38 img,.sdna img,.xxx img,.start img,.rule img,.flower img,
  .arrowl img,.arrowb img
  {
    width: 100%;
    height:100%;
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
    margin-top:1.5rem;
  }
  .headright{
    width: 1.7rem;
    height: 2.1rem;
    position: relative;
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
      margin-top:12%;
    }
    .sdna{
      width: 2.6rem;
      height: 2.9rem;
      position: relative;
      left: 10%;
      margin-top: -30%;
      /* transform: translate(-50%,-50%); */
    }
    .xxx{
      width: 2.8rem;
      height: 1.6rem;
      position: relative;
      left: 83%;
      margin-top: 13%;
      /* transform: translate(-50%,-50%); */
    }
    .center{
      width: 15rem;
      height: 11rem;
      position: relative;
      transform: translate(-50%,-50%);
      left:50%;
      margin-top:-12%;
      box-sizing: border-box;
      padding-top: 0.5rem;
    }
    .center p{
      color:#fff;
      font-size: 13px;
      text-align: center;
      line-height: 80%;
      letter-spacing: 0.12rem;
    }
    .arrowl{
      width: 3.5rem;
      height: 2.8rem;
      position: absolute;
      right: -1rem;
      top:-0.5rem;
    }
    .arrowb{
      width: 3.5rem;
      height: 2.8rem;
      position: absolute;
      left: -1rem;
      bottom:-0.5rem;
    }
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
      margin-top:-30%;
    }
    .xuze{
      position: relative;
      margin-top: -2px;
    }
    .start{
      width: 8rem;
      height: 2.8rem;
      position: absolute;
      transform: translate(-50%,-50%);
      left: 50%;
      bottom: 4%;
      z-index: 200;
    }
    .rule{
      width: 8rem;
      height: 2.8rem;
      position: absolute;
      transform: translate(-50%,-50%);
      left: 50%;
      z-index: 200;
    }
    .flower{
      width: 2.3rem;
      height: 1.7rem;
      position: relative;
      left: 15%;
      transform: translateX(-50%);
      bottom:3vh;
    }
    .sex{
    width: 225px;
    height: 200px;
    position: absolute;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    left: 50%;
    top: 20%;
    border-radius: 10px;
    background: rgba(0,0,0,0.3);
    -webkit-transition: all ease 2s;
    transition: all ease 2s;
    color: #fff;
    font-size: 18px; 
    opacity: 0;
    }
    .sexx{
      display:flex;
      justify-content: center;
      width: 100px;
      margin: 0 auto;
      /* border: 1px solid #000; */
    }
    .surk{
    width: 81px;
    height: 30px;
    background: rgba(39,160,245,1);
    margin: 0 auto;
    margin-top: 10px;
    text-align: center;
    line-height: 30px;
    border-radius: 5px;
    }
    .choose{
      text-align: center;
      letter-spacing: 2px;
      margin-bottom: 10px;
      margin-top: 50px;
    }
    .sexbg{
      width: 100%;
      height: 100%;
      position: absolute;
      left:0;
      top:0;
      z-index: 9999999999999;
    }
    .surkbg{
      width: 100px;
      height: 40px;
      /* background: red; */
      position: absolute;
      transform: translateX(-50%);
      left:50%;
      top:59%;
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


</style>
