class Log{
    constructor(x,y,height,angle){
       var options={
            restution:0.8,
            friction:1.5,
            density:1.5

        }

        this.body= Bodies.rectangle(x,y,20,height,options);
        this.w=20;
        this.h=height;
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);

        
    }
     display(){
         var pos=this.body.position;
         var angle=this.body.angle;
         push();
         translate(pos.x,pos.y);
         rotate(angle);
         rectMode(CENTER);
         stroke("blue");
         strokeWeight(3);
         fill("white");
         rect(0,0,this.w,this.h);
         pop();
     }
}