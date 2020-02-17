import React from 'react';

import RenderCounter from '../../components/RenderCounter';
import { useForceUpdate } from '../../hooks/useForceUpdate';

type ContextValue = { value: number };
const Context = React.createContext<ContextValue>({ value: 1 });

const Provider: React.FC = props => {
  const value = React.useMemo(() => ({ value: 1 }), []);
  return (
    <RenderCounter color="blue">
      <Context.Provider value={value}>
        <div>
          <code>Provider: {JSON.stringify(value, null, 2)}</code>
        </div>
        <div>{props.children}</div>
      </Context.Provider>
    </RenderCounter>
  );
};

const Consumer: React.FC = React.memo(() => {
  const value = React.useContext(Context);

  return (
    <RenderCounter color="green">
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
