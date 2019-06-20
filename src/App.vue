<template>
  <div id="app">
    <!-- <img src=../assets//logo.png"> -->
    <!-- <transition :name="global.transitionName"> -->
      <router-view/>
    <!-- </transition> -->

    <img id="bgmIcon" ref="bgmIcon" src="assets/music/icon.png" @click="audioPlay" alt="">
    <audio id="bgm" ref="bgm" loop  preload="auto"  v-show="false">
      <source src="assets/music/musick1.mp3" type="audio/mp3">
    </audio>

  </div>
</template>

<script>
	

	
function addClass(dom,cls){
 var dom_clsName = dom.className;
 if(dom_clsName.indexOf(cls) === -1){
   dom.className = dom_clsName== '' ? cls : dom_clsName + ' ' + cls;
 }
}
function removeClass(dom,cls){
 var dom_clsName = dom.className;
 dom.className = dom_clsName.replace(cls,'').replace(/(^\s*) | (\s*$)/g,'');
}
export default {
  name: 'App',
  methods:{
 audioPlay(){
   if(this.$refs.bgm.paused){
     //添加class并播放
     addClass(this.$refs.bgmIcon,'playing');
     this.$refs.bgm.play();
   }else{
     removeClass(this.$refs.bgmIcon,'playing');
     this.$refs.bgm.pause();
   }
 },
 musicStart(){
   var _this = this;
   addClass(_this.$refs.bgmIcon,'playing');
   _this.$refs.bgm.play();
 }
  },
  mounted(){
 
 
 var _this = this;
 
 document.getElementById("bgm").addEventListener("canplay",function(){});
 console.log("music on page canplay");

	 onWeixinJSBridgeReady(function(){
	 	
	 	_this.musicStart();
	 	
	 });
	 function onWeixinJSBridgeReady(callback){
	 	
	 	if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
	 	    callback();
	 	} else {
	 	    if (document.addEventListener) {
	 	        document.addEventListener("WeixinJSBridgeReady", callback, false);
	 	    } else if (document.attachEvent) {
	 	        document.attachEvent("WeixinJSBridgeReady", callback);
	 	        document.attachEvent("onWeixinJSBridgeReady", callback);
	 	    }
	 	}
	 	
	 }
	 
	 
	 
  }
};
</script>

<style>
body,html{
  width: 100%;
  height: 100vh;
  margin: 0;
  background: #26BEC9;
  overflow: hidden;
}
#app>div{
  position: absolute;
  width:100vw;
  height:100vh;
  top:0;
  left:50%;
  margin-left:-50vw;
  overflow: hidden;
}


#bgmIcon{
    position: absolute;
    /* z-index: 100; */
    bottom: 1.2rem;
    left: 0.5rem;
    width: 0.7rem;
    z-index: 9999999999;
    width: 1.5rem;

}
#bgm{
  width:1px;
  height:1px;
}
.playing{
  animation:play 3s infinite linear;
}
@keyframes play{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg)
  }
}




























/* .up-enter-active{
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
} */
</style>

