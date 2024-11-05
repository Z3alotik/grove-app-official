import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  loginModal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    width: "80vw",
    backdropFilter: "blur(3px)",
  },
  card: {
    width: "400px",
    height: "500px",
    padding: "20px",
  },
  inputBox: {
    width: "100%",
    height: "100%",
    background: "transparent",
    border: "1px solid",
    borderRadius: "20px",
    fontSize: "20px",
    "&::placeholder": {
      color: "grey",
      fontStyle: "italic",
      fontSize: "10px",
    },
  },
  inputText: {
    fontSize: "10px",
  },
  inputWrapper: {
    display: "flex",
    margin: "20px",
  },
}));

export default useStyles;
