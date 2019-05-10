import React from 'react';
import './App.scss';

import Sidebar from './components/Sidebar'
import Background from './components/Background'
import Feature from './components/Feature'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Background />
      <Feature />
    </div>
  );
}

export default App;
