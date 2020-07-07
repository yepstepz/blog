import Typography from "typography"

const typography = new Typography({
    baseFontSize: "24px",
    headerFontFamily: [
        "Open Sans",
        "Arial",
        "sans-serif",
    ],
    bodyFontFamily: ["Playfair Display", "serif"],
    googleFonts: [
        {
            name: "Playfair Display",
            styles: ["400"],
        },
        {
            name: "Open Sans",
            styles: ["400i", "600", "600i", "700"],
        },
    ],
    bodyColor: "#2d2d2d",
    headerWeight: 700,
    bodyWeight: 400,
    boldWeight: 700,
    scaleRatio: 2.4,
    overrideThemeStyles: () =>({
        'p': {
            'line-height': '1.6',
            'letter-spacing': '0.7'
        },
        'h1': {
            'margin-top': '0.67em'
        }
    })

})

export default typography
