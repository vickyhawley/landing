import { Box, Link } from "@mui/material";

export function NavBar() {
  return (
    <Box
      style={{
        display: "flex",
        padding: 16,
        flexDirection: "row",
        paddingLeft: 24,
        paddingRight: 24,
      }}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box>
        <img src="./logo.png" height="40px" width="90px" alt="cloveda logo" />
      </Box>
      <Box style={{ justifyContent: "space-between" }} flexDirection={"row"}>
        <Link style={{ paddingLeft: 10, paddingRight: 10 }}>About</Link>
        <Link style={{ paddingLeft: 10, paddingRight: 10 }}>Budgeting</Link>
        <Link style={{ paddingLeft: 10, paddingRight: 10 }}>Approvals</Link>
      </Box>
    </Box>
  );
}