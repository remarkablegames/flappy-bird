import { GameObjects, Input } from 'phaser';
import { SOUNDS, TEXTURES } from '../constants';

const JUMP_DELAY = 200;

export default class Bird extends GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, TEXTURES.BIRD);

    // Add the sprite to the scene.
    scene.add.existing(this);

    // Enable physics for the sprite.
    scene.physics.world.enable(this);

    // The jump sound.
    this.jumpSound = scene.sound.add(SOUNDS.JUMP);

    // Add key object for spacebar.
    this.spacebar = scene.input.keyboard.addKey(Input.Keyboard.KeyCodes.SPACE);

    this.lastJumped = 0;
  }

  jump() {
    this.body.setVelocityY(-350);
    this.scene.tweens.add({
      targets: this,
      angle: -20,
      duration: 100,
    });
    this.jumpSound.play();
  }

  update(time) {
    // Do nothing if dead. (The sprite should be falling off the screen.)
    if (!this.active) {
      return;
    }

    // Rotate downwards over time to simulate falling.
    if (this.angle < 20) {
      this.angle++;
    }

    const { activePointer } = this.scene.input;

    // Jump and rotate upwards when spacebar is pressed or left pointer is down.
    if (
      time > this.lastJumped &&
      (this.spacebar.isDown ||
        (activePointer.isDown && activePointer.buttons === 1))
    ) {
      this.jump();
      this.lastJumped = time + JUMP_DELAY;
    }
  }
}
