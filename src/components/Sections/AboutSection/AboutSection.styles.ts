import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  aboutTitle: {
    fontSize: "4rem",
    color: "white",
    fontFamily: "Bebas Neue",
    marginLeft: 100,
    marginTop: 0,
  },
  aboutText: {
    color: "white",
    fontFamily: "Teko",
    fontSize: "1.5rem",
  },
  wrapperGrid: {
    display: "flex",
    flexWrap: "wrap",
    height: "80vh",
    overflow: "auto",
  },
}));

export default useStyles;
