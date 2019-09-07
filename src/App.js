 import React,{Component} from "react"
 import NumberScale from "./numberScale"
 import NumberTable from "./numberTable"
 import "./calculator.css"

 export default class App extends Component{
   
  state = {
    result:""
  }

  onPressed =(value)=>{
    if(value === "="){
      this.calculate()
    } else if (value === "C"){
      this.reset()
    }
    else if (value === "B"){
      this.backSpace()
    }
    else if (value){
      this.setState({
        result: this.state.result + value
      })
    }
  }

   

  calculate =()=>{
    try{this.setState({
      result: eval(this.state.result)
    })} catch(e){
        this.setState({
          result:"error"
        })
    }
  }
  reset =()=>{
    this.setState({
      result: ""
    })
  }

  backSpace =()=>{
    this.setState({
      result: this.state.result.slice(0, -1)
    })
    }
  

   render(){
     return (
       <div className="calculator card"> 
         <NumberScale result ={this.state.result}/>
         <NumberTable  text = "0" onPressed={this.onPressed}/>
       </div>
     )
   }
 }