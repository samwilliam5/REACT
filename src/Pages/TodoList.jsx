import React, { useState,useRef} from "react";
import { Header } from '../Components/header';
import { TodoLists } from "./TodoLists";



export const TodoList = () => {
    const [userinput,setuserinput] = useState('');
    const [todolist,setTodoList] = useState([]);
    const refer = useRef();


    const handleTodoBtn  = (e) =>{
      e.preventDefault();
      const newList = [...todolist,userinput];
      console.log(newList);
      if(userinput){
        setTodoList(newList);
      }
      refer.current.focus();
      refer.current.value = '';
    }

   const manageDelete = (id) =>{
      const newlists = todolist.filter((todo,index)=>{
        return index !== id;
      })
      setTodoList(newlists);
   }

    return (
        <>  
          <Header />
            <div className="container-lg text-center">
                <h1 className="display-3">TodoList</h1>
                <div className="row">
                <form className="col-xxl-5 mx-auto " >
                 <input type="text" name="todolist" id="todolist" placeholder="Enter a TodoList" className="form-control" onChange={(e)=>setuserinput(e.target.value)} ref={refer} />
                 <button className="btn btn-primary mt-2" onClick={handleTodoBtn}>AddTodo</button>
                  {todolist.map((todo,index)=>{
                    return  <TodoLists key={index} todo={todo} index={index} manageDelete = {manageDelete} />
                  })}
              </form>
              </div>
            </div>
        </>
    )
}