/* eslint-disable */

import React from "react"
import { makeStyles, useTheme, Theme } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"

import { Copyright } from "./copyright"

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}))

export const Footer = props => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Box
      {...props}
      component="footer"
      className={classes.root}
      p={{ xs: 0.5, sm: 2 }}
      bgcolor="rgb(0 0 0 / 5%)"
    >
      <h2>FOOTER</h2>
      <Copyright />
    </Box>
  )
}
