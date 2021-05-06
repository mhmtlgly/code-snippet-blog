import React from "react"
import { SwipeableDrawer, IconButton } from "@material-ui/core"
import { MdClose } from "react-icons/md"

import { useDrawerStyles } from "./styles"

export const Drawer = ({ isOpen, onClose, onOpen, children, ...props }) => {
  const classes = useDrawerStyles(props)

  return (
    <SwipeableDrawer
      className={classes.root}
      open={isOpen}
      onClose={onClose}
      onOpen={onOpen}
      anchor="right"
    >
      <IconButton id="closeDrawer" onClick={onClose}>
        <MdClose />
      </IconButton>
      {children}
    </SwipeableDrawer>
  )
}
