import {gameboard, generateRandomBoardPosition} from '../board/board.js';
import {collision as snakeCollision, expandSnake} from '../snake/index.js';

const EXPANSION_RATE = 2;

let foodPosition = generateRamdomPosition();

export function update() {
if(snakeCollision(foodPosition)) {
    expandSnake(EXPANSION_RATE);
    foodPosition = generateRamdomPosition();
}

};


export function draw() {
    const foodElement = document.createElement('div');

        //config css
        foodElement.classList.add('food');

        //position
        foodElement.style.gridRowStart = foodPosition.y;
        foodElement.style.gridColumnStart = foodPosition.x;

        // append on DOM
        gameboard.appendChild(foodElement)
};

function generateRamdomPosition() {
    
    let newFoodPosition;

    while (newFoodPosition === undefined || snakeCollision(newFoodPosition)) {
        newFoodPosition = generateRandomBoardPosition();
    }

    return newFoodPosition;
}