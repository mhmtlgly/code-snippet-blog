import * as React from "react"
import { Fragment, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Button, IconButton, Tooltip, Box } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { MdAddBox, MdReceipt, MdTagFaces, MdCode } from "react-icons/md"
import { AiOutlineIdcard } from "react-icons/ai"
import { BsPencilSquare } from "react-icons/bs"
import { IoPerson } from "react-icons/io5"
import { BiCodeAlt } from "react-icons/bi"

import sternenhimmel from "../images/sternenhimmel.jpg"
import { Layout } from "../components"
import { aboutMe } from "../data"

const useStyles = makeStyles(theme => ({
  root: {
    // background: `url(${sternenhimmel}) center / cover no-repeat`,
    height: "100vh",
    padding: "50px",
    position: "relative",
    "& h5": {
      position: "absolute",
      bottom: 0,
      left: 0,
    },
    "& q": { textAlign: "center", display: "block" },
  },
  imgContainer: {
    background: `url(${sternenhimmel}) center / cover no-repeat`,
    width: 150,
    height: 150,
    margin: "auto",
    borderRadius: "50%",
  },
  inner: {
    // background: "rgb(255 255 255 / 35%)",
    // boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    // backdropFilter: " blur( 0.0px )",
    // "-webkit-backdrop-filter": "blur( 0.0px )",
    // borderRadius: 0,
    // border: "1px solid rgba( 255, 255, 255, 0.18 )",
    // padding: 0,
    // position: "absolute",
    // bottom: 0,
    // top: 0,
    // left: 0,
    // right: 0,
    textAlign: "center",
    "& div": {
      display: "grid",
      gap: 10,
      gridTemplateColumns: " max-content",
      justifyContent: "center",
      [theme.breakpoints.up("sm")]: {
        display: "flex",
      },
    },
    "& .MuiButton-label": { justifyContent: "flex-start" },
  },
}))

const IndexPage = ({ data }) => {
  const classes = useStyles()

  return (
    <Layout>
      <Box className={classes.root}>
        <Box className={classes.inner}>
          <Box className={classes.imgContainer}></Box>
          <h1>mhmtlgly</h1>

          <h2>Self-Taught Frontend Developer</h2>
          <Box p={4}>
            <Button
              size="large"
              component={Link}
              to="/about"
              startIcon={<IoPerson />}
              variant="contained"
            >
              About me
            </Button>
            <Button
              size="large"
              component={Link}
              to="/projects"
              startIcon={<BiCodeAlt />}
              variant="contained"
            >
              Projects
            </Button>
            <Button
              size="large"
              component={Link}
              to="/blog"
              startIcon={<BsPencilSquare />}
              variant="contained"
            >
              Blog
            </Button>
          </Box>
        </Box>
        <q style={{ fontSize: 20 }}>
          Rock bottom will teach you lessons mountain tops never will
        </q>
      </Box>
    </Layout>
  )
}

export default IndexPage

// import * as React from "react"
// import { Fragment, useEffect } from "react"
// import { useStaticQuery, graphql, Link } from "gatsby"
// import { Button, IconButton, Tooltip } from "@material-ui/core"
// import { makeStyles, useTheme } from "@material-ui/core/styles"

// import { Layout } from "../components"

// const useStyles = makeStyles(theme => ({
//   button: {
//     "& .MuiButton-startIcon": {
//       marginLeft: 0,
//       marginRight: 0,
//     },
//   },
// }))

// export const query = graphql`
//   query IndexPageCategoryQuery {
//     allContentfulCategory {
//       nodes {
//         id
//         categoryTitle
//         categorySlug
//         categoryIcon {
//           file {
//             url
//           }
//         }
//       }
//     }
//   }
// `

// const IndexPage = ({ data }) => {
//   const classes = useStyles()

//   return (
//     <Layout>
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: 10,
//         }}
//       >
//         {data.allContentfulCategory.nodes
//           .sort((a, b) => a.categoryTitle.localeCompare(b.categoryTitle))
//           .map(node => {
//             return (
//               // <Tooltip key={node.id} title={node.categoryTitle}>
//               //   <IconButton
//               //     component={Link}
//               //     to={`category/${node.categorySlug}`}
//               //   >
//               //     <img
//               //       src={node.categoryIcon.file.url}
//               //       style={{
//               //         height: 35,
//               //         width: 35,
//               //         objectFit:
//               //           node.categoryTitle === "Axios" ? "cover" : "contain",
//               //       }}
//               //       alt=""
//               //     />
//               //   </IconButton>
//               // </Tooltip>

//               <Tooltip key={node.id} arrow title={node.categoryTitle}>
//                 <Button
//                   component={Link}
//                   to={`/blog/category/${node.categorySlug}`}
//                   className={classes.button}
//                   // variant="outlined"
//                   variant="contained"
//                   startIcon={
//                     <img
//                       src={node.categoryIcon.file.url}
//                       style={{
//                         height: 35,
//                         width: 35,
//                         objectFit:
//                           node.categoryTitle === "Axios" ? "cover" : "contain",
//                       }}
//                       alt={node.categoryTitle}
//                     />
//                   }
//                 ></Button>
//               </Tooltip>
//             )
//           })}
//       </div>
//     </Layout>
//   )
// }

// export default IndexPage
