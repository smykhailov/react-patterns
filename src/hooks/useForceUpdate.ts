import React from 'react';
import { TObjectValue } from '../examples/components/common';

export const useForceValueUpdate = (
  changeProps?: boolean
): [() => void, number] => {
  const initialValue = 1;
  const [value, setIt] = React.useState<number>(initialValue);

  return [() => setIt(value + 1), changeProps ? value : initialValue];
};

export const useForceObjectValueUpdate = (
  changeProps?: boolean
): [() => void, TObjectValue] => {
  const initialValue: TObjectValue = {
    num: 1,
    str: 'hello'
  };
  const [value, setIt] = React.useState<TObjectValue>(initialValue);

  return [
    () => setIt(prevState => ({ num: prevState.num + 1, str: prevState.str })),
    changeProps ? value : initialValue
  ];
};

export const useForceUpdate = () => {
  const [, setIt] = React.useState<any>();

  return () => setIt({});
};
