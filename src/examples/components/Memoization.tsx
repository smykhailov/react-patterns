import React, { FC } from 'react';
import { useForceValueUpdate } from '../../hooks/useForceUpdate';
import RenderCounter from '../../components/RenderCounter';
import { TProps, TValue } from './common';

export const MemoizedComponent: FC<TProps> = (props) => {
  const [update, value] = useForceValueUpdate(props.changeProps);
  const ctx = useContext();

  const changeInterestedContextValue = () => {
    ctx.imInterestedInThisChange += 1;
  };

  const changeNotInterestedContextValue = () => {
    ctx.imNotInterestedInThisChange += 1;
  };

  return (
    <RenderCounter color="black">
      <p>Container: {value}</p>
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

type ContextValue = {
  imInterestedInThisChange: number;
  imNotInterestedInThisChange: number;
};
const Context = React.createContext<ContextValue>({
  imInterestedInThisChange: 1,
  imNotInterestedInThisChange: 1,
});
const useContext = () => React.useContext(Context);

const ChildFunctionComponentWithContext: FC<TValue> = (props: TValue) => {
  const {
    imInterestedInThisChange,
    imNotInterestedInThisChange,
  } = useContext();

  return (
    <RenderCounter color="blue">
      <p>Child Function Component: {props.value}</p>
      <p>I'm interested in this change: {imInterestedInThisChange}</p>
      <p>
        I'm <strong>not</strong> interested in this change:{' '}
        {imNotInterestedInThisChange}
      </p>
    </RenderCounter>
  );
};

const ChildFunctionComponentMemoizedWithContext: FC<TValue> = React.memo<
  FC<TValue>
>((props: TValue) => {
  const {
    imInterestedInThisChange,
    imNotInterestedInThisChange,
  } = useContext();

  return (
    <RenderCounter color="blue">
      <p>
        Child Function Component <strong>Memoized</strong>: {props.value}
      </p>
      <p>I'm interested in this change: {imInterestedInThisChange}</p>
      <p>
        I'm <strong>not</strong> interested in this change:{' '}
        {imNotInterestedInThisChange}
      </p>
    </RenderCounter>
  );
});
