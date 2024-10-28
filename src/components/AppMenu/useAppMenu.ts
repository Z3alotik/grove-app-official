import { useState } from "react";

const useAppMenu = () => {
  const [openSettings, setOpenSettings] = useState(false);

  const handleOpenSettings = () => {
    setOpenSettings(true);
  };

  const handleCloseSettings = () => {
    setOpenSettings(false);
  };

  return {
    handleOpenSettings,
    handleCloseSettings,
    openSettings,
  };
};

export default useAppMenu;
