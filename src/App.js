import React from 'react';
import './styles.css';
import Createitem from "./components/Createitem";
import Itemlist from "./components/Itemlist";
import {Provider} from "react-redux";



function App() {
  return (
      <div className='container'>
    <div className='main'>

        <div className='list-container'>
            <h1>TODO</h1>
            <Createitem/>
            <Itemlist/>
        </div>

    </div>
      </div>
  );
}

export default App;
