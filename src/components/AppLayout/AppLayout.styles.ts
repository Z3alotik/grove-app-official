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
  sectionEvent: {
    backgroundColor: "#fb8c00",
    display: "block",
  },
  sectionMusic: {
    backgroundColor: "#ffb74d",
  },
  sectionAbout: {
    backgroundColor: "#0c141e",
  },
  app: {
    overflowX: "hidden",
  },
}));

export default useStyles;
