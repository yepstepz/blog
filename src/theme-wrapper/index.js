import React from 'react'
import { ThemeProvider } from 'emotion-theming'

import { themeColors, LIGHT_THEME } from './theme-colors'

export const ThemeWrapper = ({ children, theme }) => {
    return (
        <ThemeProvider theme={themeColors[LIGHT_THEME]}>
            { children }
        </ThemeProvider>
    )
}
