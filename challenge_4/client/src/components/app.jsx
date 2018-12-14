import React from 'react';
import Piece from './Piece.jsx'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          gameBoard: [
              [0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0]
          ],
          playersTurn: 1,
        }
      this.playPiece = this.playPiece.bind(this);
      this.winner = this.winner.bind(this);
      this.winnerChecker = this.winnerChecker.bind(this);
      this.rowChecker = this.rowChecker.bind(this);
      this.colChecker = this.colChecker.bind(this);
      this.TopLeftBottomRightChecker = this.TopLeftBottomRightChecker.bind(this);
      this.TopRightBottomLeftChecker = this.TopRightBottomLeftChecker.bind(this);
    }

    playPiece(col) {
        if (this.state.playersTurn === 1) {
            let newBoard1 = this.state.gameBoard;
            for (let x = 6; x >= 0; x--) {
                if(this.state.gameBoard[x][col] === 0) {
                    newBoard1[x].splice(col, 1, 1);
                    this.setState({
                        gameBoard: newBoard1,
                    })
                    this.winnerChecker(x, col);
                    break;
                }
            }
        }
        if (this.state.playersTurn === 2) {
            let newBoard2 = this.state.gameBoard;
            for (let i = 6; i >= 0; i--) {
                if(this.state.gameBoard[i][col] === 0) {
                    newBoard2[i].splice(col, 1, 2);
                    this.setState({
                        gameBoard: newBoard2,
                        
                    })
                    this.winnerChecker(i, col);
                    break;
                }
            }
            this.setState({
                playersTurn: 1
            })
        }
    }

    winner() {
        alert(`Player ${this.state.playersTurn} has won the game!`);
        fetch('/', )
    }

    winnerChecker(row, col) {
        if(this.rowChecker(row)) {
            this.winner();
        }
        if(this.colChecker(col)) {
            this.winner();
        }
        if(this.state.playersTurn === 1) {
            this.setState({
                playersTurn: 2
            })
        } else {
            this.setState({
                playersTurn: 1
            })
        }
    }

    rowChecker(row) {
        let count = 0
        if(this.state.playersTurn === 1) {
            for (let x = 0; x < this.state.gameBoard[row].length; x++) {
                if(this.state.gameBoard[row][x] === 1) {
                    count++
                    if(count === 4) {
                        return true;
                    } 
                }
            }
        } else {
            for (let i = 0; i < this.state.gameBoard[row].length; i++) {
                if(this.state.gameBoard[row][i] === 2) {
                    count++
                    if(count === 4) {
                        return true;
                    } 
                }
            }
        }
        return false;
    }

    colChecker(col) {
        let count = 0
        if(this.state.playersTurn === 1) {
            for (let x = 0; x < this.state.gameBoard.length; x++) {
                if(this.state.gameBoard[x][col] === 1) {
                    count++
                    console.log('play1', count)
                    if(count === 4) {
                        return true;
                    } 
                } else {
                    count = 0
                }
            }
        } else {
            for (let i = 0; i < this.state.gameBoard.length; i++) {
                if(this.state.gameBoard[i][col] === 2) {
                    count++;
                    console.log('play2', count);
                    if(count === 4) {
                        return true;
                    }
                } else {
                    count = 0
                }
            }
        }
        return false;
    }

    TopLeftBottomRightChecker() {

    }

    TopRightBottomLeftChecker() {

    }

    render() {
        return (
            <div className='gameboard'>
                <div className='playArea' onClick={() => {this.playPiece(0)}}></div>
                <div className='playArea' onClick={() => {this.playPiece(1)}}></div>
                <div className='playArea' onClick={() => {this.playPiece(2)}}></div>
                <div className='playArea' onClick={() => {this.playPiece(3)}}></div>
                <div className='playArea' onClick={() => {this.playPiece(4)}}></div>
                <div className='playArea' onClick={() => {this.playPiece(5)}}></div>
                <div className='playArea' onClick={() => {this.playPiece(6)}}></div>
                <div className='playArea' onClick={() => {this.playPiece(7)}}></div>
                {this.state.gameBoard[0].map((spot) => {return (<Piece spot={spot}/>)})}
                {this.state.gameBoard[1].map((spot) => {return (<Piece spot={spot}/>)})}
                {this.state.gameBoard[2].map((spot) => {return (<Piece spot={spot}/>)})}
                {this.state.gameBoard[3].map((spot) => {return (<Piece spot={spot}/>)})}
                {this.state.gameBoard[4].map((spot) => {return (<Piece spot={spot}/>)})}
                {this.state.gameBoard[5].map((spot) => {return (<Piece spot={spot}/>)})}
                {this.state.gameBoard[6].map((spot) => {return (<Piece spot={spot}/>)})}
            </div>
        )
    }
}

export default App;

