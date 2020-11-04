import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { divider } from '../partials/common.styles'
import { TABLET_WIDTH, MAX_TABLET_MEDIA } from '../../utils/constants'

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    margin-bottom: 55px;
    position: relative;
    min-height: 64px;
    ${({ theme }) => `
        ${divider(theme)};
    `}
    ${MAX_TABLET_MEDIA} {
      margin-bottom: 80px;
    }
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
    margin-left: auto;
    margin-right: 28px;
    
    ${MAX_TABLET_MEDIA} {
        position: absolute;
        top: 100%;
        padding: 0;
    }
`

export const ItemWrapperStyled = styled.li`
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

export const ThemeTogglerStyled = styled.button`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    padding: 0;
    border: 0;
    ${({ theme }) => `
        background: ${theme.mainFontColor};
    `}
`
