import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Overview from './pages/Overview.mdx';
import Components from './pages/Components.mdx';
import ClassComponent from './pages/ClassComponent.mdx';
import PureComponent from './pages/PureComponent.mdx';
import FunctionComponent from './pages/FunctionComponent.mdx';
import MethodComponent from './pages/MethodComponent.mdx';
import Hooks from './pages/Hooks.mdx';
import UseCallbackHook from './pages/UseCallback.mdx';
import UseEffectHook from './pages/UseEffect.mdx';
import UseStateHook from './pages/UseState.mdx';
import Context from './pages/Context.mdx';
import Immutability from './pages/Immutability.mdx';
import Links from './pages/Links.mdx';
import GenericHookGuides from './pages/GenericHookGuides.mdx';
import HooksRenderProps from './pages/HooksRenderProps.mdx';
import Memoization from './pages/Memoization.mdx';
import ReactMemo from './pages/ReactMemo.mdx';

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
                <ul>
                  <li>
                    <Link to="/generic-hook-guides">Generic Guide</Link>
                  </li>
                  <li>
                    <Link to="/hook-use-state">useState</Link>
                  </li>
                  <li>
                    <Link to="/hook-use-callback">useCallback</Link>
                  </li>
                  <li>
                    <Link to="/hook-use-effect">useEffect</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/memoization">Memoization</Link>
                <ul>
                  <li>
                    <Link to="/react-memo">React.memo()</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/hooks-render-props">React hooks + RenderProps</Link>
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
              <Routes>
                <Route path="/components" element={<Components />} />
                <Route path="/class-component" element={<ClassComponent />} />
                <Route path="/pure-component" element={<PureComponent />} />
                <Route
                  path="/function-component"
                  element={<FunctionComponent />}
                />
                <Route path="/method-component" element={<MethodComponent />} />
                <Route path="/hooks" element={<Hooks />} />
                <Route
                  path="/generic-hook-guides"
                  element={<GenericHookGuides />}
                />
                <Route path="/hook-use-state" element={<UseStateHook />} />
                <Route
                  path="/hook-use-callback"
                  element={<UseCallbackHook />}
                />
                <Route path="/hook-use-effect" element={<UseEffectHook />} />

                <Route path="/memoization" element={<Memoization />} />
                <Route path="/react-memo" element={<ReactMemo />} />

                <Route
                  path="/hooks-render-props"
                  element={<HooksRenderProps />}
                />
                <Route path="/context" element={<Context />} />
                <Route path="/immutability" element={<Immutability />} />
                <Route path="/links" element={<Links />} />
                <Route path="/" element={<Overview />} />
              </Routes>
            </React.Suspense>
          </main>
        </div>
        <footer>
          <div className="git-hub">
            <a href="https://github.com/smykhailov/react-patterns">
              <img src="GitHub-Mark-32px.png" alt="GitHub Logo" />
            </a>
          </div>
          <div className="copyright">
            <a href="https://github.com/smykhailov/react-patterns">
              React Patterns
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
