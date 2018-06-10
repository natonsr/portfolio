/***Functions Create Elements***/
		
	function createGameArea(parentElem){
		var width=parentElem.clientWidth;
		var height=parentElem.clientHeight;
		mainArea=new gameArea('canva1',width,height);
		bgArea=new gameArea('canva2',width,height);
		spriteManager.drawBg(bgArea,'spaceBg');
	}
	
		
	function createEnemies(_type, _count){
		var enemy, name, result=[];
		for(let i=0;i<_count;i++){
			name='enemyShip'+_type+'_'+i;
			enemy=new EnemiesShip(0, 0, name, ENEMIES_SHIP_SETTINGS, _type, 0);
			result.push(enemy);
		}
		return result;
	}

	
	function createPlayer(){
		var player;
		var name='playerShip';
		var playerSet=START_SETTINGS.player;
		var x=playerSet.x*mainArea.canvas.width;
		var y=playerSet.y*mainArea.canvas.height;
		player=new PlayerShip(x, y, name, PLAYER_SHIP_SETTINGS, playerSet.angle);
		player.updatePath();
		player.rockets=START_SETTINGS.player.rockets;
		player.state='move';
		return player;
	}
	
	
	function createRocket(owner){
		var name='rocket'+'_'+owner.rockets;
		var rocket=new Rocket(0, 0, name, ROCKET_SETTINGS, owner.angle);
		rocket.x=owner.x+owner.width/2-rocket.width/2;
		rocket.y=owner.y+owner.height/2-rocket.height/2;
		rocket.updatePath();
		owner.rockets--;
		return rocket;
	}
	
		
	function createAsteroids(type, name){
		return new Asteroid(0, 0, name, ASTEROID_SETTINGS, type, 0);
	}
	
	
	function createExplosion(obj1, obj2){
		var explX=(obj1.x+obj2.x)/2;
		var explY=(obj1.y+obj1.y)/2;
		var expl=new Explosion(explX,explY,EXPLOSION_SETTINGS);
		explosions.push(expl);
		soundManager.play('explosion');
	}
	
	
	
	
	
	