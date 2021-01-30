var canvas;
var music;
var surface1,surface2,surface3,surface4
var box

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(700,590,175,20)
    surface1.shapeColor="blue"

    surface2 = createSprite(500,590,175,20)
    surface2.shapeColor="yellow"


    surface3 = createSprite(300,590,175,20)
    surface3.shapeColor="green"


    surface4 = createSprite(100,590,175,20)
    surface4.shapeColor="red"

    box = createSprite(random(20,750),50,50,50)
    box.shapeColor="White"
    box.velocityX=-5
    box.velocityY=5


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    var edges=createEdgeSprites();

    box.bounceOff(edges)
    /*box.bounceOff(surface1)
    box.bounceOff(surface2)
    box.bounceOff(surface3)
    box.bounceOff(surface4)*/
    //add condition to check if box touching surface and make it box

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "blue"
        music.play()
        console.log("it works")
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "yellow"
        box.velocityX=0
        box.velocityY=0
        music.stop()
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "green"
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "red"
    }

    drawSprites()
}
