var config = {
    type: Phaser.AUTO,
    width: 1500,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 200}
        }
    },
    scene: [controls]
}

var game = new Phaser.Game(config);