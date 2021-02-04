const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1000,1000);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(220,340,180,20);
    baseGround = new Ground(500,980,1000,20);
    block1 = new Block(185,325,40,40);
    block2 = new Block(209,325,40,40);
    block3 = new Block(233,325,40,40);
    block4 = new Block(257,325,40,40);
    block5 = new Block(195,300,40,40);
    block6 = new Block(220,300,40,40);
    block7 = new Block(245,300,40,40);
    block8 = new Block(207,275,40,40);
    block9 = new Block(233,275,40,40);
    block10 = new Block(220,250,40,40);
    block11 = new Block(40,330,40,40);
    //slingshot = new SlingShot(bird.body,{x:200, y:55});
}

function draw(){
    background("black");
   Engine.update(engine);
   baseGround.display();
    ground.display();
    fill("blue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    fill("pink");
    block5.display();
    block6.display();
    block7.display();
    fill("violet");
    block8.display();
    block9.display();
    fill("maroon");
    block10.display();
    fill("black");
    block11.display();
}

function mouseDragged(){
    Matter.Body.setPosition(block11.body, {x: mouseX , y: mouseY});
}


/*function mouseReleased(){
    launcherObj.fly();
}*/