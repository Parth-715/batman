//namespacing 
const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Body = Matter.Body; 

var engine, world; 
var thunder,thunder1
var maxDrops=100
var umbrellaMan, umbrellaManAnimation;

//array which will store the x and y positions of all the raindrops 
var drops = []

function preload(){
    thunder1=loadAnimation("images/thunderbolt/1.png", "images/thunderbolt/2.png","images/thunderbolt/3.png", "images/thunderbolt/4.png" )
   
    umbrellaManAnimation=loadAnimation("images/Walking/walking_1.png","images/Walking/walking_2.png","images/Walking/walking_3.png","images/Walking/walking_4.png","images/Walking/walking_5.png","images/Walking/walking_6.png","images/Walking/walking_7.png","images/Walking/walking_8.png",)
}

function setup(){
   createCanvas(400,800)

   //initialize our engine 
   engine = Engine.create(); 
   world = engine.world; 

    if (frameCount % 200 === 0){
        for(var i =0; i <maxDrops; i++){ 
            drops.push(new Drops(random(0, 400), random(-50,800)))
        }
    }   

    thunder = createSprite(200,200, 10, 10)
    thunder.addAnimation("lightning", thunder1)
    thunder.scale=0.5;
    umbrellaMan = createSprite(200, 630); 
    umbrellaMan.addAnimation("um", umbrellaManAnimation)
    umbrellaMan.scale=0.5;
}

function draw(){
    background("black");

    Engine.update(engine); 

    for(var i= 0; i <maxDrops; i++){
        drops[i].display(); 
        drops[i].updateY(); 
    }

    drawSprites(); 
}   

