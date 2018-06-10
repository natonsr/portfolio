//Phisic calculations//

function calculatePath(obj){
	var speedX=0, speedY=0;
	var path={
		shiftX:0,
		shiftY:0
	};
	var ang=obj.angle*Math.PI/180;
	speedX=Math.cos(ang)*obj.speed/2;
	speedY=Math.sin(ang)*obj.speed/2;
	path.shiftX=speedX;
	path.shiftY=speedY;
	return path;
  };


function calculateAng(obj, box){
	var res;
	res=obj.angle+180;
	if(res>=360){
		res-=360;
	}
	return res;
}		





