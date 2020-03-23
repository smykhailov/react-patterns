import React, { useEffect, FC, useState } from 'react';
import { sleep } from '../../core/utils';
import RenderCounter from '../../components/RenderCounter';

type TData = { updatedData: string };

const UseEffectAsync: FC<TData> = (props: TData) => {
  let [data, setData] = useState('initial data');

  useEffect(() => {
    const asyncOp = async () => {
      await sleep(10 * 1000);

      setData(props.updatedData);
    };
    asyncOp();
  }, [props.updatedData]);

  return (
    <RenderCounter color="red">
      <div>{data}</div>
    </RenderCounter>
  );
};

const UseEffectAsyncWithCleanup: FC<TData> = (props: TData) => {
  let [data, setData] = useState('initial data');

  useEffect(() => {
    let cancel = false;
    const asyncOp = async () => {
      await sleep(10 * 1000);

      if (cancel) {
        return;
      }

      setData(props.updatedData);
    };

    asyncOp();

    return () => {
      cancel = true;
    };
  }, [props.updatedData]);

  return (
    <RenderCounter color="green">
      <div>{data}</div>
    </RenderCounter>
  );
};

export const UseEffectAsyncExample: FC = () => {
  let [counter, setCounter] = useState(1);
  const [data, setData] = useState('updated data');

  return (
    <RenderCounter color="black">
      <UseEffectAsync updatedData={data} />

      <button
        onClick={() => {
          setCounter(counter++);
          setData(`updated data ${counter}`);
        }}
      >
        Re-render component
      </button>
    </RenderCounter>
  );
};

export const UseEffectAsyncWithCleanupExample: FC = () => {
  let [counter, setCounter] = useState(1);
  const [data, setData] = useState('updated data');

  return (
    <RenderCounter color="black">
      <UseEffectAsyncWithCleanup updatedData={data} />

      <button
        onClick={() => {
          setCounter(counter++);
          setData(`updated data ${counter}`);
        }}
      >
        Re-render component
      </button>
    </RenderCounter>
  );
};
