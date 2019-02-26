import './index.css';
import { Boot, Main } from './scenes';
import Phaser from 'phaser';
// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();

const config = {
  backgroundColor: '#71c5cf',
  width: 400,
  height: 490,
  title: 'Flappy Bird',
  url: process.env.HOMEPAGE,
  version: process.env.VERSION,
  scene: [Boot, Main],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 1000 },
      debug: process.env.NODE_ENV === 'development',
    },
  },
  disableContextMenu: true,
};

new Phaser.Game(config);
