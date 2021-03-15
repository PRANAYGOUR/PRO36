var dog,sadDog,happyDog;
var foodObj;
var feed, addFood;
var database;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  database = firebase.database();
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
   
foodObj = new Food();

   feed = createButton("feed the dog");
   feed.position(500,500);
   feed.mousePressed(feedDog);

   addFood = createButton("to add food");
   addFood.position(250,250);
   addFood.mousePressed(addFoods);
}

function draw() {
  background(46,139,87);
  drawSprites();
 foodObj.display();
      
}

//function to read food Stock
function addFoods(){
  foods++;
  database.ref('/').update({
    Food:foods
  })
}

//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);

  if(foodobj.getFoodStock()<= 0){
    foodobj.updateFoodStock(foodObj.getFoodStock()*0) ;   
  }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  }
 
  
  
}

//function to add food in stock
