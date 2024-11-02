import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  stepLabel: {
    color: "white",
    "& .MuiStepLabel-label": {
      fontFamily: "monospace",
      fontSize: "1.3rem",
      color: "grey",
    },
    "& .MuiStepLabel-label.Mui-active": {
      fontFamily: "monospace",
      fontSize: "1.3rem",
      color: "white",
    },
    "& .MuiStepLabel-label.Mui-completed": {
      fontFamily: "monospace",
      fontSize: "1.3rem",
      color: "white",
    },
  },
  stepIcon: {
    "& .MuiStepLabel-iconContainer": {
      fontSize: "1.8rem",
      backgroundColor: "green",
    },
  },
}));

export default useStyles;
