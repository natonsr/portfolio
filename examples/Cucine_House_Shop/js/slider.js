(function(){
var navBtns=document.getElementById('nav-btns');
var nextBtn=document.getElementById('next-btn');
var prevBtn=document.getElementById('prev-btn');
var sliderItems=document.getElementById('slide-wrapper').children;
var navBtnsElements=navBtns.children;
var slideIndex=0;
var maxItem=navBtnsElements.length-1;
var shiftWidth, currentShift, displayItemsCount, firstItem, lastItem;

function init(){
	var itemStyle=getComputedStyle(navBtnsElements[0]);
	shiftWidth=parseInt(itemStyle.width)+parseInt(itemStyle.marginLeft)+parseInt(itemStyle.marginRight);
	currentShift=parseInt(itemStyle.marginLeft);
	var containerStyle=getComputedStyle(navBtns);
	var containerWidth=parseInt(containerStyle.width);
	displayItemsCount=Math.floor(containerWidth/shiftWidth);
	firstItem=0;
	lastItem=displayItemsCount-1;
	if(lastItem<maxItem){
		nextBtn.classList.add('slider_arrow_active');
	}
}

function handleNavClick(e){
	if(e.target.tagName=='IMG'){
		let parent=e.target.parentNode;
		sliderItems[slideIndex].classList.remove('slider_active_item');
		navBtnsElements[slideIndex].classList.remove('slide-nav-btn-active');
		slideIndex=[].indexOf.call(navBtnsElements,parent);
		sliderItems[slideIndex].classList.add('slider_active_item');
		navBtnsElements[slideIndex].classList.add('slide-nav-btn-active');
	}
}

function moveNav(dir){
	var newLeft;
	if(dir=='left'){
		if(firstItem==0){
			return
		}
		else{
			currentShift+=shiftWidth;
			firstItem--;
			lastItem--;
			
		}
	}
	else if(dir=='right'){
		if(lastItem==maxItem){
			return
		}
		else{
			currentShift-=shiftWidth;
			firstItem++;
			lastItem++;
			
		}
	}
	navBtnsElements[0].style.marginLeft=currentShift+'px';
	if(firstItem==0)
	{
			prevBtn.classList.remove('slider_arrow_active');
	}
	else{
		prevBtn.classList.add('slider_arrow_active');
	}
	if(lastItem==maxItem){
		nextBtn.classList.remove('slider_arrow_active');
	}
	else{
		nextBtn.classList.add('slider_arrow_active');
	}

}

navBtns.addEventListener('click', handleNavClick);
nextBtn.addEventListener('click', ()=>{
	moveNav('right')
});
prevBtn.addEventListener('click', ()=>{
	moveNav('left')
});
init();
})()
