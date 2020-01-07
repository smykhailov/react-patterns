import React from 'react';
import RenderCounter from '../components/RenderCounter';

type ContextValue = number;

const FooContext = React.createContext<ContextValue>(0);
const BarContext = React.createContext<ContextValue>(0);

const Provider: React.FC<{ foo: number, bar: number }> = props => {
  const { foo, bar } = props;

  return (
    <RenderCounter color="blue" style={{ width: '70%' }}>
      <FooContext.Provider value={foo}>
        <BarContext.Provider value={bar}>
          <div>
            <code>Provider: {JSON.stringify({ foo, bar }, null, 2)}</code>
          </div>
          <div>{props.children}</div>
        </BarContext.Provider>
      </FooContext.Provider>
    </RenderCounter>
  );
};

const ConsumerFoo: React.FC = React.memo(() => {
  const value = React.useContext(FooContext);

  return (
    <RenderCounter color="green" style={{ width: '70%' }}>
      <code>ConsumerFoo: {JSON.stringify(value, null, 2)}</code>
    </RenderCounter>
  );
});

const ConsumerBar: React.FC = React.memo(() => {
  const value = React.useContext(BarContext);

  return (
    <RenderCounter color="red" style={{ width: '70%' }}>
      <code>ConsumerBar: {JSON.stringify(value, null, 2)}</code>
    </RenderCounter>
  );
});

export default () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <Provider foo={count} bar={1}>
        <ConsumerFoo/>
        <ConsumerBar/>
      </Provider>
      <hr style={{ background: 'transparent' }}/>
      <button onClick={() => setCount(count + 1)}>Render example</button>
    </>
  );
};
