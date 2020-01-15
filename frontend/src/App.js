import React, { useEffect, useState } from 'react';
import api from './services/api';

import DevForm from './components/DevForm'
import DevItem from './components/DevItem'

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [devs, setDevs] = useState([]);
 
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
  
      setDevs(response.data);
    }

    loadDevs();
  }, [])

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data])
  }

  return (

    <div id="app">

      <aside>

        <strong>Cadastrar</strong>
        <DevForm handleAddDev={handleAddDev} />
        
      </aside>

      <main>

        <ul>

          { devs.map(dev => (
            <DevItem dev={dev} />
          ))}

        </ul>

      </main>

    </div>
  );
}

export default App;
