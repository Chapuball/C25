const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var cannonBall;
var balls =[]; 
var bote
var botes=[];

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angle = 20;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);

  cannon = new Cannon(180, 110, 130, 100, angle);
 
  

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  rect(ground.position.x, ground.position.y, width * 2, 1);
  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();
  cannon.display();
  for (var i = 0; i<balls.length; i ++){
    showCannonBalls(balls[i], i);
    
  }
  showBotes();
  
}
function keyReleased (){
  if(keyCode === 32){
    balls[balls.length-1].shoot();
  }
}
function keyPressed(){
  if(keyCode === 32){
    cannonBall = new CannonBall(cannon.x, cannon.y);
    balls.push(cannonBall);
     
  }
}
function showCannonBalls(ball,i){
  if (ball){
    ball.display()
  }
}
function showBotes (){
  if (botes.length>0){
    if (botes[botes.length-1]===undefined || botes[botes.length-1].body.position.x <width-300){
      var positions=[-40,-60,-70,-20];
      bote=new Bote (width,height-60,170,170,random(positions));
      botes.push(bote);
    }
    for (var i = 0; i<botes.length; i ++){
      if (botes[i]){
        Matter.Body.setVelocity(botes[i].body,{x:-0.9,y:0});
        botes[i].display();
      }
  
    }
  }
  else{
    bote=new Bote (width,height-60,170,170,-60);
    botes.push(bote);
    

  }
}