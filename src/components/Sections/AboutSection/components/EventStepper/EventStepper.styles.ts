import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  stepLabel: {
    color: "white",
    "& .MuiStepLabel-label": {
      fontFamily: "Permanent Marker",
      fontSize: "1.3rem",
      color: "grey",
    },
    "& .MuiStepLabel-label.Mui-active": {
      fontFamily: "Permanent Marker",
      fontSize: "1.3rem",
      color: "white",
    },
    "& .MuiStepLabel-label.Mui-completed": {
      fontFamily: "Permanent Marker",
      fontSize: "1.3rem",
      color: "white",
    },
  },
  stepIcon: {
    "& .MuiStepIcon-root": {
      fontSize: "1.8rem",
      fill: "white",
    },
    "& .MuiStepIcon-text": {
      fill: "black",
    },
  },
}));

export default useStyles;
