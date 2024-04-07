import { Box, Typography } from "@mui/material";
import blueWaves from "../../../Images/blueWavesTrimmed.svg";

export function FullTransparency() {
  return (
    <Box
      style={{
        display: "flex",
        flex: 1,
        backgroundImage: `url(${blueWaves})`,
        paddingLeft: "10%",
        paddingRight: "10%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingTop: "5%",
        paddingBottom: "5%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant={"h2"} style={{ width: "50%" }}>
        Full{" "}
        <span style={{ fontWeight: 700, color: "#00B6E2" }}>transparency</span>{" "}
        on all assets
      </Typography>
    </Box>
  );
}
