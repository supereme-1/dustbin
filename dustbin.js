class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.0,
          'friction':1.3,
          'density':1.0
      }
      this.isStatic = false;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.velocityY = 0;
      this.velocityX = 0;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
      translate(pos.x, pos.y);
     
     rectMode(CENTER);
      fill("white");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }