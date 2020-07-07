import React from "react";
import { parseImage } from './img'
import { parseCode } from './code-highlighter'

export const replaceMedia = node => {
    switch (true) {
        case (node.name === 'figure' && node?.attribs?.class.includes('wp-block-image')): {
            return parseImage(node)
        }
        case(node.name === 'pre'): {
            return parseCode(node)
        }
        default:
            return
    }
}
