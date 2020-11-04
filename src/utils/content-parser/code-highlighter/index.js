import React from 'react';
import { css } from '@emotion/core'
import { useTheme } from "emotion-theming";

import { HighlightStyled } from './code-highlighter.styles'


const MyComponent = ({
    language = 'javascript',
    title = 'Hello World in Javascript',
    description = 'This code will log hello world in the console.',
    children
}) => {

    const { type } = useTheme()
    return (
        <div css={css`
            margin: 40px 0;
        `}>
            <HighlightStyled className={`highlight-${type}`} language={language}>
                {children}
            </HighlightStyled>
        </div>
    )

}

export default MyComponent;

export const parseCode = (node) => {
    const codeBlock = node?.children?.find((child) => child.name === 'code')
    return (
        <MyComponent>
            {codeBlock.children?.map((child) => child.data)}
        </MyComponent>
    )
}
