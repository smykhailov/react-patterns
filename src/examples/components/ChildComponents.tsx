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

export class ChildClassComponentWithObjectPropsStr extends Component<TObjectProps> {
  render() {
    return (
      <RenderCounter color="red">
        Child Class Component: {this.props.obj.str}
      </RenderCounter>
    );
  }
}

export class ChildClassComponentWithObjectPropsNum extends Component<TObjectProps> {
  render() {
    return (
      <RenderCounter color="red">
        Child Class Component: {this.props.obj.num}
      </RenderCounter>
    );
  }
}

export class ChildClassComponentWithObjectPropsMemoizedStr extends Component<TObjectProps> {
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

export class ChildClassComponentWithObjectPropsMemoizedNum extends Component<TObjectProps> {
  shouldComponentUpdate(nextProps: Readonly<TObjectProps>) {
    return nextProps.obj.num !== this.props.obj.num;
  }

  render() {
    return (
      <RenderCounter color="red">
        Child Class Component <strong>Memoized</strong>: {this.props.obj.num}
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

export class ChildPureComponentWithObjectPropsStr extends PureComponent<TObjectProps> {
  render() {
    return (
      <RenderCounter color="green">
        Child Pure Component: {this.props.obj.str}
      </RenderCounter>
    );
  }
}

export class ChildPureComponentWithObjectPropsNum extends PureComponent<TObjectProps> {
  render() {
    return (
      <RenderCounter color="green">
        Child Pure Component: {this.props.obj.num}
      </RenderCounter>
    );
  }
}

export class ChildPureComponentWithObjectPropsMemoizedStr extends PureComponent<TObjectProps> {
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

export class ChildPureComponentWithObjectPropsMemoizedNum extends PureComponent<TObjectProps> {
  shouldComponentUpdate(nextProps: Readonly<TObjectProps>) {
    return nextProps.obj.num !== this.props.obj.num;
  }

  render() {
    return (
      <RenderCounter color="green">
        Child Pure Component <strong>Memoized</strong>: {this.props.obj.num}
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

export const ChildFunctionComponentMemoized: FunctionComponent<TValue> =
  React.memo<FunctionComponent<TValue>>((props: TValue) => {
    return (
      <RenderCounter color="blue">
        Child Function Component <strong>Memoized</strong>: {props.value}
      </RenderCounter>
    );
  });

export const ChildFunctionComponentWithObjectPropsStr: FunctionComponent<
  TObjectProps
> = (props: TObjectProps) => {
  return (
    <RenderCounter color="blue">
      Child Function Component: {props.obj.str}
    </RenderCounter>
  );
};

export const ChildFunctionComponentWithObjectPropsNum: FunctionComponent<
  TObjectProps
> = (props: TObjectProps) => {
  return (
    <RenderCounter color="blue">
      Child Function Component: {props.obj.num}
    </RenderCounter>
  );
};

export const ChildFunctionComponentWithObjectPropsMemoizedStr: FunctionComponent<TObjectProps> =
  React.memo<FunctionComponent<TObjectProps>>(
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

export const ChildFunctionComponentWithObjectPropsMemoizedNum: FunctionComponent<TObjectProps> =
  React.memo<FunctionComponent<TObjectProps>>(
    (props: TObjectProps) => {
      return (
        <RenderCounter color="blue">
          Child Function Component <strong>Memoized</strong>: {props.obj.num}
        </RenderCounter>
      );
    },
    (prevProps: Readonly<TObjectProps>, nextProps: Readonly<TObjectProps>) => {
      return prevProps.obj.num === nextProps.obj.num;
    }
  );
