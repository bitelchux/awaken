
var David = function (game, x, y, parameters) {

    Boss.call(this, game,250, -250, parameters, 'david');

    this.animationSpeed = 6; //frame rate
    this.smoothed = false;

    console.log("RELEASE THE KRAKEN");
    this.frameFrontDown = 0;
    this.frameFrontClutch = 1;
    this.frameProfilDown = 2;
    this.frameProfilClutch = 3;

    this.frame = this.frameFrontDown;
    this.scale.x = 13;
    this.scale.y = 13;

    /*** Timers ***/
        //Attack
    this.attackTimer = this.game.time.create(false);
    this.attackTimer.start();
    this.attackTimer.add(Math.random() * (4000 - 3000)+4000, this.attack, this);


};


David.prototype = Object.create(Boss.prototype);
David.prototype.constructor = Boss;


David.prototype.attack = function(){
    this.moveTo({x: this.game.ken.x, y: this.game.ken.y});

    this.attackTimer.add(Math.random() * (4000 - 3000)+4000, this.attack, this);
};


David.prototype.moveTo = function(destination, speed, maxTime){
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;
    this.speed = 400;
    speed = speed || this.speed;
    maxTime = maxTime || 0;


    var radians = Math.atan2(destination.y - this.y, destination.x - this.x);

    if(radians <= -0.79 || radians <=  0.79) this.dir = 1; //east
    if(radians <= -2.4  || radians >=  2.4 ) this.dir = 3; //west
    if(radians <=  2.4  && radians >=  0.79) this.dir = 2; //south
    if(radians >= -2.4  && radians <= -0.79) this.dir = 0; //north

    if (maxTime > 0) {
        //  We know how many pixels we need to move, but how fast?
        speed = this.objectsDistance(this, destination) / (maxTime / 1000);
    }

    if(this.dir==0)this.body.moveUp(speed);
    if(this.dir==2)this.body.moveDown(speed);
    if(this.dir==1)this.body.moveRight(speed);
    if(this.dir==3)this.body.moveLeft(speed);
};


