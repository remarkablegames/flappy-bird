import { Physics } from 'phaser';
import { TEXTURES } from '../constants';

export default class Pipe extends Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, TEXTURES.PIPE);

    // Reset drawing position of image to the top-left.
    this.setOrigin(0);
  }

  init() {
    // Make pipe active and visible.
    this.enableBody();

    // Stop pipe from falling down.
    this.body.setAllowGravity(false);

    // Move pipe to the left.
    this.body.setVelocityX(-200);
  }

  update() {
    // Make pipe inactive and invisible if it goes beyond world bounds.
    if (this.x + this.width < 0) {
      this.disableBody();
    }
  }
}
