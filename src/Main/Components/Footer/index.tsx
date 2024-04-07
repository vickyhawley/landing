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
        paddingTop: "5%",
        paddingBottom: "5%",
        justifyContent: "space-between",
      }}
    >
      <Box style={{ display: "flex", flexDirection: "column" }}>
        {" "}
        <Link>Link one</Link>
        <Link>Link two</Link>
        <Link>Link three</Link>
      </Box>
      <img src={logo} height={80} alt="cloved logo" />
      <Box style={{ display: "flex", flexDirection: "column" }}>
        {" "}
        <Link>Link one</Link>
        <Link>Link two</Link>
        <Link>Link three</Link>
      </Box>
    </Box>
  );
}
