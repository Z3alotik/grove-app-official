import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { rulesContent } from "./RulesSection.consts";
import useStyles from "./RulesSection.styles";

const RulesSection = () => {
  const classes = useStyles();
  return (
    <Box>
      <Grid className={classes.wrapperGrid} container spacing={6} columns={12}>
        <Grid
          className={classes.rulesTitleGrid}
          container
          size={12}
          spacing={2}
        >
          <h1 className={classes.rulesTitle}>
            <span>{rulesContent.title}</span>
          </h1>
        </Grid>
        <Grid container size={6} spacing={2} direction="row">
          <ul className={classes.rulesList}>
            {rulesContent.rules.map((rule, index) => (
              <li className={classes.rulesItem} key={index}>
                {rule}
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RulesSection;
