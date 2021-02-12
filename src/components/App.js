import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history'
import Header from './Header';
import CovidTracker from './pages/CovidTracker'

const App = () => {
  return (
    <div style={{fontFamily: 'Aleo'}}>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={CovidTracker} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;