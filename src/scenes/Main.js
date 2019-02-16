import { Bird, Pipe } from '../sprites';
import { SCENES } from '../constants';
import { Scene } from 'phaser';

export default class Main extends Scene {
  constructor() {
    super({ key: SCENES.MAIN });
  }

  create() {
    // Add bird sprite and bring it to the front.
    this.bird = new Bird(this, 100, 245);
    this.bird.setDepth(1);

    // Add pipes group.
    this.pipes = this.physics.add.group({
      classType: Pipe,
      runChildUpdate: true,
    });

    // Check for overlap between bird and pipe.
    this.physics.add.overlap(this.bird, this.pipes, this.hitPipe, null, this);

    // Generate row of pipes in intervals.
    this.addPipesEvent = this.time.addEvent({
      callback: this.addPipes,
      callbackScope: this,
      delay: 1500,
      loop: true,
    });

    // The score.
    this.score = 0;

    // Add score text and bring it to the front.
    this.scoreText = this.add.text(20, 20, this.score, {
      font: '32px Arial',
      fill: '#fff',
    });
    this.scoreText.setDepth(1);
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

  hitPipe() {
    const { bird } = this;

    // Do nothing if bird is dead. It means the bird is falling off the screen.
    if (!bird.active) {
      return;
    }

    // Kill the bird but keep it visible.
    bird.setActive(false);

    // Stop movement of all pipes.
    this.pipes.setVelocityX(0);

    // Prevent new pipes from being generated.
    this.addPipesEvent.remove();
  }

  update(time, delta) {
    const { bird } = this;

    // Restart scene if bird is out of bounds.
    if (bird.y < 0 || bird.y > 490) {
      this.scene.restart();
    }

    bird.update(time);
  }
}
