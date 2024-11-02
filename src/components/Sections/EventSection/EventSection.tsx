import Grid from "@mui/material/Grid2";
import GACard from "../../general/GACard/GACard";

const EventSection = () => {
  return (
    <Grid sx={{ padding: "100px" }} container spacing={2} columns={12}>
      <Grid size={6}>
        <GACard>
          <img alt="" src="GRN8.png" width="1100px" height="650px" />
        </GACard>
      </Grid>
      <Grid size={6}>
        <GACard>
          <Grid container spacing={6} columns={6} sx={{ height: "300px" }}>
            <Grid size={3} sx={{ width: 400 }}>
              <img
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
              />
            </Grid>
          </Grid>
        </GACard>
      </Grid>
    </Grid>
  );
};

export default EventSection;
