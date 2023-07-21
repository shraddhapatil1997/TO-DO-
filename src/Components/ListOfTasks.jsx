import React, { useState } from "react";

export const ListOfTasks = (props) => {
  
  const handleDelete=()=>{
    props.onDelete(props.inputv);//we haven't assign unique key tat's why we are taking inputv
  }
   
  return (
    <div>
      
      <div className="card" >
        <h3>Your Task list :</h3>
        {props.TaskList.length === 0 ? (
        <p>Your cart is empty!Please Add a Task !!!!</p>
      ) : (
          props.TaskList.map((e) => {
            return <div className="card-body"><div className="text">{e.inputv}</div>
          <div className="button-wrapper">  <button className="deleteButton" onClick={()=>handleDelete(props.inputv)} >Delete</button></div>
            </div>;
          }))}
        </div>
      
    </div>
  );
};
