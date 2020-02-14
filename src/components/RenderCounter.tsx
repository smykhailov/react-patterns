import React from 'react';

type RenderCounterProps = {
  children: React.ReactNode;
  color: string;
  style?: React.CSSProperties;
};

const RenderCounter = React.memo<RenderCounterProps>(props => {
  const counter = React.useRef<number>(0);
  counter.current += 1;

  return (
    <div
      style={{
        ...props.style,
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: props.color,
        position: 'relative',
        width: '70%',
        marginTop: 4,
        marginBottom: 4
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          background: 'black',
          color: 'white',
          fontFamily: 'monospace',
          padding: 2
        }}
      >
        Render count: {counter.current}
      </div>
      {props.children}
    </div>
  );
});

export default RenderCounter;
