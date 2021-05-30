import React, {useState} from 'react'


const Createitem = (todos) => {

let [text, setText] = useState("")

const handleSubmit = (e) => {
    e.preventDefault()



}


    return (
        <div>
            <form className='item-container' onSubmit={handleSubmit}>
            <input type='text' placeholder='Create new TODO' name='text' value={text} onChange={ e => setText(e.target.value)} />
                <input type='submit' value='Add to List' />
            {/*<input type='submit' value='Add to List' onSubmit={() => setText(text + 1)}></input>*/}
            </form>
        </div>
    )
}


export default Createitem