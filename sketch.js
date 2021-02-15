const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var engine, world;
var backgroundImg;
var monster, ground, fly, superHero; 
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25, box26;
var bg = "GamingBackground.png";


function preload() {
//preload the images here
backgroundImg = loadImage(bg);
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);
  superHero = new Hero(100, 200, 500, 200);
  fly = new Fly(superHero.body, {x: 500, y: 50});
  monster = new Monster(1200,300,400);

  box1 = new Blocks(650, 555, 70, 70);
  box2 = new Blocks(650, 485, 70, 70);
  box3 = new Blocks(650, 415, 70, 70);
  box4 = new Blocks(650, 345, 70, 70);
  box5 = new Blocks(650, 275, 70, 70);
  box6 = new Blocks(650, 215, 70, 70);
  box7 = new Blocks(650, 145, 70, 70);
  box8 = new Blocks(750, 555, 70, 70);
  box9 = new Blocks(750, 485, 70, 70);
  box10 = new Blocks(750, 415, 70, 70);
  box11 = new Blocks(750, 345, 70, 70);
  box12 = new Blocks(750, 275, 70, 70);
  box13 = new Blocks(750, 215, 70, 70);
  box14 = new Blocks(850, 555, 70, 70);
  box15 = new Blocks(850, 485, 70, 70);
  box16 = new Blocks(850, 415, 70, 70);
  box17 = new Blocks(850, 345, 70, 70);
  box18 = new Blocks(850, 275, 70, 70);
  box19 = new Blocks(850, 215, 70, 70);
  box20 = new Blocks(850, 145, 70, 70);
  box21 = new Blocks(850, 85, 70, 70);
  box22 = new Blocks(950, 555, 70, 70);
  box23 = new Blocks(950, 485, 70, 70);
  box24 = new Blocks(950, 415, 70, 70);
  box25 = new Blocks(950, 345, 70, 70);
  box26 = new Blocks(950, 275, 70, 70);


}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  ground.display();
  superHero.display();
  fly.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  monster.display();

  
}

function mouseDragged(){
  Matter.Body.setPosition(superHero.body, {x: mouseX, y: mouseY});
}
