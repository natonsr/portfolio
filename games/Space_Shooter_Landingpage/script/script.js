var screens=document.getElementById('screens');
var mainScene=document.getElementById('mainScene');

function handleScreens(e){
	var target=e.target;
	if(target.tagName=='IMG'){
		var activeThumb=document.querySelector('img.active');
		activeThumb.classList.remove('active');
		var src=target.getAttribute('src');
		mainScene.setAttribute('src',src);
		target.classList.add('active');
	}
}
window.onload=function(){
	screens.addEventListener('click',handleScreens);
}

