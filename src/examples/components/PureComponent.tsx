import React, { Component } from 'react';
import useForceUpdate from '../../hooks/useForceUpdate';
import RenderCounter from '../../components/RenderCounter';
import {
  ChildPureComponent,
  ChildPureComponentMemoized
} from './ChildComponents';

class PureComponentContainer extends Component {
  render() {
    return (
      <RenderCounter color="black">
        <p>Container</p>
        <ChildPureComponent value={1} />
      </RenderCounter>
    );
  }
}

class PureComponentContainerMemoized extends Component {
  render() {
    return (
      <RenderCounter color="black">
        <p>Container</p>
        <ChildPureComponentMemoized value={1} />
      </RenderCounter>
    );
  }
}

export default (props: { isMemoized: boolean }) => {
  const [update] = useForceUpdate();

  return (
    <>
      {props.isMemoized ? (
        <PureComponentContainerMemoized />
      ) : (
        <PureComponentContainer />
      )}
      <hr style={{ background: 'transparent' }} />
      <button onClick={update}>Render example</button>
    </>
  );
};
