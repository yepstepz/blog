import Link from 'next/link';

import { getTextStyle } from './get-text-style';
import { getTextIndent } from './get-text-indent';

const s3link = `https://${process.env.S3_BUCKET}.s3.${process.env.S3_REGION}.amazonaws.com/`

import { getBlocks } from './get-blocks';

export const serialize = (node, props?: { url?: string }, limit = Infinity) => {
  const { type, children, format, indent } = node;
  const styles = getTextIndent(indent, format);

  if (type === 'root') {
    const children = node.children.slice(0, limit);
    return (
      <>
        {children.map((child) => serialize(child))}
        {
          isFinite(limit) && node.children.length > limit &&
            <Link key={props?.url} href={props?.url || ''}>Читать далее...</Link>
        }
      </>
    )
  }

  if (type === 'upload' && node.value.mimeType === 'image/jpeg') {
    return <img style={{ width: '100%', height: 'auto'}} src={s3link + node.value.filename} />
  }

  if (type === 'block') {
    return getBlocks(node.fields);
  }

  if (type === 'tab') {
    return '  ';
  }

  if (type === 'text') {
    return getTextStyle(format, node.text);
  }

  if (type === 'linebreak') {
    return <br />;
  }

  if (Array.isArray(node)) {
    return <>{node.map((child) => serialize(child))}</>;
  }

  if (children === undefined) {
    return null;
  }

  if (type.startsWith("h")) {
    const Heading = node.tag;
    return <Heading>{serialize(node.children)}</Heading>
  }

  if (type === 'paragraph') {
    return <p style={styles}>{serialize(node.children)}</p>;
  }

  if (type === 'list') {
    const ListType = node.tag;
    return <ListType>{serialize(node.children)}</ListType>
  }

  if (type === 'listitem') {
    return <li>{serialize(node.children)}</li>
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
