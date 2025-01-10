import type { Block } from "payload";

export const SocialMessage: Block = {
  slug: 'socialMessage',
  fields: [
    {
        type: 'relationship',
        relationTo: 'socials',
        name: 'socialEntity',
        required: true
    },
    {
      name: 'description',
      type: 'textarea'
    },
    {
      name: 'shareTo',
      type: 'checkbox',
      defaultValue: true
    },
    {
      name: 'syndicatedTo',
      type: 'text'
    },
  ]
}
