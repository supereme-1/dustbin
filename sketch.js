var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var dust1,dust2,dust3;
var paper1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	//Create a Ground
	ground= new Ground(600,680,1200,10)
 	World.add(world, ground);
	
	 dust1 = new Dustbin(1057,650,10,150);
	 dust1.isStatic = false;
	
	dust2 = new Dustbin(795,450,10,150);
	dust2.isStatic = false;
  
   dust3 = new Dustbin(925,650,250,30);
   dust3.isStatic = false;

    packageSprite = new Paper(200,670,25);
    
    
  Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keyCode===RIGHT_ARROW){
  Matter.Body.applyForce(packageSprite.body,packageSprite.body.position,{x:2,y:-7});

}
  
  drawSprites();
  ground.display();
  dust1.display();
  dust2.display();
  dust3.display();
  packageSprite.display();
}
