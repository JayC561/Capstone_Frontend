import React, {useState} from 'react';
import Table from './Table';
import SideNav from './SideNav';
function App() {
  const baseURL = 'http://localhost:3001/api/quakes/';
  const [link, setLink] = useState(baseURL);
  return (
    <main>
      <SideNav link = {baseURL} setLink = {setLink}/>
      <Table link = {link}/>
    </main>
  );
}

export default App;
