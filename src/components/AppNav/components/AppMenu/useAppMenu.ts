import { useCallback, useState } from "react";

const useAppMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openCreateEvent, setOpenCreateEvent] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleOpenLogin = useCallback(() => {
    setOpenLogin(true);
  }, []);

  const handleCloseLogin = useCallback(() => {
    setOpenLogin(false);
  }, []);

  const handleOpenCreateEvent = useCallback(() => {
    setOpenCreateEvent(true);
  }, []);

  const handleCloseCreateEvent = useCallback(() => {
    setOpenCreateEvent(false);
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
    openCreateEvent,
    handleCloseCreateEvent,
  };
};

export default useAppMenu;
