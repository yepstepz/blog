import React from 'react'

import { Logo, Menu, Item, ItemLink, HeaderWrapper } from './header.styles'

export const Header = () => {
    return (
        <header>
            <HeaderWrapper>
                <Logo to='/'>Work'n'Talk</Logo>

                <Menu>
                    <Item><ItemLink to='/' active>Главная</ItemLink></Item>
                    <Item><ItemLink to='/blog'>Блог</ItemLink></Item>
                    <Item><ItemLink to='/podcasts'>Подкасты</ItemLink></Item>
                </Menu>
            </HeaderWrapper>
        </header>
    )
}
