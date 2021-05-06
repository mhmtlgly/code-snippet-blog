exports.createPages = async ({
  actions: { createPage },
  graphql,
  reporter,
}) => {
  const result = await graphql(`
    query createPagesQuery {
      allContentfulCodeSnippet {
        nodes {
          codeSnippetSlug
        }
      }
      allContentfulCategory {
        nodes {
          categorySlug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("failed to create posts", result.errors)
  }

  //- SINGLE POST

  result.data.allContentfulCodeSnippet.nodes.forEach(node => {
    createPage({
      path: `/blog/${node.codeSnippetSlug}`,
      component: require.resolve("./src/templates/singleBlogpost.tsx"),
      context: {
        slug: node.codeSnippetSlug,
      },
    })
  })

  //- SINGLE CATEGORY

  result.data.allContentfulCategory.nodes.forEach(node => {
    createPage({
      path: `/category/${node.categorySlug}`,
      component: require.resolve("./src/templates/singleCategory.tsx"),
      context: {
        slug: node.categorySlug,
      },
    })
  })
}
