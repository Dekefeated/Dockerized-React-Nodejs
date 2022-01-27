import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [apiData, setApiData] = useState('');

  async function fetchData() {
    const response = await axios.get('/api/data');
    console.log(response);
    setApiData(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Create React App</h1>
      <p>This is data from the server: {apiData}</p>
    </div>
  );
}

export default App;
