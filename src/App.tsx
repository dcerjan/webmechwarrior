import * as React from 'react';
import './App.css';

import { VehicleBay } from './pages/VehicleBay'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <VehicleBay />
      </div>
    );
  }
}

export default App;
