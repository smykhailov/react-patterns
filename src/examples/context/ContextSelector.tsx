import React from 'react';
import { createContext, useContextSelector } from 'use-context-selector';

import RenderCounter from '../../components/RenderCounter';

type ContextValue = { foo: number; bar: number };

const Context = createContext<ContextValue>({ foo: 0, bar: 0 });

const Provider: React.FC<{ foo: number; bar: number }> = props => {
  const { foo, bar } = props;

  return (
    <RenderCounter color="blue">
      <Context.Provider value={{ foo, bar }}>
        <div>
          <code>Provider: {JSON.stringify({ foo, bar }, null, 2)}</code>
        </div>
        <div>{props.children}</div>
      </Context.Provider>
    </RenderCounter>
  );
};

const ConsumerFoo: React.FC = React.memo(() => {
  const value = useContextSelector(Context, v => v.foo);

  return (
    <RenderCounter color="green">
      <code>ConsumerFoo: {JSON.stringify(value, null, 2)}</code>
    </RenderCounter>
  );
});

const ConsumerBar: React.FC = React.memo(() => {
  const value = useContextSelector(Context, v => v.bar);

  return (
    <RenderCounter color="red">
      <code>ConsumerBar: {JSON.stringify(value, null, 2)}</code>
    </RenderCounter>
  );
});

export default () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <Provider foo={count} bar={1}>
        <ConsumerFoo />
        <ConsumerBar />
      </Provider>
      <hr style={{ background: 'transparent' }} />
      <button onClick={() => setCount(count + 1)}>Render example</button>
    </>
  );
};
