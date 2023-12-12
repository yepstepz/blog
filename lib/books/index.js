import { toJson } from 'xml2json';
import { join } from 'path';
import fs from 'fs';

export async function getBooks(shelf = 'read') {
  if (process.env.NODE_ENV === 'production') {
    const xmlBookList = await fetch(
      `https://www.goodreads.com/review/list_rss/63977345?shelf=${shelf}`,
      {
        method: 'GET',
        'Content-Type': 'text/xml; charset=utf-8',
      }
    ).then((response) => response.text());

    return toJson(xmlBookList);
  }

  const xml = fs.readFileSync(
    join(process.cwd(), 'lib', 'books', `./fixture/${shelf}.xml`),
    'utf-8'
  );

  return toJson(xml);
}
