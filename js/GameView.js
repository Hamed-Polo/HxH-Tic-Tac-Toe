export default class GameView {
    constructor() {
        
    }

    updateBoard(game){
        this.updateTurn(game);
        const winningCombination = game.winningCombinations();

        for (let h = 0; h < game.board.length; h++){
            const tile = document.querySelector(`.board-tile[data-index='${h}']`)
            tile.textContent = game.board[h];

            tile.classList.remove("tile-winner");
            let tileType = game.board[h] == 'X' ? "tile-gon" : "tile-killua";

            tile.innerHTML = `<span class= "${tileType}">${game.board[h] ? game.board[h] : ""}</span>`;

            if (winningCombination && winningCombination.includes(h)) {
                tile.classList.add("tile-winner");
            }
        }
    }

    updateTurn(game) {
        let playerX = document.querySelector(".player-gon")
        let playerO = document.querySelector(".player-killua")

        if (game.turn == "X") {
            playerX.classList.add('active')
            playerO.classList.remove('active')
        }
        else {
            playerO.classList.add('active');
            playerX.classList.remove('active')
        }
    }
}