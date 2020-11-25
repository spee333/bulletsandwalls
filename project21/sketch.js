var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);

  speed=random(223,321);

  weight=random(30,52);

  thickness=random(22,83);

  bullet=createSprite(100,200,50,50)
   bullet.velocityX=speed;
  bullet.shapeColor="white";

  wall=createSprite(1000,100,thickness,height/2);
  wall.shapeColor=("blue");

  
}

function draw() {
 
  background(10,10,10); 
  rectMode(CENTER);
  
 // bullet.velocity=3;

   if(hasCollided(bullet,wall))
  {
     bullet.velocityX=0;
      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness) ;
     
     if(damage>=10)
     {
       wall.shapeColor=("green");
     }
     else 
     if(damage<10)
     {
        wall.shapeColor=("red");
     }

   }
 
  //hasCollided();
  drawSprites(); 
  }

  function hasCollided(lbullet,lwall)
  {
    var bulletRightEdge=lbullet.x+lbullet.width
    wallleftedge=lwall.x;
     if(bulletRightEdge>=wallleftedge){
       return true 
     }
     else
     {
     return false;}
   }
  
  
  
