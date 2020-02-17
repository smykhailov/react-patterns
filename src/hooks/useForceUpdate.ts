import React from 'react';

const useForceUpdate = (changeProps?: boolean): [() => void, number] => {
  const initialValue = 1;
  const [value, setIt] = React.useState<number>(initialValue);

  return [() => setIt(value + 1), changeProps ? value : initialValue];
};

export default useForceUpdate;
