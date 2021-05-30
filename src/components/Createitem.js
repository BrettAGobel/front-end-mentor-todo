import React from 'react'


const Createitem = () => {



    return (
        <div>
            <form className='item-container'>
            <input type='text' placeholder='Create new TODO'></input>
            <input type='submit' value='Add to List'></input>
            </form>
        </div>
    )
}


export default Createitem