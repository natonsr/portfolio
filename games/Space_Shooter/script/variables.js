//Global variables//
	var imagesCache=[], audioCache=[], mainArea, bgArea, entities=[], explosions=[], player, rocket;

	var greetingScreen=document.getElementById('greetingScreen');
	var gameScreen=document.getElementById('gameScreen');
	var finishScreen=document.getElementById('finishScreen');
	var finishWin=document.getElementById('win');
	var finishLose=document.getElementById('lose');
	var statusScore=document.getElementById('statusScore');
	var statusRockets=document.getElementById('statusRockets');
	
	var startBtn=document.getElementById('startGame');	
	var gameField=document.getElementById('gameField');
	var controlBtns=document.getElementById('controlBtns');
	var restartBtn=document.getElementById('restartGame');
	var pauseBtn=document.getElementById('pauseGame');
	var continueBtn=document.getElementById('continueGame');
	
	