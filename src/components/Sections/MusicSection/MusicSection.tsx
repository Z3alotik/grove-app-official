import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import useStyles from "./MusicSection.styles";
import MusicTabs from "./components/MusicTabs/MusicTabs";
import { musicContent } from "./MusicSection.consts";

const MusicSection = () => {
  const classes = useStyles();

  return (
    <Box>
      <Grid className={classes.wrapperGrid} container spacing={6} columns={12}>
        <Grid container size={6} spacing={2}>
          <Grid>
            <h1 className={classes.musicTitle}>
              <span>{musicContent.title}</span>
            </h1>
          </Grid>
          <Grid>
            <span className={classes.musicText}>{musicContent.text}</span>
          </Grid>
        </Grid>
        <Grid className={classes.musicTabsGrid} container size={6}>
          <MusicTabs />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MusicSection;
