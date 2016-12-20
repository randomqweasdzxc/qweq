var ball = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3,
  display: function() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  },
  bounce: function(){
    if (this.x > width || this.x <0) {
      this.xspeed = this.xspeed * -1;
    }else if (this.y > height || this.y <0) {
      this.yspeed = this.yspeed * -1;
    }
  },
  move: function() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }
}
var brick = {
  x: 250,
  y: 370,
  xdir: 0,
  display: function() {
    stroke(255);
    strokeWeight(4);
    noFill();
    rect(this.x, this.y, 100, 20);
  },
  setDir: function(dir) {
    this.xdir = dir;
  },
  move: function(dir) {
    this.x += this.xdir*5;
  }
}
function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(0);
  ball.move();
  ball.display();
  ball.bounce();
  brick.move();
  brick.display();
}
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}
function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}
