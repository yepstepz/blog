const noteContent = `
    _id,
    title,
    "tags": tags[]->  title,
    bridgyEndpoints,
    reply,
    syndicated,
    content,
    oldDate,
    slug,
    _createdAt,
    _updatedAt,
    _type,
`;

export const queryAllNotes = `*[_type == "note"] {
  ${noteContent}
} | order(_createdAt desc)
`;

export const queryAllNotesSlugs = `
  *[_type == "note"][].slug.current
`;

export const querySingleNote = (
  id: string
) => `*[_type == "note" && slug.current == "${id}"]{
  ${noteContent}
}`;

export const queryNotesByTag = (
  tag
) => `*[_type == "note" && "${tag}" in tags[]-> slug.current]{
  ${noteContent}
}`;
