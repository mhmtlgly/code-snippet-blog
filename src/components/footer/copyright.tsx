import React from "react"

import { Box } from "@material-ui/core"

export const Copyright = () => {
  const date = new Date()
  return <Box>&copy; copyright {date.getFullYear()}</Box>
}
