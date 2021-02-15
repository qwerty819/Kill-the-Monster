class Monster {
    constructor(x, y, radius) {
      var options = { 
        'frictionAir': 0.005,
        'restitution':0.1,
          'friction':1.0,
          'density':0.1
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.x=x;
      this.y=y;
      this.radius=radius;
      this.image=loadImage("Monster-01.png");
      World.add(world, this.body);
    }
  
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,10,10,this.radius,this.radius);
        pop();
    }
  }