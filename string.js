class string {
    constructor (bodyA, bodyB) {
    
    var options = {
        bodyA:  bird.body,
        bodyB:  c_log.body,
        length: 10,
        stiffness: 1.0
    }
    this.string = Constraint.create(options);

    World.add(world, string);

    }

    display() {
    var pointA = this.string.bodyA.position;
    var pointB = this.string.bodyB.position;
    strokeWeight(5);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}