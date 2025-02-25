import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  title: {
    fontSize: "8rem",
    color: "white",
    fontFamily: "Bebas Neue",
    margin: 0,
    "& span": {
      display: "block",
    },
  },
  p: {
    fontFamily: "Permanent Marker",
    fontStyle: "italic",
    fontSize: "1rem",
    color: "white",
  },
  background: {
    zIndex: 0,
    background: `url(
      "./GRN8.png"
    )`,
  },
  titleDiv: {
    marginLeft: "-33%",
  },
}));

export default useStyles;
