import { Box, Link } from "@mui/material";
import logo from "../../Images/logo.png";

export function NavBar() {
  return (
    <Box
      style={{
        display: "flex",
        padding: 16,
        flexDirection: "row",
        paddingLeft: "12%",
        paddingRight: "12%",
      }}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box>
        <img src={logo} height="50px" alt="cloveda logo" />
      </Box>
      <Box style={{ justifyContent: "space-between" }} flexDirection={"row"}>
        <Link
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            textDecoration: "none",
            color: "#000",
          }}
        >
          About
        </Link>
        <Link
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            textDecoration: "none",
            color: "#000",
          }}
        >
          Budgeting
        </Link>
        <Link
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            textDecoration: "none",
            color: "#000",
          }}
        >
          Approvals
        </Link>
        <Link
          style={{
            fontWeight: "bold",
            padding: 12,
            textDecoration: "none",
            backgroundColor: "#FF8200",
            color: "#000",
            borderRadius: 10,
            marginLeft: 10,
          }}
        >
          Sign up
        </Link>
      </Box>
    </Box>
  );
}
