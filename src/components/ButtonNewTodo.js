import React from "react"
import { AppContext } from "./AppContext";
import { FaPlus } from 'react-icons/fa'
import '../styles/ButtonNewTodo.css';

export function ButtonNewTodo() {
  const { setModal } = React.useContext(AppContext);

  return (
    <button
      className="ButtonNewTodo"
      onClick={() => setModal(true)}
    >
      <FaPlus />
    </button>
  )
}