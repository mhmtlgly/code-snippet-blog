import * as React from "react"
import { Fragment, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { Layout, CodeSnippet } from "../../components"

const CategoriesPage = () => {
  const data = useStaticQuery(graphql`
    query AllCategoriesQuery {
      allContentfulCategory {
        nodes {
          categorySlug
          categoryIcon {
            file {
              url
            }
          }
        }
      }
    }
  `)

  const styles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, 75px)",
    gap: 10,
  }

  return (
    <Layout>
      <div style={styles}>
        {data.allContentfulCategory.nodes.map(category => (
          <Link
            key={category.categorySlug}
            to={`/blog/category/${category.categorySlug}`}
            style={{
              display: "flex",
              alignItems: "center",
              width: 75,
              height: 75,
              boxShadow: "0 0 3px",
              padding: 10,
            }}
          >
            <img
              height={"100%"}
              width={"100%"}
              src={category.categoryIcon.file.url}
              alt=""
            />
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default CategoriesPage
