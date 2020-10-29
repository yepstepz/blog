import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const TagStyled = styled(Link)`
    font-family: 'Open Sans Semi Bold', sans-serif;
    font-size: 15px;
    text-decoration: none;
    ${({ theme }) => `
        color: ${theme.mainFontColor};
    `}
`
