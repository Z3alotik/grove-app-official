import {
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

const LoginContent = ({ state, dispatch }: { state: any; dispatch: any }) => {
  return (
    <>
      <FormControl sx={{ display: "flex", gap: 2 }}>
        <div style={{ position: "relative" }}>
          <TextField
            fullWidth
            size="small"
            label="Email"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "setEmail", payload: e.target.value })
            }
          />
          <PersonIcon
            sx={{
              color: "common.white",
              position: "absolute",
              right: 12,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        </div>

        <div style={{ position: "relative" }}>
          <TextField
            fullWidth
            size="small"
            label="Password"
            type="password"
            value={state.password}
            onChange={(e) =>
              dispatch({ type: "setPassword", payload: e.target.value })
            }
          />
          <LockIcon
            sx={{
              color: "common.white",
              position: "absolute",
              right: 12,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        </div>

        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: "common.white",
                "&.Mui-checked": {
                  color: "common.white",
                },
              }}
            />
          }
          label="Zapamatovat si mě"
        />
      </FormControl>
    </>
  );
};

export default LoginContent;
