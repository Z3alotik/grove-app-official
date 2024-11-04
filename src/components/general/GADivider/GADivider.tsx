import { Divider } from "@mui/material";
import { GADividerProps } from "./GADivider.types";

const GADivider = ({
  children,
  variant,
  orientation,
  margin,
}: GADividerProps) => {
  return (
    <Divider
      flexItem
      variant={variant}
      orientation={orientation}
      sx={{
        margin: margin,
        "&::before, &::after": {
          borderColor: "white",
        },
      }}
    >
      {children}
    </Divider>
  );
};

export default GADivider;
