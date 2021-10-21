import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'mobx-react'
import Store from './stores/Store'
import routes from './routes'
import Topbar from './views/Topbar/Topbar'
import './styles/App.css'

const store = new Store()
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <>
            <Topbar />
            <div className="container">
              <Switch>
                {routes.map((route, i) => (
                  <Route key={i} {...route} />
                ))}
              </Switch>
            </div>
          </>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
