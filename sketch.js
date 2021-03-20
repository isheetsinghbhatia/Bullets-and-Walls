var car,wall,weight,speed,thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = "brown"
  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapeColor = "blue"
  
}

function draw() {
  background(255,255,255);  
  if(hasCollided(car,wall)){
    car.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10){
      car.shapeColor = "red"
    }
    if(damage<10){
      car.shapeColor = "green"
    }
   
  
    
  }
  drawSprites();
}
function hasCollided(bullet,wall1){
  bulleter = bullet.x+bullet.width
  walle = wall.x
  if(bulleter>=walle){
    return true
  }
  return false
}