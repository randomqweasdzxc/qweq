var ship;
var ball = 10;

function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  ball = new Ball();
}

function draw() {
  background(51);
  ship.show();
  ship.move();
  ball.show();
}

function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
  if (keyCode === UP_ARROW) {
    ball.setDir(1);
  } else if (keyCode === DOWN_ARROW) {
    ball.setDir(-1)
  }
}

function Ship() {
  this.x = width/2;
  this.xdir = 0;

  this.show = function() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, height-20, 70, 20);
  }

  this.setDir = function(dir) {
    this.xdir = dir;
  }

  this.move = function(dir) {
    this.x += this.xdir*5;
  }

}

function Ball() { 
  this.x = width/2;
  this.y = height/2;
  this.xdir=0;
  
  this.show = function() {
    fill(255, 0, 200);
    ellipse(this.x, this.y, 40, 40);
    
    if (ball > height || ball > width || ball < 0) {
    speed = speed *-1;
  }
}

  this.setDir = function(dir) {
    this.xdir = dir;
  }
  
  this.move = function(dir) {
    this.x += this.xdir*5;
  }
  
}
