import * as React from "react"
import { Fragment } from "react"
import { makeStyles } from "@material-ui/core/styles"

export const RootElement = ({ children }) => {
  console.log("hello from root")
  return <Fragment>{children}</Fragment>
}
