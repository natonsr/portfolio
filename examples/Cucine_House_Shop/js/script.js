(function(){
	var headerNavBtn=document.getElementById('header-nav-btn');
	var footerNavBtn=document.getElementById('footer-nav-btn');
	var headerNav=document.getElementById('header-nav');
	var footerNavMenu=document.getElementById('footer-nav-menu');

	function toggleContainer(container, displayMode){
			if(getComputedStyle(container).display=='none'){
				container.style.display=displayMode;
			}
			else{
				container.style.display='none';
			}
		}

	headerNavBtn.addEventListener('click', ()=>{
		toggleContainer(headerNav,'block');
	});
	footerNavBtn.addEventListener('click', ()=>{
		toggleContainer(footerNavMenu,'block');
	});
})()	