import React, {useState} from 'react';
import './styles.css';
import Createitem from "./components/Createitem";
import Itemlist from "./components/Itemlist";







function App() {

    const [todos, setTodos] = useState([])

  return (
      <div className='container'>
    <div className='main'>

        <div className='list-container'>
            <h1>TODO</h1>
            <Createitem/>
            <Itemlist todos={todos}/>
        </div>

    </div>
      </div>
  );
}

export default App;
