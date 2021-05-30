import React from 'react'
import Todoitem from "./Todoitem";


const Itemlist = ({todos}) => {
    return (

        todos.map(todo => (
            <Todoitem todo={todo}/>
        ))
    )
}






export default Itemlist