import React, { FC } from 'react';
import { useForceValueUpdate } from '../../hooks/useForceUpdate';
import RenderCounter from '../../components/RenderCounter';
import { TProps, TValue } from './common';

export const MemoizedComponent: FC<TProps> = (props) => {
  return (
    <Context.Provider value={new ContextValue(1, 1)}>
      <MemoizedComponentInner {...props} />
    </Context.Provider>
  );
};

const MemoizedComponentInner: FC<TProps> = (props) => {
  const [update, value] = useForceValueUpdate(props.changeProps);
  const ctx = useContext();

  const changeInterestedContextValue = () => {
    ctx.setImInterestedValue((ctx.imInterestedInThisChange += 1));
    update();
  };

  const changeNotInterestedContextValue = () => {
    ctx.setImNotInterestedValue((ctx.imNotInterestedInThisChange += 1));
    update();
  };

  return (
    <RenderCounter color="black">
      <p>Container: {value}</p>
      <p>
        Child component <strong>is not</strong> interested in this change and
        shouldn't re-render: {ctx.imNotInterestedInThisChange}
      </p>
      {props.isMemoized ? (
        <ChildFunctionComponentMemoizedWithContext value={value} />
      ) : (
        <ChildFunctionComponentWithContext value={value} />
      )}
      <hr style={{ background: 'transparent' }} />
      <button onClick={update}>Render example</button>
      <button onClick={changeInterestedContextValue}>
        Change interested context value
      </button>
      <button onClick={changeNotInterestedContextValue}>
        Change not interested context value
      </button>
    </RenderCounter>
  );
};

interface IContextValue {
  imInterestedInThisChange: number;
  imNotInterestedInThisChange: number;

  setImInterestedValue: (newValue: number) => void;
  setImNotInterestedValue: (newValue: number) => void;
}

class ContextValue implements IContextValue {
  constructor(
    public imInterestedInThisChange: number,
    public imNotInterestedInThisChange: number
  ) {}

  setImInterestedValue = (newValue: number) => {
    this.imInterestedInThisChange = newValue;
  };

  setImNotInterestedValue = (newValue: number) => {
    this.imNotInterestedInThisChange = newValue;
  };
}

const Context = React.createContext<IContextValue>({} as IContextValue);

const useContext = () => React.useContext(Context);

const ChildFunctionComponentWithContext: FC<TValue> = (props: TValue) => {
  const { imInterestedInThisChange } = useContext();

  return (
    <RenderCounter color="blue">
      <p>Child Function Component: {props.value}</p>
      <p>I'm interested in this change: {imInterestedInThisChange}</p>
    </RenderCounter>
  );
};

const ChildFunctionComponentMemoizedWithContext: FC<TValue> = React.memo<
  FC<TValue>
>((props: TValue) => {
  const { imInterestedInThisChange } = useContext();

  return (
    <RenderCounter color="blue">
      <p>
        Child Function Component <strong>Memoized</strong>: {props.value}
      </p>
      <p>I'm interested in this change: {imInterestedInThisChange}</p>
    </RenderCounter>
  );
});
