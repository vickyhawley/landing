import { Box, Typography } from "@mui/material";

export function About() {
  return (
    <Box style={{ flex: 1 }}>
      <Box>
        <Typography variant={"h2"}>Your Cloud, Your Way</Typography>
        <Typography variant={"h6"}>
          All cloud details of your product in one dashboard
        </Typography>
      </Box>

      <Box>
        <img
          src="./graphic.png"
          alt="two people looking at a dashboard"
          height="400px"
          width="400px"
        />
      </Box>
    </Box>
  );
}
