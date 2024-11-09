import { useState } from "react";

const useEventSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenEventInfo = () => {
    setIsOpen((prev) => !prev);
  };

  return {
    handleOpenEventInfo,
    isOpen,
  };
};

export default useEventSection;
