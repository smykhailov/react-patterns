import React from 'react';

import RenderCounter from '../../components/RenderCounter';
import { useForceUpdate } from '../../hooks/useForceUpdate';

const SampleComponent: React.FC<{ onNoop: Function }> = () => {
  return <RenderCounter color="red">A usual component</RenderCounter>;
};

const MemoComponent = React.memo<{ onNoop: Function }>(() => {
  return (
    <RenderCounter color="green">
      A component wrapped with <code>React.memo()</code>
    </RenderCounter>
  );
});

const UselessUseCallback = () => {
  const memoizedCallback = React.useCallback(() => {}, []);
  const update = useForceUpdate();

  return (
    <>
      <SampleComponent onNoop={memoizedCallback} />
      <MemoComponent onNoop={memoizedCallback} />

      <hr style={{ background: 'transparent' }} />
      <button onClick={update}>Render example</button>
    </>
  );
};

export default UselessUseCallback;
