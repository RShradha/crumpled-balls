
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 leftside=createSprite(650,610,20,100);
	leftside.shapeColor="red";

	rightside=createSprite(850,610,20,100);
	rightside.shapeColor="red";

	bottomside=createSprite(750,650,200,20);
	bottomside.shapeColor="red";

	paper1=new paper(200,650,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display();


  
  drawSprites();
 
}



