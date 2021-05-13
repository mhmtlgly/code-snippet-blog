import React, { useEffect } from "react"
import MarkdownIt from "markdown-it"
import markdownItAnchor from "markdown-it-anchor"
import Prism from "prismjs"
import { Box } from "@material-ui/core"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& img": { maxWidth: "100%" },
    },
  })
)

const md = new MarkdownIt({
  html: true,
  linkify: false,
}).use(markdownItAnchor)

export const CodeSnippet = ({ markdown, ...props }) => {
  const classes = useStyles()
  useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <Box
      className={classes.root}
      dangerouslySetInnerHTML={{ __html: md.render(markdown) }}
      {...props}
    />
  )
}
