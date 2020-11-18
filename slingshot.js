class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.bodyA = bodyA
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        //this.slingshot1IMG = loadImage("sprites/sling1.png");
        //this.slingshot2IMG = loadImage("sprites/sling2.png");
        //this.slingshot3IMG = loadImage("sprites/sling3.png");
        
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //image(this.slingshot1IMG,150,120,50,100);
        //image(this.slingshot2IMG,120,130,50,50);
        //if(this.sling.bodyA){
          //  var pointA = this.sling.bodyA.position;
           // push();
           // var pointB = this.pointB;
         //   pop();
        //}
        if(this.sling.bodyA){
            line(this.bodyA.position.x, this.bodyA.position.y, this.pointB.x, this.pointB.y);
        }

    }
    attach(bird) {
        this.sling.bodyA = bird;
    }
    
}