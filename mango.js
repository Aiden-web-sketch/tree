class Mango{
    constructor(x,y,radius){
        var options = {
            'isStatic':true,
             'restitution':0,
             'friction':1
            
         }
         this.body = Bodies.circle(x, y, radius, options);
         this.radius= radius;
   
         
         World.add(world, this.body);
       }
       display(){
         var pos =this.body.position;
         push();
         translate(pos.x, pos.y);
         fill(100,100,150);
         ellipseMode(RADIUS);
         circle(0, 0,this.radius );
         pop();
       }
     };