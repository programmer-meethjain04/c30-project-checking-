const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20,block21,block22,block23;
var block24,block25,block26,block27,block28,block29;
var block30,block31,block32,block33,block34;
var block35,block36,block37,block38,block39,block40,block41;
var block42,block43,block44,block45,block46,block47;
var block48,block49,block50,block51,block52;
var hexa ;
var slingShot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   


    ground = new Ground(430,325,300,10);
    platform = new Ground(850,255,300,10);
     

     //bird sprite
     hexa=new Bird(200,200);

     rubber= new SlingShot(hexa.body,{x:200,y:50});

    //partA
    //lastline
    block1 = new Box(330,300,30,40);
    block2= new Box(360,300,30,40);
    block3= new Box(390,300,30,40);
    block4 = new Box(420,300,30,40);
    block5 = new Box(450,300,30,40);
    block6= new Box(480,300,30,40);
    block7= new Box(510,300,30,40);
    block8= new Box(540,300,30,40);

    //line2
    block17=new Box(345,260,30,40);
    block18=new Box(375,260,30,40);
    block19=new Box(405,260,30,40);
    block20=new Box(435,260,30,40);
    block21=new Box(465,260,30,40);
    block22=new Box(495,260,30,40);
    block23=new Box(525,260,30,40);

    //line3
    block24=new Box(360,220,30,40);
    block25=new Box(390,220,30,40);
    block26=new Box(420,220,30,40);
    block27=new Box(450,220,30,40);
    block28=new Box(480,220,30,40);
    block29=new Box(510,220,30,40);

    //line4
    block30=new Box(375,180,30,40);
    block31=new Box(405,180,30,40);
    block32=new Box(435,180,30,40);
    block33=new Box(465,180,30,40);
    block34=new Box(495,180,30,40);


    //partB
    //lastLine
    block9= new Box(750,235,30,40);
    block10 = new Box(780,235,30,40);
    block11= new Box(810,235,30,40);
    block12= new Box(840,235,30,40);
    block13= new Box(870,235,30,40);
    block14= new Box(900,235,30,40);
    block15= new Box(930,235,30,40);
    block16= new Box(960,235,30,40);

    //line3
    block35= new Box(765,189,30,40);
    block36= new Box(795,189,30,40);
    block37= new Box(825,189,30,40);
    block38= new Box(855,189,30,40);
    block39= new Box(885,189,30,40);
    block40= new Box(915,189,30,40);
    block41= new Box(945,189,30,40);

    //line2
    block42=new Box(780,149,30,40);
    block43=new Box(810,149,30,40);
    block44=new Box(840,149,30,40);
    block45=new Box(870,149,30,40);
    block46=new Box(900,149,30,40);
    block47=new Box(930,149,30,40);

    //line1
    block48=new Box(795,109,30,40);
    block49=new Box(825,109,30,40);
    block50=new Box(855,109,30,40);
    block51=new Box(885,109,30,40);
    block52=new Box(915,109,30,40);


    //log6 = new Log(230,180,80, PI/2);
    //slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background("brown");
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    platform.display();
    hexa.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();  
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();
    block33.display();
    block34.display();
    block35.display();
    block36.display();
    block37.display();
    block38.display();
    block39.display();
    block40.display();
    block41.display();  
    block42.display(); 
    block43.display();
    block44.display();
    block45.display();
    block46.display();
    block47.display(); 
    block48.display();
    block49.display();
    block50.display();
    block51.display();
    block52.display();

    //log6.display();
    //slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(hexa.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rubber.fly();
}

/*function keyPressed(){
    if(keyCode===32){
        rubber.attach(hexa.body);
    }*/
