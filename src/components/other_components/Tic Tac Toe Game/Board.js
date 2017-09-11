import React from 'react';

const Square = ({value, onClickHandler}) => (
    <button
        className="square"
        onClick={onClickHandler}
    >{value}</button>
);

export class Board extends React.Component {

    constructor(props){
        super(props);

        this.winningPos = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
    }

    render() {
        let counter = 0;
        return (
            <div>

                {
                    [0,1,2].map((row, index) => {
                        row = row + counter;
                        counter+=2;
                        return (
                            <div key={index} className="block">
                                <Square key={row} value={this.props.squares[row]} onClickHandler={this.props.updateSquareValue.bind(this, row)}/>
                                <Square key={row+1} value={this.props.squares[row+1]} onClickHandler={this.props.updateSquareValue.bind(this, row+1)}/>
                                <Square key={row+2} value={this.props.squares[row+2]} onClickHandler={this.props.updateSquareValue.bind(this, row+2)}/>
                            </div>);
                    })
                }
            </div>
        );
    }

    componentDidUpdate(preProps){
        this.props.squares.filter((player) => player).length > 4 && this.winningPos.forEach((posibility) => {
            let [a,b,c] = posibility;
            if( this.props.squares[a] && this.props.squares[a] == this.props.squares[b] && this.props.squares[b] == this.props.squares[c] ){
                this.props.updateWinner(this.props.squares[a]);
            }

        })
    }

}
