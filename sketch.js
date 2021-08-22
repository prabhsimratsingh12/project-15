 var sword,swordimage;

var Enemygroup,monsterimage;

var fruitGroup;

var fruit1image,fruit2image,fruit3image,fruit4image;

var gameover,gameoverimage;

var backboardimage;

var End=0;
var play=1;
var gamestate=1;

var score=0;

var swoardsound;

function preload(){
  
  monsterimage = loadAnimation("alien1.png","alien2.png");
 
  fruit1image = loadImage("fruit1.png");
  fruit2image = loadImage("fruit2.png");
  fruit3image = loadImage("fruit3.png");
  fruit4image = loadImage("fruit4.png");
  
  swordimage = loadImage("sword.png");
 
  swordsound = loadSound("knifeSwooshSound.mp3")
  
  gameoversound = loadSound("gameover.mp3")
  
  gameoverimage = loadImage("gameover.png")
  
}

function setup(){
  
  sword = createSprite(40,200,20,20);
  sword.addImage(swordimage);
  sword.scale = 0.4;

  Enemygroup = new Group();
  fruitGroup = new Group();
  
}

function draw()
{
  
    
  background("lightblue");
  
  
      
  if(gamestate===play)
  {
    
      sword.y=World.mouseY;
      sword.x=World.mouseX;

      if(fruitGroup.isTouching(sword))
         {
      fruitGroup.destroyEach();
      score=score+2;
      swordsound.play();
         }

      if(sword.isTouching(Enemygroup))
      {
        gamestate = End;
        gameoversound.play();
      }
  }
  
 
  
  text("score "+score,200,30);
  
  if(gamestate === End)
  {
    sword.addImage(gameoverimage);
    sword.x=200;
    sword.y=200;
    score=0;
    fruitGroup.destroyEach();
    Enemygroup.destroyEach();
    
  }
 
  Enemy();
  fruit();

  drawSprites();
}

    function fruit(){

      if(World.frameCount%80 === 0){

      fruits = createSprite(400,200,20,20);
      fruits.scale = 0.2;

      r=Math.round(random(1,4));
      if(r == 1){
        fruits.addImage(fruit1image);
      } else if (r == 2){
      fruits.addImage(fruit2image);
      } else if (r == 3){
      fruits.addImage(fruit3image);
      } else{
      fruits.addImage(fruit4image);
      }

      fruits.y = Math.round(random(50,340))

      fruits.velocityX = -(7+(score/4))
      fruits.setLifetime = 100;

      fruitGroup.add(fruits)

      position = Math.round(random(1,2))
      fruite = createSprite(400,200,20,20)

      if(position == 1){
        fruite.x=0
        fruite.velocityX = -(7+(score/4))
      } else {
        if(position == 2){
          fruite.x = 0;
          fruite.velocityX = -(7+(score/4))
        }
      }

    }
  }

  function Enemy(){
    if(World.frameCount%200 === 0){

    monster = createSprite(400,200,20,20)
    monster.addAnimation("moving",monsterimage)
    monster.y = Math.round(random(100,300))
    monster.velocityX = -(8+(score/10))
    monster.setLifetime = 50;

    Enemygroup.add(monster)

    }
  }
    