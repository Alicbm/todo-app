import React from "react";
import { AppContext } from "./AppContext";
import { CreateTodo } from "./CreateTodo";
import { HeadTodo } from "./HeadTodo";
import { Todos } from "./Todos";
import '../styles/PageContainer.css';
import { ListDays } from "./ListDays";
import { Footer } from "./Footer";

export function PageContainer(){
  const { modal } = React.useContext(AppContext);

  return(
    <div className="PageContainer">
      <HeadTodo />
      <ListDays />
      <Todos />
      <Footer />
      { modal && <CreateTodo /> }
    </div>
  )
}