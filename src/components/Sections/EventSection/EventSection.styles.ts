import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  p: {
    fontFamily: "monospace",
    fontStyle: "italic",
    fontSize: "large",
  },
  wrapperGrid: {
    display: "flex",
    flexWrap: "wrap",
    height: "80vh",
    overflow: "auto",
  },
  infoGrid: {
    display: "flex",
    flexDirection: "column",
    alignContent: "space-around",
    justifyContent: "center",
    alignItems: "center",
    margin: "2rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9 aspect ratio
  },
  infoHeader: {
    fontSize: "2rem",
    color: "white",
    fontFamily: "Bebas Neue",
  },
}));

export default useStyles;
