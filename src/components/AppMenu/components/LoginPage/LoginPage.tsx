import useStyles from "./LoginPage.styles";
import { Card, CardHeader } from "@mui/material";

const LoginPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Card className={classes.card}>
        <CardHeader title="Log In" />
        <form>
          <input type="text" />
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
