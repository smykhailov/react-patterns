import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Overview from './pages/Overview.mdx';
import Components from './pages/Components.mdx';
import ClassComponent from './pages/ClassComponent.mdx';
import PureComponent from './pages/PureComponent.mdx';
import FunctionComponent from './pages/FunctionComponent.mdx';
import MethodComponent from './pages/MethodComponent.mdx';
import Hooks from './pages/Hooks.mdx';
import Context from './pages/Context.mdx';
import Immutability from './pages/Immutability.mdx';
import Links from './pages/Links.mdx';

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
                <Link to="/components">Components</Link>
                <ul>
                  <li>
                    <Link to="/class-component">Class Component</Link>
                  </li>
                  <li>
                    <Link to="/pure-component">Pure Component</Link>
                  </li>
                  <li>
                    <Link to="/function-component">Function Component</Link>
                  </li>
                  <li>
                    <Link to="/method-component">Method Component</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/hooks">Hooks</Link>
              </li>
              <li>
                <Link to="/context">Context</Link>
              </li>
              <li>
                <Link to="/immutability">Immutability</Link>
              </li>
              <li>
                <Link to="/links">Links</Link>
              </li>
            </ul>
          </aside>
          <main>
            <React.Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/components" component={Components} />
                <Route path="/class-component" component={ClassComponent} />
                <Route path="/pure-component" component={PureComponent} />
                <Route
                  path="/function-component"
                  component={FunctionComponent}
                />
                <Route path="/method-component" component={MethodComponent} />
                <Route path="/hooks" component={Hooks} />
                <Route path="/context" component={Context} />
                <Route path="/immutability" component={Immutability} />
                <Route path="/links" component={Links} />
                <Route exact path="/" component={Overview} />
              </Switch>
            </React.Suspense>
          </main>
        </div>
        <footer>
          <div className="copyright">
            &copy; 2019, Sergii Mykhailov. <Link to="/">React Patterns</Link>
          </div>
          <div className="git-hub">
            <a href="https://github.com/smykhailov/react-patterns">
              <img src="GitHub-Mark-32px.png" alt="GitHub Logo" />
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
