import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  infoWrapperGrid: {
    display: "flex",
    flexWrap: "wrap",
    height: "80vh",
    width: "100vw",
    justifyContent: "center",
    overflow: "auto",
  },
  qrGrid: {
    display: "flex",
    justifyContent: "center",
  },
  qrImage: {
    width: "25%",
    paddingTop: "25%",
  },
  infoHeader: {
    fontSize: "2rem",
    color: "white",
    fontFamily: "Bebas Neue",
  },
  infoText: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Teko",
    fontSize: "2rem",
    color: "white",
  },
  box: {
    height: "100vh",
    width: "100%",
    background: "linear-gradient(to right, black, transparent 50%, black)",
    backdropFilter: "blur(15px)",
    webkitBackdropFilter: "blur(5px)",
  },
}));

export default useStyles;
