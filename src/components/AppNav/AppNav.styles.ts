import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  navigation: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    margin: "20px",
  },
  navMenu: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "30px",
  },
  menu: {
    position: "fixed",
    bottom: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    margin: "10px",
  },
}));

export default useStyles;
