<template>
  <!-- <transition :name="global.transitionName"> -->
  <div class="p4">
    <!-- <v-touch @swipedown="swipeDown" @swipeup="swipeUp" class="touchWrapper"> -->
    <div class="logo">
      <img src="../assets/p1/logo.png" alt>
    </div>
    <div class="headleft">
      <img src="../assets/p1/headleft.png" alt>
    </div>
    <div class="title">
      <img src="../assets/p4/tlogo5.png" alt>
    </div>
    <div class="headright">
      <img src="../assets/p1/headright.png" alt>
    </div>
    <div class="nt">
      <img src="../assets/p1/mainson3.png" alt>
    </div>
    <div class="pp">
      <div class="c1">怀孕期间宝宝健康吗？这是每个准妈妈都很关注的事情，以下哪种是属于无创的产前检查方式？</div>
      <div class="center">
        <div class="list1" v-for="(item,index) in list" :key="index" @click="act(index)">
          <div class="listL" :class="{'active':pitchon==index}" ref="yellow">{{item.id}}</div>
          <div class="listR">{{item.title}}</div>
        </div>
        <!-- <div class="list1">
        <div class="listL">A</div>
        <div class="listR">无创产前筛查（NIPT/NIPT plus）</div>
      </div>
      <div class="list1">
        <div class="listL">B</div>
        <div class="listR">羊水穿刺检查</div>
      </div>
      <div class="list1">
        <div class="listL">C</div>
        <div class="listR">绒膜绒毛穿刺检查</div>
      </div>
      <div class="list1">
        <div class="listL">D</div>
        <div class="listR">以上都是</div>
        </div>-->
      </div>
    </div>
    <div class="wave"></div>
    <div class="footerone">
      <img src="../assets/p1/footerson4.png" alt>
    </div>
    <div class="next" @click="next()">
      <img src="../assets/p4/next.png" alt>
    </div>
    <!-- </v-touch> -->
  </div>
  <!-- </transition> -->
</template>

<script>
import global from '../components/global.js'
export default {
  name: 'p5',
  data() {
    return {
      list: [
        { id: 'A', title: '无创产前筛查（NIPT/NIPT plus）' },
        { id: 'B', title: '羊水穿刺检查' },
        { id: 'C', title: '绒膜绒毛穿刺检查' },
        { id: 'D', title: '以上都是' }
      ],
      pitchon: '8',
      score: this.$route.query.id,
      sum: 0
    }
  },
  mounted() {
    console.log(this.$route.query.id)
  },
  methods: {
    swipeUp() {
      // this.global.transitionName = 'up';
      this.$router.replace('/p6')
    },
    swipeDown() {
      this.global.transitionName = 'down'
      this.$router.replace('/p4')
    },
    next() {
      var yellow = this.$refs.yellow
      if (
        yellow[0].className == 'listL' &&
        yellow[1].className == 'listL' &&
        yellow[2].className == 'listL' &&
        yellow[3].className == 'listL'
      ) {
        alert('还没有选择哟')
        return
      }
      // this.$router.push({path:'/p6?id=' + this.sum,replace:true});
      this.$router.replace('/p6?id=' + this.sum)
    },
    act(index) {
      this.pitchon = index
      if (index == 0) {
        this.sum = 20 + parseInt(this.score)
      } else {
        this.sum = 0 + parseInt(this.score)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p4 {
  padding: relative;
  width: 100%;
  background-size: 100% 100%;
}
.logo img,
.headleft img,
.title img,
.c1 img,
.nt img,
.listR img,
.headright img,
.footerone img,
.next img {
  width: 100%;
  height: 100%;
}
.logo {
  width: 5.8rem;
  height: 1.4rem;
  position: relative;
  left: 23%;
  transform: translate(-50%, -50%);
  margin-top: 9%;
}
.headleft {
  width: 4rem;
  height: 3rem;
  position: relative;
  transform: translate(-50%, -50%);
  left: 32%;
  margin-top: 5vh;
}
.headright {
  width: 1.7rem;
  height: 2.1rem;
  position: relative;
  left: 86%;
  transform: translate(-50%, -50%);
  margin-top: -11%;
}
.title {
  width: 9.9rem;
  height: 3.4rem;
  position: relative;
  transform: translate(-50%, -50%);
  left: 50%;
  margin-top: -5%;
}
.c1 {
  color: #fff;
  position: relative;
  font-size: 13px;
  font-weight: bold;
  font-family: '思源黑体 CN';
  text-align: justify;
  line-height: 150%;
}
.nt {
  width: 2.6rem;
  height: 2.9rem;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 15%;
  margin-top: 11vh;
}
.pp {
  position: relative;
  width: 19.5rem;
  margin: 0 auto;
}
/* 中间 */
.center {
  /* width: 18rem;
      height: 16rem; */
  width: 19.5rem;
  height: 15rem;
  background: url(../assets/p4/center.png);
  background-size: 100% 100%;
  position: relative;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  left: 50%;
  z-index: 1000;
  margin-top: 1rem;
  /* padding-top: 15px; */
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
}

/* 下边DNA */
.wave {
  width: 100% !important;
  height: 15rem;
  background: url('../assets/p1/wave.png')
    no-repeat;
  background-size: 200% 120%;
  background-position: -3rem 0.4rem;
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 74%;
}
.list1 {
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 19px;
  padding-bottom: 17px;
}
.listL {
  width: 0.8rem;
  height: 0.8rem;
  border: 1px solid #ffb441;
  color: #ffb441;
  border-radius: 50%;
  line-height: 13px;
  text-align: center;
  font-size: 12px;
  padding: 5px;
  margin: 0 8px;
}
.active {
  background: #ffb441;
  color: #fff;
}
.listR {
  width: 254px;
  font-size: 12px;
  font-family: '思源黑体 CN';
  text-align: justify;
  color: #4a4a4a;
}
.footerone {
  width: 2.3rem;
  height: 1.7rem;
  position: absolute;
  left: 15%;
  transform: translateX(-50%);
  bottom: 10%;
}
.next {
  width: 8rem;
  height: 2.8rem;
  position: relative;
  bottom: -5vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1200;
}
.active {
  background: #ffb441;
  color: #fff;
}
</style>
