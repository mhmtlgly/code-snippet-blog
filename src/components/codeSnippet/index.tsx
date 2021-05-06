import React, { useEffect } from "react"
import MarkdownIt from "markdown-it"
import markdownItAnchor from "markdown-it-anchor"
import Prism from "prismjs"

const md = new MarkdownIt({
  html: true,
  linkify: false,
}).use(markdownItAnchor)

export const CodeSnippet = ({ markdown, ...props }) => {
  useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <div dangerouslySetInnerHTML={{ __html: md.render(markdown) }} {...props} />
  )
}
