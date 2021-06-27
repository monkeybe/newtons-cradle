  
class Roof {
    constructor (x, y, width, height){
        var options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
    }
    display () {
        var groundPos=this.body.position;		

        push()
        translate(groundPos.x, groundPos.y);
        rectMode(CENTER)
        //strokeWeight(4);
        fill(128,128,128)
        rect(0,0,this.width, this.height);
        pop()
        
    }
}