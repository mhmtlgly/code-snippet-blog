import { makeStyles } from "@material-ui/core/styles"

export const useHeaderStyles = makeStyles({
  root: {
    "& a:nth-of-type(1)": {
      marginRight: "auto",
    },
    "& svg": {
      color: "white",
    },
  },
})
