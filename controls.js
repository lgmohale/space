class controls extends Phaser.Scene {
    constructor() {
        super({key: "controls"});
    }

    preload(){
        this.load.image('space','assets/space.png');
    }

    create(){
        this.image = this.add.image(60,300, 'space');

        this.input.keyboard.on('keyup_D', function(event){
            this.image.x +=10;
        },this);

        this.input.keyboard.on('keydown_A', function(event){
            this.image.x -=10;
        },this);

        this.input.keyboard.on('keyup_S', function(event){
            this.image.y +=10;
        },this);

        this.input.keyboard.on('keyup_W', function(event){
            this.image.y -=10;
        },this);
    }
}