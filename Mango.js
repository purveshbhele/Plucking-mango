class Mango {
    constructor(x,y,r) {
      var options = {
         
        'restitution':0,
            'friction':1,
            'isState':true

                      
      }
      this.image=loadImage("sprites/mango.png");
      this.body = Bodies.circle(this.x,this.y,this.r/2,options);
      this.x=x;
      this.y=y;
      this.r=r;
      World.add(world, this.body);

    }
    display(){
      var mangopos=this.body.position;
       push();
        translate(mangopos.x, mangopos.y);
       //rectMode(CENTER)
          rotate(this.body.angle)
          fill(255,0,255)
           imageMode(CENTER);
            ellipseMode(RADIUS)
             image(this.image, 0,0,this.r*2, this.r*2) 
             pop();
    

    }
  };