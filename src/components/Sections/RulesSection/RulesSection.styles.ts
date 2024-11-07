import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  rulesTitle: {
    fontSize: "4rem",
    color: "white",
    fontFamily: "Bebas Neue",
    marginLeft: 100,
    marginTop: 0,
  },
  rulesTitleGrid: {
    justifyContent: "center",
  },
  rulesList: {
    columnCount: 2,
    listStyle: "inside",
    padding: 0,
  },

  rulesItem: {
    color: "white",
    fontFamily: "Teko",
    fontSize: "1.5rem",
    lineHeight: "2rem",
  },
  wrapperGrid: {
    height: "80vh",
    display: "flex",
    overflow: "auto",
  },
}));

export default useStyles;
