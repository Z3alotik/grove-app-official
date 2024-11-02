import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  aboutTitle: {
    fontSize: "6rem",
    color: "white",
    fontFamily: "Bebas Neue",
    marginLeft: 100,
    marginTop: 0,
  },
  aboutText: {
    color: "white",
    fontFamily: "Teko",
  },
  wrapperGrid: {
    display: "flex",
    flexWrap: "wrap",
    height: "80",
  },
}));

export default useStyles;
