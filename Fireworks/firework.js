// Daniel Shiffman
// http://codingtra.in
// https://youtu.be/CKeyIbT3vXI

//let number_of_frames_up = 0;
class Firework {
  constructor() {
    //set the color of the particle to a random color within the limit of 255 with a minimum of 20 (I added that so that, with the thing I added in later that made the particle colors vary, colors with a lower number associated with them are not more common)
    this.hu = color_overal;
    //make it so the firework is determined by the x position of the mouse and the bottom of the screen with the set color
    this.firework = new Particle(x, height, this.hu, true, y, 800);
    //make it so it hasen't exploded
    this.exploded = false;
    //have a list of particles to be added to
    this.particles = [];
  }

  done() {
    //if the list of particles in the firework have already been spliced
    if (this.exploded && this.particles.length === 0) {
      //set the particle to be set as done
      return true;
    } else {
      //set the particles to be set as not done
      return false;
    }
  }

  update() {
    //if this has not exploded
    if (!this.exploded) {
      //apply the downward force of gravity to the particle 
      this.firework.applyForce(gravity);
      //update the psition of the particle
      this.firework.update();
      //if the firework has reached its peak
      if (this.firework.vel.y >= 0) {
        //set it as exploded
        this.exploded = true;
        //explode the particle
        this.explode();
        //console.log(number_of_frames_up, "frames up to", this.firework.pos.y);
      }
    }
    //for the amount of particles in the array minus one so it can be spliced effectively
    for (let i = this.particles.length - 1; i >= 0; i--) {
      //apply gravity to the particles
      this.particles[i].applyForce(gravity);
      //update the particles position after applying gravity
      this.particles[i].update();
      //once the particles have been marked done (through what has been done before)
      if (this.particles[i].done()) {
        //delete the particle
        this.particles.splice(i, 1);
      }
    }
  }

  explode() {
    //creating 200 particles
    for (let i = 0; i < 200; i++) {
      if (this.hu <= 0) {
        //set back to the number of particles multiplied by the amount by which the hue has been changing (60)
        this.hu = 60;
      } else {
        //the amount by which each particle varies in color from the previous one
        this.hu = this.hu - 0.3;
      }
      //create a new particle variable
      const p = new Particle(
        //have it start at the same position as the firework particle ended
        this.firework.pos.x,
        this.firework.pos.y,
        //have it be the same color as the firework
        this.hu,
        //have it not be marked done yet
        false
      );
      //create that exploded particle
      this.particles.push(p);
    }
  }

  show() {
    //if the firework hadn't exploded and the spacebar has been pressed an even number of times
    if (!this.exploded&&show_up_partcle == true) {
      //show the actual non-exploded firework particle
      this.firework.show();
      //number_of_frames_up = number_of_frames_up + 1;
    }
    //show the number of particles that have been creating
    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  }
}
