import { Box, Link, Typography } from "@mui/material";
import dash from "../../../Images/dash.svg";
import "./storyOne.css";

export function FirstStory() {
  return (
    <Box className="container-firststory">
      <Box className="inner-container-firststory">
        <Typography textAlign={"left"} className={"title-first"} variant="h3">
          One{" "}
          <span style={{ color: "#00B6E2", fontWeight: 800 }}>dashboard</span>{" "}
          for all processes
        </Typography>
        <Typography
          className="description-first"
          textAlign={"left"}
          variant="h6"
        >
          Budgeting, approvals, provisioning and billing all under one roof.
        </Typography>
        <Link className="link">Sign up</Link>
      </Box>
      <Box className="image">
        <Box>
          <img src={dash} height={400} alt="story image" />
        </Box>
      </Box>
    </Box>
  );
}
