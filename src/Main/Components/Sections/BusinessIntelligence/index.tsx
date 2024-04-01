import { Box, Typography } from "@mui/material";
import businessImage from "../../../Images/Screenshot 2024-03-17 at 12.00 1.png";

export function CustomStory() {
  return (
    <Box
      style={{
        paddingLeft: "20%",
        paddingRight: "20%",
        paddingTop: "8%",
        paddingBottom: 40,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography textAlign={"start"} variant="h2">
          Business{" "}
          <span style={{ color: "#00B6E2", fontWeight: 700 }}>
            Intelligence
          </span>
        </Typography>
        <Typography style={{ width: "80%" }} textAlign={"start"}>
          Cloveda's data driven intelligence will inform your business, lifting
          and imporoving the success of your business.
        </Typography>
      </Box>

      <Box>
        <img src={businessImage} alt="busy staff" height={300} />
      </Box>
    </Box>
  );
}
