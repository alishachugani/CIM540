var number 1 = 1;
var number 2 = 2;
var letter 1 = 'a';
var letter 2 = 'b';
var greeting = "hello";
var greetting2 = "goodbye";
var truthordare = true;
var truthordare2 = false;


function setup() {
  // put setup code here
  console.log("Hello World!");
  console.log(number1);
  console.log("The value of letter2" + letter2);

  console.log(number1 + number2);

  console.log(number2 + letter2);

//does not work
  console.log(number2 - letter2);

  var addNumber = number1 + number2;
  console.log(addNumber);
}

function draw() {
  // put drawing code here
  //console.log("mouseX: " + mouseX);\
  // This will not work, addnumber is not in draw scope, console.log(addNumber);
}
