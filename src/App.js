 
import React from 'react';
import './App.css';
import './Pages/Homepage.css'
import DataContex from './Components/DataContex';
import RoutePages from './Pages/RoutePages';




function App() {

  return (
    <> 
      <DataContex>

        <RoutePages />

      </DataContex>
    </>
  );
}

export default App;
