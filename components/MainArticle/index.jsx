import Link from 'next/link';
import Image from 'next/image';

import styles from "./MainArticle.module.css"

const ResponsiveImage = (props) => (
  <div className={styles.postImage}>
    <Image alt={props.alt} layout='fill' {...props} />
  </div>
);

export default function MainArticle({ title, description, slug, image }) {
  return (
    <article>
      <div className="block-headline inner--sm">
        <ul className="tags">
          <li className="tags__item tag tag--blue"><a href="/tag">#Раз</a></li>
          <li className="tags__item tag tag--violet"><a href="/tag">#Два</a></li>
          <li className="tags__item tag tag--orange"><a href="/tag">#Три</a></li>
        </ul>
        <h1 className="headline headline--main">{title}</h1>
      </div>
      <div className="inner--sm" style={{ position: 'relative' }}>
        <ResponsiveImage src={image} />
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