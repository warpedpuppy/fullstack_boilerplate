import React from 'react';
import './App.css';
import Home from './pages/Home';
import Page2 from './pages/Page2';
import NotFound from './pages/NotFound';
import Menu from './components/Menu';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header><Menu /></header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/page2" component={Page2} />
          <Route component={NotFound} />
        </Switch>
      <footer>this is the footer</footer>
    </div>
  );
}

export default App;
