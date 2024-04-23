import { Box, Typography } from "@mui/material";
import "./style.css";

export function Intro() {
  return (
    <Box className="container-intro">
      <Typography
        className="title-intro"
        style={{ fontWeight: 300 }}
        variant="h2"
      >
        What is{" "}
        <span style={{ color: "#00B6E2", fontWeight: 800 }}>Cloveda</span>?
      </Typography>
      <Typography className="description-intro" variant="h6">
        Cloveda is a <span style={{ fontWeight: 600 }}>solution</span> to the
        gaps between silos in AWS. Allowing each part of the AWS structure to
        communicate.
      </Typography>
      <Typography className="description-p2-intro" variant="h6">
        {" "}
        It gives visibility to budgeting, approvals, provisioning and billing,
        allowing architects and builders to make broader, deeper more informed
        decisions.
      </Typography>
    </Box>
  );
}
