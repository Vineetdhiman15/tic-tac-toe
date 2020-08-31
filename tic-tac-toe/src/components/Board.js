import React from 'react';
import Square from './Square';
import { decideWinner } from '../utilities/utilities';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xTurn: true,
    }
  }

handleClick = (i) => {
  const squares = this.state.squares.slice();
  if (decideWinner(squares) || squares[i]) {
    return;
  }
  squares[i] = this.state.xTurn ? 'X' : 'O';
  this.setState({
    squares: squares,
    xTurn: !this.state.xTurn,
  });
}

handleReset = () => {
  this.setState({
  squares: Array(9).fill(null),
  });
}

  render() {
    const winner = decideWinner(this.state.squares);
    return (
      <div className="gameBoard">
        <div className="status">{winner?`Winner : ${winner}`:`Next player : ${this.state.xTurn ? 'X' : 'O'}`}</div>
        <button className="buttonStyle" onClick={this.handleReset}>Reset</button>
        <div className="boardStyle">
          <div className="board-row">
            <Square value={this.state.squares[0]} onClick={()=>this.handleClick(0)}/>
            <Square value={this.state.squares[1]} onClick={()=>this.handleClick(1)}/>
            <Square value={this.state.squares[2]} onClick={()=>this.handleClick(2)}/>
          </div>
          <div className="board-row">
            <Square value={this.state.squares[3]} onClick={()=>this.handleClick(3)}/>
            <Square value={this.state.squares[4]} onClick={()=>this.handleClick(4)}/>
            <Square value={this.state.squares[5]} onClick={()=>this.handleClick(5)}/>
          </div>
          <div className="board-row">
            <Square value={this.state.squares[6]} onClick={()=>this.handleClick(6)}/>
            <Square value={this.state.squares[7]} onClick={()=>this.handleClick(7)}/>
            <Square value={this.state.squares[8]} onClick={()=>this.handleClick(8)}/>
          </div>
        </div>
      </div>
    );
  }
}
