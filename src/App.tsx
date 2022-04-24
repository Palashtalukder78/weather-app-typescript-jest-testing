import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Country from './components/Country/Country';
function App() {
  return (
    <div className="App" data-testid="app">
      <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/country/:country'>
              <Country></Country>
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
