import styled from '@emotion/styled'
import Highlight from 'react-highlight.js'

import { DARK_THEME, LIGHT_THEME } from '../../../theme-wrapper/theme-colors'
import { lightCodeTheme, darkCodeTheme } from './theme.styles'

export const HighlightStyled = styled(Highlight)`
    font-size: 17px;
    .hljs {
        padding: 20px;
    }
    & * {
      font-family: "JetBrainsMono", serif;
      font-variant-ligatures: none;
    }
    ${({ theme }) => `
         background-color: pink;
        &.highlight-${LIGHT_THEME} {
           ${lightCodeTheme}
        }
        &.highlight-${DARK_THEME} {
            ${darkCodeTheme}
        }
    `}
`
