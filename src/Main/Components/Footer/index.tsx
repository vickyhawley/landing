import { Box, Link } from "@mui/material";
import logo from "../../Images/logo.png";

export function Footer() {
  return (
    <Box
      flexDirection={"row"}
      style={{
        display: "flex",
        flex: 1,
        paddingLeft: "20%",
        paddingRight: "20%",
        paddingTop: "2%",
        paddingBottom: "2%",
        justifyContent: "space-between",
      }}
    >
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
      <img src={logo} height={80} alt="cloved logo" />
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
