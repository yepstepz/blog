import { defineField } from 'sanity'

export const note = {
  name: 'note',
  title: 'Note',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'markdown',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'oldDate',
      title: 'Old Date (Static Posts)',
      type: 'datetime',
    },
    {
      name: 'toMastodon',
      title: 'Add Note To Mastodon',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'toGithub',
      title: 'Add Note To Github',
      type: 'boolean',
      initialValue: false,
    },
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tags'}}],
    }),
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
    },
  ],
}
