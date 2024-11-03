import Grid from "@mui/material/Grid2";

const EventSection = () => {
  return (
    <Grid sx={{ padding: "100px" }} container spacing={2} columns={12}>
      <Grid size={6}></Grid>
      <Grid size={6}></Grid>
    </Grid>
  );
};

export default EventSection;
