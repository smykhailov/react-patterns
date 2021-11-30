import * as React from 'react';
import RenderCounter from '../../components/RenderCounter';

interface IClassComponentWithMethodComponentsProps {
  str: string;
  num: number;
}
export class ClassComponentWithMethodComponents extends React.PureComponent<IClassComponentWithMethodComponentsProps> {
  private strMethodComponent() {
    const { str } = this.props;
    return (
      <RenderCounter color="blue">
        <p>
          <i>str</i> is {str}
        </p>
      </RenderCounter>
    );
  }
  private numMethodComponent() {
    const { num } = this.props;
    return (
      <RenderCounter color="red">
        <p>
          <i>num</i> is {num}
        </p>
      </RenderCounter>
    );
  }

  render() {
    return (
      <RenderCounter color="yellow">
        <div>
          {this.strMethodComponent()}
          {this.numMethodComponent()}
        </div>
      </RenderCounter>
    );
  }
}

interface IStrComponentProps {
  str: string;
}
const StrComponent = React.memo(({ str }: IStrComponentProps) => (
  <RenderCounter color="blue">
    <p>
      <i>str</i> is {str}
    </p>
  </RenderCounter>
));

interface INumComponentProps {
  num: number;
}
class NumComponent extends React.PureComponent<INumComponentProps> {
  render() {
    return (
      <RenderCounter color="red">
        <p>
          <i>num</i> is {this.props.num}
        </p>
      </RenderCounter>
    );
  }
}

interface IClassComponentProps {
  str: string;
  num: number;
}
export class ClassComponent extends React.PureComponent<IClassComponentProps> {
  render() {
    return (
      <RenderCounter color="yellow">
        <div>
          <StrComponent str={this.props.str} />
          <NumComponent num={this.props.num} />
        </div>
      </RenderCounter>
    );
  }
}

export const Wrapper = ({ isCorrect }: { isCorrect: boolean }) => {
  const [num, setNum] = React.useState(1);
  const [str, setStr] = React.useState('1');

  return (
    <div>
      {isCorrect ? (
        <ClassComponent num={num} str={str} />
      ) : (
        <ClassComponentWithMethodComponents num={num} str={str} />
      )}
      <button onClick={() => setStr((prev) => `${parseInt(prev) + 1}`)}>
        Update `str`
      </button>
      <button onClick={() => setNum((prev) => prev + 1)}>Update `num`</button>
    </div>
  );
};
