import * as React from "react"
import { Fragment } from "react"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"

import { theme } from "./src/theme"

export const wrapRootElement = ({ element }) => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {element}
      </ThemeProvider>
    </Fragment>
  )
}
