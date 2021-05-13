var background,backgroundImg;
var ground1, Ground1G;
var kid , kidImg ,house , houseImg;
var invisibleGround;


var obstacle1,obstacle2;
var obstacle1Img,obstacle2Img;
var Obstacle1G,Obstacle2G;
var end , endImg;

var count = 0;

function preload(){
  backgroundImg = loadImage("images/bg.png");
  ground1 = loadImage("images/ground_cake.png");
  kid1Img = loadImage("images/kid_1_side.png");
  houseImg = loadImage("images/beachhouse_01.png");
  obstacle1Img = loadImage("images/gameplayobject02.png");
  obstacle2Img = loadImage("images/gameplayobject03.png");
  endImg = loadAnimation("images/gameOver.png");
  
}

function setup() {
  createCanvas(displayWidth -20,displayHeight -30);
  background=createSprite(displayWidth/2 -100,displayHeight/2 -100);
  background.addImage(backgroundImg);
  background.velocityX = -4;


  house =createSprite(displayWidth/2 +650 ,520);
  house.addImage(houseImg);

  kid = createSprite(100 ,650);
  kid.addImage(kid1Img);
  kid.scale= 0.4;
  
  invisibleGround = createSprite(730,730,1600,20)
  invisibleGround.visible = false;
  
  
  
  Ground1G = new Group();
  Obstacle1G = new Group();
  Obstacle2G = new Group();
  
  
}

function draw() {  
  edges=createEdgeSprites();
  if(background.x < 400 ){
    background.x = width/2;
    }

    if (keyDown("up")&&  kid.y >= 555) {

      kid.velocityY=-5;
  }
      kid.velocityY = kid.velocityY + 0.2;
   

  if (keyDown("left")) {
    
    kid.x = kid.x -4;
    
  }
  if (keyDown("right")) {
    
      kid.x = kid.x +4;
  
  }

  if(kid.isTouching(Ground1G)){
    kid.collide(Ground1G);
  }
  
//for gravity
   kid.velocityY = kid.velocityY + 0.5;
   kid.collide(invisibleGround);
   kid.collide(edges);
   

  if(kid.isTouching(house)){
    textSize(50);
    fill("black");
    text("YOU FIND THE HOUSE", 600,200);
  }
  
  createGround1();
 createObstacle1();
  createObstacle2();
 
  if(kid.isTouching(Obstacle1G)||kid.isTouching(Obstacle2G)){
    kid.x = 50;
    kid.y = 360;
    count = count + 1;
  }

  drawSprites();
  textSize(50);
  fill("red");
  text("DEATH:"+count,350,50);
 
}

function createGround1() {
  if (World.frameCount % 80 == 0) {
  var Ground1 = createSprite(Math.round(random(100, 1000),40,10, 10));
  Ground1.addImage(ground1);
  Ground1.scale=0.4;
  Ground1.velocityY = 2;
  Ground1.lifetime = 350;
  Ground1G.add(Ground1);
  }
}

function createObstacle1() {
  if (World.frameCount % 150 == 0) {
  var Obstacle1 = createSprite(Math.round(random(100, 1000),40, 10, 10));
  Obstacle1.addImage(obstacle1Img);
  Obstacle1.scale=0.2;
  Obstacle1.velocityY = 3;
  Obstacle1.lifetime = 350;
  Obstacle1G.add(Obstacle1);
  }
}


function createObstacle2() {
  if (World.frameCount % 170 == 0) {
  var Obstacle2 = createSprite(Math.round(random(100, 1000),40, 10, 10));
  Obstacle2.addImage(obstacle2Img);
  Obstacle2.scale=0.2;
  Obstacle2.velocityY = 3;
  Obstacle2.lifetime = 350;
  Obstacle2G.add(Obstacle2);
}
}

