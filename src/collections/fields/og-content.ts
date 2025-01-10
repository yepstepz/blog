import type { Block } from "payload";

export const OgContent: Block = {
  slug: 'og',
  interfaceName: 'OgContent',
  fields: [
    {
      type: 'text',
      name: 'tag'
    },
    {
      type: 'text',
      name: 'content'
    }
  ]
}
