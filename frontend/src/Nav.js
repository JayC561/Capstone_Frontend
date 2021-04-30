import React from 'react';
import ToggleSwitch from './ToggleSwitch';
import darkMap from './images/dark-map.svg';
import lightMap from './images/light-map.svg';
const Nav = ({mode, setMode}) =>{
  const invertedMode = mode === 'dark' ? 'light' : 'dark';
  return(
    <div className = {`top-nav border-top border-bottom border-${invertedMode} navbar navbar-expand-lg navbar-${invertedMode} bg-${mode}`}>
      <h1 className = {`h2 text-${invertedMode}`}>Quaker App</h1>
      <div className = "top-nav__right">
        <ToggleSwitch mode = {mode} setMode = {setMode}/>
        <img src = {lightMap}/>
      </div>
    </div>
  )
}

export default Nav;
