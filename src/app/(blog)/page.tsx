import Link from 'next/link';
import styles from '@styles/global.module.css';
import { HCard } from "@components/Partials/microformats/h-card";
import { getPosts } from "@/lib/data/getPosts";
import { SmallArticle } from "@components/Article/small-article";
import { getPayload } from "payload";
import config from "@payload-config";
import Note from "@components/Note";
import type { Metadata } from 'next';

import MainPage from '@/mdx-landings/main.mdx';
import { getMetadata } from "@/lib/getMetadata";

export default async function Page() {
  const articles = await getPosts();
  const latestArticles = articles.slice(0, 5);
  const payload = await getPayload({ config })
  const notes = await payload.find({
    collection: 'notes',
    sort: ['-oldDate', '-createdAt']
  })

  const lastNote = notes.docs[0];

  return (
    <>
      <div className="page__content h-entry">
        <HCard isAuthor={true} visible={false} />
        <h1 className="p-name">
          Привет! Меня зовут <span className="text--violet">Татьяна</span>.
        </h1>
        <div className="e-content body">
          <MainPage />
        </div>
      </div>
      <div className={styles.titleWithButton}>
        <h2>Последние посты:</h2>
        <Link className="button" href={`/posts`} prefetch={false}>
          Все посты
        </Link>
      </div>
      <ul className="m0 p0">
        {latestArticles.map(({ slug, date, title }) => {
          return <SmallArticle key={slug} slug={slug} date={date} title={title} as="li" />;
        })}
      </ul>
      <div className={styles.titleWithButton}>
        <h2>Последняя заметка:</h2>
        <Link className="button" href={`/notes`} prefetch={false}>
          Все заметки
        </Link>
      </div>
      <Note {...lastNote} embedded />
    </>
  );
}

export const generateMetadata = (): Metadata => getMetadata({
  title: "Главная страница",
  description: "Пишу про себя, фронтенд и книги."
})
