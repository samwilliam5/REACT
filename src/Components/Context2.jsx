
import React from "react";
import {AppContext} from '../MyContext';
import { useContext } from "react";


export const Context2 = () =>{
    const {input} =  useContext(AppContext);
    return(
        <div className="container text-center">
       <p className="lead-text-center">Welcome : {input}! </p>
        </div>
    )
} 