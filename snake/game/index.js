import { gameboard, isDutsideBoard } from './board/board.js';
import { SNAKE_SPEED, draw as snakeDraw, update as snakeUpdate, getSnakeHead, hasSelfColision as hasSnakeSelfColision } from './snake/index.js'
import {draw as foodDraw, update as foodUpdate} from './food/index.js'



var LastTimeRender = 0;



function main(currentTime){

    if (checkGameOver()) {
        if (confirm('Voce perdeu o jogo')) {
            window.location.reload();
        } else {
            window.requestAnimationFrame(main);
        }
        return;
    }

    window.requestAnimationFrame(main);

    const secondsSinceLastRender = (currentTime - LastTimeRender)/ 1000;

    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

    LastTimeRender = currentTime;


    update();

    draw();
}

function update() {
    gameboard.innerHTML = '';
    snakeUpdate();
    foodUpdate();

};

function draw() {
    snakeDraw ();
    foodDraw();
};

function checkGameOver() {
 return isDutsideBoard(getSnakeHead()) || hasSnakeSelfColision();

}

window.requestAnimationFrame(main)

