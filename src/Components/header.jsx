  import React from "react";
  import { NavLink } from 'react-router-dom';


  export const Header = () =>{
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-lg">
            <NavLink to="/" className="navbar-brand">
               <span className="text-light fw-bol">MYWEB</span> 
            </NavLink>
            <button className="navbar-toggler" data-bs-target='#tooglerControl' data-bs-toggle='collapse' aria-labelledby="NavBartogglerBtn">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse justify-content-end text-center" id="tooglerControl">
                 <ul className="navbar-nav align-item-center gap-md-2 gap-lg-5">
                    <li className="nav-item">
                        <NavLink to="/todolist" className="nav-link">TodoList</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/login" className="nav-link">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link">About</NavLink>
                    </li>
                 </ul>
            </div>
            </div>
        </nav>
    )
  }