import React from 'react';

import RenderCounter from '../components/RenderCounter';
import useForceUpdate from '../hooks/useForceUpdate';

type ContextValue =  number;

const FooContext = React.createContext<ContextValue>(0);
const BarContext = React.createContext<ContextValue>(0);

const Provider: React.FC = props => {
  const fooValue = 1
  const barValue = 2

  return (
    <RenderCounter color="blue" style={{ width: '70%' }}>
      <FooContext.Provider value={fooValue}>
        <BarContext.Provider value={barValue}>
        <div>
          <code>Provider: {JSON.stringify(fooValue, null, 2)}</code>
        </div>
        <div>{props.children}</div>
        </BarContext.Provider>
      </FooContext.Provider>
    </RenderCounter>
  );
};

const Consumer: React.FC = React.memo(() => {
  const value = React.useContext(FooContext);

  return (
    <RenderCounter color="green" style={{ width: '70%' }}>
      <code>Consumer: {JSON.stringify(value, null, 2)}</code>
    </RenderCounter>
  );
});

export default () => {
  const update = useForceUpdate();

  return (
    <>
      <Provider>
        <Consumer />
      </Provider>
      <hr style={{ background: 'transparent' }} />
      <button onClick={update}>Render example</button>
    </>
  );
};
