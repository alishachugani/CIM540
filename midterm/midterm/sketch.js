var bgImage;

var mexicoX = 175;
var mexicoY = 277;
var mexico = false;
var mexicoImage;

var indiaX = 540;
var indiaY = 264;
var india = false;
var indiaImage;

var chinaX = 619;
var chinaY = 230;
var china = false;
var chinaImage;

var italiaX = 403;
var italiaY = 226;
var italia = false;
var italiaImage;

var petraX = 449;
var petraY = 252;
var petra = false;
var petraImage;

var brasilX = 269;
var brasilY = 367;
var brasil = false;
var brasilImage;

var peruX = 212;
var peruY = 354;
var peru = false;
var peruImage;


function preload(){
  bgImage = loadImage("images/mapalone-02-02.png");
  mexicoImage = loadImage("images/wonderseach-mexico.png");
  indiaImage = loadImage("images/wonderseach-india.png");
  chinaImage = loadImage("images/wonderseach-china.png");
  italiaImage = loadImage("images/wonderseach-roma.png");
  petraImage = loadImage("images/wonderseach-petra.png");
  brasilImage = loadImage("images/wonderseach-brasil.png");
  peruImage = loadImage("images/wonderseach-machu.png");
}

function setup() {
  // put setup code here
  createCanvas(1500,800);
}

function draw() {
  // put drawing code here
  image(bgImage,0,0);

  ellipse(mexicoX, mexicoY, 5,5);
  stroke('red')
  if(mexico == true){
    image(mexicoImage,175,277, mexicoImage.width/2, mexicoImage.height/2)
  }
  ellipse(indiaX, indiaY, 5,5);
  if(india == true){
    image(indiaImage,540,264, indiaImage.width/2, indiaImage.height/2)
  }
  ellipse(chinaX, chinaY, 5,5);
  if(china == true){
    image(chinaImage,619,230,chinaImage.width/2, chinaImage.height/2)
  }
  ellipse(italiaX, italiaY, 5,5);
  if(italia == true){
    image(italiaImage,403,226,italiaImage.width/2, italiaImage.height/2)
  }
  ellipse(petraX, petraY, 5,5);
  if(petra == true){
    image(petraImage,449,252,petraImage.width/2, petraImage.height/2)
  }
  ellipse(brasilX, brasilY, 5,5);
  if(brasil == true){
    image(brasilImage,269,367,brasilImage.width/2, brasilImage.height/2)
  }
  ellipse(peruX, peruY, 5,5);
  if(peru == true){
    image(peruImage,212,354,peruImage.width/2, peruImage.height/2)
  }

}

function mousePressed(){
  var mexDist = dist(mouseX,mouseY, mexicoX, mexicoY);
  if(mexDist <= 20) {
    mexico = true;
  }else{
  mexico = false;
 }
 var indDist = dist(mouseX,mouseY, indiaX, indiaY);
 if(indDist <= 20) {
   india = true;
 }else{
 india = false;
  }
  var chiDist = dist(mouseX,mouseY, chinaX, chinaY);
  if(chiDist <= 20) {
    china = true;
  }else{
  china = false;
 }
 var itaDist = dist(mouseX,mouseY, italiaX, italiaY);
 if(itaDist <= 20) {
   italia = true;
 }else{
 italia = false;
  }
  var petDist = dist(mouseX,mouseY, petraX, petraY);
  if(petDist <= 20) {
    petra = true;
  }else{
  petra = false;
 }
 var braDist = dist(mouseX,mouseY, brasilX, brasilY);
 if(braDist <= 20) {
   brasil = true;
 }else{
 brasil = false;
  }
  var perDist = dist(mouseX,mouseY, peruX, peruY);
  if(perDist <= 20) {
    peru = true;
  }else{
  peru = false;
 }
}

// function mousePressed(){
//   var indDist = dist(mouseX,mouseY, indiaX, indiaY);
//   if(indDist <= 20) {
//     india = true;
//   }else{
//   india = false;
//  }
// }

// function mousePressed(){
//   var chiDist = dist(mouseX,mouseY, chinaX, chinaY);
//   if(chiDist <= 20) {
//     china = true;
//   }else{
//   china = false;
//  }
// }

// function mousePressed(){
//   var itaDist = dist(mouseX,mouseY, italiaX, italiaY);
//   if(itaDist <= 20) {
//     italia = true;
//   }else{
//   italia = false;
//  }
// }

// function mousePressed(){
//   var petDist = dist(mouseX,mouseY, petraX, petraY);
//   if(petDist <= 20) {
//     petra = true;
//   }else{
//   petra = false;
//  }
// }
//
// function mousePressed(){
//   var braDist = dist(mouseX,mouseY, brasilX, brasilY);
//   if(braDist <= 20) {
//     brasil = true;
//   }else{
//   brasil = false;
//  }
// }

// function mousePressed(){
//   var perDist = dist(mouseX,mouseY, peruX, peruY);
//   if(perDist <= 20) {
//     peru = true;
//   }else{
//   peru = false;
//  }
// }
