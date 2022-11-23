// 많은 기능이 담긴 Component 을 class Square 에서 사용할 수 있도록 만들어주기 
// 리엑트에서 전해지는 Component을 extends 함으로 인해서 
// render 메소드도 사용할 수 있다. 
// render 안에 JSX를 작성 함으로서 화면에 보여진다. 

import React, { Component } from 'react'
import { Square } from './Square'
import "./Board.css";

export default class Board extends Component {

    //클래스 안애 함수 지정 
    renderSquare(i) {
        return <Square />
    }


  render() {
    return (
      <div>
        <div className='status'>Next Player: X, O</div>
        <div className='board-row'>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
        </div>
        <div className='board-row'>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}  
        </div>
        <div className='board-row'>
            {this.renderSquare(6)}  
            {this.renderSquare(7)}
            {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}
