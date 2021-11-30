import React from 'react';
import RenderCounter from '../../components/RenderCounter';

type ContextValue = number;

const FooContext = React.createContext<ContextValue>(0);
const BarContext = React.createContext<ContextValue>(0);

const Provider: React.FC<{ foo: number; bar: number }> = (props) => {
  const { foo, bar } = props;

  return (
    <RenderCounter color="blue">
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
    <RenderCounter color="green">
      <code>ConsumerFoo: {JSON.stringify(value, null, 2)}</code>
    </RenderCounter>
  );
});

const ConsumerBar: React.FC = React.memo(() => {
  const value = React.useContext(BarContext);

  return (
    <RenderCounter color="red">
      <code>ConsumerBar: {JSON.stringify(value, null, 2)}</code>
    </RenderCounter>
  );
});

const ContextSeparate = () => {
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

export default ContextSeparate;
