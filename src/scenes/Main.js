import { Bird, Pipe } from '../sprites';
import { Input, Scene } from 'phaser';
import { SCENES } from '../constants';

export default class Main extends Scene {
  constructor() {
    super({ key: SCENES.MAIN });
  }

  create() {
    // Add bird sprite.
    this.bird = new Bird(this, 100, 245);

    // Add pipes group.
    this.pipes = this.physics.add.group({
      classType: Pipe,
      runChildUpdate: true,
    });

    // Check for overlap between bird and pipe.
    this.physics.add.overlap(this.bird, this.pipes, this.restart, null, this);

    // Generate row of pipes in intervals.
    this.time.addEvent({
      callback: this.addPipes,
      callbackScope: this,
      delay: 1500,
      loop: true,
    });

    // The score.
    this.score = 0;

    // Add score text.
    this.scoreText = this.add.text(20, 20, this.score, {
      font: '32px Arial',
      fill: '#fff',
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
      this.pipes.get(400, index * 60 + 10).init();
    }

    // Increase the score by 1.
    this.scoreText.text = this.score++;
  }

  restart() {
    this.scene.restart();
  }

  update() {
    const { bird } = this;

    // Rotate the bird downwards if it's falling.
    if (bird.angle < 20) {
      bird.angle++;
    }

    // Jump and rotate the bird upwards if spacebar is pressed.
    if (this.spacebar.isDown) {
      bird.body.setVelocityY(-350);
      this.tweens.add({
        targets: bird,
        angle: -20,
        duration: 100,
      });
    }

    // Restart scene if bird is out of bounds.
    if (bird.y < 0 || bird.y > 490) {
      this.restart();
    }
  }
}
