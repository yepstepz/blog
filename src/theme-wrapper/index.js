import React, { useState } from 'react'
import { ThemeProvider } from 'emotion-theming'

import { ThemeContext } from '../components/context/theme-wrapper.context'

import { themeColors, LIGHT_THEME } from './theme-colors'

export const ThemeWrapper = ({ children }) => {
    const [themeColor, setThemeColor] = useState(LIGHT_THEME)

    const handleThemeChange = (theme) => {
        setThemeColor(theme)
    }

    return (
        <ThemeContext.Provider
            value={{
                handleThemeChange,
                themeColor
            }}
        >
            <ThemeProvider theme={themeColors[themeColor] || themeColor[LIGHT_THEME]}>
                { children }
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
