import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import {
  Button,
  Typography,
  Tooltip,
  IconButton,
  Divider,
} from "@material-ui/core"
import { AiOutlineGithub } from "react-icons/ai"
import { GoLinkExternal } from "react-icons/go"
import { HiOutlinePencilAlt, HiOutlineCode } from "react-icons/hi"
import { makeStyles, useTheme } from "@material-ui/core/styles"

import { Layout } from "../components"

export const query = graphql`
  query ProjectsPageQuery {
    allContentfulProject {
      nodes {
        id
        projectSlug
        projectTitle
        websiteLink
        repositoryLink
        projectCategory {
          id
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
  }
`

const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    gap: 10,
    margin: "0 10px",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
    "& img": {
      height: "100%",
      width: "100%",
      objectFit: "contain",
    },
  },
  wrapper: {
    padding: 10,
    boxShadow: "0 0 3px",
    display: "grid",
    gridTemplateRows: "1fr 1fr",
  },
  iconWrapper: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    "& a": { display: "flex", height: 50, width: 50 },
  },
  buttonWrapper: {
    display: "flex",
    gap: 10,
    marginTop: 20,
    [theme.breakpoints.down("sm")]: {
      display: "block",
      "& a": {
        display: "block",
      },
    },
  },
}))

const ProjectsPage = ({ data }) => {
  const classes = useStyles()
  return (
    <Layout>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        PROJECTS
      </Typography>
      <div className={classes.root}>
        {data.allContentfulProject.nodes.map(node => {
          return (
            <div key={node.id} className={classes.wrapper}>
              <Link to={`/blog/${node.projectSlug}`}>
                <h2>{node.projectTitle}</h2>
              </Link>
              <div>
                {node.projectCategory.map(category => {
                  return (
                    <Tooltip
                      key={category.id}
                      arrow
                      title={category.categoryTitle}
                    >
                      <IconButton>
                        <Link
                          key={category.id}
                          to={`/blog/category/${category.categorySlug}`}
                          style={{ display: "flex" }}
                        >
                          <img
                            src={category.categoryIcon.file.url}
                            style={{
                              height: 35,
                              width: 35,
                              objectFit: "contain",
                            }}
                            alt=""
                          />
                        </Link>
                      </IconButton>
                    </Tooltip>
                  )
                })}
              </div>
              <div className={classes.buttonWrapper}>
                <Button
                  component={"a"}
                  rel="noopener noreferrer"
                  target="_blank"
                  href={node.repositoryLink}
                  variant="outlined"
                  // color="primary"
                  endIcon={<AiOutlineGithub />}
                >
                  Repository
                </Button>
                <Button
                  component={"a"}
                  rel="noopener noreferrer"
                  target="_blank"
                  href={node.websiteLink}
                  variant="outlined"
                  // color="primary"
                  endIcon={<GoLinkExternal />}
                >
                  Demo
                </Button>
                <Button
                  component={Link}
                  to={`/blog/${node.projectSlug}`}
                  variant="outlined"
                  // color="primary"
                  endIcon={<HiOutlineCode />}
                >
                  Code
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default ProjectsPage
