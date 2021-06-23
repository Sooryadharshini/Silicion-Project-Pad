// the global variable declaration
// canvas and the background image variable
var canvas, backgroundImage;

// gameState and finished players variable
var gameState = 0, finishedPlayers;
// plaeyer count, all players , distance, database
var playerCount;
var allPlayers;
var distance = 0;
var database;

// form, player and game variable
var form, player, game;

// background variables
var formBackground;
var gameBackground;
var gameBackground2;

// var position, playerPosition;

// the ship players - - total 4 player
var ship1, ship2, ship3, ship4;
// the ships variable
var ships;

// the preload function
function preload(){
  // background of form -- scenery
  formBackground = loadImage("images/loginbackgr.jpg");
  // game background image -- scenery
  gameBackground = loadImage("images/outers.jpg");
  // game background image -- solid colour
  gameBackground2 = loadImage("images/Solid_background.jpg");


  // ship images
  ship1img = loadImage("images/shipBlue.png");
  ship2img = loadImage("images/shipBrown.png");
  ship3img = loadImage("images/shipRed.png");
  ship4img = loadImage("images/shipYellow.png");
}

// the setup function
function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
 // finishedPlayers = 0;
  yVel = 0;
  xVel = 0;

  xSet = false;
  game = new Game();
  game.getState();
  game.start();
  // playerPosition = database.ref("Player1/position");
  // playerPosition.on("value", readPosition);
}


// the draw funciton 
function draw(){
   //start the game
   background(formBackground);

   //start the game
   if (playerCount === 4 ) {
     game.update(1);
     //fill('yellow');
     //textSize(35);
     //text("all players joined", displayWidth/2 - 225, displayHeight/2 - 100);
     background(gameBackground2);
   }
   else
   {
     fill('yellow');
     textSize(35);
     text("Waiting for others players" , displayWidth/2 - 200, displayHeight/2 - 200);
     text("no of players:- " + playerCount, displayWidth/2 - 50, displayHeight/2 - 100);
   }
 
   //start the game for real
   if (gameState === 1) {
     game.play();
   }
   if (gameState === 2) {
     console.log("End");
   }
  }
  
  
  // the read position function
// function readPosition(data){
  // reading the database position
  // changing the ballx  and ball y position to the database position
  // position = data.val();
  // player.x = Player1.position.x;
  //player.y = Player1.position.y;
// }