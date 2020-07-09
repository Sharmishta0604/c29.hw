class Box {
  constructor(x, y, width, height) {
    //super(x,y,width,height);
    //this.image = loadImage("sprites/wood1.png");
    var options = {
            'restitution':0.8,
            'friction':2.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var posX = this.body.positionX;
        var posY = this.body.positionY;
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        fill(195,185,0);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
  

};
