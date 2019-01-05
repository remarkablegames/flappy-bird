import { GameObjects } from 'phaser';
import { TEXTURES } from '../constants';
import { sprites } from '../shared';

export default class Bird extends GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, TEXTURES.BIRD);
    sprites.bird = this;

    // Add the sprite to the scene.
    scene.add.existing(this);

    // Enable physics for the sprite.
    scene.physics.world.enable(this);
  }
}
