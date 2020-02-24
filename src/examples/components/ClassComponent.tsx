import React, { FC, useState } from 'react';
import { useForceValueUpdate } from '../../hooks/useForceUpdate';
import RenderCounter from '../../components/RenderCounter';
import {
  ChildClassComponent,
  ChildClassComponentMemoized,
  ChildClassComponentWithObjectPropsMemoizedStr,
  ChildClassComponentWithObjectPropsMemoizedNum,
  ChildClassComponentWithObjectPropsStr,
  ChildClassComponentWithObjectPropsNum
} from './ChildComponents';
import { TProps, TObjectValue } from './common';

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
        <>
          <ChildClassComponentWithObjectPropsMemoizedNum obj={value} />
          <ChildClassComponentWithObjectPropsMemoizedStr obj={value} />
        </>
      ) : (
        <>
          <ChildClassComponentWithObjectPropsNum obj={value} />
          <ChildClassComponentWithObjectPropsStr obj={value} />
        </>
      )}
      <hr style={{ background: 'transparent' }} />
      <button onClick={() => update()}>Render example</button>&nbsp;
      <span>{note}</span>
    </RenderCounter>
  );
};
