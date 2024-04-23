import { Box, Typography } from "@mui/material";
import businessImage from "../../../Images/Screenshot 2024-03-17 at 12.00 1.png";
import "./business.css";

export function CustomStory() {
  return (
    <Box className="container-custom">
      <Box className="inner-container-custom">
        <Typography textAlign={"start"} variant="h2">
          Business{" "}
          <span style={{ color: "#00B6E2", fontWeight: 700 }}>
            Intelligence
          </span>
        </Typography>
        <Typography textAlign={"start"}>
          Cloveda's data driven intelligence will inform your business, lifting
          and imporoving the success of your business.
        </Typography>
      </Box>

      <Box>
        <img className="business-vector" src={businessImage} alt="busy staff" />
      </Box>
    </Box>
  );
}
