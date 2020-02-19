import React, { FC, useState } from 'react';
import { useForceValueUpdate } from '../../hooks/useForceUpdate';
import RenderCounter from '../../components/RenderCounter';
import {
  ChildFunctionComponent,
  ChildFunctionComponentMemoized,
  ChildFunctionComponentWithObjectProps,
  ChildFunctionComponentWithObjectPropsMemoized
} from './ChildComponents';
import { TProps, TObjectValue } from './common';

export const PlainPropsFunctionComponent: FC<TProps> = (props: TProps) => {
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

export const ObjectPropsFunctionComponent: FC<TProps> = (props: TProps) => {
  const initialValue: TObjectValue = {
    num: 1,
    str: 'hello'
  };
  const [value, setIt] = useState<TObjectValue>(initialValue);
  const setNum = () =>
    setIt(prevState => ({ num: prevState.num + 1, str: prevState.str }));
  const setStr = () =>
    setIt(prevState => ({
      num: prevState.num,
      str: `${initialValue.str} ${Math.round(Math.random() * 100)}`
    }));

  const update = props.changeProps ? setStr : setNum;
  const note = props.changeProps
    ? `str property changes, num remains unchanged: { num: ${value.num}, str: ${value.str} }`
    : `num property changes, str remains unchanged: { num: ${value.num}, str: ${value.str} }`;

  return (
    <RenderCounter color="black">
      <p>Container</p>
      {props.isMemoized ? (
        <ChildFunctionComponentWithObjectPropsMemoized obj={value} />
      ) : (
        <ChildFunctionComponentWithObjectProps obj={value} />
      )}
      <hr style={{ background: 'transparent' }} />
      <button onClick={() => update()}>Render example</button>&nbsp;
      <span>{note}</span>
    </RenderCounter>
  );
};
