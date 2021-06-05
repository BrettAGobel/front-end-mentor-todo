import React, {useState} from 'react'



const Todoitem = ({todo, todos, newState}) => {


//     const [inputId, setInputId] = useState({todos })
//
//
// let idCalc = (idValue) => {
//     let newValue = 0
//     for (let i = 0; i < idValue.length; i++) {
//         newValue += idValue[i]
//     }
//     return newValue
// }
// let idValue = inputId.id
//
//     setInputId(idCalc(idValue))



    return (
        <div className='item' >

            <div className='checkbox-wrapper'>
                <input type='checkbox' name='task-complete' id={`custom-checkbox-${1}`} />
                <label htmlFor='custom-checkbox'></label>
                {/*<span></span>*/}

            </div>
            <span className='todo-text'>{newState.map(obj => {
                obj.newTodo.value
            })}</span>
        </div>

    )
}






export default Todoitem