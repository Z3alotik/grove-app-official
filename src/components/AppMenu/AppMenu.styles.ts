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
  account: {
    position: "fixed",
    bottom: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    margin: "20px",
  },
}));

export default useStyles;
