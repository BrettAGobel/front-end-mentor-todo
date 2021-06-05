import React, {useState} from 'react'
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

                <Todoitem newState={newState}/>

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