import React, { useContext } from 'react'
import { css } from '@emotion/core'

import { HighlightStyled } from './code-highlighter.styles'
import { ThemeContext } from '../../../components/context/theme-wrapper.context'


const MyComponent = ({
    language = 'javascript',
    title = 'Hello World in Javascript',
    description = 'This code will log hello world in the console.',
    children
}) => {

    const { themeColor } = useContext(ThemeContext)
    return (
        <div css={css`
            margin: 40px 0;
        `}>
            <HighlightStyled className={`highlight-${themeColor}`} language={language}>
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
