import React from 'react';
import '../styles/ListDays.css';
import { AppContext } from './AppContext';

export function ListDays (){
  const { setNameCache } = React.useContext(AppContext);

  const daySelect = (id, version) => {
    document.querySelector('.active').classList.remove('active');
    const day = document.getElementById(id);
    day.classList.add('active');
  
    setNameCache(version);
  }

  return(
    <div className="ListDays">
      <ul className="ListDays__list">
        <li 
        className='active'
        id='dayOne'
        onClick={() => daySelect('dayOne', 'TODAY_V1')}
        >
          Today
        </li>
        <li 
        id='dayTwo'
        onClick={() => daySelect('dayTwo', 'TOMORROW_V1')}
        >
          Tomorrow
        </li>
        <li 
        id='dayThree'
        onClick={() => daySelect('dayThree', 'DAY3_V1')}
        >
          Day Three
        </li>
        <li 
        id='dayFour'
        onClick={() => daySelect('dayFour', 'DAY4_V1')}
        >
          Day Four
        </li>
        <li 
        id='dayFive'
        onClick={() => daySelect('dayFive', 'DAY5_V1')}
        >
          Day Five
        </li>
        <li 
        id='daySix'
        onClick={() => daySelect('daySix', 'DAY6_V1')}
        >
          Day Six
        </li>
        <li 
        id='daySeven'
        onClick={() => daySelect('daySeven', 'DAY7_V1')}
        >
          Day Seven
        </li>
      </ul>
    </div>
  );
}