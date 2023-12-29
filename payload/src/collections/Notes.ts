import { CollectionConfig } from 'payload/types'
import { createHeadlessEditor } from "@lexical/headless";
import {
  defaultEditorConfig,
  defaultEditorFeatures,
  getEnabledNodes,
  sanitizeEditorConfig,
} from "@payloadcms/richtext-lexical";
import { $convertFromMarkdownString, $convertToMarkdownString } from "@lexical/markdown";
import { yourSanitizedEditorConfig } from "../utils/lexical-to-markdown";

const Notes: CollectionConfig = {
  slug: 'notes',
  fields: [
    {
      name: 'title', // required
      type: 'text', // required
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Lexical Rich Text Editor',
      hooks: {
        afterChange: [
          (props) => {
            let markdown: string
            headlessEditor.getEditorState().read(() => {

              markdown = $convertToMarkdownString(yourSanitizedEditorConfig?.features?.markdownTransformers)
            })
            console.log({ markdown })


          }
        ]
      }
    },
  ]
}

export default Notes;

const yourEditorConfig = defaultEditorConfig; // <= your editor config here

yourEditorConfig.features = [
  ...defaultEditorFeatures,
  // Add your custom features here
]

const headlessEditor = createHeadlessEditor({
  nodes: getEnabledNodes({
    editorConfig: sanitizeEditorConfig(yourEditorConfig),
  }),
})
