import { Box, Link } from "@mui/material";
import logo from "../../Images/logo.png";
import "./style.css";

export function NavBar() {
  return (
    <Box
      className="container-nav"
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box>
        <img src={logo} height="50px" alt="cloveda logo" />
      </Box>
      <Box className="navlinks" flexDirection={"row"}>
        <Link
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            textDecoration: "none",
            color: "#000",
          }}
          href={"#about"}
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
          href={"#budgeting"}
        >
          Our features
        </Link>
        <Link
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            textDecoration: "none",
            color: "#000",
          }}
          href={"#dashboard"}
        >
          Dashboard
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
          href={"#signup"}
        >
          Sign up
        </Link>
      </Box>
    </Box>
  );
}
