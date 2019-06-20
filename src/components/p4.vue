<template>
  <!-- <transitioi'nin'INn :name="global.transitionName"> -->
  <div class="p4">
    <!-- <v-touch @swipedown="swipeDown" @swipeup="swipeUp" class="touchWrapper"> -->
    <div class="logo">
      <img src="../assets/p1/logo.png" alt>
    </div>
    <div class="headleft">
      <img src="../assets/p1/headleft.png" alt>
    </div>
    <div class="title">
      <img src="../assets/p4/tlogo.png" alt>
    </div>

    <div class="headright">
      <img src="../assets/p1/headright.png" alt>
    </div>
    <div class="nt">
      <img src="../assets/p1/mainson3.png" alt>
    </div>

    <div class="pp">
      <div class="c1">准备好孕育一个新的生命了吗？你需要全面了解自己与老公的身体状况，以下说法错误的是：</div>
      <div class="center">
        <div class="list1" v-for="(item,index) in list" :key="index" @click="act(index)">
          <div class="listL" :class="{'active':pitchon==index}" ref="yellow">{{item.id}}</div>
          <div class="listR">{{item.title}}</div>
        </div>
        <!-- <div class="list1">
          <div class="listL">B</div>
          <div class="listR">男性孕前项目检查包括，血常规，泌尿系统检查，精液常规检查，肝功能，染色体异常等</div>
        </div>
        <div class="list1">
          <div class="listL">C</div>
          <div class="listR">包括染色体易位或倒位携带者，常染色体和X连锁隐性疾病基因在内的携带者筛查项目可以对准父母们在孕前进行生育指导</div>
        </div>
        <div class="list1">
          <div class="listL">D</div>
          <div class="listR">孕前检查只需要女方进行检查即可</div>
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
  name: 'p4',
  data() {
    return {
      list: [
        {
          id: 'A',
          title:
            '孕前检查一般建议在孕前3—6个月开始做检查'
        },
        {
          id: 'B',
          title:
            '孕前项目检查包括，血常规，生殖/泌尿系统检查，肝功能，染色体异常等；'
        },
        {
          id: 'C',
          title:
            '包括染色体易位或倒位携带者，常染色体和X连锁隐性疾病基因在内的携带者筛查项目可以对准父母们在孕前进行生育指导；'
        },
        {
          id: 'D',
          title: '孕前检查只需要女方进行检查即可'
        }
      ],
      pitchon: '8',
      sum: 0
    }
  },
  mounted() {},
  methods: {
    swipeUp() {
      this.global.transitionName = 'up'
      this.$router.replace('/p5')
    },
    swipeDown() {
      this.global.transitionName = 'down'
      this.$router.replace('/p3')
    },
    next() {
      // this.global.transitionName = "up";
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
      // this.$router.push({path:'/p5?id=' + this.sum,replace:true});
      this.$router.replace('/p5?id=' + this.sum)
    },
    act(index) {
      this.pitchon = index
      if (index == 3) {
        this.sum = 20
        // console.log(this.sum);
      } else {
        this.sum = 0
        // console.log(this.sum);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p4 {
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
  position: absolute;
  left: 86%;
  transform: translate(-50%, -50%);
  margin-top: 13%;
}
.title {
  width: 9.9rem;
  height: 3.4rem;
  position: relative;
  transform: translate(-50%, -50%);
  left: 50%;
  margin-top: -5%;
}
.pp {
  position: relative;
  width: 19.5rem;
  /* border: 1px solid #000; */
  margin: 0 auto;
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

/* 中间 */
.center {
  /* width: 18rem;
  height: 17.5rem; */
  width: 19.5rem;
  height: 15rem;
  background: url(../assets/p4/center.png);
  background-size: 100% 100%;
  position: relative;
  margin-top: 1rem;
  z-index: 1000;
  /* padding-top: 15px; */
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
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
  position: relative;
  left: 15%;
  transform: translateX(-50%);
  bottom: -2rem;
}
.next {
  width: 8rem;
  height: 2.8rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1vh;
  z-index: 1200;
}
</style>
