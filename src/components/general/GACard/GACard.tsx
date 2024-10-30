import { Card } from "@mui/material";
import useStyles from "./GACard.styles";
import { GACardProps } from "./GACard.types";

const GACard = ({ children }: GACardProps) => {
  const classes = useStyles();
  return <Card className={classes.GA_Card}>{children}</Card>;
};

export default GACard;
