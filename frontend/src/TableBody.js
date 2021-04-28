import React from 'react';

const isEmpty = (obj) =>{
  return Object.keys(obj).length === 0;
}

const parseDate = (date) =>{
  return new Date(date).toString();
}

const TableBody = ({quakes, mode}) =>{
  const invertedMode = mode === 'dark' ? 'light' : 'dark';
  if(!isEmpty(quakes)){
    return(
      quakes.result.map((quake, index) =>{
        return(
          <tr key = {index}>
            <th>{index + 1}</th>
            <td><a className = {`text-${invertedMode}`} href = {quake.properties.url} target = "_blank">{quake.properties.place}</a></td>
            <td>{quake.properties.mag}</td>
            <td>{parseDate(quake.properties.time)}</td>
            <td>{quake.properties.felt === null ? 0 : quake.properties.felt}</td>
          </tr>
        )
      })
    )
  }
  else{
    return null;
  }
}

export default TableBody;
