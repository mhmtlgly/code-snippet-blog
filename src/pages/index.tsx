import * as React from "react"
import { Fragment, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { makeStyles, useTheme } from "@material-ui/core/styles"

import { Layout } from "../components"

const useStyles = makeStyles(theme => ({
  categoryWrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, 75px)",
    justifyItems: "center",
    gap: 10,
    // overflowX: "auto",
    padding: "10px 0",
    "& a": {
      padding: 10,
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
  },
  img: {
    height: 75,
    width: 75,
    boxShadow: "0 0 10px #0000004d",
    padding: 10,
    objectFit: "contain",
  },
}))

export const query = graphql`
  query IndexPageCategoryTypeQuery {
    allContentfulCategoryType(sort: { order: ASC, fields: categoryTypeSlug }) {
      nodes {
        categoryTypeTitle
        category {
          categoryTitle
          categorySlug
          categoryIcon {
            contentful_id
            file {
              url
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const classes = useStyles()

  return (
    <Layout>
      {data.allContentfulCategoryType.nodes
        .filter(node => {
          return node.categoryTypeTitle !== "Miscellaneous"
        })
        .map(node => {
          return (
            <div
              key={node.categoryTypeTitle}
              style={{
                padding: 10,
                margin: 10,
                boxShadow: "0 0 3px",
              }}
            >
              <h2>{node.categoryTypeTitle}</h2>
              <div className={classes.categoryWrapper}>
                {node.category?.map(category => (
                  <Link
                    to={`category/${category.categorySlug}`}
                    key={category.categoryIcon.contentful_id}
                  >
                    <img
                      src={category.categoryIcon.file.url}
                      className={classes.img}
                      alt={`category/${category.categorySlug}`}
                    />
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
    </Layout>
  )
}

export default IndexPage
