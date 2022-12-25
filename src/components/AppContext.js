import React from "react";

export const AppContext = React.createContext();

export function ContainerApp({ children }) {
  const [nameCache, setNameCache] = React.useState('TODAY_V1');

  const localStorageTodos = localStorage.getItem(nameCache);
  let parsedTodos;
  if (!localStorageTodos) {
    localStorage.setItem(nameCache, JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [modal, setModal] = React.useState(false);
  const [taskText, setTaskText] = React.useState('');
  const [todo, setTodo] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const handleChangeTodo = (e) => {
    const value = e.target.value;
    setTaskText(value);
  }

  const handleAddTodo = () => {
    const newTodo = {
      id: crypto.randomUUID(),
      title: taskText,
      completed: false,
    }
    if(taskText.length >= 1){
      const storageTodo = JSON.stringify([...parsedTodos, newTodo]);
      localStorage.setItem(nameCache, storageTodo);
      setTodo([...parsedTodos, newTodo]);
      setModal(false);
    }else{
      alert('You must to write something for add a TODO')
    }
  }

  const handleCompleted = (id) => {
    const index = parsedTodos.findIndex(item => item.id === id);
    parsedTodos[index].completed = !parsedTodos[index].completed;

    const storageTodo = JSON.stringify([...parsedTodos]);
    localStorage.setItem(nameCache, storageTodo);
    setTodo([...parsedTodos]);
  }

  const handleDeleteTodo = (id) => {
    const filter = parsedTodos.filter(item => item.id !== id);
    const storageTodo = JSON.stringify([...filter]);
    localStorage.setItem(nameCache, storageTodo);
    setTodo([...filter]);
  }

  const changeValueInput = (id, stateTitle, stateEdit) => {
    const index = parsedTodos.findIndex(item => item.id === id);
    parsedTodos[index].title = stateTitle;

    const storageTodo = JSON.stringify([...parsedTodos]);
    localStorage.setItem(nameCache, storageTodo);
    setTodo([...parsedTodos]);
    stateEdit(false);
  }

  //Modal fot add todo
  if (!!modal) {
    document.querySelector('body').classList.add('scroll-active');
  } else {
    document.querySelector('body').classList.remove('scroll-active');
  }

  let allTodos = [];

  if (!searchValue.length >= 1) {
    allTodos = parsedTodos;
  } else {
    allTodos = parsedTodos.filter(item => {
      const itemText = item.title.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return itemText.includes(searchText);
    })
  }

  return (
    <AppContext.Provider value={{
      nameCache,
      setNameCache,

      parsedTodos,

      modal,
      setModal,

      taskText,
      setTaskText,

      todo,
      setTodo,

      setSearchValue,

      handleChangeTodo,
      handleAddTodo,
      handleCompleted,
      handleDeleteTodo,
      changeValueInput,

      allTodos
    }}>
      {children}
    </AppContext.Provider>
  )
}