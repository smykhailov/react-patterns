import React, { Component } from 'react';
import useForceUpdate from '../../hooks/useForceUpdate';
import RenderCounter from '../../components/RenderCounter';
import {
  ChildClassComponent,
  ChildPureComponent,
  ChildFunctionComponent,
  ChildClassComponentMemoized,
  ChildFunctionComponentMemoized,
  ChildPureComponentMemoized
} from './ChildComponents';

class ComponentsContainer extends Component {
  render() {
    return (
      <RenderCounter color="black">
        <p>Container</p>
        <ChildClassComponent value={1} />
        <ChildPureComponent value={1} />
        <ChildFunctionComponent value={1} />
      </RenderCounter>
    );
  }
}

class ComponentsContainerMemoized extends Component {
  render() {
    return (
      <RenderCounter color="black">
        <p>Container</p>
        <ChildClassComponentMemoized value={1} />
        <ChildPureComponentMemoized value={1} />
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
        <ComponentsContainerMemoized />
      ) : (
        <ComponentsContainer />
      )}
      <hr style={{ background: 'transparent' }} />
      <button onClick={update}>Render example</button>
    </>
  );
};
