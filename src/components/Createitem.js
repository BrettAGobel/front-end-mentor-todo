import React, {useState} from 'react'


const Createitem = ({addTask, clearTask}) => {

let [text, setText] = useState("")

const handleSubmit = (e) => {
    e.preventDefault()
    addTask(text)


}

    const handleClear = (e) => {
        e.preventDefault()
        clearTask()
    }


    return (
        <div>
            <form className='search-container' onSubmit={handleSubmit}>
            <input type='text' placeholder='Create new TODO' name='text' value={text} onChange={ e => setText(e.target.value)} />
                <input type='submit' value='Add Item' onSubmit={handleSubmit}/>
                <input type='submit' value='Clear List' onClick={handleClear}/>

            {/*<input type='submit' value='Add to List' onSubmit={() => setText(text + 1)}></input>*/}
            </form>
        </div>
    )
}


export default Createitem