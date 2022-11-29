class Bote{
    constructor(x,y,width,heigth,pos){
        this.body=Bodies.rectangle(x,y,width,heigth);
        this.width=width;
        this.heigth=heigth;
        this.image=loadImage("./assets/boat.png");
        this.position=pos;
        World.add(world,this.body);
    }
    display (){
        var angle=this.body.angle;
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,this.position,this.width,this.heigth);
        pop();
    }
    
}