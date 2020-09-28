
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
 
function preload()
{
	boyImg=loadImage("sprites/boy.png");
	
}

function setup() {
	createCanvas(1300,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(width/2,600,width,20);
	tree1= new Tree(600,580,150,400);
	//stone1= new Stone(180,400,50);
	//chain1=new Chain(stone1.body,{x:180,y:400});
	
//	mango1=new Mango()
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  ground.display();
  tree1.display();
  //stone1.display();
 // chain1.display();
  image(boyImg,150,380,200,300);

  drawSprites();
 
}
function mouseDragged() {
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
	
	}
	function mouseReleased(){
	chain1.fly();
	
	}

