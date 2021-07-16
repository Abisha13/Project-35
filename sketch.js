var balloon, background;
  function preload(){
  backgroundIMG = loadImage("images/Hot Air Ballon-01.png")
  balloonsIMG = loadAnimation("images/Hot Air Ballon-02.png", "images/Hot Air Ballon-03.png","images/Hot Air Ballon-04.png");
  }
  function setup() {
    database = firebase.database();
    console.log(database)

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  balloon = createSprite(100,400,20,20)
  balloon.addAnimation("balloon", balloonsIMG)
  balloon.scale = 0.4; 
  
}

function draw() {
  background(backgroundIMG);  

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x+10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y-10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y+10;
  }

  drawSprites();
}