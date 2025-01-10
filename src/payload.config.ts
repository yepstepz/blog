import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'
import {
  UploadFeature,
  HeadingFeature,
  BlocksFeature
} from '@payloadcms/richtext-lexical';

import Socials from './collections/Socials'
import Users from './collections/Users'
import Notes from './collections/Notes'
import Media from './collections/Media'
import Tags from './collections/Tags'
import WebActions from './collections/WebActions'
import CodeBlock from './collections/lexical-ui/CodeBlock'
import { Image } from "@collections/lexical-ui/Image";

export default buildConfig({
  admin: {
    // ...
  },
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      HeadingFeature({}),
      BlocksFeature({
        blocks: [CodeBlock, Image]
      }),
      UploadFeature({
        collections: {
          uploads: {
            // Example showing how to customize the built-in fields
            // of the Upload feature
            fields: [
              {
                name: 'caption',
                type: 'richText',
                editor: lexicalEditor(),
              },
            ],
          },
        },
      }),
    ]
  }),

  // Define and configure your collections in this array
  collections: [Socials, Users, Notes, Media, Tags, WebActions],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || '',
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
  localization: {
    locales: ['ru', 'en'], // required
    defaultLocale: 'ru', // required
  },
})
