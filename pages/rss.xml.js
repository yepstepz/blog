import { getAllPosts } from "../lib/posts";

function generateRss(posts) {
  const site_url =
  process.env.NODE_ENV === "production"
    ? "https://yepstepz.io"
    : "http://localhost:3000";

  return `
  <rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
        <channel>
            <atom:link href="${site_url}/rss.xml" rel="self" type="application/rss+xml" />
            <title>Blog posts by yepstepz | RSS Feed</title>
            <link>${site_url}</link>
            <language>ru-ru</language>
            <description>Hi! My name is Tatiana (yepstepz). I write + code</description>
            <ttl>60</ttl>
            <pubDate>${(new Date).toUTCString()}</pubDate>
            ${posts.map(({ title, slug, date, description }) => `
              <item>
                  <title>${title}</title>
                  <link>${site_url}/posts/${slug}</link>
                  <pubDate>${(new Date(date)).toUTCString()}</pubDate>
                  <description>
                      <![CDATA[${description}]]>
                  </description>
                  <guid>${site_url}/posts/${slug}</guid>
              </item>
            `).join('')}
        </channel>
    </rss>
  `;
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
    "url",
    "lastEdit"
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