var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);

  
  

  weight = random(30,52)
  speed = random(223,321);
  thickness=random(22,83)

  bullet=createSprite(20,height/2,30,5);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  wall=createSprite(1200, 200, thickness, height/2);
}

function draw() {
  background(0);
  drawSprites();

  if (hasCollided(bullet,wall)) {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);

    if (damage>10) {
      wall.shapeColor=color(255,0,0)
    }
    if (damage<10) {
      wall.shapeColor=color(0,255,0)
    }
  }
}

function hasCollided(lbullet, lwall) {
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    return true;
  }
  return false;
}