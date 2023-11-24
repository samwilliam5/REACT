
import { useContext } from "react";
import {AppContext} from '../MyContext';

export const Context1 = () =>{
    const {refer, setInput } =  useContext(AppContext);
    const handleClick = (e) =>{
     e.preventDefault();
     setInput(refer.current.value);
     refer.current.value = '';
    }
    return(
        <div className="container text-center">
       <p className="lead-text-center"></p>
       <input type="text" name="username" id="username" className="form-control" ref ={refer} />
       <button className="btn btn-primary" onClick={handleClick}>Click</button>
        </div>
    )
}