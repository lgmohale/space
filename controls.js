var player;
var starfield;
var cursors;
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
         this.starfield =  this.add.tileSprite(400,300,2000, 1200, 'stars');
         this.player = this.add.sprite(75, 300, 'space'); 
         cursors = this.input.keyboard.createCursorKeys();      
    }

    update(){
        this.starfield.tilePositionX += 4;
        if (cursors.left.isDown) {
			this.player.x -= 5;
        } else if (cursors.right.isDown) {
                this.player.x += 5;
        } else if (cursors.up.isDown) {
                this.player.y -= 5;
        } else if (cursors.down.isDown) {
                this.player.y += 5;
        } 
//////////////////////////////////////////////////////////////////////////
         if (this.player.x < 50) {
            this.player.x = 50;
        }
        if (this.player.y < 50) {
            this.player.y = 50;
        } 
        
        if (this.player.x < 50) {
            this.player.x = 50;
        }
        if (this.player.y < 50) {
            this.player.y = 50;
        }
    }

}