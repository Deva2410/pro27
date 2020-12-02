class Rope
{

   constructor(bodyA,bodyB,offsetX,offsetY)
   {
      this.offsetX=offsetX
      this.offsetY=offsetY

    var options = {

        bodyA: bodyA,
        bodyB: bodyB,
        stifness: 0.04,
        lenght: 10,
        pointB : {x:this.offsetX,y:this.offsetY}
         
     }
 
      this.rope=Constraint.create(options);
      World.add(world,this.rope)

   }
   display()
   {

      var pointA=this.rope.bodyA.position
      var pointB=this.rope.bodyB.position

      strokeWeight(3);
       var offa1X = pointA.x;
       var offa1Y = pointA.y;

        var offb2X = pointB.x+this.offsetX;
        var offb2Y = pointB.y+this.offsetY;

        line(offa1X, offa1Y, offb2X, offb2Y);

   }
}