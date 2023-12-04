import Link from 'next/link';

import Tags from '@components/Partials/Tags';
import Image from '@components/Partials/Images';
import { Plate } from '@components/Partials/Plate';

import styles from './MainArticlePage.module.css';

export default function MainArticle({
  title,
  description,
  slug,
  image,
  tags,
  imageWidth,
  blurImage,
  published,
}) {
  return (
    <article>
      <div className="block-headline inner--sm">
        <div className="df ac">
          {!published && <Plate title="Черновик" />}
          <Tags tags={tags} />
        </div>
        <h1 className="headline headline--main">{title}</h1>
      </div>
      <div className="block-headline inner--sm">
        {image && (
          <div
            className={`inner--sm ${styles.postImage}`}
            style={{
              position: 'relative',
              width: imageWidth,
            }}
          >
            <Image
              src={image}
              placeholder={blurImage ? 'blur' : undefined}
              blurDataURL={blurImage}
              layout="fill"
              priority
              aspectRatio="16/9"
            />
          </div>
        )}
      </div>
      <div className="block-content inner--sm">
        <p className="body">{description}</p>
      </div>
      <div className="block-buttons inner--sm">
        <Link href={`/posts/${slug}`} legacyBehavior>
          <a className="button">Нажимай</a>
        </Link>
      </div>
    </article>
  );
}
