

var drops = [];
var player1;
var player;
var ground;
function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < 500; i++) {
    drops[i] = new Drop();
   
  }
}
function preload() {
 player1 = loadImage("boy.png");
}

function draw() {
  background(230, 230, 250);
  
  text("x:" + mouseX + ",y:"+mouseY,mouseX,mouseY);
  player = createSprite(313,262);
  player.addImage("player",player1);
  player.scale = 0.3;
 ground = createSprite(321, 354, 800,20);
  drawSprites();
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
    
  }
}