import { Box } from "@mui/material";
import EventInfo from "./components/EventInfo/EventInfo";
import useEventSection from "./useEventSection";

const EventSection = () => {
  const { isOpen, handleOpenEventInfo } = useEventSection();
  return (
    <Box
      onClick={handleOpenEventInfo}
      style={{
        cursor: "pointer",
      }}
    >
      <EventInfo isOpen={isOpen} />
    </Box>
  );
};

export default EventSection;
