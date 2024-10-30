import { useState } from "react";

const useAppNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return {
    handleCloseMenu,
    handleOpenMenu,
    openMenu,
  };
};

export default useAppNav;
