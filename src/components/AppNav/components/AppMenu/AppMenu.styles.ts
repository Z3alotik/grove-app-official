import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  speedDial: {
    "& .MuiSpeedDial-fab": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    "& .MuiSpeedDial-fab:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
    position: "absolute",
    bottom: 16,
    right: 16,
  },
  speedDialAction: {
    "& .MuiSpeedDialAction-fab": {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
    },
  },
}));

export default useStyles;
