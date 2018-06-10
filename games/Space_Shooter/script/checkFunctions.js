//Function Check Element's conflict//
	function isBounds(obj, box){
		return ((obj.x<box.left-obj.width)||(obj.x>box.right+obj.width)||(obj.y<box.top-obj.height)||(obj.y>box.bottom+obj.height))?true:false;
	}
	
	function isCollision(obj1, obj2){
		var left1=obj1.x, left2=obj2.x, right1=obj1.x+obj1.width, right2=obj2.x+obj2.width;
		var top1=obj1.y, top2=obj2.y, bottom1=obj1.y+obj1.height, bottom2=obj2.y+obj2.height;
		var collision = true;
        if ((bottom1 < top2) || (top1 > bottom2) || (right1 < left2) || (left1 > right2)) {
           collision = false;
        }
        return collision;
	}