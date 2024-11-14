import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
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
