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
        Child Class Component: {this.props.obj.str}
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
        Child Class Component <strong>Memoized</strong>: {this.props.obj.str}
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

export class ChildPureComponentWithObjectProps extends PureComponent<
  TObjectProps
> {
  render() {
    return (
      <RenderCounter color="green">
        Child Pure Component: {this.props.obj.str}
      </RenderCounter>
    );
  }
}

export class ChildPureComponentWithObjectPropsMemoized extends PureComponent<
  TObjectProps
> {
  shouldComponentUpdate(nextProps: Readonly<TObjectProps>) {
    return nextProps.obj.str !== this.props.obj.str;
  }

  render() {
    return (
      <RenderCounter color="green">
        Child Pure Component <strong>Memoized</strong>: {this.props.obj.str}
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

export const ChildFunctionComponentWithObjectProps: FunctionComponent<TObjectProps> = (
  props: TObjectProps
) => {
  return (
    <RenderCounter color="blue">
      Child Function Component: {props.obj.str}
    </RenderCounter>
  );
};

export const ChildFunctionComponentWithObjectPropsMemoized: FunctionComponent<TObjectProps> = React.memo<
  FunctionComponent<TObjectProps>
>(
  (props: TObjectProps) => {
    return (
      <RenderCounter color="blue">
        Child Function Component <strong>Memoized</strong>: {props.obj.str}
      </RenderCounter>
    );
  },
  (prevProps: Readonly<TObjectProps>, nextProps: Readonly<TObjectProps>) => {
    return prevProps.obj.str === nextProps.obj.str;
  }
);
