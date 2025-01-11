import type { CollectionConfig } from 'payload'
import { ReplyContext } from "@collections/fields/reply-context";
import { OgContent } from "@collections/fields/og-content";
import { SocialMessage } from "@collections/fields/social-message";
import payload from 'payload'

import { isAdmin } from "@/access/isAdmin";
import { publishedOnly } from "@/access/publishedOnly";

import { revalidatePath, revalidateTag } from 'next/cache'


// @ts-ignore
const Notes: CollectionConfig = {
  slug: 'notes',
  access: {
    create: isAdmin,
    delete: isAdmin,
    read: publishedOnly,
    readVersions: isAdmin,
    update: isAdmin,
  },
  versions: {
    drafts: {
      autosave: true,
    }
  },
  admin: {
    useAsTitle: 'titleForAdmin',
    // livePreview: {
    //   url: ({ data }) => {
    //     return `http://localhost:3000/notes/${data.slug}`
    //   },
    // },
  },
  hooks: {
    afterChange: [
      ({ doc }) => {
      if (doc.slug !== null) {
        const path = `/notes/${doc.slug}`

        revalidatePath(`/notes/${doc.slug}`)
        revalidatePath('/notes');
      }

        // return doc
      }
    ]
  },
  fields: [
    {
      name: 'title', // required
      type: 'group', // required
      interfaceName: 'Title', // optional
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true
        },
        {
          name: 'visibility',
          type: 'checkbox',
          defaultValue: true
        },
      ]
    },
    {
      name: 'titleForAdmin',
      type: 'text',
      label: 'Title for Admin',
      admin: {
        hidden: true,
        disableBulkEdit: true
      },
      hooks: {
        beforeChange: [({ data }) => data?.title.text],
        afterRead: [({ data }) => data?.title.text],
      }
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Note Image',
      relationTo: 'media', // required
      admin: {
        position: 'sidebar',
      }
    },
    {
      name: 'og', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,
      blocks: [
        OgContent,
      ],
    },
    {
      name: 'meta', // required
      type: 'group', // required
      interfaceName: 'Meta', // optional
      fields: [
        {
          name: 'description',
          type: 'text'
        }
      ],
      admin: {
        position: 'sidebar',
      }
    },
    {
      name: 'replyContexts',
      type: 'blocks',
      minRows: 1,
      maxRows: 20,
      blocks: [
        ReplyContext,
      ],
    },
    {
      name: 'tags',
      label: 'Tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
      admin: {
        position: 'sidebar',
      }
    },
    {
      name: 'socialMessages',
      label: 'Social Messages',
      type: 'blocks',
      blocks: [
        SocialMessage
      ],
      admin: {
        position: 'sidebar',
      }
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      required: true

    },
    {
      name: 'oldDate',
      type: 'date',
      label: 'Old Date',
    },
  ]
}

export default Notes
