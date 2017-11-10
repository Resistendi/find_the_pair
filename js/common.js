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
  menuTitle.style.setProperty('animation', 'fadeOut 1s');
  menuPlayBtn.style.setProperty('animation', 'fadeOut 1s');
  menuHighScoresBtn.style.setProperty('animation', 'fadeOut 1s');
  menuColorTitle.style.setProperty('animation', 'fadeOut 1s');
  menuColorBtn.style.setProperty('animation', 'fadeOut 1s');
  menu.style.setProperty('animation-iteration-count', 'initial');
  hsWrapper.style.setProperty('visibility', 'visible');
  hsWrapper.style.setProperty('animation', 'hsWrapperIn 2s');

  setTimeout(function(){
    menuTitle.style.setProperty('visibility', 'hidden');
    menuPlayBtn.style.setProperty('visibility', 'hidden');
    menuHighScoresBtn.style.setProperty('visibility', 'hidden');
    menuColorTitle.style.setProperty('visibility', 'hidden');
    menuColorBtn.style.setProperty('visibility', 'hidden');
    menu.style.setProperty('visibility', 'hidden');
  }, 780);

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