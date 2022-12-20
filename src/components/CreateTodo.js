import React from "react";
import { AppContext } from "./AppContext";
import study from '../images/estudiando.png'
import '../styles/CreateTodo.css'

export function CreateTodo() {
  const { setModal, handleChangeTodo, handleAddTodo} = React.useContext(AppContext);

  window.scrollTo(0, 0);

  return (
    <div className="CreateTodo">
      <div className="CreateTodo__modal">
        <h3 className="CreateTodo__modal-title">Create a new TODO!</h3>
        <img  className="CreateTodo__modal-image" src={study} alt="New TODO" />
        <textarea 
          type='text' 
          placeholder='Write your TODO'
          className="CreateTodo__modal-input" 
          onChange={handleChangeTodo}
        />
        <button className="CreateTodo__modal-add" onClick={handleAddTodo}>
          Add Todo
        </button>
        <button className="CreateTodo__modal-cancel" onClick={() => setModal(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
}