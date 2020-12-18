const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var body,ground;

function setup() {
  engine = Engine.create();
  world = engine.world;
 
  createCanvas(800,400);
  var option={
    isStatic : true
  }
  var bodyO={
    restitution : 1,
    density : 5
  }
  ground = Bodies.rectangle(400,380,800,50,option);
  World.add(world,ground);
  body = Bodies.circle(120,120,20,bodyO);
  console.log(ground);
  World.add(world,body);
  console.log(body.type);

  createSprite(400, 200, 50, 50);
}

function draw() {
  background("yellow");  
  Engine.update(engine);
  ellipseMode(CENTER);
  ellipse(body.position.x,body.position.y,20,20);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,50);
  drawSprites();
}