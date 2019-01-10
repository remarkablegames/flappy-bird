import { Bird, Pipe } from '../sprites';
import { Input, Scene } from 'phaser';
import { groups, sprites } from '../shared';
import { SCENES } from '../constants';

export default class Main extends Scene {
  constructor() {
    super({ key: SCENES.MAIN });
  }

  create() {
    // Add bird sprite.
    sprites.bird = new Bird(this, 100, 245);

    // Add pipes group.
    groups.pipes = this.physics.add.group({
      classType: Pipe,
      runChildUpdate: true,
    });

    // Generate row of pipes in intervals.
    this.time.addEvent({
      callback: this.addPipes,
      callbackScope: this,
      delay: 1500,
      loop: true,
    });

    // Add key object for spacebar.
    this.spacebar = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.SPACE);
  }

  addPipes() {
    // Pick a number between 1 and 5 that will be the hole index.
    const holeIndex = Math.floor(Math.random() * 5) + 1;

    // Add 6 pipes with a hole at the index plus one.
    for (let index = 0; index < 8; index++) {
      if (index === holeIndex || index === holeIndex + 1) {
        continue;
      }
      groups.pipes.get(400, index * 60 + 10).init();
    }
  }

  restart() {
    this.scene.start(SCENES.MAIN);
  }

  update() {
    const { bird } = sprites;

    // Jump if spacebar is pressed.
    if (this.spacebar.isDown) {
      bird.body.setVelocityY(-350);
    }

    // Restart game if bird is out of bounds.
    if (bird.y < 0 || bird.y > 490) {
      this.restart();
    }
  }
}
