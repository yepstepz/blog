import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'posts');

export function getItemSlugs(directory) {
  return fs.readdirSync(directory);
}

export function getItemBySlug(slug, fields = [], directory) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(directory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }

    if (data['published']) {
      items.published = data['published'];
    }
  });

  return items;
}

export function getAllItems(fields = [], type = 'posts') {
  const directory = join(process.cwd(), type);
  const slugs = getItemSlugs(directory);

  const items = slugs
    .reduce((allItems, currentSlug) => {
      const post = getItemBySlug(currentSlug, fields, directory);

      if (post.published === true || process.env.NODE_ENV === 'development') {
        allItems.push(post);
      }

      return allItems;
    }, [])
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'));
  return items;
}
