import React from 'react';
import './App.css';
// import the header tag from Header.js
import Header from './Header';
// import the home tag from Home.js
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
 
function App() {
  return (
    // bem convention
    <Router>
    <div className="app">
      <Switch>
        {/* checkout path  */}
        <Route path='/checkout'>
          <Header />
          <h1>I AM A CHECK OUT PAGE</h1>
        </Route>
        {/* default route always stays at the bottom as that's the last case scenario */}
        {/* a default route when a designated path isn't hit */}
        {/* Home page route */}
        <Route path='/'>
        <Header/>
        <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
