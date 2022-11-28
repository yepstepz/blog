import Link from 'next/link';

import Tags from '@components/Partials/Tags';
import ResponsiveImage from '@components/Partials/Images';

import styles from './MainArticle.module.css'

export default function MainArticle({ title, description, slug, image, tags }) {
  return (
    <article>
      <div className="block-headline inner--sm">
        <Tags tags={tags} />
        <h1 className="headline headline--main">{title}</h1>
      </div>
      <div className={`inner--sm ${styles.postImage}`} style={{ position: 'relative' }}>
        <ResponsiveImage 
          src={image}
          layout="fill"
        />
      </div>
      <div className="block-content inner--sm">
        <p className="body">
          {description}
        </p>
      </div>
      <div className="block-buttons inner--sm">
        <Link href={`/posts/${slug}`}>
          <span className="button">Нажимай</span>
        </Link>
      </div>
    </article>
  )
}