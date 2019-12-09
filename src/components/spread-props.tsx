import React, { Component } from 'react';

const SpreadProperties: React.FC = () => {
  return (
    <div>
      <h2>Spread props</h2>
      <Container />
    </div>
  );
};

class Container extends Component<{}, TContainerState> {
  private intervalFunctionId?: NodeJS.Timeout;

  constructor(props: {}) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.intervalFunctionId = setInterval(this.changeDate, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalFunctionId!);
  }

  changeDate = () => this.setState({ date: new Date() });

  render() {
    return (
      <div>
        <fieldset>
          <legend>Container</legend>
          <p>Container last re-rendered: {this.state.date.toLocaleString()}</p>
          <fieldset>
            <legend>Children</legend>
            <Child shouldUpdate={false} />
            <Child shouldUpdate={false} />
            <Child shouldUpdate={false} />
          </fieldset>
        </fieldset>
      </div>
    );
  }
}

const Child: React.FC<TChildProps> = React.memo((props: TChildProps) => {
  return (
    <div>
      <p>This component shouldn't re-render</p>
      <p>Last rendered at: {new Date().toLocaleString()}</p>
    </div>
  );
});

type TChildProps = {
  shouldUpdate: boolean;
};

type TContainerState = {
  date: Date;
};

export default SpreadProperties;
