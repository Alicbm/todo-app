import React from "react";
import { AppContext } from "./AppContext";
import { EachTodo } from "./EachTodo";
import '../styles/Todos.css';

export function Todos(){
  const { parsedTodos, allTodos } = React.useContext(AppContext);

  return(
    <div className="Todos"> 
      <h2 className="Todos__title">Your Tasks</h2>
      {
        parsedTodos.length < 1 &&
        <div className="Todos__firstTodo">
          <p>Create your first TODO!</p>
        </div>
      }
      {
        allTodos.map(task => (
          <EachTodo  
            key={task.id} 
            task={task}
          /> 
        ))
      }
    </div>
  );
}