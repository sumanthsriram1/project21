class Ground{
    constructor(x,y,w,h){
        var ground_options = {
            isStatic:true
        }
        ground = Bodies.rectangle(x,y,w,h,ground_options)
        World.add(world, ground)
        display(){
            var pos = this.ground.position
            push()
            stroke(200)
            fill(100)
            rect(pos.x,pos.y,this.w,this.h)
            pop()
        }
    }
}