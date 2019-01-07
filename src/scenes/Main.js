import { Input, Scene } from 'phaser';
import { Bird } from '../sprites';
import { SCENES } from '../constants';
import { sprites } from '../shared';

export default class Main extends Scene {
  constructor() {
    super({ key: SCENES.MAIN });
  }

  create() {
    // Create bird.
    new Bird(this, 100, 245);

    // Create a key object for spacebar.
    this.spacebar = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.SPACE);
  }

  restart() {
    this.scene.start(SCENES.MAIN);
  }

  update() {
    const { bird } = sprites;

    // Jump if the spacebar is pressed.
    if (this.spacebar.isDown) {
      bird.body.setVelocityY(-350);
    }

    // Restart game if bird is out of bounds.
    if (bird.y < 0 || bird.y > 490) {
      this.restart();
    }
  }
}
