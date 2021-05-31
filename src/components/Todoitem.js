import React from 'react'



const Todoitem = ({todo}) => {
    return (
        <div className='item'>


            <label><input type='checkbox' name='task-complete' checked='false'/><span className='custom-checkbox'></span> </label>
            <span>{todo}</span>
        </div>

    )
}






export default Todoitem