import Input from "./conponent/Input";
import Box from "./conponent/Box";
import { useState } from "react";
function App() {
  const [todos,setTodo] = useState([]);

  const onHandler = (item)=>{
    // console.log(item);
    setTodo(
      [
        ...todos,
        {
          item,
          time:new Date().toLocaleTimeString()
        }
      ]
    )
  }

  const removeHandler = (id)=>{
    const newTodos = todos.filter(
      (d,index)=>{
        if(index!==id) return true;
        else return false;
      }
    )
    setTodo(newTodos);
  }
  return (
    <div className="bg-slate-500 w-screen h-screen p-3 flex justify-center items-center">
      <div className="bg-slate-700 rounded-2xl w-1/2 h-3/4">
        <Input handler={onHandler}/>
        <Box data = {todos}  deleteHandle = {removeHandler}/>
      </div>

    </div>
  );
}

export default App;
