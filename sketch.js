var thickness;
var wall;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1200,200,thickness,height/2); 
  wall.shapeColor = (80,80,80)
  bullet = createSprite(300,200,70,20)
  bullet.shapeColor=(250,250,250)
  thickness=random(60,100)
  speed=random(100,200)
  weight=random(10,32)
  bullet.velocityX = speed; 
}

function draw() {
  background("black");
  if(wall.x-bullet.x < (bullet.width+wall.width)/2) {
    bullet.velocityX = 0
    var damage = 0.5 * weight * speed * speed / thickness * thickness * thickness
    if(damage>100) 
    {
      bullet.shapeColor = "red"
    }
    if(damage<100)
    {
      bullet.shapeColor = "green"
    }
  }
  drawSprites();
}
                                                    
