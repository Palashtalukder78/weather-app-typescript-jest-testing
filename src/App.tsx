import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home';
import Country from './components/Country/Country';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div className="App" data-testid="app-component-test-id">
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/country/:country'>
              <Country></Country>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
    </div>
  );
}

export default App;
