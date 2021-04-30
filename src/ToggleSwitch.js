import React from 'react';

const ToggleSwitch = ({mode, setMode}) =>{
  const invertedMode = mode === 'dark' ? 'light' : 'dark';
  const title = invertedMode[0].toUpperCase() + invertedMode.slice(1,invertedMode.length);

  const handleClick = (event) =>{
    if(mode === 'dark'){
      setMode('light');
    }
    else{
      setMode('dark');
    }
  }
  return(
    <button type="button" onClick = {handleClick} className={`btn btn-${invertedMode}`}>{title}</button>
  )
}

export default ToggleSwitch;
