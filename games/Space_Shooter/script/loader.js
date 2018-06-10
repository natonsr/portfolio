	//Loading images and audio files//
	//After loading make button Start game visible//
	//If error on loading audio, set soundManager.soundOn=false - play wihout sounds//	
	
	var loadInterval;
	
	function loadImg(src,key){
		if(imagesCache[key]){
			return imagesCache[key];
		}
		else{
			var img = new Image();
			img.onload = function() {
				imagesCache[key]=img;
			}
			imagesCache[key]=false;
			img.src=src;
		}
	}
	
	function loadAudio(src,key){
		if(audioCache[key]){
			return audioCache[key];
		}
		else{
			var aud = new Audio();
			aud.onloadeddata = function() {
				audioCache[key]=aud;
			}
			aud.onerror=function(){
				audioCache[key]='error';
			}
			audioCache[key]=false;
			aud.src=src;
		}
	}
	
	function isLoaded(){
		var loaded=true;
		var isAudioError=false;
		for(var k in imagesCache){
			if(!imagesCache[k]) {
				loaded = false;
			}
		}
		for(var k in audioCache){
			if(!audioCache[k]) {
				loaded = false;
			}
			else if(audioCache[k]=='error'){
				isAudioError=true;
			}
		}
		if(loaded){ 
			clearInterval(loadInterval);
			startBtn.style.display='block';
			startBtn.style.opacity=1;
			var loading=document.querySelector('.loading');
			loading.style.display='none';
			gameScreen.style.visibility='visible';
			finishScreen.style.visibility='visible';
			if(isAudioError){
				soundManager.soundOn=false;	
			}
			else{
				soundManager.soundOn=true;
			}
		}
	}
	
	window.onload=function(){
		for(var k in sprites){
			loadImg(sprites[k].img,sprites[k].img);
		}
		for(var k in SOUNDS_SETTINGS){
			loadAudio(SOUNDS_SETTINGS[k],k);
		}
		loadInterval=setInterval(isLoaded,100);
		screenManager.setActive(greetingScreen);
		
	}
	
	/******************************/
	
