import './index.css';
import { Boot, Title, Main } from './scenes';

const config = {
  backgroundColor: '#71c5cf',
  width: 400,
  height: 490,
  title: 'Flappy Bird',
  url: process.env.WEB_APP_HOMEPAGE,
  version: process.env.WEB_APP_VERSION,
  scene: [Boot, Title, Main],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 1000 },
      debug: process.env.NODE_ENV === 'development',
    },
  },
  disableContextMenu: process.env.NODE_ENV !== 'development',
};

new Phaser.Game(config);
