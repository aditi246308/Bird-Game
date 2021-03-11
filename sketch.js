const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var bird, plant1, plant2, plant3, ground, tree, nest1;

function setup() {
  var canvas = createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;

  bird = new Bird(170, 130, 50, 50);

  plant1 = new Tube(300, 350, 60, 230);

  plant2 = new Tube(600, 350, 60, 140);

  plant3 = new Tube(900, 350, 60, 190);

  ground = new Ground(600, 395, 1200, 10);

  tree = new Tree(1100, 350, 70, 300);

  nest1 = new Nest(1100, 90, 60, 40);
}

function draw() {
  background("white");
  Engine.update(engine);

  bird.display();

  plant1.display();
  plant2.display();
  plant3.display();
 
  ground.display();

  tree.display();

  nest1.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.setPosition(bird.body, {x: bird.body.position.x, y: bird.body.position.y=bird.body.position.y-4});
  }
  if (keyCode === RIGHT_ARROW) {
    Matter.Body.setPosition(bird.body, {x: bird.body.position.x=bird.body.position.x+4, y: bird.body.position.y});
  }
}

function nest() {
  if (bird.body.position.x === 1100 && bird.body.position.y === 90) {
    text("You win!", x = 600, y = 200);
    font("Courier New");
    isStatic: true
  }
}

function isTouching1(){
  if(bird.body.isTouching(plant1)){
    isStatic: true
    Matter.Body.setPosition(bird.body, {x: bird.body.position.x, y: bird.body.position.y});
  }
}