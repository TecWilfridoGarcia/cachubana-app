import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import store from './store';
// import logo from '../public/logo.png';
//components
import Dashboard from './components/Dashboard';
import Warehouse from './components/Warehouse';
import NotFoundPage from './components/NotFoundPage';
import OrderDetail from './components/OrderDetail';


class App extends Component  {
  render() {
    return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <NavLink to="/" className="navbar-brand" activeClassName="active" exact={true}>Frubana</NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarsExampleDefault"
                aria-controls="navbarsExampleDefault"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link" activeClassName="active" exact={true}>Dashboard</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/bodega" className="nav-link" activeClassName="active" exact={true}>Bodega</NavLink>
                  </li>
                </ul>
              </div>
            </nav>
            <main role="main">
              <Switch>
                <Route path="/" component={Dashboard} exact={true}></Route>
                <Route path="/bodega" component={Warehouse} exact={true}></Route>
                <Route path="/orders/:orderId" component={OrderDetail} exact={true}></Route>
                <Route component={NotFoundPage}></Route>
              </Switch>
            </main>
        </div>
      </BrowserRouter>
    </Provider>
    
  )}
}

export default App;
