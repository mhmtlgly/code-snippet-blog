import * as React from "react"
import { useEffect, useState } from "react"
import { Link } from "gatsby"
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Avatar,
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
} from "@material-ui/core"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import { AiOutlineGithub } from "react-icons/ai"
import { GoLinkExternal } from "react-icons/go"
import { HiOutlinePencilAlt } from "react-icons/hi"
import { MdExpandMore, MdFace } from "react-icons/md"

import { Layout } from "../components"

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       maxWidth: 600,
//       margin: "auto",
//       "& svg": { height: 40, width: 40 },
//     },
//     media: {
//       height: 0,
//       paddingTop: "56.25%", // 16:9
//     },
//     expand: {
//       transform: "rotate(0deg)",
//       marginLeft: "auto",
//       transition: theme.transitions.create("transform", {
//         duration: theme.transitions.duration.shortest,
//       }),
//     },
//     expandOpen: {
//       transform: "rotate(180deg)",
//     },
//     avatar: {
//       backgroundColor: "red",
//     },
//   })
// )

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& p": {
        margin: 0,
      },
    },
  })
)

const AboutPage = () => {
  const classes = useStyles()
  // const [dateNow, setDateNow] = useState<number>(Date.now())

  // const date = Date.UTC(1985, 3, 9, 4, 35)

  // useEffect(() => {
  //   setInterval(() => {
  //     setDateNow(Date.now())
  //   }, 1000)
  // }, [dateNow])

  // useEffect(() => {
  //   setInterval(() => {
  //     setDateNow(Date.now())
  //   }, 60000)
  // })

  return (
    <Layout>
      <h2>hello</h2>
    </Layout>
  )
}

export default AboutPage
