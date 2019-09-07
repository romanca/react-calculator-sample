import React,{Component} from "react"

export default class MainPage extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            items:[
            "Apples",
            "Broccoli",
            "Chicken",
            "Duck",
            "Eggs",
            "Fish",
            "Granola",
            "Hash Browns"
            ]
        }
    }

    render(){
        return(
            <div> 
             <input type="text" placeholder="SEARCH"/>
            </div>
        )
    }
}