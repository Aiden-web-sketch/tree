
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

stone1=new Stone(100,100,20)
ground1 = new Ground(600,height,1200,20);

mango1=new Mango(200,400,20)

tree = Bodies.rectangle(100,100,20,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(1);

  stone1.display();
  ground1.display()
  mango1.display()

  
  drawSprites();
 
}



