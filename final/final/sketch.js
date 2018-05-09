var bImage;
var person;
//este es el current position de mi background
var curPosition = 0;



function setup() {
  // put setup code here
  createCanvas(550,550);
  bImage = loadImage("assets/background1.png");
  person = loadImage("assets/right1.png")


}

function draw() {
  // put drawing code here
  background(0);
  image(bImage,curPosition,0);
  //la imagen de mi carro
  image(person,30,430,person.width/4, person.height/4);

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
