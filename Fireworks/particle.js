// Daniel Shiffman
// http://codingtra.in
// https://youtu.be/CKeyIbT3vXI
//create the definition of a particle
class Particle {
  //have it keep track of the x, y cordinates, if it is a firework or not, and color
  constructor(x, y, hu, firework, go_to_y) {
    //have its position be held in a vector
    this.pos = createVector(x, y);
    //if firework (meaning it hasn't exploded yet) is true reinforce that within this specific code
    this.firework = firework;
    //255 - the opacity of the firework
    this.lifespan = 255;
    this.hu = hu;
    //0,0 - the acceleration (at least at the start)
    this.acc = createVector(0, 0);
    //if it hasn't exploded
    if (this.firework) {
      //have the volicity be the amount determined in the sketch code subtracted from -5 (so that it goes far up)
      this.vel = createVector(0, -5-velocity_by_number);
    } else {
      //have it go out in random directions
      this.vel = p5.Vector.random2D();
      //random(2,10) - the random distance from the explosion point that the firework points go out 
      this.vel.mult(random(2, 10));
    }
  }
//apply the force of gravity to all
  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    //if it has exploded already
    if (!this.firework) {
      //0.9 - the amount by which the velocity of the exploded particples decreases every frame
      this.vel.mult(0.9);
      //the amount by which the opacity OF THE EXPLODED PARTICLES decreases every frame
      this.lifespan -= 4;
    }
    //factor in the acceleration to the velocity
    this.vel.add(this.acc);
    //factor in the velocity into the position
    this.pos.add(this.vel);
    //reseting the acceleration every frame
    this.acc.mult(0);
  }

  done() {
    //happening if the particles appear to have disapeared as the opacity is 0
    if (this.lifespan < 0) {
      //set the particle as done (to be deleted)
      return true;
    } else {
      //set the particle as not done and have it not deleted
      return false;
    }
  }

  show() {
    //set the color mode to RGB so things can be done with opacity
    colorMode(HSB);
    //if it has already exploded
    if (!this.firework) {
      //setting the stroke weight to 4
      strokeWeight(4);
      //setting the color to the set hue with the opacity of the variable that has been set before (lifespan) FOR this being a particle of the firework after it has exploded with full saturation and brightness
      stroke(this.hu, 255, 255, this.lifespan);
    } else {
      //set the stroke weight to 10
      strokeWeight(10);
      //set the color to the color that has been set so it is the saqme color as the one that has been decided for the particles after exploding
      //set the saturation to half and brightness to full      
      stroke(this.hu, 50, 255);
    }
    //have the position be determined by the x and y cordinates set above
    point(this.pos.x, this.pos.y);
  }
}