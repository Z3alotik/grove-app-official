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
    background: `url(
      "./digital-art-dark-cosmic-night-sky.png"
    )`,
    backgroundSize: "cover",
  },
  sectionAbout: {
    backgroundColor: "#0c141e",
  },
  sectionEvent: {
    padding: 0,
    position: "relative",
  },
  sectionMusic: {
    backgroundColor: "#1a2832",
  },
  sectionRules: {
    backgroundColor: "#0c141e",
  },
  app: {
    overflowX: "hidden",
  },
}));

export default useStyles;
