//Handle Game

	var gameManager={
		gameTime:0,
		lastTime:0,
		isGameOver:false,
		score:0,
		keyPressed:0,
		gameScene:0,
		resetGame:function(){			//reset all values and scenes
			this.gameTime=0;
			this.lastTime=Date.now();
			this.isGameOver=false;
			this.score=0;
			this.gameScene=0;
			entities=[];
			soundManager.stopAll();
			sceneManager.resetScenes();
		},
		initGame:function(){		
			createGameArea(gameField);	//create background			
			player=createPlayer();		//create player
			screenManager.showScore(this.score);
			screenManager.showRockets(player.rockets);
			soundManager.repeat('bgSound');	//play background music
			soundManager.play('bgSound');			
		},
		updateGame:function(){	//check is scenario done 
			if( !entities.length && sceneManager.isFinishScene(this.gameScene) && (player.state!=='kill') ){
				this.stopGame('win');
				return;
			}
			var currentTime=Math.round(this.gameTime*100)/100;
			if(sceneManager.checkScene(this.gameScene,currentTime,mainArea)){ //play next scene
				this.gameScene++;	
			}
			sceneManager.checkRandomScene(currentTime,mainArea);  //play random scene
			
		},
		renderGame:function(){	//draw all
			mainArea.clear();
			player.draw(mainArea);
			for(let i=0;i<entities.length;i++){
				entities[i].draw(mainArea);
			}
			for(let i=0;i<explosions.length;i++){
				explosions[i].draw(mainArea);
				explosions[i].type++;
			}
		},
		startGame:function(){	
			this.resetGame();
			this.initGame();
			this.updateGame();
			this.renderGame();
			this.handle=window.requestAnimationFrame(mainLoop);
		},
		pauseGame:function(){
			this.isGameOver=true;
			soundManager.pause('bgSound');	
			window.cancelAnimationFrame(this.handle);
		},
		continueGame:function(){
			this.isGameOver=false;
			this.lastTime=Date.now();
			soundManager.play('bgSound');	
			this.handle=window.requestAnimationFrame(mainLoop);
		},
		stopGame:function(result){
			this.isGameOver=true;
			window.cancelAnimationFrame(this.handle);
			screenManager.setActive(finishScreen,result); //show result screen
			soundManager.stop('bgSound');	
			soundManager.play(result);
		}
	}
	
		
	/***Main Game Loop***/

	function mainLoop(){
		if(gameManager.isGameOver){
			return;
		}
		var now = Date.now();
		var dt = (now - gameManager.lastTime) / 1000;
		
		/***Check bounds***/
		player.checkBounds(mainArea.gameField);
		for(let i=0;i<entities.length;i++){
			if (entities[i].checkBounds(mainArea.gameField)){
				entities.splice(i,1);
				i--;
			}
		}	
		
		/***Check Collisions***/
		/**Player with other***/
		for(let i=0;i<entities.length;i++){
			if(!entities[i].name.startsWith('rocket')){
				if(isCollision(entities[i], player)){
					createExplosion(player, entities[i]); //add explosions
					player.state='kill';
					entities[i].state='kill';
				}
			}
		}	
		
		/**Entities with each other***/
		for(let i=0;i<entities.length;i++){
			if(entities[i].state=='kill'){
				continue;
			}
			for(let j=0;j<entities.length;j++){
				if( (i==j) || (entities[j].state=='kill') ){
					continue;
				}
				if(entities[i].name.startsWith('enemy') && entities[j].name.startsWith('enemy')){
					continue;
				}
				if(isCollision(entities[i], entities[j])){
					if( (entities[i].name.startsWith('enemy') && entities[j].name.startsWith('rocket')) || (entities[j].name.startsWith('enemy') && entities[i].name.startsWith('rocket'))){
						gameManager.score++;	
						screenManager.showScore(gameManager.score);
					}
					createExplosion(entities[i], entities[j]); //add explosions
					entities[i].state='kill';
					entities[j].state='kill';
				}	
			}	
		}	
		
		/*** Check Keydown***/
		if(gameManager.keyPressed){
			if(gameManager.keyPressed=='left'){
				player.rotate('left');
			}
			if(gameManager.keyPressed=='right'){
				player.rotate('right');
			}
			if(gameManager.keyPressed=='up'){
				player.move('up');
			}
			if(gameManager.keyPressed=='down'){
				player.move('down');
			}
			if(gameManager.keyPressed=='stop_move'){
				if (player.state=='move'){
					player.state='stop';
				}
				else if (player.state=='stop'){
					player.state='move';
				}
				gameManager.keyPressed=false;
			}
			if(gameManager.keyPressed=='fire'){
				if(player.rockets>0){
					rocket=createRocket(player);
					entities.push(rocket);
					screenManager.showRockets(player.rockets);
				}
				gameManager.keyPressed=false;
			}
		}
		
		
		/***Check Player state***/
		switch(player.state){
			case 'move':{
				player.update(dt);
				break;
			}
			case 'stop':{
				break;
			}
			case 'kill':{
				gameManager.stopGame('lose');
				break;
			}
		}
		
		/***Update All***/
		for(let i=0;i<entities.length;i++){
			if(entities[i].state=='kill'){
				entities.splice(i,1);
				i--;
			}
			else{
				entities[i].update(dt);	
			}
		}
		
		for(let i=0;i<explosions.length;i++){
			if(explosions[i].type>explosions[i].frames){
				explosions.splice(i,1);
				i--;
			}
		}
		
		gameManager.renderGame();
		gameManager.lastTime = now;
		gameManager.gameTime+=dt;
		gameManager.updateGame();		
		gameManager.handle=window.requestAnimationFrame(mainLoop);
	}
	