import React, { Component } from "react";
import "./calculator.css";

class NumberTable extends Component {
  onPressed = (e) => {
    this.props.onPressed(e.target.value);
  };

  render() {
    return (
      <div className='calculator-keys'>
        <button
          value='1'
          type='button'
          className='operator btn btn-info'
          onClick={this.onPressed}>
          1
        </button>
        <button
          value='2'
          type='button'
          className='operator btn btn-info'
          onClick={this.onPressed}>
          2
        </button>
        <button
          value='3'
          type='button'
          className='operator btn btn-info'
          onClick={this.onPressed}>
          3
        </button>
        <button
          value='4'
          type='button'
          className='operator btn btn-info'
          onClick={this.onPressed}>
          4
        </button>
        <button
          value='5'
          type='button'
          className='operator btn btn-info'
          onClick={this.onPressed}>
          5
        </button>
        <button
          value='6'
          type='button'
          className='operator btn btn-info'
          onClick={this.onPressed}>
          6
        </button>
        <button
          value='7'
          type='button'
          className='operator btn btn-info'
          onClick={this.onPressed}>
          7
        </button>
        <button
          value='8'
          type='button'
          className='operator btn btn-info'
          onClick={this.onPressed}>
          8
        </button>
        <button
          value='9'
          type='button'
          className='operator btn btn-info'
          onClick={this.onPressed}>
          9
        </button>
        <button
          value='0'
          type='button'
          className='operator btn btn-info'
          onClick={this.onPressed}>
          0
        </button>
        <button
          value='('
          type='button'
          className='operator btn btn-info'
          onClick={this.onPressed}>
          (
        </button>
        <button
          value=')'
          type='button'
          className='operator btn btn-info'
          onClick={this.onPressed}>
          )
        </button>
        <button
          value='.'
          type='button'
          className='operator btn btn-info'
          onClick={this.onPressed}>
          .
        </button>
        <button
          value='/'
          type='button'
          className='operator btn btn-info'
          onClick={this.onPressed}>
          &divide;
        </button>
        <button
          value='*'
          type='button'
          className='operator btn btn-info'
          onClick={this.onPressed}>
          &times;
        </button>
        <button
          value='+'
          type='button'
          className='operator btn btn-info'
          onClick={this.onPressed}>
          +
        </button>
        <button
          value='-'
          type='button'
          className='operator btn btn-info'
          onClick={this.onPressed}>
          -
        </button>
        <button
          value='='
          type='button'
          className='operator btn btn-info'
          onClick={this.onPressed}>
          =
        </button>
        <button
          value='C'
          type='button'
          className='operator btn btn-info'
          onClick={this.onPressed}>
          C
        </button>
        <button
          value='B'
          type='button'
          className='operator btn btn-danger'
          onClick={this.onPressed}>
          B
        </button>
      </div>
    );
  }
}
export default NumberTable;
