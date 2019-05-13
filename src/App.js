import React from 'react';
import './App.scss';

import Sidebar from './components/Sidebar'
import Background from './components/Background'
import Feature from './components/Feature'

class App extends React.Component {
  // componentDidMount() {
  //   document.addEventListener('keydown', event => {
  //     // console.log(event.keyCode)
  //     console.log(document.activeElement)
  //   })
  // }

  render() {
    return (
      <div className="App">
        <Sidebar />
        <Background />
        <Feature />
      </div>
    );
  }
}


export default App;
