import { getTextStyle } from './get-text-style.tsx';
import { getTextIndent } from './get-text-indent.tsx';

export const serialize = (node) => {
  console.log('-----', typeof node, Array.isArray(node), node);
  const { type, children, format, indent } = node;
  const styles = getTextIndent(indent, format);

  if (type === 'root') {
    return <>{node.children.map(serialize)}</>;
  }

  if (type === 'text') {
    return getTextStyle(format, node.text);
  }
  if (type === 'linebreak') {
    return <br />;
  }

  if (Array.isArray(node)) {
    return <>{node.map(serialize)}</>;
  }

  if (children === undefined) {
    return null;
  }

  if (type === 'paragraph') {
    return <p style={styles}>{serialize(node.children)}</p>;
  }

  if (type === 'link') {
    // linkType: custom | inner
    return (
      <a
        style={styles}
        href={node.fields.url}
        target={node.fields.newTab ? '_blank' : ''}
        rel={node.fields.newTab ? 'noopener noreferrer' : ''}
      >
        {serialize(node.children)}
      </a>
    );
  }

  if (type === 'quote') {
    return <blockquote style={styles}>{serialize(node.children)}</blockquote>;
  }
};
