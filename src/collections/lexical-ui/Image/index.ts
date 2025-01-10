import type { Block } from 'payload'

export const Image: Block = {
  slug: 'image',
  fields: [
    {
      name: 'link',
      type: 'text'
    },
    {
      name: 'caption',
      type: 'text'
    },
    {
      name: 'alt',
      type: 'text'
    }
  ],
  interfaceName: 'Image',
}
