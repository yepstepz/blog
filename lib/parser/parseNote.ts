import { NoteItemType, NotesApiType } from '../../types/note.ts';

export const parseNote = ({
  title,
  content,
  slug,
  oldDate,
  _createdAt,
  reply,
  syndicated,
  bridgyEndpoints,
  tags,
  _type,
  description = ''
}: NotesApiType): NoteItemType => {
  const customizedData = {
    title: '',
    mdxSource: '',
    content,
    slug: slug.current,
    date: oldDate || _createdAt,
    bridgyEndpoints,
    tags,
    reply: {},
    syndicated: {},
    contentType: _type,
    description
  };

  if (title.visibility) {
    customizedData.title = title.name;
  }

  if (reply?.replyLink) {
    customizedData.reply = reply;
  }

  if (syndicated?.syndicatedLink) {
    customizedData.syndicated = syndicated;
  }

  return customizedData;
};
