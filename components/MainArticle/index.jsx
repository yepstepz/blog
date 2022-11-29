import Link from 'next/link';

import Tags from '@components/Partials/Tags';
import ResponsiveImage from '@components/Partials/Images';

import styles from './MainArticlePage.module.css'

export default function MainArticle({ title, description, slug, image, tags }) {
  return (
    <article>
      <div className="block-headline inner--sm">
        <Tags tags={tags} />
        <h1 className="headline headline--main">{title}</h1>
      </div>
      {
        image &&
        <div className={`inner--sm ${styles.postImage}`} style={{ position: 'relative' }}>
          <ResponsiveImage
            src={image}
            layout="fill"
            priority
          />
        </div>
      }
      <div className="block-content inner--sm">
        <p className="body">
          {description}
        </p>
      </div>
      <div className="block-buttons inner--sm">
        <Link
            href={`/posts/${slug}`}
            legacyBehavior
          >
            <a className="button">Нажимай</a>
          </Link>
      </div>
    </article>
  )
}