import React, { Component } from 'react';
import { useForceUpdate } from '../../hooks/useForceUpdate';
import RenderCounter from '../../components/RenderCounter';
import {
  ChildFunctionComponent,
  ChildFunctionComponentMemoized
} from './ChildComponents';

class FunctionComponentContainer extends Component {
  render() {
    return (
      <RenderCounter color="black">
        <p>Container</p>
        <ChildFunctionComponent value={1} />
      </RenderCounter>
    );
  }
}

class FunctionComponentContainerMemoized extends Component {
  render() {
    return (
      <RenderCounter color="black">
        <p>Container</p>
        <ChildFunctionComponentMemoized value={1} />
      </RenderCounter>
    );
  }
}

export default (props: { isMemoized: boolean }) => {
  const update = useForceUpdate();

  return (
    <>
      {props.isMemoized ? (
        <FunctionComponentContainerMemoized />
      ) : (
        <FunctionComponentContainer />
      )}
      <hr style={{ background: 'transparent' }} />
      <button onClick={update}>Render example</button>
    </>
  );
};
