//Handle greeting, game and finish screens//
//Shows score and rocket's count//

var screenManager={
	activeScreen:'',
	setActive:function(screen,result=''){ 
		if(!this.activeScreen){
			this.activeScreen=screen;
			this.activeScreen.style.zIndex=99;
		}
		else{
				if (screen!=this.activeScreen){
					screen.style.zIndex=99;
					this.activeScreen.style.zIndex=1;
					this.activeScreen=screen;
				}
		}
		
		if(result){
			switch(result){
				case 'win':{
					finishWin.style.display='block';
					finishLose.style.display='none';
					break;
				}
				case 'lose':{
					finishWin.style.display='none';
					finishLose.style.display='block';
					break;
				}
			}
		}
	},
	showRockets:function(rocketsCount){
		statusRockets.innerText=rocketsCount+'';
	},
	showScore:function(score){
		statusScore.innerText=score+'';
	}	
}