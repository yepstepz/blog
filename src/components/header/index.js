import React from 'react'

import { normalizePath } from '../../utils/get-url-path'

import { Logo, Menu, Item, ItemLink, HeaderWrapper } from './header.styles'

export const Header = () => {
    return (
        <header>
            <HeaderWrapper>
                <Logo to={normalizePath('/')}>Work'n'Talk</Logo>

                <Menu>
                    <Item><ItemLink to={normalizePath('/')} active>Главная</ItemLink></Item>
                    <Item><ItemLink to={normalizePath('/posts')}>Блог</ItemLink></Item>
                    <Item><ItemLink to={normalizePath('/podcasts')}>Подкасты</ItemLink></Item>
                </Menu>
            </HeaderWrapper>
        </header>
    )
}
