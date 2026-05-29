import { makeStyles } from "@mui/styles";

const useStyles = makeStyles<{}, { size: "sm" | "md" | "lg" }>(() => ({
  GA_Dialog: {
    backdropFilter: "blur(3px)",

    "& .MuiPaper-root": {
      borderRadius: "20px",
      background: "#1a2832",
      width: "100%",
      color: "white",

      maxWidth: ({ size }) => {
        switch (size) {
          case "sm":
            return "400px";

          case "lg":
            return "900px";

          case "md":
          default:
            return "600px";
        }
      },
    },
  },

  GA_Dialog_Header: {
    padding: "16px 24px",
  },

  GA_Dialog_Title: {
    color: "white",
    fontFamily: "Bebas Neue",
    fontSize: "1.5rem",
    display: "flex",
    justifyContent: "center",
  },

  GA_Dialog_Content: {
    padding: "24px",
  },

  GA_Dialog_Footer: {
    padding: "16px 24px",
  },

  GA_Dialog_Actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "6px",
    margin: "5px",
  },
}));

export default useStyles;
