import React, {useState, useEffect} from 'react';
import Table from './Table';
import SideNav from './SideNav';
import Map from './Map';
function App() {
  const baseURL = 'http://localhost:3001/api/quakes/';
  const [link, setLink] = useState(baseURL);
  const [mode, setMode] = useState('light');
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
    document.body.className = `bg-${mode}`;
  }, [mode])
  return (
    <>
      <main>
        <SideNav link = {baseURL} setLink = {setLink} mode = {mode} setMode = {setMode}/>
        <Table link = {link} mode = {mode}/>
      </main>
      <section>
      <Map/>
      </section>
    </>
  );
}

export default App;
