class Paper {
    constructor(x, y,radius) {
      var options = {
          isStatic :false,
          'restitution':0.3,
          'friction':5.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y,25,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
      translate(pos.x, pos.y);
    
     rectMode(CENTER);
      fill("purple");
      ellipse(0, 0, 25);
      pop();
    }
  }