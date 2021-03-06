export default class Game {
    constructor() {
        this.board = new Array(9).fill(null);
        this.turn = "X";
    }

    nextTurn() {
        if (this.turn == "X") {
            this.turn = "O";
        }
        else {
            this.turn = "X"
        }
    }

    makeMove(h) {
        if (this.endGame()){
            return;
        }

        if (this.board[h]) {
            return;
        }

        this.board[h] = this.turn; // can be either X or O

        let winningComination = this.winningCombinations();
        const winMessage = document.querySelector('.win-message')

        const playerX = document.getElementById('gon')
        const playerO = document.getElementById('killua')
        if (!winningComination) {
            this.nextTurn();
        }
        else if (winningComination == 'equal') {
            winMessage.classList.add('equal')
            winMessage.innerText = `It's a draw!`
        }
        else {
            winMessage.classList.add(this.turn.toLocaleLowerCase())
            if (`${this.turn}` == "X" && playerX.innerText == "Player Gon") {
                winMessage.innerText = `Player Gon Wins!`
            }
            else if (`${this.turn}` == "X") {
                winMessage.innerText = `Player Kurapika Wins!`
            }
            else if (`${this.turn}` == "O" && playerO.innerText == "Player Killua") {
                winMessage.innerText = `Player Killua Wins!`
            }
            else {
                winMessage.innerText = `Player Leorio Wins!`
            }
        }
    }

    winningCombinations(){
        const combinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2]
        ]

        for (const combination of combinations) {
            const [a, b, c] = combination;
            
            if (this.board[a] && (this.board[a] == this.board[b] && this.board[a] == this.board[c])){
                return combination;
            }
        }
        if (this.board.every(tile => tile !== null)) return 'equal'
    }

    endGame() {
        let winningCombination = this.winningCombinations();
        if (winningCombination || winningCombination == 'equal'){
            return true;
        }
        else  {
            return false;
        }
    }
}