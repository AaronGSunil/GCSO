var car1, car2, car3, car4;
var wall1, wall2, wall3, wall4;
var divider1, divider2, divider3;
var speed1, speed2, speed3, speed4; 
var weight1, weight2, weight3, weight4;


function setup() {
  createCanvas(1600,400);

  //giving speed and weight their values
  speed1 = random(55,90);
  weight1 =random(400,1500);
  speed2 = random(55,90);
  weight2 =random(400,1500);
  speed3 = random(55,90);
  weight3 =random(400,1500);
  speed4 = random(55,90);
  weight4 =random(400,1500);

  //creating walls
  wall1 = createSprite(1530,50,30,50);
  wall2 = createSprite(1530,150,30,50);
  wall3 = createSprite(1530,250,30,50);
  wall4 = createSprite(1530,350,30,50);


  //creating cars
  car1 = createSprite(30, 50, 30, 10);
  car1.velocityX = speed1;
  car1.shapeColor = color(255,255,255);

  car2 = createSprite(30, 150, 30, 10);
  car2.velocityX = speed2;
  car2.shapeColor = color(255,255,255);
  
  car3 = createSprite(30, 250, 30, 10);
  car3.velocityX = speed3;
  car3.shapeColor = color(255,255,255);
  
  car4 = createSprite(30, 350, 30, 10);
  car4.velocityX = speed4;
  car4.shapeColor = color(255,255,255);
  
  //creating dividers
  divider1 = createSprite(800,100,1600,5);
  divider1.shapeColor = color(255,255,255);

  divider2 = createSprite(800,200,1600,5);
  divider2.shapeColor = color(255,255,255);

  divider3 = createSprite(800,300,1600,5);
  divider3.shapeColor = color(255,255,255);
 
}

function draw() {
  background(0,0,0);  
  drawSprites();

  if(wall1.x - car1.x < (car1.width + wall1.width) / 2){
    car1.velocityX = 0;
    car1.x = 1515;
    var deformation = 0.5 * weight1 * speed1 * speed1/22500;
    if (deformation > 180) {
      car1.shapeColor = color(255,0,0);
    }
    if (deformation < 180 && deformation > 100) {
      car1.shapeColor = color(230,230,0);
    }
    if (deformation < 100) {
      car1.shapeColor = color(0,255,0);
    }
  }

  if(wall2.x - car2.x < (car2.width + wall2.width) / 2){
    car2.velocityX = 0;
    car2.x = 1515;
    var deformation = 0.5 * weight2 * speed2 * speed2/22500;
    if (deformation > 180) {
      car2.shapeColor = color(255,0,0);
    }
    if (deformation < 180 && deformation > 100) {
      car2.shapeColor = color(230,230,0);
    }
    if (deformation < 100) {
      car2.shapeColor = color(0,255,0);
    }
  }

  if(wall3.x - car3.x < (car3.width + wall3.width) / 2){
    car3.velocityX = 0;
    car3.x = 1515;
    var deformation = 0.5 * weight3 * speed3 * speed3/22500;
    if (deformation > 180) {
      car3.shapeColor = color(255,0,0);
    }
    if (deformation < 180 && deformation > 100) {
      car3.shapeColor = color(230,230,0);
    }
    if (deformation < 100) {
      car3.shapeColor = color(0,255,0);
    }
  }

  if(wall4.x - car4.x < (car4.width + wall4.width) / 2){
    car4.velocityX = 0;
    car4.x = 1515;
    var deformation = 0.5 * weight4 * speed4 * speed4/22500;
    if (deformation > 180) {
      car4.shapeColor = color(255,0,0);
    }
    if (deformation < 180 && deformation > 100) {
      car4.shapeColor = color(230,230,0);
    }
    if (deformation < 100) {
      car4.shapeColor = color(0,255,0);
    }
  }
}