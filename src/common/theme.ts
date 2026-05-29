import { createTheme } from "@mui/material/styles";

export const GA_Theme = createTheme({
  palette: {
    mode: "dark",

    background: {
      default: "#0f1a20",
      paper: "#1a2832",
    },

    primary: {
      main: "#f5f5f5",
      contrastText: "#1a2832",
    },

    secondary: {
      main: "#9aa4ad",
    },

    text: {
      primary: "#ffffff",
      secondary: "rgba(255,255,255,0.7)",
    },

    divider: "rgba(255,255,255,0.08)",
  },

  shape: {
    borderRadius: 12,
  },

  typography: {
    fontFamily: "Inter, Roboto, Arial, sans-serif, Bebas Neue",
  },

  components: {
    /* ================= BUTTON ================= */
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 10,
        },

        containedPrimary: {
          backgroundColor: "#f5f5f5",
          color: "#1a2832",

          "&:hover": {
            backgroundColor: "#e6e6e6",
          },

          "&:disabled": {
            backgroundColor: "rgba(245,245,245,0.3)",
            color: "rgba(26,40,50,0.5)",
          },
        },

        outlinedPrimary: {
          borderColor: "rgba(255,255,255,0.3)",
          color: "#ffffff",
        },
      },
    },

    /* ================= TEXT FIELD ================= */
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: "rgba(255,255,255,0.03)",

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255,255,255,0.15)",
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255,255,255,0.3)",
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffffff",
          },
        },

        input: {
          color: "#ffffff",

          "&::-webkit-calendar-picker-indicator": {
            filter: "invert(1)",
            cursor: "pointer",
          },
        },
      },
    },

    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "rgba(255,255,255,0.6)",

          "&.Mui-focused": {
            color: "#ffffff",
          },
        },
      },
    },

    /* ================= DIALOG ================= */
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "#1a2832",
          borderRadius: 10,
          padding: 0,
          boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
        },
      },
    },

    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontFamily: "Bebas Neue",
          fontSize: "1.25rem",
          fontWeight: 300,
          padding: "16px 24px",
          color: "#ffffff",
        },
      },
    },

    MuiDialogContent: {
      styleOverrides: {
        root: {},
      },
    },

    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "10px 20px",
          justifyContent: "flex-end",
          gap: "5px",
        },
      },
    },

    /* ================= DIVIDER ================= */
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(255, 255, 255, 0.45)",
        },
      },
    },

    /* ================= ICON BUTTON ================= */
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "rgba(255,255,255,0.8)",
        },
      },
    },

    /* ================= PAPER ================= */
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});
