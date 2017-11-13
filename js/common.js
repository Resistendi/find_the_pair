;
var mainWrapper = document.getElementById('mainWrapper');

//menu variables
var menu = document.getElementById('menu');
var menuTitle = document.getElementById('menuTitle');
var menuColorTitle = document.getElementById('menuColorTitle');
var menuPlayBtn = document.getElementById('menuPlayBtn');
var menuHighScoresBtn = document.getElementById('menuHighScoresBtn');
var menuColorBtn = document.getElementById('menuColorBtn');

//prestart menu elements
var playerName = document.getElementById('playerName');
var difficultyBtn = document.getElementById('difficulty');
var backBtn = document.getElementById('backBtn');
var startBtn = document.getElementById('startBtn');

//high scores page elements
var highScores = document.getElementById('highscores');
var hsWrapper = document.getElementById('hsWrapper');
var tabNav1 = document.getElementById('tab-nav-1');
var tabNav2 = document.getElementById('tab-nav-2');
var tabNav3 = document.getElementById('tab-nav-3');
var tabNav4 = document.getElementById('tab-nav-4');
var hsBackBtn = document.getElementById('hsBackBtn');

//change theme color
menuColorBtn.addEventListener("change", function(){
  mainWrapper.style.setProperty('--theme-color', menuColorBtn.value)
}, false);

//menu hide func
function menuFadeOut(){
  menuTitle.style.setProperty('animation', 'fadeOut 1s');
  menuPlayBtn.style.setProperty('animation', 'fadeOut 1s');
  menuHighScoresBtn.style.setProperty('animation', 'fadeOut 1s');
  menuColorTitle.style.setProperty('animation', 'fadeOut 1s');
  menuColorBtn.style.setProperty('animation', 'fadeOut 1s');
  playerName.style.setProperty('animation', 'fadeOut 1s');
  difficultyBtn.style.setProperty('animation', 'fadeOut 1s');
  backBtn.style.setProperty('animation', 'fadeOut 1s');
  startBtn.style.setProperty('animation', 'fadeOut 1s');
  
  setTimeout(function(){
      menuTitle.style.setProperty('visibility', 'hidden');
      menuPlayBtn.style.setProperty('visibility', 'hidden');
      menuHighScoresBtn.style.setProperty('visibility', 'hidden');
      menuColorTitle.style.setProperty('visibility', 'hidden');
      menuColorBtn.style.setProperty('visibility', 'hidden');
      menu.style.setProperty('visibility', 'hidden');
      playerName.style.setProperty('visibility', 'hidden');
      difficultyBtn.style.setProperty('visibility', 'hidden');
      backBtn.style.setProperty('visibility', 'hidden');
      startBtn.style.setProperty('visibility', 'hidden');

    }, 780);
}

//menu fade in func
function menuFadeIn(){
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
}

//game field fadeIn func
function gameFadeIn(){
  menu.style.setProperty('animation', 'fadeOut 1s');

  setTimeout(function(){
    game.style.setProperty('visibility', 'visible');
    game.style.setProperty('animation', 'fadeIn 1s');
    menu.style.setProperty('visibility', 'hidden');
  }, 800);
  setTimeout(function(){
    game.style.setProperty('animation', 'glowing .7s infinite alternate');
  }, 1500);
}

//prestart menu transition
menuPlayBtn.addEventListener("click", function(){
  menuPlayBtn.style.setProperty('animation', 'playBtnToName 1s');
  menuHighScoresBtn.style.setProperty('animation', 'highScoreBtnToDif 1s');
  menuColorTitle.style.setProperty('animation', 'fadeToBlack 1s');
  menuColorBtn.style.setProperty('animation', 'colorBtnOut 1s');

  setTimeout(function(){
    menuPlayBtn.style.setProperty('visibility', 'hidden');
    menuHighScoresBtn.style.setProperty('visibility', 'hidden');
    menuColorBtn.style.setProperty('visibility', 'hidden');
    menuColorTitle.style.setProperty('visibility', 'hidden');
  }, 780);

  setTimeout(function(){
    playerName.style.setProperty('visibility', 'visible');
    playerName.style.setProperty('animation', 'fadeToWhite .5s');
    difficultyBtn.style.setProperty('visibility', 'visible');
    difficultyBtn.style.setProperty('animation', 'fadeToWhite .5s');
    startBtn.style.setProperty('visibility', 'visible');
    startBtn.style.setProperty('animation', 'startFadeIn .5s');
    backBtn.style.setProperty('visibility', 'visible');
    backBtn.style.setProperty('animation', 'backFadeIn .5s');
  }, 800);
}, false);

//back menu transition
backBtn.addEventListener("click", function(){
  playerName.style.setProperty('animation', 'nameToPlayBtn 1s');
  difficultyBtn.style.setProperty('animation', 'diffToHSBtn 1s');
  backBtn.style.setProperty('animation', 'backToColor 1s');
  startBtn.style.setProperty('animation', 'startToColor 1s');

  setTimeout(function(){
    playerName.style.setProperty('visibility', 'hidden');
    difficultyBtn.style.setProperty('visibility', 'hidden');
  }, 850);

  setTimeout(function(){
    backBtn.style.setProperty('visibility', 'hidden');
    startBtn.style.setProperty('visibility', 'hidden');
 }, 650);

  setTimeout(function(){
    menuPlayBtn.style.setProperty('visibility', 'visible');
    menuPlayBtn.style.setProperty('animation', 'fadeToWhite .5s');
    menuHighScoresBtn.style.setProperty('visibility', 'visible');
    menuHighScoresBtn.style.setProperty('animation', 'fadeToWhite .5s');
    menuColorBtn.style.setProperty('visibility', 'visible');
    menuColorBtn.style.setProperty('animation', 'fadeToWhite .5s');
    menuColorTitle.style.setProperty('visibility', 'visible');
    menuColorTitle.style.setProperty('animation', 'fadeToWhite .5s');
 }, 800);  
}, false);

//high scores transition
menuHighScoresBtn.addEventListener("click", function(){
  menuFadeOut();
  hsWrapper.style.setProperty('visibility', 'visible');
  hsWrapper.style.setProperty('animation', 'hsWrapperIn 2s');

  setTimeout(function(){
    highScores.style.setProperty('visibility', 'visible');
    highScores.style.setProperty('animation', 'menuToHS 1s');
  }, 800);

  setTimeout(function(){
    tabNav1.checked=true;
    highScores.style.setProperty('animation', 'glowing .7s infinite alternate');
    hsBackBtn.style.setProperty('visibility', 'visible');
    hsBackBtn.style.setProperty('animation', 'fadeIn 1s');
  }, 1800);
}, false);

//back from hs transition
hsBackBtn.addEventListener("click", function(){
  hsBackBtn.style.setProperty('animation', 'fadeOut .3s');
  hsWrapper.style.setProperty('animation', 'fadeOut .7s');
  highScores.style.setProperty('animation', 'hsToMenu 2s');

  setTimeout(function(){
    hsBackBtn.style.setProperty('visibility', 'hidden');
  }, 50);
  setTimeout(function(){
    hsWrapper.style.setProperty('visibility', 'hidden');
  }, 450);
  setTimeout(function(){
    menuFadeIn();
  }, 1000);
  setTimeout(function(){
    highScores.style.setProperty('visibility', 'hidden');
    menu.style.setProperty('animation', 'glowing .7s infinite alternate');
    tabNav1.checked=false;
    tabNav2.checked=false;
    tabNav3.checked=false;
    tabNav4.checked=false;
  }, 1950);
}, false);

//Game Logic
var deck = [  '1♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥', 'A♥', 
              '1♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦', 'A♦', 
              '1♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣', 'A♣', 
              '1♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠', 'A♠', 
              '1★', '2★', '3★', '4★', '5★', '6★', '7★', '8★', '9★', '10★', 'J★', 'Q★', 'K★', 'A★', 
              'JR', 'JB'
             ];
var board = [];
var firstHalfOfBoard = [];
var secondHalfOfBoard = [];
var playerNameValue;
var difficultyValue;
var boardWrapper = document.getElementById('boardWrapper');
var seconds = 0;
var minutes = 0;
var boardCreated = false;
var firstOverturn = false;
var secondOverturn = false;
var firstCard;
var secondCard;
var tryCounter = 0;
var timerStopped = true;
var scores;
var successfulTries = 0;
var gamePauseBtn = document.getElementById('gamePauseBtn');
var pauseWrapper = document.getElementById('pauseWrapper');
var gamePauseContinueBtn = document.getElementById('gamePauseContinueBtn');
var gamePauseBackBtn = document.getElementById('gamePauseBackBtn');
var gameStarted = false;

function glowing(object){
  object.style.setProperty('animation', 'glowing .7s infinite alternate');
}

function severalRandom(min, max, num) {
    var i, arr = [], res = [];
    for (i = min; i <= max; i++ ) arr.push(i);
    for (i = 0; i < num; i++) res.push(arr.splice(Math.floor(Math.random() * (arr.length)), 1)[0]);
    return res;
}

function init(){
  playerNameValue = playerName.value;
  difficultyValue = difficulty.value;

  var severalRandomNumbers = severalRandom(0, 71, difficultyValue*difficultyValue/2);
  for(var i = 0; i < difficultyValue*difficultyValue/2; i++){
    firstHalfOfBoard.push(deck[severalRandomNumbers[i]]);
  }
  severalRandomNumbers = severalRandom(0, firstHalfOfBoard.length-1, difficultyValue*difficultyValue/2);
  for(var i = 0; i < firstHalfOfBoard.length; i++){
    secondHalfOfBoard.push(firstHalfOfBoard[severalRandomNumbers[i]]);
  }
  for(var i = 0; i < firstHalfOfBoard.length; i++){
    board.push(firstHalfOfBoard[i]);
    board.push(secondHalfOfBoard[i]);
  }
}

function gameTimer(){
  if(!timerStopped){
    if(seconds>=59){
      seconds = 0;
      minutes++;
    }else{
      seconds++;
    }
  } 
  document.getElementById('timer').textContent = ((minutes < 10) ? "0" : "") + minutes+":"+((seconds < 10) ? "0" : "") + seconds;
  setTimeout(function(){ gameTimer()}, 1000);
}

function createBoard(){
  for(var i = 0; i < difficultyValue*difficultyValue; i++){
    var div = document.createElement('div');
    div.id = "card";
    div.style.setProperty('animation', 'fadeIn 1s');
    div.textContent = board[i];
    if(difficultyValue == 6){
      div.style.setProperty('height', '83px');
      div.style.setProperty('width', '83px');
      div.style.setProperty('line-height', '83px');
      div.style.setProperty('font-size', '45px');
    }
    if(difficultyValue == 8){
      div.style.setProperty('height', '60px');
      div.style.setProperty('width', '60px');
      div.style.setProperty('line-height', '60px');
      div.style.setProperty('font-size', '30px');
    }
    if(difficultyValue == 10){
      div.style.setProperty('height', '46px');
      div.style.setProperty('width', '46px');
      div.style.setProperty('line-height', '46px');
      div.style.setProperty('font-size', '24px');
    }
    if(difficultyValue == 12){
      div.style.setProperty('height', '36px');
      div.style.setProperty('width', '36px');
      div.style.setProperty('line-height', '36px');
      div.style.setProperty('font-size', '20px');
    }
    boardWrapper.appendChild(div);
  }
  setTimeout(function(){
    boardWrapper.style.setProperty('animation', 'fadeToBlack 1s');
    setTimeout(function(){
      boardWrapper.style.setProperty('color', 'black');
      boardCreated = true;
    }, 900);
    }, 10000);
}

function scoreCalculation(){
  var minTime = difficultyValue*difficultyValue/2 * 4;
  var maxTime = 0;
  var absTime = minutes * 60 + seconds;
  var maxTries = difficultyValue*difficultyValue;
  var tryScore;

  for(var i = 0, diff = difficultyValue*difficultyValue*2; i < difficultyValue*difficultyValue/2; i++, diff = diff - 4){
    maxTime += diff;
  }
  
  maxTime -= minTime;
  absTime -= minTime;
  tryScore = tryCounter - maxTries;

  if(tryScore > 0)
    absTime += tryScore * 4;

  if(absTime > maxTime)
    scores = 0;
  else if(absTime <= 0)
    scores = 100;
  else
    scores = 100 - (absTime * 100 / maxTime);
  
}
gameTimer();
function gameLogic(){
  boardWrapper.onclick = function(event){
    var target = event.target;
    if(target.id == 'card' && boardCreated && !firstOverturn){
      target.style.setProperty('animation', 'selecting 1s');
      target.className = "selected";
      firstCard = target;
      firstOverturn = true;
    }else if(target.id == 'card' && boardCreated && !secondOverturn && target != firstCard){
      target.style.setProperty('animation', 'selecting 1s');
      target.className = "selected";
      secondCard = target;
      secondOverturn = true;
      tryCounter++;
      document.getElementById('tries').textContent = tryCounter;
      if(firstCard.textContent == secondCard.textContent){
        setTimeout(function(){
          firstCard.style.setProperty('animation', 'fadeOut 1s');
          secondCard.style.setProperty('animation', 'fadeOut 1s');
        }, 1100);
        setTimeout(function(){
          firstCard.style.setProperty('visibility', 'hidden');
          secondCard.style.setProperty('visibility', 'hidden');
          firstOverturn = false;
          secondOverturn = false;
        }, 2000);
        successfulTries++;
        //TODO
      }else{
        setTimeout(function(){
          firstCard.style.setProperty('animation', 'deselecting 1s');
          secondCard.style.setProperty('animation', 'deselecting 1s');
        }, 900);
        setTimeout(function(){
          firstCard.className = null;
          secondCard.className = null;
          firstOverturn = false;
          secondOverturn = false;
        }, 1000);
      }
    }
    if(successfulTries >= difficultyValue*difficultyValue/2){
      scoreCalculation();
      timerStopped = true;
    }
  }
  gamePauseBtn.addEventListener("click", function(){
    pauseWrapper.style.setProperty("visibility", "visible");
    pauseWrapper.style.setProperty('animation', 'fadeIn .5s');
    timerStopped = true;
  }, false);
  gamePauseContinueBtn.addEventListener("click", function(){
    pauseWrapper.style.setProperty('animation', 'fadeOut .5s');
    setTimeout(function(){
      pauseWrapper.style.setProperty("visibility", "hidden");
     }, 250);
    timerStopped = false;
  }, false);
  gamePauseBackBtn.addEventListener("click", function(){
    game.style.setProperty('animation', 'fadeOut 1s');
    pauseWrapper.style.setProperty('animation', 'fadeOut .5s');

    setTimeout(function(){
      pauseWrapper.style.setProperty("visibility", "hidden");
     }, 250);

    setTimeout(function(){
      game.style.setProperty('visibility', 'hidden');
      menuFadeIn();
     }, 800);
    setTimeout(function(){
      menu.style.setProperty('animation', 'glowing .7s infinite alternate');
      gameDeconstructer();
     }, 1800);
  }, false);
}

function gameDeconstructer(){
  while(boardWrapper.firstChild){
    boardWrapper.removeChild(boardWrapper.firstChild);
  }
  boardWrapper.style.setProperty('color', 'white');
  gameStarted = false;
  minutes = 0;
  seconds = 0;
  firstOverturn = false;
  secondOverturn = false;
  boardCreated = false;
  timerStopped = false;
  tryCounter = 0;
  timerStopped = true;
  document.getElementById('tries').textContent = 0;
}

startBtn.addEventListener("click", function(){
  if(difficulty.value == 0){
    alert('choose difficulty');
  }else if(!gameStarted){
    gameStarted = true;
    menuFadeOut();
    gameFadeIn();
    init();
    setTimeout(createBoard(), 2000);
    gameLogic();
    var handle = setTimeout(function(){ timerStopped = false;}, 11000);
  }
}, false);

