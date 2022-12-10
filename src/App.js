
import './App.css';
import {useState} from 'react';
import React from 'react';

function App() {
  const [newItem,setnewItem] = useState("")

  const[items, setItems ] = useState([])

  const addItem =()=> {
    if (!newItem){
      alert("enter the item");
      return;
    }
    const item = {
      id: Math.floor(Math.random()* 1000),
      value: newItem 
    }
    setItems(oldList => [...oldList, item])
    setnewItem("")
    
  }
  const deleteItem = (id) =>{
    const newArray = items.filter(item=> item.id !== id);
    setItems(newArray);
  }

 

  
  return (
    <div className="App">
      <div className='header'>My Todo List</div>
      <div className='content'>
        <input type="text" placeholder='add items' value={newItem} onChange={(e)=> setnewItem(e.target.value)}/>
        <button onClick={addItem} >ADD</button>
        <ul>
         {items.map(item => {
          return(
            <div>
            <li key={item.id}>{item.value}</li>
            <button onClick={()=> deleteItem(item.id)}>X</button>
            </div>
          )
         })} 
        </ul>
      </div>
    </div>
  );
}

export default App;
