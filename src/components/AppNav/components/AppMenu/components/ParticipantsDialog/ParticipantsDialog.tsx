import { ParticipantsDialogProps } from "./ParticipantsDialog.types";
import ParticipantsTable from "./components/ParticipantsTable/ParticipantsTable";
import { GADialog } from "../../../../../General/GADialog/GADialog";

const ParticipantsDialog = ({
  openParticipants,
  handleCloseParticipants,
}: ParticipantsDialogProps) => {
  return (
    <GADialog
      open={openParticipants}
      onClose={handleCloseParticipants}
      title="Účastníci"
      dividers="both"
      size="lg"
      hideAcceptButton
    >
      <ParticipantsTable />
    </GADialog>
  );
};

export default ParticipantsDialog;
