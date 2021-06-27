const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof (425,300,250,20);
	bobObject1 = new Bob (340,470,20)
	bobObject2 = new Bob (380,470,20)
	bobObject3 = new Bob (420,470,20)
	bobObject4 = new Bob (460,470,20)
	bobObject5 = new Bob (500,470,20);
	rope1= new Rope(bobObject1.body,roof.body,-40*2, 0);
	rope2= new Rope(bobObject2.body,roof.body,-20*2,0);
	rope3= new Rope(bobObject3.body,roof.body,-0*2,0);
	rope4= new Rope(bobObject4.body,roof.body,20*2,0);
	rope5= new Rope(bobObject5.body,roof.body,40*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMo=(CENTER);
  background(255);
  
  roof.display()
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
}

function drawLine (constraint) {
	bobBodyPosition = constraint.bodyA.position;    
	roofBodyPosition = constraint.bodyB.position;
	roofBodyOffset = constraint.pointB;
	roofBodyX= roofBodyPositiion.x + roofBodyOffset.x;
	roofBodyY= roofBodyPosition.y + roofBodyOffset.y; 
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX, roofBodyY);           
}

function keyPressed () {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -50, y:-45});
	}
}
