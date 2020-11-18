class Polygon extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/bird.png");
    }

    display() {
      super.display();     
    }
  };
  