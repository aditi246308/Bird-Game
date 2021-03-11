class Tube {
    constructor(x,y,width,height){

        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("piranha plant.png")
        World.add(world,this.body);
    }

    display(){
        push();
        var pos = this.body.position;
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}