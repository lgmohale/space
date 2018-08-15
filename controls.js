class controls extends Phaser.Scene {
    constructor() {
        super({key: "controls"});
    }

    preload(){
        this.load.image('space','assets/ship.png');
        this.load.image('stars','assets/stars.jpg');
        this.load.image('laser','assets/bullets.png');
    }
    
    


    create(){
        this.image = this.add.image(60,300, 'space');

        this.input.keyboard.on('keydown_D', function(event){
            this.image.x +=10;
        },this);

        this.input.keyboard.on('keydown_A', function(event){
            this.image.x -=10;
        },this);

        this.input.keyboard.on('keydown_S', function(event){
            this.image.y +=10;
        },this);

        this.input.keyboard.on('keydown_W', function(event){
            this.image.y -=10;
        },this);

        this.input.keyboard.on('keydown_P', function(event){
            var physicsImage = this.physics.add.image(this.image.x, this.image.y, "laser");
            physicsImage.setVelocity(2000, -75).setActive().setBounce(0);
        },this)
        
    }

}