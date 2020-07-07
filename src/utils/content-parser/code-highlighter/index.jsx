import React from 'react';
import Highlight from 'react-highlight.js'
import { Global, css } from '@emotion/core'

import EditorTheme from 'highlight.js/styles/solarized-dark.css'


const MyComponent = ({
    language = 'javascript',
    title = 'Hello World in Javascript',
    description = 'This code will log hello world in the console.',
    children
}) => {

    return (
        <>
            <Global styles={
                css`${EditorTheme}`
            }/>
            <Highlight language={language}>
                {children}
            </Highlight>
        </>
    )

}

export default MyComponent;

export const parseCode = (node) => {
    const codeBlock = node?.children?.find((child) => child.name === 'code')
    console.log(codeBlock, codeBlock.children?.map((child) => child.data))
    return (
        <MyComponent>
            {codeBlock.children?.map((child) => child.data)}
        </MyComponent>
    )
}
