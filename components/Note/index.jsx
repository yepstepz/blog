import Link from 'next/link';
import { Plate } from '@components/Partials/Plate';
import Tags from '@components/Partials/Tags';
import { MDXRemote } from 'next-mdx-remote';
import styles from './Note.module.css';

export default function Note({ slug, content, published, mdxSource, tags }) {
  return (
    <article>
      <div className="block-links inner--sm">
        <span className="read-link">
          <Link href={`/notes/${slug}`}>Fri, Dec 1, 2023 11:48am -05:00</Link>
        </span>
      </div>
      <div className="inner--sm">
        <div className="df ac">
          <Tags tags={tags} />
          {!published && <Plate title="Черновик" />}
        </div>
      </div>
      <div className="block-content--sm inner--sm">
        <div className={styles.content}>
          <MDXRemote {...mdxSource} />
        </div>
      </div>
    </article>
  );
}