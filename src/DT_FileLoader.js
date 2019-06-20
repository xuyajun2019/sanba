var FileLoader = function (fileList) {
    var _this = this;
    this.FileList = fileList ? fileList : [];
    this.WhenOneLoaded = function (loadedImageUrl, loadedCount, totalCounnt) { console.log(loadedImageUrl + '" loaded: ' + loadedCount + "/" + totalCounnt); }
    this.Done = function (totalCount) { console.log(totalCount + ' files loaded.') }
    this.LoadedCounter = 0;

    this.StartLoading = function () {
        var toBeLoaded = _this.FileList.length;
        console.log("Start loading " + toBeLoaded + " files..");
        _this.FileList.forEach(function (url) {
            var type = getType(url);
            _this["preload" + type](url, function () {
                _this.LoadedCounter++;
                _this.WhenOneLoaded(url, _this.LoadedCounter, toBeLoaded);
                if (_this.LoadedCounter == toBeLoaded) {
                    _this.Done(toBeLoaded);
                }
            });
        });

        function getType(url) {
            var a = url.split(".");
            var ext = a[a.length - 1].toLowerCase();;
            var typeList = [
                { type: "Image", ext: ["png", "jpeg", "jpg", "bmp","gif"] },
                { type: "Audio", ext: ["mp3", "m4a", "aif", "wav"] },
                { type: "Vidio", ext: ["mp4", "mov", "mpeg", "wmv"] },
            ];
            for (var t = 0; t < typeList.length; t++) {
                if (typeList[t].ext.indexOf(ext) != -1) {
                    return typeList[t].type;
                }
            }
            return "Other";
        }
    }

    this.preloadImage = function (url, cb) {
        var img = new Image();
        img.onload = cb;
        img.src = url;
    }

    this.preloadAudio = function (url, cb) {
    	console.log("Audio loading: "+url)
        var audio = new Audio();
        // once this file loads, it will call loadedAudio()
        // the file will be kept by the browser as cache
        audio.addEventListener('canplaythrough', function(){
			console.log("Audio "+url+" is loaded.")
        	//cb();
        }, false);
    
       
         audio.addEventListener('progress', function(){
			console.log("Audio "+url+" is downloading..")	
        }, false);
        
        audio.addEventListener('loadstart', function(){
			console.log("Audio "+url+" loadstart..")	
        }, false);
        
        audio.addEventListener('loadeddata', function(){
			console.log("Audio "+url+" is loadeddata.")	
        }, false);
                audio.addEventListener('loadedmetadata', function(){
			console.log("Audio "+url+" is loadedmetadata.")	
        }, false);
        audio.addEventListener('canplay', function(){
			console.log("Audio "+url+" is canplay.")	;
			cb();
        }, false);
        audio.src = url;
        audio.load();
    }

    this.preloadVideo = function (url, cb) {
        console.log("video preloading is not supported");
        cb();
    }

    this.preloadOther = function (url, cb) {
        console.log(url + " preloading is not supported");
        cb();
    }
}

window.FileLoader = FileLoader;

export default FileLoader;