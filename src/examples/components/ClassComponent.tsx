import React, { FC } from 'react';
import {
  useForceValueUpdate,
  useForceObjectValueUpdate
} from '../../hooks/useForceUpdate';
import RenderCounter from '../../components/RenderCounter';
import {
  ChildClassComponent,
  ChildClassComponentMemoized,
  ChildClassComponentWithObjectPropsMemoized,
  ChildClassComponentWithObjectProps
} from './ChildComponents';
import { TProps } from './common';

export const PlainPropsClassComponent: FC<TProps> = (props: TProps) => {
  const [update, value] = useForceValueUpdate(props.changeProps);

  return (
    <RenderCounter color="black">
      <p>Container</p>
      {props.isMemoized ? (
        <ChildClassComponentMemoized value={value} />
      ) : (
        <ChildClassComponent value={value} />
      )}
      <hr style={{ background: 'transparent' }} />
      <button onClick={update}>Render example</button>
    </RenderCounter>
  );
};

export const ObjectPropsClassComponent: FC<TProps> = (props: TProps) => {
  const [update, value] = useForceObjectValueUpdate(props.changeProps);

  return (
    <RenderCounter color="black">
      <p>Container</p>
      {props.isMemoized ? (
        <ChildClassComponentWithObjectPropsMemoized obj={value} />
      ) : (
        <ChildClassComponentWithObjectProps obj={value} />
      )}
      <hr style={{ background: 'transparent' }} />
      <button onClick={update}>Render example</button>
    </RenderCounter>
  );
};
