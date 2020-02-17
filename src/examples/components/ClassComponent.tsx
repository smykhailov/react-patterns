import React, { Component } from 'react';
import {
  useForceUpdate,
  useForceValueUpdate
} from '../../hooks/useForceUpdate';
import RenderCounter from '../../components/RenderCounter';
import {
  ChildClassComponent,
  ChildClassComponentMemoized
} from './ChildComponents';
import { TProps, TCompProps } from './common';

class ClassComponentContainer extends Component<TCompProps> {
  render() {
    return (
      <RenderCounter color="black">
        <p>Container</p>
        <ChildClassComponent value={this.props.value} />
      </RenderCounter>
    );
  }
}

class ClassComponentContainerMemoized extends Component<TCompProps> {
  render() {
    return (
      <RenderCounter color="black">
        <p>Container</p>
        <ChildClassComponentMemoized value={this.props.value} />
      </RenderCounter>
    );
  }
}

export default (props: TProps) => {
  const [update, value] = useForceValueUpdate(props.changeProps);

  return (
    <>
      {props.isMemoized ? (
        <ClassComponentContainerMemoized value={value} />
      ) : (
        <ClassComponentContainer value={value} />
      )}
      <hr style={{ background: 'transparent' }} />
      <button onClick={update}>Render example</button>
    </>
  );
};
