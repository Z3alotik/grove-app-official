import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

type Participant = {
  name: string;
  attends: boolean;
  paid: boolean;
};

type Column = {
  title: string;
  field: keyof Participant; // Enforce that field matches keys of Participant
};

const columns: Column[] = [
  { title: "Jméno", field: "name" },
  { title: "Zúčastní se", field: "attends" },
  { title: "Zaplatil/a", field: "paid" },
];

const dullData: Participant[] = [
  { name: "Tomáš Stach", attends: true, paid: false },
  { name: "Radek Killinger", attends: true, paid: true },
  { name: "Aleš Gobel", attends: true, paid: false },
  { name: "Tomáš Tříska", attends: false, paid: false },
  { name: "Martin Bartošek", attends: false, paid: true },
  { name: "Tomáš Stach", attends: true, paid: false },
  { name: "Radek Killinger", attends: true, paid: true },
  { name: "Aleš Gobel", attends: true, paid: false },
  { name: "Tomáš Tříska", attends: false, paid: false },
  { name: "Martin Bartošek", attends: false, paid: true },
  { name: "Tomáš Stach", attends: true, paid: false },
  { name: "Radek Killinger", attends: true, paid: true },
  { name: "Aleš Gobel", attends: true, paid: false },
  { name: "Tomáš Tříska", attends: false, paid: false },
  { name: "Martin Bartošek", attends: false, paid: true },
];

const ParticipantsTable = () => {
  return (
    <TableContainer
      sx={{
        maxHeight: 440,
        margin: "20px",
        width: "auto",
        boxShadow: "0px 40px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Table stickyHeader>
        <TableHead sx={{ borderRadius: "10px" }}>
          <TableRow
            sx={{
              "& th": {
                textAlign: "center",
                fontFamily: "Bebas Neue",
                fontSize: "1rem",
                color: "black",
              },
            }}
          >
            {columns.map((column) => (
              <TableCell key={column.field} width={300}>
                {column.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {dullData.map((data, index) => (
            <TableRow
              key={index}
              sx={{
                "&:hover": {
                  backgroundColor: "#1e313f", // Hover background color
                },
              }}
            >
              {columns.map((column) => {
                const value = data[column.field];
                return (
                  <TableCell
                    key={column.field}
                    sx={{
                      fontSize: "1rem",
                      fontFamily: "Teko",
                      textAlign: "center",
                      color:
                        typeof value === "boolean"
                          ? value
                            ? "green"
                            : "red"
                          : "white",
                    }}
                  >
                    {typeof value === "boolean"
                      ? value
                        ? "Ano"
                        : "Ne"
                      : value}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ParticipantsTable;
