import React, { useEffect, FC, useState } from 'react';
import { sleep } from '../../core/utils';
import RenderCounter from '../../components/RenderCounter';

export const UseEffectAsyncExample: FC = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    const asyncOp = async () => {
      await sleep(5 * 1000);

      setCount(count++);
    };
    asyncOp();
  }, [count]);

  return (
    <RenderCounter color="black">
      <div>Hello: {count}</div>
    </RenderCounter>
  );
};

export const UseEffectAsyncWithCleanupExample: FC = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    let cancel = false;
    const asyncOp = async () => {
      await sleep(20 * 1000);

      if (cancel) {
        return;
      }

      setCount(count++);
    };

    asyncOp();

    return () => {
      cancel = true;
    };
  }, [count]);

  return (
    <RenderCounter color="black">
      <div>Hello: {count}</div>
    </RenderCounter>
  );
};
