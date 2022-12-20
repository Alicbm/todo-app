import React from "react"
import { AppContext } from "./AppContext"
import editTodo from '../images/edit.png';
import completedTodo from '../images/complete.png';
import deleteTodo from '../images/delete.png';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io'
import { FcCancel } from 'react-icons/fc';
import { BsCheckLg } from 'react-icons/bs';
import '../styles/EachTodo.css'

export function EachTodo({ task }) {
  const { handleCompleted, handleDeleteTodo, changeValueInput } = React.useContext(AppContext);
  const [edit, setEdit] = React.useState(false);
  const [buttons, setButtons] = React.useState(false);

  function NormalTodo() {
    return (
      <div 
        className="EachTodo"
        onClick={() => setButtons(!buttons)}  
      >
        <div
          className={
            !task.completed ? 'EachTodo__todo'
              : 'EachTodo__todo completed'}
        >
          {task.title}
        </div>

        {
          !buttons ? <IoIosArrowDown className="EachTodo__arrow" />
            : <IoIosArrowUp className="EachTodo__arrow" />
        }

        {
          buttons &&
          <div className="EachTodo__buttons">
            <img
              src={editTodo} alt="Edit Task"
              className="EachTodo__buttons-edit"
              onClick={() => setEdit(true)}
            />
            <img
              src={completedTodo} alt="Completed Task"
              className="EachTodo__buttons-completed"
              onClick={() => handleCompleted(task.id)}
            />
            <img
              src={deleteTodo} alt="Delete Task"
              className="EachTodo__buttons-delete"
              onClick={() => handleDeleteTodo(task.id)}
            />
          </div>
        }
      </div>
    );
  }

  function EditingTodo() {
    const [newValue, setNewValue] = React.useState(task.title);

    return (
      <div className="EachEditTodo">
        <input
          className="EachEditTodo__input"
          type='text'
          onChange={(e) => setNewValue(e.target.value)}
          value={newValue}
        />
        <button
          onClick={() => setEdit(false)}
          className="EachEditTodo__cancel"
        >
          <FcCancel />
        </button>
        <button
          onClick={() => changeValueInput(task.id, newValue, setEdit)}
          className="EachEditTodo__check"
        >
          <BsCheckLg />
        </button>
      </div>
    )
  }

  return (
    <div>
      {!edit ? <NormalTodo /> : <EditingTodo />}
    </div>
  )
}