import { Box, Typography } from "@mui/material";
import dashboard from "../../../Images/graphic.png";

export function About() {
  return (
    <Box style={{ flex: 1 }}>
      <Box>
        <Typography fontWeight={700} variant={"h2"}>
          Your Cloud, Your Way
        </Typography>
        <Typography variant={"h6"}>
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
