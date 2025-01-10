import config from '@payload-config';
import path from 'path';
import { getPayload, PaginatedDocs } from 'payload';

import NoteComponent from '@components/Note';
import type {Metadata} from "next";
import {getMdxContent} from "@/lib/getMdxContent";
import {getMetadata} from "@/lib/getMetadata";

export default async function Note({ params } : { params: Promise<{ slug: string }> }) {
  const { slug } = (await params);
  const { docs} =  await getNotes({ slug });
  const comments = await getComments({ type: 'notes', slug });

  if (docs.length === 0) {
    return 'empty'
  }

  return (
      <NoteComponent {...docs[0]} comments={comments} />
  );
}

async function getNotes ({ slug }): Promise<PaginatedDocs<any>> {
  const payload = await getPayload({ config })
  return await payload.find({
    collection: 'notes',
    where: {
      slug: {
        equals: slug,
      },
      _status: {
        equals: 'published',
      },
    }
  })
}

async function getComments({ type, slug }) {
  const response = await fetch(
    process.env.WEBMENTIONS_ENDPOINT + path.join(type, 'comments', slug)
  );

  const { data } = await response.json();

  return data;
}

// @ts-ignore
export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const notes = await payload.find({
    collection: 'notes'
  });

  const mappedNotes = notes.docs.map(({ slug }) => ({
    slug
  }))

  return mappedNotes
}

export const generateMetadata = async ({ params }): Promise<Metadata> => {
  const { slug } = await params;
  const { docs } = await getNotes({ slug })
  const note = docs[0];
  console.log(docs)
  return getMetadata({
    title: note.title.text,
    description: note.meta.description
  })
}
