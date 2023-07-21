import React, { useState } from "react";
import "./Form.css";

export const TodoForm = (props) => {
    const[InputValue,setInputValue]=useState("")
    const InputValueHandler=(e)=>{
        setInputValue(e.target.value)
    }
    const FormPreventHandler=(e)=>{
        e.preventDefault();
        if (InputValue.trim() !== '') {
    //   const newTask = { inputv: trimmedValue };
        const obj={
            inputv:InputValue
        }
       
        props.fetchTask(obj)
        // console.log(obj)
        setInputValue("")}
        else{
            alert("Enter input")
        }
    }

  return (
    <div>
     

      <div className="login-dark">
     
        <form onSubmit={FormPreventHandler}>
        
          <h3>To-do List</h3>
          <div className="illustration">
            <i className="icon ion-ios-locked-outline" />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="email"
              placeholder="Enter Your tasks"
              value={InputValue}
              onChange={InputValueHandler}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit" >
              Add to do
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};
