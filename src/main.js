// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueTouch from "vue-touch";
import global from "./components/global";
import axios from "axios";
import FileLoader from "./DT_FileLoader";
// import { promises } from 'fs';
// import mint-ui from "mint-ui"
// import 'animate.css'
Vue.use(VueTouch, { name: "v-touch" });
Vue.prototype.global = global;
Vue.prototype.axios = axios;
// Vue.use(mint-ui);

Vue.config.productionTip = false;

var audioUrl = "assets/music/musick1.mp3"; //音频路径

// function loadAudio(callback) {
//   var audio = new Audio(audioUrl);
//   audio.onloadedmetadata = callback;
//   audio.src = audioUrl;
//   // alert(aucio.s)
// }

//调用方法

// var fileLoader = new FileLoader([
//   "../assets/p1/logo.png",
//   "../assets/p1/headleft.png",
//   "../assets/p1/headright.png",
//   "../assets/p1/girl.png",
//   "../assets/p1/mainson1.png",
//   "../assets/p1/mainson2.png",
//   "../assets/p1/mainson3.png",
//   "../assets/p1/footerson2.png",
//   "../assets/p1/kka.png",
//   "../assets/p1/wave.png",
//   "../assets/p1/mainson4.png",
//   "../assets/p3/arrowb.png",
//   "../assets/p3/arrowl.png",
//   "../assets/p3/rule.png",
//   "../assets/p4/tlogo5.png",
//   "../assets/p4/next.png",
//   "../assets/p4/center.png",
//   "../assets/p1/wave.png",
//   "../assets/p1/erweima.jpg",
//   "../assets/p2/44-8.png",
//   "../assets/p2/43-8.png",
//   "../assets/p2/niu.png",
//   "../assets/p2/p2-23.png",
//   "../assets/p1/headright.png",
//   "../assets/p1/mainson3.png",
//   "../assets/p4/tlogo8.png",
//   "../assets/p1/footerson4.png",
//   "../assets/p4/next.png",
//   "../assets/p2/41-8.png",
//   "../assets/p2/42-8.png",
//   "../assets/p1/mainson3.png",
//   "../assets/p1/footerson4.png",
//   "../assets/p1/headright.png",
//   "../assets/p1/headleft.png",
//   "../assets/p1/allbg.jpg",
//   "../assets/p1/fenxiang2.png",
//   "assets/music/icon.png",
//   "../assets/p1/logo.png",
//   "../assets/p2/45-8.png",
//   "../assets/p1/mainson3.png",
//   "../assets/p1/footerson4.png",
//   "../assets/p1/headright.png",
//   "../assets/p1/headleft.png",
//   "../assets/p2/39-8.png",
//   "../assets/p2/40-8.png",
//   "../assets/p1/erweima.jpg",
//   "../assets/p2/41-8.png",
//   "../assets/p2/42-8.png",
//   "../assets/p1/headright.png",
//   "../assets/p2/nancheng.png",
//   "../assets/p2/nantu.png",
//   "../assets/p4/bgcheck2.png",
//   "../assets/p4/bgcheck1.png",
//   "../assets/p1/sc7.png",
//   "../assets/p1/sc6.png",
//   "../assets/p1/sc5.png",
//   "../assets/p1/sc4.png",
//   "../assets/p1/sc3.png",
//   "../assets/p1/sc2.png",
//   "../assets/p1/sc1.png"
// ]);
// fileLoader.WhenOneLoaded = function(loadedUrl, loadedCount, totalCounnt) {
//   //console.log(loadedUrl + '" loaded: ' + loadedCount + "/" + totalCounnt);
//   console.log(loadedCount + "<br/>" + totalCounnt);
//   document.querySelector("#homeLoading .loadP").innerText =
//     "加载中 " + parseInt((loadedCount / totalCounnt) * 100) + "%";
//   // +parseInt(loadedCount/totalCounnt*100) + "%";
// };
// fileLoader.Done = function(totalCount) {
// loadAudio(function(){
// $('#bgm').attr("src",audioUrl);
// var audio = new Audio(audioUrl);
// audio.onloadedmetadata = callback;
// audio.src = audioUrl;

// setTimeout(function(){
//   document.querySelector("#homeLoading").remove();
//   // alert("加载结束");
//     new Vue({
//     el: '#app',
//     router,
//     components: { App },
//     template: '<App/>'
//   });
// },1500)
//    promises.then(function(){
//    })
// });
// var p = new Promise(function(resolve, reject){
// setTimeout(function(){
// var audio = new Audio(audioUrl);
// audio.src = audioUrl;
// audio.onloadedmetadata = resolve()
// },500)
// alert("加载结束");
// resolve()
// })
// p.then(function(){
// alert(1)

// setTimeout(function(){
// document.querySelector("#homeLoading").remove();
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
// },500)
// })
// };
// fileLoader.StartLoading();
