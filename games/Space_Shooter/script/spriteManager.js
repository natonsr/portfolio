//Sprite Draw on canvas//
//use imagesCache//
	var spriteManager={
		getSprite:function(name){
			return sprites[name];
		},
		getImage:function(name){
			return imagesCache[name];
		},
		drawSprite:function(area,obj){
			var ctx=area.context;
			var info;
			var name=obj.constructor.name;
			if(!name){
				return;
			}
			var sprite=this.getSprite(name);
			var image=this.getImage(sprite.img);
			if(Array.isArray(sprite.info)){
				for(let i=0;i<sprite.info.length;i++){
					if (sprite.info[i].type==obj.type){
						info=sprite.info[i];
						break;
					}
				}
			}
			else{
				info=sprite.info;
			}
			drawFromSprite(ctx,image,obj,info);
		},
		drawBg:function(area, bgName){
			var ctx=area.context;
			var sprite=this.getSprite(bgName);
			var image=this.getImage(sprite.img);
			drawFromPattern(ctx, 0, 0, area.canvas.width, area.canvas.height, image);
		}
	};
	
	function drawFromSprite(ctx,image,obj,info){
		ctx.save();
		ctx.translate(obj.x+obj.width/2,obj.y+obj.height/2);
		ctx.rotate(obj.angle*Math.PI/180);
		ctx.drawImage(image,
				info.x, info.y,
				info.width, info.height,
				-obj.width/2,-obj.height/2,
				obj.width, obj.height);
		ctx.restore();	
	}

	function drawFromPattern(ctx, x, y, width, height, patternImage){
		var pattern = ctx.createPattern(patternImage, 'repeat');
		ctx.fillStyle = pattern;
		ctx.fillRect(x, y, width, height);
	}