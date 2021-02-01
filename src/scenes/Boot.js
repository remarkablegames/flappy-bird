import {
  SCENE_BOOT,
  SCENE_TITLE,
  SOUND_JUMP,
  TEXTURE_BIRD,
  TEXTURE_PIPE,
} from '../constants';

class Boot extends Phaser.Scene {
  constructor() {
    super({ key: SCENE_BOOT });
  }

  preload() {
    this.load.audio(SOUND_JUMP, require('../assets/jump.wav').default);
    this.load.image(TEXTURE_BIRD, require('../assets/bird.png').default);
    this.load.image(TEXTURE_PIPE, require('../assets/pipe.png').default);
  }

  create() {
    this.scene.start(SCENE_TITLE);
  }
}

export default Boot;
