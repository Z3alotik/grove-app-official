import { useCallback, useState } from "react";
import { useAuth } from "../../../../stateManagement/AuthProvider";
import LoginIcon from "@mui/icons-material/Login";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import GroupsIcon from "@mui/icons-material/Groups";
import LogoutIcon from "@mui/icons-material/Logout";

const useAppMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCreateEvent, setOpenCreateEvent] = useState(false);
  const [openParticipants, setOpenParticipants] = useState(false);
  const { handleOpenAuthDialog, handleLogout, token, hasRole } = useAuth();

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

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

  // Handle rendering different actions depending on USER role
  const getActionsDefinition = () => {
    const actions = [
      { icon: <LoginIcon />, name: "Přihlášení", action: handleOpenAuthDialog },
      {
        icon: <EditCalendarIcon />,
        name: "Vytvořit událost",
        action: handleOpenCreateEvent,
      },
      {
        icon: <GroupsIcon />,
        name: "Účastníci",
        action: handleOpenParticipants,
      },
      { icon: <LogoutIcon />, name: "Odhlásit se", action: handleLogout },
    ];

    if (!token) {
      return actions.filter((action) => ["Přihlášení"].includes(action.name));
    }

    if (hasRole("ROLE_USER")) {
      return actions.filter((action) => ["Odhlásit se"].includes(action.name));
    }

    // Default case for other roles (e.g., admin)
    return actions.filter((action) =>
      ["Vytvořit událost", "Účastníci", "Odhlásit se"].includes(action.name)
    );
  };

  return {
    handleOpenCreateEvent,
    handleOpenParticipants,
    handleCloseParticipants,
    openParticipants,
    openMenu,
    handleCloseMenu,
    handleOpenMenu,
    openCreateEvent,
    handleCloseCreateEvent,
    getActionsDefinition,
  };
};

export default useAppMenu;
