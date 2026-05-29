import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-scroll";
import { GALinkButtonProps } from "./GALinkButton.types";
import useStyles from "./GALinkButton.styles";

const GALinkButton = ({ linkTag, title, iconChildren }: GALinkButtonProps) => {
  const classes = useStyles();

  return (
    <Link to={linkTag} smooth={true} duration={500}>
      <Tooltip title={title}>
        <IconButton className={classes.iconButton}>{iconChildren}</IconButton>
      </Tooltip>
    </Link>
  );
};

export default GALinkButton;
