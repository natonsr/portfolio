function init(){
	var headerMenuContainer=document.getElementById('header-menu-container')
	var headerMenuToggle=document.getElementById('header-menu-toggle');
	var footerMenuContainer=document.getElementById('footer-menu-container')
	var footerMenuToggle=document.getElementById('footer-menu-toggle');
	var currencyHead=document.getElementById('currency-head');
	var currencyContainer=document.getElementById('currency-container');


	function toggleContainer(container, displayMode){
		if(getComputedStyle(container).display=='none'){
			container.style.display=displayMode;
		}
		else{
			container.style.display='none';
		}
	}

	function selectCurrency(e){
		if(e.target.tagName=='LI'){
			currencyHead.innerText=e.target.innerText;
			toggleContainer(currencyContainer, 'block');
		}
	}

	headerMenuToggle.addEventListener('click',()=>{
		toggleContainer(headerMenuContainer, 'block');
	})

	footerMenuToggle.addEventListener('click',()=>{
		toggleContainer(footerMenuContainer, 'block');
	})

	currencyHead.addEventListener('click',()=>{
		toggleContainer(currencyContainer, 'block');
	})

	currencyContainer.addEventListener('click',selectCurrency);	
}	


function show(){
	var showTabsHeader=document.getElementById('show-tabs-nav-header');
	var showTabs=document.getElementById('show-tabs');
	var showTabsItems=showTabs.children;
	var showTabCurrent=showTabsItems[0];

	var showTabsNav=document.getElementById('show-tabs-nav');
	var showTabsNavItems=showTabsNav.children;
	
	var showLoad=document.getElementById('show-load');
	var showLeftBtn=document.getElementById('show-left-btn');
	var showRightBtn=document.getElementById('show-right-btn');
	
	var containerHeight=getComputedStyle(showTabCurrent).height;

	var showItemsNumber, currentItemFirst, currentItemLast, shiftWidth, shiftHeight, 
	containerWidth, containerShift, containerShiftLast, displayedItems, displayItemsCount;
	var showLeft, showRight;

	function toggleBtn(btn, isShow){
		if(isShow){
			btn.classList.remove('show_btn-notactive');
		}
		else{
			btn.classList.add('show_btn-notactive');	
		}
	}

	function initShow(){
		var itemStyle, containerStyle;
		showItemsNumber=showTabCurrent.children.length;
		itemStyle=getComputedStyle(showTabCurrent.children[0]);
		shiftWidth=parseInt(itemStyle.width)+parseInt(itemStyle.marginLeft)+parseInt(itemStyle.marginRight);	
		shiftHeight=parseInt(itemStyle.height)+parseInt(itemStyle.marginBottom)+parseInt(itemStyle.marginTop);
		containerStyle=getComputedStyle(showTabCurrent);
		containerShift=parseInt(containerStyle.marginLeft);
		containerWidth=parseInt(containerStyle.width);
		displayItemsCount=Math.floor(containerWidth/shiftWidth);
		containerShiftLast=Math.ceil(containerWidth/shiftWidth)*shiftWidth-containerWidth;
		isShiftLast=false;
		displayedItems=displayItemsCount;
		showLoad.disabled=false;
		showTabCurrent.style.height=containerHeight;
		
		if(showItemsNumber<displayItemsCount){
			displayItemsCount=showItemsNumber;
			showLeft=false;
			showRight=false;
		}
		else{
			showLeft=true;
			showRight=false;
		}
		toggleBtn(showLeftBtn, showLeft);
		toggleBtn(showRightBtn, showRight);

		currentItemFirst=0;
		currentItemLast=displayItemsCount-1;	
	}	

	function toggleContainer(container, displayMode){
		if(getComputedStyle(container).display=='none'){
			container.style.display=displayMode;
		}
		else{
			container.style.display='none';
		}
	}

	function runShow(direction){
		var newShowLeft, newShowRight;
		switch(direction){
			case 'left':{
							if(currentItemLast==showItemsNumber-1){
							}
							else{	
									if( (currentItemLast==showItemsNumber-2)  && (!isShiftLast) ){
										containerShift=containerShift-containerShiftLast;	
										isShiftLast=true;
									}	
									else{
										containerShift=containerShift-shiftWidth;
									}
									
									currentItemFirst++;
									currentItemLast++;
																			
								if(currentItemLast==showItemsNumber-1){
									newShowLeft=false;
									newShowRight=true;
								}
								else{
									newShowRight=true;
									newShowLeft=true;
								}
								
							}
							break;
						}
			case 'right':{
							if(currentItemFirst==0){
							}
							else{
								if( (currentItemFirst==1) && (isShiftLast) ) {
									containerShift=containerShift+containerShiftLast;
									isShiftLast=false;
								}
								else{
									containerShift=containerShift+shiftWidth;
								}
								
								currentItemFirst--;
								currentItemLast--;

								if(currentItemFirst==0){
									newShowLeft=true;
									newShowRight=false;
								}
								else{
									newShowRight=true;
									newShowLeft=true;
								}
							}
						    break;
						}			
		}
		showTabCurrent.style.marginLeft=containerShift+'px';
		
		if(showLeft!=newShowLeft){
			showLeft=newShowLeft;
			toggleBtn(showLeftBtn, showLeft);
		}
		if(showRight!=newShowRight){
			showRight=newShowRight;
			toggleBtn(showRightBtn, showRight);
		}
	}

	function handleTabs(e){
		var target=e.target;
		var tab;
		if(target.tagName=='LI'){
			tab=target.dataset.content;	
		}	
		if(tab){
			for(let i=0; i<showTabsItems.length; i++){
				if(showTabsItems[i].dataset.content==tab){
					showTabCurrent=showTabsItems[i];
					showTabsItems[i].classList.add('show_tab-active');
				}
				else{
					showTabsItems[i].classList.remove('show_tab-active');
				}
			}
		}
		else{
			return;
		}	
		initShow();

		if(screenWidth>640){
			for(let i=0; i<showTabsNavItems.length; i++){
				showTabsNavItems[i].classList.remove('show_tabs_nav-active');
				showTabsNavItems[i].classList.add('show_tabs_nav-notactive');
			}
			target.classList.add('show_tabs_nav-active');
			target.classList.remove('show_tabs_nav-notactive');
		}
		else{
			showTabsHeader.innerText=target.innerText;
			showTabsNav.style.display='none';	
		}
	}

	function handleShowLoadBtn(){
		currentHeight=parseInt(getComputedStyle(showTabCurrent).height);
		showTabCurrent.style.height=currentHeight+shiftHeight+'px';
		displayedItems+=displayItemsCount;
		if(displayedItems==showItemsNumber){
			showLoad.disabled=true;
		}
	}

	showLeftBtn.addEventListener('click',()=>{
		if(showLeft){
			runShow('left');
		}	
	})

	showRightBtn.addEventListener('click',()=>{
		if(showRight){
			runShow('right');
		}
	})
	
	showTabsHeader.addEventListener('click', ()=>{
		toggleContainer(showTabsNav,'block');
	});

	showTabsNav.addEventListener('click',handleTabs);
	showLoad.addEventListener('click', handleShowLoadBtn);

	
	initShow();

};

function off(){
	var offCards=document.getElementById('off-cards');
	var containerHeight=getComputedStyle(offCards).height;
	var itemsNumber=offCards.children.length;
	var displayedItems, shiftHeight, displayItemsCount;
	var offLoad=document.getElementById('off-load');

	function initOff(){
		var itemStyle=getComputedStyle(offCards.children[0]);
		var shiftWidth=parseInt(itemStyle.width)+parseInt(itemStyle.marginLeft)+parseInt(itemStyle.marginRight);
		shiftHeight=parseInt(itemStyle.height)+parseInt(itemStyle.marginBottom)+parseInt(itemStyle.marginTop);
		var containerStyle=getComputedStyle(offCards);
		var containerWidth=parseInt(containerStyle.width);
		displayItemsCount=Math.floor(containerWidth/shiftWidth);
		displayedItems=displayItemsCount;
		offLoad.disabled=false;
		offCards.style.height=containerHeight;
	}

	function handleOffLoadBtn(){
		currentHeight=parseInt(getComputedStyle(offCards).height);
		offCards.style.height=currentHeight+shiftHeight+'px';
		displayedItems+=displayItemsCount;
		if(displayedItems==itemsNumber){
			offLoad.disabled=true;
		}
	}

	offLoad.addEventListener('click', handleOffLoadBtn);
	initOff();
}

function slider(time){
	var sliderItems=document.getElementById('slider-items').children;
	var sliderLeftBtn=document.getElementById('slider-left-btn');
	var sliderRightBtn=document.getElementById('slider-right-btn');
	var sliderNav=document.getElementById('slider-nav');
	var sliderNavs=sliderNav.querySelectorAll('li');
	var slideIndex=0;
	var maxItem=sliderItems.length-1;

	function plusSlide(n) {
      var newSlideIndex=slideIndex+n;
      if (newSlideIndex > maxItem) {newSlideIndex = 0};
      if (newSlideIndex < 0) {newSlideIndex = maxItem} 
      if(n>0){
        showSlide(newSlideIndex, 'next');
      }
      else{
        showSlide(newSlideIndex, 'prev');
      }
    }

    function setSlider(sliderNumber){
		if(slideIndex==sliderNumber){
			return;
		}
		if(sliderNumber>slideIndex){
       		showSlide(sliderNumber, 'next');
      	}
      	else{
        	showSlide(sliderNumber, 'prev');
      	}
	}

	function setActiveNav(){
		for(let i=0;i<=maxItem;i++){
			sliderNavs[i].classList.remove('slider_nav_active');
		}	
		sliderNavs[slideIndex].classList.add('slider_nav_active');
	}

	function moveSlide(newSlideIndex, prev, next){
		var classNamePrev='slider_item_'+prev;
		var classNameNext='slider_item_'+next;
		sliderItems[slideIndex].classList.remove('slider_item_active');
		sliderItems[slideIndex].classList.add(classNamePrev);
		sliderItems[newSlideIndex].classList.remove(classNameNext);
		sliderItems[newSlideIndex].classList.add('slider_item_active'); 
	}

	function showSlide(newSlideIndex, direction){
		if(direction=='next'){
        sliderItems[newSlideIndex].classList.add('slider_item_next');  
        setTimeout(()=>{
        	moveSlide(newSlideIndex, 'prev','next');        
        },1); 
       
      }
     else if (direction=='prev'){
        sliderItems[newSlideIndex].classList.add('slider_item_prev');  
        setTimeout(()=>{
        	moveSlide(newSlideIndex, 'next','prev');        
        },1); 
       
    }

      setTimeout(function(){
        sliderItems[slideIndex].classList.remove('slider_item_next');
        sliderItems[slideIndex].classList.remove('slider_item_prev');
        slideIndex=newSlideIndex;
        setActiveNav();
      }, time);
 		
	}

	
	sliderLeftBtn.addEventListener('click',()=>{
		plusSlide(-1);

	})

	sliderRightBtn.addEventListener('click',()=>{
		plusSlide(1);
	})

	sliderNav.addEventListener('click',(e)=>{
		var sliderNumber;
		if(e.target.tagName=='LI'){
			sliderNumber=[].indexOf.call(sliderNavs, e.target);
			setSlider(sliderNumber);
		}
	})
};
	
	
var screenWidth;

window.onload=function(){
	screenWidth=document.documentElement.clientWidth;
	init();
	show();
	if(screenWidth>640){
		slider(500);	
	}
	else{
		off();
	}
}


