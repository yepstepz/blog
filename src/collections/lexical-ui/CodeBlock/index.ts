import type { Block } from 'payload'

import { codeConverter } from './converter'
import { languages } from './languages';

export const CodeBlock: Block = {
  slug: 'code',
  admin: {
    jsx: '@collections/lexical-ui/CodeBlock/converterClient#codeConverterClient',
  },
  fields: [
    {
      name: 'language',
      type: 'select',
      defaultValue: 'ts',
      options: Object.entries(languages).map(([key, value]) => ({
        label: value,
        value: key,
      })),
    },
    {
      name: 'code',
      type: 'code',
      admin: {
        components: {
          Field: '@collections/lexical-ui/CodeBlock/CodeFields',
        },
      },
    },
  ],
  interfaceName: 'CodeBlock',
  jsx: codeConverter,
}

export default CodeBlock
