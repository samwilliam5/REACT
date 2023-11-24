import React, { useRef, useState } from "react";
import { Header } from '../Components/header';
import { useNavigate} from "react-router-dom";


export const Login = () => {
    const navigate = useNavigate();
    const [username,setUsername] = useState('');
 
    const refer  = useRef();
    const refer1  = useRef();

   const handleInputUser = (e) =>{
    setUsername(e.target.value);
   }

    const handleLogin = (e) =>{
        e.preventDefault();
        if(!refer.current.value){
        refer.current.focus();
        }
        else if(!refer1.current.value){
        refer1.current.focus();
        }
        else{
            refer.current.value = ''; 
            refer1.current.value = '';
            navigate('/logout',{state : {username}});        }     
    }
    return (
        <>
          <Header />
            <div className="container-lg text-center">
                <h1 className="display-3">Login</h1>
                <div className="col-lg-4 col-md-5 col-sm-9 col-xl  mx-auto">
                    <form>
                        <input type="text" placeholder="Enter Username" className="form-control mb-2" name="username" id="username" onChange={handleInputUser} ref={refer}/>
                        <input type="password" placeholder="Enter Password" className="form-control mb-2" name="password"  id="password" ref={refer1}/>
                        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}