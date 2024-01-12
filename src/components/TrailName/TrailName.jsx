import React, { useState, useEffect } from 'react';

const TrailName = () => {
  const [trailName, setTrailName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users/3');
        const data = await response.json();

        if (data.data && data.data.email) {
          setTrailName(data.data.email);
        }

      } catch (error) {
        console.error('Erro ao buscar dados da API', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <p>{trailName}</p>
    </div>
  );
}

export default TrailName;
