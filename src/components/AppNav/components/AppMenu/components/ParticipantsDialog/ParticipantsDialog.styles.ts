import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  dialog: {
    backdropFilter: "blur(3px)",
    "& .MuiPaper-root": {
      borderRadius: "20px",
      background: "#1a2832",
    },
  },
}));

export default useStyles;
