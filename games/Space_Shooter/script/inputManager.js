//Handle input from keyboard and pressed buttons

function handleInput(e){
	var code=e.keyCode;
	var key;
	if( (code==37) || (code==65) ){ //rotate counterclockwise: left or a
		key='left';
	}
	else if( (code==39)||(code==68) ){  //rotate clockwise: right or d
		key='right';
	}
	else if( (code==40)||(code==88) ){   //down:   down or x
		key='down';
	}
	else if( (code==38)||(code==87) ){   //up: up or w
		key='up';
	}
	else if( (code==32)||(code==90) ){  // fire:  space or z
		key='fire';
	}
	else if(code==83){ //stop/move: s
		key='stop_move';
	}
	else {
		key = String.fromCharCode(code);
	}           
  
	return key;
}


window.addEventListener('keydown', function (e) { //Handle keypress
	e.preventDefault();
    gameManager.keyPressed = handleInput(e);
});

window.addEventListener('keyup', function (e) {
    gameManager.keyPressed = false;
});

startBtn.addEventListener('click',function(){	//Start Game
	screenManager.setActive(gameScreen);
	gameManager.startGame(); 
});

restartBtn.addEventListener('click',function(){	//Restart Game
	screenManager.setActive(gameScreen);
	gameManager.startGame(); 
 });

 pauseBtn.addEventListener('click',function(){	//Pause Game
	gameManager.pauseGame(); 
});

continueBtn.addEventListener('click',function(){ //Continue Game
	gameManager.continueGame(); 
});

controlBtns.addEventListener('mousedown',function(e){	//Handle controls buttons
	if(e.target.tagName=='BUTTON'){
		e.stopPropagation();
		gameManager.keyPressed=e.target.dataset.btn;
	}
});

controlBtns.addEventListener('mouseup',function(e){	
	gameManager.keyPressed = false;
});
		