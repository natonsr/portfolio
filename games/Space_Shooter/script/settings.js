//Settings//

var sprites=[];
sprites['EnemiesShip']=enemiesShipSprite;
sprites['PlayerShip']=playerShipSprite;
sprites['Rocket']=rocketSprite;
sprites['Asteroid']=asteroidSprite;
sprites['Explosion']=explosionSprite;
sprites['spaceBg']=spaceSprite;

const ENEMIES_SHIP_SETTINGS=[
{
	type:1,
	width:82,
	height:80,
	speed:200
},
{
	type:2,
	width:108,
	height:96,	
	speed:250
},
{
	type:3,
	width:107,
	height:147,
	speed:300
},
{
	type:4,
	width:145,
	height:111,
	speed:350
}
];

const PLAYER_SHIP_SETTINGS={
	width:80,
	height:80,
	speed:120,
	shift:3,
	rotateAngle:4
};

const ROCKET_SETTINGS={
	width:33,
	height:8,
	speed:600
};

const ASTEROID_SETTINGS={
	types:2,
	width:100,
	height:75,
	speed:300
};

const EXPLOSION_SETTINGS={
	frames:4,
	width:56,
	height:70
};

const START_SETTINGS={
	enemies:{
		x:1,	//% from canvas.width
		y:0.5,	//% from canvas.height
		shiftX:0,	//px
		shiftY:10	// px
	},
	
	player:{
		x:0,	//% from canvas.width
		y:0.5,	//% from canvas.height
		angle:0,
		rockets:50
	}
};

const SOUNDS_SETTINGS={
	bgSound:'sounds/march.mp3',
	explosion:'sounds/laser.mp3',
	lose:'sounds/game_over.mp3',
	win:'sounds/fanfare.mp3'
};

var gameScenes=[
{
	time:0,
	enemy_type:1,
	done:false
},
{
	time:10.00,
	enemy_type:2,
	done:false
},
{
	time:20.00,
	enemy_type:1,
	done:false
},
{
	time:30.00,
	enemy_type:3,
	done:false
},
{
	time:40.00,
	enemy_type:1,
	done:false
},
{
	time:50.00,
	enemy_type:4,
	done:false
},
{
	time:60.00,
	enemy_type:2,
	done:false
},
{
	time:70.00,
	enemy_type:3,
	done:false
},
{
	time:80.00,
	enemy_type:4,
	done:false
},
{
	time:90.00,
	enemy_type:3,
	done:false
},
{
	time:100.00,
	enemy_type:4,
	done:false
}
];

