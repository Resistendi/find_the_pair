;
var mainWrapper = document.getElementById('mainWrapper');

//menu variables
var menuTitle = document.getElementById('menuTitle');
var menuPlayBtn = document.getElementById('menuPlayBtn');
var menuHighScoresBtn = document.getElementById('menuHighScoresBtn');
var menuColorBtn = document.getElementById('menuColorBtn');

//prestart menu variables
var playerName = document.getElementById('playerName');
var difficultyBtn = document.getElementById('difficulty');

//change theme color
menuColorBtn.addEventListener("change", function(){
  		mainWrapper.style.setProperty('--theme-color', menuColorBtn.value)
	}, false);

//prestart menu transition
menuPlayBtn.addEventListener("click", function(){
  		//menuTitle.style.setProperty('animation', 'fadeToBlack');
  		//menuTitle.style.setProperty('animation-duration', '1s');
  		menuPlayBtn.style.setProperty('animation', 'playBtnToName');
  		menuPlayBtn.style.setProperty('animation-duration', '1s');
  		menuHighScoresBtn.style.setProperty('animation', 'highScoreBtnToDif');
  		menuHighScoresBtn.style.setProperty('animation-duration', '1s');
  		//setTimeout(function(){
  		//	menuTitle.style.setProperty('visibility', 'hidden');
  	//	}, 1000);
  		setTimeout(function(){
  			menuPlayBtn.style.setProperty('visibility', 'hidden');
  		}, 800);
  		setTimeout(function(){
  			menuHighScoresBtn.style.setProperty('visibility', 'hidden');
  		}, 800);
  		setTimeout(function(){
  			playerName.style.setProperty('visibility', 'visible');
  			playerName.style.setProperty('animation', 'fadeIn');
  			playerName.style.setProperty('animation-duration', '.5s');
  		}, 800);
  		 setTimeout(function(){
  			difficultyBtn.style.setProperty('visibility', 'visible');
  			difficultyBtn.style.setProperty('animation', 'fadeIn');
  			difficultyBtn.style.setProperty('animation-duration', '.5s');
  		}, 800);
	}, false);

