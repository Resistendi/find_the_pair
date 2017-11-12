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
var boardCreated = false;
var firstOverturn = false;
var secondOverturn = false;
var firstCard;
var secondCard;

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
    setTimeout(function(){
      boardWrapper.style.setProperty('animation', 'fadeToBlack 1s');

      setTimeout(function(){
        boardWrapper.style.setProperty('color', 'black');
        boardCreated = true;
     }, 900);
    }, 10000);
  }
}

function gameLogic(){
  boardWrapper.onclick = function(event){
    var target = event.target;
    if(target.id == 'card' && boardCreated && !firstOverturn){
      target.style.setProperty('animation', 'selecting 1s');
      target.className = "selected";
      firstCard = target;
      firstOverturn = true;
    }else if(!secondOverturn){
      target.style.setProperty('animation', 'selecting 1s');
      target.className = "selected";
      secondCard = target;
      secondOverturn = true;
      if(firstCard.textContent == secondCard.textContent){
        setTimeout(function(){
          firstCard.style.setProperty('animation', 'fadeOut 1s');
          secondCard.style.setProperty('animation', 'fadeOut 1s');
        }, 1000);
        setTimeout(function(){
          firstCard.style.setProperty('visibility', 'hidden');
          secondCard.style.setProperty('visibility', 'hidden');
          firstOverturn = false;
          secondOverturn = false;
        }, 1900);
      }else{
        setTimeout(function(){
          firstCard.style.setProperty('animation', 'deselecting 1s');
          secondCard.style.setProperty('animation', 'deselecting 1s');
        }, 1000);
        setTimeout(function(){
          firstCard.className = null;
          secondCard.className = null;
          firstOverturn = false;
          secondOverturn = false;
        }, 1100);
      }
    }
  }
}


startBtn.addEventListener("click", function(){
  if(difficulty.value == 0){
    alert('choose difficulty');
  }else{
    menuFadeOut();
    gameFadeIn();
    init();
    setTimeout(createBoard(), 2000);
    gameLogic();
  }
}, false);

