import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
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
  iconButton: {
    width: 40,
    height: 40,
    "& svg": {
      fontSize: "1.3rem",
      color: "white",
    },
  },
}));

export default useStyles;
