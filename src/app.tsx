import React from 'react';
import { hashHistory as Router, Switch, Route, Link } from 'react-router-dom';

import ComponentTypes from './components/component-types';
import Hooks from './components/hooks';
import Functions from './components/functions';
// @ts-ignore
import Overview from './pages/Overview.mdx';
// @ts-ignore
import Context from './pages/Context.mdx';

const App: React.FC = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
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
            <React.Suspense fallback={<div>Loading...</div>}>
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
            </React.Suspense>
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
