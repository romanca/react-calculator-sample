import React from "react";
import "./calculator.css";


const NumberScale  = ({result}) =>  {
  return (
    <div>
      <input
        type='text'
        className='calculator-screen z-depth-1'
        value={result}
        disabled={true}
      />
    </div>
  );
}

export default NumberScale;
