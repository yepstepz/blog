import styled from '@emotion/styled'

import { SM, MD, LG } from '../../../utils/constants'

export const TitleWrapper = styled.a`
    text-decoration: none;
    display: inline-block;
    ${({ theme }) => `
        color: ${theme.mainFontColor};
    `}
`

export const TitleStyled = styled.h2`
    font-family: 'Open Sans Extra Bold', sans-serif;
    margin-bottom: 30px;
    ${({ size }) => {
        switch (size) {
            case LG:
                return `font-size: 60px;`
            case MD:
                return `font-size: 40px;`
            case SM:
                return `font-size: 30px;`
            default:
                return `font-size: 30px;`
        }
    }}
`
