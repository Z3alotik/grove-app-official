import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  tabsBox: {
    display: "flex",
    justifyContent: "center",
    width: "400px",
    "& .MuiTab-root": {
      color: "white",
      "&.Mui-selected": {
        color: "white",
      },
    },
    "& .MuiTabScrollButton-root": {
      color: "white",
    },
  },
  musicTabsContent: {
    margin: "20px",
  },
  musicTabsBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default useStyles;
