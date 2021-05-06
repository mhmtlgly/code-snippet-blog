import { createMuiTheme } from "@material-ui/core/styles"
import { purple } from "@material-ui/core/colors"

const gatsbyLila = "#6c2e9c"
const gatsbyOrange = "#ffaf1d"
const textColor = "#212121"

export const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          // margin: 0,
          // padding: 0,
          // fontSize: 18,
        },
        html: { minHeight: "100%", scrollBehavior: "smooth" },
        "body, #___gatsby, #gatsby-focus-wrapper": { minHeight: "100vh" },
        body: {
          // fontFamily: "MuseoModerno",
          fontFamily: "system-ui",
        },
        // "#gatsby-focus-wrapper": {
        //   display: "grid",
        //   gridTemplateRows: "1fr",
        // },
        h1: {
          lineHeight: 2,
          color: gatsbyLila,
        },
        h2: {
          // lineHeight: 2,
          color: "#000",
        },
        a: {
          color: "black",
          // textDecoration: "none",
          display: "flex",
        },
        p: {
          color: "black",
        },
        ul: { padding: 0 },
        li: { listStyle: "none" },
        img: {
          maxWidth: "100%",
        },
        "div.code-toolbar": {
          maxHeight: 500,
          overflow: "auto",
        },
        "div.code-toolbar > .toolbar": {
          opacity: 1,
          top: 0,
          right: 0,
          "& .toolbar-item:nth-of-type(1)": {
            display: "none",
            cursor: "context-menu",
            "&:hover": { color: "#bbb" },
          },
          "& .toolbar-item:nth-of-type(2)": {
            display: "flex",
            cursor: "pointer",
            // marginLeft: 10,
            "& button": {
              cursor: "pointer",
              background: "#fafaaf",
              color: "initial",
              padding: "0 10px",
              borderRadius: 0,
              "&:hover": {
                background: "#afaf",
              },
            },
          },
        },
      },
    },
  },
  palette: {
    primary: { main: purple.A700 },
    // secondary: { main: "#ffc400" },
  },
  spacing: 10,
})
