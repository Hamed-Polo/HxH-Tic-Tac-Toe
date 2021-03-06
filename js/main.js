import Game from "./Game.js"
import GameView from "./GameView.js"

let game = new Game();
let gameView = new GameView();
gameView.updateBoard(game);

document.querySelector(".restart").addEventListener("click", () =>{
    restartGame();
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
    var turn = game.turn;
    console.log(turn);

    if (turn == "X") {
        turn = "O";
    }
    else {
        turn = "X"
    }
    console.log("after change", turn);

    game = new Game();
    game.turn = turn;
    gameView.updateBoard(game);
    document.querySelectorAll('.board-tile').forEach(elem => {
        elem.classList.remove('winner', 'tile-gon', 'tile-killua')
    })
    const winMessage = document.querySelector('.win-message')
    winMessage.innerText = "";
    winMessage.classList.remove('equal','x','o') 
    console.log("new game: ", game.turn);
}

gameView.updateBoard(game);

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle("dark");
});

const characterChange = document.getElementById('characterChange');

characterChange.addEventListener('change', () => {
    document.body.classList.toggle('ccg');
})
