import { getAllPosts } from "../lib/posts";
import RSS from 'rss';

function generateRss(posts) {
  const site_url =
  process.env.NODE_ENV === "production"
    ? "https://yepstepz.io"
    : "http://localhost:3000";

  const feedOptions = {
    title: "Blog posts by yepstepz | RSS Feed",
    description: "Hi! My name is Tatiana (yepstepz). I write + code",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/favicons/favicon-16x16.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  };

  const feed = new RSS(feedOptions);

  posts.forEach((post) => {
    feed.item({
     title: post.title,
     description: post.description,
     url: `${site_url}/posts/${post.slug}`,
     date: post.date,
     author: 'Tatiana Leonteva'
    });
  });

  return feed.xml();
}

function Rss() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const posts = getAllPosts([
    "tags",
    "title",
    "description",
    "date",
    "slug",
    "url"
  ]);

  // // We generate the XML sitemap with the posts data
  const rss = generateRss(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(rss);
  res.end();

  return {
    props: {},
  };
}

export default Rss;