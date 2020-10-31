import React from 'react'

import { normalizePath } from '../../utils/get-url-path'

import { Logo, Menu, Item, ItemLinkStyled, HeaderWrapper } from './header.styles'

export const Header = () => {
    return (
        <header>
            <HeaderWrapper>
                <Logo to={normalizePath('/')}>Work'n'Talk</Logo>

                <Menu>
                    <Item><ItemLinkStyled to={normalizePath('/')} active>Главная</ItemLinkStyled></Item>
                    <Item><ItemLinkStyled to={normalizePath('/posts')}>Блог</ItemLinkStyled></Item>
                    <Item><ItemLinkStyled to={normalizePath('/podcasts')}>Подкасты</ItemLinkStyled></Item>
                </Menu>
            </HeaderWrapper>
        </header>
    )
}
