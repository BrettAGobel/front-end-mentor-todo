import React, {useState} from 'react';
import './styles.css';
import Createitem from "./components/Createitem";
import Itemlist from "./components/Itemlist";
import Todoitem from "./components/Todoitem";







function App() {

    const data = [{id: '1', newTodo: 'poop'}, {id: '2', newTodo: 'eat'}, {id: '3', newTodo: 'poop again'}]



    const [newState, setState] = useState(data)
    // const [todos, setTodos] = useState({id: [], listItems: []})
    // const addTask = (text) => {
    //
    // //     if (text === "") {
    // //     return
    // //     } else {
    // //         let copyItems = [...todos.listItems]
    // //         let idIncrement = [...todos.id]
    // //         copyItems.push(text)
    // //         idIncrement.push(copyItems.length -1)
    // //         setTodos({id: idIncrement, listItems: copyItems})
    // //     }
    // //
    // //
    // // }





    // const clearTask = () => {
    //     let copy = [...todos]
    //     copy.pop()
    //     setTodos(copy)
    // }

  return (
      <div className='container'>

    <div className='main'>
    </div>
    <div className='tester'>
          <h1>TODO</h1>
          <Createitem  />
          <div className='list-container'>

              <Itemlist newState={newState}/>
          </div>
          </div>
      </div>
  );
}

export default App;
