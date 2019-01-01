import { SCENES } from '../constants';
import { Scene } from 'phaser';

export default class Boot extends Scene {
  constructor() {
    super({ key: SCENES.BOOT });
  }

  preload() {}

  create() {
    this.scene.start(SCENES.MAIN);
  }
}
