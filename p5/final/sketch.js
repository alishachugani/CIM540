var bImage;
//este es el current position de mi background
var curPosition = 0;
function setup() {
  // put setup code here
  createCanvas(400,400);
  bImage = loadImage("assets/background.png");

}

function draw() {
  // put drawing code here
  background(0);
  image(bImage,curPosition,0);
  //la imagen de mi carro
  ellipse(100, 300, 50,50);

//esto es lo que hace que mi imagen del background se mueva
  if (keyIsPressed === true) {
    if(keyCode == LEFT_ARROW){
      curPosition = curPosition + 5;
    }

    if(keyCode == RIGHT_ARROW){
      curPosition = curPosition - 5;

    }
  }
}

function keyPressed(){
  // if(keyCode == LEFT_ARROW){
  //   curPosition = curPosition + 5;
  // }
  //
  // if(keyCode == RIGHT_ARROW){
  //   curPosition = curPosition - 5;
  //
  // }
}
