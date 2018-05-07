var mic;

function setup(){
  createCanvas(200,200);
  mic = new p5.AudioIn()
  mic.start();
}

function draw(){
  background(0);
  micLevel = mic.getLevel();
  fill(255, 204, 0);
  rect(60, constrain(height-micLevel*height*5, 0, height), 20, 20);
}
