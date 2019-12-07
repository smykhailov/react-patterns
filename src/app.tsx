import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/home';
import SpreadProperties from './components/spread-props';

const App: React.FC = () => {
  return (
    <Router>
      <div className="wrapper">
        <header>
          <h1>React Patterns</h1>
        </header>
        <div className="main">
          <aside>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/spread-props">Spread Props</Link>
              </li>
            </ul>
          </aside>
          <main>
            <Switch>
              <Route path="/spread-props">
                <SpreadProperties />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </main>
        </div>
        <footer>
          &copy; 2019, Sergii Mykhailov. <Link to="/">React Patterns</Link>
        </footer>
      </div>
    </Router>
  );
};

export default App;
