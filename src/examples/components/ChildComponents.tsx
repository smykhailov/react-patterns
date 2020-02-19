import React, { Component, FunctionComponent, PureComponent } from 'react';
import RenderCounter from '../../components/RenderCounter';
import { TValue, TObjectProps } from './common';

export class ChildClassComponent extends Component<TValue> {
  render() {
    return (
      <RenderCounter color="red">
        Child Class Component: {this.props.value}
      </RenderCounter>
    );
  }
}

export class ChildClassComponentMemoized extends Component<TValue> {
  shouldComponentUpdate(nextProps: Readonly<TValue>) {
    return nextProps.value !== this.props.value;
  }

  render() {
    return (
      <RenderCounter color="red">
        Child Class Component <strong>Memoized</strong>: {this.props.value}
      </RenderCounter>
    );
  }
}

export class ChildClassComponentWithObjectProps extends Component<
  TObjectProps
> {
  render() {
    return (
      <RenderCounter color="red">
        <span>Child Class Component:</span>
        {`str: ${this.props.obj.str}`}
      </RenderCounter>
    );
  }
}

export class ChildClassComponentWithObjectPropsMemoized extends Component<
  TObjectProps
> {
  shouldComponentUpdate(nextProps: Readonly<TObjectProps>) {
    return nextProps.obj.str !== this.props.obj.str;
  }

  render() {
    return (
      <RenderCounter color="red">
        <span>
          Child Class Component <strong>Memoized</strong>:
        </span>
        {`str: ${this.props.obj.str}`}
      </RenderCounter>
    );
  }
}

export class ChildPureComponent extends PureComponent<TValue> {
  render() {
    return (
      <RenderCounter color="green">
        Child Pure Component: {this.props.value}
      </RenderCounter>
    );
  }
}

export class ChildPureComponentMemoized extends PureComponent<TValue> {
  render() {
    return (
      <RenderCounter color="green">
        Child Pure Component <strong>Memoized</strong>: {this.props.value}
      </RenderCounter>
    );
  }
}

export const ChildFunctionComponent: FunctionComponent<TValue> = (
  props: TValue
) => {
  return (
    <RenderCounter color="blue">
      Child Function Component: {props.value}
    </RenderCounter>
  );
};

export const ChildFunctionComponentMemoized: FunctionComponent<TValue> = React.memo<
  FunctionComponent<TValue>
>((props: TValue) => {
  return (
    <RenderCounter color="blue">
      Child Function Component <strong>Memoized</strong>: {props.value}
    </RenderCounter>
  );
});
