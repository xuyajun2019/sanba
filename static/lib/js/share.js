function _SHARE(){
    var _this = this;
    _this.is_weixn = false;
    _this.ways = {};
    _this.ready = false;
    _this.onReadyFunc = function(){};
    _this.onReady = function(callback){
        if(callback){
            if(_this.ready){
                callback();
            }else{
                _this.onReadyFunc = callback;
            }
        }
    }
    _this.registerFunc = function(funcName,func){
        if(typeof(funcName) != 'string' || typeof(func) != 'function'){
          return false;
        }else{
          _this.ways[funcName] = func;
          console.log("注册成功")
        }

    }
    _this.invokeFunc = function(funcName){
        if(typeof(funcName) != 'string' || !_this.ways[funcName] || !_this.ready || !_this.is_weixn){
            return false;
        }else{
          
          return _this.ways[funcName];
        }
    }

    _this.init = function(){
        _this.is_weixn = is_weixn();
        if(_this.is_weixn){
            requestHttp();
        }
    }

    _this.init();




    function requestHttp(){
        var uri = "http://wxmpcommon.dwechat.com/api/WeixinJSSDKApi ";
        $.getJSON(uri)
          .done(function(data) {
              //console.log(data);
              wx.config({
                  debug: false,
                  appId: data.AppId,
                  timestamp: data.Timestamp,
                  nonceStr: data.NonceStr,
                  signature: data.Signature,
                  jsApiList: [
                      'onMenuShareTimeline',
                      'onMenuShareAppMessage',
                      'hideMenuItems',
                      'showMenuItems'
                  ]
              });
          });
          wx.error(function(res) {
            console.log(res)  
          });

          wx.ready(function() {
            _this.ready = true;
            _this.onReadyFunc();  
          })
    }
    function is_weixn(){ 
        var ua = navigator.userAgent.toLowerCase(); 
        if(ua.match(/MicroMessenger/i)=="micromessenger") { 
            return true; 
        } else { 
            return false; 
        } 
    }
}





