import React, {useState} from 'react';
import './styles.css';
import Createitem from "./components/Createitem";
import Itemlist from "./components/Itemlist";
import Todoitem from "./components/Todoitem";







function App() {




    const [todos, setTodos] = useState({id: [], listItems: []})
    const addTask = (text) => {

        if (text === "") {
        return
        } else {
            let copyItems = [...todos.listItems]
            let idIncrement = [...todos.id]
            copyItems.push(text)
            idIncrement.push(copyItems.length -1)
            setTodos({id: idIncrement, listItems: copyItems})
        }







    }

    const clearTask = () => {
        let copy = [...todos]
        copy.pop()
        setTodos(copy)
    }

  return (
      <div className='container'>

    <div className='main'>
    </div>
    <div className='tester'>
          <h1>TODO</h1>
          <Createitem addTask={addTask} clearTask={clearTask}/>
          <div className='list-container'>

              <Itemlist todos={todos}/>
          </div>
          </div>
      </div>
  );
}

export default App;
