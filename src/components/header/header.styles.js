import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { divider } from '../partials/common.styles'

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    margin-bottom: 110px;
    ${({ theme }) => `
        ${divider(theme)};
    `}
`

export const Logo = styled(Link)`
    font-family: 'Open Sans Bold', sans-serif;
    text-decoration: none;
    font-size: 20px;
    ${({ theme }) => `
        color: ${theme.mainFontColor};
    `}
`

export const Menu = styled.ul`
    display: flex;
    list-style: none;
`

export const Item = styled.li`
    &:not(:last-child) {
        margin-right: 38px;
    }
`

export const ItemLinkStyled = styled(Link)`
    display: inline-block;
    padding: 27px 0 17px 0;
    text-decoration: none;
    font-family: 'Open Sans Semi Bold', sans-serif;
    font-size: 15px;
    line-height: 1;
    ${({ theme }) => `
        color: ${theme.mainFontColor};
        border-bottom: 6px solid transparent;
    `}
    
    ${({ active, theme }) => active && `
        border-color: ${theme.mainFontColor};
    `}
`
