import React from "react";


export const TodoLists = (props) => {

   const handleDelete = (e) =>{
     e.preventDefault();
     props.manageDelete(props.index);
   }

    return (
        <>  
            <div className="container-lg mt-2">
                  <ul className="list-group">
                    <li className="list-group-item display-6 bg-dark text-light"> <span>{props.todo}</span>
                    <button className="btn btn-danger ms-2" onClick={handleDelete}><span>Delete</span></button>
                    </li>
                  </ul>
            </div>
        </>
    )
}