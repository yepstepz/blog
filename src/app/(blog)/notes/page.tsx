import config from '@payload-config';
import path from 'path';
import { getPayload, PaginatedDocs } from 'payload';

import NoteComponent from '@components/Note';
import type { Note } from '@/../payload-types';
import type {Metadata} from "next";
import {getMetadata} from "@/lib/getMetadata";

export default async function Note() {
  const data =  await getNotes();
  const reactions = await getReactions({ type: 'notes'});

  if (data.docs.length === 0) {
    return 'Noting was published'
  }

  return (
   data.docs.map((note: Note) => {
     const url = 'https://yepstepz.io/' + path.join('notes', note.slug);
     return <NoteComponent key={url} {...note} reactions={reactions[url]}  limit={5} />
   }))
}

async function getNotes (): Promise<PaginatedDocs<any>> {
  const payload = await getPayload({ config })
  return await payload.find({
    collection: 'notes',
    sort: ['-oldDate', '-createdAt'],
    where: {
      _status: {
        equals: 'published',
      },
    }
  })
}

async function getReactions({ type }) {
  const response = await fetch(
    process.env.WEBMENTIONS_ENDPOINT + path.join(type)
  );

  const { data } = await response.json();

  return data.reduce((prev, { wmTarget, _count }) => {
    prev[wmTarget] = _count
    return prev
  }, {});
}

export const generateMetadata = async (): Promise<Metadata> => getMetadata({
  title: 'Заметки',
  description: 'Короткие заметки для блога. Поддерживают webmentions',
  alternates: {
    canonical: `/notes`,
  }
})
