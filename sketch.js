var sar
var w1,w2,w3,w4,w5

function setup() {
  createCanvas(800,400);
  sar=createSprite(400, 200, 50, 50);
  w1=createSprite(400,100,20,20);
  w2=createSprite(450,100,20,20);
  w3=createSprite(500,100,20,20);
  w4=createSprite(550,100,20,20);
}

function draw() {
  background(255,255,255);
  
  sar.x=World.mouseX
  sar.y=World.mouseY
  
  if (isTouching(sar,w1)) {
   sar.shapeColor="red"
   w1.shapeColor="red"
  }
  else {
    sar.shapeColor="grey"
    w1.shapeColor="grey"
  }

  drawSprites();
}

function isTouching(ob1,ob2) {
  if (ob1.x-ob2.x<ob1.width/2+ob2.width/2 &&
    ob1.y-ob2.y<ob1.height/2+ob2.height/2  &&
    ob2.x-ob1.x<ob2.width/2+ob1.width/2 &&
    ob2.y-ob1.y<ob2.height/2+ob1.height/2  ) {

return true
  }
  else  {
    return false
  }
}