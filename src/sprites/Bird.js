import { GameObjects } from 'phaser';
import { TEXTURES } from '../constants';

export default class Bird extends GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, TEXTURES.BIRD);

    // Add the sprite to the scene.
    scene.add.existing(this);

    // Enable physics for the sprite.
    scene.physics.world.enable(this);
  }
}
