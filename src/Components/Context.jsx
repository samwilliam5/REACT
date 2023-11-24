
import React, { useRef, useState } from "react";
import {Context1} from './Context1';
import {Context2} from './Context2';
import { AppContext } from "../MyContext";


export const Context = () =>{
    const [input,setInput] = useState('');
    const refer = useRef();
    return(
        <div className="container text-center">
        <AppContext.Provider value={{input,refer,setInput}} >
         <Context1/>
         <Context2/>
         </AppContext.Provider>
        </div>
    )
} 