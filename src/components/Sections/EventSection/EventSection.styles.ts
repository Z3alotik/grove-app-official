import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  p: {
    fontFamily: "monospace",
    fontStyle: "italic",
    fontSize: "large",
  },
  eventCard: {
    margin: "20px",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    backgroundColor: "rgba(240, 240, 240, 0.2) !important",
    borderRadius: "10px !important",
  },
}));

export default useStyles;
