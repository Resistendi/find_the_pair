var view = {
	mainWrapper: document.getElementById('mainWrapper'),
	menu: document.getElementById('menu'),
	menuTitle: document.getElementById('menuTitle'),
	menuColorTitle: document.getElementById('menuColorTitle'),
	playerName: document.getElementById('playerName'),
	difficultyBtn: document.getElementById('difficulty'),
	highScores: document.getElementById('highscores'),
	hsWrapper: document.getElementById('hsWrapper'),
	tabNav1: document.getElementById('tab-nav-1'),
	tabNav2: document.getElementById('tab-nav-2'),
	tabNav3: document.getElementById('tab-nav-3'),
	tabNav4: document.getElementById('tab-nav-4'),
	gameWrapper: document.getElementById('game'),
	winAlertWrapper: document.getElementById('winAlertWrapper'),
	pauseWrapper: document.getElementById('pauseWrapper'),
	gamePauseBtn: document.getElementById('gamePauseBtn'),
	boardWrapper: document.getElementById('boardWrapper'),
	gamePauseBackBtn: document.getElementById('gamePauseBackBtn'),
	pauseWrapper: document.getElementById('pauseWrapper'),

	menuFadeIn: function() {
		menuTitle.style.setProperty('visibility', 'visible');
	 	menuPlayBtn.style.setProperty('visibility', 'visible');
	  	menuHighScoresBtn.style.setProperty('visibility', 'visible');
	  	menuColorTitle.style.setProperty('visibility', 'visible');
	  	menuColorBtn.style.setProperty('visibility', 'visible');
	  	menu.style.setProperty('visibility', 'visible');
	  	menuTitle.style.setProperty('animation', 'fadeIn 1s');
	  	menuPlayBtn.style.setProperty('animation', 'fadeIn 1s');
	  	menuHighScoresBtn.style.setProperty('animation', 'fadeIn 1s');
	  	menuColorTitle.style.setProperty('animation', 'fadeIn 1s');
	  	menuColorBtn.style.setProperty('animation', 'fadeIn 1s');
	  	menu.style.setProperty('animation', 'fadeIn 1s');
	},

	menuFadeOut: function() {
		menuTitle.style.setProperty('animation', 'fadeOut 1s');
		menuPlayBtn.style.setProperty('animation', 'fadeOut 1s');
		menuHighScoresBtn.style.setProperty('animation', 'fadeOut 1s');
		menuColorTitle.style.setProperty('animation', 'fadeOut 1s');
		menuColorBtn.style.setProperty('animation', 'fadeOut 1s');
		playerName.style.setProperty('animation', 'fadeOut 1s');
		view.difficultyBtn.style.setProperty('animation', 'fadeOut 1s');
		backBtn.style.setProperty('animation', 'fadeOut 1s');
		startBtn.style.setProperty('animation', 'fadeOut 1s');

		setTimeout(function() {
			menuTitle.style.setProperty('visibility', 'hidden');
		    menuPlayBtn.style.setProperty('visibility', 'hidden');
		    menuHighScoresBtn.style.setProperty('visibility', 'hidden');
		    menuColorTitle.style.setProperty('visibility', 'hidden');
		    menuColorBtn.style.setProperty('visibility', 'hidden');
		    menu.style.setProperty('visibility', 'hidden');
		    playerName.style.setProperty('visibility', 'hidden');
    		view.difficultyBtn.style.setProperty('visibility', 'hidden');
		    backBtn.style.setProperty('visibility', 'hidden');
		    startBtn.style.setProperty('visibility', 'hidden');
		}, 780);
	},

	menuToPrestartMenu: function() {
		menuPlayBtn.style.setProperty('animation', 'playBtnToName 1s');
		menuHighScoresBtn.style.setProperty('animation', 'highScoreBtnToDif 1s');
		menuColorTitle.style.setProperty('animation', 'fadeToBlack 1s');
		menuColorBtn.style.setProperty('animation', 'colorBtnOut 1s');

		setTimeout(function() {
			menuPlayBtn.style.setProperty('visibility', 'hidden');
			menuHighScoresBtn.style.setProperty('visibility', 'hidden');
			menuColorBtn.style.setProperty('visibility', 'hidden');
			menuColorTitle.style.setProperty('visibility', 'hidden');
		}, 780);

	  	setTimeout(function() {
		    playerName.style.setProperty('visibility', 'visible');
		    playerName.style.setProperty('animation', 'fadeToWhite .5s');
		    view.difficultyBtn.style.setProperty('visibility', 'visible');
			view.difficultyBtn.style.setProperty('animation', 'fadeToWhite .5s');
		    startBtn.style.setProperty('visibility', 'visible');
		    startBtn.style.setProperty('animation', 'startFadeIn .5s');
		    backBtn.style.setProperty('visibility', 'visible');
		    backBtn.style.setProperty('animation', 'backFadeIn .5s');
	  	}, 800);
	},

	prestartMenuToMenu: function() {
		playerName.style.setProperty('animation', 'nameToPlayBtn 1s');
		view.difficultyBtn.style.setProperty('animation', 'diffToHSBtn 1s');
		backBtn.style.setProperty('animation', 'backToColor 1s');
		startBtn.style.setProperty('animation', 'startToColor 1s');

		setTimeout(function() {
			playerName.style.setProperty('visibility', 'hidden');
		    view.difficultyBtn.style.setProperty('visibility', 'hidden');
		}, 850);

		setTimeout(function() {
		    backBtn.style.setProperty('visibility', 'hidden');
		    startBtn.style.setProperty('visibility', 'hidden');
		}, 650);

		setTimeout(function() {
		    menuPlayBtn.style.setProperty('visibility', 'visible');
		    menuPlayBtn.style.setProperty('animation', 'fadeToWhite .5s');
		    menuHighScoresBtn.style.setProperty('visibility', 'visible');
		    menuHighScoresBtn.style.setProperty('animation', 'fadeToWhite .5s');
		    menuColorBtn.style.setProperty('visibility', 'visible');
		    menuColorBtn.style.setProperty('animation', 'fadeToWhite .5s');
		    menuColorTitle.style.setProperty('visibility', 'visible');
		    menuColorTitle.style.setProperty('animation', 'fadeToWhite .5s');
		}, 800);  
	},

	changeTheme: function() {
		mainWrapper.style.setProperty('--theme-color', menuColorBtn.value);
	},

	menuToHighScores: function() {
		this.menuFadeOut();

		hsWrapper.style.setProperty('visibility', 'visible');
  		hsWrapper.style.setProperty('animation', 'hsWrapperIn 2s');

		setTimeout(function() {
			view.highScores.style.setProperty('visibility', 'visible');
    		view.highScores.style.setProperty('animation', 'menuToHS 1s');
		}, 780);

  		setTimeout(function() {
			view.tabNav1.checked=true;
		    view.highScores.style.setProperty('animation', 'glowing .7s infinite alternate');
		    hsBackBtn.style.setProperty('visibility', 'visible');
		    hsBackBtn.style.setProperty('animation', 'fadeIn 1s');
		}, 1800);
	},

	highScoresToMenu: function() {
		hsBackBtn.style.setProperty('animation', 'fadeOut .3s');
		hsWrapper.style.setProperty('animation', 'fadeOut .7s');
		view.highScores.style.setProperty('animation', 'hsToMenu 2s');

		setTimeout(function() {
			hsBackBtn.style.setProperty('visibility', 'hidden');
		}, 50);

  		setTimeout(function() {
    		hsWrapper.style.setProperty('visibility', 'hidden');
  		}, 450);

  		setTimeout(function() {
    		view.menuFadeIn();
  		}, 1000);

  		setTimeout(function() {
    		view.highScores.style.setProperty('visibility', 'hidden');
		    menu.style.setProperty('animation', 'glowing .7s infinite alternate');
		    view.tabNav1.checked=false;
		    view.tabNav2.checked=false;
		    view.tabNav3.checked=false;
		    view.tabNav4.checked=false;	
  		}, 1950);
	},

	prestartMenuToGame: function() {
		view.menuFadeOut();
		menu.style.setProperty('animation', 'fadeOut 1s');

		setTimeout(function() {
		    view.gameWrapper.style.setProperty('visibility', 'visible');
		    view.gameWrapper.style.setProperty('animation', 'fadeIn 1s');
  		}, 800);

 		setTimeout(function() {
    		view.gameWrapper.style.setProperty('animation', 'glowing .7s infinite alternate');
  		}, 1500);
	},

	showBoard: function() {

	  	setTimeout(function(){
	    	boardWrapper.style.setProperty('animation', 'fadeToBlack 1s');

	    	setTimeout(function(){
	     		boardWrapper.style.setProperty('color', 'black');
	      		gamePauseBtn.style.setProperty('animation', 'fadeIn 1s');
	      		gamePauseBtn.style.setProperty('visibility', 'visible');
	    	}, 900);

	    }, 10000);
	},

	gameToPause: function() {
		pauseWrapper.style.setProperty("visibility", "visible");
    	pauseWrapper.style.setProperty('animation', 'fadeIn .5s');
	},

	pauseToGame: function() {
		pauseWrapper.style.setProperty('animation', 'fadeOut .5s');

    	setTimeout(function(){
      		pauseWrapper.style.setProperty("visibility", "hidden");
    	}, 250);
	},

	pauseToMenu: function() {
		view.gameWrapper.style.setProperty('animation', 'fadeOut 1s');
    	pauseWrapper.style.setProperty('animation', 'fadeOut .5s');
    	
    	setTimeout(function(){
      		pauseWrapper.style.setProperty("visibility", "hidden");
   		 }, 250);

    	setTimeout(function(){
     		view.gameWrapper.style.setProperty('visibility', 'hidden');
      		gamePauseBtn.style.setProperty('visibility', 'hidden');
      		view.menuFadeIn();
    	}, 800);

    	setTimeout(function(){
      		menu.style.setProperty('animation', 'glowing .7s infinite alternate');
    	}, 1800);
	},

	cardOverturn: function(target) {
		target.style.setProperty('animation', 'selecting 1s');
      	target.className = "selected border";
	},

	removeCards: function(firstCard, secondCard){
		setTimeout(function(){
        	firstCard.style.setProperty('animation', 'fadeOut .5s');
        	secondCard.style.setProperty('animation', 'fadeOut .5s');
        }, 900);
        setTimeout(function(){
          	firstCard.style.setProperty('visibility', 'hidden');
          	secondCard.style.setProperty('visibility', 'hidden');
        }, 1200);
	},

	refreshTryCounter: function(tryCounter){
		document.getElementById('tries').textContent = tryCounter;
	},

	deselecting: function(firstCard, secondCard) {
		setTimeout(function(){
        	firstCard.style.setProperty('animation', 'deselecting 1s');
          	secondCard.style.setProperty('animation', 'deselecting 1s');
        }, 900);
        setTimeout(function(){
          	firstCard.className = "border";
          	secondCard.className = "border";
        }, 1000);
	},

	winAlert: function(playerNameValue, scores, tryCounter, minutes, seconds){
		var lines = document.getElementById('winAlert').childNodes;
  		lines[1].textContent = "Congratulations " + playerNameValue + "!";
  		lines[3].textContent = "You won in " + minutes + " minutes " + seconds + " seconds, with " + tryCounter + " tries.";
  		lines[5].textContent = "Your scores: " + scores + ".";
  
  		document.getElementById('winAlertWrapper').style.setProperty("visibility", "visible");
  		document.getElementById('winAlertWrapper').style.setProperty('animation', 'fadeIn .5s');
	},

	winAlertToMenu: function(){
		view.gameWrapper.style.setProperty('animation', 'fadeOut 1s');
    	view.winAlertWrapper.style.setProperty('animation', 'fadeOut .5s');

    	setTimeout(function(){
      		view.winAlertWrapper.style.setProperty("visibility", "hidden");
    	}, 250);

    	setTimeout(function(){
      		view.gameWrapper.style.setProperty('visibility', 'hidden');
      		view.gamePauseBtn.style.setProperty('visibility', 'hidden');
      		view.menuFadeIn();
    	}, 800);

    	setTimeout(function(){
      		view.menu.style.setProperty('animation', 'glowing .7s infinite alternate');
    	}, 1800);
	}
};

var model = {
	deck: [  '1♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥', 'A♥', 
	              '1♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦', 'A♦', 
	              '1♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣', 'A♣', 
	              '1♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠', 'A♠', 
	              '1★', '2★', '3★', '4★', '5★', '6★', '7★', '8★', '9★', '10★', 'J★', 'Q★', 'K★', 'A★', 
	              'JR', 'JB'
	             ],
	board: [],
	firstHalfOfBoard: [],
	secondHalfOfBoard: [],
	playerNameValue: null,
	difficultyValue: null,
	seconds: 0,
	minutes: 0,
	boardCreated: false,
	timerStopped: true,
	scores: null,
	gamePauseBtn: document.getElementById('gamePauseBtn'),
	gamePauseContinueBtn: document.getElementById('gamePauseContinueBtn'),
	gameWinBackBtn: document.getElementById('gameWinBackBtn'),
	winAlertWrapper: document.getElementById('winAlertWrapper'),
	playerName: document.getElementById('playerName'),
	difficulty: document.getElementById('difficulty'),
	boardWrapper: document.getElementById('boardWrapper'),
	gameStarted: false,
	highScorePlayers: [],

	severalRandom: function(min, max, num) {
	    var i, arr = [], res = [];
	    for (i = min; i <= max; i++ ) arr.push(i);
	    for (i = 0; i < num; i++) res.push(arr.splice(Math.floor(Math.random() * (arr.length)), 1)[0]);
	    return res;
	},

	initBoard: function() {
  		this.playerNameValue = this.playerName.value;
  		this.difficultyValue = this.difficulty.value;

  		var severalRandomNumbers = this.severalRandom(0, 71, this.difficultyValue*this.difficultyValue/2);
  		for(var i = 0; i < this.difficultyValue*this.difficultyValue/2; i++){
    		this.firstHalfOfBoard.push(this.deck[severalRandomNumbers[i]]);
  		}
 		severalRandomNumbers = this.severalRandom(0, this.firstHalfOfBoard.length-1, this.difficultyValue*this.difficultyValue/2);
  		for(var i = 0; i < this.firstHalfOfBoard.length; i++){
    		this.secondHalfOfBoard.push(this.firstHalfOfBoard[severalRandomNumbers[i]]);
  		}
  		for(var i = 0; i < this.firstHalfOfBoard.length; i++){
    		this.board.push(this.firstHalfOfBoard[i]);
    		this.board.push(this.secondHalfOfBoard[i]);
  		}
	},

	createBoard: function() {
		for(var i = 0; i < this.difficultyValue*this.difficultyValue; i++){

    		var div = document.createElement('div');
    		div.className = "border";
    		div.id = "card";
    		div.style.setProperty('animation', 'fadeIn 1s');
    		div.textContent = this.board[i];

    		if(this.difficultyValue == 6){
      			div.style.setProperty('height', '83px');
      			div.style.setProperty('width', '83px');
      			div.style.setProperty('line-height', '83px');
      			div.style.setProperty('font-size', '45px');
    		}

    		if(this.difficultyValue == 8){
      			div.style.setProperty('height', '60px');
      			div.style.setProperty('width', '60px');
      			div.style.setProperty('line-height', '60px');
      			div.style.setProperty('font-size', '30px');
    		}

		    if(this.difficultyValue == 10){
			    div.style.setProperty('height', '46px');
			    div.style.setProperty('width', '46px');
			    div.style.setProperty('line-height', '46px');
			    div.style.setProperty('font-size', '24px');
		    }

    		if(this.difficultyValue == 12){
      			div.style.setProperty('height', '36px');
      			div.style.setProperty('width', '36px');
      			div.style.setProperty('line-height', '36px');
      			div.style.setProperty('font-size', '20px');
    		}
   			
   			this.boardWrapper.appendChild(div);
  		}
	},

	gameTimer: function(){
	  	if(!this.timerStopped){
	    	if(this.seconds>=59){
	      		this.seconds = 0;
	      		this.minutes++;
	    	}else{
	      		this.seconds++;
	    	}
	  	} 
	  	document.getElementById('timer').textContent = ((this.minutes < 10) ? "0" : "") + this.minutes+":"+((this.seconds < 10) ? "0" : "") + this.seconds;
	  	setTimeout(function(){ model.gameTimer() }, 1000);
	},

	pause: function() {
		this.timerStopped = true;
	},

	unpause: function() {
		this.timerStopped = false;
	},

	deconstructGame: function() {
		while(this.boardWrapper.firstChild){
    		this.boardWrapper.removeChild(this.boardWrapper.firstChild);
  		}
  		this.boardWrapper.style.setProperty('color', 'white');
		this.boardWrapper.style.setProperty('animation', null);
		this.minutes = 0;
		this.seconds = 0;
		this.boardCreated = false;
		this.timerStopped = false;
		this.tryCounter = 0;
		this.timerStopped = true;
		this.board = [];
		this.firstHalfOfBoard = [];
		this.secondHalfOfBoard = [];
		document.getElementById('tries').textContent = 0;
	},

	scoreCalculation: function() {
  		var minTime = this.difficultyValue*this.difficultyValue/2 * 2;
	  	var maxTime = 0;
	  	var absTime = this.minutes * 60 + this.seconds;
	  	var maxTries = this.difficultyValue*this.difficultyValue;
	  	var tryScore;

	  	for(var i = 0, diff = this.difficultyValue*this.difficultyValue; i < this.difficultyValue*this.difficultyValue/2; i++, diff--){
	    	maxTime += diff;
	  	}
	 	 
	  	maxTime -= minTime;
	  	absTime -= minTime;
	  	tryScore = this.tryCounter - maxTries;

	  	if(tryScore > 0)
	  		absTime += tryScore * 4;

	  	if(absTime > maxTime)
	    	this.scores = 0;
	  	else if(absTime <= 0)
	    	this.scores = 100;
	  	else
	    	this.scores = Math.round(100 - (absTime * 100 / maxTime));
	},

	highScoresCalculation: function(){
		var hsPlayer = {};
		var now = new Date();

		hsPlayer.name = this.playerNameValue;
		hsPlayer.score = this.scores;
		hsPlayer.date = now;

		if(this.difficultyValue == 6){
			this.highScorePlayers = localStorage.highScorePlayers6x6 ? JSON.parse(localStorage.highScorePlayers6x6) : [];
		}
		if(this.difficultyValue == 8){
			this.highScorePlayers = localStorage.highScorePlayers8x8 ? JSON.parse(localStorage.highScorePlayers8x8) : [];
		}
		if(this.difficultyValue == 10){
			this.highScorePlayers = localStorage.highScorePlayers10x10 ? JSON.parse(localStorage.highScorePlayers10x10) : [];
		}
		if(this.difficultyValue == 12){
			this.highScorePlayers = localStorage.highScorePlayers12x12 ? JSON.parse(localStorage.highScorePlayers12x12) : [];
		}

		this.highScorePlayers.push(hsPlayer);

  		//bubble sort
  		for (var i = this.highScorePlayers.length-1; i>=0; i--){
  			for(var j = 1; j<=i; j++){
  				if(this.highScorePlayers[j-1].score<this.highScorePlayers[j].score){
  					var temp = this.highScorePlayers[j-1];
  					this.highScorePlayers[j-1] = this.highScorePlayers[j];
  					this.highScorePlayers[j] = temp;
  				}
  			}
  		}

  		if(this.highScorePlayers.length > 10){
  			this.highScorePlayers.pop();
  		}

  		if(this.difficultyValue == 6)
  			localStorage.highScorePlayers6x6 = JSON.stringify(this.highScorePlayers);

  		if(this.difficultyValue == 8)
  			localStorage.highScorePlayers8x8 = JSON.stringify(this.highScorePlayers);

  		if(this.difficultyValue == 10)
  			localStorage.highScorePlayers10x10 = JSON.stringify(this.highScorePlayers);

  		if(this.difficultyValue == 12)
  			localStorage.highScorePlayers12x12 = JSON.stringify(this.highScorePlayers);

  		this.refreshHighScores();
  	},

	refreshHighScores: function(){

  		this.highScorePlayers = localStorage.highScorePlayers6x6 ? JSON.parse(localStorage.highScorePlayers6x6) : [];
  		for(var i = 0; i < this.highScorePlayers.length; i++){
  			var hsDate = new Date(this.highScorePlayers[i].date);
  			var dateStr = "Date: "+ hsDate.getDate() + "."+ (hsDate.getMonth() + 1) + "." + hsDate.getFullYear();
  			document.getElementById('table6x6').childNodes[1].childNodes[i*2].childNodes[3].setAttribute('data-title', dateStr);
  			document.getElementById('table6x6').childNodes[1].childNodes[i*2].childNodes[3].textContent = this.highScorePlayers[i].name;
  			document.getElementById('table6x6').childNodes[1].childNodes[i*2].childNodes[5].textContent = this.highScorePlayers[i].score; 
  		}

  		this.highScorePlayers = localStorage.highScorePlayers8x8 ? JSON.parse(localStorage.highScorePlayers8x8) : [];
  		for(var i = 0; i < this.highScorePlayers.length; i++){
  			var hsDate = new Date(this.highScorePlayers[i].date);
  			var dateStr = "Date: "+ hsDate.getDate() + "."+ (hsDate.getMonth() + 1) + "." + hsDate.getFullYear();
  			document.getElementById('table8x8').childNodes[1].childNodes[i*2].childNodes[3].setAttribute('data-title', dateStr);
  			document.getElementById('table8x8').childNodes[1].childNodes[i*2].childNodes[3].textContent = this.highScorePlayers[i].name;
  			document.getElementById('table8x8').childNodes[1].childNodes[i*2].childNodes[5].textContent = this.highScorePlayers[i].score;
  		}

  		this.highScorePlayers = localStorage.highScorePlayers10x10 ? JSON.parse(localStorage.highScorePlayers10x10) : [];
  		for(var i = 0; i < this.highScorePlayers.length; i++){
  			var hsDate = new Date(this.highScorePlayers[i].date);
  			var dateStr = "Date: "+ hsDate.getDate() + "."+ (hsDate.getMonth() + 1) + "." + hsDate.getFullYear();
  			document.getElementById('table10x10').childNodes[1].childNodes[i*2].childNodes[3].setAttribute('data-title', dateStr);
  			document.getElementById('table10x10').childNodes[1].childNodes[i*2].childNodes[3].textContent = this.highScorePlayers[i].name;
  			document.getElementById('table10x10').childNodes[1].childNodes[i*2].childNodes[5].textContent = this.highScorePlayers[i].score;
  		}

  		this.highScorePlayers = localStorage.highScorePlayers12x12 ? JSON.parse(localStorage.highScorePlayers12x12) : [];
  		for(var i = 0; i < this.highScorePlayers.length; i++){
  			var hsDate = new Date(this.highScorePlayers[i].date);
  			var dateStr = "Date: "+ hsDate.getDate() + "."+ (hsDate.getMonth() + 1) + "." + hsDate.getFullYear();
  			document.getElementById('table12x12').childNodes[1].childNodes[i*2].childNodes[3].setAttribute('data-title', dateStr);
  			document.getElementById('table12x12').childNodes[1].childNodes[i*2].childNodes[3].textContent = this.highScorePlayers[i].name;
  			document.getElementById('table12x12').childNodes[1].childNodes[i*2].childNodes[5].textContent = this.highScorePlayers[i].score;
  		}
  	},

  	win: function(){
		this.scoreCalculation();
		this.highScoresCalculation();
		this.pause();
	},

};

var controller = {
	gameStarted: false,
	boardCreated: false,
	firstOverturn: false,
	secondOverturn: false,
	firstCard: null,
	secondCard: null,
	tryCounter: 0,
	successfulTries: 0,

	playBtnHandler: function() {
		view.menuToPrestartMenu();
	},

	backBtnHandler: function() {
		view.prestartMenuToMenu();
	},

	colorBtnHandler: function() {
		view.changeTheme();
	},

	highScoresBtnHandler: function() {
		view.menuToHighScores();
	},

	hsBackBtnHandler: function() {
		view.highScoresToMenu();
	},

	startBtnHandler: function() {

		if(model.difficulty.value == 0){
			alert('choose difficulty');
		}else if(!this.gameStarted){
    		view.prestartMenuToGame();
			model.initBoard();
			model.createBoard();
			view.showBoard();
			setTimeout(function(){
				model.gameTimer();
				model.timerStopped = false;
		     	controller.boardCreated = true;
		    }, 10900);
  		}		
	},

	gamePauseBtnHandler: function() {
		model.pause();
		view.gameToPause();
	},

	gamePauseContinueBtnHandler: function() {
		model.unpause();
		view.pauseToGame();
	},

	gamePauseBackBtnHandler: function() {
		view.pauseToMenu();
		setTimeout(function(){
		     	model.deconstructGame();
		     	this.gameStarted = false;
		}, 1800);
	},

	cardClickHandler: function(target){

		if(target.id == 'card' && this.boardCreated && !this.firstOverturn){
			view.cardOverturn(target);
			this.firstCard = target;
			this.firstOverturn = true;
		}else if(target.id == 'card' && this.boardCreated && !this.secondOverturn && target != this.firstCard){
			view.cardOverturn(target);
			this.secondCard = target;
			this.secondOverturn = true;
			this.tryCounter++;
			view.refreshTryCounter(this.tryCounter);
			if(this.firstCard.textContent == this.secondCard.textContent){
				view.removeCards(this.firstCard, this.secondCard);
				this.successfulTries++;

				setTimeout(function(){
					controller.firstOverturn = false;
					controller.secondOverturn = false;	
				} , 1200);
			}else{
				view.deselecting(this.firstCard, this.secondCard);

				setTimeout(function(){
					controller.firstOverturn = false;
					controller.secondOverturn = false;	
				} , 1000);
			}
		}

		if(this.successfulTries >= model.difficultyValue*model.difficultyValue/2){
			model.win();
			view.winAlert(model.playerNameValue, model.scores, this.tryCounter, model.minutes, model.seconds);
		}
	},

	gameWinBackBtnHandler: function(){
		view.winAlertToMenu();
	}

};

(function(){ 
  var app = {

    init: function() {
    	this.main();
    	this.event();

    },

    main: function() {

    },
    
    event: function() {
    	var menuPlayBtn = document.getElementById('menuPlayBtn');
    	var menuHighScoresBtn = document.getElementById('menuHighScoresBtn');
		var menuColorBtn = document.getElementById('menuColorBtn');
		var backBtn = document.getElementById('backBtn');
		var startBtn = document.getElementById('startBtn');
		var hsBackBtn = document.getElementById('hsBackBtn');
		var boardWrapper = document.getElementById('boardWrapper');
		var gamePauseBtn = document.getElementById('gamePauseBtn');
		var gamePauseContinueBtn = document.getElementById('gamePauseContinueBtn');
		var gamePauseBackBtn = document.getElementById('gamePauseBackBtn');
		var gameWinBackBtn = document.getElementById('gameWinBackBtn');
    	menuPlayBtn.onclick = controller.playBtnHandler;
    	backBtn.onclick = controller.backBtnHandler;
    	menuColorBtn.onchange = controller.colorBtnHandler;
    	menuHighScoresBtn.onclick = controller.highScoresBtnHandler;
    	hsBackBtn.onclick = controller.hsBackBtnHandler;
    	startBtn.onclick = controller.startBtnHandler;
    	gamePauseBtn.onclick = controller.gamePauseBtnHandler;
    	gamePauseContinueBtn.onclick = controller.gamePauseContinueBtnHandler;
    	gamePauseBackBtn.onclick = controller.gamePauseBackBtnHandler;
    	gameWinBackBtn.onclick = controller.gameWinBackBtnHandler;
    	boardWrapper.onclick = function(event){
    		var target = event.target;
    		controller.cardClickHandler(target);
    	}
    }
  }
  app.init();
}());