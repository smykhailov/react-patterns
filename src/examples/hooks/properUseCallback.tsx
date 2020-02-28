import React from 'react';

import RenderCounter from '../../components/RenderCounter';
import { useForceUpdate } from '../../hooks/useForceUpdate';

const MemoComponent = React.memo<{
  color: string;
  onNoop: Function;
  memoized: boolean;
}>(props => {
  return (
    <RenderCounter color={props.color}>
      A component wrapped with <code>React.memo()</code> with{' '}
      {props.memoized ? 'memoized' : 'not memoized'} callback.
    </RenderCounter>
  );
});

export default () => {
  const memoizedCallback = React.useCallback(() => {}, []);
  const update = useForceUpdate();

  return (
    <>
      <MemoComponent color="green" onNoop={memoizedCallback} memoized />
      <MemoComponent color="red" onNoop={() => {}} memoized={false} />

      <hr style={{ background: 'transparent' }} />
      <button onClick={update}>Render example</button>
    </>
  );
};
