class Bird {
    constructor(x,y,width,height){

        var options = {
           restitution: 0.3,
           density: 1,
           isStatic: false
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("bird.png")
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