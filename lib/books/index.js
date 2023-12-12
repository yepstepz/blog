import { toJson } from 'xml2json';
import { join } from 'path';
import fs from 'fs';

export async function getBooks(shelf = 'read') {
  // TODO: host your books

  const xml = fs.readFileSync(
    join(process.cwd(), 'lib', 'books', `./fixture/${shelf}.xml`),
    'utf-8'
  );

  return toJson(xml);
}
