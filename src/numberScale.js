import React, { Component } from "react";

class NumberScale extends Component {
  render() {
    return (
      <div>
        <input
          type='text'
          className='calculator-screen z-depth-1'
          value={this.props.result}
          disabled={true}
        />
      </div>
    );
  }
}

export default NumberScale;
