const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const MouseConstraint = Matter.mConstraint;

var engine, world, mConstraint;


function setup(){
    var canvas = createCanvas(windowWidth/2,windowHeight/1.5);
    engine = Engine.create();
    world = engine.world;

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
        mouse: canvasmouse 
    };
   mConstraint = MouseConstraint.create(engine,options) ;
   World.add(world,mConstraint);
}  

function draw() {
    background(0);
    Engine.update(engine);

    drawSprites();
}

function mouseDragged() {
    Matter.Body.setPosition(pendulum.body,{ x: mouseX,y: mouseY});
}