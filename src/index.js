import './index.css';
import { Boot, Main } from './scenes';
import Phaser from 'phaser';
import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();

const config = {
  backgroundColor: '#71c5cf',
  width: 400,
  height: 490,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 1000 },
      debug: process.env.NODE_ENV === 'development',
    },
  },
  scene: [Boot, Main],
};

new Phaser.Game(config);
