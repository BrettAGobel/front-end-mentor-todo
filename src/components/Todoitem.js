import React, {useState} from 'react'



const Todoitem = ({todo, todos}) => {


    // const [inputId, setInputId] = useState({item: todos, id: 0})


// let idCalc = (todos) => {
//     if (todos.id === 0) {
//         return todos.id
//     } else return todos.id - 1
// }



    return (
        <div className='item'>

            <div className='checkbox-wrapper'>
                <input type='checkbox' name='task-complete' id={ 1} />
                <label htmlFor='custom-checkbox'></label>
                {/*<span></span>*/}

            </div>
            <span className='todo-text'>{todo}</span>
        </div>

    )
}






export default Todoitem