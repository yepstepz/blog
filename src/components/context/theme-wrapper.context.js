import React from "react"

import { LIGHT_THEME } from '../../theme-wrapper/theme-colors'

export const ThemeContext = React.createContext({
    handleThemeChange: () => {},
    themeColor: LIGHT_THEME
})
