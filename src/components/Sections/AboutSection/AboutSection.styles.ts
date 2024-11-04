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
    lineHeight: "0.5rem",
  },
  wrapperGrid: {
    height: "80vh",
    display: "flex",
    overflow: "auto",
  },
  stepperImg: {
    width: "10rem",
  },
  imageGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;
