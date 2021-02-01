import { SCENES, SOUNDS, TEXTURES } from '../constants';

class Boot extends Phaser.Scene {
  constructor() {
    super({ key: SCENES.BOOT });
  }

  preload() {
    this.load.audio(SOUNDS.JUMP, require('../assets/jump.wav').default);
    this.load.image(TEXTURES.BIRD, require('../assets/bird.png').default);
    this.load.image(TEXTURES.PIPE, require('../assets/pipe.png').default);
  }

  create() {
    this.scene.start(SCENES.MAIN);
  }
}

export default Boot;
