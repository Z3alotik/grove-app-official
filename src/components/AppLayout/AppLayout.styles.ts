import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  section: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    padding: "20px",
    boxSizing: "border-box",
  },
  sectionHome: {
    backgroundColor: "#f57c00",
  },
  sectionEvent: {
    backgroundColor: "#ff9800",
    display: "block",
  },
  sectionMusic: {
    backgroundColor: "#ffb74d",
  },
  sectionAbout: {
    backgroundColor: "#ffe0b2",
  },
  app: {
    overflowX: "hidden",
  },
}));

export default useStyles;
