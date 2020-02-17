import React, { Component } from 'react';
import { useForceValueUpdate } from '../../hooks/useForceUpdate';
import RenderCounter from '../../components/RenderCounter';
import {
  ChildPureComponent,
  ChildPureComponentMemoized
} from './ChildComponents';
import { TProps, TCompProps } from './common';

class PureComponentContainer extends Component<TCompProps> {
  render() {
    return (
      <RenderCounter color="black">
        <p>Container</p>
        <ChildPureComponent value={this.props.value} />
      </RenderCounter>
    );
  }
}

class PureComponentContainerMemoized extends Component<TCompProps> {
  render() {
    return (
      <RenderCounter color="black">
        <p>Container</p>
        <ChildPureComponentMemoized value={this.props.value} />
      </RenderCounter>
    );
  }
}

export default (props: TProps) => {
  const [update, value] = useForceValueUpdate(props.changeProps);

  return (
    <>
      {props.isMemoized ? (
        <PureComponentContainerMemoized value={value} />
      ) : (
        <PureComponentContainer value={value} />
      )}
      <hr style={{ background: 'transparent' }} />
      <button onClick={update}>Render example</button>
    </>
  );
};
