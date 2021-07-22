import React, { Component } from "react";
import NumberScale from "./numberScale";
import NumberTable from "./numberTable";
import "./calculator.css";

const App = () =>  {
  const [result, setResult] = React.useState("")

  
  const onPressed = (value) => {
    if (value === "=") {
      calculate();
    } else if (value === "c") {
       reset();
    } else if (value === "b") {
      backSpace();
    } else if (value ==="") 
    {
      setResult("0");
   } 
    else if (value) {
      setResult(result + value);
    }
  };

  

  const calculate = () => {
    try {
      setResult(eval( result));
    } catch (e) {
      setResult("error");
    }
  };

  const reset = () => {
    setResult("");
  };

  const backSpace = () => {
    setResult(result.slice(0, -1));
  };

 
    return (
      <div className='calculator card'>
        <NumberScale result={result} />
        <NumberTable   onPressed={onPressed} />
      </div>
    );

}

export default App
