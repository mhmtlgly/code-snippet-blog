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
      <h1>Lebenslauf</h1>
      <Box className={classes.root} px={3}>
        <h3>Meta Daten</h3>
        <Box display="grid" gridTemplateColumns="auto 1fr" gridGap={10}>
          <p>Name:</p>
          <p>Mehmet Ali Gülay</p>
          <p>Geburtstag:</p>
          <p>09.04.1985</p>
          <p>Geburtort:</p>
          <p>Castrop-Rauxel</p>
          <p>Persönlichkeitstyp:</p>
          <p>INFJ</p>
        </Box>
        <h3>Sprachkenntnisse</h3>
        <Box display="grid" gridTemplateColumns="auto 1fr" gridGap={10}>
          <p>Deutsch:</p>
          <p>Muttersprache</p>
          <p>Türkisch:</p>
          <p>Muttersprache</p>
          <p>Englisch:</p>
          <p>B2 - C1 Level</p>
        </Box>
        <h3>Soft Skills</h3>
        <Box display="grid" gridTemplateColumns="auto 1fr" gridGap={10}>
          <p>Autodidact</p>
          <p>
            Communication: I worked for a total 3 years in customer service and
            had more than 50 calls a day.
          </p>
        </Box>
        <h3>Schulbildung</h3>
        <Box display="grid" gridTemplateColumns="auto 1fr" gridGap={10}>
          <p>Höchster Schulabschluss:</p>
          <p>Fachhochschulreife</p>
        </Box>
        <h3>Beruflicher Werdegang</h3>
        <Box display="grid" gridTemplateColumns="auto 1fr" gridGap={10}>
          <p>10/2004 – 01/2006</p>
          <p>
            IKEA Deutschland GmbH & Co. KG Ausbildung zum Kaufmann im
            Einzelhandel (nicht abgeschlossen)
          </p>
          <p>06/2006 – 09/2007</p>
          <p>Deutsche Proventus AG (Dienstleistungen als Finanzberater)</p>
          <p>11/2007 – 03/2008</p>
          <p>
            Hundeshagen Personal-Service GmbH Call-Center-Agent bei arvato
            direct services Dortmund GmbH (Kundenbetreuung o2)
          </p>
          <p>05/2008 – 06/2008</p>
          <p>Wahl Personal-Service GmbH (Produktionshelfer)</p>
          <p>12/2008 – 01/2009</p>
          <p>
            Hundeshagen Personal-Service GmbH Call-Center-Agent bei arvato
            direct services Dortmund GmbH (Bestellannahme RTL-Shop)
          </p>
          <p>02/2009 – 08/2010</p>
          <p>
            TECTUM Customer Care Dortmund GmbH Call-Center-Agent
            (Kundenbetreuung T-Mobile)
          </p>
          <p>10/2011 – 02/2012</p>
          <p>
            ZeitArbeit Creativ Bochum GmbH Produktionhelfer bei Solar Scheuten
            GmbH
          </p>
          <p>09/2014 – 10/2014</p>
          <p>Zeit Arbeit arcus.plan AG Kommissionierer bei DPD</p>
          <p>10/2018 – 11/2018</p>
          <p>Hans Stork Betriebs-GmbH Sandstrahler</p>
          <h3>Anmerkung</h3>
        </Box>
        <Box display="grid" gridTemplateColumns="auto 1fr" gridGap={10}>
          <p>
            In den nicht aufgeführten Jahren war ich arbeitslos. 2 Monate nach
            der Kündigung beim letzten Arbeitgeber habe ich im Januar 2019
            angefangen mit der Hilfe von Online Tutorials HTML zu lernen.
          </p>
        </Box>
      </Box>

      {/* <h1>ABOUT PAGE</h1> */}

      {/* <Card className={classes.root}>
        <CardHeader
          avatar={<MdFace />}
          // title="About me"
          subheader="Mehmet Ali Gülay"
        />
        <CardContent>
          <p>PLEASE READ BEFORE YOU CONTINUE!</p>
          <p>
            I have been unemployed for many many years. I can't shine with a
            good resume, all I CAN DO is show my skills in these{" "}
            <Link to={"/projects"}>PROJECTS</Link> or these Code Examples in my{" "}
            <Link to={"/blog"}>Blog</Link>.
          </p>
          <p>
            If this is enough for you and you grant chances to people without
            degrees or experiences in a professional environment or even
            long-time unemployees, than i'm even more motivated to work and give
            my best for the company.
          </p>
          <Accordion>
            <AccordionSummary expandIcon={<MdExpandMore />}>
              <Typography>Meta Data</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <Typography>
                  <strong>Name</strong>: Mehmet Ali Gülay
                </Typography>
                <Typography>
                  <strong>Geburtstag</strong>: 09.04.1985
                </Typography>
                <Typography>
                  <strong>Geburtsort</strong>: Castrop-Rauxel
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<MdExpandMore />}>
              <Typography>Sprachkenntnisse</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <Typography>Deutsch (Muttersprache)</Typography>
                <Typography>Türkisch (Muttersprache)</Typography>
                <Typography>Englisch (B2 - C1 Niveau)</Typography>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<MdExpandMore />}>
              <Typography>Schulbildung</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <Typography>
                  Höchster Schulabschluss: Fachhochschulreife
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<MdExpandMore />}>
              <Typography>Motivation</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <Typography>
                  I lost a lot of time doubting myself and not finding the right
                  path in life. I finally found something that fulfills me to
                  the fullest. Now i have a burning desire to unlock my full
                  potential. Coding is the best things that has ever happened to
                  me.
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<MdExpandMore />}>
              <Typography>Goals</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <Typography>
                  <strong>Long Term Goal</strong>: I want to become a Fullstack
                  DevOps Engineer.
                </Typography>
                <Typography>
                  <strong>Short Term Goals</strong>: Get a Job, learn as much as
                  i can and close the gap to Senior Frontend Developers.
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<MdExpandMore />}>
              <Typography>Fun Fact</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <Typography>
                  {`Alter in Minuten: ${new Intl.NumberFormat("de-DE").format(
                    Math.floor(
                      (Date.now() - Date.UTC(1985, 3, 9, 4, 35)) / 1000 / 60
                    )
                  )}`}
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card> */}
    </Layout>
  )
}

export default AboutPage
