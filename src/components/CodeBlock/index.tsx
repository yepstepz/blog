'use client';

import { useContext } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism, oneDark, vs, vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { ThemeProviderContext } from '@components/ThemeProvider';

export const CodeBlock = (props) => {
  const { index, language, content } = props;
  const { theme } = useContext(ThemeProviderContext);
  return (
      <SyntaxHighlighter key={index} language={language} style={theme === 'dark' ? vscDarkPlus : vs}>
        {content}
      </SyntaxHighlighter>
  );
}

export const CodeBlockMDX = ({ className, children }) => {
  const language = className?.replace('language-', '') || 'text';
  const { theme } = useContext(ThemeProviderContext);
  return (
    <SyntaxHighlighter language={language} style={theme === 'dark' ? vscDarkPlus : vs}>
      {children}
    </SyntaxHighlighter>
  );
};
