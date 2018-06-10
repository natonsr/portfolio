/***Entities***/
	class Entity{
		constructor(_x,_y,_name,_settings,_angle){
			this.x=_x;
			this.y=_y;
			this.name=_name;
			this.width=_settings.width;
			this.height=_settings.height;
			this.speed=_settings.speed;
			this.angle=_angle;
			this.path={
				shiftX:0,
				shiftY:0
			};
			this.state='';
		}
		draw(area){
			spriteManager.drawSprite(area,this);
		}
		update(dt){
			this.x+=this.path.shiftX*dt;
			this.y+=this.path.shiftY*dt;
		}
		updatePath(){
			this.path=calculatePath(this);
		}
		checkBounds(field){
			return isBounds(this, field);
		}
	};	
	
	class EnemiesShip extends Entity{
		constructor(_x,_y,_name,_settings,_type,_angle){
			for(let i=0;i<_settings.length;i++){
				if(_settings[i].type===_type){
					var settings=_settings[i];
					break;
				}
			}
			super(_x,_y,_name,settings,_angle);
			this.type=_type;
		}
		update(dt){
			super.update(dt);
		}
		checkBounds(field){
			if(super.checkBounds(field)){
				this.angle=calculateAng(this, field);
				this.updatePath();
			}
			return false;
		}	
	};
	
	class PlayerShip extends Entity{
		constructor(_x,_y,_name,_settings,_angle){
			super(_x,_y,_name,_settings,_angle);
			this.rotateAngle=_settings.rotateAngle;
			this.shift=_settings.shift;
			this.rockets=0;
			this.state='stop';
		}
		update(dt){
			super.update(dt);
		}
		rotate(direction){
			if(direction=='left'){
				this.angle-=this.rotateAngle;
			}
			if(direction=='right'){
				this.angle+=this.rotateAngle;
			}	
			if(this.angle<0){
				this.angle+=360;
			}
			else if(this.angle>=360){
				this.angle-=360;
			}
			super.updatePath();
		}
		move(direction){
			if(direction=='up'){
				this.y-=this.shift;
			}
			else if(direction=='down'){
				this.y+=this.shift;
			}	
		}
		checkBounds(field){
			if(super.checkBounds(field)){
				this.angle=calculateAng(this, field);
				this.updatePath();
			}
			return false;
		}	
	};
	
	class Rocket extends Entity{
		constructor(_x,_y,_name,_settings,_angle){
			super(_x,_y,_name,_settings,_angle);
		}
		update(dt){
			super.update(dt);
		}
		checkBounds(field){
			return super.checkBounds(field);
		}	
	};
	
	
	class Asteroid extends Entity{
		constructor(_x,_y,_name,_settings,_type,_angle){
			super(_x,_y,_name,_settings,_angle);
			this.type=_type;
		}
		update(dt){
			super.update(dt);
		}
		checkBounds(field){
			if( (this.x>field.right) || (this.y>field.bottom) ){
				return true;
			}
			else {
				return false;
			}
		}	
	};
	
	/**Explosions**/
	class Explosion{
		constructor(_x,_y,_settings){
			this.x=_x;
			this.y=_y;
			this.width=_settings.width;
			this.height=_settings.height;
			this.type=1;
			this.frames=_settings.frames;
		}
		draw(area){
			spriteManager.drawSprite(area,this);
		}
	};
	
	/**Game area **/
	class gameArea{
		constructor(_id,_width,_height){
			this.canvas=document.getElementById(_id);
			this.canvas.width=_width;
			this.canvas.height=_height;
			this.context=this.canvas.getContext('2d');
			this.gameField={
				left:0,
				right:this.canvas.width,
				top:0,
				bottom:this.canvas.height
			};
		}
		clear(){
			this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		}
	};
	