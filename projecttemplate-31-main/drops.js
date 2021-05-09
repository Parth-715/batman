class Drops{ 
    
    constructor(x,y){
        var options = { 
            friction:0.1,
            restitution: 0.1
        }
    this.raindrop = Bodies.circle(x, y, 5,options) ; 
    World.add(world,this.raindrop);
     
        
    }

    //resetting the rain drops back to random positions
    updateY(){

        if (this.raindrop.position.y > height){
            Matter.Body.setPosition(this.raindrop, {x:random(0, 400), y:random(-50, 800)})
        }

    }



    display(){
        fill("cyan")
        ellipseMode(CENTER)
        ellipse(this.raindrop.position.x,this.raindrop.position.y, 5, 5)
    

    }

}