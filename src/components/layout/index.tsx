import * as React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Header, Footer } from ".."

const useStyles = makeStyles(theme => {
  return {
    root: {
      height: "100vh",
      display: "grid",
      gridTemplateRows: "auto 1fr auto",
      gridTemplateColumns: "100%",
    },
  }
})

export const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
