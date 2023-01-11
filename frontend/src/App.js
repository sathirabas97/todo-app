import { useEffect } from "react";
import { useState } from "react";
import ToDo from "./components/Todo";
import {addToDo, getAllToDo, updateToDo, deleteToDo} from "./utils/HandleAPI.js";


function App() {

  const [todo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [todoId,settodoId] = useState("")



  useEffect(()=>{
    getAllToDo(setToDo)
  },[])

  const updateMode = (_id,text) =>{
    setIsUpdating(true)
    setText(text)
    settodoId(_id)
  }

  return (
    <div className="App">
        <div className="container">
           <h1>
              ToDo App
           </h1>
           <div className="top">
              <input type="text"  placeholder="Add Todos..." value={text} onChange={(e)=>setText(e.target.value)}/>
              <div className="add" 
                onClick={isUpdating? ()=>updateToDo(todoId,text,setToDo,setText,setIsUpdating) :
                ()=>addToDo(text, setText, setToDo)
              }>
                {isUpdating? "Update" : "Add"}
              </div>
           </div>

           <div className="list">
              {todo.map((item) => <ToDo 
              key={item._id} 
              text={item.text}
              updateMode = {() => updateMode(item._id, item.text)}
              deleteToDo = {() => deleteToDo(item._id, setToDo)}
              />)}
           </div>
        </div>
    </div>
  );
}

export default App;


