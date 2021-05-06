import * as React from "react"
import { Fragment, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { Layout } from "../components"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexPageCategoryTypeQuery {
      allContentfulCategoryType(
        sort: { order: ASC, fields: categoryTypeSlug }
      ) {
        nodes {
          categoryTypeTitle
          category {
            categoryTitle
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
  `)

  return (
    <Layout>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(265px,1fr))",
        }}
      >
        {data.allContentfulCategoryType.nodes.map(node => {
          return (
            <div
              key={node.categoryTypeTitle}
              style={{
                padding: 10,
                boxShadow: "0 0 3px",
              }}
            >
              <h2>{node.categoryTypeTitle}</h2>
              <div style={{ display: "flex", gap: 10, overflowX: "auto" }}>
                {node.category?.map(category => (
                  <img
                    key={category.categoryIcon.contentful_id}
                    src={category.categoryIcon.file.url}
                    style={{
                      height: 75,
                      width: 75,
                      boxShadow: "0 0 10px #0000004d",
                      padding: 10,
                      objectFit: "contain",
                    }}
                    alt=""
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
