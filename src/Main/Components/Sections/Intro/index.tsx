import { Box, Typography } from "@mui/material";

export function Intro() {
  return (
    <Box
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        paddingTop: "5%",
        paddingBottom: "5%",
        paddingLeft: "12%",
        paddingRight: "12%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography style={{ fontWeight: 300 }} variant="h2">
        What is{" "}
        <span style={{ color: "#00B6E2", fontWeight: 800 }}>Cloveda</span>?
      </Typography>
      <Typography style={{ width: "70%", marginTop: 20 }} variant="h6">
        Cloveda is a <span style={{ fontWeight: 600 }}>solution</span> to the
        gaps between silos in AWS. Allowing each part of the AWS structure to
        communicate.
      </Typography>
      <Typography style={{ width: "70%", marginTop: 20 }} variant="h6">
        {" "}
        It gives visibility to budgeting, approvals, provisioning and billing,
        allowing architects and builders to make broader, deeper more informed
        decisions.
      </Typography>
    </Box>
  );
}
