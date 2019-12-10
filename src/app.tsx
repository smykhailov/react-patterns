import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Overview from './components/overview';
import ComponentTypes from './components/component-types';
import Hooks from './components/hooks';
import Context from './components/context';
import Functions from './components/functions';

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
                <Link to="/">Overview</Link>
              </li>
              <li>
                <Link to="/component-types">Component Types</Link>
              </li>
              <li>
                <Link to="/hooks">Hooks</Link>
              </li>
              <li>
                <Link to="/context">Context</Link>
              </li>
              <li>
                <Link to="/functions">Functions</Link>
              </li>
            </ul>
          </aside>
          <main>
            <Switch>
              <Route path="/component-types">
                <ComponentTypes />
              </Route>
              <Route path="/hooks">
                <Hooks />
              </Route>
              <Route path="/context">
                <Context />
              </Route>
              <Route path="/functions">
                <Functions />
              </Route>
              <Route exact path="/">
                <Overview />
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
