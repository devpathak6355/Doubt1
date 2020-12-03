var boyImg;
var treeImg;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mangoImg;
var stone1;
var ground;
var launcherObject;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

const Constraint = Matter.Constraint;

function preload()
{
  boyImg=loadImage("Plucking mangoes/boy.png");
  treeImg=loadImage("Plucking mangoes/tree.png");
}


function setup() {
	createCanvas(1200, 500);
	engine = Engine.create();
  world = engine.World;

  mango1= new mango (900,200,50,50);
  mango2= new mango (1000,200,50,50);
  mango3= new mango (950,200,50,50);
  mango4= new mango (1050,200,50,50);
  mango5= new mango (925,150,50,50);
  mango6= new mango (975,150,50,50);
  mango7= new mango (1025,150,50,50);
  mango8= new mango (950,100,50,50);
  mango9= new mango (1000,100,50,50);
  mango10= new mango(975,50,50,50);

  stone1= new stone(288,350,50,50);

  ground=createSprite(600,500,1200,15);
    
  launcherObject = new slingShot(stone1.body,{x:288, y:350});

  var render = Render.create({
    element:document.body,
    engine:engine,
    options:{
      width: 1600,
      height:500,
      wireframes:false
    }
  })

  Engine.run(engine);
  Render.run(render);
}

function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine);

  image(boyImg,250,270,200,300);
  image(treeImg,800,10,300,500);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  stone1.display();

  launcherObject  .display();

  detectcollision(stone1,mango1);
  detectcollision(stone1,mango2);
  detectcollision(stone1,mango3);
  detectcollision(stone1,mango4);
  detectcollision(stone1,mango5);
  detectcollision(stone1,mango6);
  detectcollision(stone1,mango7);
  detectcollision(stone1,mango8);
  detectcollision(stone1,mango9);
  detectcollision(stone1,mango10);

  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  launcherObject.fly();
}
function detectcollision(){
  mango1.body.isStatic=false;
}
