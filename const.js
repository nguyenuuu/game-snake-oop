const g_width = 600;
const g_height = 400;
const sizeDot = 20;
var dx = 1;
var dy = 0;
var runGame = false;
var speed = 50;
// DOM
const score = document.querySelector(".score");
const gameOver = document.querySelector(".game-over");
const restart = document.querySelector(".restart");
const easy = document.querySelector(".easy");
const medium = document.querySelector(".medium");
const hard = document.querySelector(".hard");
const level = document.querySelector(".level");