import Typography from "typography"
import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants"

const typography = new Typography({
    baseFontSize: "24px",
    baseLineHeight: 1.67,
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
    overrideStyles: ({ rhythm }) => ({
        p: {
            width: "653px"
        },
        h2: {
            marginBottom: rhythm(2),
            marginTop: rhythm(2.8),
            width: '80%'
        }
    })
})

export default typography
