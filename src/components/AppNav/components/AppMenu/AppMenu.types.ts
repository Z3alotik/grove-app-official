export type AppMenuProps = {
  openMenu: boolean;
  onCloseMenu: () => void;
  onOpenMenu: () => void;
};

export type ActionsDefinitionProps = {
  handleOpenCreateEvent: () => void;
  handleOpenLogin: () => void;
  handleOpenParticipants: () => void;
};
