import styled from '@emotion/styled'

import { XS, SM, MD, LG } from '../../../utils/constants'

export const TitleWrapper = styled.a`
    text-decoration: none;
    display: inline-block;
    ${({ theme }) => `
        color: ${theme.mainFontColor};
    `}
`

export const TitleStyled = styled.h2`
    font-family: 'Open Sans Extra Bold', sans-serif;
    ${({ size, hideShortText }) => {
        switch (size) {
            case LG:
                return `
                    font-size: 60px;
                    margin-bottom: 30px;
                `
            case MD:
                return `
                    font-size: 40px;
                    margin-bottom: 30px;
                `
            case SM:
                return `
                    font-size: 30px;
                    margin-bottom: ${hideShortText ? '40px' : '30px'};
                `
            case XS:
                return `
                    font-size: 20px;
                    margin-bottom: 0;
                `
            default:
                return `font-size: 30px;`
        }
    }}
`
