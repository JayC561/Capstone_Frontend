import React, {useEffect, useState} from 'react';
import axios from 'axios';
import TableBody from './TableBody';
import Loader from 'react-loader-spinner';

const isEmpty = (obj) =>{
  return Object.keys(obj).length === 0;
}

const containsNext = (json) =>{
  if(json.next){
    return true;
  }
  return false;
}

const containsPrev = (json) =>{
  if(json.previous){
    return true;
  }
  return false;
}

const Table = ({link, mode}) =>{
  const invertedMode = mode === 'dark' ? 'light' : 'dark';
  const [quakes, setQuakes] = useState({});
  const [page, setPage] = useState(1);
  useEffect(() =>{
    axios.get(link)
      .then(res =>{
        const json = res.data;
        setQuakes(json);
      })
  }, [link])

  const handleClick = (page) =>{
    setPage(page);
    setQuakes({});
    axios.get(`${link}?page=${page}`)
      .then(res =>{
        const json = res.data;
        setQuakes(json);
      })
  }

  return(
    <div>
    {
      isEmpty(quakes) ?
        <Loader type="Oval" color="#00BFFF" height={80} width={80} />
      :
      <div className="container">
        <h2 className = {`text-${invertedMode}`}>Earthquake Details</h2>
        <p className = {`text-${invertedMode}`}>Following are the recent data about the earthquake happened all around the globe</p>
        <table className={`table table-striped table-${mode}`}>
          <thead className={`thead-${invertedMode}`}>
            <tr>
             <th >#</th>
              <th>Place</th>
              <th>Magnitude</th>
              <th>Time</th>
              <th>No of people feeled</th>
            </tr>
          </thead>
          <tbody>
            <TableBody quakes = {quakes} mode = {mode}/>
          </tbody>
        </table>
        <div className = "buttons">
          <button className={`btn btn-${invertedMode}`} type="button" disabled = {!containsPrev(quakes)} onClick = {() => {handleClick(page - 1)}}>&#8249;</button>
          <button className={`btn btn-${invertedMode}`} type="button" disabled = {!containsNext(quakes)} onClick = {() => {handleClick(page + 1)}}>&#8250;</button>
        </div>
      </div>
    }
    </div>
  )
}

export default Table;
