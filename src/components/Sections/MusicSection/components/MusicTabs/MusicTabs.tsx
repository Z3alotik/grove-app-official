import { Box, Tab, Tabs } from "@mui/material";
import useMusicTabs from "./useMusicTabs";
import MusicTabsContent from "../MusicTabsContent/MusicTabsContent";
import useStyles from "./MusicTabs.styles";

const MusicTabs = () => {
  const classes = useStyles();
  const { tabValue, handleTabChange } = useMusicTabs();

  return (
    <Box className={classes.musicTabsBox}>
      <Box className={classes.tabsBox}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          TabIndicatorProps={{ style: { backgroundColor: "white" } }}
        >
          <Tab value="dubstep" label="Dubstep" />
          <Tab value="dnb" label="Drum & Bass" />
          <Tab value="house" label="House" />
          <Tab value="techno" label="Techno" />
          <Tab value="rap" label="Rap" />
          <Tab value="rock" label="Rock" />
          <Tab value="rnb" label="RnB" />
        </Tabs>
      </Box>

      <Box className={classes.musicTabsContent}>
        <MusicTabsContent tabValue={tabValue} />
      </Box>
    </Box>
  );
};

export default MusicTabs;
