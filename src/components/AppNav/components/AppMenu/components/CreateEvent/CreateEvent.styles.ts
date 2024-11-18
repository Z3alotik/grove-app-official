import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  dialog: {
    backdropFilter: "blur(3px)",
    "& .MuiPaper-root": {
      borderRadius: "20px",
      background: "#1a2832",
    },
  },
  eventForm: {
    display: "flex",
    flexDirection: "column",
  },
  textField: {
    width: "300px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "20px", // border radius
      borderColor: "white",
      color: "white",
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "white", // border color when focused
      },
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "white", // Placeholder color when focused
    },
    "& .MuiFormLabel-root": {
      color: "gray", // color of label text
      fontFamily: "Permanent Marker",
    },
    "& fieldset": {
      borderColor: "white", // Default border color
    },
    "&:hover fieldset": {
      borderColor: "white !important", // Border color on hover
    },
  },
  imageInput: {
    margin: "10px",
    overflow: "hidden",
    color: "white",
    fontFamily: "Teko",
    "& .label": {
      fontSize: "1.5rem",
      backgroundColor: "white",
      color: "red",
    },
  },
  dialogTitle: {
    color: "white",
    "& .MuiTypography-root": {
      fontFamily: "Bebas Neue",
      fontSize: "1.5rem",
    },
  },
  fileInputDiv: {
    display: "flex",
    alignItems: "center",
  },
  iconTextField: {
    display: "flex",
    alignItems: "center",
  },
  spanButton: {
    display: "inline-block",
    textAlign: "center",
    marginBottom: "20px",
    fontFamily: "Teko",
    color: "white",
    cursor: "pointer",
  },
  spanDiv: {
    textAlign: "center",
  },
  formControlLabel: {
    "& .MuiFormControlLabel-label": {
      color: "white",
      fontSize: "1rem",
      fontFamily: "Teko",
    },
  },
}));

export default useStyles;
