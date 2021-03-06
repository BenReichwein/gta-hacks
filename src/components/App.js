import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history'
import Header from './Header';
import CovidTracker from './pages/CovidTracker'
import TimeCapsule from './pages/TimeCapsule'
import News from './pages/News'

const App = () => {
  return (
    <div style={{fontFamily: 'Aleo'}}>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={CovidTracker} />
            <Route path="/timecapsule" exact component={TimeCapsule} />
            <Route path="/news" exact component={News} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;