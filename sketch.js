const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var myEngine, myWorld;

var bob1,bob2,bob3,bob4,bob5;
var roof;

function setup() {
  createCanvas(600,600);
  
  
  myEngine = Engine.create();
  myWorld = myEngine.world;

  roof = new Roof(300,50,300,20)

  bob1 = new Bob(300,500)
  bob2 = new Bob(260,500)
  bob3 = new Bob(220,500)
  bob4 = new Bob(340,500)
  bob5 = new Bob(380,500)

  chain1 = new Chain(bob1.body,{x:300,y:50})
  chain2 = new Chain(bob2.body,{x:260,y:50})
  chain3 = new Chain(bob3.body,{x:220,y:50})
  chain4 = new Chain(bob4.body,{x:340,y:50})
  chain5 = new Chain(bob5.body,{x:380,y:50})

}

function draw() {
  background("black");  
  Engine.update(myEngine);
  
  roof.display();
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  
  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()

}

function mouseDragged(){
  Matter.Body.setPosition(bob5.body,{x: mouseX,y:mouseY})
}