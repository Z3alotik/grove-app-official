import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  musicTitle: {
    fontSize: "4rem",
    color: "white",
    fontFamily: "Bebas Neue",
    marginLeft: 100,
    marginTop: 0,
  },
  musicText: {
    color: "white",
    fontFamily: "Teko",
    fontSize: "1.5rem",
    lineHeight: "0.5rem",
  },
  wrapperGrid: {
    height: "80vh",
    display: "flex",
    overflow: "auto",
  },
  musicTabsGrid: {
    justifyContent: "center",
  },
}));

export default useStyles;
