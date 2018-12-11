class instructions extends Phaser.Scene {
    constructor() {
      super({
        key: 'instructions'
      });
    }
    preload() {
      console.log("instruction page");
      this.load.image('ship','client/assets/dark.png');
  
    }
    create() {
        
        var bg = this.add.image(400, 300, 'ship');
    bg.setScale(800/bg.width, 600/bg.height);
    
      var testText = this.add.text(80,100,'GAME INSTRUCTIONS.',{
        fontSize: '32px',
        fill: '#FFF'
      });

var pra
pra = this.add.text(80,140,'The aim of this game is to destory as many enamies so you can',{
    fontSize: '16px',
    fill: '#FFF'
  });
  pra = this.add.text(80,180,'move to the next stage',{
    fontSize: '16px',
    fill: '#FFF'
  });
       pra = this.add.text(80,260,'Up arrow = move a spacecraft up',{
        fontSize: '16px',
        fill: '#FFF'
      });
      pra = this.add.text(80,300,'down arrow = move a spacecraft down',{
        fontSize: '16px',
        fill: '#FFF'
      });
      pra = this.add.text(80,340,'Up left = move a spacecraft left',{
        fontSize: '16px',
        fill: '#FFF'
      });
      pra = this.add.text(80,380,'Up right = move a spacecraft right',{
        fontSize: '16px',
        fill: '#FFF'
      });
      pra = this.add.text(80,420,'P = to shoot',{
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
    
      this.add.text(340, 480, 'BACK TO MENU', back).setPadding(16).setInteractive().on('pointerdown',gameMenu);
  
    }
    update() {
  
    }
  }
  function gameMenu() {
      game.scene.stop('instructions');
      game.scene.start('StartScreen');
  }