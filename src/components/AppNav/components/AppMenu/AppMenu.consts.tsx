import LoginIcon from "@mui/icons-material/Login";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import GroupsIcon from "@mui/icons-material/Groups";
import { ActionsDefinitionProps } from "./AppMenu.types";

export const getActionsDefinition = ({
  handleOpenCreateEvent,
  handleOpenAuthDialog,
  handleOpenParticipants,
}: ActionsDefinitionProps) => [
  { icon: <LoginIcon />, name: "Přihlášení", action: handleOpenAuthDialog },
  {
    icon: <EditCalendarIcon />,
    name: "Vytvořit událost",
    action: handleOpenCreateEvent,
  },
  { icon: <GroupsIcon />, name: "Účastníci", action: handleOpenParticipants },
];
