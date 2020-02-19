import React from 'react';

export const useForceValueUpdate = (
  changeProps?: boolean
): [() => void, number] => {
  const initialValue = 1;
  const [value, setIt] = React.useState<number>(initialValue);

  return [() => setIt(value + 1), changeProps ? value : initialValue];
};

export const useForceUpdate = () => {
  const [, setIt] = React.useState<any>();

  return () => setIt({});
};
