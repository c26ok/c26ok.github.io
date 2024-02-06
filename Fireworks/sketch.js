// Daniel Shiffman
// http://codingtra.in
// https://youtu.be/CKeyIbT3vXI

//set up variables including the array of the construction of the fireworks:
const fireworks = [];
//also create these two which keep track of the numebr of times the space and enter key are pressed
let control = 0;
let show_up_partcle_track = 0;
//this controls if the particle going up is shown
let show_up_partcle = true;
//create the variable of gravity 
let gravity;
//create a variable of the HSB code for the color of each firework
let color_overal = 0;
//create a variable controlling velocity 
velocity_by_number = 9;
function setup() {
  //create the canvas and set the color mode to be HSB so it can be control by the color variable
  createCanvas(800, 800);
  colorMode(HSB);
  //0.2 - the force down which is projected upon the fireworks at all time (goes against the velocity)
  gravity = createVector(0, 0.2);
  //255 - the color of the stroke in HSB
  stroke(255);
  //4 - The size of the stroke
  strokeWeight(4);
  //0 - setting the background to black
  background(0);
  //have the first color overal be random
  color_overal = random(20, 255);
}

//if a key is pressed do the following
function keyPressed() {
  //if the key is the up key
  if (keyCode === 187) {
    //increase the hue code of the color by 10
    color_overal = color_overal + 10;
    console.log(color_overal)
  } 
  //if the key is the down key
  else if (keyCode === 189) {
    //decrease the hue code of the color by 10
    color_overal = color_overal - 10;
    console.log(color_overal)
  }
  //if the key is y
  else if (keyCode === 89) {
    //set the hue code to that of yellow
    color_overal = 70;
    console.log(color_overal)
  }
  //if the key is o
  else if (keyCode === 79) {
    //set the hue code to that of orange
    color_overal = 30;
    console.log(color_overal)
  }
  //if the key pressed is the space key
  if (keyCode === 32) {
    //increase the control variable keeping track of how many times the space key is pressed by 1
    control = control + 1;
  }
  //if the p key is pressed
  if (keyCode === 80) {
    //set the hue code to that of purple
    color_overal = 300;
  }
  //if the q key is pressed
  if (keyCode === 81) {
    //set the hue code to a random number within its boundaries
    color_overal=random(0,360);
  }
  //if the w key is pressed
  if (keyCode === 87) {
    //set the hue code to that of a light blue
    color_overal=200;
  }
  //if the color variable is less than 0
  if (color_overal<0){
    //reset the hue code to the highest it can be
    color_overal = 360
  }
  //if the color variable is greater than 360
  if (color_overal>360){
    //reset the hue code to the lowest it can be
    color_overal = 0
  }
  //if the variable keeping track of the number of times the mouse key is pressed is odd
  if ((control%2)==1){
    //set the mouse possition as variables
    x = mouseX;
    y = mouseY;
    console.log(mouseY, "out of", 800);
    //create a new firework
     fireworks.push(new Firework());
  }
  //if the key pressed is 1
  if (keyCode == 49){
    //set the velocity to 8
    velocity_by_number = 8;
  }
  //if the key pressed is 0
  if (keyCode == 48){
    //set the velocity to 12.5
    velocity_by_number = 12.5;
  }
  //if the key pressed is 2
  if (keyCode == 50){
    //set the velocity to 8.5
    velocity_by_number = 8.5;
  }
    //if the key pressed is 3
  if (keyCode == 51){
    //set the velocity to 9
    velocity_by_number = 9;
  }
    //if the key pressed is 4
  if (keyCode == 52){
    //set the velocity to 9.5
    velocity_by_number = 9.5;
  }
  //if the key pressed is 5
  if (keyCode == 53){
    //set the velocity to 10
    velocity_by_number = 10;
  }
  //if the key pressed is 6
  if (keyCode == 54){
    //set the velocity to 10.5
    velocity_by_number = 10.5;
  }
  //if the key pressed is 7
  if (keyCode == 55){
    //set the velocity to 11
    velocity_by_number = 11;
  }
  //if the key pressed is 8
  if (keyCode == 56){
    //set the velocity to 11.5
    velocity_by_number = 11.5;
  }
  //if the key pressed is 9
  if (keyCode == 57){
    //set the velocity to 12
    velocity_by_number = 12;
  }
  //if the up arrow is pressed
  if (keyCode==38){
    //increase the velocity (And therefore the height) by 0.2
    velocity_by_number = velocity_by_number+0.2;
  }
  //if the down arrow is pressed
  if (keyCode==40){
    //decrease the velocity (And therefore the height) by 0.2
    velocity_by_number = velocity_by_number-0.2;
  }
  //if the enter key is pressed
  if (keyCode === 13) {
    //add 1 to the variable keeping track of how many times the enter key is pressed
    show_up_partcle_track = show_up_partcle_track + 1;
  }
  //if the enter key has been pressed an odd number of times
  if ((show_up_partcle_track%2)==1){
    //make the variable controlling if the upwords going particle show up be false so that particle doesn't show up
    show_up_partcle = false;
  }
  //if the enter key has been pressed an even number of times
  if ((show_up_partcle_track%2)==0){
    //make the variable controlling if the upwords going particle show up be true so that particle does show up
    show_up_partcle = true;
  }
}
//if the mouse is clicked
  function mouseClicked() {
    //if the control variable is even
    if ((control%2)==0){
    //set the mouse possition as variables
    x = mouseX;
    y = mouseY;
    console.log(mouseY, "out of", 800);
      //create a new firework
   fireworks.push(new Firework());
  }}


function draw() {
  //set the frame rate to slightly bellow 60 to give a slight video game feel
  frameRate(30)
  //set the color mode back to RGB to be able to do opacity 
  colorMode(RGB);
  //0, 0, 0, 25 - setting the background to black with a 1/4th opacity 
  background(0, 0, 0, 40);
  //0.04 - the amount of fireworks per frame (60 frames per second)
  
  
  //fireworks.length - 1: the number of fireworks present - 1 to acount for splicing
  for (let i = fireworks.length - 1; i >= 0; i--) {
    //update the position of the particles for each space in the list of fireworks
    fireworks[i].update();
    //show the fireworks
    fireworks[i].show();
    //once the fireworks have been set as done
    if (fireworks[i].done()) {
      //delete the fireworks
      fireworks.splice(i, 1);
    }
  }
}