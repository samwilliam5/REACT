import { useState,useMemo } from "react";
export const Memo = () =>{
    const [state,setState] = useState(false);
    const [text,setText] = useState('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quaerat earum suscipit unde aspernatur placeat ducimus nihil. Delectus, corporis nobis!');
    const handleToggle = (e) =>{
      e.preventDefault();
      setState(!state);
      setText('hello');
    }

    const memos = useMemo(()=>{
        console.log('usememo') 
          return text.toUpperCase();
    },[text]);

    return(
        <div>
             <button className="btn btn-primary" onClick={handleToggle}>Toggle</button>
            { state && <p className="lead">{memos}</p> }
        </div>
    )
}