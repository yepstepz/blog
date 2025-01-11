import Feed from 'rss';
import {getPosts} from "@/lib/data/getPosts";

export async function GET() {
  const posts = await getPosts();
  const feed = new Feed({
    title: 'Посты из блога yepstepz.io | RSS Feed',
    description: 'RSS Feed для постов с сайта yepstepz.io',
    link: `${process.env.HOME_URL}/rss/posts`,
    language: 'ru-ru',
    ttl: 60 * 24
  });

  posts.forEach((data) => {

    feed.item({
      title: data.title,
      description: data.description,
      link: `${process.env.HOME_URL}/posts/${data.slug}`,
      date: new Date(data.date),
    });
  });

  return new Response(feed.xml(), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
