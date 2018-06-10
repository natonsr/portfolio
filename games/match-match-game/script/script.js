function playGame(){
	const SET1={left:-20,
				top:0,
				width:80,
				height:120};
				
	var settings={
		columns:'5',
		rows:'2',
		shirt:'1',
		prefix_shirt:'shirt_',
		prefix_card:'set',
		path_shirt:'img/shirts',
		path_card:'img/set'
	};
		
	var cards=[], openCards=[], countCards=0;
	var timer;
	var menu=document.getElementById('menu');
	var btnNewGame=document.getElementById('new_game');
	var timerId=document.getElementById('timer');
	var gameField=document.getElementById('game_filed');
	
	function setTimer(timerId){
		var time=Date.now();
		return setInterval(function(){
							var date=Date.now();
							var currentTime=Math.floor((date-time)/1000);
							timerId.innerHTML=currentTime+'';
						},1000);
	}
	
	function setCards(rows,columns){
		var i=0, n=rows*columns;
		var arr=[];
		while(i<n){
			let newCard=Math.floor(Math.random()*n/2);
			let temp=arr.filter(function(item){
				return (item==newCard)
			});
			if(temp.length<2){
				arr.push(newCard);
				i++;
			}
		}
		return arr;
	}
	
	
	function drawField(gameField,settings){
		var html='',shirtName, cardName;
		gameField.innerHTML=html;
		for(let i=0;i<settings.rows;i++){
			html+="<div class='row'>";
				for(let j=0;j<settings.columns;j++){
					shirtName=settings.path_shirt+'/'+settings.prefix_shirt+settings.shirt+'.png';
					cardName=settings.path_card+'/'+settings.prefix_card+'.png';
					html+="<div class='card' data-index="+cards[i*settings.columns+j]+">";
					html+="<div class='front' style='background-image:url("+shirtName+")'></div>";
					html+="<div class='back' style='background-image:url("+cardName+");background-position:"+SET1.left+"px "+(-cards[i*settings.columns+j]*SET1.height-SET1.top)+"px;'></div>";
					html+="</div>";
				}	
			html+="</div>";
		}
		gameField.innerHTML=html;
	}
	
	function setPages(arr){
		for (let key in arr){
			let elem=document.querySelector(key);
			elem.style.zIndex=arr[key];
		}
	}	
	
	function collapseMenu(menu){
		var ul=menu.querySelectorAll('li.menu_item ul');
		if(ul){
			ul.forEach(function(item){
				item.classList.add('unvisible');
			});
		}	
	}
	
	function startNewGame(){
		openCards=[];
		clearInterval(timer);
		cards=setCards(settings.rows,settings.columns);
		countCards=cards.length;
		var pages=[];
		pages['.start_page']=1;
		pages['.field']=3;
		pages['.finish_page']=2;
		setPages(pages);
		drawField(gameField,settings);
		collapseMenu(menu);
		timerId.innerHTML='0';
		timer=setTimer(timerId);
	}
	
	
	function finishGame(){
		clearInterval(timer);
		var pages=[];
		pages['.start_page']=1;
		pages['.field']=2;
		pages['.finish_page']=3;
		setPages(pages);
		var elem=document.getElementById('finish_time');
		elem.innerHTML=timerId.innerText;
	}	
	
			
	function matchCards(card1,card2){
			if(card1.dataset.index==card2.dataset.index){
				card1.classList.add('disappear');
				card2.classList.add('disappear');
				countCards-=2;
				if(countCards==0){
					finishGame();
				}
			}
			card1.classList.remove('rotate');
			card2.classList.remove('rotate');
	}
	
	function handle_gameField(e){
		var elem=e.target;
		elem=elem.closest('div.card');
		if(!elem){return};
		if(!elem.classList.contains('disappear')&&(openCards.indexOf(elem)==-1))
			{
				elem.classList.add('rotate');
				openCards.push(elem);
			}
		if (openCards.length==2){
				setTimeout(matchCards.bind(null,openCards[0],openCards[1]),500);
				openCards=[];
			}
	}
	
	function handle_btnNewGame(e){
		startNewGame();
	}
	
	function handle_menu(e){
		var ul,li;
		var elem=e.target;
		if(elem.tagName!=='LI'){
			elem=elem.closest('li');
		}	
		if(!elem){return};
		if(elem.classList.contains('menu_item')){
			ul=elem.querySelector('ul');
			if(!ul){return;}
			ul.classList.toggle('unvisible');
		}	
		if(elem.classList.contains('submenu_item')){
			ul=elem.closest('ul');
			if(!ul){return;}
			li=ul.children;
			for(let i=0;i<li.length;i++){
				li[i].classList.remove('active');
			}
			elem.classList.add('active');
			
			var data=elem.dataset;
			if(data.shirt){
				settings.shirt=data.shirt;
			}
			if(data.columns){
				settings.columns=data.columns;
			}
			if(data.rows){
				settings.rows=data.rows;
			}
		}
	}

	
	menu.addEventListener('click', handle_menu);
	btnNewGame.addEventListener('click', handle_btnNewGame);
	gameField.addEventListener('click', handle_gameField);
	
}

document.addEventListener("DOMContentLoaded", function(e) { 
  playGame();
});
