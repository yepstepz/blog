import React, { useContext } from 'react'

import { normalizePath } from '../../utils/get-url-path'
import { ThemeContext } from '../context/theme-wrapper.context'
import { LIGHT_THEME, DARK_THEME } from '../../theme-wrapper/theme-colors'

import { Logo, Menu, HeaderWrapper, ThemeTogglerStyled } from './header.styles'
import { ItemLink } from './item-link'

export const Header = () => {

    const {
        themeColor,
        handleThemeChange
    } = useContext(ThemeContext)

    const handleToggleTheme = () => {
        if (themeColor === LIGHT_THEME) {
            return handleThemeChange(DARK_THEME)
        }
        return handleThemeChange(LIGHT_THEME)
    }

    return (
        <header>
            <HeaderWrapper>
                <Logo to={normalizePath('/')}>Work'n'Talk</Logo>
                <Menu>
                    <ItemLink path={normalizePath('/')} name="Главная" />
                    <ItemLink path={normalizePath('/posts')} name="Блог" />
                    <ItemLink path={normalizePath('/podcasts')} name="Подкасты" />
                </Menu>
                <ThemeTogglerStyled onClick={handleToggleTheme} />
            </HeaderWrapper>
        </header>
    )
}
