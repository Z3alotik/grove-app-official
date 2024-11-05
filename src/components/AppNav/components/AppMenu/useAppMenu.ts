import { useCallback, useState } from "react";

const useAppMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleOpenLogin = useCallback(() => {
    setOpenLogin(true);
    setOpenMenu(false);
  }, []);

  const handleCloseLogin = useCallback(() => {
    setOpenLogin(false);
  }, []);

  const handleOpenCreateEvent = useCallback(() => {
    console.log("Create Event action triggered");
    // Add event creation logic here
  }, []);

  const handleOpenParticipants = useCallback(() => {
    console.log("Participants action triggered");
    // Add participants logic here
  }, []);

  return {
    handleOpenCreateEvent,
    handleOpenLogin,
    handleCloseLogin,
    handleOpenParticipants,
    openMenu,
    openLogin,
    handleCloseMenu,
    handleOpenMenu,
  };
};

export default useAppMenu;
