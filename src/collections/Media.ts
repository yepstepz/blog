import type { CollectionConfig } from 'payload'
import path from 'path'

export const Media: CollectionConfig = {
    slug: 'media',
    upload: {
        staticDir: 'media',
        resizeOptions: {
            fit: 'cover'
        },
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
        },
        {
            name: 'caption',
            type: 'text',
        },
    ],
}

export default Media;
