import React, { Component } from 'react';
import { useForceValueUpdate } from '../../hooks/useForceUpdate';
import RenderCounter from '../../components/RenderCounter';
import {
  ChildFunctionComponent,
  ChildFunctionComponentMemoized
} from './ChildComponents';
import { TProps, TCompProps } from './common';

class FunctionComponentContainer extends Component<TCompProps> {
  render() {
    return (
      <RenderCounter color="black">
        <p>Container</p>
        <ChildFunctionComponent value={this.props.value} />
      </RenderCounter>
    );
  }
}

class FunctionComponentContainerMemoized extends Component<TCompProps> {
  render() {
    return (
      <RenderCounter color="black">
        <p>Container</p>
        <ChildFunctionComponentMemoized value={this.props.value} />
      </RenderCounter>
    );
  }
}

export default (props: TProps) => {
  const [update, value] = useForceValueUpdate(props.changeProps);

  return (
    <>
      {props.isMemoized ? (
        <FunctionComponentContainerMemoized value={value} />
      ) : (
        <FunctionComponentContainer value={value} />
      )}
      <hr style={{ background: 'transparent' }} />
      <button onClick={update}>Render example</button>
    </>
  );
};
