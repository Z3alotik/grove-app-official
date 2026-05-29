import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import { Participant } from "../../../../../../../../stateManagement/EventState/EventDataProvider.types";
import { useEvent } from "../../../../../../../../stateManagement/EventState/EventDataProvider";

type Column = {
  title: string;
  field: keyof Participant;
};

const columns: Column[] = [
  {
    title: "Jméno",
    field: "name",
  },
  {
    title: "Zaplaceno",
    field: "hasPaid",
  },
];

const ParticipantsTable = () => {
  const { participants } = useEvent();

  return (
    <TableContainer
      sx={{
        maxHeight: 500,
        width: "auto",
        borderRadius: 1,
        overflow: "hidden",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.15)",
        backgroundColor: "#16232c",
        overflowY: "auto",
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow
            sx={{
              "& th": {
                textAlign: "center",
                fontFamily: "Bebas Neue",
                fontSize: "1rem",
                backgroundColor: "#223544",
                color: "white",
                borderBottom: "none",
              },
            }}
          >
            {columns.map((column) => (
              <TableCell key={column.field}>{column.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {participants.map((participant, index) => (
            <TableRow
              key={`${participant.name}-${index}`}
              sx={{
                transition: "0.2s ease",

                "&:nth-of-type(even)": {
                  backgroundColor: "#1b2b36",
                },

                "&:nth-of-type(odd)": {
                  backgroundColor: "#16232c",
                },

                "&:hover": {
                  backgroundColor: "#284152",
                },

                "& td": {
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                },
              }}
            >
              <TableCell
                align="center"
                sx={{
                  fontSize: "1rem",
                  fontFamily: "Teko",
                  color: "white",
                }}
              >
                {participant.name}
              </TableCell>

              <TableCell align="center">
                <Chip
                  label={participant.hasPaid ? "Ano" : "Ne"}
                  color={participant.hasPaid ? "success" : "error"}
                  size="small"
                  sx={{
                    fontWeight: 600,
                    minWidth: 70,
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ParticipantsTable;
