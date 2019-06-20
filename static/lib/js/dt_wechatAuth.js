function WECHATAUTH(host){
    //参数
    var _this = this;
    _this.ready = false;
    _this.host = host ? host : '';
    _this.wechatInfo = null;
    _this.onReadyFunc = function(){};
    _this.onReady = function(callback){
        if(_this.ready){
            callback(_this.wechatInfo);
        }else{
            _this.onReadyFunc = callback;
        }
    }

    //token
    var storedTokenIsValid = false;

    if(localStorage.getItem("token")&& localStorage.getItem("token_expires")){
        if(localStorage.getItem("token_expires") - Date.now() > 24*60*60*1000){
            storedTokenIsValid = true;
        }
    }
    if(storedTokenIsValid){
        console.log("token found in local storage.")
        var token = localStorage.getItem("token");
        // OnReady(token);
        getUserInfo(token)
    }else{
        console.log("no token found in local storage.")
        var _ticker = getParam("ticket");
        if(_ticker){
            console.log("using ticket from url.");
            // history.replaceState(null,null,removeParam("ticket",window.location.href));
            $.ajax({
                url:_this.host + '/Token',
                method: 'POST',
                data: {
                username: _ticker,
                grant_type: 'password'
                },
                success: function (data) {
                    console.log(data);
                    //window.token = data;
                    localStorage.setItem("token", data.access_token);
                    localStorage.setItem("token_expires", Date.parse(Object.getOwnPropertyDescriptor(data, '.expires').value));
                    // OnReady(data.access_token);
                    getUserInfo(data.access_token)
                    
                },
                error: function (xhr) {
                    console.log("existing ticket expired.");
                    console.log(xhr);
                    reDirectAuth();
                }
            })
        }else{
            console.log("no ticket found in url, redirecting...")
            reDirectAuth();
        }
    }





    //获取地址栏上参数
    function getParam(name) {
        var search = document.location.href;
        var pattern = new RegExp("[?&]" + name + "\=([^&#]+)", "g");
        var matcher = pattern.exec(search);
        var item = null;
        if (null != matcher) {
        try {
            item = decodeURIComponent(decodeURIComponent(matcher[1]));
        } catch (e) {
            try {
            item = decodeURIComponent(matcher[1]);
            } catch (e) {
            item = matcher[1];
            }
        }
        }
        return item;
    };

    //清楚地址栏上参数
    function removeParam(key, sourceURL) {
        var rtn = sourceURL.split("?")[0],
        param,
        params_arr = [],
        queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
        if (queryString !== "") {
        params_arr = queryString.split("&");
        for (var i = params_arr.length - 1; i >= 0; i -= 1) {
            param = params_arr[i].split("=")[0];
            if (param === key) {
            params_arr.splice(i, 1);
            }
        }
        rtn =params_arr.length == 0? rtn :(rtn + "?" + params_arr.join("&"));
        }
        return rtn;
    }


    //重新跳转
    function reDirectAuth(){
        var b64EncodedUrl = btoa(removeParam('ticket',window.location.href));
        // var protocol = location.protocol;
        // var slashes = protocol.concat("//");
        // var host = slashes.concat(window.location.hostname);
        window.location.href = _this.host + "/Authentication?redirectUrl=" + b64EncodedUrl
        // var link =    "http://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI1MjY3MjAwNQ==#wechat_redirect";
        // window.location.href = _this.host + "/Authentication?redirectUrl=" + b64EncodedUrl+"&followUrl="+link;
        // window.location.href = link;
    }

    function getUserInfo(token){
        console.log("WeChat Auth occured. access token got: " + token);
        $.ajax({
            url:_this.host + '/api/User/CurrentUser?returnOpenId=true',
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            data: {
            },
            success: function (res) {
                // alert(JSON.stringify(res));
                if (res.Result != "Success") {
                    //alert(1);
                    localStorage.removeItem("token");
                    localStorage.removeItem("token_expires");
                    reDirectAuth();
                }else{
                    //获取用户信息
                    console.log(res);
                    _this.ready = true;
                    _this.wechatInfo = res;
                    _this.onReadyFunc(res);
                }
            },
            error: function (xhr) {
                console.log(xhr);
                localStorage.removeItem("token");
                localStorage.removeItem("token_expires");
                reDirectAuth();
            }
        })
    }
}

