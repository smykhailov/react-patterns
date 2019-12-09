import React, { Component, PureComponent } from 'react';

const ComponentTypes: React.FC = () => {
  return (
    <div>
      <h2>Component/PureComponent/FunctionComponent re-rendering</h2>
      <Container />
    </div>
  );
};

class Container extends Component<{}, TContainerState> {
  private intervalFunctionId?: NodeJS.Timeout;

  constructor(props: {}) {
    super(props);

    this.state = {
      counter: 0,
      date: new Date()
    };
  }

  componentDidMount() {
    this.intervalFunctionId = setInterval(this.changeState, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalFunctionId!);
  }

  changeState = () =>
    this.setState(prevState => ({
      counter: prevState.counter + 1,
      date: new Date()
    }));

  render() {
    return (
      <div>
        <fieldset>
          <legend>Container</legend>
          <p>Container last re-rendered: {this.state.date.toLocaleString()}</p>
          <fieldset>
            <legend>Children</legend>
            <fieldset>
              <legend>Component</legend>
              <ChildComponent counter={0} shouldUpdate={false} />
              <ChildComponent
                counter={this.state.counter}
                shouldUpdate={true}
              />
            </fieldset>
            <fieldset>
              <legend>PureComponent</legend>
              <ChildPureComponent counter={0} shouldUpdate={false} />
              <ChildPureComponent
                counter={this.state.counter}
                shouldUpdate={true}
              />
            </fieldset>
            <fieldset>
              <legend>FunctionComponent</legend>
              <ChildFuncComponent counter={0} shouldUpdate={false} />
              <ChildFuncComponent
                counter={this.state.counter}
                shouldUpdate={true}
              />
            </fieldset>
          </fieldset>
        </fieldset>
      </div>
    );
  }
}

class ChildComponent extends Component<TChildProps> {
  render() {
    const suffix = this.props.shouldUpdate ? '' : "n't";

    return (
      <div>
        <p>
          This component <strong>should{suffix}</strong> re-render
        </p>
        <p>Counter: {this.props.counter}</p>
        <p>Last rendered at: {new Date().toLocaleString()}</p>
        <hr />
      </div>
    );
  }
}

class ChildPureComponent extends PureComponent<TChildProps> {
  render() {
    const suffix = this.props.shouldUpdate ? '' : "n't";

    return (
      <div>
        <p>
          This component <strong>should{suffix}</strong> re-render
        </p>
        <p>Counter: {this.props.counter}</p>
        <p>Last rendered at: {new Date().toLocaleString()}</p>
        <hr />
      </div>
    );
  }
}

const ChildFuncComponent: React.FC<TChildProps> = (props: TChildProps) => {
  const suffix = props.shouldUpdate ? '' : "n't";

  return (
    <div>
      <p>
        This component <strong>should{suffix}</strong> re-render
      </p>
      <p>Counter: {props.counter}</p>
      <p>Last rendered at: {new Date().toLocaleString()}</p>
      <hr />
    </div>
  );
};

type TChildProps = {
  counter: number;
  shouldUpdate: boolean;
};

type TContainerState = {
  date: Date;
  counter: number;
};

export default ComponentTypes;
