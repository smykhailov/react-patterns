import React, { Component, FunctionComponent, PureComponent } from 'react';
import RenderCounter from '../../components/RenderCounter';
import { TValue, TObjectValue } from './common';

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
  TObjectValue
> {
  render() {
    return (
      <RenderCounter color="red">
        <span>Child Class Component:</span>
        {`{ num: ${this.props.value.num}, str: ${this.props.value.str}`}
      </RenderCounter>
    );
  }
}

export class ChildClassComponentWithObjectPropsMemoized extends Component<
  TObjectValue
> {
  shouldComponentUpdate(nextProps: Readonly<TObjectValue>) {
    return (
      nextProps.value.num !== this.props.value.num ||
      nextProps.value.str !== this.props.value.str
    );
  }

  render() {
    return (
      <RenderCounter color="red">
        <span>
          Child Class Component <strong>Memoized</strong>:
        </span>
        {`{ num: ${this.props.value.num}, str: ${this.props.value.str}`}
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
