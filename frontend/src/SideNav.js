import React from 'react';

const SideNav = ({link, setLink}) =>{
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
      <nav className = "nav-wrapper">
        <h1 className="h4" style={{textAlign: "center"}}>Filter through magnitude</h1>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="options" id="flexRadioDefault1" value="1.0" onClick = {handleClick}/>
          <label className="form-check-label" for="flexRadioDefault1">
            Magnitude 1.0
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="options" id="flexRadioDefault2" value="2.5" onClick = {handleClick}/>
          <label className="form-check-label" for="flexRadioDefault2">
            Magnitude 2.5
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="options" id="flexRadioDefault2" value="4.5" onClick = {handleClick}/>
          <label className="form-check-label" for="flexRadioDefault2">
            Magnitude 4.5
          </label>
        </div>
        <button class="btn btn-primary" type="button" style = {{transform: 'scale(0.7)'}} onClick = {reset}>Reset</button>
      </nav>
    </div>
  )
}

export default SideNav;
