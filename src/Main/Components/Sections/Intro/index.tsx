import { Box, Typography } from "@mui/material";

export function Intro() {
  return (
    <Box style={{ flex: 1, flexDirection: "column", padding: 40 }}>
      <Typography variant="h2">What is Cloveda?</Typography>
      <Typography variant="h6">
        Cloveda is a solution to the gaps between silos in AWS. Allowing each
        part of the AWS structure to communicate. It gives visibility to
        budgeting, approvals, provisioning and billing, allowing architects and
        builders to make broader, deeper more informed decisions.
      </Typography>
    </Box>
  );
}
