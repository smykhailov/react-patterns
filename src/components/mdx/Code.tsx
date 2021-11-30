import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import React from 'react';

import 'prism-themes/themes/prism-vs.css';

// TODO: use typings when MDX2 will be released
type CodeProps = {
  className?: string;
  children?: string;
};

const Code: React.FC<CodeProps> = (props) => {
  const { className = 'language-jsx', children = '' } = props;
  const language: Language = className.replace('language-', '') as any;
  const code = children.replace(/\n$/, '');

  return (
    <>
      {/* CSS fix for empty lines */}
      <style>{`.prism-code .token.plain { display: inline-block; }`}</style>
      <style>{`.prism-code .token.comment { font-style: normal; }`}</style>

      <Highlight
        {...defaultProps}
        code={code}
        language={language}
        theme={undefined} // CSS theme is used
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style, padding: 3 }}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </>
  );
};

export default Code;
