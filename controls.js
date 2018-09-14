var player;
var starfield;
var cursors;
var enemies;
var bullets;
var hitBomb;
var lives = 3;
var liveText;
var PlayerEnemyCollision;
var i;
var levelStopped = false;
class controls extends Phaser.Scene {
    constructor() {
        super({key: "controls"});
    }

    preload(){
        this.load.image('space','assets/ship.png');
        this.load.image('stars','assets/stars.jpg');
        this.load.image('invader','assets/invader.png');
        this.load.image('bullets','assets/bullets.png');
    }

    create(){       

         //  The scrolling starfield background
        this.starfield =  this.add.tileSprite(400,300,window.innerWidth, window.innerHeight, 'stars');

         //  The hero!
        this.player = this.physics.add.image(100, 250, 'space');
        this.player.setImmovable();
        this.player.setCollideWorldBounds(true); 

        //controlls
        cursors = this.input.keyboard.createCursorKeys();

        //loading the spaceship
        this.input.keyboard.on('keydown_P', function (event){
             bullets = this.physics.add.image(this.player.x, this.player.y, 'bullets');
            bullets.setVelocity(400,0);
        },this)

        //adding enemies
        enemies = this.physics.add.group({
            key: 'invader',
            frameQuantity: 24,
            loop: true,
            repeat: 6,

            gridAlign: {
                x: 825,
                y: 25,
                width: 4,
                height: 24,
                cellWidth: 100,
                cellHeight: 100
            },
            collideWorldBounds: false
        });
    
        ///enemies.children.iterate(function(child){
            //child.setVelocityX(Phaser.Math.Between(-100,-300));
        //enemies.setVelocityX(Phaser.Math.Between(-100,-300));

        Phaser.Actions.Call(enemies.getChildren(), function(go) {
            go.setVelocityX(Phaser.Math.Between(-100,-300))
          });

          //collion of player and enemies
          this.physics.add.collider(this.player, enemies, PlayerEnemyCollision,null,this);

          


          
    }
    update(){

        if(levelStopped) {
            return;
        }

        //  Scroll the background
        this.starfield.tilePositionX += 5;
        
        //player movement
        this.player.setVelocity(0);
        if (cursors.left.isDown)
        {
            this.player.setVelocityX(-200);
        }
        else if (cursors.right.isDown)
        {
            this.player.setVelocityX(200);
        }

        if (cursors.up.isDown)
        {
            this.player.setVelocityY(-200);
        }
        else if (cursors.down.isDown)
        {
            this.player.setVelocityY(200);
        }
        
     }
     

}


function PlayerEnemyCollision(player, enemies){
    enemies.disableBody(true, true);

lives -=1;
if( lives == 0){
    console.log("lives reaches 0");
    restartLevel(player);
    
}

function restartLevel(player) {
    console.log("in restartLevel");
    levelStopped = true;
    game.scene.stop('controls');
    game.scene.start('controls');

    levelStopped = false;
    lives = 3;
}
}
