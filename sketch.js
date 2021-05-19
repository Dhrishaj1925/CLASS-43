var ghost, ghostrunning;
var edges, bird, canon, canonshoot;




function preload() {
  ghostrunning=loadAnimation("ghost1.png","ghost2.png","ghost3.png");
  birdFlying = loadImage("Bird.png");
  canonshoot = loadImage("Canon.png");
}

function setup(){
createCanvas(1200,400);

canon = createSprite(100,250,50,50);
canon.addImage(canonshoot);
canon.scale =0.7;
  edges=createEdgeSprites();
  startx = 100;
  starty = 250;
  angle = 0;
  increment =10;
}

function draw(){
  background("black");
  if(keyDown(DOWN_ARROW)){
    angle+=increment
    canon.x = startx + Math.cos(angle*Math.PI/180)
    canon.y = starty + Math.sin(angle*Math.PI/180)
    canon.rotation = 60-angle;
  }
  
  if(keyDown(UP_ARROW)){
    angle-=increment
    canon.x = startx + Math.cos(angle*Math.PI/180)
    canon.y = starty + Math.sin(angle*Math.PI/180)
    canon.rotation = 60-angle;
  }
  
  if(keyDown("space")){
    fireShot();
  } 
 
  
drawSprites();
birdMoving();
  
}
function birdMoving(){
  if(frameCount%60 === 0){
    var ran = Math.round(random(50,150));
    bird = createSprite(1200,ran,30,30);
    bird.addImage(birdFlying)
    bird.velocityX = -2;
    bird.scale = 0.2;
  }
 
}
function fireShot(){
  var shot = createSprite(canon.x, canon.y,40,40);
  shot.velocityX = 2;
  shot.velocityY = -3; 
}