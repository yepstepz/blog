import Link from "next/link"
import Tags from '@components/Partials/Tags';
import { Plate } from "@components/Partials/Plate";

export default function Article({ slug, title, description, tags, published }) {
  return (
      <article>
        <div className="block-info block-info--sm inner--sm">
          <div className='df ac'>
            { !published && <Plate title="Черновик" /> }
            <Tags tags={tags} />
          </div>
        </div>
        <div className="block-headline inner--sm">
          <h3 className="headline headline--third">{title}</h3>
        </div>
        <div className="block-content--sm inner--sm">
          <p className="body body--secondary">
            {description}
          </p>
        </div>
        <div className="block-links inner--sm">
          <span className="read-link">
            <Link href={`/posts/${slug}`}>Читать далее</Link>
          </span>
        </div>
      </article>
  )
}