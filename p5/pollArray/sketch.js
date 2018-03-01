var choices = {
    "kitkat" : [0,40,75,"red"], //results, X , Y, color
    "cake" : [0,100,75,"green"],
    "icecream" : [0,180,75,"blue"],
    "doughnuts" : [0,260,75,"purple"]
};

function setup() {
  // put setup code here
  createCanvas(400,200);
  console.log(choices);
  console.log(choices["kitkat"]);
  console.log(choices["kitkat"][3]); //3 es el color (va 10(reults), 1 (x), 2(y) y 3 (color))

  for(keys in choices){
    console.log(keys + ":" + choices[keys])
  }

}

function draw() {
  // put drawing code here
  background(255);
  for (keys in choices) {
  fill(choices[keys][3]);
  ellipse(choices[keys][1],choices[keys][2],choices[keys][0],choices[keys][0]); //el option 1 y 2 son los que controlan el x y la Y, el option 0 controla el result que es lo que estamos usando de width y del height
  fill(0);
  textAlign(CENTER);
  text(keys,choices[keys][1],choices[keys][2] - 20);
  text(choices[keys][0],choices[keys][1],choices[keys][2] + 100);
  }
}

function mousePressed(){
  for(keys in choices){
    var curDist = dist(mouseX, mouseY,choices[keys][1],choices[keys][2]);
    if(curDist < 20){
      choices[keys][0]++;
    }
  }
}
