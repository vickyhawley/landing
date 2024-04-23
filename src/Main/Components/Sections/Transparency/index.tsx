import { Box, Typography } from "@mui/material";
import blueWaves from "../../../Images/blueWavesTrimmed.svg";
import "./style.css";

export function FullTransparency() {
  return (
    <Box
      className="container-transparency"
      style={{
        backgroundImage: `url(${blueWaves})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography className="title-transparency" variant={"h2"}>
        Full{" "}
        <span style={{ fontWeight: 700, color: "#00B6E2" }}>transparency</span>{" "}
        on all assets
      </Typography>
    </Box>
  );
}
