import React, { useState, useEffect } from 'react';

import './styles.css';

function DevForm({ handleAddDev }) {
  const [github_username, setGithub_username] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);

      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    )

  }, [])

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      github_username,
      techs,
      latitude,
      longitude
    }

    await handleAddDev(data);

    setGithub_username('');
    setTechs('');
  }

  return (
    <form onSubmit={handleSubmit}>

      <div className="input-block">
        <label htmlFor="github_username">Usuário</label>
        <input
          name="github_username"
          id="github_username"
          required
          value={github_username}
          onChange={e => setGithub_username(e.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input
          name="techs"
          id="techs"
          required
          value={techs}
          onChange={e => setTechs(e.target.value)}
        />
      </div>

      <div className="input-group">

        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input
            name="latitude"
            id="latitude"
            required
            onChange={e => setLatitude(e.target.value)}
            value={latitude}
          />
        </div>

        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            name="longitude"
            id="longitude"
            required
            onChange={e => setLongitude(e.target.value)}
            value={longitude}
          />
        </div>

      </div>

      <button type="submit">Salvar</button>

    </form>
  )
}

export default DevForm;