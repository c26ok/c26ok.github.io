//set up variables
let background_size = 1400;
let background_y_size = 904;
let x_cord_red_one = (3 * background_size) / 8;
let y_cord_red_one = background_size / 2;
let red_one_change_up = 0;
let x_cord_red_two = background_size - (3 * background_size) / 8;
let y_cord_red_two = background_size / 2;
let red_two_change_up = 0;
let x_cord_blue_one = (6 * background_size) / 8;
let y_cord_blue_one = background_size / 2;
let blue_one_change_up = 0;
let x_cord_blue_two = background_size - (6 * background_size) / 8;
let y_cord_blue_two = background_size / 2;
let blue_two_change_up = 0;
let speed = 30;
let green_x_cord_one = background_size - x_cord_blue_one;
let green_x_cord_two = background_size - x_cord_blue_two;
let yellow_x_cord_one = background_size - x_cord_red_one;
let yellow_x_cord_two = background_size - x_cord_red_two;
let green_y_cord_one = background_size - y_cord_blue_one;
let green_y_cord_two = background_size - y_cord_blue_two;
let yellow_y_cord_one = background_size - y_cord_red_one;
let yellow_y_cord_two = background_size - y_cord_red_two;
let purple_distance = 0;
let start_purple_one = true;
let purple_opacity = 100;
//this only applies for the first run through
let opacity_shrink = 0.5;

function setup() {
  //make the canvas size be determined by the variables set before
  createCanvas(background_size, background_y_size);
  //have the background be here so this version doesn't repeat, but the code still starts with a black canvas
  background(0);
}

function draw() {
  //refference https://www.codecademy.com/learn/learn-p5js/modules/p5js-animation/cheatsheet - changing the frame rate
  frameRate(speed);
  //make the background have an opacity of 1 out of 100 so there is a "tail" effect in the code for each dot
  background(0, 0, 0, 15);
  //create red dots and their interior dots
  {
    {
      //have the variable, change up, increase by a small amount so that the y movement tilts up throughout the animation
      red_one_change_up = red_one_change_up + 0.01;
      //make the first ellipses created light red
      fill(255, 40, 40);
      //have there be no stroke
      noStroke();
      //have the elipse's position be determined by variables and the size be determined in relation to the width background
      ellipse(
        x_cord_red_one,
        y_cord_red_one,
        background_size / 30,
        background_size / 30
      );

      //have the x cordinate increase by a random (immediately small but still random) value so that there is a level of non-uniformity to the code
      x_cord_red_one = x_cord_red_one - random(0.75, 1.25);
      //have the same thing happen with the y cordinates but there be also the variable that makes it so the ellipse tilt up factored in so it can do what it is meant to do
      y_cord_red_one = y_cord_red_one + random(0.5, 1) - red_one_change_up;
      //have the x and y cordinates reset once it hits a horizontal side (which it will)
      if (x_cord_red_one < 0) {
        x_cord_red_one = (3 * background_size) / 8;
        y_cord_red_one = background_size / 2;
        red_one_change_up = 0;
      }
    }
    {
      //have the variable change up increase by a small amount so that the y movement tilts up throughout the animation
      red_two_change_up = red_two_change_up + 0.01;
      //make the first ellipses created light red
      fill(255, 40, 40);
      //have there be no stroke
      noStroke();
      //have the elipse's position be determined by variables and the size be determined in relation to the width background
      ellipse(
        x_cord_red_two,
        y_cord_red_two,
        background_size / 30,
        background_size / 30
      );

      //use the same process to create the dots in the center of the two red circles (use the already set x and y cordinates and just make these elipses smaller in realtion to the ones they are inside of)
      //create a variable that can make a gradient for the inside shapes
      let shrink_opacity = 0;
      //have for loops to make the gradient for the interior dot
      for (let i = 0; i < 20; i++) {
        //have the opacity be affected by the set variable
        fill(255, 255, 255, shrink_opacity / 5);
        noStroke();
        //have the size be affected by the set variable
        ellipse(
          x_cord_red_two,
          y_cord_red_two,
          background_size / 40 - shrink_opacity / 10,
          background_size / 40 - shrink_opacity / 10
        );
        //in every loop have the set variable increase
        shrink_opacity = shrink_opacity + 5;
      }
      //set the variable back to 0
      shrink_opacity = 0;
      for (let i = 0; i < 20; i++) {
        //have the oppacity be affected by the set variable
        fill(255, 255, 255, shrink_opacity / 5);
        noStroke();
        //have the size be affected by the set variable
        ellipse(
          x_cord_red_one,
          y_cord_red_one,
          background_size / 40 - shrink_opacity / 10,
          background_size / 40 - shrink_opacity / 10
        );
        //in every loop have the set variable increase
        shrink_opacity = shrink_opacity + 5;
      }
      //have the x cordinate increase by a random (immediately small but still random) value so that there is a level of non-uniformity to the code
      x_cord_red_two = x_cord_red_two + random(0.75, 1.25);
      //have the same thing happen with the y cordinates but there be also the variable that makes it so the ellipse tilt up factored in so it can do what it is meant to do
      y_cord_red_two = y_cord_red_two + random(0.5, 1) - red_two_change_up;
      //have the x and y cordinates reset once it hits a horizontal side (which it will)
      if (x_cord_red_two > background_size) {
        x_cord_red_two = background_size - (3 * background_size) / 8;
        y_cord_red_two = background_size / 2;
        red_two_change_up = 0;
      }
    }
  }
  //create blue dots and their interior dots
  {
    {
      //have the variable change up increase by a small amount so that the y movement tilts up throughout the animation
      blue_one_change_up = blue_one_change_up + 0.01;
      //make the ellipse created light blue
      fill(40, 40, 255);
      //have there be no stroke
      noStroke();
      //have the elipse's position be determined by variables and the size be determined in relation to the width background
      ellipse(
        x_cord_blue_one,
        y_cord_blue_one,
        background_size / 30,
        background_size / 30
      );
      //have the x cordinate increase by a random (immediately small but still random) value so that there is a level of non-uniformity to the code
      x_cord_blue_one = x_cord_blue_one - random(0.5, 1);
      //have the same thing happen with the y cordinates but there be also the variable that makes it so the ellipse tilt up factored in so it can do what it is meant to do
      y_cord_blue_one =
        y_cord_blue_one + random(0.75, 1.25) - blue_one_change_up;
      //have the x and y cordinates reset once it hits a horizontal side (which it will)
      if (y_cord_blue_one < 0) {
        x_cord_blue_one = (6 * background_size) / 8;
        y_cord_blue_one = background_size / 2;
        blue_one_change_up = 0;
      }
    }
    {
      //have the variable change up increase by a small amount so that the y movement tilts up throughout the animation
      blue_two_change_up = blue_two_change_up + 0.01;
      //make the ellipse created light blue
      fill(40, 40, 255);
      //have there be no stroke
      noStroke();
      //have the elipse's position be determined by variables and the size be determined in relation to the width background
      ellipse(
        x_cord_blue_two,
        y_cord_blue_two,
        background_size / 30,
        background_size / 30
      );
      //have the x cordinate increase by a random (immediately small but still random) value so that there is a level of non-uniformity to the code
      x_cord_blue_two = x_cord_blue_two + random(0.5, 1);
      //have the same thing happen with the y cordinates but there be also the variable that makes it so the ellipse tilt up factored in so it can do what it is meant to do
      y_cord_blue_two =
        y_cord_blue_two + random(0.75, 1.25) - blue_two_change_up;
      //have the x and y cordinates reset once it hits a horizontal side (which it will)
      if (y_cord_blue_two < 0) {
        x_cord_blue_two = background_size - (6 * background_size) / 8;
        y_cord_blue_two = background_size / 2;
        blue_two_change_up = 0;
      }
    }

    //set a variable that can make a gradient for the inside shapes
    shrink_opacity = 0;
    //have for loops to make the gradient for the interior dot
    for (let i = 0; i < 20; i++) {
      //have the oppacity be affected by the set variable
      fill(255, 255, 255, shrink_opacity / 5);
      noStroke();
      //have the size be affected by the set variable and have the x and y cordinates be the same as the shape its inside of
      ellipse(
        x_cord_blue_two,
        y_cord_blue_two,
        background_size / 40 - shrink_opacity / 10,
        background_size / 40 - shrink_opacity / 10
      );
      //in every loop have the set variable increase
      shrink_opacity = shrink_opacity + 5;
    }
    //set the variable back to 0
    shrink_opacity = 0;
    for (let i = 0; i < 20; i++) {
      //have the oppacity be affected by the set variable
      fill(255, 255, 255, shrink_opacity / 5);
      noStroke();
      //have the size be affected by the set variable and have the x and y cordinates be the same as the shape its inside of
      ellipse(
        x_cord_blue_one,
        y_cord_blue_one,
        background_size / 40 - shrink_opacity / 10,
        background_size / 40 - shrink_opacity / 10
      );
      //in every loop have the set variable increase
      shrink_opacity = shrink_opacity + 5;
    }
  }
  //green and yellow dots
  {
    //have the x and y cordinates of 4 other shapes be determined in relation to the previous 4 shapes (so that there is less clutter in the code)
    green_x_cord_one = background_size - x_cord_blue_one;
    green_x_cord_two = background_size - x_cord_blue_two;
    yellow_x_cord_one = background_size - x_cord_red_one;
    yellow_x_cord_two = background_size - x_cord_red_two;
    green_y_cord_one = background_y_size - y_cord_blue_one;
    green_y_cord_two = background_y_size - y_cord_blue_two;
    yellow_y_cord_one = background_y_size - y_cord_red_one;
    yellow_y_cord_two = background_y_size - y_cord_red_two;
    //set the next two shapes to be yellow
    fill(255, 255, 40);
    //have the elipse's position be determined by variables and the size be determined in relation to the width background
    ellipse(
      yellow_x_cord_one,
      yellow_y_cord_one,
      background_size / 30,
      background_size / 30
    );
    //have the elipse's position be determined by variables and the size be determined in relation to the width background
    ellipse(
      yellow_x_cord_two,
      yellow_y_cord_two,
      background_size / 30,
      background_size / 30
    );
    //set the next two shapes to be green
    fill(40, 255, 40);
    //have the elipse's position be determined by variables and the size be determined in relation to the width background
    ellipse(
      green_x_cord_one,
      green_y_cord_one,
      background_size / 30,
      background_size / 30
    );
    //have the elipse's position be determined by variables and the size be determined in relation to the width background
    ellipse(
      green_x_cord_two,
      green_y_cord_two,
      background_size / 30,
      background_size / 30
    );
  }
  //create the interior dots for green and yellow dots
  {
    {
      //set a variable that can make a gradient for the inside shapes
      shrink_opacity = 0;
      //have for loops to make the gradient for the interior dot
      for (let i = 0; i < 20; i++) {
        //have the oppacity be affected by the set variable
        fill(255, 255, 255, shrink_opacity / 5);
        noStroke();
        //have the size be affected by the set variable and have the x and y cordinates be the same as the shape its inside of
        ellipse(
          green_x_cord_one,
          green_y_cord_one,
          background_size / 40 - shrink_opacity / 10,
          background_size / 40 - shrink_opacity / 10
        );
        //in every loop have the set variable increase
        shrink_opacity = shrink_opacity + 5;
      }
      //set the variable back to 0
      shrink_opacity = 0;
      for (let i = 0; i < 20; i++) {
        //have the oppacity be affected by the set variable
        fill(255, 255, 255, shrink_opacity / 5);
        noStroke();
        //have the size be affected by the set variable and have the x and y cordinates be the same as the shape its inside of
        ellipse(
          green_x_cord_two,
          green_y_cord_two,
          background_size / 40 - shrink_opacity / 10,
          background_size / 40 - shrink_opacity / 10
        );
        //in every loop have the set variable increase
        shrink_opacity = shrink_opacity + 5;
        //set a variable that can make a gradient for the inside shapes
      }
      shrink_opacity = 0;
      //have for loops to make the gradient for the interior dot
      for (let i = 0; i < 20; i++) {
        //have the oppacity be affected by the set variable
        fill(255, 255, 255, shrink_opacity / 5);
        noStroke();
        //have the size be affected by the set variable and have the x and y cordinates be the same as the shape its inside of
        ellipse(
          yellow_x_cord_one,
          yellow_y_cord_one,
          background_size / 40 - shrink_opacity / 10,
          background_size / 40 - shrink_opacity / 10
        );
        //in every loop have the set variable increase
        shrink_opacity = shrink_opacity + 5;
      }
      //set the variable back to 0
      shrink_opacity = 0;
      for (let i = 0; i < 20; i++) {
        //have the oppacity be affected by the set variable
        fill(255, 255, 255, shrink_opacity / 5);
        noStroke();
        //have the size be affected by the set variable and have the x and y cordinates be the same as the shape its inside of
        ellipse(
          yellow_x_cord_two,
          yellow_y_cord_two,
          background_size / 40 - shrink_opacity / 10,
          background_size / 40 - shrink_opacity / 10
        );
        //in every loop have the set variable increase
        shrink_opacity = shrink_opacity + 5;
      }
    }
  }
  //PURPLE DOTS and their interior dots
  {
  //if the conditions have been set for the purple elipses to begin their movement do the following:
if (start_purple_one==true){
  //make it so the rotation is being centered around the middle of the background.
  //Refference: https://genekogan.com/code/p5js-transformations/#:~:text=Rotation,point%20(0%2C%200).
  translate(background_size / 2, background_y_size / 2);
  //have the rotation of the following shapes change over time.
    //Refference: https://genekogan.com/code/p5js-transformations/#:~:text=Rotation,point%20(0%2C%200).
  rotate(radians(frameCount));
  //make it so the shape created from here is purple and the opacity changes depending on the changing variable
  fill(200, 0, 200, purple_opacity);
  //make it so there is no stroke
  noStroke();
  //make an ellipse which has an y cordinate of 0 away from the origin which has been moved to the, has a variable x cordinate that changes over time (with the rotation above this will simply function as the basic distance away from the origin) and have the size of the shape be determined in relation to the background size
  ellipse(
    purple_distance,
    0,
    background_size / 30,
    background_size / 30
  );
    //make another ellipse which has an y cordinate of 0 away from the origin which has been moved to the, has a variable x cordinate (the negative of the preivous ellipses x cordinate so they are always on opposite sides) that changes over time (with the rotation above this will simply function as the basic distance away from the origin) and have the size of the shape be determined in relation to the background size

  ellipse(
    -purple_distance,
    0,
    background_size / 30,
    background_size / 30
  );
  //set a variable that can make a gradient for the inside shapes
      shrink_opacity = 0;
      //have for loops to make the gradient for the interior dot
      for (let i = 0; i < 20; i++) {
        //have the oppacity be affected by the set variable as well as the shift opacity of the exterior purple ellipse
        fill(255, 255, 255, shrink_opacity*purple_opacity/400);
        noStroke();
        //have the size be affected by the set variable and have the x and y cordinates be the same as the shape its inside of
        ellipse(
          purple_distance,
          0,
          background_size / 40 - shrink_opacity / 10,
          background_size / 40 - shrink_opacity / 10
        );
        //in every loop have the set variable increase
        shrink_opacity = shrink_opacity + 5;
      }
      //set the variable back to 0
      shrink_opacity = 0;
      for (let i = 0; i < 20; i++) {
        //have the oppacity be affected by the set variable as well as the shift opacity of the exterior purple ellipse
        fill(255, 255, 255, shrink_opacity*purple_opacity/400);
        noStroke();
        //have the size be affected by the set variable and have the x and y cordinates be the same as the shape its inside of
        ellipse(
          -purple_distance,
          0,
          background_size / 40 - shrink_opacity / 10,
          background_size / 40 - shrink_opacity / 10
        );
        //in every loop have the set variable increase
        shrink_opacity = shrink_opacity + 5;
        //set a variable that can make a gradient for the inside shapes
      }
  //have the distance from the origin (the x cordinate) increase every frame
  purple_distance = purple_distance + 0.5;
  //have to opacity of the shapes (as determined in a variable) decrease by the amount of another variable
  purple_opacity -= opacity_shrink;
}

  //have it so if the distance of the purple ellipse is 0 from the origin, the variable that starts the above function is true
  if (purple_distance==0){
    start_purple_one=true
  }
  //have it if the opacity of the purple ellipses is less than 0, that variable is false
  if (purple_opacity<0){
    start_purple_one=false
  }
//make it so, if the variable to start the function for the purple circle's rotation is false, the opacity and  distance from the origin are reset and the amount by which the opacity changes is randomly chosen between 2 numbers such that it will not take too long but it will also not take too short of a time.
if (start_purple_one==false){
  purple_distance=0;
  purple_opacity = 100;
  opacity_shrink = random (0.115,0.75)
}
  }
}
