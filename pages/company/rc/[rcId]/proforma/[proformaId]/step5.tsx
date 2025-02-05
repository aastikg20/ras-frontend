import React from "react";
import { Stack, TextField } from "@mui/material";
import Meta from "@components/Meta";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ActiveButton from "@components/Buttons/ActiveButton";
import InactiveButton from "@components/Buttons/InactiveButton";

function Step5() {
  return (
    <div style={{ padding: "0 2rem" }}>
      <Meta title="Step 5/5 - New Opening" />
      <Stack spacing={2}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", md: "center" }}
          justifyContent="space-between"
          spacing={2}
        >
          <h1>Proforma</h1>
        </Stack>
        <Stack
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ paddingBottom: 10 }}
        >
          <h2>Step 5/5 Basic Details</h2>
          <TableContainer
            component={Paper}
            sx={{ minWidth: 330, maxWidth: 700 }}
          >
            <Table
              sx={{ minWidth: 300, maxWidth: 700, backgroundColor: "#ebebeb" }}
              aria-label="simple table"
            >
              <TableBody>
                <TableRow>
                  <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    sx={{
                      fontSize: "1.01em",
                      fontWeight: "600",
                      paddingLeft: "7vw",
                    }}
                  >
                    Additional Eligibility Criteria
                  </TableCell>
                  <TableCell>
                    <TextField
                      variant="outlined"
                      value="Quadeye"
                      size="small"
                      sx={{
                        m: 1,
                        width: { xs: "18ch", sm: "27ch", lg: "35ch" },
                        padding: 0,
                      }}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    sx={{
                      fontSize: "1.01em",
                      fontWeight: "600",
                      paddingLeft: "7vw",
                    }}
                  >
                    Message for Placement Coordinator
                  </TableCell>
                  <TableCell>
                    <TextField
                      variant="outlined"
                      value="SDE Intern"
                      size="small"
                      sx={{
                        m: 1,
                        width: { xs: "18ch", sm: "27ch", lg: "35ch" },
                        padding: 0,
                      }}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="left"
                    component="th"
                    scope="row"
                    sx={{
                      fontSize: "1.01em",
                      fontWeight: "600",
                      paddingLeft: "7vw",
                    }}
                  >
                    Select Active HR
                  </TableCell>
                  <TableCell>
                    <TextField
                      variant="outlined"
                      value="USA"
                      size="small"
                      sx={{
                        m: 1,
                        width: { xs: "18ch", sm: "27ch", lg: "35ch" },
                        padding: 0,
                      }}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">
                    <ActiveButton sx={{ width: 100 }}>Next</ActiveButton>
                  </TableCell>
                  <TableCell align="center">
                    <InactiveButton sx={{ width: 100 }}>Reset</InactiveButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Stack>
    </div>
  );
}

Step5.layout = "companyPhaseDashboard";
export default Step5;
