class StartScreen extends Phaser.Scene {
  constructor() {
    super({
      key: 'StartScreen'
    });
  }
  preload() {
    console.log("Start screen");
    this.load.image('ship','client/assets/dark.png');

  }
  create() {

    var bg = this.add.image(400, 300, 'ship');
    bg.setScale(800/bg.width, 600/bg.height);
    var testText = this.add.text(250,100,'SPACE-IMPACT III.',{
      fontSize: '32px',
      fill: '#FFF'
    });
    testText.setInteractive()
    testText.on('pointerdown',startGameplay);

    var play = {
      fontSize: '20px',
      fontFamily: 'Arial',
      color: 'white',
      backgroundColor: '#22517c',
      borderRadius: '20px'
    };

    var instruction = {
      fontSize: '20px',
      fontFamily: 'Arial',
      color: 'white',
      backgroundColor: '#22517c',
      borderRadius: '20px'
    };

    var about = {
      fontSize: '20px',
      fontFamily: 'Arial',
      color: 'white',
      backgroundColor: '#22517c',
      borderRadius: '20px'
    };
  
    this.add.text(360, 280, 'PLAY', play).setPadding(16).setInteractive().on('pointerdown',startGameplay);
    this.add.text(270, 340, 'INSTRUCTIONS', instruction).setPadding(64, 16).setInteractive().on('pointerdown',Gameinstruction);
    this.add.text(310, 400, 'ABOUT', about).setPadding({ x: 64, y: 16 }).setInteractive().on('pointerdown',aboutGame);

  }
  update() {

  }
}
function startGameplay() {
    game.scene.stop('StartScreen');
    game.scene.start('controls');
}

function Gameinstruction() {
  game.scene.stop('StartScreen');
  game.scene.start('instructions');
}

function aboutGame() {
  game.scene.stop('StartScreen');
  game.scene.start('about');
}