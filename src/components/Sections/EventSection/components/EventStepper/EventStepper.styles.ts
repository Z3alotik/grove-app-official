import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  stepLabel: {
    "& .MuiStepLabel-label": {
      fontFamily: "monospace",
      fontSize: "1.3rem",
    },
  },
  stepIcon: {
    "& .MuiStepLabel-iconContainer": {
      fontSize: "1.8rem",
    },
  },
}));

export default useStyles;
