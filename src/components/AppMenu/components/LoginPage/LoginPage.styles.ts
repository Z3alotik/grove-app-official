import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  card: {
    margin: "5rem",
    padding: "2.5rem 5rem",
    backgroundColor: "aliceblue",
    minHeight: "calc(100vh - 5rem)",
  },
  main: {
    backgroundColor: "gray",
    maxHeight: "100vh",
  },
}));

export default useStyles;
