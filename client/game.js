var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {x: 0}
        }
    },
    scene: [StartScreen, controls, instructions, about]
}


var game = new Phaser.Game(config);
