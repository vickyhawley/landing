import { Box, Link } from "@mui/material";
import logo from "../../Images/logo.png";
import "./style.css";

export function Footer() {
  return (
    <Box className="container-footer">
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        <Link
          onClick={() => {}}
          style={{ textDecoration: "none", color: "black" }}
        >
          More information
        </Link>
        <Link
          onClick={() => {}}
          style={{ textDecoration: "none", color: "black" }}
        >
          More information
        </Link>
      </Box>
      <img src={logo} className="logo-footer" alt="cloved logo" />
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        <Link
          onClick={() => {}}
          style={{ textDecoration: "none", color: "black" }}
        >
          More information
        </Link>
        <Link
          onClick={() => {}}
          style={{ textDecoration: "none", color: "black" }}
        >
          More information
        </Link>
      </Box>
    </Box>
  );
}
