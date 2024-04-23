import { Box, Typography } from "@mui/material";
import dashboard from "../../../Images/graphic.png";
import "./about.css";

export function About() {
  return (
    <Box id="about" className="container-about">
      <Box className="inner-container-about">
        <Typography
          fontWeight={700}
          variant={"h3"}
          className={"title-about"}
          style={{ color: "#00B6E2" }}
        >
          Your Cloud, Your Way
        </Typography>
        <Typography
          className="description-about"
          style={{ width: "70%" }}
          variant={"h6"}
        >
          All cloud details of your product in one dashboard
        </Typography>
      </Box>

      <Box style={{ paddingTop: 20, paddingBottom: 20 }}>
        <img
          src={dashboard}
          alt="two people looking at a dashboard"
          className="image-about"
        />
      </Box>
    </Box>
  );
}
