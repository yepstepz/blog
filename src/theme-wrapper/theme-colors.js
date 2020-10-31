export const LIGHT_THEME = 'light-theme'
export const DARK_THEME = 'dark-theme'

export const colors = {
    pink: '#DE4698',
    white: '#ffffff',
    black: '#000000',
    green: '#25CEB0'
}

export const themeColors = {
    [LIGHT_THEME]: {
        background: colors.white,
        mainFontColor: colors.black,
        headerDivider: colors.black,
        buttonColor: colors.black,
        buttonOnHover: colors.green,
        buttonPodcastsOnHover: colors.pink,
        buttonIconColor: colors.white
    },
    [DARK_THEME]: {
        background: colors.black,
        mainFontColor: colors.white,
        headerDivider: colors.white,
        buttonColor: colors.white,
        buttonOnHover: colors.green,
        buttonPodcastsOnHover: colors.pink,
        buttonIconColor: colors.black
    }
}
