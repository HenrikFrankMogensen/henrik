const c = document.getElementById('canvas-js');
const ctx = c.getContext("2d");

const game = new Game(ctx);

const audioContext = new AudioContext();

const beat1 = new SoundPlayer(audioContext,'sound/beat1.wav');
const beat2 = new SoundPlayer(audioContext,'sound/beat2.wav');
const thrust = new SoundPlayer(audioContext,'sound/thrust.wav');
thrust.loadSound();
const bangMedium = new SoundPlayer(audioContext,'sound/bangMedium.wav');
const extraShip = new SoundPlayer(audioContext,'sound/extraShip.wav');
const saucerBig = new SoundPlayer(audioContext,'sound/saucerBig.wav');
const fire = new SoundPlayer(audioContext,'sound/fire.wav');

bangMedium.loadSound().then(() => {
  bangMedium.play();
});
let saucer = new Saucer(-50,100,0,0,6,false);
let saucerLittle = new Saucer(-50,500,0,0,4,false);
let player = new Player(400, 300, 0, 0, 0, 0);
player.addELSpacePressed();
const bullets = new Bullets();
const asteroids = new Asteroids();
asteroids.makeVecModelAsteroids();
asteroids.makeAsteroids();
const canvasButtonLeft = new CanvasButton(100,505,20,10,ctx,c,'left');
const canvasButtonRight = new CanvasButton(680,505,20,10,ctx,c,'right');
const canvasButtonThrust = new CanvasButton(385,510,10,20,ctx,c,'thrust');
const test = new CanvasButton(680,450,20,10,ctx,c,'right');
let buttons = new ButtonPressed();
let button = new Buttons();

document.addEventListener("DOMContentLoaded", function() {
  function gameLoop() {   
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,800,600); 
    game.onUserUpdate();
    window.requestAnimationFrame(gameLoop);
  }
  gameLoop();
});
