import React from 'react';
import ToggleSwtich from './ToggleSwitch';

const SideNav = ({link, setLink, mode, setMode}) =>{
  const invertedMode = mode === "dark" ? "light" : "dark";
  const handleClick = (event) =>{
    const mag = event.target.value;
    setLink(`${link}${mag}`);
  }

  const reset = () =>{
    const options = document.getElementsByName('options');
    options.forEach((radioButton) =>{
      radioButton.checked = false;
    });
    setLink(link);
  }
  return(
    <div>
      <ToggleSwtich mode = {mode} setMode = {setMode}/>
      <nav className = "nav-wrapper">
        <h1 className={`h4 text-${invertedMode}`} style={{textAlign: "center"}}>Filter through magnitude</h1>
        <div className={`form-check text-${invertedMode}`} >
          <input className="form-check-input" type="radio" name="options" id="flexRadioDefault1" value="1.0" onClick = {handleClick}/>
          <label className={`form-check-label text-${invertedMode}`}>
            Magnitude 1.0
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="options" id="flexRadioDefault2" value="2.5" onClick = {handleClick}/>
          <label className={`form-check-label text-${invertedMode}`}>
            Magnitude 2.5
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="options" id="flexRadioDefault2" value="4.5" onClick = {handleClick}/>
          <label className={`form-check-label text-${invertedMode}`}>
            Magnitude 4.5
          </label>
        </div>
        <button className={`btn btn-${invertedMode}`} type="button" style = {{transform: 'scale(0.7)'}} onClick = {reset}>Reset</button>
      </nav>
    </div>
  )
}

export default SideNav;
