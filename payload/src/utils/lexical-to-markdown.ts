import { createHeadlessEditor } from '@lexical/headless';
import { defaultEditorConfig, defaultEditorFeatures } from '@payloadcms/richtext-lexical'; // <= make sure this package is installed
import {
  getEnabledNodes,
  sanitizeEditorConfig,
} from '@payloadcms/richtext-lexical'
import type { SerializedEditorState } from "lexical"
import { $convertToMarkdownString } from "@lexical/markdown";

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

const yourSanitizedEditorConfig = sanitizeEditorConfig(yourEditorConfig) // <= your editor config here
// const yourEditorState: SerializedEditorState // <= your current editor state here
//
// // Import editor state into your headless editor
// try {
//   headlessEditor.setEditorState(headlessEditor.parseEditorState(yourEditorState)) // This should commit the editor state immediately
// } catch (e) {
//   console.error({ err: e }, 'ERROR parsing editor state')
// }

export { headlessEditor, yourSanitizedEditorConfig }
