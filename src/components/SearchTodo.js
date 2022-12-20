import React from 'react';
import '../styles/SearchTodo.css';
import { AppContext } from './AppContext';

export function SearchTodo(){
  const { setSearchValue } = React.useContext(AppContext);

  const handleSearch = (event) =>{
    const value = event.target.value;
    setSearchValue(value);
  }

  return(
    <input 
      className='SearchTodo' 
      type='text' 
      placeholder='Search a todo...'
      onChange={handleSearch}
    />
  )
}