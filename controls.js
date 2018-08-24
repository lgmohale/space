var player;
var starfield;
var cursors;
var enemies;
var friendAndFoe;
class controls extends Phaser.Scene {
    constructor() {
        super({key: "controls"});
    }

    preload(){
        this.load.image('space','assets/ship.png');
        this.load.image('stars','assets/stars.jpg');
        this.load.image('invader','assets/invader.png');
    }

    create(){       

         //  The scrolling starfield background
        this.starfield =  this.add.tileSprite(400,300,window.innerWidth, window.innerHeight, 'stars');

         //  The hero!
        player = this.physics.add.image(100, 250, 'space');
        player.setImmovable();
        player.setCollideWorldBounds(true); 

        //controlls
        cursors = this.input.keyboard.createCursorKeys();

        //Enemies
        this.friendAndFoe = this.add.group();
    this.enemies = this.add.group();

    for (var i = 0; i < 16; i++)
    {
        //  This creates a new Phaser.Sprite instance within the group
        //  It will be randomly placed within the world and use the 'baddie' image to display
        this.enemies.create(360 + Phaser.Math.RND() * 200, 120  * 200, 'invader');
    }

    //  You can also add existing sprites to a group.
    //  Here we'll create a local sprite called 'ufo'
    var ufo = this.add.sprite(200, 240, 'ufo');

    //  And then add it to the group
    this.friendAndFoe.add(this.ufo);
    }
    update(time, delta){

        //  Scroll the background
        this.starfield.tilePositionX += 10;
        
        //player movement
        player.setVelocity(0);
        if (cursors.left.isDown)
        {
            player.setVelocityX(-200);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(200);
        }

        if (cursors.up.isDown)
        {
            player.setVelocityY(-200);
        }
        else if (cursors.down.isDown)
        {
            player.setVelocityY(200);
        }
            
     }

}