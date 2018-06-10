 //Handle sounds in audioCache// 
 // soundManager.soundOn==true - play with sounds
 //soundManager.soundOn==false - play without sounds
 
 var soundManager={
	 soundOn:true,
	 repeat:function(name){
		if(this.soundOn){
			audioCache[name].addEventListener('ended', ()=>{
				this.play(name);
			});		
		}
	 },
	 play:function(name){
		if(this.soundOn){
			audioCache[name].play(); 
		}	
	 },
	 pause:function(name){
		if(this.soundOn){
			audioCache[name].pause(); 
		}	
	 },
	 stop:function(name){
		if(this.soundOn){
			 let sound=audioCache[name];
			 sound.pause(); 
			 sound.currentTime = 0;
		}	 
	 },
	 stopAll:function(){
		if(this.soundOn){	
			for(let key in audioCache){
				 this.stop(key);
			}
		}	
	 }
 }

 