import type { CollectionConfig } from 'payload'

const WebActions: CollectionConfig = {
  slug: 'webactions',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'value',
      type: 'text',
      required: true
    },
    {
      name: 'caption',
      type: 'text',
      localized: true,
    }
  ]
}

export default WebActions;
