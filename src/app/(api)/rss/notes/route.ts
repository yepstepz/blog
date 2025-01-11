import Feed from 'rss';
import {getPosts} from "@/lib/data/getPosts";
import {getPayload} from "payload";
import config from "@payload-config";

export async function GET() {
  const payload = await getPayload({ config })
  const notesDocs = await payload.find({
    collection: 'notes',
    sort: ['-oldDate', '-createdAt']
  });
  const notes = notesDocs.docs;

  const feed = new Feed({
    title: 'Заметки из блога yepstepz.io | RSS Feed',
    description: 'RSS Feed для коротких заметок с сайта yepstepz.io',
    link: `${process.env.HOME_URL}/rss/notes`,
    language: 'ru-ru',
    ttl: 60 * 24
  });

  notes.forEach((data) => {

    feed.item({
      title: data.title.text,
      description: data.meta.description,
      link: `${process.env.HOME_URL}/notes/${data.slug}`,
      date: new Date(data.oldDate || data.createdAt),
    });
  });

  return new Response(feed.xml(), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
