import * as React from "react"
import { Fragment } from "react"
import { graphql, Link } from "gatsby"
import { createStyles, Tooltip, useMediaQuery } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"

import { Layout, CodeSnippet } from "../components"

const useStyles = makeStyles(theme => ({
  tooltipPlacementBottom: {
    margin: "4px 0",
    [theme.breakpoints.up("sm")]: {
      margin: "4px 0",
    },
  },
}))

export const singleBlogPostQuery = graphql`
  query singleBlogPostQuery($slug: String!) {
    contentfulCodeSnippet(codeSnippetSlug: { eq: $slug }) {
      codeSnippetTitle
      codeSnippetBody {
        childMarkdownRemark {
          rawMarkdownBody
          headings {
            value
          }
        }
      }
      codeSnippetCategory {
        categorySlug
        categoryTitle
        categoryIcon {
          file {
            url
          }
        }
      }
    }
  }
`

const fixHeadings = (text: String) => {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/\//g, "%2F")
    .replace(/\#/g, "%23")
    .replace(/\:/g, "%3A")
    .replace(/\&/g, "%26")
}

const singleBlogpost = ({ data }) => {
  const theme = useTheme()
  const classes = useStyles()
  const screenSizeMd = useMediaQuery(theme.breakpoints.down("sm"))
  console.log(screenSizeMd)
  return (
    <Layout>
      <article style={{ maxWidth: 800, margin: "auto" }}>
        <h2>{data.contentfulCodeSnippet.codeSnippetTitle}</h2>
        <div
          style={{
            display: "flex",
            gap: 15,
            marginBottom: 15,
            justifyContent: screenSizeMd ? "center" : "unset",
          }}
        >
          {/* <h5>Categories</h5> */}
          {data.contentfulCodeSnippet.codeSnippetCategory.map(category => {
            return (
              <Tooltip
                arrow
                placement="bottom"
                classes={classes}
                key={category.categorySlug}
                title={category.categoryTitle}
                aria-label={category.categoryTitle}
              >
                <Link to={`/category/${category.categorySlug}`}>
                  <img
                    src={category.categoryIcon.file.url}
                    style={{ width: 35, height: 35 }}
                    alt=""
                  />
                </Link>
              </Tooltip>
            )
          })}
        </div>
        {data.contentfulCodeSnippet.codeSnippetBody.childMarkdownRemark.headings
          .length ? (
          <div
            style={{
              padding: "1px 10px 10px",
              backgroundColor: "#aa00ff26",
            }}
          >
            <h5>Table of Content</h5>
            <nav>
              <ul>
                {data.contentfulCodeSnippet.codeSnippetBody.childMarkdownRemark.headings.map(
                  (heading, index) => {
                    return (
                      <li key={heading.value}>
                        <a href={`#${fixHeadings(heading.value)}`}>
                          {`${index + 1}. ${heading.value}`}
                        </a>
                      </li>
                    )
                  }
                )}
              </ul>
            </nav>
          </div>
        ) : null}
        <CodeSnippet
          markdown={
            data.contentfulCodeSnippet.codeSnippetBody.childMarkdownRemark
              .rawMarkdownBody
          }
        />
      </article>
    </Layout>
  )
}

export default singleBlogpost
