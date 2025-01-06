import { Box, Button, CardMedia, Divider, Fade } from "@mui/material";
import Grid from "@mui/material/Grid2";
import useStyles from "./EventInfo.styles";
import { EventInfoProps } from "./EventInfo.types";
import { useEvent } from "../../../../../stateManagement/EventState/EventDataProvider";
import { useAuth } from "../../../../../stateManagement/AuthState/AuthProvider";

const EventInfo = ({ isOpen }: EventInfoProps) => {
  const classes = useStyles();
  const { eventData, handleParticipate, isParticipating } = useEvent();
  const { token } = useAuth();
  return (
    <Fade in={isOpen}>
      <Box className={classes.box}>
        <Grid
          className={classes.infoWrapperGrid}
          container
          columns={12}
          direction="column"
        >
          <Grid size={6}>
            <Grid className={classes.qrGrid}>
              <CardMedia
                className={classes.qrImage}
                image={eventData.qr}
                title="Event QR"
              />
            </Grid>
          </Grid>
          <Divider orientation="vertical" sx={{ borderColor: "white" }} />
          <Grid
            container
            direction="column"
            size={6}
            sx={{
              display: "flex",
              alignContent: "center",
            }}
          >
            <Grid
              size={6}
              container
              direction="row"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                color: "white",
                fontFamily: "Bebas Neue",
                fontSize: "3rem",
                margin: "20px",
              }}
            >
              <Grid>
                <span>{eventData.date}</span>
              </Grid>
              <Grid>
                <span>{eventData.time}</span>
              </Grid>
            </Grid>
            <Grid
              size={6}
              container
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "white",
                fontFamily: "Bebas Neue",
                fontSize: "3rem",
                margin: "20px",
              }}
            >
              <span>{eventData.place}</span>
            </Grid>
            <Grid
              size={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "white",
                fontFamily: "Teko",
                fontSize: "1.5rem",
                margin: "20px",
              }}
            >
              <span>{eventData.news}</span>
            </Grid>
            {token && (
              <Grid
                size={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "20px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    zIndex: 100,
                    color: "black",
                    backgroundColor: "white",
                    fontFamily: "Bebas Neue",
                    fontSize: "2rem",
                  }}
                  onClick={(event) => {
                    event.stopPropagation();
                    handleParticipate();
                  }}
                >
                  {"Zúčastním se"}
                </Button>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Box>
    </Fade>
  );
};

export default EventInfo;
