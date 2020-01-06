import React from 'react';

const useForceUpdate = () => {
  const [, setIt] = React.useState<any>()

  return () => setIt({})
}

export default useForceUpdate
