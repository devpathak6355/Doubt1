class mango{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0,
            frition:1,
        }
        this.image=loadImage("Plucking mangoes/mango.png");
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
    }
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
      }
}