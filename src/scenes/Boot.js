import { SCENES, TEXTURES } from '../constants';
import { Scene } from 'phaser';

export default class Boot extends Scene {
  constructor() {
    super({ key: SCENES.BOOT });
  }

  preload() {
    const { load } = this;
    load.image(TEXTURES.BIRD, require('../assets/bird.png'));
    load.image(TEXTURES.PIPE, require('../assets/pipe.png'));
  }

  create() {
    this.scene.start(SCENES.MAIN);
  }
}
