import { Box, Link, Typography } from "@mui/material";
import "./style.css";
export function Feature() {
  return (
    <Box className="container-feature">
      <Box className="inner-container-feature">
        <Typography
          fontWeight="200"
          color="#fff"
          textAlign="start"
          variant="h2"
        >
          Your <span style={{ fontWeight: 700, color: "#00B6E2" }}>Cloud</span>{" "}
          your way
        </Typography>
        <Typography
          className={"description-feature"}
          color="#fff"
          textAlign="start"
        >
          Customised experience to suit your business needs
        </Typography>
      </Box>
      <Box className="link-container-feature">
        <Link className="link-feature">Sign up</Link>
      </Box>
    </Box>
  );
}
