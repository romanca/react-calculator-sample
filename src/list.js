import React from "react"

export default function List (props){ 
    return  this.props.items.map(currentTodo => {
              return <Todo todo={currentTodo} key={currentTodo._id} handleRemove={this.handleRemove} />
           
    }