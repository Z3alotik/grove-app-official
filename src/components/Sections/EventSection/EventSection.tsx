import { Box } from "@mui/material";
import EventInfo from "./components/EventInfo/EventInfo";
import { useState } from "react";

const EventSection = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpenInfo = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Box
      onClick={handleOpenInfo}
      style={{
        cursor: "pointer", // Smooth transition
      }}
    >
      <EventInfo isOpen={isOpen} />
    </Box>
  );
};

export default EventSection;
