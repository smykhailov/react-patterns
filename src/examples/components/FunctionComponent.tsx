import React from 'react';
import { useForceValueUpdate } from '../../hooks/useForceUpdate';
import RenderCounter from '../../components/RenderCounter';
import {
  ChildFunctionComponent,
  ChildFunctionComponentMemoized
} from './ChildComponents';
import { TProps } from './common';

export default (props: TProps) => {
  const [update, value] = useForceValueUpdate(props.changeProps);

  return (
    <RenderCounter color="black">
      <p>Container</p>
      {props.isMemoized ? (
        <ChildFunctionComponentMemoized value={value} />
      ) : (
        <ChildFunctionComponent value={value} />
      )}
      <hr style={{ background: 'transparent' }} />
      <button onClick={update}>Render example</button>
    </RenderCounter>
  );
};
