<template>
  <div class="p2">
    <main id="p10">
    <div id="export"></div>
    <div class="allbg">
      <img src="../assets/p1/allbg.jpg" alt="">
    </div>
    <div class="logo">
      <img src="../assets/p1/logo.png" alt>
    </div>
    <div class="headleft">
      <div class="headleft1" ref="headleft1">
        <img src="../assets/p1/headleft.png" alt>
      </div>
    </div>
    <!-- 中间 -->
    <div class="main">
      <div class="mainbg"><img src="../assets/p2/39-8.png" alt=""></div>
      <div class="main2"><img src="../assets/p2/40-8.png" alt=""></div> 
      <div class="main4">
        <div class="main4zi">
          <p class>你是美与智慧的象征，愿你永远年轻，</p>
          <p>永远热泪盈眶</p>
        </div>
      </div>
    </div>
    <div class="main1">再难的题目也挡不住你体内的智慧基因，你注定是今天的智慧担当！</div>
    <div class="main3"></div>
    <div class="mainson3" ref="mainson3">
      <img src="../assets/p1/mainson3.png" alt>
    </div>
    <div class="wave"><div class="wave1"><img src="../assets/p1/wave.png" alt=""></div></div>
    <div class="footerson4">
      <img src="../assets/p1/footerson4.png" alt>
    </div>
    <div class="headright">
      <img src="../assets/p1/headright.png" alt>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <!-- <div class="fenshu">
        <span>分值&nbsp;{{score}}&nbsp;分</span>
      </div> -->
      <div class="erma"><img src="../assets/p1/erweima.jpg" alt=""></div>
      
    </div>
    <!-- <div class="name">{{name}}</div> -->
    </main>
    <div class="anniu"></div>
  </div>
</template>

<script>
import global from '../components/global.js'
import html2canvas from 'html2canvas'
export default {
  data() {
    return {
      score:this.$route.query.id,
      name:""
    }
  },
  mounted() {
    var that =this;
    // var wechatAuth = new WECHATAUTH('http://shareserver.dwechat.com');
    // wechatAuth.onReady(function(res) {
    // // console.log("555555555555555555555555555555555555555555555%c res", "color: pink", res);
    //     that.name=res.Data.Nickname;
    //     console.log("1111111111111111111111111111111111111111111111111")
    // })
    setTimeout(function() {
    that.saveing();
}, 2000);
  },
  methods:{
    // 保存图片
			saveing() {
          var box = document.getElementById('p10');
          // console.log('box', box);
          let that=this;
          html2canvas(box, {
          allowTaint: false
          }).then(function (canvas) {
          // console.log("canvas",canvas)
          document.getElementById('export').style.display = 'block';
          document.getElementById('export').appendChild(canvas);
         
          var image = new Image();
          image.src = canvas.toDataURL("image/png");
          document.getElementById('export').appendChild(image);
           $("#export img").css({"position":"absolute","left":"0","top":"0"});
          })     
      }
      
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.allbg img{

width:100%;
  height:100vh;
  overflow: hidden;
}
.p2 {
  background-size: 100% 100%;
  margin: 0px;
  padding: 0px;
}
.logo img,
.headleft1 img,
.headright img,.erma img,
/* .main1 img, */
.mainson3 img,
.footerson4 img,
.anniu img {
  width: 100%;
  height: 100%;
}
.logo {
  width: 5.6rem;
  height: 1.2rem;
  position: absolute;
  left: 23%;
  transform: translate(-50%, -50%);
  top: 6%;
}
.headleft {
  width: 4rem;
  height: 4rem;
  position: absolute;
  left: 45%;
  top: 10%;
}
.headleft1 {
  width: 4rem;
  height: 3rem;
  position: absolute;
  bottom: 10%;
  left: -90%;
}
.headright {
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 88%;
  top: 36%;
}

/* 中间图片 */
.main {
  width: 11rem;
  height: 20rem;
  /* background: url('../assets/p2/39-8.png') no-repeat; */
  background-size: 100%;
  position: absolute;
  left: 55%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
}
.mainbg img{
  width: 100%;
  height: 100%;
}
.main2 {
    width: 18rem;
    height: 10rem;
    margin: 0 auto;
    background-size: 100% 100%;
    z-index: 200;
    position: absolute;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    left: 41%;
    top: 61%;
}
.main2 img{
  width: 100%;
  height: 100%;
}
.main1 {
  color: white;
  font-family: '思源黑体 CN';
  /* writing-mode: horizontal-tb; */
  writing-mode: vertical-rl;
  /* writing-mode: vertical-lr; */
  /* writing-mode: sideways-rl; */
  /* writing-mode: sideways-lr; */
  font-weight: 700;
  width: 2.1rem;
  height: 11.5rem;
  letter-spacing: 2px;
  /* background: url('../assets/p2/p2-19.png') no-repeat;
  background-size: 100%; */
  position: absolute;
  font-size: 0.8rem;
  top: 13.5%;
  left: 12.5%;
}
.main3 {
  width: 3.6rem;
  height: 13.8rem;
  background: url('../assets/p2/40-10.png') no-repeat;
  background-size: 100%;
  position: absolute;
  right: 7%;
  top: 8.5%;
}
.main4 {
  width: 17rem;
  height: 6rem;
  background: url('../assets/p2/p2-23.png') no-repeat;
  background-size: 100%;
  position: relative;
  top: -7%;
  left: -37%;
  z-index: -1;
}
.main4zi {
  font-family: '思源黑体 CN';
  position: relative;
  top: 52%;
  text-align: center;
  font-size: 0.8rem;
  color: white;
  letter-spacing: 1px;
  font-weight: 700;
}
.mainson3 {
  width: 2.6rem;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 48%;
  left: 10%;
}
p {
  height: 15px;
  margin: 0;
  padding: 0;
}
.wave {
  width: 100% !important;
  height: 15rem;
  /* background: url('../assets/p1/wave.png') no-repeat; */
  background-size: 200% 120%;
  background-position: -3rem 0.4rem;
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 75%;
  overflow: hidden;
}
.wave1 {
    width: 130%;
    height: 18rem;
    left: -8%;
    position: relative;
    top: -7%;
}
.wave1 img{
  width: 100%;
  height: 100%;
}
.footerson4 {
  width: 2.5rem;
  height: 1.7rem;
  position: absolute;
  transform: translateX(-50%);
      left: 14%;
    top: 88%;
}
.footer {
  width: 100%;
  position: absolute;
  transform: translate(-50%, -50%);
  text-align: center;
  left: 50%;
  bottom:22px;
  color: white;
}
.fenshu {
  height: 3.2rem;
  line-height: 3.2rem;
  font-size: 14px;
}
.span {
  font-size: 2.5rem;
  font-family: '思源黑体 CN';
}
.anniu {
  width: 7rem;
  height: 2rem;
  margin: 0 auto;
  background: url('../assets/p2/niu.png') no-repeat;
  background-size: 100%;
  z-index: 200;
  position: absolute;
  transform: translate(-50%, -50%);
  left:50%;
  top:95%;
}
#p10{
  position: absolute;
  left:0;
  top:0;
  width: 100%;
  height:100vh;
}
#export{
position: absolute;
opacity: 0;
z-index: 5000; 
left: 0;
top: 0; 
height: 100vh;
width: 100%;
display: block;
overflow: hidden;
}

#export canvas{
  display: none;  
  height: 100% !important;
  width: 100%;
}
#export img{
  display: none;
}
.erma{
    position: absolute;
    width: 6rem;
    height: 6rem;
    right: 1rem;
    /* bottom: 0rem; */
    /* left: 10px; */
    top: -5.5rem;
}
/* .name{
    width: 112px;
    height: 40px;
    background: rgba(0,0,0,0.2);
    position: relative;
    z-index: 9999999999;
    margin: 0 auto;
    margin-top: -345px;
    color:#fff;
    font-size: 18px;
    text-align: center;
    line-height: 40px;
    border-radius: 20px;
} */
</style>

