import { createMuiTheme } from "@material-ui/core/styles"
import { blue, green } from "@material-ui/core/colors"

const theme = createMuiTheme({
    palette: {
        primary: {
            // main: grey[500],
            main: blue[500],
        },
        secondary: {
            main: green[500],
        },
    },
})

// Note, can't import custom color from scss file, has to be imported from the material ui file
export default theme
