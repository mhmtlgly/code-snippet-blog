import * as React from "react"
import { Fragment, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Button } from "@material-ui/core"

import { Layout, CodeSnippet } from "../components"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query BlogPageQuery {
      allContentfulCodeSnippet {
        nodes {
          id
          codeSnippetSlug
          codeSnippetTitle
          codeSnippetCategory {
            id
            categorySlug
            categoryTitle
            categoryIcon {
              file {
                url
              }
            }
          }
          codeSnippetBody {
            id
            childMarkdownRemark {
              rawMarkdownBody
              headings {
                value
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      {data.allContentfulCodeSnippet.nodes.map(node => {
        return (
          <article
            style={{
              padding: 10,
              boxShadow: "0 0 3px",
              margin: "10px 10px 20px",
              maxWidth: 800,
            }}
            key={node.codeSnippetTitle}
          >
            <h2>
              <Link to={`/blog/${node.codeSnippetSlug}`}>
                {node.codeSnippetTitle}
              </Link>
            </h2>
            <div style={{ display: "flex", gap: 10, marginBottom: 15 }}>
              {node.codeSnippetCategory.map(category => {
                return (
                  <Fragment key={category.categorySlug}>
                    <Link
                      to={`/category/${category.categorySlug}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: 35,
                        height: 35,
                      }}
                    >
                      <img
                        height={"100%"}
                        width={"100%"}
                        src={category.categoryIcon.file.url}
                        alt=""
                      />
                    </Link>
                  </Fragment>
                )
              })}
            </div>
            {node.codeSnippetBody.childMarkdownRemark.headings.length ? (
              <div
                style={{
                  padding: 10,
                  boxShadow: "0 0 3px",
                  backgroundColor: "#aa00ff26",
                  marginBottom: 15,
                }}
              >
                <h2>Table of Content</h2>
                <nav>
                  <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    {node.codeSnippetBody.childMarkdownRemark.headings.map(
                      heading => {
                        return (
                          <li key={heading.value}>
                            <Link
                              to={`/blog/${
                                node.codeSnippetSlug
                              }#${heading.value
                                .toLowerCase()
                                .replace(/ /g, "-")
                                .replace(/\//g, "%2F")
                                .replace(/\#/g, "%23")
                                .replace(/\:/g, "%3A")
                                .replace(/\&/g, "%26")}`}
                            >
                              {heading.value}
                            </Link>
                          </li>
                        )
                      }
                    )}
                  </ul>
                </nav>
              </div>
            ) : null}
            <div>
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to={`/blog/${node.codeSnippetSlug}`}
              >
                read more
              </Button>
            </div>
            {/* <CodeSnippet
              markdown={
                node.codeSnippetBody.childMarkdownRemark.rawMarkdownBody
              }
            /> */}
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogPage
