import { SCENE_MAIN, SCENE_TITLE } from '../constants';

class Title extends Phaser.Scene {
  constructor() {
    super({ key: SCENE_TITLE });
  }

  create() {
    const { centerX, centerY } = this.cameras.main;

    this.add
      .text(centerX, centerY, 'PLAY', {
        fill: 'white',
        font: '48px Arial',
      })
      .setOrigin(0.5)
      .setInteractive();

    this.input.on('pointerdown', () => this.scene.start(SCENE_MAIN));
  }
}

export default Title;
