import React from 'react';
import {Board} from './Board';

export class Game extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            isXTurn: true,
            winner: '',
            history: []
        };
    }

    componentWillMount(){
        console.log('resetGameing ');
    }

    resetGame = () => {
        // check for why it not working if i use Game.defaultProps or this.props OR find alternate
        this.setState({
            squares: Array(9).fill(null),
            isXTurn: true,
            winner: '',
            history: []
        });
    }

    updateSquareValue = (id) => {

        !this.state.winner && !this.state.squares[id] && this.setState((preState) => {
            preState.squares[id] = (preState.isXTurn ? 'X' : 'O');
            preState.history.push({id: id, player:preState.squares[id]});
            return {
                squares: preState.squares,
                isXTurn: !preState.isXTurn,
                history: preState.history
            };
        });

    }

    updateWinner = (winner) => {
        !this.state.winner && this.setState({
            winner
        });
    }

    changeHistory = (step) => {
        !this.state.winner && this.setState((preState) => {

            preState.history.splice(step).reverse().forEach((move) => {
                preState.squares[move.id] = null;
                preState.isXTurn = (move.player == 'X') ? true: false;
            });

            return {
                history: preState.history.slice(0,step),
                squares: preState.squares,
                isXTurn: preState.isXTurn
        }
        });
    }

    render(){
        return (
            <div>
                <h1> Tic Tac Toe Game </h1>
                <Board {...this.state} updateSquareValue={this.updateSquareValue} updateWinner={this.updateWinner}/>
                <div className="winnerBoard">
                    <a href="#" onClick={this.resetGame}>Restart Game</a>
                    <br/>
                    <strong>Winner: {this.state.winner}</strong>
                    <br/>
                    Moves:-
                    <br/>
                    <ol className="steps">
                        {this.state.history.map((step, index) => {
                            return <li
                                        key={index}
                                        onClick={this.changeHistory.bind(this,index+1)}
                                    >Step {index+1}</li>
                        })}
                    </ol>
                </div>
            </div>
        );
    }
}

//Avoid this as its problematic when reusing same component somewhere else
// @Todo Get the rid of it
Game.defaultProps = {
    squares: Array(9).fill(null),
    isXTurn: true,
    winner: '',
    history: []
};