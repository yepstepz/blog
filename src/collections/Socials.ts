import type { CollectionConfig } from 'payload'

const Socials: CollectionConfig = {
  slug: 'socials',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      name: 'slug',
      type: 'text',
      required: true
    },
    {
      name: 'bridgyEndpoint',
      type: 'text',
    },
  ],
}

export default Socials
