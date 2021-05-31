import React, {useState} from 'react';
import './styles.css';
import Createitem from "./components/Createitem";
import Itemlist from "./components/Itemlist";
import Todoitem from "./components/Todoitem";







function App() {


    let listItem = document.getElementsByClassName('container')

    const [todos, setTodos] = useState([])
    const addTask = (text) => {
        if (text === "") {
            return
        } else {let copy = [...todos]
            copy.push(text)
            setTodos(copy)}





    }

    const clearTask = () => {
        let copy = [...todos]
        copy.pop()
        setTodos(copy)
    }

  return (
      <div className='container'>

    <div className='main'>

        <div className='list-container'>
            <h1>TODO</h1>
            <Createitem addTask={addTask} clearTask={clearTask}/>
            <Itemlist todos={todos}/>
        </div>

    </div>
      </div>
  );
}

export default App;
