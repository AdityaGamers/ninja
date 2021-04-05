var backgroundImage;var appleI; var apple2I; var bananaI ,pearI, mangoI , cherryI , knifeI, knife,bombI;
var PLAY=1;
var END=0;
var gameState=1;
var score=0;

function  preload(){
backgroundImage=loadImage("images/background.png");
appleI=loadImage("images/apple.png");
apple2I=loadImage("images/apple2.png");
bananaI=loadImage("images/banana.png");
pearI=loadImage("images/pear.png");
mangoI=loadImage("images/mango.png");
cherryI=loadImage("images/cherry.png");
knifeI=loadImage("images/knife.png");
bombI=loadImage("images/bomb.png");
}
function setup(){
createCanvas(600,600);
knife=createSprite(200,300,10,10);
knife.addImage(knifeI);
knife.scale=0.3;
fruitGroup=createGroup();
bombGroup=createGroup();
}
function draw(){
  
  if(gameState===PLAY){
    background(backgroundImage);
  
  knife.x=mouseX;
  knife.y=mouseY;
  if(fruitGroup.isTouching(knife)){
    score=score+1;
    fruitGroup.destroyEach();
  }
  else if(bombGroup.isTouching(knife)){
    gameState=END;
  }
  
  drawSprites();
  friutsa();
  Bomb()}
  else if(gameState===END){
    background("black");
    text("GAMEOVER",300,300)
  }
  text(score,300,20);

}
function  friutsa(){
  if(frameCount%60===0){
     fruit=createSprite(200,100,10,10);
     direction=Math.round(random(1,2));
     if(direction===1){
       fruit.velocityX=1;
       fruit.x=0;
       
     }else if(direction===2){
       fruit.velocityX=-1;
       fruit.x=600;
     }
     fruit.y=Math.round(random(50,550));
     r=Math.round(random(1,6))
     if(r===1){
       fruit.scale=0.1;
       fruit.addImage(appleI)}
       else if(r===2){
        fruit.scale=0.3
         fruit.addImage(apple2I);}
         else if(r===3){
          fruit.scale=0.1;
          fruit.addImage(mangoI);}
          else if(r===5){
            fruit.scale=0.3
            fruit.addImage(bananaI);}
            else if(r===4){
              fruit.scale=0.1;
              fruit.addImage(pearI);}
              else if(r===6){
                fruit.scale=0.1;
                fruit.addImage(cherryI);}
 fruitGroup.add(fruit)

          



    

 }
}

function Bomb(){
  if (frameCount%100===0){
   
    bomb=createSprite(10,10,10,10);
    bomb.scale=0.1;
   bomb.addImage(bombI);
   bomb.y=Math.round(random(50,550));
   bomb.velocityX=2;
   bombGroup.add(bomb)

  }
}
