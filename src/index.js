import './index.css';
import { Boot, Main } from './scenes';
import Phaser from 'phaser';
import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();

const config = {
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: process.env.NODE_ENV === 'development',
    },
  },
  scene: [Boot, Main],
};

new Phaser.Game(config);
