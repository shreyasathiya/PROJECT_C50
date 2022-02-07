var player;
var playerImg,playerjumpImg,playerrunImg,door1Img;
var door1;
var START= 0;
var LEVEL1= 1;
var LEVEL2= 2;
var END=3;
var gameState = START;
var ground;

function preload(){
playerImg= loadImage("assets/player.png");
playerjumpImg = loadImage("assets/player-jumping.png")
playerrunImg = loadAnimation("assets/player-running.png","assets/player-running 2.png")
doorImg = loadImage("assets/door.png")
}

function setup(){
  createCanvas(2500,400)
player = createSprite(25,300,50,10);
player.addImage(playerImg);
player.scale = 0.5

door1 = createSprite(2450,300,50,10);
door1.addImage(doorImg);
door1.scale=0.3

ground = createSprite(1250,360,2500,20);

}

function draw() {
  background("black");

  if(gameState===START){
    text("YOU TRAPPED IN A HAUNTED HOUSE. REACH THE door1 TO ESCAPE",300,50);
    text("PRESS SPACE TO START",450,100);
    if(keyDown("space")){
      gameState=LEVEL1;
      
    }
  }
  if(gameState===LEVEL1){
  if(keyDown("UP_ARROW")) {
    player.velocityY = -12;
    
  }

 // if(keyIsDown("RIGHT_ARROW")) {
 //   player.X += 12;
  //}
  door1.velocityX = -2
  if(player.isTouching(door1)){
    gameState=LEVEL2;
  }

 // camera.X=player.X;
  //camera.Y=player.Y;
  }
  player.velocityY+=0.8;
  player.collide(ground);
  drawSprites();
}