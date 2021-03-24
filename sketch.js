var wall,thickness;
var bullet,speed,weight;
var bullet1,wall1,bulletRightEdge,wallLeftEdge;

function setup() {
  createCanvas(700,700);

 speed=random(20,100);
 weight=random(33,150);
 thickness=random(22,43);

  bullet=createSprite(50,20,50,5)
  bullet.velocityX=speed;
  bullet.shapeColor="yellow";
  
  
  wall=createSprite(300,50,thickness,height/2)
  wall.shapeColor=color(230,230,230);
  
}

function draw() {
  background("white");
  
  if (hasCollided(bullet,wall))
   {
     bullet.velocityX=0;
 var damage= 0.5 *weight*speed* speed/(thickness *thickness *thickness);  
     if (damage>10)
       {
         wall.shapeColor="red";
       }
     
     if (damage<10)
       {
         wall.shapeColor="green";
       }
     
   }
  drawSprites();
}

function hasCollided(bullet1,wall1)
{
  bulletRightEdge=bullet1.x + bullet1.width;
  wallLeftEdge=wall1.x;
  console.log(bullet1.x+ "    "+ bullet1.width)
  console.log(wall1.x)
  if(bulletRightEdge>=wallLeftEdge)
  
    {
      return true;
    }
      return false;

}







