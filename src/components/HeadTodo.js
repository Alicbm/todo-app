import React from "react";
import { AppContext } from "./AppContext";
import { ButtonNewTodo } from "./ButtonNewTodo";
import { LogoApp } from "./LogoApp";
import { SearchTodo } from "./SearchTodo";
import user from '../images/user.png'
import office from '../images/oficina.png'
import '../styles/HeadTodo.css';

export function HeadTodo(){
  const { parsedTodos } = React.useContext(AppContext);

  const total = parsedTodos.length;
  const completed = parsedTodos.filter(item => item.completed === true).length;

  return(
    <div className="HeadTodo">
      <LogoApp />
      <div className="Header__text">
        <h1 className="Header__text-title">Welcome!</h1>
        <p className="Header__text-message">Create your TODOs and organize the day.</p>
        <div className="Header__text-image">
          <img className="Header__text-image--img-sm" src={user} alt="User"/>
        </div>
        <p className="Header__text-completed">You have completed <strong>{completed}</strong> of <strong>{total}</strong> </p>
      </div>
      <SearchTodo />
      <div className="Header__text-image">
          <img className="Header__text-image--img-lg" src={office} alt="User"/>
        </div>
      <ButtonNewTodo />
    </div>
  )
}