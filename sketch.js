const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box,box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box = new Box(200,300,50,50);
   
    box1 = new Box(240,100,50,100);

    ground = new Ground(200,380,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box.display(); 
    box1.display();
    console.log(box.body.angle);
    console.log(box.body.position.x);
    console.log(box.body.position.y);
    ground.display();
}