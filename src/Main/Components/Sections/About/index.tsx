import { Box, Typography } from "@mui/material";
import dashboard from "../../../Images/dashBranded.svg";

export function About() {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <Box
        style={{
          paddingTop: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Typography
          fontWeight={700}
          variant={"h3"}
          style={{ color: "#00B6E2" }}
        >
          Your Cloud, Your Way
        </Typography>
        <Typography style={{ width: "70%" }} variant={"h6"}>
          All cloud details of your product in one dashboard
        </Typography>
      </Box>

      <Box style={{ paddingTop: 20, paddingBottom: 20 }}>
        <img
          src={dashboard}
          alt="two people looking at a dashboard"
          height="400px"
        />
      </Box>
    </Box>
  );
}
