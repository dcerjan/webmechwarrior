import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import './App.css'

import DashContainer from './pages/Dash/DashContainer'
import { ConnectedMechDesigner } from './pages/MechDesigner/MechDesignerContainer'
import { store } from './state/store'

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='App'>
            <div>
              <Link to='/'>Dash</Link>
              <Link to='/MechDesigner'>MechDesigner</Link>
            </div>
            <Switch>
              <Route exact path='/' component={DashContainer} />
              <Route path='/MechDesigner' component={ConnectedMechDesigner} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
