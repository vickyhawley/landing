import { Box, Link, Typography } from "@mui/material";
import dash from "../../../Images/dash.svg";

export function FirstStory() {
  return (
    <Box
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        paddingTop: "5%",
        paddingBottom: "5%",
        paddingLeft: "12%",
        paddingRight: "12%",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Typography textAlign={"left"} style={{ fontWeight: 300 }} variant="h2">
          One{" "}
          <span style={{ color: "#00B6E2", fontWeight: 800 }}>dashboard</span>{" "}
          for all processes
        </Typography>
        <Typography
          textAlign={"left"}
          style={{ width: "70%", marginTop: 20 }}
          variant="h6"
        >
          Budgeting, approvals, provisioning and billing all under one roof.
        </Typography>
        <Link
          style={{
            fontWeight: "bold",
            paddingLeft: 18,
            paddingRight: 18,
            paddingTop: 16,
            paddingBottom: 16,
            textDecoration: "none",
            backgroundColor: "#FF8200",
            color: "#000",
            fontSize: 20,
            borderRadius: 15,
            marginTop: 10,
            width: "15%",
          }}
        >
          Sign up
        </Link>
      </Box>
      <Box
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <img src={dash} height={400} alt="story image" />
        </Box>
      </Box>
    </Box>
  );
}
