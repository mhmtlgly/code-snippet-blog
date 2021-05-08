import React from "react"
import { makeStyles, useTheme, Theme } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"
import gatsbyLogo from "../../images/gatsby-icon.svg"
import contentfulLogo from "../../images/contentful-icon.svg"
import materialUiLogo from "../../images/material-ui-icon.svg"
import netlifyLogo from "../../images/netlify-blue-icon.svg"
import reduxLogo from "../../images/redux-icon.svg"
import reactLogo from "../../images/react-js.svg"

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
      <p>This Website is powered by: </p>
      <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
        <img src={reactLogo} style={{ width: 50, height: 50 }} alt="" />
        <img src={reduxLogo} style={{ width: 50, height: 50 }} alt="" />
        <img src={gatsbyLogo} style={{ width: 50, height: 50 }} alt="" />
        <img src={materialUiLogo} style={{ width: 50, height: 50 }} alt="" />
        <img src={contentfulLogo} style={{ width: 50, height: 50 }} alt="" />
        <img src={netlifyLogo} style={{ width: 50, height: 50 }} alt="" />
      </div>
      <Copyright />
    </Box>
  )
}
