class about extends Phaser.Scene {
    constructor() {
      super({
        key: 'about'
      });
    }
    preload() {
      console.log("about page");
      this.load.image('ship','client/assets/dark.png');
  
    }
    create() {
      var pra1;
      var par2;
      var bg = this.add.image(400, 300, 'ship');
      bg.setScale(800/bg.width, 600/bg.height);
    
      var testText = this.add.text(80,100,'ABOUT THE GAME.',{
        fontSize: '32px',
        fill: '#FFF'
      });

      pra1 = this.add.text(80,140,'Space Impact III is a game happens in the space consists of 4 levels, ',{
        fontSize: '16px',
        fill: '#FFF'
      });

      pra1 = this.add.text(80,180,'the user is given a space craft to fight the enemies and ',{
        fontSize: '16px',
        fill: '#FFF'
      });

      pra1 = this.add.text(80,220,'in the final of the level he faces the boss of the level for each level.',{
        fontSize: '16px',
        fill: '#FFF'
      });

      par2 = this.add.text(80,300,'Space Impact III is a free online game, part of the Network & Internet ',{
        fontSize: '16px',
        fill: '#FFF'
      });

      par2 = this.add.text(80,340,'category. The game is still in development but also playable, it is  ',{
        fontSize: '16px',
        fill: '#FFF'
      });

      par2 = this.add.text(80,380,'currently available in English and it was last updated on 2018-11-30..',{
        fontSize: '16px',
        fill: '#FFF'
      });
  
      var back = {
        fontSize: '20px',
        fontFamily: 'Arial',
        color: 'white',
        backgroundColor: '#22517c',
        borderRadius: '20px'
      };
    
      this.add.text(340, 480, 'BACK TO MENU', back).setPadding(16).setInteractive().on('pointerdown',gamemenu);
  
    }
    update() {
  
    }
  }
  function gamemenu() {
      game.scene.stop('about');
      game.scene.start('StartScreen');
  }