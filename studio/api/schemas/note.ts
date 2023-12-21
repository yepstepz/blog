import {defineField} from 'sanity'

export const note = {
  name: 'note',
  title: 'Note',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title Settings',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'visibility',
          title: 'Show Note Title',
          type: 'boolean',
          initialValue: false,
        },
      ],
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
      name: 'bridgyEndpoints',
      title: 'Bridgy Endpoints',
      type: 'object',
      fields: [
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
      ],
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
    {
      name: 'reply',
      title: 'In Reply To',
      type: 'object',
      fields: [
        {
          title: 'Link',
          name: 'replyLink',
          type: 'string',
        },
        {
          title: 'Text',
          name: 'replyText',
          type: 'string',
        },
      ],
    },
    {
      name: 'syndicated',
      title: 'Syndicated Link',
      type: 'object',
      fields: [
        {
          title: 'Link',
          name: 'syndicatedLink',
          type: 'string',
        },
        {
          title: 'Text',
          name: 'syndicatedText',
          type: 'string',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      id: '_id',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title.name,
      }
    },
  },
}
