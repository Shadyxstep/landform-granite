import React from 'react';
import './App.css';
import { BrowserRouter as Router,
  Switch,
  Route,
  Redirect } from 'react-router-dom';

import Home from './pages';
import ThankYou from './components/ThankYou';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/landform-granite/" component={Home}/>
        <Route path="/thankyou" component={ThankYou}/>
        <Redirect to="/landform-granite/" />
      </Switch>
    </Router>
  );
};

export default App;
