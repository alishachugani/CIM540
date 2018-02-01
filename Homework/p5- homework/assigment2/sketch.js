var centerX = 100;
var centerY = 200;

function setup() {
  // put setup code here
  createCanvas(400,400);
  background(255);
}

function draw() {
  // put drawing code here
  stroke(255);
  strokeWeight(1);
  fill(255,215,0);
  ellipse(centerX+100,centerY,300,300);

  noStroke;
  fill(255);
  ellipse(centerX+50,centerY-50,50,50);
  ellipse(centerX+150,centerY-50,50,50);

  noStroke;
  fill(0);
  ellipse(centerX+50,centerY-45,20,20);
  ellipse(centerX+150,centerY-45,20,20);

  stroke(255,140,0);
  fill(255,140,0);
  triangle(centerX, centerY + 50, centerX + 25, centerY + 25, centerX - 25, centerY + 25);
}
