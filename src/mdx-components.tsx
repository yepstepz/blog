import type { MDXComponents } from 'mdx/types'

import { Gallery } from "@components/Partials/Gallery";
import { CodeBlockMDX } from "@components/CodeBlock";
import Note from '@components/Note'

export const mdxComponents = {
  Gallery,
  Note,
  pre: (props) => <div {...props} />, // Needed for wrapping
  code: (props) => {
    // Only render SyntaxHighlighter for blocks (inside `pre` tags)
    if (props.children.includes('\n')) {
      return <CodeBlockMDX {...props} />;
    }
    // Render inline code (single backticks) normally
    return <code {...props} />;
  },
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components,
  }
}
