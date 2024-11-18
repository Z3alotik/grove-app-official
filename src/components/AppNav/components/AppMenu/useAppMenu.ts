import { useCallback, useState } from "react";

const useAppMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openAuthDialog, setOpenAuthDialog] = useState(false);
  const [openCreateEvent, setOpenCreateEvent] = useState(false);
  const [openParticipants, setOpenParticipants] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleOpenAuthDialog = useCallback(() => {
    setOpenAuthDialog(true);
  }, []);

  const handleCloseAuthDialog = useCallback(() => {
    setOpenAuthDialog(false);
  }, []);

  const handleOpenCreateEvent = useCallback(() => {
    setOpenCreateEvent(true);
  }, []);

  const handleCloseCreateEvent = useCallback(() => {
    setOpenCreateEvent(false);
  }, []);

  const handleOpenParticipants = useCallback(() => {
    setOpenParticipants(true);
  }, []);

  const handleCloseParticipants = useCallback(() => {
    setOpenParticipants(false);
  }, []);

  const handleChangeAuthContent = () => {
    setIsLogin((prev) => !prev);
  };

  return {
    handleOpenCreateEvent,
    handleOpenAuthDialog,
    handleCloseAuthDialog,
    handleOpenParticipants,
    handleCloseParticipants,
    openParticipants,
    openMenu,
    openAuthDialog,
    handleCloseMenu,
    handleOpenMenu,
    openCreateEvent,
    handleCloseCreateEvent,
    isLogin,
    handleChangeAuthContent,
  };
};

export default useAppMenu;
