
class Bob {
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            restitution: 1,
            friction:0,
            density:0.8
        }
        
        this.body = Bodies.circle(x,y,radius, options);
        this.radius = radius

        World.add(world, this.body);
    }
    display(){
        
        ellipseMode(RADIUS);

        fill("magenta");

        circle(this.body.position.x, this.body.position.y, this.radius);

    }       
};