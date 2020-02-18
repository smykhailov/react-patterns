import React, { Component } from 'react';
import { useForceValueUpdate } from '../../hooks/useForceUpdate';
import RenderCounter from '../../components/RenderCounter';
import {
  ChildClassComponent,
  ChildPureComponent,
  ChildFunctionComponent,
  ChildClassComponentMemoized,
  ChildFunctionComponentMemoized,
  ChildPureComponentMemoized
} from './ChildComponents';
import { TProps, TCompProps } from './common';

class ComponentsContainer extends Component<TCompProps> {
  render() {
    return (
      <RenderCounter color="black">
        <p>Container</p>
        <ChildClassComponent value={this.props.value} />
        <ChildPureComponent value={this.props.value} />
        <ChildFunctionComponent value={this.props.value} />
      </RenderCounter>
    );
  }
}

class ComponentsContainerMemoized extends Component<TCompProps> {
  render() {
    return (
      <RenderCounter color="black">
        <p>Container</p>
        <ChildClassComponentMemoized value={this.props.value} />
        <ChildPureComponentMemoized value={this.props.value} />
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
        <ComponentsContainerMemoized value={value} />
      ) : (
        <ComponentsContainer value={value} />
      )}
      <hr style={{ background: 'transparent' }} />
      <button onClick={() => update()}>Render example</button>
    </>
  );
};
