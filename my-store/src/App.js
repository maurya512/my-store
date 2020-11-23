import React from 'react';
import './App.css';
// import the header tag from Header.js
import Header from './Header';
// import the home tag from Home.js
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
    // bem convention
    <Router>
    <div className="app">
      {/* header always gets rendered */}
      <Header />
      <Switch>
        {/* checkout path  */}
        <Route path='/checkout'>
          {/* checkout component */}
          <Checkout />
        </Route>
        {/* default route always stays at the bottom as that's the last case scenario */}
        {/* a default route when a designated path isn't hit */}
        {/* Home page route */}
        <Route path='/'>
        <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
