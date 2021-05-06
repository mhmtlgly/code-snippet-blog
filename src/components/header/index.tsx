import React, { Fragment, useState } from "react"
import { Box, AppBar, Toolbar, IconButton, Badge } from "@material-ui/core"
import { useTheme } from "@material-ui/core/styles"
import { AiOutlineMenu } from "react-icons/ai"
import {
  RiFacebookLine,
  RiTwitterLine,
  RiInstagramLine,
  RiBarChartHorizontalFill,
  RiCreativeCommonsNdLine,
  RiMenu3Line,
} from "react-icons/ri"

import { useHeaderStyles } from "./styles"
import { Logo } from "./logo"
import { Drawer } from "./drawer"
import { MainNavigation } from "./mainNavigation"

export const Header = props => {
  const classes = useHeaderStyles()
  const theme = useTheme()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <AppBar className={classes.root} position="relative" {...props}>
      <Toolbar>
        <Logo fill="white" />
        <IconButton onClick={() => setIsDrawerOpen(true)}>
          <RiMenu3Line />
        </IconButton>
      </Toolbar>
      <Drawer
        isOpen={isDrawerOpen}
        onOpen={() => setIsDrawerOpen(true)}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Logo
          color={theme.palette.primary.main}
          fontSize={25}
          fontWeight={600}
          mx="auto"
        />
        <MainNavigation />
      </Drawer>
    </AppBar>
  )
}
