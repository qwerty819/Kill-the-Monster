class Hero {
    constructor(x, y, width, height) {
      var options = { 
        density: 1, 
        frictionAir: 0.005
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("Superhero-01.png");
      World.add(world, this.body);
    }
  
    display() {
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image,50,20,this.width, this.height);
      pop();
    }
  }