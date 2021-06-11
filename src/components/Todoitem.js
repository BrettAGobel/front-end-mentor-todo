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


    // const todoValue = newState.map((item) => (
    //
    //         item.newTodo
    //
    //     )
    // )



    return (
        <div className='item' >

            <div className='checkbox-wrapper'>
                <input type='checkbox' name='task-complete'  />
                <label htmlFor='custom-checkbox'></label>
                {/*<span></span>*/}

            </div>
            <span className='todo-text'></span>
        </div>

    )
}






export default Todoitem