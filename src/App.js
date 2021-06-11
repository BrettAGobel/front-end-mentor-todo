import React, {useState} from 'react';
import './styles.css';
import Createitem from "./components/Createitem";
import Itemlist from "./components/Itemlist";
import Todoitem from "./components/Todoitem";
import Slider from "./components/Slider";







function App() {

    const data = [{id: 1, newTodo: 'poop'}, {id: 2, newTodo: 'eat'}, {id: 3, newTodo: 'poop again'}]



    const [newState, setState] = useState(data)
    // const [todos, setTodos] = useState({id: [], listItems: []})
    const addTodo = (text) => {

        if (text === "") {
        return
        } else {
            let newId = () => {
                let currentID = newState.length
                let sequential = currentID + 1
                return sequential
            }
            let copyItems = [...newState]
            copyItems.push({id: newId(), newTodo: text})
            setState(copyItems)
        }


    }





    const clearTask = () => {
        let copy = [...newState]
        copy.pop()
        setState(copy)
    }

  return (
      <div className='container'>

    <div className='main'>
    </div>
    <div className='tester'>
          <h1>TODO</h1>
          <Createitem  addTodo={addTodo} clearTask={clearTask}/>
          <div className='list-container'>

              <Itemlist newState={newState}/>
          </div>
        <Slider />
          </div>
      </div>
  );
}

export default App;
