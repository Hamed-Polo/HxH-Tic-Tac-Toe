import Game from "./Game.js"
import GameView from "./GameView.js"

let game = new Game();
let gameView = new GameView();
gameView.updateBoard(game);

document.querySelector(".restart").addEventListener("click", () =>{
    restartGame();
    console.log("New Game");
})

let tiles = document.querySelectorAll(".board-tile");

tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index);
    })
})

function onTileClick(h) {
    game.makeMove(h);
    gameView.updateBoard(game);
}

function restartGame() {
    game = new Game();
    gameView.updateBoard(game);

    document.querySelectorAll('.board-tile').forEach(elem => {
        elem.classList.remove('winner', 'tile-gon', 'tile-killua')
    })
    const winMessage = document.querySelector('.win-message')
    winMessage.innerText = "";
    winMessage.classList.remove('equal','x','o')
}

gameView.updateBoard(game);

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle("dark");
});
