import React from 'react';
import './App.scss';

import Sidebar from './components/Sidebar'
import Background from './components/Background'
import Feature from './components/Feature'

import store from './redux/store';
import { Provider } from 'react-redux';
import { highlightNavigation, sidebarNavigation, featureNavigation } from './redux/AppReducer';

class App extends React.Component {
  componentDidMount() {
    sidebarNavigation()
    highlightNavigation()
    featureNavigation()
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Sidebar />
          <Background />
          <Feature />
        </div>
      </Provider>
    );
  }
}


export default App;
