import React from "react";
import { Header } from '../Components/header';
import { useLocation,useNavigate } from "react-router-dom";


export const Logout  = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    const username = location.state ? location.state.username : null;

    const handleLogout = (e) =>{
       e.preventDefault();
       navigate('/');
    }

    return (
        <>
        <Header />
          <div className="container-lg text-center">
              <span     Name="lead">Welcome {username}</span>
              <button className="btn btn-info d-block" onClick={handleLogout}>Logout</button>
          </div>
      </>
    );
}