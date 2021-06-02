import React from 'react'
import Todoitem from "./Todoitem";


const Itemlist = ({todos}) => {
    return (

        todos.listItems.map(todo => (
            <Todoitem todo={todo} todos={todos}/>

        ))
    )
}






export default Itemlist