var centerX = 100;
var centerY = 200;
var button;
var backgroundColor = "white"

var sel;
var lineColor = "red";

function setup() {
  // put setup code here
  createCanvas(400,400);
  background(255);
  button = createButton("Click Me");
  button.mousePressed(changeBG);

  sel = createSelect();
  sel.option("red");
  sel.option("blue");
  sel.option("white");

  sel.changed(function(){

    lineColor = sel.value();
  });

}

function draw() {
  // put drawing code here
  background(backgroundColor);

  stroke(0);
  strokeWeight(3);
  fill("yellow");
  ellipse(centerX+100,centerY,300,300);

  stroke(0);
  strokeWeight(3);
  fill(255);
  ellipse(centerX+50,centerY-50,50,50);
  ellipse(centerX+150,centerY-50,50,50);

  fill(0);
  ellipse(centerX+50,centerY-40,25,25);
  ellipse(centerX+150,centerY-40,25,25);

  stroke(lineColor);
  line(centerX + 50 ,centerY + 40, centerX + 150, centerY + 40);
}

function mousePressed(){
  backgroundColor = "yellow";
}

function mouseReleased(){
  backgroundColor = "red";
}

function changeBG(){
  lineColor = "green";
}
