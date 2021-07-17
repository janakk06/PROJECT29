const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var engine, world ;
var stand1, satnd2 ;
var box1, box2, box3, box4, box5, box6 ;
var polygon, polygonImage;

function preload(){
polygonImage = loadImage("polygon.png");
}

function setup(){
createCanvas(900,400);

engine = Engine.create();
world = engine.world;           
 
polygon = Bodies.circle(100,100,20);
World.add(world,polygon );
box1 = new Box(330,235,30,40);
 box2 = new Box(360,235,30,40);
box3 = new Box(390,235,30,40);
box4 = new Box(420,235,30,40);
box5 = new Box(450,235,30,40);
box6 = new Box(480,235,30,40);

 stand1 = new Ground(300,250,200,20);
}

function draw(){
    background(0);
    Engine.update(engine);           
stand1.display();
imageMode(CENTER);
image(polygonImage, polygon.position.x,polygon.position.y, 40,40);

fill ("green");
box1.display();
box2.display();
fill("blue");
box3.display();
box4.display();
box5.display();
box6.display();
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}