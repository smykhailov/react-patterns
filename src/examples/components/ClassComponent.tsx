import React, { Component } from 'react';
import { useForceUpdate } from '../../hooks/useForceUpdate';
import RenderCounter from '../../components/RenderCounter';
import {
  ChildClassComponent,
  ChildClassComponentMemoized
} from './ChildComponents';

class ClassComponentContainer extends Component {
  render() {
    return (
      <RenderCounter color="black">
        <p>Container</p>
        <ChildClassComponent value={1} />
      </RenderCounter>
    );
  }
}

class ClassComponentContainerMemoized extends Component {
  render() {
    return (
      <RenderCounter color="black">
        <p>Container</p>
        <ChildClassComponentMemoized value={1} />
      </RenderCounter>
    );
  }
}

export default (props: { isMemoized: boolean }) => {
  const update = useForceUpdate();

  return (
    <>
      {props.isMemoized ? (
        <ClassComponentContainerMemoized />
      ) : (
        <ClassComponentContainer />
      )}
      <hr style={{ background: 'transparent' }} />
      <button onClick={update}>Render example</button>
    </>
  );
};
