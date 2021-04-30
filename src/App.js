import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import Table from './Table';
import SideNav from './SideNav';
import Map from './Map';
import Nav from './Nav';
function App() {
  const baseURL = 'https://fuchsia-economic-raclette.glitch.me/api/quakes';
  const [link, setLink] = useState(baseURL);
  const [mode, setMode] = useState('light');
  const [quakes, setQuakes] = useState({});
  const isEmpty = (obj) =>{
    return Object.keys(obj).length === 0;
  }

  useEffect(() =>{
    let mql = window.matchMedia('(prefers-color-scheme: dark)');
    if(mql.matches){
      setMode('dark');
    }
    else{
      setMode('light');
    }
  },[])

  useEffect(() =>{
    axios.get(link)
      .then(res =>{
        const json = res.data;
        setQuakes(json);
      })
  }, [link])

  useEffect(() =>{
    document.body.className = `bg-${mode}`;
  }, [mode])
  return (
    <>
      {
        isEmpty(quakes) ?
          <Loader type="Oval" color="#00BFFF" height={80} width={80} />
        :
        <>
          <Nav mode = {mode} setMode = {setMode}/>
          <main>
            <SideNav link = {baseURL} setLink = {setLink} mode = {mode}/>
            <Table link = {link} mode = {mode} setQuakes = {setQuakes} quakes = {quakes}/>
          </main>
          <section>
            <Map quakes = {quakes}/>
          </section>
        </>
      }
    </>
  );
}

export default App;
