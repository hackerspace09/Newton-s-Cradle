class Bob{
    constructor(x,y){
         var options = {
            isStatic:false,
            restitution: 1.0,
            friction: 0.0,
            frictionAir: 0,
            slop: 1,
            inertia: Infinity
        }
    
        this.body = Bodies.circle(x,y,20,options);
        this.radius = 20;
        World.add(myWorld,this.body);
    }    

    display(){
        var position = this.body.position;
        var angle = this.body.angle
        push();
        translate(position.x,position.y);
        rotate(angle)
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius)
        pop();

    }
}