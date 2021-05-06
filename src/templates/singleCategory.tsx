import * as React from "react"
import { Fragment, useState, useRef, useEffect } from "react"
import { graphql, Link } from "gatsby"
import {
  Badge,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Button,
} from "@material-ui/core"
import { MdExpandMore } from "react-icons/md"

import { Layout, CodeSnippet } from "../components"

export const singleCategoryQuery = graphql`
  query singleCategoryQuery($slug: String!) {
    contentfulCategory(categorySlug: { eq: $slug }) {
      categorySlug
      categoryTitle
      categoryIcon {
        file {
          url
        }
      }
      codesnippet {
        codeSnippetSlug
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
          categoryIcon {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulCategory(filter: { categorySlug: { eq: $slug } }) {
      nodes {
        codesnippet {
          id
        }
      }
    }
  }
`

const MarkdownExpand = ({ children }) => {
  const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow(prev => !prev)
  }
  return (
    <Fragment>
      <CardActions>
        {/* <IconButton onClick={handleShow}>
          <MdExpandMore />
        </IconButton> */}
        <Button
          onClick={handleShow}
          variant="contained"
          color="primary"
          endIcon={<MdExpandMore />}
        >
          Read more
        </Button>
      </CardActions>
      <Collapse in={show}>{children}</Collapse>
    </Fragment>
  )
}

const singleCategory = ({ data, pageContext }) => {
  return (
    <Layout>
      <article style={{ maxWidth: 800, margin: "auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
          <h2 style={{ lineHeight: 1 }}>
            CATEGORY: {data.contentfulCategory.categoryTitle.toUpperCase()}
          </h2>
          <img
            src={data.contentfulCategory.categoryIcon.file.url}
            style={{ width: 35, height: 35 }}
            alt=""
          />
          <div
            style={{
              height: 35,
              display: "flex",
              alignItems: "center",
              padding: 5,
              background: "#aa00ff26",
            }}
          >
            {data.allContentfulCategory.nodes.map(node => {
              return node.codesnippet && node.codesnippet.length === 1
                ? `${node.codesnippet.length} Post`
                : node.codesnippet && node.codesnippet.length > 1
                ? `${node.codesnippet.length} Posts`
                : `No Posts`
            })}
          </div>
        </div>
        {data.contentfulCategory.codesnippet ? (
          data.contentfulCategory.codesnippet.map(codesnippet => {
            return (
              <div
                style={{
                  padding: 10,
                  boxShadow: "0 0 3px",
                  margin: "0 10px 10px",
                }}
                key={codesnippet.codeSnippetSlug}
              >
                <h2>
                  <Link to={`/blog/${codesnippet.codeSnippetSlug}`}>
                    {codesnippet.codeSnippetTitle}
                  </Link>
                </h2>
                <div style={{ display: "flex", gap: 10 }}>
                  {codesnippet.codeSnippetCategory.map(category => {
                    return (
                      <Link
                        to={`/category/${category.categorySlug}`}
                        key={category.categorySlug}
                      >
                        <img
                          src={category.categoryIcon.file.url}
                          style={{ width: 35, height: 35 }}
                          alt=""
                        />
                      </Link>
                    )
                  })}
                </div>
                <MarkdownExpand>
                  <CodeSnippet
                    markdown={
                      codesnippet.codeSnippetBody.childMarkdownRemark
                        .rawMarkdownBody
                    }
                  />
                </MarkdownExpand>
              </div>
            )
          })
        ) : (
          <h2>No Posts in this Category</h2>
        )}
      </article>
    </Layout>
  )
}

export default singleCategory
