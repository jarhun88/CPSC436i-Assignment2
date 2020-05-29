import React from 'react';
import './App.css';
import Header from './header';
import HomePage from './HomePage';
import About from './About'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} /> 
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;