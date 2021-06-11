import React, {useEffect, useRef, useState} from 'react'
import Todoitem from "./Todoitem";


const Itemlist = ({todos, newState}) => {


//     return (
//         <div className='item'>
//             {newState.map(todo => {
//             return (
//
//                 <div className='checkbox-wrapper'>
//                     <input type='checkbox' name='task-complete' id={`custom-checkbox-${1}`} />
//                     <label htmlFor='custom-checkbox'></label>
//                     {/*<span></span>*/}
//
//                 </div>
//                 <span className='todo-text'>{todo}</span>
//             </div>
//             // <Todoitem todo={todo} todos={todos} />
//
//
//             ))
//     )
//
//
//
//
//
// }

    const todoList = newState.map((item) => (

        <div className='item' >

            <div className='checkbox-wrapper'>
                <input type='checkbox' name='task-complete' id={`custom-checkbox-${item.id}`}/>
                <label htmlFor={`custom-checkbox-${item.id}`}></label>
            </div>
            <span className='todo-text' >{item.newTodo}</span>
        </div>

        )
    )



    return (
        <div>
            {todoList}
        </div>
    )

//     return (
//         <div>
//             {newState.map(todo => {
//                 return (
//                     <Todoitem todo={todo}/>
//                 )
//             })}
//         </div>
//     );
// }

}




export default Itemlist